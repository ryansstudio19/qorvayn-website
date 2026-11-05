import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PAGE_SEO } from '@/data/seo';
import { BreadcrumbListJsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PageHero } from '@/components/ui/page-hero';
import { TeamCard } from '@/components/sections/team-card';
import { TEAM } from '@/data/team';
import { SignalScene } from '@/components/three/signal-scene';
import { Users } from 'lucide-react';

export const metadata: Metadata = pageMetadata(PAGE_SEO.team);

export default function TeamPage() {
  const leadership = TEAM.filter((m) => m.category === 'Leadership');
  const coreTeam = TEAM.filter((m) => m.category === 'Core Team');

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: 'Team', path: '/team' }]} />
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

          {/* Leadership Tier (Founders: Ryan Zannah, Adelia Maharani, Siyami Muntaha Saba) */}
          <div className="mb-14 sm:mb-20">
            <Reveal>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
                <h2 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  Leadership &amp; Founders
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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

          {/* Core Team Tier (Tam Zayn, Rahat Ehsan Sufi, Shoyetur Rahman Sayel) */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-8 pb-3 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <h2 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
                  Product, Technology &amp; Operations
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
