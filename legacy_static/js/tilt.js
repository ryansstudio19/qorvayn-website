/**
 * QORVAYN — 3D Card Tilt
 * Applies a real-time perspective tilt to .tilt-card elements
 * based on mouse position, creating a genuine 3D depth effect.
 *
 * Usage:  QTilt.init();   // auto-selects all .tilt-card
 *         QTilt.init('.my-selector');
 */
const QTilt = {
  defaults: {
    max:         12,      // max tilt degrees
    perspective: 1200,    // CSS perspective (px)
    scale:       1.025,   // subtle zoom on hover
    speed:       400,     // transition speed (ms) while active
    resetSpeed:  600,     // transition speed (ms) on leave
    glare:       true,    // enable shine overlay
    gyro:        true,    // enable device gyroscope (mobile)
  },

  init(selector = '.tilt-card', opts = {}) {
    const cfg = { ...this.defaults, ...opts };
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => this._bind(card, cfg));

    /* Device orientation (mobile gyroscope) */
    if (cfg.gyro && typeof DeviceOrientationEvent !== 'undefined') {
      let enabled = false;
      window.addEventListener('deviceorientation', e => {
        if (!enabled) { enabled = true; }
        const b  = e.beta  || 0;   // -180..180 (forward tilt)
        const g  = e.gamma || 0;   // -90..90  (side tilt)
        const tX = (g / 90)  * cfg.max;
        const tY = (b / 180) * cfg.max;
        cards.forEach(card => {
          card.style.transition = `transform ${cfg.speed}ms cubic-bezier(0.03,0.98,0.52,0.99)`;
          card.style.transform  = `perspective(${cfg.perspective}px) rotateX(${-tY}deg) rotateY(${tX}deg) scale3d(${cfg.scale},${cfg.scale},${cfg.scale})`;
          this._updateShine(card, 50 + tX * 3, 50 - tY * 3);
        });
      }, { passive: true });
    }
  },

  _bind(card, cfg) {
    /* Inject shine element if needed */
    if (cfg.glare && !card.querySelector('.tilt-shine')) {
      const shine = document.createElement('div');
      shine.className = 'tilt-shine';
      card.appendChild(shine);
    }

    card.addEventListener('mouseenter', () => {
      card.style.transition = `transform ${cfg.speed}ms cubic-bezier(0.03,0.98,0.52,0.99), box-shadow 0.3s ease`;
      card.style.willChange = 'transform';
    });

    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);  // -1 .. 1
      const dy     = (e.clientY - cy) / (rect.height / 2);  // -1 .. 1
      const rotY   =  dx * cfg.max;
      const rotX   = -dy * cfg.max;

      card.style.transform = `perspective(${cfg.perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${cfg.scale},${cfg.scale},${cfg.scale})`;

      /* Shine follows cursor */
      const mx = ((e.clientX - rect.left) / rect.width)  * 100;
      const my = ((e.clientY - rect.top)  / rect.height) * 100;
      this._updateShine(card, mx, my);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = `transform ${cfg.resetSpeed}ms cubic-bezier(0.03,0.98,0.52,0.99), box-shadow 0.5s ease`;
      card.style.transform  = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      const shine = card.querySelector('.tilt-shine');
      if (shine) shine.style.opacity = '0';
    });
  },

  _updateShine(card, mx, my) {
    const shine = card.querySelector('.tilt-shine');
    if (!shine) return;
    shine.style.setProperty('--mx', mx + '%');
    shine.style.setProperty('--my', my + '%');
    shine.style.opacity = '1';
  }
};
