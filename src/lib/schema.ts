import { SITE } from '@/data/site';
import { siteUrl } from '@/lib/metadata';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: siteUrl,
  logo: `${siteUrl}/qorvayn-logo.png`,
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
