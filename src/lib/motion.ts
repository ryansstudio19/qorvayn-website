import type { Transition, Variants } from 'framer-motion';

/** Shared motion tokens so every animation on the site feels like one system. */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.6,
  slow: 0.9,
} as const;

/** Snappy spring used for hover / tap feedback on interactive elements. */
export const HOVER_SPRING: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 28,
  mass: 0.6,
};

/** Default in-view trigger: animate once, slightly before the element is fully on screen. */
export const VIEWPORT = { once: true, margin: '-60px' } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
