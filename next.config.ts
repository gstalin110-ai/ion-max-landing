import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: false,
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  experimental: {
    scrollRestoration: true,
    agentUpgrade: 'security',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
