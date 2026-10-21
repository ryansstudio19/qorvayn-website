import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QORVAYN',
    short_name: 'QORVAYN',
    description:
      'QORVAYN is a remote-first technology company building RYNEKA, SkyPics and GoalWear.',
    start_url: '/',
    display: 'browser',
    background_color: '#07090D',
    theme_color: '#07090D',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/qorvayn-logo.png', sizes: '256x256', type: 'image/png' },
    ],
  };
}
