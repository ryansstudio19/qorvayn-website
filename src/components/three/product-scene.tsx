'use client';

import dynamic from 'next/dynamic';
import type { ProductId } from '@/data/products';
import { useCanRun3D } from '@/lib/use-can-run-3d';

const DynamicProductSceneCanvas = dynamic(
  () => import('./product-scene-canvas').then((mod) => mod.ProductSceneCanvas),
  { ssr: false }
);

const VARIANT_FALLBACK_STYLES: Record<ProductId, string> = {
  ryneka:
    'radial-gradient(circle at 68% 42%, rgba(37,99,235,0.20) 0%, rgba(0,229,255,0.10) 28%, rgba(124,58,237,0.08) 52%, transparent 72%)',
  skypics:
    'radial-gradient(circle at 52% 45%, rgba(56,189,248,0.16) 0%, rgba(139,92,246,0.12) 38%, rgba(0,229,255,0.06) 58%, transparent 74%)',
  goalwear:
    'radial-gradient(circle at 50% 42%, rgba(0,255,102,0.16) 0%, rgba(203,213,225,0.06) 36%, transparent 68%)',
};

export function ProductScene({ variant }: { variant: ProductId }) {
  const canRun3D = useCanRun3D();

  return (
    <div
      className="absolute inset-0 pointer-events-none md:opacity-75 overflow-hidden"
      style={{ background: VARIANT_FALLBACK_STYLES[variant] }}
      aria-hidden="true"
    >
      {canRun3D && <DynamicProductSceneCanvas variant={variant} />}
    </div>
  );
}
