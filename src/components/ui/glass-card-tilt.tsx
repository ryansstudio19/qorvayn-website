'use client';

import { useRef } from 'react';

interface GlassCardTiltProps {
  children: React.ReactNode;
  className: string;
}

export function GlassCardTilt({ children, className }: GlassCardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      !cardRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4.5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4.5;
    const shineX = Math.round((x / rect.width) * 100);
    const shineY = Math.round((y / rect.height) * 100);

    cardRef.current.style.transition = 'transform 0.12s ease-out';
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

    if (shineRef.current) {
      shineRef.current.style.opacity = '0.1';
      shineRef.current.style.background = `radial-gradient(circle 280px at ${shineX}% ${shineY}%, rgba(79, 140, 255, 0.4), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    if (shineRef.current) {
      shineRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div
        ref={shineRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
