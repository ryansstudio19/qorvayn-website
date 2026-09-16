# AGENTS.md — QORVAYN Engineering Reference

This file documents the stack, conventions, and strict rules for QORVAYN's official website.

## Tech Stack
- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript (Strict mode enabled, never use `any`)
- **Styling:** Tailwind CSS (configured in `tailwind.config.ts` and `src/app/globals.css`)
- **Motion & Interactions:** Framer Motion (respects `useReducedMotion`)
- **3D Graphics:** React Three Fiber (`@react-three/fiber`) & Drei (`@react-three/drei`) for lightweight, abstract, procedural scenes
- **Icons:** Lucide React (`lucide-react`)
- **Typography:** `Space Grotesk` (Display/Headlines) and `Inter` (Body/UI) loaded via `next/font/google`
- **Metadata & SEO:** Native Next.js Metadata API, `sitemap.ts`, `robots.ts`, Schema.org Organization JSON-LD

## Key Commands
```bash
npm run dev        # Run Next.js local development server (port 3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint validation
npm run typecheck  # Run TypeScript type check (tsc --noEmit)
```

## Architectural Conventions
- **Component Architecture:** Small, composable, typed components.
- **Import Alias:** Use `@/` for all internal imports (maps to `./src/*`).
- **Rendering Strategy:**
  - Use React Server Components (`RSC`) by default.
  - Use `"use client"` only for components that require browser APIs, forms, Framer Motion, or Canvas / Three.js.
  - Lazy load Three.js Canvas components using `next/dynamic` with `ssr: false`.
- **Accessibility:**
  - Semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`).
  - Skip-to-content link on top of body.
  - Visible keyboard focus rings (`focus-visible`).
  - `aria-label` on interactive icon buttons.
  - `prefers-reduced-motion` compliance.

## Project Boundaries & Strict Guardrails
- **No unverified claims:** Never claim funding, unreleased features, live shopping checkouts, fake users/testimonials, fake team members, or physical office locations.
- **Official Details:**
  - Founder & CEO: Ryan Zannah
  - Founded: 10 March 2026
  - Country: Bangladesh
  - Operations: Remote-first
  - Public contact: `theqorvayn@gmail.com`
- **Team Rules:** Display roles data-driven. Team members may be shown as "Core Team" or specific roles based on team consent.
- **Legal Content:** The `/privacy` and `/terms` pages are draft templates and must display a prominent disclaimer.
