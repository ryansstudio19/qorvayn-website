import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_PAGES } from '@/lib/og';

export const alt = OG_PAGES.skypics.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage(OG_PAGES.skypics);
}

