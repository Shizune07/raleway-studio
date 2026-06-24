import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Virtual Assistance Services | Raleway Studio',
  description: 'Remote admin and business support to free up your time for what actually moves the needle. Available worldwide, from $25/hour.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/virtual-assistance' },
}

const features = [
  { icon: '📧', title: 'Email Management', desc: 'Inbox organisation, responses, and follow-ups handled for you.' },
  { icon: '📅', title: 'Scheduling', desc: 'Calendar management, meeting bookings, and reminders.' },
  { icon: '📝', title: 'Admin Tasks', desc: 'Data entry, document prep, research, and general admin.' },
  { icon: '🧾', title: 'Invoice & Records', desc: 'Basic bookkeeping support and records organisation.' },
  { icon: '🔍', title: 'Research', desc: 'Market research, competitor analysis, supplier sourcing.' },
  { icon: '🌍', title: 'Remote & Flexible', desc: 'We work across time zones and scale with your needs.' },
]

export default function VirtualAssistancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Virtual Assistance</nav>
          <h1>Virtual Assistance</h1>
          <p>Remote admin and business support to free up your time for what actually moves the needle.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}><Link href="/contact" className="btn btn-primary">Hire a VA</Link><Link href="/pricing" className="btn btn-outline">View Pricing</Link></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="two-col">
        <div>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Get Your Time Back</h2>
          <p>Business owners spend too much time on tasks that don&apos;t need them personally. Emails, scheduling, data entry, admin work — these are important, but they don&apos;t need to be done by you.</p>
          <p>Our virtual assistants are reliable, responsive, and genuinely helpful. You delegate, we handle it. Billed from $25/hour with flexible packages available.</p>
          <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Get Support Today</Link>
        </div>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
          <Image src="https://static.wixstatic.com/media/11062b_e0e2d79140ef4c559035a696fc808052~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_e0e2d79140ef4c559035a696fc808052~mv2.webp" alt="Virtual Assistance" width={480} height={300} style={{width:'100%',height:'auto'}} />
        </div>
      </div></div></section>

      <section className="section section--light"><div className="container"><div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Support That Scales With You</h2></div><div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div></div></section>

      <section className="cta-banner"><div className="container"><h2>Ready to Delegate?</h2><p>Tell us what you need and we&apos;ll match you with the right support.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
