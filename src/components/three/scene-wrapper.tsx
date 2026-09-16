'use client';

import { useReducedMotion } from 'framer-motion';

interface SceneWrapperProps {
  children: React.ReactNode;
  fallbackClassName?: string;
}

export function SceneWrapper({
  children,
  fallbackClassName = 'absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D]',
}: SceneWrapperProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={fallbackClassName} aria-hidden="true" />;
  }

  return <>{children}</>;
}
