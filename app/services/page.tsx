import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { client, servicesQuery } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Web Design, SEO & Digital Services | Raleway Studio',
  description: 'From custom websites and SEO to graphic design, social media, and virtual assistance — explore Raleway Studio\'s services and find the right fit for your business.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services' },
  openGraph: { url: 'https://www.ralewaystudio.com/services' },
}

// Fallback images keyed by slug (used whether content comes from Sanity or hardcode)
const serviceImages: Record<string, string> = {
  'website-design': 'https://static.wixstatic.com/media/11062b_31fcefa60a2e4659a556237badf702e1~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_31fcefa60a2e4659a556237badf702e1~mv2.webp',
  'graphic-design': 'https://static.wixstatic.com/media/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.webp',
  'seo': 'https://static.wixstatic.com/media/11062b_3040ce30c4fd456089061867709bc60f~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_3040ce30c4fd456089061867709bc60f~mv2.webp',
  'project-management': 'https://static.wixstatic.com/media/3d7bc412c43340e08591ef32a3aab71e.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/3d7bc412c43340e08591ef32a3aab71e.webp',
  'ai-automation': 'https://static.wixstatic.com/media/11062b_23a136fa16544a95856bb9758f77a155~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_23a136fa16544a95856bb9758f77a155~mv2.webp',
  'social-media-management': 'https://static.wixstatic.com/media/da934b39b32b473f8e2a39b2fa185f48.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/da934b39b32b473f8e2a39b2fa185f48.webp',
  'virtual-assistance': 'https://static.wixstatic.com/media/11062b_e0e2d79140ef4c559035a696fc808052~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_e0e2d79140ef4c559035a696fc808052~mv2.webp',
}

const fallbackServices: Array<{slug: string, title: string, desc: string, priority: boolean}> = [
  { slug: 'website-design', title: 'Website Design', desc: 'Modern, responsive websites built to represent your brand clearly and convert visitors into clients.', priority: true },
  { slug: 'graphic-design', title: 'Graphic Design', desc: 'Logos, social media graphics, and brand visuals that make your business look polished and professional.', priority: false },
  { slug: 'seo', title: 'SEO', desc: 'Keyword research, on-page optimization, and content strategy to help the right people find you online.', priority: false },
  { slug: 'project-management', title: 'Project Management', desc: 'Stay organized and on track. We help manage projects, deadlines, and deliverables so you can focus on growth.', priority: false },
  { slug: 'ai-automation', title: 'AI Automation', desc: 'Save time with smart workflow automation — so your business runs more efficiently with less manual effort.', priority: false },
  { slug: 'social-media-management', title: 'Social Media Management', desc: 'Consistent, on-brand content managed for you — so you stay visible without the daily stress.', priority: false },
  { slug: 'virtual-assistance', title: 'Virtual Assistance', desc: 'Remote admin and business support to free up your time for what actually moves the needle.', priority: false },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Our Services | Raleway Studio — Web Design & Digital Solutions',
  url: 'https://www.ralewaystudio.com/services',
  description: 'Website design, graphic design, SEO, project management, AI automation, social media management, and virtual assistance — all from one remote studio.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ralewaystudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.ralewaystudio.com/services' },
    ],
  },
}

export default async function ServicesPage() {
  const sanityServices = await client.fetch(servicesQuery).catch(() => [])
  const services = sanityServices.length > 0
    ? sanityServices.map((s: any) => ({
        slug: s.slug?.current ?? s.slug,
        title: s.title,
        desc: s.tagline || s.description || '',
        img: serviceImages[s.slug?.current ?? s.slug] || '',
        priority: (s.slug?.current ?? s.slug) === 'website-design',
      }))
    : fallbackServices.map(s => ({ ...s, img: serviceImages[s.slug] || '' }))

  return (
    <>
      <JsonLd data={servicesSchema} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Services</nav>
          <h1>Services &amp; Pricing</h1>
          <p>Everything your business needs to grow online — design, SEO, content, automation, and support. All remote, all professional.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s: any) => (
              <div className="service-card" key={s.slug}>
                {s.img && (
                  <Image
                    src={s.img}
                    alt={`${s.title} service`}
                    width={480} height={300}
                    className="service-card__img"
                    priority={s.priority}
                  />
                )}
                <div className="service-card__body">
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <Link href={`/services/${s.slug}`} className="btn btn-outline btn-sm">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Reach out and let&apos;s figure out what your business needs most right now.</p>
          <Link href="/contact" className="btn btn-white">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
