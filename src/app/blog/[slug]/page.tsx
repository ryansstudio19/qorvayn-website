import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { ArticleJsonLd, BreadcrumbListJsonLd } from '@/components/seo/json-ld';
import { Container } from '@/components/ui/container';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return pageMetadata({
      title: 'Article Not Found',
      description: 'The requested QORVAYN article could not be found.',
      path: `/blog/${slug}`,
      noindex: true,
    });
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;

  return (
    <article className="py-28 sm:py-36">
      <BreadcrumbListJsonLd
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path },
        ]}
      />
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        path={path}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        authorName={post.author.name}
        authorRole={post.author.role}
      />

      <Container size="sm">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#F5F7FA] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to QORVAYN Blog</span>
          </Link>
        </div>

        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#7DB0FF] mb-4">
            <span className="uppercase tracking-wider">{post.category}</span>
            <span className="text-white/20">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="font-display font-extrabold text-[#F5F7FA] text-3xl sm:text-5xl leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            <div>
              <span className="text-[#F5F7FA] font-semibold">{post.author.name}</span>
              <span> · {post.author.role}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                Published: <time dateTime={post.datePublished}>{post.datePublished}</time>
              </span>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <span>
                  · Updated: <time dateTime={post.dateModified}>{post.dateModified}</time>
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="space-y-10 text-[#CBD5E1] leading-relaxed">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-display font-bold text-[#F5F7FA] text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
