import type { Metadata } from 'next';
import Link from 'next/link';
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
  Camera,
  Cloud,
  Compass,
  Eye,
  Globe2,
  HeartHandshake,
  Layers,
  Maximize2,
  Mountain,
  Palmtree,
  Search,
  Sparkles,
  Sun,
  Sunset,
  VolumeX,
  Wand2,
  Wind,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'SkyPics — Visual Discovery Reimagined | QORVAYN',
  'SkyPics is an AI-powered visual and social platform by QORVAYN, focused on nature, sky photography, creative discovery, and visual experiences.',
  '/skypics'
);

// 06. The Experience Pillars
const EXPERIENCE_PILLARS = [
  {
    id: 'discover',
    icon: Search,
    title: 'DISCOVER',
    subtitle: 'Find beauty across horizons',
    desc: 'Unearth curated sky phenomena, untouched natural landscapes, and extraordinary vantage points captured by photographers globally.',
    accent: '#38BDF8',
  },
  {
    id: 'capture',
    icon: Camera,
    title: 'CAPTURE',
    subtitle: 'Moments from the world around you',
    desc: 'Preserve transient moments — sudden dusk light, passing squall lines, golden hours — in their rawest, most truthful visual fidelity.',
    accent: '#00E5FF',
  },
  {
    id: 'create',
    icon: Wand2,
    title: 'CREATE',
    subtitle: 'Turn photography into experiences',
    desc: 'Transform still frames into atmospheric visual narratives with intelligent chromatic palettes and spatial context.',
    accent: '#8B5CF6',
  },
  {
    id: 'connect',
    icon: HeartHandshake,
    title: 'CONNECT',
    subtitle: 'Share visual resonance',
    desc: 'Form quiet, authentic connections with people who share a reverence for natural light, open horizons, and contemplative seeing.',
    accent: '#38BDF8',
  },
  {
    id: 'explore',
    icon: Compass,
    title: 'EXPLORE',
    subtitle: 'Perspectives across earth & sky',
    desc: 'Traverse remote mountain ridges, desert twilights, and coastal skies through photographic perspectives shared worldwide.',
    accent: '#CBD5E1',
  },
];

// 07. AI + Photography Directions (Carefully framed as research/vision)
const AI_DIRECTIONS = [
  {
    title: 'Intelligent Image Understanding',
    category: 'Cognitive Vision',
    desc: 'Designed to comprehend atmospheric conditions, cloud formations (cirrus, cumulonimbus, mammatus), solar angles, and natural lighting states without requiring manual tagging.',
    status: 'Planned Architecture',
  },
  {
    title: 'Contextual Visual Discovery',
    category: 'Exploration Engine',
    desc: 'Envisioned to help users discover photographs based on emotional tone, celestial events, meteorological phenomena, and harmonic color compositions.',
    status: 'Research Horizon',
  },
  {
    title: 'Intelligent Photo Organization',
    category: 'Workspace Utility',
    desc: 'Planned to organize sprawling image libraries by lighting condition, solar elevation, seasonal flora cycles, and camera focal characteristics.',
    status: 'Conceptual Direction',
  },
  {
    title: 'Creative Visual Assistance',
    category: 'Creator Augmentation',
    desc: 'Designed to offer subtle, non-destructive suggestions for dynamic range preservation, tonal harmony, and horizon balance while respecting original raw intent.',
    status: 'Exploratory Research',
  },
];

