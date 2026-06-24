import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Raleway Studio — Web Design & Digital Tips',
  description: 'Tips, insights, and guides on web design, SEO, branding, and growing your small business online.',
  alternates: { canonical: 'https://www.ralewaystudio.com/blog' },
}

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Blog</nav>
          <h1>Blog</h1>
          <p>Tips, insights, and guides on web design, SEO, and growing your business online.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign:'center',maxWidth:600}}>
          <span className="section-label">Coming Soon</span>
          <h2 className="section-title">Blog Launching Soon</h2>
          <p>We&apos;re working on guides and articles to help small business owners navigate web design, SEO, and digital growth. Check back soon.</p>
          <p>In the meantime, feel free to reach out — we&apos;re always happy to answer questions directly.</p>
          <div className="btn-group" style={{justifyContent:'center',marginTop:'2rem'}}>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link href="/services" className="btn btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
