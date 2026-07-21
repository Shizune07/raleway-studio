import { MetadataRoute } from 'next'

// V1.0 service slugs — must match fallbackServices in app/services/page.tsx
// and generateStaticParams in app/services/[slug]/page.tsx
const serviceRoutes = [
  '/services/website-design',
  '/services/brand-identity',
  '/services/seo',
  '/services/ai-automation',
  '/services/website-maintenance',
  '/services/digital-strategy',
  '/services/graphic-design',
]

const BASE = 'https://www.ralewaystudio.com'

// Frozen pages — hardcoded dates reflect the V1.0 release (July 2026).
// Dynamic pages (thinking, services) use new Date() as they update with content.
const V1_RELEASE = new Date('2026-07-20')

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,         lastModified: V1_RELEASE, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: V1_RELEASE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/method`,   lastModified: V1_RELEASE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now,         changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/work`,     lastModified: V1_RELEASE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/thinking`, lastModified: now,         changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/start`,    lastModified: V1_RELEASE, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceStaticRoutes: MetadataRoute.Sitemap = serviceRoutes.map(path => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceStaticRoutes]
}
