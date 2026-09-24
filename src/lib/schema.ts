import { SITE } from '@/data/site';
import { siteUrl } from '@/lib/metadata';

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: SITE.name,
  alternateName: ['QORVAYN', 'Qorvayn', 'Qorvayn Tech', 'Qorvayn Technology'],
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/qorvayn-logo.png`,
    width: 256,
    height: 256,
  },
  foundingDate: SITE.foundedDate,
  founder: {
    '@type': 'Person',
    name: SITE.founder,
  },
  email: SITE.email,
  areaServed: {
    '@type': 'Country',
    name: SITE.country,
  },
  description: SITE.description,
  sameAs: [
    SITE.social.instagram,
    SITE.social.youtube,
    SITE.social.tiktok,
    SITE.social.facebook,
    SITE.social.twitter,
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: SITE.name,
  alternateName: ['QORVAYN', 'Qorvayn', 'Qorvayn Tech', 'Qorvayn Technology'],
  url: siteUrl,
  description: SITE.description,
  inLanguage: 'en-US',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationSchema, websiteSchema],
};
