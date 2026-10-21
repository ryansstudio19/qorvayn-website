'use client';

import { useEffect, useRef } from 'react';

export function AmbientBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run cursor spotlight on desktop devices with a precision pointer
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let isMoving = false;

    const render = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      if (spotlight) {
        spotlight.style.background = `radial-gradient(700px circle at ${Math.round(currentX)}px ${Math.round(currentY)}px, rgba(79, 140, 255, 0.075), transparent 75%)`;
      }

      // If still interpolating towards target, keep looping; else sleep
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId = requestAnimationFrame(render);
      } else {
        isMoving = false;
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (currentX === -1000) {
        currentX = targetX;
        currentY = targetY;
      }
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cursor Ambient Spotlight - updated directly via ref with zero React re-renders */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 transition-opacity duration-300 opacity-75"
      />

      {/* Floating Chromatic Light Orbs */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.06)_0%,transparent_70%)] blur-3xl animate-float-slow" />
      <div className="absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(69,215,255,0.045)_0%,transparent_70%)] blur-3xl animate-float-reverse" />
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.03)_0%,transparent_70%)] blur-3xl animate-float-slow" />

      {/* Subtle Ambient Grid Layer */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}
