import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { EmailCapture } from '@/components/sections/email-capture';
import { ProductScene } from '@/components/three/product-scene';
import { ShaderBackground } from '@/components/canvas/shader-background';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Sparkles,
  Workflow,
  Layers,
  Network,
  GraduationCap,
  ShieldCheck,
  Code2,
  Lock,
  Cpu,
  Sliders,
  CheckCircle2,
  Users,
  Compass,
  Zap,
  Terminal,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'RYNEKA — The Future Thinks With You | QORVAYN',
  'RYNEKA is a next-generation AI Operating System by QORVAYN, designed to help people think, create, automate, and manage their digital lives through a modular, privacy-first, and open-source platform.',
  '/ryneka'
);

// 6 Major Product Capability Domains
const PRODUCT_DOMAINS = [
  {
    id: 'think',
    icon: Brain,
    title: 'THINK',
    tagline: 'Deep comprehension & reasoning',
    desc: 'Synthesize complex documents, outline multi-step strategies, break down technical challenges, and reason through structured problems with continuous contextual memory.',
    accent: '#00E5FF',
  },
  {
    id: 'create',
    icon: Sparkles,
    title: 'CREATE',
    tagline: 'Generative creative workflows',
    desc: 'Support expansive creative writing, visual design ideation, code scaffolding, and multi-asset production pipelines without breaking creative momentum.',
    accent: '#7C3AED',
  },
  {
    id: 'automate',
    icon: Workflow,
    title: 'AUTOMATE',
    tagline: 'Multi-step action orchestration',
    desc: 'Delegate repetitive digital tasks, file transformations, and routine workflows to intelligent background routines that always require your explicit confirmation.',
    accent: '#2563EB',
  },
  {
    id: 'manage',
    icon: Layers,
    title: 'MANAGE',
    tagline: 'Digital-life organization',
    desc: 'Unify disparate notes, project repos, bookmarks, and computational tasks into a living semantic workspace organized around your personal mental model.',
    accent: '#45D7FF',
  },
  {
    id: 'connect',
    icon: Network,
    title: 'CONNECT',
    tagline: 'Open protocols & device bus',
    desc: 'Interface seamlessly with open developer APIs, standard communication channels, and local peripherals without proprietary vendor lock-in.',
    accent: '#818CF8',
  },
  {
    id: 'learn',
    icon: GraduationCap,
    title: 'LEARN',
    tagline: 'Personalized knowledge synthesis',
    desc: 'Empower students, researchers, and autodidacts with structured study roadmaps, active recall synthesis, and conceptual cross-domain references.',
    accent: '#6EE7B7',
  },
];

// 7 Core Values / Principles
const RYNEKA_VALUES = [
  {
    number: '01',
    title: 'Open Source First',
    desc: 'We prefer open-source technologies, permissive standards, and transparent community review wherever practical.',
  },
  {
    number: '02',
    title: 'Privacy First',
    desc: 'Your thoughts, notes, and workflows belong to you. Privacy is treated as an architectural foundation, not a setting.',
  },
  {
    number: '03',
    title: 'Free Before Paid',
    desc: 'Our core philosophy prioritizes universal accessibility and robust free functionality before commercial monetization.',
  },
  {
    number: '04',
    title: 'Human Control',
    desc: 'AI should assist, accelerate, and suggest—without ever stripping away meaningful human agency or critical judgment.',
  },
  {
    number: '05',
    title: 'Modular Design',
    desc: 'Built as an interconnected constellation of independent capabilities that can be enabled, audited, or disabled at will.',
  },
  {
    number: '06',
    title: 'High Performance',
    desc: 'Engineered for zero bloat, low-latency execution, fast keystroke response, and efficient local resource utilization.',
  },
  {
    number: '07',
    title: 'Beautiful UI',
    desc: 'Technology should feel intuitive, polished, and delightful. Great tools inspire better thinking.',
  },
];

