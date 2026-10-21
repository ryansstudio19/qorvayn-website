/**
 * Central SEO copy for every indexable route.
 * - `title` is the page-specific part only. The root layout template appends " | QORVAYN".
 *   Final <title> target: 50-60 characters.
 * - `description` target: 140-160 characters.
 * - `absoluteTitle` bypasses the template (used by the homepage).
 */
export interface PageSeo {
  path: string;
  title: string;
  absoluteTitle?: boolean;
  description: string;
  /** Set true for pages that must not be indexed. */
  noindex?: boolean;
}

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'QORVAYN | AI Operating System, SkyPics and GoalWear',
    absoluteTitle: true,
    description:
      'QORVAYN is a remote-first technology company from Bangladesh building RYNEKA, an AI Operating System, plus SkyPics and GoalWear, all human-centered.',
  },
  about: {
    path: '/about',
    title: 'About Us: A Remote-First Technology Company',
    description:
      'Learn about QORVAYN, founded on 10 March 2026 in Bangladesh by Ryan Zannah. Our mission, vision and values behind human-centered digital products.',
  },
  products: {
    path: '/products',
    title: 'Products: RYNEKA AI OS, SkyPics and GoalWear',
    description:
      'Explore the QORVAYN product ecosystem: RYNEKA, an AI Operating System, SkyPics for sky and nature photography, and GoalWear football jerseys and streetwear.',
  },
  ryneka: {
    path: '/products/ryneka',
    title: 'RYNEKA: AI Operating System for Your Digital Life',
    description:
      'RYNEKA is an AI Operating System by QORVAYN, designed to help people think, create, automate and manage their digital lives in one modular workspace.',
  },
  skypics: {
    path: '/products/skypics',
    title: 'SkyPics: AI Platform for Sky and Nature Photos',
    description:
      'SkyPics is an AI-powered visual and social platform by QORVAYN for discovering, creating and sharing sky, nature and photography experiences.',
  },
  goalwear: {
    path: '/products/goalwear',
    title: 'GoalWear: Football Jerseys and Streetwear',
    description:
      'GoalWear is a football jersey and streetwear brand within the QORVAYN ecosystem, featuring player-edition national kits, club jerseys and football fashion.',
  },
  team: {
    path: '/team',
    title: 'Meet the Team: Founders and Core Members',
    description:
      'Meet the people building QORVAYN: founders and core team members of a remote-first technology company creating intelligent, human-centered digital products.',
  },
  future: {
    path: '/future',
    title: 'Future Vision: What We Are Building Next',
    description:
      'The QORVAYN ecosystem is still growing. See the direction we are heading and how we plan to expand our human-centered technology products in the future.',
  },
  changelog: {
    path: '/changelog',
    title: 'Changelog: Product Updates and Release Notes',
    description:
      'Follow the progress of QORVAYN and its products. A public changelog of updates, releases and milestones across RYNEKA, SkyPics, GoalWear and our website.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us: Questions and Collaboration Inquiries',
    description:
      'Get in touch with QORVAYN for questions, collaboration and general inquiries. Send a message through our contact form or email theqorvayn@gmail.com.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy: How We Handle Your Information',
    description:
      'Read how QORVAYN collects, uses and protects information across our website and digital products, and the choices you have over your personal data.',
  },
  terms: {
    path: '/terms',
    title: 'Terms of Service: Rules for Using Our Website',
    description:
      'Read the terms of service that apply when you browse the QORVAYN website and use our digital products, including your rights and responsibilities.',
  },
  thankYou: {
    path: '/contact/thank-you',
    title: 'Message Received',
    description: 'Thanks for reaching out to QORVAYN. We have received your message.',
    noindex: true,
  },
} as const satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof PAGE_SEO;
