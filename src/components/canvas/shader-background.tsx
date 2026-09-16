'use client';

import { useEffect, useRef, useState } from 'react';

export type ShaderPreset = 'hero' | 'aurora' | 'grid' | 'signal' | 'sky';

interface ShaderBackgroundProps {
  preset?: ShaderPreset;
  className?: string;
  intensity?: number;
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const SHADER_PRESETS: Record<ShaderPreset, string> = {
  hero: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;

    vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
    vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}
    vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}
    
    float snoise(vec2 v){
      const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
      vec2 i=floor(v+dot(v,C.yy));
      vec2 x0=v-i+dot(i,C.xx);
      vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
      vec4 x12=x0.xyxy+C.xxzz;
      x12.xy-=i1;
      i=mod289(i);
      vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
      vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
      m=m*m;m=m*m;
      vec3 x=2.*fract(p*C.www)-1.;
      vec3 h=abs(x)-.5;
      vec3 ox=floor(x+.5);
      vec3 a0=x-ox;
      m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
      vec3 g;
      g.x=a0.x*x0.x+h.x*x0.y;
      g.yz=a0.yz*x12.xz+h.yz*x12.yw;
      return 130.*dot(m,g);
    }

    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*u_resolution)/min(u_resolution.x,u_resolution.y);
      float t=u_time*.24;
      vec2 mOff=(u_mouse-.5)*.14;
      uv+=mOff;
      
      // Shift focal center slightly to the right to leave negative space for headline
      uv.x -= 0.15;

      float dist=length(uv);
      float angle=atan(uv.y,uv.x);
      
      float n1=snoise(vec2(uv.x*2.0+sin(t*.35),uv.y*2.0+cos(t*.28)));
      float n2=snoise(vec2(uv.x*4.2-t*.28,uv.y*4.2+t*.22));
      
      float fil=smoothstep(.70,.98,sin(dist*13.-t*1.7+n1*1.5));
      float fil2=smoothstep(.76,.99,cos(dist*20.+t*1.3+n2*1.8));
      float fil3=smoothstep(.65,.95,sin(dist*9.-t*1.1+angle*3.+n1*0.9));
      
      vec3 bg=vec3(.027,.035,.051);
      vec3 bgG=vec3(.043,.063,.11);
      vec3 blue=vec3(.25,.52,.98);
      vec3 cyan=vec3(.28,.85,.98);
      vec3 viol=vec3(.42,.24,.78);
      
      float vign=smoothstep(1.4,.12,dist);
      vec3 col=mix(bg,bgG,(n1*.5+.5)*vign);
      
      // Radiant pulsating core
      col+=blue*exp(-dist*2.5)*.95*(0.75+0.25*sin(t*1.2));
      
      // Luminous energetic filaments
      col+=blue*fil*.48*vign*u_intensity;
      col+=cyan*fil2*.38*vign*u_intensity;
      col+=viol*fil3*.22*vign*u_intensity;
      
      // Subtle starry grid dust
      vec2 gUv=fract(uv*18.+vec2(sin(t*.2),cos(t*.15)))-.5;
      float part=smoothstep(.05,.01,length(gUv))*snoise(floor(uv*18.)+t*.05);
      col+=vec3(.85,.94,1.)*max(0.,part)*vign*.5;
      
      gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(.92)),1.);
    }
  `,

  aurora: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;

    void main(){
      vec2 uv=gl_FragCoord.xy/u_resolution.xy;
      float t=u_time*0.35;
      vec2 m=u_mouse*0.25;
      
      float b1=sin(uv.x*3.14+t+m.x*2.)*.5+.5;
      float b2=sin(uv.x*5.2-t*0.65+m.x*1.4)*.5+.5;
      float b3=cos(uv.x*2.4+t*0.45-m.x)*.5+.5;
      
      float yBand1=smoothstep(.0,.48,1.-abs(uv.y-(.32+b1*.22+m.y*.12)));
      float yBand2=smoothstep(.0,.38,1.-abs(uv.y-(.52+b2*.16+m.y*.08)));
      float yBand3=smoothstep(.0,.32,1.-abs(uv.y-(.68+b3*.14)));
      
      vec3 c1=vec3(.15,.45,.98)*yBand1*0.75;
      vec3 c2=vec3(.18,.86,.96)*yBand2*0.55;
      vec3 c3=vec3(.55,.32,.95)*yBand3*0.40;
      
      vec3 bg=vec3(.027,.035,.051);
      float vign=smoothstep(1.35,0.25,length(uv*2.-1.));
      vec3 col=bg+(c1+c2+c3)*vign*u_intensity;
      
      gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(.9)),1.);
    }
  `,

  grid: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;

    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*u_resolution)/min(u_resolution.x,u_resolution.y);
      float t=u_time*0.28;
      vec2 m=(u_mouse-.5)*.16;
      uv+=m;

      vec2 gUv=uv;
      gUv.y+=t*.18;
      float px=fract(gUv.x*9.);
      float py=fract(gUv.y*9.);
      float grid=max(smoothstep(.96,1.,px),smoothstep(.96,1.,py));
      grid+=max(smoothstep(.0,.04,px),smoothstep(.0,.04,py));

      float d=length(uv);
      float ring=smoothstep(.025,0.,abs(sin(d*14.-t*2.2)))*.65;

      vec3 bg=vec3(.027,.035,.051);
      vec3 gridC=vec3(.22,.54,.98);
      vec3 ringC=vec3(.32,.85,1.);
      float vign=smoothstep(1.4,.22,d);
      
      vec3 col=bg+gridC*grid*.32*vign*u_intensity+ringC*ring*vign*u_intensity;
      col+=vec3(.08,.12,.22)*smoothstep(1.,.0,d)*.75;
      
      gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(.9)),1.);
    }
  `,

  signal: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;

    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*u_resolution)/min(u_resolution.x,u_resolution.y);
      float t=u_time*0.42;
      vec2 m=(u_mouse-.5)*.06;
      uv+=m;

      float d=length(uv);
      float a=atan(uv.y,uv.x);
      float tunnel=fract(1./(d+0.015)-t*1.1);
      float ray=smoothstep(.97,1.,sin(a*8.+t*.6))*.5+.5;
      float star=smoothstep(.94,1.,tunnel)*ray;

      vec2 sUv=uv;
      sUv*=1.+d*d*.5;
      float streaks=0.;
      for(int i=0;i<6;i++){
        float fi=float(i);
        vec2 dir=vec2(cos(fi*1.047),sin(fi*1.047));
        float proj=dot(sUv,dir);
        float perp=length(sUv-dir*proj);
        streaks+=smoothstep(.04,.0,perp)*smoothstep(-0.1,1.,proj)*.4;
      }

      vec3 bg=vec3(.027,.035,.051);
      vec3 starC=vec3(.65,.88,1.);
      vec3 streakC=vec3(.42,.75,1.);
      vec3 col=bg+starC*star*0.85*u_intensity+streakC*streaks*u_intensity;
      col+=vec3(.09,.14,.28)*smoothstep(.85,.0,d);
      
      float vign=smoothstep(1.35,.2,d);
      col*=vign;
      gl_FragColor=vec4(pow(max(col,vec3(0.)),vec3(.9)),1.);
    }
  `,

  sky: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_intensity;

    void main(){
      vec2 uv=gl_FragCoord.xy/u_resolution.xy;
      float t=u_time*0.18;
      vec2 m=u_mouse*0.2;

      // Atmospheric gradient layers
      float horizon = smoothstep(0.0, 0.65, uv.y + m.y * 0.1);
      
      // Drifting ethereal cloud bands
      float c1 = sin(uv.x * 4.2 + t * 0.7 + sin(uv.y * 5.0 + t * 0.5)) * 0.5 + 0.5;
      float c2 = cos(uv.x * 6.5 - t * 0.4 + cos(uv.y * 4.0 - t * 0.3)) * 0.5 + 0.5;
      float c3 = sin(uv.x * 9.0 + t * 0.3) * 0.5 + 0.5;
      
      float cloudLayer = (c1 * 0.5 + c2 * 0.35 + c3 * 0.15);
      float cloudMask = smoothstep(0.2, 0.85, cloudLayer) * smoothstep(0.05, 0.45, uv.y) * smoothstep(0.95, 0.55, uv.y);

      // Nature & Sky Palette
      vec3 deepMidnight = vec3(0.02, 0.03, 0.08); // #050816 deep base
      vec3 deepNavy = vec3(0.04, 0.07, 0.14);     // #0B1120
      vec3 twilightViolet = vec3(0.35, 0.18, 0.65); // #8B5CF6 twilight
      vec3 skyBlue = vec3(0.18, 0.62, 0.95);       // #38BDF8
      vec3 dawnWarmth = vec3(0.75, 0.45, 0.55);    // Horizon warmth

      // Base vertical sky gradient
      vec3 col = mix(deepMidnight, deepNavy, horizon);
      
      // Horizon glow (twilight & dawn transition)
      float horizonGlow = smoothstep(0.45, 0.15, abs(uv.y - 0.28 + m.y * 0.08));
      col += mix(dawnWarmth, twilightViolet, uv.x) * horizonGlow * 0.35 * u_intensity;

      // Soft luminous cloud highlights in sky blue & cyan
      col += skyBlue * cloudMask * 0.28 * u_intensity;
      col += twilightViolet * (1.0 - cloudMask) * horizonGlow * 0.22 * u_intensity;

      // Subtle celestial stars in upper atmosphere
      float stars = fract(sin(dot(floor(uv * 120.0), vec2(12.9898, 78.233))) * 43758.5453);
      float starMask = step(0.988, stars) * smoothstep(0.5, 0.95, uv.y);
      float starTwinkle = 0.5 + 0.5 * sin(t * 3.0 + stars * 6.28);
      col += vec3(0.85, 0.95, 1.0) * starMask * starTwinkle * 0.6 * u_intensity;

      // Subtle vignette for text readability
      float vign = smoothstep(1.3, 0.3, length(uv * 2.0 - 1.0));
      col *= (0.7 + 0.3 * vign);

      gl_FragColor = vec4(pow(max(col, vec3(0.0)), vec3(0.92)), 1.0);
    }
  `,
};

export function ShaderBackground({
  preset = 'hero',
  className = '',
  intensity = 1.0,
}: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Create WebGL context
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
    });

    if (!gl) {
      setWebglSupported(false);
      return;
    }

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('[ShaderBackground] Compile error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = createShader(
      gl.FRAGMENT_SHADER,
      SHADER_PRESETS[preset] || SHADER_PRESETS.hero
    );

    if (!vertShader || !fragShader) {
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('[ShaderBackground] Link error:', gl.getProgramInfoLog(program));
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uIntensity = gl.getUniformLocation(program, 'u_intensity');

    if (uIntensity) {
      gl.uniform1f(uIntensity, intensity);
    }

    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const resize = () => {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let animationFrameId: number;
    const startTime = performance.now();

    const render = (now: number) => {
      if (!gl || !canvas) return;

      const elapsed = (now - startTime) * 0.001;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, currentMouseX, currentMouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render(performance.now());

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (gl) {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
      }
    };
  }, [preset, intensity]);

  if (!webglSupported) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D] ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
