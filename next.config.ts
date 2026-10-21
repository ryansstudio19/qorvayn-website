import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
