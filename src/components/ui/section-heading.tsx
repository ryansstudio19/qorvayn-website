import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-display font-bold text-[#F5F7FA] leading-tight tracking-tight',
          'text-3xl sm:text-4xl lg:text-5xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
