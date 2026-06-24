import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'SEO Services | Raleway Studio',
  description: 'Keyword research, on-page optimisation, and content strategy to help the right people find your business online.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/seo' },
}

const features = [
  { icon: '🔍', title: 'Keyword Research', desc: 'Find the exact terms your customers are searching for.' },
  { icon: '📄', title: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, headings, and schema markup.' },
  { icon: '🏗️', title: 'Technical SEO', desc: 'Site speed, crawlability, sitemaps, and Core Web Vitals.' },
  { icon: '✍️', title: 'Content Strategy', desc: 'Plan and create content that ranks and converts.' },
  { icon: '📊', title: 'Monthly Reporting', desc: 'Clear reports showing rankings, traffic, and progress.' },
  { icon: '🔗', title: 'Link Strategy', desc: 'Internal linking and authority-building guidance.' },
]

export default function SeoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › SEO</nav>
          <h1>SEO</h1>
          <p>Keyword research, on-page optimisation, and content strategy to help the right people find you online.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}><Link href="/contact" className="btn btn-primary">Start with SEO</Link><Link href="/pricing" className="btn btn-outline">View Pricing</Link></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="two-col">
        <div>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Get Found by the Right People</h2>
          <p>A beautiful website means nothing if no one can find it. SEO is how you show up in Google when your ideal clients are actively searching for what you offer.</p>
          <p>We handle the full picture — from technical audits and keyword research to content optimisation and monthly tracking. Starting from $200/month.</p>
          <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Get a Free Audit</Link>
        </div>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
          <Image src="https://static.wixstatic.com/media/11062b_3040ce30c4fd456089061867709bc60f~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_3040ce30c4fd456089061867709bc60f~mv2.webp" alt="SEO" width={480} height={300} style={{width:'100%',height:'auto'}} />
        </div>
      </div></div></section>

      <section className="section section--light"><div className="container"><div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Full SEO Coverage</h2></div><div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div></div></section>

      <section className="cta-banner"><div className="container"><h2>Ready to Rank Higher?</h2><p>Let&apos;s build an SEO strategy that brings real results.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
