'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PulseProps {
  children?: React.ReactNode;
  className?: string;
}

/** Soft breathing status indicator (replaces Tailwind's `animate-pulse`). */
export function Pulse({ children, className }: PulseProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.span
      className={cn('inline-flex', className)}
      animate={shouldReduce ? undefined : { opacity: [1, 0.4, 1], scale: [1, 0.88, 1] }}
      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
      aria-hidden="true"
    >
      {children}
    </motion.span>
  );
}
