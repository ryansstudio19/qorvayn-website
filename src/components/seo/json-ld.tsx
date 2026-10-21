import type { ReactNode } from 'react';
import { SITE_URL } from '@/lib/metadata';
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  goalwearBrandSchema,
  goalwearProductsSchema,
  faqPageSchema,
  articleSchema,
  type BreadcrumbItem,
  type SoftwareAppInput,
  type FaqItem,
  type ArticleInput,
} from '@/lib/schema';

/**
 * Server-rendered JSON-LD. `<` is escaped so content can never close the script tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** Breadcrumb trail. Home is added automatically as the first item. */
export function BreadcrumbListJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}

export function SoftwareApplicationJsonLd(props: SoftwareAppInput) {
  return <JsonLd data={softwareApplicationSchema(props)} />;
}

export function BrandJsonLd() {
  return <JsonLd data={goalwearBrandSchema()} />;
}

/** Product + Offer for the GoalWear drops listed (with visible prices) on the page. */
export function GoalWearProductsJsonLd() {
  return <JsonLd data={goalwearProductsSchema()} />;
}

/** Render only on pages that also display the identical FAQ items visibly. */
export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  return <JsonLd data={faqPageSchema(items)} />;
}

export function ArticleJsonLd(props: ArticleInput) {
  return <JsonLd data={articleSchema(props)} />;
}

export { SITE_URL, type FaqItem };
