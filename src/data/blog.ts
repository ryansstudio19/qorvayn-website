/**
 * Central blog post data store.
 *
 * NOTE FOR PUBLISHING FIRST POST:
 * 1. Add your first real article entry to `BLOG_POSTS` below (never publish placeholder content).
 * 2. In `src/data/seo.ts`, remove `noindex: true` from `PAGE_SEO.blog` so `/blog` is indexed
 *    and automatically included in `src/app/sitemap.ts`.
 * 3. Update `LAST_MODIFIED` in `src/app/sitemap.ts`.
 */

export interface BlogPostSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 date string, e.g. '2026-03-10' */
  datePublished: string;
  /** ISO 8601 date string, e.g. '2026-03-10' */
  dateModified?: string;
  author: {
    name: string;
    role: string;
  };
  category: string;
  readingTime: string;
  sections: BlogPostSection[];
}

export const BLOG_POSTS: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
