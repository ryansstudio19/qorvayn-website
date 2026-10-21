'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SITE } from '@/data/site';
import { Menu, X } from 'lucide-react';

const MobileMenu = dynamic(
  () => import('./mobile-menu').then((mod) => mod.MobileMenu),
  { ssr: false }
);

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Team', href: '/team' },
  { label: 'Future', href: '/future' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        document.documentElement.classList.add('is-scrolled');
      }
      setScrolled(window.scrollY > 20);
    };
    const unlockSections = () => {
      document.documentElement.classList.add('is-scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', unlockSections, { passive: true, once: true });
    window.addEventListener('wheel', unlockSections, { passive: true, once: true });
    window.addEventListener('keydown', unlockSections, { passive: true, once: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', unlockSections);
      window.removeEventListener('wheel', unlockSections);
      window.removeEventListener('keydown', unlockSections);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#07090D]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Official Brand Logo */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-3 text-[#F5F7FA] group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded-lg transition-opacity hover:opacity-95"
            aria-label="QORVAYN"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
              <Image
                src="/qorvayn-logo.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                sizes="36px"
                className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-[0.16em] uppercase text-white group-hover:text-[#7DB0FF] transition-colors">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-[#101726]/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href) ||
                    (link.href === '/products');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200',
                    active
                      ? 'text-[#F8FAFC] bg-[#4F8CFF]/20 border border-[#4F8CFF]/35 shadow-[0_0_12px_rgba(79,140,255,0.25)]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 border border-transparent'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              prefetch={false}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase bg-[#2563EB] text-white hover:bg-[#3B82F6] transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] active:scale-[0.98]"
            >
              Get in touch
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#F5F7FA] hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Modal */}
      {mobileOpen && (
        <MobileMenu
          links={NAV_LINKS}
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          pathname={pathname}
        />
      )}
    </>
  );
}
