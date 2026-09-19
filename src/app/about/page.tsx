import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHero } from '@/components/ui/page-hero';
import { Button } from '@/components/ui/button';
import { TEAM } from '@/data/team';
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Globe,
  Layers,
  Lightbulb,
  Heart,
  Shield,
  Gem,
  Sparkles,
  Palette,
  ShoppingBag,
  Compass,
  Telescope,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About QORVAYN | Building What Comes Next',
  description:
    'Discover QORVAYN, a technology company building intelligent digital products across AI, creative platforms, and digital commerce.',
  alternates: {
    canonical: 'https://qorvayn.tech/about',
  },
  openGraph: {
    title: 'About QORVAYN | Building What Comes Next',
    description:
      'Discover QORVAYN, a technology company building intelligent digital products across AI, creative platforms, and digital commerce.',
    url: 'https://qorvayn.tech/about',
  },
  twitter: {
    title: 'About QORVAYN | Building What Comes Next',
    description:
      'Discover QORVAYN, a technology company building intelligent digital products across AI, creative platforms, and digital commerce.',
  },
};

const WHAT_WE_DO_AREAS = [
  {
    number: '01',
    title: 'Intelligent Software',
    description:
      'Exploring AI-powered software and tools that help people think, create, organize, and work more effectively.',
    icon: Cpu,
    accent: '#4F8CFF',
  },
  {
    number: '02',
    title: 'Digital Experiences',
    description:
      'Designing intuitive digital products that balance functionality, usability, and thoughtful visual design.',
    icon: Sparkles,
    accent: '#38BDF8',
  },
  {
    number: '03',
    title: 'Creative Platforms',
    description:
      'Exploring new ways for people to discover, share, and interact with digital content.',
    icon: Palette,
    accent: '#818CF8',
  },
  {
    number: '04',
    title: 'Digital Commerce',
    description:
      'Building modern online shopping experiences that connect products, customers, and communities.',
    icon: ShoppingBag,
    accent: '#34D399',
  },
  {
    number: '05',
    title: 'Product Innovation',
    description:
      'Researching, planning, and developing new ideas that may grow into future products within the QORVAYN ecosystem.',
    icon: Compass,
    accent: '#F472B6',
  },
];

const ECOSYSTEM_PRODUCTS = [
  {
    id: 'ryneka',
    name: 'RYNEKA',
    tagline: 'The Future Thinks With You.',
    status: 'Concept & Product Vision',
    description:
      'RYNEKA is an AI Operating System concept designed to help users think, create, automate, and manage their digital lives through intelligent, modular, and privacy-first technology.',
    href: '/products/ryneka',
    accent: '#4F8CFF',
  },
  {
    id: 'skypics',
    name: 'SkyPics',
    tagline: 'Nature, Sky & Creative Expression',
    status: 'Platform Vision',
    description:
      'SkyPics is an envisioned AI-powered visual and social platform focused on nature, sky photography, creative expression, and intelligent visual discovery.',
    href: '/products/skypics',
    accent: '#38BDF8',
  },
  {
    id: 'goalwear',
    name: 'GoalWear',
    tagline: 'Football Style & Digital Commerce',
    status: 'Brand Ecosystem · Concept',
    description:
      'GoalWear is a football and streetwear e-commerce brand focused on bringing football-inspired style and shopping experiences to its audience.',
    href: '/products/goalwear',
    accent: '#34D399',
  },
];

