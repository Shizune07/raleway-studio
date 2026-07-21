import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['@sanity/client', 'sanity'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/media/**' },
      { protocol: 'https', hostname: 'www.ralewaystudio.com', pathname: '/assets/**' },
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
  async redirects() {
    return [
      // ── Legacy route migrations ──────────────────────────────────────
      // Blog → Thinking (route migration, V1.0)
      {
        source: '/blog',
        destination: '/thinking',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/thinking/:slug',
        permanent: true,
      },
      // ── Duplicate pages → canonical V1.0 destinations ────────────────
      // /book duplicates booking widget already on /start
      {
        source: '/book',
        destination: '/start',
        permanent: true,
      },
      // ── D1: /contact → /start ────────────────────────────────────────
      // /start is the conversion destination; "prefer to write" link on
      // /start already provides the form-based alternative via email.
      {
        source: '/contact',
        destination: '/start',
        permanent: true,
      },
      // ── D2: /pricing → /start ────────────────────────────────────────
      // Pricing packages contradict V1.0 positioning (scoped per conversation).
      {
        source: '/pricing',
        destination: '/start',
        permanent: true,
      },
      // ── D3: /testimonials → /about ───────────────────────────────────
      // Placeholder testimonials removed. Real testimonials are a V2 asset.
      {
        source: '/testimonials',
        destination: '/about',
        permanent: true,
      },
      // ── D4: /services/[slug] → /services ─────────────────────────────
      // Individual service pages are V2 scope. Index page serves V1.0.
      {
        source: '/services/:slug',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
