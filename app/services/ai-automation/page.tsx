import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AI Automation Services | Raleway Studio',
  description: 'Smart workflow automation to save you time and reduce manual tasks — so your business runs more efficiently.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/ai-automation' },
}

const features = [
  { icon: '🤖', title: 'Workflow Automation', desc: 'Automate repetitive tasks across your tools and platforms.' },
  { icon: '📧', title: 'Email Automation', desc: 'Smart sequences, follow-ups, and triggers set up and ready to go.' },
  { icon: '📊', title: 'Data Processing', desc: 'Automated reporting, data collection, and analysis workflows.' },
  { icon: '🔗', title: 'App Integrations', desc: 'Connect your CRM, calendar, forms, and other tools seamlessly.' },
  { icon: '💬', title: 'Chatbot Setup', desc: 'AI-powered chat flows to handle enquiries 24/7.' },
  { icon: '⏰', title: 'Time Savings', desc: 'We measure the hours saved so you can see the direct ROI.' },
]

export default function AiAutomationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › AI Automation</nav>
          <h1>AI Automation</h1>
          <p>Save time with smart workflow automation — so your business runs more efficiently with less manual effort.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}><Link href="/contact" className="btn btn-primary">Automate My Business</Link><Link href="/pricing" className="btn btn-outline">View Pricing</Link></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="two-col">
        <div>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Work Smarter, Not Harder</h2>
          <p>Too many small businesses lose hours every week to tasks that a smart system could handle in seconds. We identify those bottlenecks and build automations that free you up to focus on growing your business.</p>
          <p>Whether it&apos;s connecting your tools, building AI-powered workflows, or setting up automated follow-ups, we handle the setup so you can enjoy the results. From $400 per project.</p>
          <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Get a Free Consultation</Link>
        </div>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
          <Image src="https://static.wixstatic.com/media/11062b_23a136fa16544a95856bb9758f77a155~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_23a136fa16544a95856bb9758f77a155~mv2.webp" alt="AI Automation" width={480} height={300} style={{width:'100%',height:'auto'}} />
        </div>
      </div></div></section>

      <section className="section section--light"><div className="container"><div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Smart Automation, Start to Finish</h2></div><div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div></div></section>

      <section className="cta-banner"><div className="container"><h2>Ready to Save Hours Every Week?</h2><p>Let&apos;s build automations that work for your business.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
