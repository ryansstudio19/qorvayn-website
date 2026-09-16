export type ProductId = 'ryneka' | 'skypics' | 'goalwear';

export interface ConceptCard {
  title: string;
  description: string;
}

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  href: string;
  accent: string;
  accentLight: string;
  status: string;
  conceptCards: ConceptCard[];
  principles: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'ryneka',
    name: 'RYNEKA',
    tagline: 'An AI Operating System',
    description:
      'An AI Operating System designed to help people think, create, automate, and manage their digital lives.',
    href: '/products/ryneka',
    accent: '#4F8CFF',
    accentLight: '#7DB0FF',
    status: 'Product vision',
    conceptCards: [
      {
        title: 'Think',
        description:
          'A product vision centered on helping people organize and extend their thinking with intelligent assistance.',
      },
      {
        title: 'Create',
        description:
          'Exploring tools that help people create, write, design, and build with the support of intelligent systems.',
      },
      {
        title: 'Manage',
        description:
          'A concept direction for automating and managing digital workflows, tasks, and information in one place.',
      },
    ],
    principles: ['privacy', 'accessibility', 'craftsmanship'],
  },
  {
    id: 'skypics',
    name: 'SkyPics',
    tagline: 'An AI-powered visual platform',
    description:
      'An AI-powered visual and social platform focused on nature, sky, photography, and creative experiences.',
    href: '/products/skypics',
    accent: '#45D7FF',
    accentLight: '#7EEAFF',
    status: 'Product vision',
    conceptCards: [
      {
        title: 'Explore',
        description:
          'A concept for discovering visual stories from sky, nature, and photography communities worldwide.',
      },
      {
        title: 'Create',
        description:
          'Exploring AI-assisted tools for visual expression, editing, and creative storytelling.',
      },
      {
        title: 'Share',
        description:
          'A platform vision for connecting visual creators and sharing experiences with the world.',
      },
    ],
    principles: ['accessibility', 'privacy', 'craftsmanship'],
  },
  {
    id: 'goalwear',
    name: 'GoalWear',
    tagline: 'Built for matchday. Worn everywhere.',
    description:
      'A premier football jersey and football streetwear e-commerce brand. Authentic matchday player-edition drops, classic club kits, and street culture.',
    href: '/products/goalwear',
    accent: '#00FF66',
    accentLight: '#66FFAA',
    status: 'Official brand ecosystem',
    conceptCards: [
      {
        title: 'Football Fashion',
        description:
          'A concept direction for premium football-inspired clothing and lifestyle products.',
      },
      {
        title: 'Streetwear Expression',
        description:
          'Exploring the intersection of street culture and football aesthetics in a digital-first format.',
      },
      {
        title: 'Digital Shopping Experience',
        description:
          'A future-facing approach to fashion commerce — not yet operational as a live store.',
      },
    ],
    principles: ['craftsmanship', 'accessibility', 'long-term'],
  },
];
