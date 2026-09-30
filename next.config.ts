import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['mongoose'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
