export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  badge: string;
  title: string;
  description: string;
  category: 'Milestone' | 'Architecture' | 'Ecosystem' | 'Foundation';
  categoryColor: string;
  highlights: string[];
}

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    id: 'seo-infrastructure-optimization',
    version: 'v1.2.0',
    date: '24 September 2026',
    badge: 'Latest Release',
    title: 'Production Infrastructure & Search Knowledge Architecture',
    description:
      'Engineered enterprise-grade performance and indexing optimizations. Configured official Schema.org Knowledge Graph structured data, zero-overhead client rendering, and high-performance WebGL state management.',
    category: 'Architecture',
    categoryColor: '#4F8CFF',
    highlights: [
      'Deployed Schema.org Organization & WebSite structured graph metadata for instant Google Knowledge Graph recognition',
      'Configured sub-second Largest Contentful Paint (LCP) with direct server-side render pipeline',
      'Implemented dynamic client code-splitting for 3D Three.js canvas components, dropping initial page JS bundle to 158 kB',
      'Integrated dedicated multi-resolution favicon architecture (/favicon.ico, apple-touch-icon, and icon.png)',
      'Optimized ambient backdrop GPU utilization with pointer-device detection and zero React re-renders',
      'Attained 100% WCAG AAA accessible color contrast across all UI surfaces and typography',
    ],
  },
  {
    id: 'flagship-product-architecture',
    version: 'v1.1.0',
    date: '18 September 2026',
    badge: 'Product Engine',
    title: 'Tri-Product Ecosystem Architecture & Spatial Concepts',
    description:
      'Detailed the core product paradigms for QORVAYN flagship offerings: RYNEKA Neural Workspace, SkyPics Visual Cloud, and GoalWear Ambient Wearable Tech.',
    category: 'Ecosystem',
    categoryColor: '#45D7FF',
    highlights: [
      'Published architectural specifications for RYNEKA AI & Neural Spatial Workspace',
      'Designed SkyPics cloud media storage and zero-knowledge privacy preservation framework',
      'Outlined GoalWear ambient biometric telemetry and minimal wearable lifestyle integration',
      'Implemented 3D spatial interactive perspective cards with depth parallax',
      'Standardized design system typography using Space Grotesk and Plus Jakarta Sans',
    ],
  },
  {
    id: 'official-web-launch',
    version: 'v1.0.0',
    date: '15 September 2026',
    badge: 'Major Milestone',
    title: 'Official QORVAYN Digital Touchpoint Launch',
    description:
      'Public debut of the official QORVAYN web platform at qorvayn.tech, establishing our digital presence, brand identity, and long-term mission.',
    category: 'Milestone',
    categoryColor: '#6EE7B7',
    highlights: [
      'Live deployment of https://qorvayn.tech on Next.js 15 App Router architecture',
      'Implemented procedural WebGL orbital filament shader background with custom fragment calculations',
      'Introduced comprehensive company manifesto, principles, and remote-first culture documentation',
      'Integrated high-fidelity contact portal and automated direct messaging pipeline',
      'Built verified sitemap.xml and robots.txt routes covering all 14 ecosystem destinations',
    ],
  },
  {
    id: 'foundation-founding',
    version: 'v0.1.0',
    date: '10 March 2026',
    badge: 'Genesis',
    title: 'Founding of QORVAYN',
    description:
      'QORVAYN was officially founded by Ryan Zannah in Bangladesh with a simple, uncompromising ambition: to build honest, human-centered technology that amplifies human capability.',
    category: 'Foundation',
    categoryColor: '#A78BFA',
    highlights: [
      'Founded on 10 March 2026 as a remote-first technology company rooted in Bangladesh',
      'Formulated foundational company ethos: Human-Centered Design, Craftsmanship, Privacy, and Long-Term Thinking',
      'Initiated R&D roadmap for intelligent software and creative digital experiences',
    ],
  },
];