// 8 Conceptual System Modules
const SYSTEM_MODULES = [
  { name: 'AI Core', role: 'Contextual reasoning & neural synthesis', color: '#00E5FF' },
  { name: 'Automation Daemon', role: 'Event-driven background workflows', color: '#2563EB' },
  { name: 'Creative Canvas', role: 'Fluid generative ideation workspace', color: '#7C3AED' },
  { name: 'Knowledge Graph', role: 'Semantic memory & indexed knowledge', color: '#45D7FF' },
  { name: 'Productivity Hub', role: 'Task queues & focus orchestration', color: '#818CF8' },
  { name: 'Device Bus', role: 'Local file I/O & peripheral interaction', color: '#6EE7B7' },
  { name: 'Communications', role: 'Message drafting & inbound routing', color: '#93C5FD' },
  { name: 'Developer SDK', role: 'Extensible plugin & tool runtime', color: '#C084FC' },
];

// Target Audiences
const TARGET_AUDIENCES = [
  { role: 'Students', desc: 'Synthesizing research papers, breaking down complex theorems, and organizing personal study tracks.' },
  { role: 'Developers', desc: 'Automating build pipelines, reasoning through architecture diagrams, and exploring open APIs.' },
  { role: 'Designers', desc: 'Organizing creative moodboards, drafting aesthetic briefs, and bridging ideas into assets.' },
  { role: 'Freelancers', desc: 'Managing diverse client projects, automating routine invoices, and orchestrating client communications.' },
  { role: 'Content Creators', desc: 'Structuring editorial calendars, researching topics, and streamlining publishing workflows.' },
  { role: 'Small Businesses', desc: 'Eliminating repetitive administrative friction with lightweight, transparent automation.' },
  { role: 'Researchers', desc: 'Connecting cross-disciplinary literature, cataloging citations, and exploring semantic hypotheses.' },
];

