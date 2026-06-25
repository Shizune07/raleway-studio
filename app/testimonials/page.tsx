import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { client, testimonialsQuery } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Raleway Studio',
  description: 'See what clients say about working with Raleway Studio — real results from real businesses we\'ve helped grow online with web design and digital services.',
  alternates: { canonical: 'https://www.ralewaystudio.com/testimonials' },
  openGraph: { url: 'https://www.ralewaystudio.com/testimonials' },
}

const fallbackTestimonials = [
  { initial: 'A', name: 'Alex M.', role: 'Small Business Owner', text: '"Raleway Studio completely transformed our online presence. The website is beautiful, fast, and we\'re already getting more inquiries from clients we wouldn\'t have reached before."' },
  { initial: 'J', name: 'Jamie L.', role: 'E-Commerce Founder', text: '"Professional, communicative, and the results exceeded expectations. The SEO improvements alone made it worth every penny — we\'re ranking for keywords we never appeared for before."' },
  { initial: 'M', name: 'Maria S.', role: 'Creative Agency Director', text: '"Working with Raleway Studio remotely was completely seamless. They understood our brand immediately and delivered exactly what we needed — on time and without any back-and-forth frustration."' },
  { initial: 'R', name: 'Rachel T.', role: 'Freelance Coach', text: '"I needed a website redesign and wasn\'t sure where to start. Seira walked me through everything and the final result looked more professional than I imagined. Highly recommend."' },
  { initial: 'D', name: 'David K.', role: 'Restaurant Owner', text: '"The graphic design work was outstanding. Every visual felt intentional and on-brand. I\'ve gotten multiple compliments from clients about how polished everything looks now."' },
  { initial: 'L', name: 'Leila M.', role: 'Startup Founder', text: '"I hired Raleway Studio for virtual assistance and it freed up so much of my time. Reliable, responsive, and genuinely helpful. Worth every dollar."' },
]

const testimonialsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Client Reviews & Testimonials | Raleway Studio',
  url: 'https://www.ralewaystudio.com/testimonials',
  description: 'See what clients say about working with Raleway Studio — real results from real businesses we\'ve helped grow online.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ralewaystudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://www.ralewaystudio.com/testimonials' },
    ],
  },
}

export default async function TestimonialsPage() {
  const sanityTestimonials = await client.fetch(testimonialsQuery).catch(() => [])
  const testimonials = sanityTestimonials.length > 0
    ? sanityTestimonials.map((t: any) => ({
        initial: t.initials || t.clientName?.[0] || '?',
        name: t.clientName,
        role: [t.businessName, t.location].filter(Boolean).join(' · ') || t.service || '',
        text: t.quote.startsWith('"') ? t.quote : `"${t.quote}"`,
      }))
    : fallbackTestimonials

  return (
    <>
      <JsonLd data={testimonialsSchema} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Testimonials</nav>
          <h1>Client Reviews</h1>
          <p>Real feedback from real businesses we&apos;ve helped grow online.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'var(--primary)',padding:'3rem 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:'2rem',textAlign:'center'}}>
            {[
              { num: '5.0', label: 'Average rating' },
              { num: '100%', label: 'Client satisfaction' },
              { num: '48h', label: 'Average response' },
              { num: '🌍', label: 'Clients worldwide' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{fontSize:'2.2rem',fontWeight:900,color:'white',fontFamily:'var(--font-raleway)'}}>{stat.num}</div>
                <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.75)',marginTop:'0.25rem'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t: any, i: number) => (
              <div className="testimonial-card" key={`${t.name}-${i}`}>
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to See Results Like These?</h2>
          <p>Let&apos;s start building your online presence today.</p>
          <div className="btn-group" style={{justifyContent:'center'}}>
            <Link href="/contact" className="btn btn-white">Get in Touch</Link>
            <Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
