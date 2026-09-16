import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHero } from '@/components/ui/page-hero';
import { EmailCapture } from '@/components/sections/email-capture';
import { SignalScene } from '@/components/three/signal-scene';
import { Sparkles, Terminal, Compass, Disc } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'What Comes Next — Future Vision',
  'More products are currently in development as QORVAYN expands its human-centered technology ecosystem.',
  '/future'
);

export default function FuturePage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT'S NEXT"
        title="The ecosystem is growing."
        description="More products are currently in development. QORVAYN is building toward a future where intelligent software, creative tools, and digital experiences work together to empower people."
        scene={<SignalScene />}
        shaderPreset="signal"
      />

      {/* ── SUBTLE FUTURE CARDS ─────────────────────────────── */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Uncharted Horizons"
              title="Architecting Next Horizons"
              description="Our research streams are currently investigating ambient computing paradigms and zero-latency synthesis."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <GlassCard delay={0.06} hover={false} className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#4F8CFF] mb-6">
                  <Terminal size={20} />
                </div>
                <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#6B7280] block mb-2">
                  Stream 01
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F5F7FA] mb-3">
                  Future product
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Autonomous context engines designed for personal semantic memory.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-[#6B7280] uppercase">
                Early Architecture
              </div>
            </GlassCard>

            <GlassCard delay={0.12} hover={false} className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#45D7FF]/10 border border-[#45D7FF]/20 flex items-center justify-center text-[#45D7FF] mb-6">
                  <Compass size={20} />
                </div>
                <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#6B7280] block mb-2">
                  Stream 02
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F5F7FA] mb-3">
                  Currently in development
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Visual streaming infrastructure for distributed creative collaboration.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-[#45D7FF] uppercase">
                Active Research
              </div>
            </GlassCard>

            <GlassCard delay={0.18} hover={false} className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6EE7B7]/10 border border-[#6EE7B7]/20 flex items-center justify-center text-[#6EE7B7] mb-6">
                  <Disc size={20} />
                </div>
                <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#6B7280] block mb-2">
                  Stream 03
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F5F7FA] mb-3">
                  More to come
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Ambient wearable computing interfaces designed to blend invisibly into daily life.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs font-mono text-[#6EE7B7] uppercase">
                Concept Scoping
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ── EMAIL CAPTURE ───────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-t border-white/5">
        <Container size="sm">
          <Reveal>
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#4F8CFF] mx-auto mb-5">
                <Sparkles size={22} />
              </div>
              <h2 className="font-display font-bold text-[#F5F7FA] text-3xl sm:text-4xl mb-3 tracking-tight">
                Follow what comes next.
              </h2>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-md mx-auto">
                Receive confidential dispatch updates as new components of the QORVAYN ecosystem transition into public view.
              </p>
            </div>

            <EmailCapture
              buttonLabel="Get future updates"
              note="Product updates only. Legal wording to be finalized before launch."
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