// 08. Nature & Sky Visual Categories
const NATURE_SKY_GALLERY = [
  {
    id: 'sky',
    icon: Cloud,
    label: 'SKY',
    heading: 'Atmospheric Canvas',
    subtext: 'Clouds, sunsets, celestial bodies, squalls, and twilight transitions.',
    gradient: 'from-[#0B1728] via-[#102A4A] to-[#081220]',
    accentColor: '#38BDF8',
    telemetry: 'ALT 4,200m · CIRRUS DENSITY 42% · SOLAR ANGLE -4°',
    spec: 'ISO 100 · 35mm · ƒ/2.8 · 1/250s',
  },
  {
    id: 'nature',
    icon: Mountain,
    label: 'NATURE',
    heading: 'Terrestrial Solitude',
    subtext: 'Ancient mountain ridges, boreal forests, oceanic swells, and remote plateaus.',
    gradient: 'from-[#0A1A24] via-[#0E2E3E] to-[#07131B]',
    accentColor: '#00E5FF',
    telemetry: 'LAT 64.14° N · FJORD VALLEY · MIST GRADIENT 88%',
    spec: 'ISO 200 · 50mm · ƒ/4.0 · 1/500s',
  },
  {
    id: 'moments',
    icon: Sun,
    label: 'MOMENTS',
    heading: 'Everyday Ephemera',
    subtext: 'Translucent morning condensation, urban twilight shadows, and fleeting light shafts.',
    gradient: 'from-[#1E1730] via-[#2F1F4D] to-[#120D20]',
    accentColor: '#8B5CF6',
    telemetry: 'DAWN BREAK · AMBIENT TEMP 14°C · DIFFUSE LUMENS 320',
    spec: 'ISO 400 · 85mm · ƒ/1.8 · 1/1000s',
  },
  {
    id: 'perspectives',
    icon: Eye,
    label: 'PERSPECTIVES',
    heading: 'Shared Vantage Points',
    subtext: 'Multiple pairs of eyes experiencing the exact same celestial event from distinct corners of the globe.',
    gradient: 'from-[#0E1F30] via-[#173858] to-[#091522]',
    accentColor: '#38BDF8',
    telemetry: 'GLOBAL APERTURE · DUAL OBSERVER · 18,400 KM OFFSET',
    spec: 'SYNCHRONIZED CAPTURE · 24mm · ƒ/8.0 · 1/60s',
  },
];

// 11. Product Differentiation
const DIFFERENTIATION = [
  {
    pillar: 'LESS NOISE',
    lead: 'More meaningful visual contemplation',
    body: 'Free from algorithmic rage-bait, hyperactive infinite reels, and auto-playing ads. SkyPics prioritizes high-resolution, uncompressed photographic art that breathes.',
  },
  {
    pillar: 'MORE DISCOVERY',
    lead: 'Explore beyond the surface frame',
    body: 'An image is a portal. Inspect atmospheric telemetry, related geographical landscapes, celestial alignments, and chromatic counterparts across the planet.',
  },
  {
    pillar: 'AI WITH PURPOSE',
    lead: 'Intelligence serving human wonder',
    body: 'AI is deployed strictly to assist discovery, analyze atmospheric optics, and organize personal archives — never to generate cheap decorative noise or substitute human seeing.',
  },
  {
    pillar: 'NATURE AT CENTER',
    lead: 'Grounded in the physical world',
    body: 'Rooted in the organic grandeur of the real Earth and open sky. A digital medium designed to inspire people to look up from their screens and go outside.',
  },
  {
    pillar: 'COMMUNITY',
    lead: 'Visual resonance without vanity metrics',
    body: 'No public follower counts, no gamified engagement traps, no dopamine-seeking mechanics. A calm gathering space for creators united by visual curiosity.',
  },
];

// 12. Core Product Principles (7 Principles)
const CORE_PRINCIPLES = [
  {
    num: '01',
    title: 'Visual First',
    desc: 'The integrity of the image and the purity of the visual experience supersede all UI ornament. Interfaces must recede so the photograph commands full attention.',
  },
  {
    num: '02',
    title: 'Nature Inspired',
    desc: 'Rooted deeply in the rhythms of the natural world — solar cycles, seasonal changes, cloud physics, and oceanic horizons form the foundational palette.',
  },
  {
    num: '03',
    title: 'AI With Purpose',
    desc: 'Intelligent systems must serve as quiet optical lenses that illuminate context and assist discovery, rather than flashy technological decorations.',
  },
  {
    num: '04',
    title: 'Human Creativity',
    desc: 'Technology exists to amplify human perception. The intuition, patience, and vulnerability of the photographer remain sacred and irreplaceable.',
  },
  {
    num: '05',
    title: 'Meaningful Discovery',
    desc: 'Every journey through the platform should reward the viewer with something authentic, memorable, and visually nourishing.',
  },
  {
    num: '06',
    title: 'Calm Experience',
    desc: 'Consciously engineered to eliminate urgency, notification anxiety, and addictive behavioral loops. A serene harbor on the internet.',
  },
  {
    num: '07',
    title: 'Community of Care',
    desc: 'Cultivate shared reverence for the natural world and photography craft, fostering genuine peer connection over social status competition.',
  },
];

