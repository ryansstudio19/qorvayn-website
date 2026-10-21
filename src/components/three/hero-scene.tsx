'use client';

import dynamic from 'next/dynamic';
import { ShaderBackground } from '@/components/canvas/shader-background';
import { useCanRun3D } from '@/lib/use-can-run-3d';

const DynamicHeroSceneCanvas = dynamic(
  () => import('./hero-scene-canvas').then((mod) => mod.HeroSceneCanvas),
  { ssr: false }
);

export function HeroScene() {
  const canRun3D = useCanRun3D();

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <ShaderBackground preset="hero" intensity={1.15} className="opacity-95" />
      {canRun3D && <DynamicHeroSceneCanvas />}
    </div>
  );
}
