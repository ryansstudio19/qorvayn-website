import type { Metadata } from 'next';
import { PAGE_SEO, type PageSeo } from '@/data/seo';

/**
 * Canonical site origin. Defaults to the www host served by Vercel.
 * Override with NEXT_PUBLIC_SITE_URL (see README). Trailing slashes are stripped.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.qorvayn.tech'
).replace(/\/+$/, '');

/** @deprecated Use SITE_URL. Kept as an alias for existing imports. */
export const siteUrl = SITE_URL;

const HOME = PAGE_SEO.home;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME.title,
    template: '%s | QORVAYN',
  },
  description: HOME.description,
  applicationName: 'QORVAYN',
  authors: [{ name: 'QORVAYN' }],
  creator: 'QORVAYN',
  publisher: 'QORVAYN',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // og:image / twitter:image come from the opengraph-image / twitter-image
  // file conventions (src/app/**/opengraph-image.tsx).
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QORVAYN',
    title: HOME.title,
    description: HOME.description,
    url: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/qorvayn-logo.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/qorvayn-logo.png', sizes: '180x180', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME.title,
    description: HOME.description,
    site: '@Qorvayn',
    creator: '@Qorvayn',
  },
  verification: {
    google: '5CxT7s8D22ROrSXSw9jJhPA6oj6bz02O1x-uuzftl94',
    // TODO: add Bing Webmaster code in Phase 5 via `other: { 'msvalidate.01': '...' }`
  },
};

/**
 * Per-page metadata. Pass a PAGE_SEO entry. Titles are page-specific only; the
 * root template appends " | QORVAYN" (unless `absoluteTitle` is set).
 */
export function pageMetadata(seo: PageSeo): Metadata {
  const fullTitle = seo.absoluteTitle ? seo.title : `${seo.title} | QORVAYN`;
  return {
    title: seo.absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    ...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'website',
      siteName: 'QORVAYN',
      locale: 'en_US',
      title: fullTitle,
      description: seo.description,
      url: seo.path,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: seo.description,
      site: '@Qorvayn',
      creator: '@Qorvayn',
    },
  };
}
