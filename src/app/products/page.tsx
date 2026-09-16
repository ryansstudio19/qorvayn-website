import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/data/products';
import { EcosystemScene } from '@/components/three/ecosystem-scene';
import { ShaderBackground } from '@/components/canvas/shader-background';
import { ChevronRight, ArrowRight, Layers } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Our Products',
  'Different products. One human-centered direction. Discover RYNEKA, SkyPics, and GoalWear.',
  '/products'
);

export default function ProductsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.08)_0%,transparent_65%)] pointer-events-none" />
        <ShaderBackground preset="grid" intensity={0.85} className="opacity-50" />
        <EcosystemScene />

        <Container className="relative z-10 py-24 sm:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                  QORVAYN ECOSYSTEM
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display font-extrabold text-[#F5F7FA] text-4xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-6">
                Different products. One human-centered direction.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-2xl">
                Our products share a common belief: technology should be intelligent, accessible, and designed around real human needs.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PRODUCTS SHOWCASE ────────────────────────────── */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                  <div className="flex-1 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-md bg-white/5 border border-white/10"
                        style={{ color: product.accent }}
                      >
                        {product.status}
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">
                        vertical 0{i + 1}
                      </span>
                    </div>

                    <h2 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-5xl mb-4 tracking-tight">
                      {product.name}
                    </h2>

                    <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Button
                        href={product.href}
                        variant="primary"
                        size="md"
                        className="shadow-[0_0_20px_rgba(79,140,255,0.3)]"
                      >
                        <span>Explore {product.name}</span>
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>

                  {/* Abstract Visual Frame */}
                  <div className="w-full lg:w-72 h-44 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${product.accent}, transparent 70%)`,
                      }}
                    />
                    <Layers size={36} className="text-[#94A3B8]/50 mb-2" />
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6B7280]">
                      {product.status}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FUTURE PLACEHOLDERS ──────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Upcoming Architecture"
              title="More to come."
              description="More products are currently in development."
              className="mb-14"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <GlassCard key={num} delay={num * 0.07} hover={false} className="text-center p-8">
                <div className="h-28 rounded-xl bg-white/[0.02] border border-dashed border-white/10 mb-5 flex flex-col items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#4F8CFF]/50 animate-pulse mb-2" />
                  <span className="text-xs font-mono tracking-widest uppercase text-[#6B7280]">
                    Future product
                  </span>
                </div>
                <p className="text-sm text-[#94A3B8]">
                  Currently in development.
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/future" variant="secondary" size="md">
              <span>View roadmap & future vision</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
