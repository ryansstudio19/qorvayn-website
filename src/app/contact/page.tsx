import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { PageHero } from '@/components/ui/page-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { SITE } from '@/data/site';
import { SignalScene } from '@/components/three/signal-scene';
import { Mail, Phone, MapPin, Instagram, Youtube, Music2, Facebook, Twitter } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Contact QORVAYN',
  'For questions, collaboration, and general inquiries, contact QORVAYN.',
  '/contact'
);

const SOCIAL_CHANNELS = [
  { icon: Instagram, href: SITE.social.instagram, label: 'Instagram', handle: '@qorvayn' },
  { icon: Youtube, href: SITE.social.youtube, label: 'YouTube', handle: '@Qorvayn' },
  { icon: Music2, href: SITE.social.tiktok, label: 'TikTok', handle: '@qorvayn' },
  { icon: Facebook, href: SITE.social.facebook, label: 'Facebook', handle: 'QORVAYN' },
  { icon: Twitter, href: SITE.social.twitter, label: 'X (Twitter)', handle: '@Qorvayn' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT QORVAYN"
        title="Let's build something meaningful."
        description="For questions, collaboration, and general inquiries, contact QORVAYN."
        scene={<SignalScene />}
        shaderPreset="aurora"
      />

      <section className="py-20 sm:py-28 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10">
                  <div className="mb-8">
                    <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF] mb-2 block">
                      Direct Transmission
                    </span>
                    <h2 className="font-display font-bold text-[#F5F7FA] text-3xl">
                      Send a message
                    </h2>
                  </div>

                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Right: Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Reveal delay={0.06}>
                <GlassCard hover={false} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#4F8CFF] flex-shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-[#6B7280] block mb-1">
                        Primary Email
                      </span>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-lg font-display font-semibold text-[#F5F7FA] hover:text-[#4F8CFF] transition-colors break-all"
                      >
                        {SITE.email}
                      </a>
                      <p className="text-xs text-[#94A3B8] mt-1.5">
                        We review every inquiry directly.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.12}>
                <GlassCard hover={false} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#45D7FF]/10 border border-[#45D7FF]/20 flex items-center justify-center text-[#45D7FF] flex-shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-[#6B7280] block mb-1">
                        Public Inquiries Line
                      </span>
                      <a
                        href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
                        className="text-lg font-display font-semibold text-[#F5F7FA] hover:text-[#45D7FF] transition-colors"
                      >
                        {SITE.phone}
                      </a>
                      <p className="text-xs text-[#94A3B8] mt-1.5">
                        Approved public contact channel.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.18}>
                <GlassCard hover={false} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] flex-shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold tracking-[0.15em] uppercase text-[#6B7280] block mb-1">
                        Base
                      </span>
                      <h3 className="text-lg font-display font-semibold text-[#F5F7FA]">
                        {SITE.country} · {SITE.operations}
                      </h3>
                      <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                        Remote-first organization. No dedicated physical public office.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>

              {/* Social Channels */}
              <Reveal delay={0.24}>
                <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
                  <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#4F8CFF] mb-4">
                    Official Social Channels
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {SOCIAL_CHANNELS.map(({ icon: Icon, href, label, handle }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#4F8CFF]/30 transition-all text-sm group"
                      >
                        <div className="flex items-center gap-3 text-[#94A3B8] group-hover:text-[#F5F7FA]">
                          <Icon size={16} className="text-[#4F8CFF]" />
                          <span className="font-medium">{label}</span>
                        </div>
                        <span className="text-xs font-mono text-[#6B7280] group-hover:text-[#7DB0FF]">
                          {handle}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
