import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Website Design Services | Raleway Studio',
  description: 'Custom, mobile-responsive websites built to represent your brand and convert visitors into clients. Remote web design for small businesses worldwide.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/website-design' },
}

const features = [
  { icon: '📱', title: 'Mobile-Responsive', desc: 'Every site looks great on phones, tablets, and desktops.' },
  { icon: '⚡', title: 'Fast & Optimised', desc: 'Built for speed — good PageSpeed scores out of the box.' },
  { icon: '🔍', title: 'SEO-Ready', desc: 'Proper structure, meta tags, and schema from day one.' },
  { icon: '🎨', title: 'Custom Design', desc: 'No templates — every site is designed to match your brand.' },
  { icon: '✏️', title: 'Unlimited Revisions', desc: 'We iterate until you love it. No cut-off during the edit window.' },
  { icon: '🌍', title: 'Remote Delivery', desc: 'Fully remote — we work with businesses anywhere in the world.' },
]

export default function WebsiteDesignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Website Design</nav>
          <h1>Website Design</h1>
          <p>Modern, responsive websites built to represent your brand clearly and convert visitors into clients.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}>
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
            <Link href="/pricing" className="btn btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Websites That Work as Hard as You Do</h2>
              <p>We design and build custom websites that represent your business professionally — not templates, not cookie-cutter layouts. Every site is tailored to your brand, your audience, and your goals.</p>
              <p>Whether you need a simple landing page or a multi-page business site, we handle everything: design, copy structure, images, SEO setup, and launch.</p>
              <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Get a Quote</Link>
            </div>
            <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
              <Image src="https://static.wixstatic.com/media/11062b_31fcefa60a2e4659a556237badf702e1~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_31fcefa60a2e4659a556237badf702e1~mv2.webp" alt="Website Design" width={480} height={300} style={{width:'100%',height:'auto'}} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What&apos;s Included</span>
            <h2 className="section-title">Everything You Need to Launch</h2>
          </div>
          <div className="features-grid" style={{marginTop:'3rem'}}>
            {features.map(f => (
              <div className="feature" key={f.title}>
                <div className="feature__icon">{f.icon}</div>
                <div><h3>{f.title}</h3><p>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready for a Website That Gets Results?</h2>
          <p>Tell us about your project and we&apos;ll get back to you within 1–2 business days.</p>
          <div className="btn-group" style={{justifyContent:'center'}}>
            <Link href="/contact" className="btn btn-white">Start a Project</Link>
            <Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
