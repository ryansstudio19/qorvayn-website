import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { CHANGELOG_ENTRIES } from '@/data/changelog';
import {
  Sparkles,
  GitCommit,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Terminal,
  Activity,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Changelog & Ecosystem Updates',
  'Track the ongoing evolution, engineering releases, and architectural progress of QORVAYN.',
  '/changelog'
);

export default function ChangelogPage() {
  return (
    <div className="pt-32 pb-24">
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(79,140,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container size="md" className="relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
              <Activity size={14} className="text-[#4F8CFF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF]">
                Live Ecosystem Log
              </span>
            </div>

            <h1 className="font-display font-extrabold text-[#F8FAFC] text-4xl sm:text-6xl tracking-tight mb-6">
              Changelog &amp; Updates
            </h1>

            <p className="text-[#94A3B8] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              A transparent log of everything we build, optimize, and ship across the QORVAYN ecosystem.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/[0.06]">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono text-[#94A3B8] block mb-1">Latest Version</span>
                <span className="text-lg font-mono font-bold text-[#7DB0FF]">v1.2.0</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono text-[#94A3B8] block mb-1">Status</span>
                <span className="text-lg font-mono font-bold text-[#6EE7B7]">Active Ship</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono text-[#94A3B8] block mb-1">Core Architecture</span>
                <span className="text-lg font-mono font-bold text-[#45D7FF]">Next.js 15</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs font-mono text-[#94A3B8] block mb-1">Cadence</span>
                <span className="text-lg font-mono font-bold text-[#F8FAFC]">Continuous</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── TIMELINE LIST ─────────────────────────────────── */}
      <section className="py-12">
        <Container size="md">
          <div className="relative border-l border-white/[0.08] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {CHANGELOG_ENTRIES.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 0.08}>
                <div className="relative group">
                  {/* Glowing Node on Timeline */}
                  <div
                    className="absolute -left-[1.95rem] sm:-left-[2.95rem] top-1.5 w-4 h-4 rounded-full border-2 border-[#07090D] shadow-[0_0_12px_rgba(79,140,255,0.6)] transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: entry.categoryColor }}
                  />

                  <GlassCard className="p-6 sm:p-8">
                    {/* Header: Version, Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider text-white bg-white/[0.06] border border-white/[0.1]">
                          {entry.version}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold tracking-wider uppercase"
                          style={{
                            color: entry.categoryColor,
                            backgroundColor: `${entry.categoryColor}15`,
                          }}
                        >
                          {entry.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                        <Calendar size={13} className="text-[#4F8CFF]" />
                        <span>{entry.date}</span>
                      </div>
                    </div>

                    {/* Entry Title & Narrative */}
                    <h2 className="font-display font-bold text-[#F8FAFC] text-xl sm:text-2xl mb-3 tracking-tight">
                      {entry.title}
                    </h2>

                    <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6">
                      {entry.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.04]">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7DB0FF] block mb-3">
                        Key Shipments &amp; Details
                      </span>
                      {entry.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#F8FAFC]/90">
                          <CheckCircle2
                            size={16}
                            className="text-[#4F8CFF] shrink-0 mt-0.5"
                          />
                          <span className="leading-snug text-[#CBD5E1] text-xs sm:text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FOOTER CALLOUT ────────────────────────────────── */}
      <section className="pt-16">
        <Container size="md">
          <Reveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101726]/80 to-[#0B0F17]/90 border border-white/[0.08] text-center">
              <Terminal size={32} className="text-[#4F8CFF] mx-auto mb-4" />
              <h3 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl mb-3">
                Have ideas or questions on our roadmap?
              </h3>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-lg mx-auto mb-8">
                We build in the open and always welcome conversations with builders, creators, and technologists.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="md">
                  <span>Get in touch</span>
                  <ArrowRight size={15} />
                </Button>
                <Button href="/products" variant="secondary" size="md">
                  Explore products
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
