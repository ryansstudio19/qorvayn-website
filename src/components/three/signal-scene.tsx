'use client';

import dynamic from 'next/dynamic';
import { useCanRun3D } from '@/lib/use-can-run-3d';

const DynamicSignalSceneCanvas = dynamic(
  () => import('./signal-scene-canvas').then((mod) => mod.SignalSceneCanvas),
  { ssr: false }
);

export function SignalScene() {
  const canRun3D = useCanRun3D();

  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(69,215,255,0.06)_0%,rgba(79,140,255,0.03)_35%,transparent_65%)] pointer-events-none md:opacity-75 overflow-hidden"
      aria-hidden="true"
    >
      {canRun3D && <DynamicSignalSceneCanvas />}
    </div>
  );
}
