// NOTE: Team roles should only be published with each member's consent
// and confirmed responsibilities. To respect privacy and current team consensus,
// roles can be configured as specific roles or switched to 'Core Team'.

export interface TeamMemberSocials {
  website?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Core Team';
  initials: string;
  image: string;
  objectPosition?: string;
  socials?: TeamMemberSocials;
}

export const TEAM: TeamMember[] = [
  {
    id: 'ryan-zannah',
    name: 'Ryan Zannah',
    role: 'Founder & CEO',
    category: 'Leadership',
    initials: 'RZ',
    image: '/team/ryan-zannah.jpg',
    objectPosition: '52% 20%',
    socials: {
      website: 'https://ryanzannah.online',
      linkedin: 'https://www.linkedin.com/in/ryanzannah24/',
      github: 'https://github.com/ryansstudio19',
      instagram: 'https://www.instagram.com/ryan.zannah/',
      facebook: 'https://www.facebook.com/ryan202319',
      twitter: 'https://x.com/ryan_zannah',
      youtube: 'https://www.youtube.com/@ryan_zannah24',
    },
  },
  {
    id: 'adelia-maharani',
    name: 'Adelia Maharani',
    role: 'Co-Founder / Brand & Creative Direction',
    category: 'Leadership',
    initials: 'AM',
    image: '/team/adelia-maharani.jpg',
    objectPosition: '50% 18%',
  },
  {
    id: 'siyami-muntaha-saba',
    name: 'Siyami Muntaha Saba',
    role: 'Co-Founder & Head of Design',
    category: 'Leadership',
    initials: 'SM',
    image: '/team/siyami-muntaha-saba.jpg',
    objectPosition: '38% 20%',
  },
  {
    id: 'tam-zayn',
    name: 'Tam Zayn',
    role: 'Head of Technology & Product',
    category: 'Core Team',
    initials: 'TZ',
    image: '/team/tam-zayn.jpg',
    objectPosition: '44% 18%',
  },
  {
    id: 'rahat-ehsan-sufi',
    name: 'Rahat Ehsan Sufi',
    role: 'Operations & Business',
    category: 'Core Team',
    initials: 'RE',
    image: '/team/rahat-ehsan-sufi.jpg',
    objectPosition: '50% 18%',
    socials: {
      website: 'https://rahates.online',
      linkedin: 'https://www.linkedin.com/in/rahat-ehsan-sufi-9b76ab437',
      instagram: 'https://www.instagram.com/rahatqorvayn1',
      facebook: 'https://www.facebook.com/rahatqorvayn1',
      twitter: 'https://x.com/rahatqorvayn1',
      youtube: 'https://www.youtube.com/@editor.rahat1',
    },
  },
  {
    id: 'sayel',
    name: 'Shoyetur Rahman Sayel',
    role: 'Software / Product Development',
    category: 'Core Team',
    initials: 'SR',
    image: '/team/sayel.jpg',
    objectPosition: '47% 20%',
    socials: {
      website: 'https://srsayel.online',
      linkedin: 'https://www.linkedin.com/in/shoyetur-rahman-sayel-922862432',
      instagram: 'https://www.instagram.com/sayel.x',
      facebook: 'https://www.facebook.com/profile.php?id=61596365753964',
      twitter: 'https://x.com/sayel_ps',
      youtube: 'https://www.youtube.com/@Shoyetur',
    },
  },
];
