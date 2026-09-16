import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({
  children,
  className,
  size = 'lg',
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-[1280px]',
    full: 'max-w-full',
  };
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
