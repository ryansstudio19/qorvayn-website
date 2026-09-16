import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { ProductScene } from '@/components/three/product-scene';
import { ShaderBackground } from '@/components/canvas/shader-background';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Truck,
  Sparkles,
  Shirt,
  Box,
  RotateCcw,
  Flame,
  CheckCircle2,
  Trophy,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'GoalWear — Football & Streetwear Brand | QORVAYN',
  'GoalWear is a premier football jersey and streetwear e-commerce brand within the QORVAYN ecosystem. Authentic club and national player-edition kits crafted for the pitch and the streets.',
  '/goalwear'
);

// Matchday Drops Showcase
const MATCHDAY_DROPS = [
  {
    id: 'arg-home-2024',
    name: 'Argentina 2024 Home — 3 Star Edition',
    category: 'National Teams',
    price: '3,850 BDT',
    image: '/jerseys/argentina-home.jpg',
    badge: '3 GOLD STARS',
    spec: 'AEROREADY · Doubleknit · Slim Fit',
  },
  {
    id: 'bra-away-2024',
    name: 'Brazil 2024 Away Player Edition',
    category: 'National Teams',
    price: '3,950 BDT',
    image: '/jerseys/brazil-away.jpg',
    badge: 'PLAYER EDITION',
    spec: 'Dri-FIT ADV · Jacquard · Wave Motif',
  },
  {
    id: 'fra-away-24',
    name: 'France 2024 Away Player Edition',
    category: 'National Teams',
    price: '4,100 BDT',
    image: '/jerseys/france-away.jpg',
    badge: 'VINTAGE CREST',
    spec: 'Retro Rooster · Pinstripe Knit',
  },
  {
    id: 'ger-home-24',
    name: 'Germany 2024 Home Player Edition',
    category: 'National Teams',
    price: '3,850 BDT',
    image: '/jerseys/germany-home.jpg',
    badge: 'EAGLE WING',
    spec: 'HEAT.RDY · Gradient Sleeve',
  },
  {
    id: 'esp-away-24',
    name: 'Spain 2024 Away Player Edition',
    category: 'National Teams',
    price: '3,950 BDT',
    image: '/jerseys/spain-away.jpg',
    badge: 'EURO CHAMPIONS',
    spec: 'Electric Neon · Performance Doubleknit',
  },
  {
    id: 'bd-special-24',
    name: 'Bangladesh Special Edition Sports 9',
    category: 'National Teams',
    price: '2,650 BDT',
    image: '/jerseys/bangladesh-special.jpg',
    badge: 'LIMITED RUN',
    spec: 'CoolPass Active · Emerald Honeycomb',
  },
];

// Brand Pillars
const BRAND_PILLARS = [
  {
    icon: Trophy,
    title: 'Stadium Grade Craft',
    desc: 'Engineered with authentic matchday weight, moisture-wicking micro-channels, and precision silicone-pressed crests built for elite performance.',
  },
  {
    icon: Flame,
    title: 'Streetwear Aesthetic',
    desc: 'Bridging the gap between the pitch and street culture. Styled for effortless pairing with oversized cargo pants, technical outerwear, and sneakers.',
  },
  {
    icon: Box,
    title: 'Interactive 3D Visualizer',
    desc: 'GoalWear features real-time 3D sandbox technology allowing fans to rotate, zoom, and inspect kit prints and textures in 360° before ordering.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified COD & bKash Security',
    desc: 'Hassle-free Cash On Delivery across all 64 districts in Bangladesh with 150 BDT advance dispatch verification and zero shipping scams.',
  },
];

