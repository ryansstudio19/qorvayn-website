import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { PAGE_SEO } from '@/data/seo';
import { BLOG_POSTS } from '@/data/blog';
import { BreadcrumbListJsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/ui/page-hero';
import { GlassCard } from '@/components/ui/glass-card';
import { Reveal } from '@/components/ui/reveal';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = pageMetadata(PAGE_SEO.blog);

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: 'Blog', path: '/blog' }]} />
      <PageHero
        eyebrow="QORVAYN JOURNAL"
        title="Engineering Notes & Dispatches."
        description="Articles, technical architecture notes, and ecosystem reflections from the team building RYNEKA, eSkypixx, and GoalWear."
        shaderPreset="aurora"
      />

      <section className="py-20 sm:py-28 border-t border-white/5">
        <Container size="md">
          {BLOG_POSTS.length === 0 ? (
            <Reveal>
              <GlassCard hover={false} className="p-10 sm:p-14 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center text-[#4F8CFF] mx-auto mb-5">
                  <BookOpen size={22} />
                </div>
                <h2 className="font-display font-bold text-[#F5F7FA] text-2xl sm:text-3xl mb-3">
                  First dispatches in preparation
                </h2>
                <p className="text-[#94A3B8] text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
                  We are preparing our first long-form engineering and product architecture articles. In the meantime, you can follow live progress in our product changelog.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
                  <Link
                    href="/changelog"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F8CFF] text-[#07090D] font-bold uppercase tracking-wider hover:bg-[#7DB0FF] transition-colors"
                  >
                    <span>View Product Changelog</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F7FA] font-bold uppercase tracking-wider hover:border-white/25 transition-colors"
                  >
                    <span>Explore QORVAYN Products</span>
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ) : (
            <div className="space-y-6">
              <h2 className="sr-only">Published Articles</h2>
              {BLOG_POSTS.map((post, idx) => (
                <GlassCard key={post.slug} delay={idx * 0.06} className="p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#7DB0FF] mb-3">
                    <span className="uppercase tracking-wider">{post.category}</span>
                    <span className="text-white/20">·</span>
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                    <span className="text-white/20">·</span>
                    <span className="text-[#94A3B8]">{post.readingTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F5F7FA] mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#7DB0FF] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-5">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                    <span className="text-[#94A3B8]">
                      By {post.author.name} · {post.author.role}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#7DB0FF] hover:underline underline-offset-4"
                    >
                      <span>Read article</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
