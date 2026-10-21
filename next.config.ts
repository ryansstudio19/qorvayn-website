import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: '/ryneka', destination: '/products/ryneka', permanent: true },
      { source: '/skypics', destination: '/products/skypics', permanent: true },
      { source: '/goalwear', destination: '/products/goalwear', permanent: true },
      { source: '/updates', destination: '/changelog', permanent: true },
    ];
  },
};

export default nextConfig;
