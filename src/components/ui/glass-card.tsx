'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hover = true,
  tilt = false,
  delay = 0,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<{
    rotateX: number;
    rotateY: number;
    shineX: number;
    shineY: number;
  }>({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Restrained, subtle 3D tilt angles (max +/- 5 degrees)
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4.5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4.5;

    // Specular light position in percentage
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTiltStyle({ rotateX, rotateY, shineX, shineY });
  };

  const handleMouseEnter = () => {
    if (tilt && !shouldReduce) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (tilt && !shouldReduce) {
      setIsHovered(false);
      setTiltStyle({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: shouldReduce ? 0.01 : 0.55,
        delay: shouldReduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        tilt && isHovered && !shouldReduce
          ? {
              transform: `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg) translateY(-4px)`,
              transition: 'transform 0.12s ease-out',
            }
          : {
              transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }
      }
      className={cn(
        'glass-panel rounded-2xl p-6 sm:p-8',
        'border border-white/[0.08] hover:border-white/[0.18]',
        'focus-within:border-[#4F8CFF]/50 focus-within:ring-2 focus-within:ring-[#4F8CFF]/20',
        'transition-colors duration-300 relative overflow-hidden group',
        hover && !tilt && 'hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_rgba(79,140,255,0.12)]',
        className
      )}
    >
      {/* Subtler specular sheen reflection tracking cursor */}
      {tilt && isHovered && !shouldReduce && (
        <div
          className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${tiltStyle.shineX}% ${tiltStyle.shineY}%, rgba(79, 140, 255, 0.4), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Top fine edge highlight line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
