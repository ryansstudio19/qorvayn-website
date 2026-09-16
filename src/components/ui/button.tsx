'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'cyan';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  'aria-label'?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
  external,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold tracking-wide rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8CFF] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const variants: Record<Variant, string> = {
    primary:
      'bg-[#4F8CFF] text-white hover:bg-[#7DB0FF] hover:shadow-[0_0_30px_rgba(79,140,255,0.45)] active:scale-[0.98]',
    secondary:
      'bg-transparent border border-white/20 text-[#F5F7FA] hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#94A3B8] hover:text-[#F5F7FA] hover:bg-white/5 active:scale-[0.98]',
    cyan:
      'bg-[#45D7FF] text-[#07090D] hover:bg-[#7EEAFF] hover:shadow-[0_0_30px_rgba(69,215,255,0.45)] active:scale-[0.98]',
  };

  const sizes: Record<Size, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
