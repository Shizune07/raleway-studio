import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Graphic Design Services | Raleway Studio',
  description: 'Logos, brand kits, social media graphics, and marketing visuals that make your small business look polished and professional.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/graphic-design' },
}

const features = [
  { icon: '🎨', title: 'Logo Design', desc: 'A distinctive logo that captures your brand identity.' },
  { icon: '📦', title: 'Brand Kits', desc: 'Full brand packages — colours, typography, and usage guidelines.' },
  { icon: '📱', title: 'Social Graphics', desc: 'On-brand visuals for Instagram, Facebook, LinkedIn, and more.' },
  { icon: '📣', title: 'Marketing Materials', desc: 'Banners, flyers, email headers, and ads designed to convert.' },
  { icon: '✏️', title: 'Unlimited Revisions', desc: 'We refine until every pixel is exactly right.' },
  { icon: '📁', title: 'All File Formats', desc: 'Delivered in PNG, SVG, PDF, and any format you need.' },
]

export default function GraphicDesignPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Graphic Design</nav>
          <h1>Graphic Design</h1>
          <p>Logos, brand kits, social media graphics, and marketing visuals that make your business look polished and professional.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}>
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
            <Link href="/pricing" className="btn btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">Design That Builds Trust</h2>
              <p>First impressions happen fast. A strong visual identity tells people your business is professional before they read a single word. We create graphics that reflect who you are and make people stop scrolling.</p>
              <p>From a single logo to a complete brand kit, we handle it all — clean, intentional, and built to last.</p>
              <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Start a Project</Link>
            </div>
            <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
              <Image src="https://static.wixstatic.com/media/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.webp" alt="Graphic Design" width={480} height={300} style={{width:'100%',height:'auto'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Everything You Need to Look the Part</h2></div>
          <div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div>
        </div>
      </section>

      <section className="cta-banner"><div className="container"><h2>Ready to Elevate Your Brand?</h2><p>Let&apos;s create visuals your business will be proud of.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
