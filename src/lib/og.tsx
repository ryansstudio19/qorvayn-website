import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';

interface OgOptions {
  /** Small label above the title, e.g. "QORVAYN PRODUCT". */
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Accent colour taken from the existing brand palette. */
  accent: string;
}

/** Loads Space Grotesk (the site's display font). Falls back to the default font offline. */
async function loadFont(weight: 700): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@${weight}`, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 Chrome/120 Safari/537.36' },
      })
    ).text();
    const url = css.match(/src: url\((https:[^)]+)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderOgImage({ eyebrow, title, subtitle, accent }: OgOptions) {
  const font = await loadFont(700);
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: `radial-gradient(ellipse at 80% 20%, ${accent}33 0%, #0B0F17 45%, #07090D 100%)`,
          color: '#F5F7FA',
          fontFamily: font ? 'Space Grotesk' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: accent }} />
          <div style={{ fontSize: 28, letterSpacing: 8, fontWeight: 700 }}>QORVAYN</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: accent, marginBottom: 20, display: 'flex' }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, display: 'flex' }}>
            {title}
          </div>
          <div style={{ fontSize: 32, color: '#A7B0C0', marginTop: 24, lineHeight: 1.35, display: 'flex' }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: '#6B7280' }}>www.qorvayn.tech</div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: font ? [{ name: 'Space Grotesk', data: font, weight: 700, style: 'normal' }] : undefined,
    },
  );
}

export const OG_PAGES = {
  home: {
    eyebrow: 'HUMAN-CENTERED TECHNOLOGY',
    title: 'AI Operating System, SkyPics and GoalWear',
    subtitle: 'Remote-first. Founded 10 March 2026 in Bangladesh.',
    accent: '#4F8CFF',
    alt: 'QORVAYN: AI Operating System, SkyPics and GoalWear',
  },
  ryneka: {
    eyebrow: 'QORVAYN PRODUCT',
    title: 'RYNEKA',
    subtitle: 'An AI Operating System to think, create, automate and manage your digital life.',
    accent: '#4F8CFF',
    alt: 'RYNEKA, an AI Operating System by QORVAYN',
  },
  skypics: {
    eyebrow: 'QORVAYN PRODUCT',
    title: 'SkyPics',
    subtitle: 'An AI-powered visual platform for sky, nature and photography.',
    accent: '#45D7FF',
    alt: 'SkyPics, an AI-powered visual platform by QORVAYN',
  },
  goalwear: {
    eyebrow: 'QORVAYN BRAND',
    title: 'GoalWear',
    subtitle: 'Football jerseys and football streetwear.',
    accent: '#00FF66',
    alt: 'GoalWear, football jerseys and streetwear by QORVAYN',
  },
} as const;
