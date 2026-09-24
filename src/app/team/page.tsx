import type { Metadata } from 'next';
import Image from 'next/image';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHero } from '@/components/ui/page-hero';
import { TEAM, type TeamMember } from '@/data/team';
import { SignalScene } from '@/components/three/signal-scene';
import { Users, Globe } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'The Team — People Behind QORVAYN',
  'Meet the people building QORVAYN — a remote-first team architecting intelligent digital products rooted in Bangladesh.',
  '/team'
);

function TeamCard({
  member,
  delay = 0,
  featured = false,
}: {
  member: TeamMember;
  delay?: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-[#0B0F17]/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 group flex flex-col justify-between h-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]">
        <div>
          {/* 4:5 Editorial Portrait Container */}
          <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#07090D] mb-5 border border-white/[0.06]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes={
                featured
                  ? '(max-width: 768px) 100vw, 50vw'
                  : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              }
              priority={featured}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ objectPosition: member.objectPosition || 'center top' }}
            />

            {/* Subtle Editorial Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent pointer-events-none opacity-80" />

            {/* Category Tag */}
            <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#07090D]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider uppercase text-[#94A3B8]">
              {member.category}
            </div>
          </div>

          {/* Name & Role */}
          <div className="px-1">
            <h3
              className={`font-display font-bold text-[#F5F7FA] group-hover:text-[#7DB0FF] transition-colors leading-tight mb-2 ${
                featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              }`}
            >
              {member.name}
            </h3>

            <p
              className={`text-[#94A3B8] font-medium leading-relaxed ${
                featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
              }`}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Minimal Footer Metadata */}
        <div className="mt-6 pt-4 px-1 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <span className="uppercase tracking-widest text-[11px] text-[#94A3B8]">
            QORVAYN
          </span>
          <span className="flex items-center gap-1.5 text-[#4F8CFF]">
            <Globe size={13} />
            Remote
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export default function TeamPage() {
  const leadership = TEAM.filter((m) => m.category === 'Leadership');
  const coreTeam = TEAM.filter((m) => m.category === 'Core Team');

  return (
    <>
      <PageHero
        eyebrow="THE PEOPLE BEHIND QORVAYN"
        title="A team building toward the future."
        description="QORVAYN is a remote-first team building intelligent digital products and creative experiences."
        scene={<SignalScene />}
        shaderPreset="hero"
      />

      {/* ── TEAM GRID ───────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Collective"
              title="Team"
              description="A multi-disciplinary group collaborating remotely across design, engineering, systems, and product development."
              className="mb-4"
            />
            <p className="text-center text-xs font-mono text-[#6B7280] tracking-wider uppercase mb-16 sm:mb-20">
              Team titles are displayed based on current responsibilities and team agreement.
            </p>
          </Reveal>

          {/* Leadership Tier (Ryan Zannah & Tam Zayn) */}
          <div className="mb-14 sm:mb-20">
            <Reveal>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
                <h2 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  Leadership & Founders
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {leadership.map((member, i) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  delay={i * 0.08}
                  featured={true}
                />
              ))}
            </div>
          </div>

          {/* Core Team Tier (Siyami Muntaha Saba, Rahat Ehsan Sufi, Shoyetur Rahman Sayel) */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <h2 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  Product, Design & Operations
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coreTeam.map((member, i) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  delay={i * 0.08}
                  featured={false}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CULTURE NOTICE ──────────────────────────────────── */}
      <section className="py-20 bg-[#0B0F17] border-t border-white/5">
        <Container size="md">
          <Reveal>
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center mx-auto text-[#4F8CFF] mb-5">
                <Users size={22} />
              </div>
              <h2 className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl mb-4">
                Remote-first, united by purpose.
              </h2>
              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                While the team primarily works remotely across Bangladesh, members occasionally meet in person at a private location to collaborate, plan, and work together.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