export default function RynekaPage() {
  return (
    <div className="relative min-h-screen">
      {/* ── 01. PRODUCT HERO ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20">
        {/* Layered Background & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#07090D] to-[#07090D] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_75%_35%,rgba(0,229,255,0.09)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_25%_65%,rgba(124,58,237,0.07)_0%,transparent_65%)] pointer-events-none" />

        {/* Dynamic Shader & 3D Visual */}
        <ShaderBackground preset="hero" intensity={0.8} className="opacity-55" />
        <ProductScene variant="ryneka" />

        {/* Text Protection Vignette */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 hero-vignette pointer-events-none z-[5]" />

        <Container className="relative z-10 py-12 sm:py-20">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7E8B9F] hover:text-[#94A3B8] transition-colors mb-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to QORVAYN</span>
            </Link>

            {/* Product Status Chip */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)] animate-pulse" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#00E5FF]">
                  QORVAYN PRODUCT · RYNEKA
                </span>
              </div>
            </Reveal>

            {/* H1 Heading */}
            <Reveal delay={0.06}>
              <h1 className="font-display font-extrabold text-[#FFFFFF] text-5xl sm:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] mb-4">
                RYNEKA
              </h1>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.1}>
              <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#CBD5E1] to-[#00E5FF] tracking-tight mb-6">
                The Future Thinks With You.
              </p>
            </Reveal>

            {/* Official Description */}
            <Reveal delay={0.14}>
              <p className="text-[#94A3B8] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
                An AI Operating System designed to help users think, create, automate, and manage their digital lives through a modular, privacy-first, and open-source platform.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button href="#explore" variant="primary" size="lg" className="bg-[#2563EB] hover:bg-[#3B82F6] shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                  <span>Explore RYNEKA</span>
                  <ArrowRight size={16} />
                </Button>
                <Button href="/" variant="secondary" size="lg">
                  Back to QORVAYN
                </Button>
              </div>
            </Reveal>

            {/* Architecture Stage Indicator */}
            <Reveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7E8B9F] pt-2">
                <span className="flex items-center gap-1.5 text-[#00E5FF]">
                  <Cpu size={13} />
                  <span>Early Architecture</span>
                </span>
                <span className="text-white/20">·</span>
                <span>Research &amp; Exploration Phase</span>
                <span className="text-white/20">·</span>
                <span>Open-Source Philosophy</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 02. CORE PHILOSOPHY: OPERATE, NOT JUST ANSWER ─────── */}
      <section id="philosophy" className="py-24 sm:py-32 bg-[#0A0E1A] relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#00E5FF] mb-3 block">
                  CORE PHILOSOPHY
                </span>
                <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6">
                  AI should help users operate, not just answer.
                </h2>
                <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                  Traditional AI trapped human intelligence inside a text box. RYNEKA is designed as an operating layer where intent turns directly into staged action—with the user always in command.
                </p>
              </div>
            </Reveal>

            {/* Paradigm Comparison Visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              {/* Traditional AI */}
              <Reveal delay={0.06}>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#7E8B9F] block mb-2">
                      Traditional AI Model
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#CBD5E1] mb-4">
                      The Conversational Silo
                    </h3>
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.04] font-mono text-xs text-[#7E8B9F] space-y-2 mb-6">
                      <div className="text-white/50">User → Question</div>
                      <div className="text-white/30">↓ (Cloud server)</div>
                      <div className="text-white/50">AI → Answer</div>
                      <div className="text-white/25">Result: User manually copies, pastes, and performs every action.</div>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      Stateless, isolated, and passive. You ask a question, receive a response, and are left with all the manual operational friction.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.04] text-xs font-mono text-[#7E8B9F]">
                    Chatbot Paradigm
                  </div>
                </div>
              </Reveal>

              {/* RYNEKA Paradigm */}
              <Reveal delay={0.12}>
                <div className="p-8 rounded-3xl bg-gradient-to-b from-[#2563EB]/10 via-[#0A0E1A] to-[#0A0E1A] border border-[#2563EB]/30 shadow-[0_0_40px_rgba(37,99,235,0.12)] h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00E5FF]">
                        RYNEKA Operating System
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#FFFFFF] mb-4">
                      The Action &amp; Operating Layer
                    </h3>
                    <div className="p-4 rounded-2xl bg-black/60 border border-[#2563EB]/30 font-mono text-xs text-[#00E5FF] space-y-2 mb-6">
                      <div className="text-white">User Intent → Context Synthesis</div>
                      <div className="text-[#00E5FF]">↓ Staged Operations</div>
                      <div className="text-[#93C5FD]">Action Plan → Human Approval Gate</div>
                      <div className="text-[#6EE7B7]">Result: Autonomous execution with zero loss of control.</div>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      Stateful, contextual, and modular. You define the intent; RYNEKA coordinates the tools, organizes the knowledge, and stages the execution.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#00E5FF] font-semibold">Human In Control</span>
                    <span className="text-[#7E8B9F]">OS Paradigm</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Core Quote Callout */}
            <Reveal delay={0.18}>
              <div className="text-center pt-6">
                <p className="font-display text-xl sm:text-2xl font-semibold text-[#FFFFFF]">
                  &ldquo;The user stays in control. Always.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 03. WHAT IS RYNEKA: SYSTEM INTERFACE ENVIRONMENT ──── */}
      <section id="explore" className="py-24 sm:py-32 relative">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="SYSTEM ENVIRONMENT"
              title="What is RYNEKA?"
              description="RYNEKA is envisioned as a modular AI Operating System that combines intelligent assistance, task automation, creative workflows, and digital control."
              className="mb-16"
            />
          </Reveal>

          {/* Abstract System Interface Showcase */}
          <div className="max-w-5xl mx-auto">
            <Reveal delay={0.08}>
              <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.1] relative overflow-hidden shadow-2xl">
                {/* Interface Header Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#CBD5E1] uppercase">
                      RYNEKA OS · RUNTIME SANDBOX (CONCEPT)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#7E8B9F]">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-[#00E5FF] border border-white/[0.08]">
                      Kernel: Nominal
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-[#6EE7B7] border border-white/[0.08]">
                      Telemetry: Zero-Leak
                    </span>
                  </div>
                </div>

                {/* Modular Environment Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Column: Intent Stream */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E8B9F] block mb-2">
                        01 // Intent Stream
                      </span>
                      <p className="font-mono text-sm text-[#FFFFFF] mb-3">
                        &gt; Synthesize Q4 engineering milestones, audit privacy disclosures, and stage dispatch dispatches.
                      </p>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                        <span>Semantic synthesis active · 4 modules engaged</span>
                      </div>
                    </div>

                    {/* Staged Action Confirmation Gate */}
                    <div className="p-5 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#93C5FD]">
                          02 // Human Authorization Gate
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2563EB]/30 text-[#93C5FD]">
                          Awaiting Confirmation
                        </span>
                      </div>
                      <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
                        RYNEKA has generated 3 draft dispatches and indexed 14 technical specifications. No external transmission will execute until you approve.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="px-3.5 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-mono font-semibold flex items-center gap-1.5">
                          <CheckCircle2 size={13} />
                          <span>Authorize Staged Actions</span>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] text-[#94A3B8] text-xs font-mono">
                          Inspect Diff
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Connected Module Status */}
                  <div className="md:col-span-5 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E8B9F] block mb-2">
                      03 // Active Connected Modules
                    </span>
                    {[
                      { name: 'Core Reasoner', status: 'Active (Edge)', ping: '< 12ms', color: '#00E5FF' },
                      { name: 'Knowledge Graph', status: 'Indexed (Local)', ping: '100%', color: '#45D7FF' },
                      { name: 'Automation Daemon', status: 'Standby (Supervised)', ping: 'Ready', color: '#2563EB' },
                      { name: 'Device Bridge', status: 'Restricted (Sandboxed)', ping: 'Secure', color: '#7C3AED' },
                    ].map((mod) => (
                      <div
                        key={mod.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mod.color }} />
                          <span className="text-[#F8FAFC] font-medium">{mod.name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#7E8B9F]">
                          <span>{mod.status}</span>
                          <span className="text-[#CBD5E1]">{mod.ping}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-[#7E8B9F]">
                  <span>Conceptual system representation</span>
                  <span>Not a standalone chatbot interface</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 04. MISSION & VISION ─────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0A0E1A]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <Reveal delay={0.06}>
              <GlassCard hover={false} className="p-8 sm:p-12 border-[#00E5FF]/20 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-6">
                    <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#00E5FF]">
                      RYNEKA MISSION
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[#FFFFFF] text-2xl sm:text-3xl mb-4 leading-snug">
                    To build a free, intelligent, privacy-first AI operating system.
                  </h3>
                  <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-6">
                    &ldquo;Build a free, intelligent, privacy-first AI operating system that helps people think, create, and automate their digital lives using open-source technology.&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-xs font-mono text-[#00E5FF]">
                  <span>#FreeFirst</span>
                  <span className="text-white/20">·</span>
                  <span>#PrivacyFirst</span>
                  <span className="text-white/20">·</span>
                  <span>#OpenSource</span>
                </div>
              </GlassCard>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.12}>
              <GlassCard hover={false} className="p-8 sm:p-12 border-[#7C3AED]/20 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6">
                    <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#C084FC]">
                      RYNEKA VISION
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[#FFFFFF] text-2xl sm:text-3xl mb-4 leading-snug">
                    An open AI operating system for the world.
                  </h3>
                  <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-6">
                    &ldquo;Become one of the world&apos;s leading open AI operating systems for work, learning, and creation.&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-xs font-mono text-[#C084FC]">
                  <span>#Work</span>
                  <span className="text-white/20">·</span>
                  <span>#Learn</span>
                  <span className="text-white/20">·</span>
                  <span>#Create</span>
                  <span className="text-white/20">·</span>
                  <span>#Automate</span>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 05. SIX KEY PRODUCT CAPABILITY AREAS ──────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="CAPABILITY HORIZONS"
              title="Built around how people actually work."
              description="RYNEKA is architected into six core capability domains designed to assist your cognitive and operational workflows."
              className="mb-16"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCT_DOMAINS.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <GlassCard key={domain.id} delay={i * 0.06} className="p-8 flex flex-col justify-between">
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border"
                      style={{
                        backgroundColor: `${domain.accent}15`,
                        borderColor: `${domain.accent}30`,
                        color: domain.accent,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: domain.accent }}>
                        {domain.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#7E8B9F]">0{i + 1}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#FFFFFF] mb-3">
                      {domain.tagline}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-[#7E8B9F] uppercase tracking-wider">
                    Planned Product Area
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 06. AUTOMATION VISION: WITH HUMAN AGENCY ──────────── */}
      <section className="py-24 sm:py-32 bg-[#0A0E1A]">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="w-14 h-14 rounded-3xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mx-auto mb-6 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <Workflow size={28} />
              </div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#00E5FF] mb-3 block">
                AUTOMATION PHILOSOPHY
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight leading-[1.08] mb-6">
                Tell RYNEKA what you want done. Let it help you get there.
              </h2>
              <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-10">
                Instead of managing tedious multi-step procedures across disconnected tabs, tell RYNEKA your high-level goal. The system drafts an execution sequence, highlights necessary permissions, and waits for your confirmation before touching your files or staging outputs.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] font-semibold uppercase tracking-wider">
                  <Sliders size={14} />
                  <span>The Staged Automation Guarantee</span>
                </div>
                <ul className="space-y-3 text-sm text-[#94A3B8]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00E5FF] font-bold">1.</span>
                    <span><strong>Transparent Action Plans:</strong> Every automated workflow is previewed in plain language before execution begins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00E5FF] font-bold">2.</span>
                    <span><strong>Scoped Permissions:</strong> RYNEKA never performs unilateral actions or touches unauthorized private services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00E5FF] font-bold">3.</span>
                    <span><strong>Instant Rollback:</strong> Workflows maintain state checkpoints so you can review diffs and undo operations seamlessly.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 07. PRIVACY & OPEN SOURCE FOUNDATIONS ─────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Privacy Section */}
            <Reveal delay={0.06}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-6">
                    <Lock size={20} />
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#2563EB] block mb-2">
                    PRIVACY POSITIONING
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFFFFF] mb-4">
                    Intelligence without giving up control.
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                    True intelligence should amplify the user, not surveil them. RYNEKA is architected with a local-first orientation: minimizing data exposure, avoiding arbitrary cloud harvesting, and ensuring that user context remains sovereign.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-[#CBD5E1]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB]">✓</span>
                      <span>Zero commercial data monetization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB]">✓</span>
                      <span>Explicit context boundaries for models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2563EB]">✓</span>
                      <span>User-controlled deletion &amp; export</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7E8B9F]">
                  Architectural Foundation
                </div>
              </div>
            </Reveal>

            {/* Open Source Section */}
            <Reveal delay={0.12}>
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mb-6">
                    <Code2 size={20} />
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#00E5FF] block mb-2">
                    COMMUNITY &amp; CODE
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFFFFF] mb-4">
                    Built with an open-source mindset.
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                    RYNEKA is designed around an open-source-first philosophy. We believe the future of AI operating software belongs to open standards, public auditability, developer collaboration, and collective stewardship rather than closed proprietary monopolies.
                  </p>
                  <ul className="space-y-2 text-xs font-mono text-[#CBD5E1]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00E5FF]">✓</span>
                      <span>Community inspection &amp; auditability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00E5FF]">✓</span>
                      <span>Modular developer plugin runtime</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00E5FF]">✓</span>
                      <span>Independent forkability &amp; resilience</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#7E8B9F]">
                  Open Ecosystem
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 08. MODULAR ARCHITECTURE ──────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0A0E1A]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="MODULAR BLUEPRINT"
              title="A modular operating architecture."
              description="Rather than a monolithic chatbot, RYNEKA is envisioned as an interconnected mesh of specialized, composable modules."
              className="mb-16"
            />
          </Reveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SYSTEM_MODULES.map((mod, i) => (
                <Reveal key={mod.name} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] transition-colors h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mod.color }} />
                        <span className="text-[10px] font-mono text-[#7E8B9F]">MOD 0{i + 1}</span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#FFFFFF] mb-1.5">
                        {mod.name}
                      </h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {mod.role}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#7E8B9F]">
                      Conceptual Module
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 09. BUILT ON PRINCIPLES: 7 CORE VALUES ─────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FOUNDATIONAL ETHOS"
              title="Built on Principles"
              description="The seven architectural commitments guiding RYNEKA's research and engineering."
              className="mb-16"
            />
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RYNEKA_VALUES.map((val, i) => (
              <Reveal key={val.number} delay={i * 0.05}>
                <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#00E5FF] block mb-2">
                      {val.number}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#FFFFFF] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Empty block balancing the grid */}
            <Reveal delay={0.35}>
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 border border-dashed border-white/[0.1] h-full flex flex-col items-center justify-center text-center">
                <Compass size={28} className="text-[#00E5FF] mb-3" />
                <span className="font-display font-bold text-lg text-[#FFFFFF] mb-1">
                  Integrity By Default
                </span>
                <p className="text-xs text-[#7E8B9F] max-w-xs">
                  Software that respects human intelligence above corporate monetization.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 10. TARGET USERS ──────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#0A0E1A]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="INTENDED AUDIENCES"
              title="Built for people who build, learn, and create."
              description="RYNEKA is architected for those who demand a thinking partner and operational multiplier, not merely a conversational query box."
              className="mb-16"
            />
          </Reveal>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_AUDIENCES.map((user, i) => (
              <Reveal key={user.role} delay={i * 0.05}>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                    <h3 className="font-display font-bold text-lg text-[#FFFFFF]">
                      {user.role}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {user.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 11. RYNEKA + QORVAYN (ECOSYSTEM RELATIONSHIP) ─────── */}
      <section className="py-24 sm:py-32">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  ECOSYSTEM LINEAGE
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-4xl tracking-tight mb-8">
                The flagship intelligence of QORVAYN.
              </h2>
            </Reveal>

            {/* Hierarchy Graphic */}
            <Reveal delay={0.08}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#7E8B9F]">
                    Parent Technology Company
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#FFFFFF]">
                    QORVAYN
                  </h3>
                  <p className="text-sm font-mono text-[#00E5FF]">
                    &ldquo;Building What Comes Next.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-center text-white/30">
                  <div className="w-px h-8 bg-gradient-to-b from-white/40 to-[#00E5FF]" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#00E5FF]">
                    First Major Operating Product
                  </div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#FFFFFF]">
                    RYNEKA
                  </h3>
                  <p className="text-sm font-mono text-[#CBD5E1]">
                    &ldquo;The Future Thinks With You.&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-4 max-w-xl mx-auto border-t border-white/[0.06]">
                  RYNEKA represents QORVAYN&apos;s commitment to build sovereign, human-centered technology that amplifies human capability rather than replacing human judgment.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── 12. FUTURE DIRECTION & UPDATES CAPTURE ────────────── */}
      <section id="updates" className="py-24 sm:py-32 bg-[#0A0E1A]">
        <Container size="sm">
          <Reveal>
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mx-auto mb-5 shadow-[0_0_20px_rgba(0,229,255,0.25)]">
                <Zap size={22} />
              </div>
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#00E5FF] mb-2 block">
                WHERE RYNEKA IS GOING
              </span>
              <h2 className="font-display font-bold text-[#FFFFFF] text-3xl sm:text-4xl mb-3 tracking-tight">
                Follow RYNEKA&apos;s development.
              </h2>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-md mx-auto">
                Be the first to receive confidential engineering dispatches, architectural milestones, and community preview opportunities.
              </p>
            </div>

            <EmailCapture
              buttonLabel="Get early access updates"
              note="Product dispatches only. No spam. Unsubscribe at any time."
            />
          </Reveal>

          {/* Reciprocal Ecosystem Links */}
          <div className="mt-16 pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <Link
              href="/"
              className="text-[#94A3B8] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              <ArrowLeft size={12} />
              <span>Back to QORVAYN Home</span>
            </Link>

            <div className="flex items-center gap-6">
              <span className="text-[#7E8B9F]">Other Products:</span>
              <Link
                href="/products/skypics"
                className="text-[#00E5FF] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
              >
                SkyPics
              </Link>
              <Link
                href="/products/goalwear"
                className="text-[#6EE7B7] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
              >
                GoalWear
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
