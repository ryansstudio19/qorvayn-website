import { SITE } from '@/data/site';
import { MATCHDAY_DROPS } from '@/data/goalwear';
import { SITE_URL } from '@/lib/metadata';

export const absoluteUrl = (path: string): string =>
  path === '/' || path === '' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

const SOCIAL_PROFILES = [
  SITE.social.linkedin,
  SITE.social.instagram,
  SITE.social.youtube,
  SITE.social.tiktok,
  SITE.social.facebook,
  SITE.social.twitter,
  SITE.social.github,
];

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: ['QORVAYN', 'Qorvayn', 'Qorvayn Tech', 'Qorvayn Technology'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/qorvayn-logo.png`,
    width: 256,
    height: 256,
  },
  image: `${SITE_URL}/qorvayn-logo.png`,
  description: SITE.description,
  foundingDate: SITE.foundedDate,
  founder: [
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: SITE.founder,
      jobTitle: 'Founder & CEO',
    },
    {
      '@type': 'Person',
      name: 'Adelia Maharani',
      jobTitle: 'Co-Founder / Brand & Creative Direction',
    },
    {
      '@type': 'Person',
      name: 'Siyami Muntaha Saba',
      jobTitle: 'Co-Founder & Head of Design',
    },
  ],
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
  },
  areaServed: {
    '@type': 'Country',
    name: SITE.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general inquiries',
    email: SITE.email,
    availableLanguage: ['English'],
  },
  sameAs: SOCIAL_PROFILES,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: ['QORVAYN', 'Qorvayn', 'Qorvayn Tech', 'Qorvayn Technology'],
  url: SITE_URL,
  description: SITE.description,
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, websiteSchema],
};

// ── Breadcrumbs ────────────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const trail: BreadcrumbItem[] = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// ── Software applications (RYNEKA, SkyPics) ────────────────────
export interface SoftwareAppInput {
  name: string;
  description: string;
  path: string;
  applicationCategory: string;
}

/** No ratings, reviews or prices: none are verified. */
export function softwareApplicationSchema({ name, description, path, applicationCategory }: SoftwareAppInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(path)}#software`,
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory,
    operatingSystem: 'Web',
    image: `${absoluteUrl(path)}/opengraph-image`,
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
  };
}

// ── GoalWear ───────────────────────────────────────────────────
const GOALWEAR_PATH = '/products/goalwear';
const GOALWEAR_STORE = 'https://goalwear.online';
const GOALWEAR_BRAND_ID = `${absoluteUrl(GOALWEAR_PATH)}#brand`;

export function goalwearBrandSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': GOALWEAR_BRAND_ID,
    name: 'GoalWear',
    description:
      'GoalWear is a football jersey and streetwear brand within the QORVAYN ecosystem.',
    url: absoluteUrl(GOALWEAR_PATH),
    logo: `${SITE_URL}/goalwear-logo.png`,
    sameAs: [GOALWEAR_STORE],
  };
}

/** "3,850 BDT" -> { price: '3850', currency: 'BDT' } */
function parsePrice(display: string): { price: string; currency: string } | null {
  const m = display.match(/^([\d,]+(?:\.\d+)?)\s*([A-Z]{3})$/);
  if (!m) return null;
  return { price: m[1].replace(/,/g, ''), currency: m[2] };
}

/** Product + Offer built only from the prices shown on the page (src/data/goalwear.ts). */
export function goalwearProductsSchema() {
  const products = MATCHDAY_DROPS.flatMap((drop, i) => {
    const parsed = parsePrice(drop.price);
    if (!parsed) return [];
    return [
      {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: drop.name,
          category: drop.category,
          image: `${SITE_URL}${drop.image}`,
          brand: { '@id': GOALWEAR_BRAND_ID },
          offers: {
            '@type': 'Offer',
            price: parsed.price,
            priceCurrency: parsed.currency,
            url: GOALWEAR_STORE,
          },
        },
      },
    ];
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GoalWear matchday drops',
    itemListElement: products,
  };
}

// ── FAQPage (only render where a visible FAQ section exists) ───
export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ── Article (for /blog/[slug]) ─────────────────────────────────
export interface ArticleInput {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorRole?: string;
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
  authorRole,
}: ArticleInput) {
  const url = absoluteUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      ...(authorRole ? { jobTitle: authorRole } : {}),
    },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}
