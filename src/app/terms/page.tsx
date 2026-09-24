import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { ShaderBackground } from '@/components/canvas/shader-background';
import { SITE } from '@/data/site';
import { AlertCircle, ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'Please read these terms carefully before using the QORVAYN website and related digital products.',
  '/terms'
);

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      {/* ── 1. COMPACT LEGAL HERO BAND ───────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 border-b border-white/[0.06]">
        {/* Deep ambient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D] via-[#090D15] to-[#07090D] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(79,140,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        {/* Subtle, restrained animated background loop */}
        <ShaderBackground
          preset="aurora"
          intensity={0.4}
          className="opacity-35 pointer-events-none"
        />

        {/* Text protection vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-[760px] mx-auto">
            {/* Breadcrumb / Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7E8B9F] hover:text-[#94A3B8] transition-colors mb-6 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#7DB0FF]">
                LEGAL
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-extrabold text-[#F8FAFC] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-4">
              Terms of Service
            </h1>

            {/* Supporting Text */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
              Please read these terms carefully before using the QORVAYN website and related digital products.
            </p>

            {/* Metadata indicator */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7E8B9F] pt-2">
              <span>Effective Date: 10 March 2026</span>
              <span className="text-white/20">·</span>
              <span>Version 1.0 (Draft)</span>
              <span className="text-white/20">·</span>
              <span>Entity: QORVAYN</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. EDITORIAL TERMS CONTENT ───────────────────────────── */}
      <article className="py-16 sm:py-24">
        <Container>
          <div className="max-w-[760px] mx-auto">
            {/* Mandatory Draft Notice Disclaimer */}
            <div
              className="mb-14 p-5 rounded-2xl border border-amber-400/25 bg-amber-400/[0.03] flex items-start gap-4"
              role="note"
              aria-label="Draft notice"
            >
              <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">
                  Notice of Draft Status
                </span>
                <p className="text-amber-200/90 text-sm leading-relaxed">
                  This legal content is a preliminary draft template for the QORVAYN corporate website. It reflects general operating terms and must be finalized and reviewed prior to commercial deployment.
                </p>
              </div>
            </div>

            {/* Legal Document Sections */}
            <div className="space-y-12 sm:space-y-16 text-[#94A3B8] text-base leading-[1.8]">
              {/* 01. Acceptance of Terms */}
              <section id="acceptance-of-terms" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    01.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Acceptance of Terms
                  </h2>
                </div>
                <p>
                  By accessing, browsing, or utilizing the QORVAYN website (<span className="text-[#F8FAFC]">qorvayn.tech</span>) and related digital touchpoints, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <p>
                  These terms constitute an agreement between you and QORVAYN regarding your interaction with our online properties. If you do not agree with any part of these Terms of Service, you should discontinue use of the website and its related services immediately.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 02. Use of the Site */}
              <section id="use-of-the-site" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    02.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Use of the Site
                  </h2>
                </div>
                <p>
                  The QORVAYN website is designed to provide information regarding our technology ecosystem, research initiatives, company philosophy, and forthcoming product concepts. You agree to use this website only for lawful, legitimate, and responsible purposes.
                </p>
                <p>
                  To preserve the integrity, security, and accessibility of the website for all users, you agree that you must not:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-[#94A3B8]">
                  <li>
                    <strong className="text-[#F8FAFC]">Abuse or Disrupt:</strong> Interfere with, impair, overburden, or compromise the operational performance or infrastructure of the website or its host networks.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Unauthorized Access:</strong> Attempt to probe, bypass, test vulnerability, or gain unauthorized entry into administrative portals, servers, or connected systems.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Unpermitted Scraping:</strong> Scrape, copy, crawl, extract, or systematically harvest website text, assets, or data structures using automated bots, spiders, or scrapers without prior written consent.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Unlawful Conduct:</strong> Utilize the website, its contact forms, or communication channels for fraudulent, defamatory, harassing, or otherwise unlawful activities.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Malicious Code:</strong> Transmit, inject, or upload viruses, worms, trojans, or other technologically malicious materials.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Infringement:</strong> Violate or infringe upon the intellectual property, privacy, publicity, or statutory rights of QORVAYN or any third party.
                  </li>
                </ul>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 03. Intellectual Property */}
              <section id="intellectual-property" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    03.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Intellectual Property
                  </h2>
                </div>
                <p>
                  All content, branding, and assets displayed on this website—including but not limited to the names QORVAYN, RYNEKA, SkyPics, and GoalWear, alongside visual identities, logos, graphics, interface concepts, typography arrangements, procedural 3D shaders, and written copy—are the proprietary intellectual property of QORVAYN or its respective contributors and licensors.
                </p>
                <p>
                  These works are protected by applicable copyright, design, and intellectual property laws. Except as explicitly permitted for personal, non-commercial viewing, you may not reproduce, redistribute, republish, modify, broadcast, publicly display, reverse engineer, or commercially exploit any original QORVAYN materials without prior express written authorization.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 04. Disclaimers */}
              <section id="disclaimers" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    04.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Disclaimers
                  </h2>
                </div>
                <p>
                  The QORVAYN website and all associated materials are provided strictly on an <span className="text-[#F8FAFC] font-medium">&ldquo;as is&rdquo;</span> and <span className="text-[#F8FAFC] font-medium">&ldquo;as available&rdquo;</span> basis, without warranties, guarantees, or representations of any kind, whether express, implied, statutory, or otherwise.
                </p>
                <p>
                  Without limiting the generality of the foregoing, QORVAYN does not warrant or guarantee that:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-[#94A3B8]">
                  <li>The website will operate continuously, uninterrupted, or in a completely timely and error-free manner.</li>
                  <li>Any content, interface preview, concept specifications, or milestone timelines presented on the site are completely accurate, exhaustive, or up to date.</li>
                  <li>Defects or software bugs will be immediately corrected.</li>
                  <li>The website, its delivery networks, or host servers are entirely free from external transmission errors or unexpected technical interruptions.</li>
                </ul>
                <p className="text-sm text-[#7E8B9F] pt-1">
                  Descriptions of forthcoming product architectures, including RYNEKA, SkyPics, and GoalWear, reflect forward-looking conceptual research and engineering explorations. Features, interfaces, and release schedules remain subject to evolution prior to public launch.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 05. Limitation of Liability */}
              <section id="limitation-of-liability" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    05.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Limitation of Liability
                  </h2>
                </div>
                <p>
                  To the maximum extent permitted by applicable law, neither QORVAYN, its founder, team members, contractors, nor affiliates shall be held liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising out of or in connection with:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1.5 text-[#94A3B8]">
                  <li>Your access to, navigation of, or inability to access the website;</li>
                  <li>Any reliance placed upon informational statements, concept previews, or roadmap timelines;</li>
                  <li>Any interruption, technical defect, delay in operation, or communication failure.</li>
                </ul>
                <p>
                  This limitation applies regardless of whether the alleged liability is based on contract, tort, negligence, strict liability, or any other legal theory, and even if QORVAYN has been advised of the possibility of such damages.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 06. Changes to Terms */}
              <section id="changes-to-terms" className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    06.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Changes to Terms
                  </h2>
                </div>
                <p>
                  As our technology ecosystem, research streams, and operational structure mature, QORVAYN reserves the right to revise, amend, or update these Terms of Service periodically.
                </p>
                <p>
                  Any revisions will be reflected directly on this page with an updated effective date at the top of the document. Your continued navigation or use of the website following the posting of amended terms constitutes your acknowledgment and acceptance of the revisions. We encourage you to review this page periodically to stay informed of any updates.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 07. Contact */}
              <section id="contact" className="space-y-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#7DB0FF]">
                    07.
                  </span>
                  <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                    Contact
                  </h2>
                </div>
                <p>
                  For questions regarding these Terms of Service or our legal notices, please contact us at:
                </p>

                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#7DB0FF] block mb-1">
                      Legal Inquiries
                    </span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lg sm:text-xl font-display font-bold text-[#F8FAFC] hover:text-[#4F8CFF] transition-colors inline-flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                    >
                      <span>{SITE.email}</span>
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4F8CFF]" />
                    </a>
                    <p className="text-xs text-[#7E8B9F] mt-1">
                      Inquiries will be directed to our operational and legal review team.
                    </p>
                  </div>

                  <a
                    href={`mailto:${SITE.email}?subject=Terms%20of%20Service%20Inquiry`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F8CFF] text-white hover:bg-[#7DB0FF] font-display font-semibold text-xs uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F8CFF]"
                  >
                    <Mail size={14} />
                    <span>Send Inquiry</span>
                  </a>
                </div>
              </section>

              {/* Reciprocal Page Navigation */}
              <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                <Link
                  href="/"
                  className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                >
                  <ArrowLeft size={12} />
                  <span>Return to Home</span>
                </Link>

                <div className="flex items-center gap-6">
                  <span className="text-[#7E8B9F]">Related:</span>
                  <Link
                    href="/privacy"
                    className="text-[#7DB0FF] hover:text-[#45D7FF] transition-colors underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#7DB0FF] hover:text-[#45D7FF] transition-colors underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    Contact QORVAYN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
