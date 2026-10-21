'use client';

import { usePathname } from 'next/navigation';

export function AmbientBackground() {
  const pathname = usePathname();

  const getGradientStyle = () => {
    switch (pathname) {
      case '/about':
        return 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79, 140, 255, 0.14), rgba(69, 215, 255, 0.06), transparent 70%)';
      case '/products':
        return 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(69, 215, 255, 0.14), rgba(79, 140, 255, 0.08), transparent 70%)';
      case '/team':
        return 'radial-gradient(ellipse 70% 50% at 30% 10%, rgba(125, 176, 255, 0.12), rgba(79, 140, 255, 0.05), transparent 70%)';
      case '/future':
        return 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(79, 140, 255, 0.16), rgba(147, 51, 234, 0.06), transparent 75%)';
      case '/contact':
        return 'radial-gradient(ellipse 75% 50% at 70% 10%, rgba(69, 215, 255, 0.12), rgba(79, 140, 255, 0.06), transparent 70%)';
      default:
        return 'radial-gradient(ellipse 80% 55% at 50% -15%, rgba(79, 140, 255, 0.15), rgba(69, 215, 255, 0.05), transparent 70%)';
    }
  };

  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top route-reactive radial glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-75"
        style={{ background: getGradientStyle() }}
      />

      {/* Primary slow drifting orb (desktop only to keep mobile compositor lightweight) */}
      <div
        className="hidden md:block absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.06)_0%,transparent_70%)] animate-float-slow"
      />

      {/* Secondary cyan drifting orb */}
      <div
        className="hidden md:block absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(69,215,255,0.045)_0%,transparent_70%)] animate-float-reverse"
      />

      {/* Subtle bottom depth glow */}
      <div
        className="hidden md:block absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.03)_0%,transparent_70%)] animate-float-slow"
      />

      {/* Fine architectural grid overlay */}
      <div
        className="hidden md:block absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
    </div>
  );
}
