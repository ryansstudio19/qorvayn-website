import { cn } from '@/lib/utils';
import { GlassCardTilt } from './glass-card-tilt';

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
}: GlassCardProps) {
  const mergedClassName = cn(
    'glass-panel rounded-2xl p-6 sm:p-8',
    'border border-white/[0.08] hover:border-white/[0.18]',
    'focus-within:border-[#4F8CFF]/50 focus-within:ring-2 focus-within:ring-[#4F8CFF]/20',
    'transition-colors duration-300 relative overflow-hidden group',
    hover &&
      !tilt &&
      'hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_rgba(79,140,255,0.12)]',
    className
  );

  if (tilt) {
    return (
      <GlassCardTilt className={mergedClassName}>
        {children}
      </GlassCardTilt>
    );
  }

  return (
    <div className={mergedClassName}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
