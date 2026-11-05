'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/ui/reveal';
import type { TeamMember } from '@/data/team';
import {
  Globe,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react';

interface SocialEntry {
  key: string;
  href: string;
  label: string;
  icon: LucideIcon;
}

function getMemberSocials(member: TeamMember): SocialEntry[] {
  if (!member.socials) return [];
  const s = member.socials;
  const list: SocialEntry[] = [];
  if (s.website) {
    list.push({ key: 'website', href: s.website, label: `${member.name} Portfolio Website`, icon: Globe });
  }
  if (s.facebook) {
    list.push({ key: 'facebook', href: s.facebook, label: `${member.name} on Facebook`, icon: Facebook });
  }
  if (s.instagram) {
    list.push({ key: 'instagram', href: s.instagram, label: `${member.name} on Instagram`, icon: Instagram });
  }
  if (s.linkedin) {
    list.push({ key: 'linkedin', href: s.linkedin, label: `${member.name} on LinkedIn`, icon: Linkedin });
  }
  if (s.twitter) {
    list.push({ key: 'twitter', href: s.twitter, label: `${member.name} on X (Twitter)`, icon: Twitter });
  }
  if (s.youtube) {
    list.push({ key: 'youtube', href: s.youtube, label: `${member.name} on YouTube`, icon: Youtube });
  }
  if (s.github) {
    list.push({ key: 'github', href: s.github, label: `${member.name} on GitHub`, icon: Github });
  }
  return list;
}

export function TeamCard({
  member,
  delay = 0,
  featured = false,
  compact = false,
}: {
  member: TeamMember;
  delay?: number;
  featured?: boolean;
  compact?: boolean;
}) {
  const [tappedOpen, setTappedOpen] = useState(false);
  const socials = getMemberSocials(member);
  const hasSocials = socials.length > 0;

  return (
    <Reveal delay={delay}>
      <div
        className={`rounded-2xl sm:rounded-3xl ${
          compact ? 'p-4' : 'p-4 sm:p-5'
        } bg-[#0B0F17]/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 group flex flex-col justify-between h-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]`}
        onMouseLeave={() => setTappedOpen(false)}
      >
        <div>
          {/* 4:5 Editorial Portrait Container with Hover Blur & Social Pop-Up */}
          <div
            className={`relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-[#07090D] ${
              compact ? 'mb-4' : 'mb-5'
            } border border-white/[0.06] ${hasSocials ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (hasSocials) setTappedOpen((prev) => !prev);
            }}
          >
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
              className={`object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hasSocials
                  ? `group-hover:scale-[1.06] group-hover:blur-[10px] group-focus-within:scale-[1.06] group-focus-within:blur-[10px] ${
                      tappedOpen ? 'scale-[1.06] blur-[10px]' : ''
                    }`
                  : 'group-hover:scale-[1.03]'
              }`}
              style={{ objectPosition: member.objectPosition || 'center top' }}
            />

            {/* Soft Frosted Dim Overlay on Hover when Socials Exist */}
            {hasSocials && (
              <div
                className={`absolute inset-0 bg-[#07090D]/35 transition-opacity duration-500 pointer-events-none ${
                  tappedOpen
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
                }`}
              />
            )}

            {/* Subtle Editorial Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent pointer-events-none opacity-80" />

            {/* Category Tag */}
            <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#07090D]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider uppercase text-[#94A3B8] z-10">
              {member.category}
            </div>

            {/* Pop-Up Social Media Dock (Matches Reference Video) */}
            {hasSocials && (
              <div
                className="absolute inset-x-3 bottom-4 z-20 flex flex-wrap items-center justify-center gap-2 pointer-events-none"
                aria-label={`${member.name} social links`}
              >
                {socials.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      onClick={(e) => e.stopPropagation()}
                      style={{ transitionDelay: `${idx * 35}ms` }}
                      className={`pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#090D14]/95 border border-white/15 text-[#F8FAFC] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.65)] hover:bg-[#4F8CFF] hover:border-[#7DB0FF] hover:text-white hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        tappedOpen
                          ? 'translate-y-0 opacity-100 scale-100'
                          : 'translate-y-5 opacity-0 scale-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:scale-100'
                      }`}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Name & Role */}
          <div className="px-1">
            <h3
              className={`font-display font-bold text-[#F5F7FA] group-hover:text-[#7DB0FF] transition-colors leading-tight ${
                compact
                  ? 'text-base mb-1'
                  : featured
                    ? 'text-2xl sm:text-3xl mb-2'
                    : 'text-xl sm:text-2xl mb-2'
              }`}
            >
              {member.name}
            </h3>

            <p
              className={`text-[#94A3B8] font-medium leading-relaxed ${
                compact
                  ? 'text-xs'
                  : featured
                    ? 'text-base sm:text-lg'
                    : 'text-sm sm:text-base'
              }`}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Minimal Footer Metadata */}
        <div
          className={`${
            compact ? 'mt-4 pt-3 text-[10px]' : 'mt-6 pt-4 text-xs'
          } px-1 border-t border-white/[0.06] flex items-center justify-between font-mono text-[#94A3B8]`}
        >
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
