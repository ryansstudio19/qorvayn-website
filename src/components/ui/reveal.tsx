'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { DURATION, EASE_OUT, VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

/** Scroll-triggered fade for a single block. */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 24 : 0,
    x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.base, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child's entrance. */
  stagger?: number;
  delay?: number;
  /** Animate on mount instead of when scrolled into view (for above-the-fold content). */
  onMount?: boolean;
  as?: 'div' | 'ul' | 'ol' | 'section';
}

/**
 * Scroll-triggered container that reveals its `StaggerItem` children one after another.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  onMount = false,
  as = 'div',
}: StaggerProps) {
  const shouldReduce = useReducedMotion();
  const Component = motion[as];

  if (shouldReduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      {...(onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT })}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: 'div' | 'li' | 'span' | 'p' | 'h1' | 'h2';
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
  as = 'div',
}: StaggerItemProps) {
  const Component = motion[as];
  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