// 13. Target Audiences
const TARGET_AUDIENCES = [
  {
    role: 'Landscape & Sky Photographers',
    context: 'Pursuing rare optical phenomena, meteor showers, storm fronts, and golden-hour clarity.',
  },
  {
    role: 'Nature Lovers & Explorers',
    context: 'Seeking quiet solace in panoramic horizons, wilderness documentation, and planetary ecology.',
  },
  {
    role: 'Travelers & Wanderlust Seekers',
    context: 'Documenting the texture of remote terrain, local atmosphere, and authentic geographical perspectives.',
  },
  {
    role: 'Visual Artists & Curators',
    context: 'Drawing palette inspiration, lighting reference, and composition balance from the natural world.',
  },
  {
    role: 'Photography Enthusiasts',
    context: 'Honing camera craft, learning exposure nuance in complex natural lighting, and sharing observations.',
  },
  {
    role: 'People Who Look Closer',
    context: 'Anyone who routinely stops to admire the pattern of clouds, dusk colors, or the rising moon.',
  },
];

// 14. Future Research Directions
const FUTURE_HORIZONS = [
  {
    title: 'Spatial Depth & 3D Photographic Environments',
    desc: 'Researching subtle neural depth estimation to allow 2D landscape captures to be experienced as tranquil, parallax-enabled spatial environments.',
  },
  {
    title: 'Celestial & Atmospheric Phenomenon Forecasts',
    desc: 'Envisioning localized forecasting that alerts photographers when specific cloud strata, atmospheric inversions, or lunar alignments will manifest.',
  },
  {
    title: 'Non-Destructive Tonal Orchestration',
    desc: 'Investigating adaptive color-grading models that preserve true sensor dynamic range in high-contrast dawn/dusk exposures.',
  },
  {
    title: 'Decentralized High-Fidelity Image Archival',
    desc: 'Architecting distributed, lossless cloud storage pipelines so original RAW data remains permanently accessible to creators without compression loss.',
  },
];

