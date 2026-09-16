import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { SITE } from '@/data/site';
import { SignalScene } from '@/components/three/signal-scene';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Message Received',
  'Thanks for reaching out to QORVAYN.',
  '/contact/thank-you'
);

export default function ThankYouPage() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
      <SignalScene />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <div className="w-16 h-16 rounded-3xl bg-[#4F8CFF]/15 border border-[#4F8CFF]/30 flex items-center justify-center text-[#4F8CFF] mb-8 shadow-[0_0_30px_rgba(79,140,255,0.25)]">
              <CheckCircle2 size={32} />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display font-extrabold text-[#F5F7FA] text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
              Thanks — we&apos;ve received your message.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[#94A3B8] text-xl sm:text-2xl leading-relaxed mb-4">
              We&apos;ll reply as soon as we can.
            </p>
            <p className="text-sm text-[#6B7280] mb-10">
              For urgent matters, you can also reach our primary mailbox directly at{' '}
              <a href={`mailto:${SITE.email}`} className="text-[#7DB0FF] hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/products" variant="primary" size="lg">
                <span>Explore our products</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="/" variant="secondary" size="lg">
                <Home size={16} />
                <span>Return home</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
