'use client';

import dynamic from 'next/dynamic';

export const LazyHeroScene = dynamic(
  () => import('@/components/three/hero-scene').then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-gradient-radial from-[rgba(79,140,255,0.07)] via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    ),
  }
);

export const LazyEcosystemScene = dynamic(
  () => import('@/components/three/ecosystem-scene').then((mod) => mod.EcosystemScene),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.06)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />
    ),
  }
);