export default function SkyPicsPage() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-[#CBD5E1] selection:bg-[#38BDF8]/30 selection:text-[#FFFFFF] overflow-hidden">
      {/* ── 01. HERO SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 border-b border-white/[0.08]">
        {/* Sky Atmospheric Background Shader */}
        <ShaderBackground preset="sky" intensity={0.75} className="opacity-60" />

        {/* 3D Atmospheric Aperture Scene */}
        <ProductScene variant="skypics" />

        {/* Radial Depth Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/40 via-transparent to-[#050816] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl py-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#38BDF8]">
                QORVAYN PRODUCT
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display font-extrabold text-[#FFFFFF] text-6xl sm:text-7xl lg:text-8xl tracking-tight mb-6">
              SkyPics
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="font-display text-2xl sm:text-3xl text-[#38BDF8] font-medium tracking-tight mb-6">
              See the world differently.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              An AI-powered visual platform designed around nature, sky, photography, and creative discovery.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="#overview" variant="cyan" size="lg">
                Explore SkyPics
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Back to QORVAYN
              </Button>
            </div>
          </Reveal>

          {/* Subtext Guardrail Notice */}
          <Reveal delay={0.3}>
            <div className="mt-14 pt-8 border-t border-white/[0.08] flex items-center justify-center gap-6 text-xs font-mono text-[#7E8B9F]">
              <span>Product Vision & Research</span>
              <span>·</span>
              <span>Nature & Sky</span>
              <span>·</span>
              <span>Visual Discovery</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 02. WHAT IS SKYPICS? ─────────────────────────────── */}
      <section id="overview" className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#38BDF8] font-bold block mb-4">
                02 / Product Overview
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-8">
                What is SkyPics?
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent mx-auto mb-10" />
              <p className="text-lg sm:text-xl text-[#CBD5E1] leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                SkyPics is an AI-powered visual and social platform being developed under <strong className="text-white font-medium">QORVAYN</strong>, focused on nature, sky photography, and creative visual experiences.
              </p>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
                In an era dominated by hyperactive algorithmic feeds designed to maximize screen time, SkyPics is conceived as an antidote: a quiet, expansive space dedicated to the transcendent beauty of the sky and the natural world.
              </p>
            </div>
          </Reveal>

          {/* Core Philosophy Callout */}
          <Reveal delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1120] to-[#050816] border border-[#38BDF8]/20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest font-semibold block mb-3">
                  Foundational Premise
                </span>
                <blockquote className="font-display text-2xl sm:text-4xl text-[#FFFFFF] font-semibold leading-tight tracking-tight mb-6">
                  &ldquo;Technology should help people see more.&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
                  SkyPics is built on the belief that photography is more than uploading an image. It is about capturing moments, discovering beauty, exploring nature, sharing visual experiences, connecting people through photography, and using AI to enhance the way people interact with visual content.
                </p>

                {/* Emotional Cadence */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
                  {[
                    { step: '01', word: 'Look.', desc: 'Slow down and perceive light.' },
                    { step: '02', word: 'Discover.', desc: 'Explore horizons and phenomena.' },
                    { step: '03', word: 'Create.', desc: 'Transform moments into art.' },
                    { step: '04', word: 'Share.', desc: 'Connect through visual resonance.' },
                  ].map((cadence) => (
                    <div key={cadence.step} className="p-3">
                      <span className="text-[10px] font-mono text-[#38BDF8] block mb-1">{cadence.step}</span>
                      <h4 className="font-display font-bold text-lg text-white mb-1">{cadence.word}</h4>
                      <p className="text-xs text-[#7E8B9F] leading-snug">{cadence.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 03. THE EXPERIENCE ───────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 bg-[#070B16] border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="03 / The Experience"
              title="Built around the moments worth seeing."
              description="SkyPics is designed around visual contemplation rather than endless content consumption."
              className="mb-20 text-center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.id} delay={idx * 0.08} className="p-8 flex flex-col justify-between">
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        border: `1px solid ${item.accent}35`,
                        color: item.accent,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono tracking-widest uppercase text-[#7E8B9F] block mb-2">
                      Experience Module
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#FFFFFF] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-[#38BDF8] mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#7E8B9F]">
                    <span>Conceptual Mode</span>
                    <span style={{ color: item.accent }}>● Envisioned</span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 04. AI + PHOTOGRAPHY ─────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8B5CF6] font-bold block mb-4">
                04 / Intelligence & Optics
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Where AI meets photography.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Rather than replacing the photographer or synthesizing artificial imagery, SkyPics envisions AI as an intelligent optical companion that deepens discovery and organizes visual archives.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AI_DIRECTIONS.map((dir, i) => (
              <GlassCard key={dir.title} delay={i * 0.08} className="p-8 sm:p-10 relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30 font-semibold uppercase">
                    {dir.category}
                  </span>
                  <span className="text-xs font-mono text-[#7E8B9F] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    {dir.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#FFFFFF] mb-3">
                  {dir.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {dir.desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Grounded Disclaimer Banner */}
          <Reveal delay={0.2}>
            <div className="mt-12 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center max-w-2xl mx-auto">
              <p className="text-xs font-mono text-[#7E8B9F] leading-relaxed">
                <strong className="text-[#CBD5E1]">Research Notice:</strong> The features above reflect product architecture explorations under development at QORVAYN. SkyPics does not claim released commercial AI generation or automated editing models.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 05. NATURE & SKY ─────────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 bg-[#070B16] border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00E5FF] font-bold block mb-4">
                05 / Atmospheric Canvas
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
                Made for the sky. Inspired by the world.
              </h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                The sky is an ever-shifting, boundaryless gallery shared by everyone on Earth. SkyPics organizes visual storytelling around four primordial natural dimensions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NATURE_SKY_GALLERY.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={idx * 0.1}>
                  <div
                    className={`rounded-3xl p-8 sm:p-10 bg-gradient-to-br ${item.gradient} border border-white/10 hover:border-white/25 transition-all duration-300 relative overflow-hidden group shadow-xl`}
                  >
                    {/* Atmospheric Glow */}
                    <div
                      className="absolute -right-12 -top-12 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    <div className="relative z-10 flex flex-col justify-between h-full min-h-[260px]">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              backgroundColor: `${item.accentColor}20`,
                              border: `1px solid ${item.accentColor}40`,
                              color: item.accentColor,
                            }}
                          >
                            <Icon size={20} />
                          </div>
                          <span className="text-xs font-mono tracking-widest text-[#7E8B9F] uppercase">
                            0{idx + 1} · {item.label}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFFFFF] mb-3">
                          {item.heading}
                        </h3>
                        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
                          {item.subtext}
                        </p>
                      </div>

                      {/* Photographic Optical Telemetry Mockup */}
                      <div className="pt-6 border-t border-white/[0.08] space-y-1.5 font-mono text-[11px] text-[#7E8B9F]">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">ATMOSPHERE:</span>
                          <span className="text-[#38BDF8]">{item.telemetry}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">OPTICS:</span>
                          <span>{item.spec}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 06. VISUAL DISCOVERY ─────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#38BDF8] font-bold block mb-4">
                06 / Discovery Architecture
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Every image can lead somewhere.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                In SkyPics, an image is not a static endpoint to quickly scroll past. It is an entry portal that connects to atmospheric context, similar lighting conditions, and geographically diverse skies.
              </p>
            </div>
          </Reveal>

          {/* Discovery Stream Pipeline Mockup */}
          <Reveal delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#090E1A] border border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Focal Aperture Frame */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#132845] via-[#1F3D68] to-[#0A1626] border border-[#38BDF8]/40 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25)_0%,transparent_65%)]" />
                    <div className="flex justify-between items-start relative z-10">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 uppercase">
                        Active Focal Point
                      </span>
                      <Maximize2 size={14} className="text-[#94A3B8]" />
                    </div>
                    <div className="relative z-10 text-center py-6">
                      <Cloud size={44} className="text-[#38BDF8] mx-auto mb-3 animate-pulse" />
                      <p className="font-display font-bold text-white text-lg">Mammatus Stratus at Dusk</p>
                      <p className="text-xs font-mono text-[#7E8B9F]">Solar Angle -2.4° · Luminescence Index 84</p>
                    </div>
                    <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-[#94A3B8] pt-3 border-t border-white/10">
                      <span>RAW PERSPECTIVE</span>
                      <span className="text-[#00E5FF]">CONNECTED (4 PATHS)</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#7E8B9F] mt-3">Initial Photograph Entry</span>
                </div>

                {/* Center Connector Indicator */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8]">
                    <ArrowRight size={16} className="hidden lg:block" />
                    <ArrowRight size={16} className="lg:hidden rotate-90" />
                  </div>
                </div>

                {/* Right: Unfolded Dimensional Branches */}
                <div className="lg:col-span-6 space-y-3">
                  {[
                    {
                      label: 'Atmospheric Physics',
                      detail: 'Cirrus cloud altitude, barometric moisture balance, and solar scatter refraction.',
                      badge: 'Contextual Layer',
                    },
                    {
                      label: 'Harmonic Color Palette',
                      detail: 'Matches other landscapes bathed in the identical 2,800K twilight Kelvin spectrum.',
                      badge: 'Chromatic Resonance',
                    },
                    {
                      label: 'Synchronous Horizons',
                      detail: 'Explores who else looked up at the sky at this precise universal timestamp worldwide.',
                      badge: 'Planetary Link',
                    },
                    {
                      label: 'Creator Field Notes',
                      detail: 'Exposure thoughts, focal choices, and reflections from the photographer.',
                      badge: 'Human Memory',
                    },
                  ].map((branch, bIdx) => (
                    <div
                      key={branch.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#38BDF8]/40 transition-colors flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                          <h4 className="font-display font-semibold text-sm text-white">{branch.label}</h4>
                        </div>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">{branch.detail}</p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#7E8B9F] shrink-0">
                        {branch.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 07. SOCIAL PHILOSOPHY ────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 bg-[#070B16] border-b border-white/[0.08]">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8B5CF6] font-bold block mb-4">
                07 / Quiet Social Philosophy
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Photography is better when it connects people.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
                SkyPics explores a social philosophy rooted in mutual appreciation, craft, and shared wonder — entirely divorced from modern engagement engineering.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlassCard className="p-8">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 mb-5">
                <VolumeX size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">What SkyPics Rejects</h3>
              <ul className="space-y-2.5 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>No public like counts, virality scores, or follower chasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>No ephemeral 24-hour disappearing content designed to trigger FOMO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>No algorithmic outrage feedback loops or sponsored ad intrusions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span>
                  <span>No addictive infinite scroll designed to hijack attention</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/25 flex items-center justify-center text-[#38BDF8] mb-5">
                <HeartHandshake size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">What SkyPics Cultivates</h3>
              <ul className="space-y-2.5 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8]">✓</span>
                  <span>Quiet admiration for lighting, patience, and photographic craft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8]">✓</span>
                  <span>Thoughtful field reflections between photographers and observers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8]">✓</span>
                  <span>Shared interest circles around specific natural phenomena & sky events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#38BDF8]">✓</span>
                  <span>Contemplative viewing sessions that end with feeling enriched</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ── 08. PRODUCT DIFFERENTIATION ──────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#00E5FF] font-bold block mb-4">
                08 / Distinct Trajectory
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Not another photo feed.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Why build a visual platform in the 2020s? Because the digital photography experience has been reduced to fast-scrolling commodities. SkyPics is engineered on five deliberate departures.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 max-w-4xl mx-auto">
            {DIFFERENTIATION.map((item, idx) => (
              <GlassCard key={item.pillar} delay={idx * 0.06} className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#38BDF8] font-bold">
                    {item.pillar}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {item.lead}
                  </h3>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
                  {item.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 09. CORE PRINCIPLES ──────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 bg-[#070B16] border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="09 / Foundational Values"
              title="Seven Core Product Principles"
              description="The uncompromised architectural commitments that steer every design decision for SkyPics."
              className="mb-20 text-center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_PRINCIPLES.map((pr, i) => (
              <GlassCard key={pr.num} delay={i * 0.06} className="p-8">
                <span className="text-sm font-mono text-[#38BDF8] font-bold block mb-3">
                  {pr.num}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {pr.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {pr.desc}
                </p>
              </GlassCard>
            ))}

            {/* Principle 07 Highlight Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0C1B30] to-[#081120] border border-[#38BDF8]/30 flex flex-col justify-between">
              <div>
                <span className="text-sm font-mono text-[#00E5FF] font-bold block mb-3">
                  SUMMARY
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Technology in Service of Reverence
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Every byte of code must honor the natural world and make digital space more humane, calm, and inspiring.
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 text-xs font-mono text-[#38BDF8]">
                QORVAYN ETHICAL DESIGN
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. TARGET AUDIENCE ──────────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#38BDF8] font-bold block mb-4">
                10 / Designed Community
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Built for people who look closer.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                SkyPics is being crafted for anyone who recognizes that observing nature with intention is an act of deep contemplation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_AUDIENCES.map((target, idx) => (
              <GlassCard key={target.role} delay={idx * 0.06} className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <h3 className="font-display font-semibold text-lg text-white">
                    {target.role}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {target.context}
                </p>
              </GlassCard>
            ))}
          </div>

          <p className="text-center text-xs font-mono text-[#7E8B9F] mt-10">
            Intended community cohorts — based on product design scope
          </p>
        </Container>
      </section>

      {/* ── 11. FUTURE HORIZONS & 3D ─────────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 bg-[#070B16] border-b border-white/[0.08]">
        <Container>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#8B5CF6] font-bold block mb-4">
                11 / Research & Horizons
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                Where SkyPics could go next.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Long-term technical explorations into spatial depth, atmospheric optics, and non-destructive image processing.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {FUTURE_HORIZONS.map((horizon, idx) => (
              <GlassCard key={horizon.title} delay={idx * 0.08} className="p-8">
                <span className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase font-semibold block mb-2">
                  Horizon Exploration 0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {horizon.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {horizon.desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* 12. 3D Experience Preview (Subtle Depth Hint) */}
          <Reveal delay={0.2}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#091526] via-[#0D1E38] to-[#060D18] border border-[#38BDF8]/30 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest font-semibold block mb-3">
                  Spatial Vision
                </span>
                <h3 className="font-display font-bold text-3xl text-white mb-4">
                  From Photograph to Dimension
                </h3>
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
                  In future iterations, a photograph may cease to be merely a flat rectangle. Through depth estimation and atmospheric volumetrics, captures can be experienced as immersive spatial moments.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#7E8B9F]">
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[#38BDF8]">Image</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[#00E5FF]">Depth Map</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[#8B5CF6]">Atmosphere</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white">Interactive Space</span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 13. SKYPICS + QORVAYN LINEAGE ────────────────────── */}
      <section className="py-28 sm:py-36 relative z-10 border-b border-white/[0.08]">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#38BDF8] font-bold block mb-4">
                13 / Ecosystem Architecture
              </span>
              <h2 className="font-display font-extrabold text-[#FFFFFF] text-3xl sm:text-5xl tracking-tight mb-6">
                SkyPics within QORVAYN
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
                QORVAYN is dedicated to building what comes next — intelligent digital products that make technology more useful, accessible, and human-centered.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#080D1A] border border-white/10 text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
                <span className="font-display font-bold text-sm text-white tracking-widest uppercase">
                  QORVAYN
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">— &ldquo;Building What Comes Next&rdquo;</span>
              </div>

              <div className="w-0.5 h-10 bg-gradient-to-b from-[#4F8CFF] to-[#38BDF8] mx-auto mb-8" />

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                <span className="font-display font-bold text-sm text-white tracking-widest uppercase">
                  SKYPICS
                </span>
                <span className="text-xs font-mono text-[#38BDF8]">— &ldquo;See the world differently&rdquo;</span>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xl mx-auto">
                SkyPics represents QORVAYN&apos;s commitment to creative visual tools, proving that futuristic technology can cultivate quiet reverence for the natural world instead of digital noise.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 14. FINAL CTA & RECIPROCAL NAVIGATION ────────────── */}
      <section className="py-28 sm:py-36 relative z-10">
        <Container size="sm" className="text-center">
          <Reveal>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#38BDF8] font-bold block mb-4">
              14 / Next Steps
            </span>
            <h2 className="font-display font-extrabold text-[#FFFFFF] text-4xl sm:text-5xl tracking-tight mb-6">
              See what&apos;s next.
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-md mx-auto">
              SkyPics is part of the future QORVAYN is building. Follow our journey as we architect human-centered digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/" variant="primary" size="lg">
                Back to QORVAYN
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact QORVAYN
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
                  href="/products/goalwear"
                  className="text-[#6EE7B7] hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                >
                  GoalWear
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
