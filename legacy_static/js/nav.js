/**
 * QORVAYN — nav.js v2
 * Unified page utilities: nav, mobile menu, scroll reveal,
 * stat counters, progress bars, accordions, newsletter.
 */
(function () {

  /* =====================================================
     1. ACTIVE NAV LINK
     ===================================================== */
  function setActiveNav() {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';

    document.querySelectorAll('[data-nav]').forEach(link => {
      const t = link.getAttribute('data-nav');
      const isActive =
        (t === 'home'    && (file === '' || file === 'index.html')) ||
        (t !== 'home'    && file === t + '.html');

      // Both desktop .nav-link and mobile .mobile-nav-link
      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* =====================================================
     2. MOBILE MENU
     ===================================================== */
  function initMobileMenu() {
    const btn  = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        btn.focus();
      }
    });
  }

  /* =====================================================
     3. HEADER SCROLL
     ===================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const update = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* =====================================================
     4. SCROLL REVEAL — uses .visible class
     ===================================================== */
  function initScrollReveal() {
    const sel = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-up';
    const els = document.querySelectorAll(sel);
    if (!els.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => io.observe(el));
  }

  /* =====================================================
     5. STAT COUNTERS
     ===================================================== */
  function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const dur    = 1800;
        const start  = performance.now();
        const isFloat = String(target).includes('.');

        const step = now => {
          const p   = Math.min((now - start) / dur, 1);
          const val = easeOutCubic(p) * target;
          el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = prefix + (isFloat ? target.toFixed(1) : target) + suffix;
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(el => io.observe(el));
  }

  /* =====================================================
     6. PROGRESS BARS
     ===================================================== */
  function initProgressBars() {
    const bars = document.querySelectorAll('.progress-fill');
    if (!bars.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => io.observe(b));
  }

  /* =====================================================
     7. ACCORDION
     ===================================================== */
  function initAccordion() {
    document.querySelectorAll('.accordion-item').forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      const body    = item.querySelector('.accordion-body');
      if (!trigger || !body) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.accordion-item.open').forEach(other => {
          other.classList.remove('open');
          const ob = other.querySelector('.accordion-body');
          if (ob) ob.classList.remove('open');
        });
        // Open this one
        if (!isOpen) {
          item.classList.add('open');
          body.classList.add('open');
        }
      });

      trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.click(); }
      });
    });
  }

  /* =====================================================
     8. NEWSLETTER FORM
     ===================================================== */
  function initNewsletter() {
    const form     = document.getElementById('newsletter-form');
    const feedback = document.getElementById('newsletter-feedback');
    if (!form || !feedback) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        form.style.transition = 'opacity 0.4s';
        form.style.opacity = '0';
        form.style.pointerEvents = 'none';
        setTimeout(() => { form.classList.add('hidden'); feedback.classList.remove('hidden'); }, 400);
        input.value = '';
      }
    });
  }

  /* =====================================================
     9. CONTACT FORM
     ===================================================== */
  function initContactForm() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    if (!form || !success) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.transition = 'opacity 0.5s';
      form.style.opacity = '0';
      setTimeout(() => {
        form.classList.add('hidden');
        success.classList.remove('hidden');
      }, 500);
    });
  }

  /* =====================================================
     10. YEAR
     ===================================================== */
  function initYear() {
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* =====================================================
     EASING
     ===================================================== */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  /* =====================================================
     INIT
     ===================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initMobileMenu();
    initHeaderScroll();
    initScrollReveal();
    initCounters();
    initProgressBars();
    initAccordion();
    initNewsletter();
    initContactForm();
    initYear();
  });

})();
