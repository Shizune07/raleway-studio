import { MetadataRoute } from 'next'

const BASE = 'https://www.ralewaystudio.com'

const routes = [
  { path: '',              priority: 1.0,  changeFreq: 'weekly'  },
  { path: '/services',     priority: 0.9,  changeFreq: 'weekly'  },
  { path: '/services/website-design',         priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/graphic-design',          priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/seo',                     priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/project-management',      priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/ai-automation',           priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/social-media-management', priority: 0.85, changeFreq: 'monthly' },
  { path: '/services/virtual-assistance',      priority: 0.85, changeFreq: 'monthly' },
  { path: '/about',        priority: 0.8,  changeFreq: 'monthly' },
  { path: '/pricing',      priority: 0.8,  changeFreq: 'monthly' },
  { path: '/contact',      priority: 0.8,  changeFreq: 'monthly' },
  { path: '/book',         priority: 0.75, changeFreq: 'monthly' },
  { path: '/testimonials', priority: 0.7,  changeFreq: 'monthly' },
  { path: '/blog',         priority: 0.7,  changeFreq: 'weekly'  },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(r => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }))
}
