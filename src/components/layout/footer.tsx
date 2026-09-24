import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import { PRODUCTS } from '@/data/products';
import { Instagram, Youtube, Music2, Facebook, Twitter, Github, Mail, Globe } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Github, href: SITE.social.github, label: 'QORVAYN on GitHub' },
  { icon: Twitter, href: SITE.social.twitter, label: 'QORVAYN on X (Twitter)' },
  { icon: Instagram, href: SITE.social.instagram, label: 'QORVAYN on Instagram' },
  { icon: Youtube, href: SITE.social.youtube, label: 'QORVAYN on YouTube' },
  { icon: Music2, href: SITE.social.tiktok, label: 'QORVAYN on TikTok' },
  { icon: Facebook, href: SITE.social.facebook, label: 'QORVAYN on Facebook' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0E17] mt-32 relative z-10" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-3 text-[#F8FAFC] group w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded-lg transition-opacity hover:opacity-95"
              aria-label="QORVAYN"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
                <Image
                  src="/qorvayn-logo.png"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-display font-extrabold text-xl tracking-[0.16em] uppercase text-white group-hover:text-[#7DB0FF] transition-colors">
                {SITE.name}
              </span>
            </Link>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              {SITE.description}
            </p>

            <div className="flex items-center gap-2 text-[#94A3B8] text-xs font-mono tracking-wider uppercase">
              <Globe size={14} className="text-[#4F8CFF]" />
              <span>{SITE.country} · {SITE.operations}</span>
            </div>

            {/* Official Social Media Outbound Links */}
            <div className="flex items-center gap-2.5 mt-2 flex-wrap" aria-label="Official Social Profiles">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-[#4F8CFF] hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/10 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Team', href: '/team' },
                { label: 'Future', href: '/future' },
                { label: 'Changelog', href: '/changelog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#7DB0FF]">
              Ecosystem
            </h3>
            <ul className="flex flex-col gap-2.5 mb-4">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.href}
                    className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    {p.name} — <span className="text-[#94A3B8]">{p.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-white/[0.06]">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-[#7DB0FF] hover:text-[#45D7FF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                aria-label="Email QORVAYN"
              >
                <Mail size={15} />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-xs">
            &copy; 2026 QORVAYN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
