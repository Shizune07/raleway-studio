import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['@sanity/client', 'sanity'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ralewaystudio.com',
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig
