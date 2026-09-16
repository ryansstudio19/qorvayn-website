import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { ShaderBackground } from '@/components/canvas/shader-background';
import { SITE } from '@/data/site';
import { AlertCircle, ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'How QORVAYN collects, uses, and protects information across our digital products and website.',
  '/privacy'
);

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      {/* ── 1. COMPACT PAGE HERO ─────────────────────────────────── */}
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
              Privacy Policy
            </h1>

            {/* Supporting Text */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
              How QORVAYN collects, uses, and protects information across our digital products and website.
            </p>

            {/* Meta indicator */}
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

      {/* ── 2. EDITORIAL PRIVACY CONTENT ─────────────────────────── */}
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
                  This legal document is a preliminary draft template for the QORVAYN corporate website. It reflects general data-handling principles and must be finalized and reviewed prior to commercial deployment.
                </p>
              </div>
            </div>

            {/* Legal Document Sections */}
            <div className="space-y-12 sm:space-y-16 text-[#94A3B8] text-base leading-[1.8]">
              {/* 1. Introduction */}
              <section id="introduction" className="space-y-4">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  1. Introduction
                </h2>
                <p>
                  This Privacy Policy describes how QORVAYN (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) handles information collected through our official website (<span className="text-[#F8FAFC]">qorvayn.com</span>) and related digital touchpoints.
                </p>
                <p>
                  Founded on 10 March 2026, QORVAYN is dedicated to creating human-centered technology built on digital sovereignty, user agency, and transparent communication. We believe that privacy should be a default architectural principle rather than an afterthought. This document outlines our data-handling practices in clear, human-readable terms so you understand how your information is respected.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 2. Information We Collect */}
              <section id="information-we-collect" className="space-y-4">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  2. Information We Collect
                </h2>
                <p>
                  We believe in intentional data minimization. We only collect information that is genuinely necessary to fulfill your requests, communicate with you, and keep our website functional and secure.
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <h3 className="text-[#F8FAFC] font-semibold text-lg mb-1">
                      Information You Voluntarily Provide
                    </h3>
                    <p>
                      When you interact directly with our website—such as submitting an inquiry through our contact form or signing up for product waitlists—we collect the details you voluntarily choose to share. This typically includes:
                    </p>
                    <ul className="list-disc list-outside pl-5 mt-2 space-y-1.5 text-[#94A3B8]">
                      <li>Your full name</li>
                      <li>Your email address</li>
                      <li>The subject line and topic of your inquiry</li>
                      <li>The contents of any messages, questions, or feedback you transmit</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-[#F8FAFC] font-semibold text-lg mb-1">
                      Technical &amp; Device Information
                    </h3>
                    <p>
                      When you browse our website, our servers automatically receive basic, non-personally-identifiable technical information required to transmit and display web content correctly. This may include:
                    </p>
                    <ul className="list-disc list-outside pl-5 mt-2 space-y-1.5 text-[#94A3B8]">
                      <li>Browser type, engine, and version</li>
                      <li>Operating system and device family</li>
                      <li>Display viewport dimensions and device pixel ratio (used to scale WebGL canvases and graphics appropriately)</li>
                      <li>Preferred language and approximate geographic region derived from IP routing</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-[#F8FAFC] font-semibold text-lg mb-1">
                      General Usage &amp; Performance Telemetry
                    </h3>
                    <p>
                      We may collect aggregate metrics regarding general website usage, including page views, navigation paths, load times, and client-side error logs. This data helps us detect broken links, optimize layout responsiveness, and improve site reliability.
                    </p>
                    <p className="text-sm text-[#7E8B9F] pt-2">
                      <strong className="text-[#94A3B8]">What we do not collect:</strong> We do not collect sensitive personal data, financial or payment information, or biometric records through this website. We do not deploy intrusive third-party cross-site advertising trackers or behavioral profiling pixels.
                    </p>
                  </div>
                </div>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 3. How We Use Information */}
              <section id="how-we-use-information" className="space-y-4">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  3. How We Use Information
                </h2>
                <p>
                  Any information gathered through this website is utilized strictly for legitimate operational purposes, including:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-[#94A3B8]">
                  <li>
                    <strong className="text-[#F8FAFC]">Responding to Inquiries:</strong> Processing and replying to your questions, partnership inquiries, press requests, and general messages.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">User Communication:</strong> Sending you confirmations, operational updates, or product announcements that you have explicitly requested.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Performance &amp; UX Optimization:</strong> Monitoring site responsiveness, server latency, and graphical rendering performance across diverse screen sizes and hardware.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Security &amp; Reliability:</strong> Detecting, preventing, and mitigating malicious traffic, automated spam, denial-of-service attempts, and unauthorized exploitation.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Product Evolution:</strong> Deriving high-level, aggregate insights about which technology concepts resonate most with our community to inform our product roadmap.
                  </li>
                </ul>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 4. Data Sharing */}
              <section id="data-sharing" className="space-y-4">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  4. Data Sharing
                </h2>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] my-3">
                  <p className="text-[#F8FAFC] font-semibold text-base">
                    Core Commitment: QORVAYN does not sell, rent, broker, or monetize your personal information under any circumstance.
                  </p>
                </div>
                <p>
                  We do not distribute contact records to commercial advertisers, data brokers, or marketing networks. Information is shared solely with essential infrastructure service providers operating strictly on our behalf:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-[#94A3B8]">
                  <li>
                    <strong className="text-[#F8FAFC]">Hosting &amp; Content Delivery:</strong> Cloud infrastructure providers that store and distribute our static site assets, fonts, and scripts globally.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Email &amp; Communications Delivery:</strong> Secure mail transport services utilized to transmit contact form submissions to our team mailbox.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Basic Analytics:</strong> Privacy-respecting performance diagnostic tools used to monitor site availability and rendering errors.
                  </li>
                </ul>
                <p>
                  All essential service providers are bound by strict confidentiality and data-protection obligations. They are permitted to process data solely to execute requested services and are prohibited from utilizing it for independent purposes.
                </p>
                <p>
                  In rare circumstances, we may disclose information if required by applicable law, lawful subpoena, or regulatory request, or to protect the vital safety, property, and security of QORVAYN, our team, or the public.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 5. Your Rights */}
              <section id="your-rights" className="space-y-4">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  5. Your Rights
                </h2>
                <p>
                  Depending on your jurisdiction and applicable data protection regulations, you may have legal rights concerning your personal information. These may include the right to:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-[#94A3B8]">
                  <li>
                    <strong className="text-[#F8FAFC]">Request Access:</strong> Ask whether we hold personal information voluntarily submitted by you, and request a copy of that data.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Request Correction:</strong> Request that inaccurate, incomplete, or outdated information be rectified.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Request Deletion:</strong> Request that your contact records or waitlist submissions be removed from our operational databases.
                  </li>
                  <li>
                    <strong className="text-[#F8FAFC]">Inquire &amp; Object:</strong> Ask questions about how your information is handled, or request that we cease communicating with you.
                  </li>
                </ul>
                <p>
                  We evaluate and respond to all verifiable requests in good faith and without unreasonable delay. If you wish to exercise any of these rights, please contact us at the address below.
                </p>
              </section>

              <div className="border-t border-white/[0.08]" />

              {/* 6. Contact */}
              <section id="contact" className="space-y-5">
                <h2 className="font-display font-bold text-[#F8FAFC] text-2xl sm:text-3xl tracking-tight">
                  6. Contact
                </h2>
                <p>
                  For privacy-related questions, inquiries, or data access requests, contact our operational team directly:
                </p>

                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#7DB0FF] block mb-1">
                      Primary Contact Mailbox
                    </span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lg sm:text-xl font-display font-bold text-[#F8FAFC] hover:text-[#4F8CFF] transition-colors inline-flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                    >
                      <span>{SITE.email}</span>
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#4F8CFF]" />
                    </a>
                    <p className="text-xs text-[#7E8B9F] mt-1">
                      Direct inquiries are reviewed and answered by our team.
                    </p>
                  </div>

                  <a
                    href={`mailto:${SITE.email}?subject=Privacy%20Policy%20Inquiry`}
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
                    href="/terms"
                    className="text-[#7DB0FF] hover:text-[#45D7FF] transition-colors underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    Terms of Service
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
