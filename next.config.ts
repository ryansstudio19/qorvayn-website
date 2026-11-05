import type { NextConfig } from 'next';
import path from 'path';

const SECURITY_HEADERS = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.web3forms.com; object-src 'none'; upgrade-insecure-requests;",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['three'],
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack(config) {
    // Ensure NextFontManifestPlugin matches next-font-loader paths on Windows builds
    config.plugins.push({
      apply(compiler: {
        hooks: {
          compilation: {
            tap: (
              name: string,
              cb: (compilation: {
                hooks: {
                  finishModules: {
                    tap: (
                      name: string,
                      fn: (modules: Iterable<{ request?: string }>) => void
                    ) => void;
                  };
                };
              }) => void
            ) => void;
          };
        };
      }) {
        compiler.hooks.compilation.tap('FixWindowsNextFontManifest', (compilation) => {
          compilation.hooks.finishModules.tap('FixWindowsNextFontManifest', (modules) => {
            for (const mod of modules) {
              if (mod.request && mod.request.includes('next-font-loader')) {
                mod.request = mod.request.replace(/\\/g, '/');
              }
            }
          });
        });
      },
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: SECURITY_HEADERS,
      },
    ];
  },
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
