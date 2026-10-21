'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import type { ProductId } from '@/data/products';

const ProductSceneCanvas = dynamic(
  () => import('./product-scene-canvas').then((mod) => mod.ProductSceneCanvas),
  { ssr: false }
);

export function ProductScene({ variant }: { variant: ProductId }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGlSupported(false);
    } catch {
      setWebGlSupported(false);
    }

    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const rafId = requestAnimationFrame(() => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(() => setMounted(true), { timeout: 200 });
      } else {
        timeoutId = setTimeout(() => setMounted(true), 80);
      }
    });

    return () => {
      window.removeEventListener('resize', check);
      cancelAnimationFrame(rafId);
      if (idleId !== null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, []);

  if (!mounted || shouldReduce || !webGlSupported) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,140,255,0.06)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return <ProductSceneCanvas variant={variant} isMobile={isMobile} />;
}