const CORE_VALUES_LIST = [
  {
    number: '01',
    title: 'Innovation',
    description: 'We explore new ideas and technologies to create meaningful digital experiences.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Human-Centered Technology',
    description: 'We believe technology should be designed around real people, their needs, and their everyday lives.',
    icon: Heart,
  },
  {
    number: '03',
    title: 'Accessibility',
    description: 'We aim to make useful technology more approachable and accessible to a wider audience.',
    icon: Globe,
  },
  {
    number: '04',
    title: 'Privacy',
    description: 'We believe people should have greater transparency and control over how technology interacts with their lives.',
    icon: Shield,
  },
  {
    number: '05',
    title: 'Craftsmanship',
    description: 'We value thoughtful design, attention to detail, and continuous improvement in everything we build.',
    icon: Gem,
  },
  {
    number: '06',
    title: 'Long-Term Thinking',
    description: 'We focus on creating products and foundations that can grow, evolve, and remain useful over time.',
    icon: Telescope,
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    description: 'Begin with the people, needs, and challenges a product is intended to serve.',
  },
  {
    step: '02',
    title: 'Explore',
    description: 'Research ideas, technologies, and approaches before committing to a direction.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create experiences that balance usability, visual quality, and functionality.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'Develop, test, learn, and refine products step by step.',
  },
  {
    step: '05',
    title: 'Improve',
    description: 'Treat every release and experiment as an opportunity to make the product better.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 01: ABOUT HERO ───────────────────────── */}
      <PageHero
        eyebrow="ABOUT QORVAYN"
        title="Building What Comes Next."
        description="QORVAYN is a technology company building intelligent digital products designed to make technology more useful, accessible, creative, and human-centered."
        shaderPreset="aurora"
      >
        <div className="flex flex-col gap-8">
          <div className="pt-2 border-t border-white/10 max-w-xl">
            <p className="text-sm font-mono tracking-wide text-[#7DB0FF] uppercase">
              Rooted in technology. Driven by ideas. Built with purpose.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#ecosystem" variant="primary" size="lg">
              <span>Explore Our Ecosystem</span>
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <span>Get in Touch</span>
            </Button>
          </div>
        </div>
      </PageHero>

      {/* ── SECTION 02: WHO WE ARE ───────────────────────── */}
      <section className="py-24 sm:py-32 border-t border-white/5 bg-[#07090D]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                  <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                    Identity & Grounding
                  </span>
                </div>
                <h2 className="font-display font-bold text-[#F5F7FA] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
                  A Company Built Around Possibility.
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                  <p>
                    QORVAYN is an independent technology company founded in Bangladesh on March 10, 2026, by Ryan Zannah.
                  </p>
                  <p>
                    We are building a growing ecosystem of digital products across intelligent software, creative platforms, and digital commerce.
                  </p>
                  <p>
                    Our work brings together technology, product thinking, design, and business operations to turn ideas into useful digital experiences.
                  </p>
                  <p>
                    QORVAYN is being built with a long-term perspective: creating products with distinct purposes while connecting them through a shared commitment to thoughtful design, accessibility, and human-centered technology.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <div className="rounded-3xl p-7 sm:p-9 bg-[#0B0F17]/90 border border-white/10 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#4F8CFF]/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF] block mb-6">
                    Company Factsheet
                  </span>

                  <div className="divide-y divide-white/[0.08] text-sm">
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Entity</span>
                      <span className="text-[#F5F7FA] font-medium">QORVAYN</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Founder & CEO</span>
                      <span className="text-[#F5F7FA] font-medium">Ryan Zannah</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Founded</span>
                      <span className="text-[#F5F7FA] font-medium">March 10, 2026</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Country</span>
                      <span className="text-[#F5F7FA] font-medium">Bangladesh</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Operating Model</span>
                      <span className="text-[#7DB0FF] font-medium">Remote-first</span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between">
                      <span className="text-[#6B7280] font-mono text-xs uppercase">Core Verticals</span>
                      <span className="text-[#F5F7FA] font-medium text-right text-xs">Software · Media · Commerce</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2.5 text-xs text-[#94A3B8]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active early-stage development</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 03 & 04: MISSION & VISION ────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-y border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Guiding Horizon"
              title="Mission & Vision"
              description="The principles that guide our work today and the future we are actively building toward."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission */}
            <Reveal delay={0.06}>
              <div className="rounded-3xl p-8 sm:p-12 bg-[#07090D]/80 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full group hover:border-[#4F8CFF]/40 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#4F8CFF]/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
                    <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#4F8CFF]">
                      Our Mission
                    </span>
                  </div>

                  <blockquote className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl leading-snug mb-6">
                    &ldquo;To build powerful, accessible, and human-centered technology that helps people think, create, work, and live better in the digital world.&rdquo;
                  </blockquote>

                  <p className="text-[#94A3B8] text-base leading-relaxed">
                    We aim to make technology more useful and approachable by developing products that combine intelligent functionality with thoughtful design.
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#6B7280]">
                  <span className="uppercase tracking-wider text-[#94A3B8]">Immediate Anchor</span>
                  <span className="text-[#7DB0FF]">Human-Centered Core</span>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.12}>
              <div className="rounded-3xl p-8 sm:p-12 bg-[#07090D]/80 border border-white/10 relative overflow-hidden flex flex-col justify-between h-full group hover:border-[#38BDF8]/40 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#38BDF8]">
                      Our Vision
                    </span>
                  </div>

                  <blockquote className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl leading-snug mb-6">
                    &ldquo;To build a global technology ecosystem where intelligent software, creative tools, and digital experiences work together to empower people and shape the future.&rdquo;
                  </blockquote>

                  <p className="text-[#94A3B8] text-base leading-relaxed mb-4">
                    We envision a future where technology works alongside people, expands their possibilities, and helps them accomplish more.
                  </p>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-[#7E8B9F] leading-relaxed">
                    Global expansion is framed as our long-term vision and aspirational trajectory as the company matures.
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#6B7280]">
                  <span className="uppercase tracking-wider text-[#94A3B8]">Long-Term Trajectory</span>
                  <span className="text-[#38BDF8]">Ecosystem Future</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── SECTION 05: WHAT WE DO ───────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Areas of Exploration"
              title="What We Do"
              description="QORVAYN develops and explores digital products across multiple areas of technology."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHAT_WE_DO_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.number} delay={i * 0.06}>
                  <div className="rounded-2xl p-7 sm:p-8 bg-[#0B0F17]/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#6B7280] group-hover:text-[#7DB0FF] transition-colors">
                          {area.number}
                        </span>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-105 transition-transform"
                          style={{ color: area.accent }}
                        >
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-[#F5F7FA] text-xl mb-3 group-hover:text-[#7DB0FF] transition-colors">
                        {area.title}
                      </h3>

                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.accent }} />
                      <span>Ecosystem Focus</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SECTION 06: OUR ECOSYSTEM ────────────────────── */}
      <section id="ecosystem" className="py-24 sm:py-32 bg-[#0B0F17] border-y border-white/5 scroll-mt-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product Portfolio"
              title="Different Products. One Shared Vision."
              description="QORVAYN brings together digital products with distinct purposes, identities, and audiences—connected by a shared commitment to useful, thoughtful technology."
              className="mb-16"
            />
          </Reveal>

          <div className="flex flex-col gap-8 lg:gap-10">
            {ECOSYSTEM_PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08}>
                <div className="rounded-3xl p-8 sm:p-12 bg-[#07090D] border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-md bg-white/5 border border-white/10"
                        style={{ color: product.accent }}
                      >
                        {product.status}
                      </span>
                      <span className="text-xs font-mono text-[#6B7280]">
                        0{i + 1} · {product.tagline}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-4xl mb-4 tracking-tight group-hover:text-[#7DB0FF] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <Button
                      href={product.href}
                      variant="primary"
                      size="md"
                    >
                      <span>Explore {product.name}</span>
                      <ChevronRight size={16} />
                    </Button>
                  </div>

                  <div className="w-full lg:w-72 h-44 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden flex-shrink-0 group-hover:border-white/20 transition-colors">
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none transition-opacity group-hover:opacity-25"
                      style={{
                        background: `radial-gradient(circle at center, ${product.accent}, transparent 70%)`,
                      }}
                    />
                    <Layers size={36} className="text-[#94A3B8]/60 mb-2 transition-transform group-hover:scale-110" />
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#7E8B9F]">
                      {product.name}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 07: OUR CORE VALUES ──────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Foundational Principles"
              title="What Guides Us"
              description="The principles behind the products we build and the decisions we make."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_VALUES_LIST.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.number} delay={i * 0.05}>
                  <div className="rounded-2xl p-7 sm:p-8 bg-[#0B0F17]/50 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono text-[#6B7280] tracking-widest uppercase">
                          {val.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#4F8CFF]">
                          <Icon size={16} />
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-[#F5F7FA] text-lg mb-2.5 group-hover:text-[#7DB0FF] transition-colors">
                        {val.title}
                      </h3>

                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {val.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                      <span>Ethos Principle</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SECTION 08: OUR STORY ────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-y border-white/5">
        <Container size="md">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                Where It Started
              </h2>
              <p className="text-lg font-mono text-[#7DB0FF]">
                An Idea With a Long-Term Vision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl p-8 sm:p-12 bg-[#07090D] border border-white/10 relative overflow-hidden space-y-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              <p>
                QORVAYN began on March 10, 2026, with a vision to build meaningful technology and create digital products with long-term potential.
              </p>
              <p>
                Founded by Ryan Zannah in Bangladesh, the company started with an ambition that extended beyond a single website or application: to build a technology ecosystem capable of supporting different ideas, products, and experiences.
              </p>
              <p>
                As the vision developed, QORVAYN began taking shape through projects spanning AI-powered software, creative platforms, and digital commerce.
              </p>
              <p>
                We are still at the beginning of our journey. Every project, every experiment, and every improvement contributes to the larger vision of what QORVAYN can become.
              </p>

              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="font-display font-bold text-xl text-[#F5F7FA]">
                  &ldquo;We are building with purpose—and looking ahead.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SECTION 09: THE PEOPLE BEHIND QORVAYN ────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                  <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                    Leadership & Collective
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  The People Behind QORVAYN
                </h2>
                <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mt-3">
                  QORVAYN is built through collaboration across product development, design, business, and operations.
                </p>
              </div>

              <Button href="/team" variant="secondary" size="md">
                <span>View Full Team Directory</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.06}>
                <div className="rounded-2xl p-4 bg-[#0B0F17]/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 group flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div>
                    {/* 4:5 Portrait Container */}
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#07090D] mb-4 border border-white/[0.06]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: member.objectPosition || 'center top' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent pointer-events-none opacity-80" />
                    </div>

                    <h3 className="font-display font-bold text-[#F5F7FA] text-base group-hover:text-[#7DB0FF] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-medium mt-1 leading-relaxed">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#6B7280]">
                    <span className="uppercase tracking-wider">{member.category}</span>
                    <span className="text-[#4F8CFF]">QORVAYN</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 10: HOW WE WORK ──────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-y border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Engineering & Design Process"
              title="Thoughtful by Design. Built Step by Step."
              description="We believe meaningful digital products are built through exploration, collaboration, and continuous improvement."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="rounded-2xl p-6 bg-[#07090D] border border-white/[0.08] hover:border-[#4F8CFF]/30 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#4F8CFF]">
                        {p.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#4F8CFF] transition-colors" />
                    </div>

                    <h3 className="font-display font-bold text-[#F5F7FA] text-lg mb-2 group-hover:text-[#7DB0FF] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-[#94A3B8] text-xs leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-[#6B7280] uppercase">
                    Stage 0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 11: LOOKING AHEAD ────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#07090D]">
        <Container size="md">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                  Trajectory & Future
                </span>
              </div>

              <h2 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8">
                We’re Just Getting Started.
              </h2>

              <div className="space-y-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed text-left sm:text-center">
                <p>
                  QORVAYN is an evolving technology company with ambitions that extend beyond its current products.
                </p>
                <p>
                  As we grow, we intend to explore new technologies, develop new products, and expand the possibilities of our ecosystem.
                </p>
                <p>
                  Our focus remains on building with purpose, learning through development, and creating technology that can make a meaningful difference in people’s digital lives.
                </p>
              </div>

              <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B0F17] border border-white/10">
                <p className="font-display font-bold text-[#F5F7FA] text-xl sm:text-2xl leading-snug text-center">
                  &ldquo;The future is not something we simply wait for. It’s something we build.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SECTION 12: FINAL CTA ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0B0F17] border-t border-white/5">
        <Container size="md">
          <Reveal>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center mx-auto text-[#4F8CFF] mb-6">
                <Compass size={28} />
              </div>

              <h2 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-5xl tracking-tight mb-4">
                Discover What We’re Building.
              </h2>

              <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Explore the products, ideas, and experiences taking shape across the QORVAYN ecosystem.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/products" variant="primary" size="lg">
                  <span>Explore Our Products</span>
                  <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  <span>Get in Touch</span>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
