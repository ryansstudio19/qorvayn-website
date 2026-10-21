'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/types';

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ links, isOpen, onClose, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-40 bg-[#07090D]/98 backdrop-blur-2xl flex flex-col pt-24 pb-10 px-6 sm:px-10 animate-in fade-in duration-200"
    >
      <nav className="flex flex-col gap-2 mt-4" aria-label="Mobile main navigation">
        {links.map((link) => {
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
              onClick={onClose}
              className={cn(
                'py-4 px-5 text-xl font-display font-semibold rounded-2xl border transition-all',
                active
                  ? 'text-[#F5F7FA] bg-[#4F8CFF]/15 border-[#4F8CFF]/30 shadow-[0_0_20px_rgba(79,140,255,0.2)]'
                  : 'text-[#94A3B8] hover:text-[#F5F7FA] border-transparent hover:bg-white/5'
              )}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-white/10">
        <Link
          href="/contact"
          prefetch={false}
          onClick={onClose}
          className="block w-full text-center py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-[#2563EB] text-white hover:bg-[#3B82F6] transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
