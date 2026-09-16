// NOTE: Team roles should only be published with each member's consent
// and confirmed responsibilities. To respect privacy and current team consensus,
// roles can be configured as specific roles or switched to 'Core Team'.

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Core Team';
  initials: string;
  image: string;
  objectPosition?: string;
}

export const TEAM: TeamMember[] = [
  {
    id: 'ryan-zannah',
    name: 'Ryan Zannah',
    role: 'Founder & CEO',
    category: 'Leadership',
    initials: 'RZ',
    image: '/team/ryan-zannah.jpg',
    objectPosition: '55% 25%',
  },
  {
    id: 'tam-zayn',
    name: 'Tam Zayn',
    role: 'Co-Founder / Product & Technology',
    category: 'Leadership',
    initials: 'TZ',
    image: '/team/tam-zayn.jpg',
    objectPosition: '44% 18%',
  },
  {
    id: 'siyami-muntaha-saba',
    name: 'Siyami Muntaha Saba',
    role: 'Creative Director & Design',
    category: 'Core Team',
    initials: 'SM',
    image: '/team/siyami-muntaha-saba.jpg',
    objectPosition: '38% 20%',
  },
  {
    id: 'rahat-ehsan-sufi',
    name: 'Rahat Ehsan Sufi',
    role: 'Operations & Business',
    category: 'Core Team',
    initials: 'RE',
    image: '/team/rahat-ehsan-sufi.jpg',
    objectPosition: '50% 18%',
  },
  {
    id: 'sayel',
    name: 'Sayel',
    role: 'Software / Product Development',
    category: 'Core Team',
    initials: 'SY',
    image: '/team/sayel.jpg',
    objectPosition: '47% 20%',
  },
];
