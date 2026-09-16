/**
 * QORVAYN — WebGL Shader Background
 * Reusable class that compiles & runs a GLSL fragment shader.
 *
 * Usage:
 *   const bg = new QShader('canvas-id', fragmentShaderSource);
 *   bg.start();
 */
class QShader {
  constructor(canvasId, fragmentSrc) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.fragmentSrc = fragmentSrc;
    this.mouse = { x: 0.5, y: 0.5 };
    this.running = false;
    this.raf = null;
  }

  /* ---- Standard vertex shader (same for every page) ---- */
  static get VERTEX_SRC() {
    return `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
  }

  _syncSize() {
    const w = this.canvas.clientWidth  || 1280;
    const h = this.canvas.clientHeight || 720;
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width  = w;
      this.canvas.height = h;
    }
  }

  _compileShader(type, src) {
    const s = this.gl.createShader(type);
    this.gl.shaderSource(s, src);
    this.gl.compileShader(s);
    if (!this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
      console.warn('[QShader] compile error:', this.gl.getShaderInfoLog(s));
    }
    return s;
  }

  start() {
    const canvas = this.canvas;
    if (!canvas) return;
    this._syncSize();

    this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!this.gl) { console.warn('[QShader] WebGL not supported'); return; }
    const gl = this.gl;

    const prog = gl.createProgram();
    gl.attachShader(prog, this._compileShader(gl.VERTEX_SHADER,   QShader.VERTEX_SRC));
    gl.attachShader(prog, this._compileShader(gl.FRAGMENT_SHADER, this.fragmentSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    this.prog = prog;

    /* Full-screen quad */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    /* Uniform locations */
    this.uTime  = gl.getUniformLocation(prog, 'u_time');
    this.uRes   = gl.getUniformLocation(prog, 'u_resolution');
    this.uMouse = gl.getUniformLocation(prog, 'u_mouse');

    /* Resize observer */
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(() => this._syncSize()).observe(canvas);
    }

    /* Mouse tracking — normalised 0..1, Y-flipped for GLSL convention */
    window.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      if (r.width && r.height) {
        this.mouse.x = (e.clientX - r.left) / r.width;
        this.mouse.y = 1.0 - (e.clientY - r.top) / r.height;
      }
    });

    /* Touch tracking */
    window.addEventListener('touchmove', e => {
      const r = canvas.getBoundingClientRect();
      if (r.width && r.height && e.touches.length) {
        this.mouse.x = (e.touches[0].clientX - r.left) / r.width;
        this.mouse.y = 1.0 - (e.touches[0].clientY - r.top) / r.height;
      }
    }, { passive: true });

    this.running = true;
    this._render(0);
  }

  _render(t) {
    if (!this.running) return;
    const gl = this.gl;
    this._syncSize();
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    if (this.uTime)  gl.uniform1f(this.uTime,  t * 0.001);
    if (this.uRes)   gl.uniform2f(this.uRes,   this.canvas.width, this.canvas.height);
    if (this.uMouse) gl.uniform2f(this.uMouse, this.mouse.x, this.mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    this.raf = requestAnimationFrame(ts => this._render(ts));
  }

  stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
