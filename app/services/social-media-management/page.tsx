import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Social Media Management | Raleway Studio',
  description: 'Consistent, on-brand social media content managed for you — so you stay visible without the daily stress.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/social-media-management' },
}

const features = [
  { icon: '📅', title: 'Content Calendar', desc: 'A full monthly plan so you always know what&apos;s going out and when.' },
  { icon: '✍️', title: 'Caption Writing', desc: 'On-brand copy that sounds like you and speaks to your audience.' },
  { icon: '🎨', title: 'Graphic Creation', desc: 'Custom visuals for every post — no stock templates.' },
  { icon: '📲', title: 'Scheduling & Posting', desc: 'We handle publishing across Instagram, Facebook, LinkedIn, and more.' },
  { icon: '📊', title: 'Monthly Analytics', desc: 'Clear reports on reach, engagement, and what&apos;s working.' },
  { icon: '💬', title: 'Community Engagement', desc: 'We monitor comments and messages so nothing goes unanswered.' },
]

export default function SocialMediaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Social Media Management</nav>
          <h1>Social Media Management</h1>
          <p>Consistent, on-brand content managed for you — so you stay visible without the daily stress.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}><Link href="/contact" className="btn btn-primary">Get Started</Link><Link href="/pricing" className="btn btn-outline">View Pricing</Link></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="two-col">
        <div>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Stay Visible, Stay Consistent</h2>
          <p>Showing up on social media every day is exhausting — especially when you&apos;re also running a business. We take it off your plate entirely, from content planning to posting and engagement.</p>
          <p>Every piece of content is designed to match your brand, speak to your audience, and build the kind of trust that turns followers into customers. From $300/month.</p>
          <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Start Today</Link>
        </div>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
          <Image src="https://static.wixstatic.com/media/da934b39b32b473f8e2a39b2fa185f48.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/da934b39b32b473f8e2a39b2fa185f48.webp" alt="Social Media Management" width={480} height={300} style={{width:'100%',height:'auto'}} />
        </div>
      </div></div></section>

      <section className="section section--light"><div className="container"><div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Done-for-You Social Media</h2></div><div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div></div></section>

      <section className="cta-banner"><div className="container"><h2>Ready to Show Up Consistently?</h2><p>Let&apos;s handle your social media so you can focus on your business.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
