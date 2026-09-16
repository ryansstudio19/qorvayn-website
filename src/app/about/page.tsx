import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHero } from '@/components/ui/page-hero';
import { SITE, CORE_VALUES } from '@/data/site';
import { Lightbulb, Heart, Globe, Shield, Gem, Telescope, type LucideIcon } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'About QORVAYN',
  'Learn about QORVAYN — a technology company founded on 10 March 2026, building human-centered digital products.',
  '/about'
);

const VALUE_ICONS: Record<string, LucideIcon> = {
  innovation: Lightbulb,
  'human-centered': Heart,
  accessibility: Globe,
  privacy: Shield,
  craftsmanship: Gem,
  'long-term': Telescope,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT QORVAYN"
        title="Meaningful technology for the future."
        description={`QORVAYN is a technology company founded on ${SITE.founded} in ${SITE.country}, architecting intelligent systems designed to amplify human capability.`}
        shaderPreset="aurora"
      />

      {/* ── MISSION & VISION ─────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-y border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Purpose & Horizon"
              title="Mission & Vision"
              description="The dual North Stars shaping our architectural focus and product trajectory."
              className="mb-14"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard delay={0.06} className="flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF] mb-4 block">
                  Official Mission
                </span>
                <h3 className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl mb-4 leading-snug">
                  To build technology that empowers human life.
                </h3>
                <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                  &ldquo;{SITE.mission}&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#6B7280] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                Human-Centered Core
              </div>
            </GlassCard>

            <GlassCard delay={0.12} className="flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#45D7FF] mb-4 block">
                  Official Vision
                </span>
                <h3 className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl mb-4 leading-snug">
                  An interconnected sovereign ecosystem.
                </h3>
                <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                  &ldquo;{SITE.vision}&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#6B7280] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45D7FF]" />
                Global Ecosystem
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ── STORY & TIMELINE ─────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container size="md">
          <Reveal>
            <SectionHeading
              eyebrow="Our Origins"
              title="A simple ambition, built for the long term."
              align="left"
              className="mb-10"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-14">
              QORVAYN began on 10 March 2026 with a simple ambition: to build meaningful technology for the future. Founded by Ryan Zannah, QORVAYN is growing into a technology ecosystem focused on intelligent software, creative digital experiences, and products designed around real human needs. QORVAYN currently follows a remote-first approach. While the team primarily works remotely, members occasionally meet in person at a private location to collaborate, plan, and work together.
            </p>
          </Reveal>

          {/* Strict 3-point timeline */}
          <div className="border-l border-white/15 pl-8 flex flex-col gap-10">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4F8CFF] border-2 border-[#07090D] shadow-[0_0_12px_rgba(79,140,255,0.7)]" />
                <span className="text-xs font-mono font-semibold text-[#4F8CFF] tracking-wider uppercase mb-1 block">
                  10 March 2026
                </span>
                <h3 className="font-display font-bold text-[#F5F7FA] text-xl mb-1">
                  Founded
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Founded by Ryan Zannah with a commitment to create human-centered technology.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#45D7FF] border-2 border-[#07090D] shadow-[0_0_12px_rgba(69,215,255,0.7)]" />
                <span className="text-xs font-mono font-semibold text-[#45D7FF] tracking-wider uppercase mb-1 block">
                  Today
                </span>
                <h3 className="font-display font-bold text-[#F5F7FA] text-xl mb-1">
                  Building an expanding technology ecosystem
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Active engineering and design across RYNEKA, SkyPics, and GoalWear product platforms.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -left-[2.4rem] top-1.5 w-3.5 h-3.5 rounded-full bg-[#6EE7B7] border-2 border-[#07090D] shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
                <span className="text-xs font-mono font-semibold text-[#6EE7B7] tracking-wider uppercase mb-1 block">
                  Future
                </span>
                <h3 className="font-display font-bold text-[#F5F7FA] text-xl mb-1">
                  More products in development
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  Expanding the ecosystem into ambient interfaces, intelligence mesh, and creative platforms.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── REMOTE-FIRST PANEL ───────────────────────────── */}
      <section className="py-16 bg-[#0B0F17] border-y border-white/5">
        <Container size="md">
          <Reveal>
            <GlassCard hover={false} className="p-8 sm:p-10 border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center flex-shrink-0 text-[#4F8CFF]">
                  <Globe size={26} />
                </div>
                <div>
                  <div className="inline-block text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF] mb-1">
                    Operational Model
                  </div>
                  <h3 className="font-display font-bold text-[#F5F7FA] text-2xl mb-2">
                    {SITE.country} · {SITE.operations}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    QORVAYN operates remotely, with occasional in-person collaboration.
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Principles"
              title="Our Core Values"
              description="The foundational ethos guiding our engineering rigor and human-centered design."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, i) => {
              const Icon = VALUE_ICONS[val.id] || Lightbulb;
              return (
                <GlassCard key={val.id} delay={i * 0.06}>
                  <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center mb-4 text-[#4F8CFF]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-[#F5F7FA] text-lg mb-2">
                    {val.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {val.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
