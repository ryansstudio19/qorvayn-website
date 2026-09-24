import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AmbientBackground } from '@/components/ui/ambient-background';
import { baseMetadata } from '@/lib/metadata';
import { siteJsonLd } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="5CxT7s8D22ROrSXSw9jJhPA6oj6bz02O1x-uuzftl94" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/qorvayn-logo.png" type="image/png" sizes="256x256" />
        <link rel="apple-touch-icon" href="/qorvayn-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="bg-[#07090D] text-[#F5F7FA] min-h-screen flex flex-col font-sans antialiased selection:bg-[#4F8CFF]/30 relative">
        <AmbientBackground />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
