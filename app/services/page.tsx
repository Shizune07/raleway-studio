import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { client, servicesQuery } from '@/lib/sanity'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website design, brand identity, SEO, AI automation, and more — each service built to close the gap between what your business is and how the world sees it.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services' },
  openGraph: { url: 'https://www.ralewaystudio.com/services' },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Services | Raleway Studio',
  url: 'https://www.ralewaystudio.com/services',
  description:
    'Website design, brand identity, SEO, AI automation — each service built to close the gap between what your business is and how the world sees it.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
}

// Fallback services — used when Sanity is unavailable
const fallbackServices = [
  { slug: 'website-design',           title: 'Website Design',           desc: 'Modern, responsive websites built to represent your brand clearly and convert visitors into clients.' },
  { slug: 'brand-identity',           title: 'Brand Identity',           desc: 'A complete visual identity — logo, colour, typography, and usage guidelines — built to communicate what makes your business worth choosing.' },
  { slug: 'seo',                      title: 'SEO',                      desc: 'Keyword research, on-page optimisation, and content strategy to help the right people find you online.' },
  { slug: 'ai-automation',            title: 'AI Automation',            desc: 'Intelligent workflow automation that reduces manual effort and lets your business operate more efficiently.' },
  { slug: 'website-maintenance',      title: 'Website Maintenance',      desc: 'Ongoing updates, performance monitoring, and technical support so your site stays reliable and current.' },
  { slug: 'digital-strategy',         title: 'Digital Strategy',         desc: 'A clear plan for your digital presence — what to build, what order to build it in, and how to measure whether it is working.' },
  { slug: 'graphic-design',           title: 'Graphic Design',           desc: 'Social graphics, presentations, and visual assets that extend your brand into every context where your business shows up.' },
]

type Service = {
  slug: string | { current: string }
  title: string
  desc: string
}

function serviceSlug(s: Service): string {
  if (typeof s.slug === 'string') return s.slug
  return s.slug?.current ?? ''
}

export default async function ServicesPage() {
  let sanityServices: any[] = []
  try {
    sanityServices = await client.fetch(servicesQuery)
  } catch {
    sanityServices = []
  }

  const services: Service[] = sanityServices.length > 0
    ? sanityServices.map((s: any) => ({
        slug: s.slug?.current ?? s.slug,
        title: s.title,
        desc: s.tagline || s.description || '',
      }))
    : fallbackServices

  return (
    <>
      <JsonLd data={servicesSchema} />

      {/* ── Section 01 — Hero (Component 08) ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body
          Layout: 100svh, lower-anchored content
          Entrance: Pattern 07 (mount animation)
          Rule 04: No hero-actions — CTA at Threshold.
          Headline: 8 words (spec: 8–12) ✓
          Body: 21 words (spec: 18–25) ✓ */}
      <section
        id="main-content"
        className="hero"
        aria-label="Services"
      >
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-headline hero-entrance hero-entrance--headline">
              Every service we offer closes the same gap.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              Website design, brand identity, SEO, and automation — each built to
              make what you do visible to the people who need it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — Services List (light field) ──
          Component 04 — Service Item (navigational mode — links to /services/[slug])
          Counter: index formatted as "01", "02", etc.
          Data: Sanity (live) with fallback (static) */}
      <section className="section section--divided" aria-label="Our services">
        <div className="container">
          <ul className="services-list animate-entrance" role="list">
            {services.map((s, i) => (
              <li key={serviceSlug(s)} className="services-list__item">
                <Link
                  href={`/services/${serviceSlug(s)}`}
                  className="service-item service-item--linked"
                >
                  <span className="service-counter" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="service-name">{s.title}</span>
                  <p className="service-description">{s.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 03 — Qualifier + CTA (Component 09 — Threshold) ──
          Rule 11: One per page. Final section before Footer.
          Rule 07: Orange CTA — the only orange at this scroll depth. */}
      <section className="threshold" aria-label="Start a project">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              Not sure which service fits your situation?
            </h2>
            <p className="threshold-body animate-entrance">
              Start with a conversation. We will tell you what we think needs to happen
              first — even if that means recommending a different sequence than what
              you originally had in mind.
            </p>
            <Link href="/start" className="btn-primary animate-entrance">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
