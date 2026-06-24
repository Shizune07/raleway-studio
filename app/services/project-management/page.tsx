import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Project Management Services | Raleway Studio',
  description: 'Stay organized and on track. We help manage projects, deadlines, and deliverables so you can focus on growth.',
  alternates: { canonical: 'https://www.ralewaystudio.com/services/project-management' },
}

const features = [
  { icon: '📋', title: 'Project Planning', desc: 'Scopes, timelines, and milestones set up from day one.' },
  { icon: '📅', title: 'Deadline Tracking', desc: 'We keep everything on schedule so nothing falls through the cracks.' },
  { icon: '💬', title: 'Team Coordination', desc: 'We liaise with your team, contractors, and vendors on your behalf.' },
  { icon: '📊', title: 'Progress Updates', desc: 'Regular updates so you always know where things stand.' },
  { icon: '⚠️', title: 'Risk Management', desc: 'We spot blockers early and keep projects moving forward.' },
  { icon: '🔄', title: 'Process Improvement', desc: 'We identify and streamline inefficiencies in how your projects run.' },
]

export default function ProjectManagementPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Project Management</nav>
          <h1>Project Management</h1>
          <p>Stay organized and on track. We help manage projects, deadlines, and deliverables so you can focus on growth.</p>
          <div className="btn-group" style={{marginTop:'1.5rem'}}><Link href="/contact" className="btn btn-primary">Get Started</Link><Link href="/pricing" className="btn btn-outline">View Pricing</Link></div>
        </div>
      </section>

      <section className="section"><div className="container"><div className="two-col">
        <div>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Less Chaos, More Progress</h2>
          <p>Running a business means juggling a lot. When projects lack structure, things get missed — deadlines slip, budgets stretch, and stress builds up. We bring the clarity and structure you need to move forward with confidence.</p>
          <p>From a single project to ongoing support, we keep everything organized and on track. From $500 per project.</p>
          <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Talk to Us</Link>
        </div>
        <div style={{borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
          <Image src="https://static.wixstatic.com/media/3d7bc412c43340e08591ef32a3aab71e.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/3d7bc412c43340e08591ef32a3aab71e.webp" alt="Project Management" width={480} height={300} style={{width:'100%',height:'auto'}} />
        </div>
      </div></div></section>

      <section className="section section--light"><div className="container"><div className="text-center"><span className="section-label">What&apos;s Included</span><h2 className="section-title">Full Project Support</h2></div><div className="features-grid" style={{marginTop:'3rem'}}>{features.map(f => (<div className="feature" key={f.title}><div className="feature__icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.desc}</p></div></div>))}</div></div></section>

      <section className="cta-banner"><div className="container"><h2>Ready to Get Organized?</h2><p>Let&apos;s bring structure and momentum to your projects.</p><div className="btn-group" style={{justifyContent:'center'}}><Link href="/contact" className="btn btn-white">Get in Touch</Link><Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link></div></div></section>
    </>
  )
}
