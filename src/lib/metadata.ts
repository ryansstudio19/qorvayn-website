import type { Metadata } from 'next';

// TODO: Set production domain when assigned by QORVAYN
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qorvayn.com';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'QORVAYN — Human-Centered Technology',
    template: '%s | QORVAYN',
  },
  description:
    'QORVAYN is a technology company building intelligent digital products designed to make technology more useful, accessible, creative, and human-centered.',
  keywords: [
    'QORVAYN',
    'technology ecosystem',
    'AI Operating System',
    'RYNEKA',
    'SkyPics',
    'GoalWear',
    'human-centered software',
    'Bangladesh technology',
    'remote-first',
  ],
  authors: [{ name: 'QORVAYN' }],
  creator: 'QORVAYN',
  publisher: 'QORVAYN',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QORVAYN',
    title: 'QORVAYN — Human-Centered Technology',
    description:
      'QORVAYN builds intelligent digital products designed to make technology more useful, accessible, creative, and human-centered.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/qorvayn-logo.jpg`,
        width: 1024,
        height: 1024,
        alt: 'QORVAYN',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/qorvayn-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/qorvayn-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/qorvayn-logo.png', sizes: '180x180', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QORVAYN — Human-Centered Technology',
    description:
      'QORVAYN builds intelligent digital products designed to make technology more useful, accessible, creative, and human-centered.',
    site: '@Qorvayn',
    creator: '@Qorvayn',
    images: [`${siteUrl}/qorvayn-logo.jpg`],
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | QORVAYN`,
      description,
      url,
    },
    twitter: {
      title: `${title} | QORVAYN`,
      description,
    },
  };
}
