'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-[#07090D]/98 backdrop-blur-2xl flex flex-col pt-24 pb-10 px-6 sm:px-10"
        >
          <nav className="flex flex-col gap-2 mt-4" aria-label="Mobile main navigation">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href) ||
                    (link.href === '/products' && (pathname.startsWith('/ryneka') || pathname.startsWith('/skypics') || pathname.startsWith('/goalwear')));
              return (
                <Link
                  key={link.href}
                  href={link.href}
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
              onClick={onClose}
              className="block w-full text-center py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-[#4F8CFF] text-white hover:bg-[#7DB0FF] transition-all shadow-[0_0_25px_rgba(79,140,255,0.4)]"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
