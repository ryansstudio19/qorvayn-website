import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { organizationSchema } from '@/lib/schema';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SITE, CORE_VALUES } from '@/data/site';
import { PRODUCTS } from '@/data/products';
import { HeroScene } from '@/components/three/hero-scene';
import { EcosystemScene } from '@/components/three/ecosystem-scene';
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Globe,
  Shield,
  Gem,
  Telescope,
  ChevronRight,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Building a human-centered technology ecosystem',
  'QORVAYN builds intelligent digital products designed to make technology more useful, accessible, creative, and human-centered.',
  '/'
);

const VALUE_ICONS: Record<string, LucideIcon> = {
  innovation: Lightbulb,
  'human-centered': Heart,
  accessibility: Globe,
  privacy: Shield,
  craftsmanship: Gem,
  'long-term': Telescope,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── 1. CINEMATIC HERO SECTION ───────────────────────── */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Layered cinematic base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(79,140,255,0.09)_0%,transparent_70%)] pointer-events-none" />

        {/* 3D Orbital Canvas Scene */}
        <HeroScene />

        {/* Text Protection Vignette (Ensures zero noise under text) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 hero-vignette pointer-events-none z-[5]" />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4F8CFF] shadow-[0_0_8px_rgba(79,140,255,0.8)] animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#7DB0FF]">
                  QORVAYN TECHNOLOGY ECOSYSTEM
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="font-display font-extrabold text-[#F8FAFC] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.03] tracking-[-0.03em] mb-8">
                Building a human-centered technology ecosystem.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[#94A3B8] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
                {SITE.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button href="/products" variant="primary" size="lg">
                  <span>Explore our products</span>
                  <ArrowRight size={16} />
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  About QORVAYN
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex items-center gap-2 text-xs font-mono text-[#7E8B9F] tracking-wider uppercase">
                <Sparkles size={14} className="text-[#4F8CFF]" />
                <span>
                  Founded {SITE.founded} · {SITE.country} · {SITE.operations}
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 2. ECOSYSTEM SECTION (WITH 3D TILT PRODUCT CARDS) ─── */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
        <EcosystemScene />

        <Container className="relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="One ecosystem. Many possibilities."
              description="QORVAYN is growing into an ecosystem focused on intelligent software, creative digital experiences, and products designed around real human needs."
              className="mb-16 sm:mb-20"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 card-perspective">
            {PRODUCTS.map((product, i) => (
              <GlassCard
                key={product.id}
                delay={i * 0.08}
                tilt={true}
                className="flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]"
                    style={{ color: product.accent }}
                  >
                    {product.status}
                  </span>
                  <span className="text-xs text-[#7E8B9F] font-mono">0{i + 1}</span>
                </div>

                <h3 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl mb-3 tracking-tight">
                  {product.name}
                </h3>

                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 mb-8">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#7DB0FF] hover:text-[#45D7FF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore {product.name}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 3. MISSION STATEMENT ────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#0B0F17] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.06)_0%,transparent_70%)] pointer-events-none" />

        <Container size="md" className="relative z-10">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  Our Mission
                </span>
              </div>

              <h2 className="font-display font-bold text-[#F8FAFC] text-3xl sm:text-5xl leading-tight mb-8 tracking-tight">
                Technology should work for people.
              </h2>

              <p className="text-[#94A3B8] text-lg sm:text-2xl font-normal leading-relaxed font-sans max-w-2xl mx-auto">
                &ldquo;{SITE.mission}&rdquo;
              </p>

              <div className="w-16 h-1 bg-gradient-to-r from-[#4F8CFF] to-[#45D7FF] mx-auto mt-10 rounded-full opacity-80" />
            </div>
          </Reveal>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 4. VALUES ───────────────────────────────────────── */}
      <section className="py-28 sm:py-36">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="Built with intention."
              description="The foundational principles that guide every product decision, architecture, and interaction we create."
              className="mb-16 sm:mb-20"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[value.id] || Lightbulb;
              return (
                <GlassCard key={value.id} delay={i * 0.06} className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center flex-shrink-0 text-[#7DB0FF]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#F8FAFC] text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 5. STORY ────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#0B0F17]">
        <Container size="md">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Starting with a simple ambition."
              align="left"
              className="mb-10"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-14">
              QORVAYN began on 10 March 2026 with a simple ambition: to build meaningful technology for the future. Founded by Ryan Zannah, QORVAYN is growing into a technology ecosystem focused on intelligent software, creative digital experiences, and products designed around real human needs. QORVAYN currently follows a remote-first approach. While the team primarily works remotely, members occasionally meet in person at a private location to collaborate, plan, and work together.
            </p>
          </Reveal>

          {/* Two-point timeline */}
          <div className="border-l border-white/10 pl-8 flex flex-col gap-10">
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4F8CFF] border-2 border-[#0B0F17] shadow-[0_0_12px_rgba(79,140,255,0.7)]" />
                <span className="text-xs font-mono font-semibold text-[#7DB0FF] tracking-wider uppercase mb-1.5 block">
                  10 March 2026
                </span>
                <h3 className="font-display font-bold text-[#F8FAFC] text-xl mb-1">
                  QORVAYN founded
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Founded by Ryan Zannah with a clear vision to build honest, human-centered technology.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="relative">
                <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#45D7FF] border-2 border-[#0B0F17] shadow-[0_0_12px_rgba(69,215,255,0.7)]" />
                <span className="text-xs font-mono font-semibold text-[#45D7FF] tracking-wider uppercase mb-1.5 block">
                  Today
                </span>
                <h3 className="font-display font-bold text-[#F8FAFC] text-xl mb-1">
                  Building an expanding technology ecosystem
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Developing flagship digital tools across AI workspaces, creative media, and ambient e-commerce.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 6. FUTURE TEASER ────────────────────────────────── */}
      <section className="py-28 sm:py-36">
        <Container>
          <Reveal>
            <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-white/[0.08] text-center bg-gradient-to-br from-[rgba(79,140,255,0.05)] via-transparent to-transparent relative overflow-hidden">
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF] mb-4 inline-block">
                What&apos;s Next
              </span>
              <h2 className="font-display font-bold text-[#F8FAFC] text-3xl sm:text-5xl mb-4 tracking-tight">
                The ecosystem is still expanding.
              </h2>
              <p className="text-[#94A3B8] text-base sm:text-lg mb-8 max-w-xl mx-auto">
                More products are currently in development.
              </p>
              <Button href="/future" variant="secondary" size="md">
                <span>See what&apos;s next</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 7. FINAL CTA ────────────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#0B0F17] relative">
        <Container size="md">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display font-bold text-[#F8FAFC] text-3xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
                Build the future with us.
              </h2>
              <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
                Follow QORVAYN as we build intelligent, accessible, and human-centered technology.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get in touch
                </Button>
                <Button href="/products" variant="secondary" size="lg">
                  Explore products
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
