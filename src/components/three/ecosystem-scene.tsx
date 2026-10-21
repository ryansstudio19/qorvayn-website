'use client';

import dynamic from 'next/dynamic';
import { useCanRun3D } from '@/lib/use-can-run-3d';

const DynamicEcosystemSceneCanvas = dynamic(
  () => import('./ecosystem-scene-canvas').then((mod) => mod.EcosystemSceneCanvas),
  { ssr: false }
);

export function EcosystemScene() {
  const canRun3D = useCanRun3D();

  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.06)_0%,transparent_60%)] pointer-events-none md:opacity-75 overflow-hidden"
      aria-hidden="true"
    >
      {canRun3D && <DynamicEcosystemSceneCanvas />}
    </div>
  );
}
