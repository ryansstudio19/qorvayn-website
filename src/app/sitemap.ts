import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';
import { PAGE_SEO } from '@/data/seo';
import { BLOG_POSTS } from '@/data/blog';

/**
 * Bump a page's date when its content meaningfully changes.
 * Static dates (instead of `new Date()`) keep lastModified honest.
 * When publishing the first blog post in `src/data/blog.ts`, remove `noindex: true`
 * from `PAGE_SEO.blog` in `src/data/seo.ts` and add `'/blog'` to `LAST_MODIFIED` below.
 */
const LAST_MODIFIED: Record<string, string> = {
  '/': '2026-10-21',
  '/about': '2026-10-21',
  '/products': '2026-10-21',
  '/products/ryneka': '2026-10-21',
  '/products/skypics': '2026-10-21',
  '/products/goalwear': '2026-10-21',
  '/team': '2026-10-21',
  '/future': '2026-10-21',
  '/changelog': '2026-10-21',
  '/contact': '2026-10-21',
  '/privacy': '2026-10-21',
  '/terms': '2026-10-21',
};

const PRIORITY: Record<string, number> = {
  '/': 1,
  '/products': 0.9,
  '/products/ryneka': 0.8,
  '/products/skypics': 0.8,
  '/products/goalwear': 0.8,
  '/about': 0.7,
  '/team': 0.6,
  '/future': 0.6,
  '/contact': 0.6,
  '/changelog': 0.5,
  '/blog': 0.6,
  '/privacy': 0.3,
  '/terms': 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = Object.values(PAGE_SEO)
    .filter((page) => !('noindex' in page && page.noindex))
    .map((page) => ({
      url: page.path === '/' ? SITE_URL : `${SITE_URL}${page.path}`,
      lastModified: LAST_MODIFIED[page.path],
      changeFrequency: page.path === '/' || page.path === '/changelog' ? 'weekly' : 'monthly',
      priority: PRIORITY[page.path] ?? 0.5,
    }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified || post.datePublished,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogEntries];
}
