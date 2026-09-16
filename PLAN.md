# QORVAYN Next.js Production Website Plan

## 1. Objective
Build a complete, production-grade, multi-page Next.js website for QORVAYN in `c:\Users\ryant\Downloads\qorvayn2` with TypeScript strict mode, App Router, Tailwind CSS, Framer Motion, React Three Fiber, Lucide icons, full accessibility, metadata, and zero build errors.

## 2. Architecture & File Structure
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    sitemap.ts
    robots.ts
    about/page.tsx
    products/page.tsx
    products/ryneka/page.tsx
    products/skypics/page.tsx
    products/goalwear/page.tsx
    team/page.tsx
    contact/page.tsx
    contact/thank-you/page.tsx
    future/page.tsx
    privacy/page.tsx
    terms/page.tsx
  components/
    layout/
      navbar.tsx
      mobile-menu.tsx
      footer.tsx
    ui/
      button.tsx
      container.tsx
      section-heading.tsx
      glass-card.tsx
      magnetic-button.tsx
      reveal.tsx
      page-hero.tsx
    three/
      hero-scene.tsx
      ecosystem-scene.tsx
      product-scene.tsx
      signal-scene.tsx
      scene-wrapper.tsx
    sections/
      home-hero.tsx
      ecosystem-grid.tsx
      values-grid.tsx
      mission-section.tsx
      story-section.tsx
      final-cta.tsx
      product-hero.tsx
      product-concept-section.tsx
      team-grid.tsx
      contact-form.tsx
      email-capture.tsx
  data/
    site.ts
    products.ts
    team.ts
  lib/
    utils.ts
    metadata.ts
    schema.ts
  types/
    index.ts
```

## 3. Strict Guardrails & Official Content
- Founder & CEO: Ryan Zannah
- Founded: 10 March 2026, Bangladesh, Remote-first
- Email: theqorvayn@gmail.com
- Products: RYNEKA, SkyPics, GoalWear
- No fake claims, metrics, testimonials, or physical addresses
- Legal pages marked as draft templates

## 4. Execution Steps
1. Archive static HTML files to `legacy_static/`.
2. Configure `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`.
3. Install dependencies (`next`, `react`, `react-dom`, `three`, `@types/three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, etc.).
4. Create `AGENTS.md`.
5. Implement design tokens, globals.css, and typography (Space Grotesk + Inter).
6. Implement shared layout (Navbar, MobileMenu, Footer) and UI components.
7. Implement 4 lightweight Three.js scenes with `useReducedMotion` fallbacks.
8. Implement all 12 routes with accurate metadata and semantic HTML.
9. Implement SEO, sitemap.ts, robots.ts, Organization JSON-LD, and 404 page.
10. Run `npm run lint` and `npm run build` until 100% error-free.
