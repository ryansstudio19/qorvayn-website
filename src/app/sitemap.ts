import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/products',
    '/ryneka',
    '/products/ryneka',
    '/skypics',
    '/products/skypics',
    '/goalwear',
    '/products/goalwear',
    '/team',
    '/contact',
    '/future',
    '/changelog',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route.startsWith('/products') || ['/ryneka', '/skypics', '/goalwear'].includes(route)) ? 0.8 : 0.6,
  }));
}