export default function GoalWearPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-[#CBD5E1] selection:bg-[#00FF66]/30 selection:text-[#FFFFFF] overflow-hidden">
      {/* ── 01. HERO SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 border-b border-white/[0.08]">
        {/* Stadium Tunnel Background Grid Shader */}
        <ShaderBackground preset="grid" intensity={0.55} className="opacity-40" />

        {/* 3D Metallic Football & Lime Orbit Scene */}
        <ProductScene variant="goalwear" />

        {/* Stadium Floodlight Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.08)_0%,rgba(5,6,8,0.95)_75%)] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl py-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/25 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#00FF66]">
                QORVAYN COMMERCE · GOALWEAR
              </span>
            </div>
          </Reveal>

          {/* Official GoalWear Logo Banner */}
          <Reveal delay={0.06}>
            <div className="flex justify-center mb-6">
              <Image
                src="/goalwear-logo.png"
                alt="GoalWear"
                width={360}
                height={120}
                priority
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_25px_rgba(0,255,102,0.3)]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="font-display text-2xl sm:text-3xl text-[#00FF66] font-bold tracking-tight uppercase mb-6">
              Built for Matchday. Wear the Passion.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              A premier football jersey and streetwear destination. Authentic player-edition kits crafted for the roar of the stadium and styled for the streets.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://goalwear.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-[#00FF66] text-[#050608] hover:bg-white transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)] active:scale-[0.98]"
              >
                <span>Visit GoalWear Store</span>
                <ExternalLink size={16} />
              </a>

              <Button href="#drops" variant="secondary" size="lg">
                Explore The Drop
              </Button>
            </div>
          </Reveal>

          {/* Logistics & Trust Row */}
          <Reveal delay={0.3}>
            <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#7E8B9F]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#00FF66]" />
                100% Authentic Player Edition
              </span>
              <span className="flex items-center gap-2">
                <Truck size={14} className="text-[#00FF66]" />
                24-48h Dhaka · 3-4d Nationwide
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#00FF66]" />
                Verified bKash COD Logistics
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 02. BRAND PHILOSOPHY: THE STADIUM TUNNEL ────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00FF66] font-bold block mb-4">
                Brand Philosophy
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight uppercase mb-6">
                Stadium Tunnel × Football Culture
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00FF66] to-transparent mx-auto mb-8" />
              <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto">
                Imagine walking through the tunnel under the floodlights minutes before kickoff. That raw intensity, visual clarity, and pride is what GoalWear puts into every kit.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRAND_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <GlassCard key={pillar.title} delay={idx * 0.08} className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/25 flex items-center justify-center text-[#00FF66] mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 03. AUTHENTIC MATCHDAY KIT DROPS ─────────────────── */}
      <section id="drops" className="py-28 sm:py-36 relative z-10 bg-[#07090D] border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00FF66] font-bold block mb-4">
                  Matchday Catalog
                </span>
                <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight uppercase">
                  Current Matchday Drops
                </h2>
              </div>
              <a
                href="https://goalwear.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#00FF66] uppercase hover:underline underline-offset-4"
              >
                <span>Shop All Kits on GoalWear.online</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATCHDAY_DROPS.map((drop, idx) => (
              <Reveal key={drop.id} delay={idx * 0.08}>
                <div className="rounded-2xl p-5 bg-[#0D1017] border border-white/10 hover:border-[#00FF66]/40 transition-all duration-300 group flex flex-col justify-between h-full shadow-xl">
                  <div>
                    {/* Jersey Photo */}
                    <div className="w-full aspect-[4/4.6] rounded-xl bg-[#06070A] overflow-hidden mb-4 relative border border-white/5">
                      <Image
                        src={drop.image}
                        alt={drop.name}
                        width={600}
                        height={700}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050608]/85 backdrop-blur-md border border-[#00FF66]/30 text-[10px] font-mono font-bold uppercase text-[#00FF66]">
                        {drop.badge}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8B9F] block mb-1">
                      {drop.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                      {drop.name}
                    </h3>
                    <p className="text-xs font-mono text-[#94A3B8] mb-4">
                      {drop.spec}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-display font-black text-xl text-white">
                      {drop.price}
                    </span>
                    <a
                      href="https://goalwear.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#00FF66] text-[#050608] text-xs font-display font-extrabold uppercase hover:bg-white transition-colors"
                    >
                      Buy Kit
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 04. GOALWEAR + QORVAYN LINEAGE ──────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00FF66] font-bold block mb-4">
                Ecosystem Integration
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight uppercase mb-6">
                GoalWear in QORVAYN
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mx-auto">
                GoalWear represents QORVAYN&apos;s physical commerce and apparel layer — merging digital interactive technology with authentic sports fashion.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#090C12] border border-white/10 text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
                <span className="font-display font-bold text-sm text-white tracking-widest uppercase">
                  QORVAYN
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">— &ldquo;Building What Comes Next&rdquo;</span>
              </div>

              <div className="w-0.5 h-10 bg-gradient-to-b from-[#4F8CFF] to-[#00FF66] mx-auto mb-8" />

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00FF66]" />
                <span className="font-display font-bold text-sm text-white tracking-widest uppercase">
                  GOALWEAR
                </span>
                <span className="text-xs font-mono text-[#00FF66]">— &ldquo;Built for Matchday&rdquo;</span>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-lg mx-auto">
                GoalWear operates as an independent live e-commerce platform at <a href="https://goalwear.online" target="_blank" rel="noopener noreferrer" className="text-[#00FF66] underline">goalwear.online</a>, providing real football jerseys, 3D product visualizers, and secure nationwide logistics.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 05. FINAL CTA & RECIPROCAL NAVIGATION ────────────── */}
      <section className="py-28 sm:py-36 relative z-10">
        <Container size="sm" className="text-center">
          <Reveal>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00FF66] font-bold block mb-4">
              Matchday Awaits
            </span>
            <h2 className="font-display font-extrabold text-[#FFFFFF] text-4xl sm:text-5xl tracking-tight uppercase mb-6">
              Wear the game.
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Ready to upgrade your matchday rotation? Explore the full collection on the official store.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://goalwear.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-[#00FF66] text-[#050608] hover:bg-white transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
              >
                <span>Shop GoalWear.online</span>
                <ExternalLink size={16} />
              </a>

              <Button href="/" variant="secondary" size="lg">
                Return to QORVAYN
              </Button>
            </div>
          </Reveal>

          {/* Reciprocal Ecosystem Links */}
          <Reveal delay={0.15}>
            <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <Link
                href="/"
                className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
              >
                <ArrowLeft size={12} />
                <span>Return to QORVAYN Home</span>
              </Link>

              <div className="flex items-center gap-6">
                <span className="text-[#7E8B9F]">Other Products:</span>
                <Link
                  href="/ryneka"
                  className="text-[#7C3AED] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                >
                  RYNEKA
                </Link>
                <Link
                  href="/skypics"
                  className="text-[#38BDF8] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                >
                  SkyPics
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
