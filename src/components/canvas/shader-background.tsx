'use client';

import dynamic from 'next/dynamic';
import { useCanRun3D } from '@/lib/use-can-run-3d';

export type ShaderPreset = 'hero' | 'aurora' | 'grid' | 'signal' | 'sky';

interface ShaderBackgroundProps {
  preset?: ShaderPreset;
  className?: string;
  intensity?: number;
}

const DynamicShaderBackgroundCanvas = dynamic(
  () => import('./shader-background-canvas').then((mod) => mod.ShaderBackgroundCanvas),
  { ssr: false }
);

const PRESET_FALLBACK_STYLES: Record<ShaderPreset, string> = {
  hero:
    'radial-gradient(circle at 65% 42%, rgba(64,133,250,0.22) 0%, rgba(71,217,250,0.10) 28%, rgba(107,61,199,0.08) 50%, transparent 72%), linear-gradient(135deg, #07090D 0%, #0B101C 55%, #07090D 100%)',
  aurora:
    'radial-gradient(ellipse 90% 45% at 50% 35%, rgba(38,115,250,0.18) 0%, rgba(46,219,245,0.10) 42%, transparent 75%), radial-gradient(ellipse 75% 40% at 60% 65%, rgba(140,82,242,0.12) 0%, transparent 70%), #07090D',
  grid:
    'radial-gradient(circle at 50% 45%, rgba(82,217,255,0.12) 0%, rgba(56,138,250,0.08) 40%, transparent 70%), linear-gradient(to right, rgba(56,138,250,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,138,250,0.06) 1px, transparent 1px), #07090D',
  signal:
    'radial-gradient(circle at 50% 50%, rgba(107,192,255,0.18) 0%, rgba(23,36,71,0.32) 45%, transparent 72%), #07090D',
  sky:
    'radial-gradient(ellipse 95% 50% at 55% 68%, rgba(191,115,140,0.14) 0%, rgba(139,92,246,0.16) 38%, transparent 72%), radial-gradient(ellipse 85% 55% at 45% 32%, rgba(56,189,248,0.16) 0%, transparent 70%), linear-gradient(180deg, #050816 0%, #0B1120 100%)',
};

export function ShaderBackground({
  preset = 'hero',
  className = '',
  intensity = 1.0,
}: ShaderBackgroundProps) {
  const canRun3D = useCanRun3D();

  return (
    <>
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none ${className} max-md:!opacity-100`}
        style={{
          background: PRESET_FALLBACK_STYLES[preset] || PRESET_FALLBACK_STYLES.hero,
          backgroundSize: preset === 'grid' ? '100% 100%, 48px 48px, 48px 48px, 100% 100%' : undefined,
        }}
        aria-hidden="true"
      />
      {canRun3D && (
        <DynamicShaderBackgroundCanvas
          preset={preset}
          className={className}
          intensity={intensity}
        />
      )}
    </>
  );
}
