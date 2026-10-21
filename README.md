# QORVAYN Website

Next.js 15 (App Router) site for https://www.qorvayn.tech. See `AGENTS.md` for stack and conventions.

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build
npm run start      # serve production build
npm run lint
npm run typecheck
```

## Environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.qorvayn.tech` | Canonical origin used for `metadataBase`, canonicals, `og:url`, sitemap, robots and JSON-LD. |

Leave it unset or set it to `https://www.qorvayn.tech` for **Production** in Vercel (Project > Settings > Environment Variables), then redeploy. Never point it at a `*.vercel.app` URL. For local previews you can use `NEXT_PUBLIC_SITE_URL=http://localhost:3000` in `.env.local`.

## SEO notes

- Page titles/descriptions live in `src/data/seo.ts`; metadata helper in `src/lib/metadata.ts`.
- OG/Twitter images are generated with `next/og` (`opengraph-image.tsx` / `twitter-image.tsx`).
- The non-www to www redirect is configured in the Vercel dashboard (Settings > Domains), not in code.

- **Sitemap dates:** update the `lastModified` value for a page in `src/app/sitemap.ts` whenever that page's content changes meaningfully.
- **Blog (`/blog`):** `/blog` is currently marked `noindex: true` in `src/data/seo.ts` while `BLOG_POSTS` in `src/data/blog.ts` is empty. When publishing the first real post, remove `noindex: true` from `PAGE_SEO.blog` in `src/data/seo.ts` and add `'/blog'` to `LAST_MODIFIED` in `src/app/sitemap.ts` so `/blog` and its posts are indexed and included in `/sitemap.xml`.
