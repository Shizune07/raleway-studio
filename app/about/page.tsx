import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Raleway Studio | Remote Web Design & Digital Services',
  description: 'Meet the team behind Raleway Studio — certified web designers and digital specialists helping small businesses grow online, remotely, from anywhere in the world.',
  alternates: { canonical: 'https://www.ralewaystudio.com/about' },
  openGraph: { url: 'https://www.ralewaystudio.com/about' },
}

const team = [
  {
    name: 'Seira Jho',
    role: 'Founder · Lead Designer · SEO Specialist',
    img: '/assets/seira-jho.jpg',
    imgStyle: { objectFit: 'contain' as const, objectPosition: 'center' },
    bio: 'Certified Wix Studio Designer, Wix SEO Wizard, AI Automation Specialist, and Wix Accessibility Specialist. Seira leads the creative direction of every project.',
    badges: ['Wix Studio Certified','SEO Wizard','AI Automation','Accessibility'],
  },
  {
    name: 'Gabriel De Leon',
    role: 'Web Designer · Developer · Velo PRO',
    img: '/assets/gabriel-de-leon.jpg',
    imgStyle: { objectFit: 'cover' as const, objectPosition: 'center top' },
    bio: 'Wix Studio Designer, Developer, and Velo PRO with deep expertise in Adobe Photoshop. Gabriel handles complex builds and custom development.',
    badges: ['Wix Studio','Velo PRO','Adobe Photoshop'],
  },
  {
    name: 'Jet Danila',
    role: 'Website Design & Graphic Specialist',
    img: '/assets/jet-danila.jpg',
    imgStyle: { objectFit: 'cover' as const, objectPosition: 'center' },
    bio: 'Jet is our all-around creative specialist — handling everything from pixel-perfect frontend builds to striking visual assets. He bridges the gap between great design and clean code, ensuring every project looks sharp and runs seamlessly across all devices.',
    badges: ['Frontend Dev','Graphic Design','UI/UX','Branding'],
  },
]

const whyUs = [
  { icon: '🎯', title: 'We focus on you', desc: 'No cookie-cutter designs. We take the time to understand your goals and create something that truly fits your business.' },
  { icon: '🏆', title: 'Certified expertise', desc: 'Our team holds certifications in web design, SEO, accessibility, and development — not just general skills.' },
  { icon: '🌍', title: 'Fully remote', desc: 'We work with businesses worldwide. No location barriers, no timezone excuses.' },
  { icon: '📈', title: 'Design that performs', desc: 'Our sites aren\'t just beautiful — they\'re built with SEO structure and clear calls to action from day one.' },
  { icon: '🤝', title: 'One partner, many services', desc: 'From websites to automation, we cover more so you don\'t have to manage multiple freelancers.' },
  { icon: '🐾', title: 'We give back', desc: '5% of every sale goes to non-government animal shelters — because we care about more than business.' },
]

const certImages = [
  { src: 'https://static.wixstatic.com/media/3837bb_c9ccc56b8930482291a59a44733b20a4~mv2.png', alt: 'Wix Studio Accessibility Specialist certificate' },
  { src: 'https://static.wixstatic.com/media/3837bb_0e2b69006fe742df847efad8bf1d397e~mv2.jpeg', alt: 'LinkedIn Learning Brand Design Foundation certificate' },
  { src: 'https://static.wixstatic.com/media/3837bb_4d0915d0dc04445494f24ed0f1ea9280~mv2.png', alt: 'LinkedIn Learning UX for Web Design certificate' },
  { src: 'https://static.wixstatic.com/media/3837bb_a44ae255c48f43178d4ebd41043e9328~mv2.png', alt: 'LinkedIn Learning SEO Content Writing certificate' },
  { src: 'https://static.wixstatic.com/media/3837bb_8554aa3ab75847439630475ce220f161~mv2.jpeg', alt: 'LinkedIn Learning SEO Foundation certificate' },
  { src: 'https://static.wixstatic.com/media/3837bb_a7d5041ddb7d40f980b9cdb7c6304c26~mv2.png', alt: 'Web Accessibility badge' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Raleway Studio | Remote Web Design & Digital Services',
  url: 'https://www.ralewaystudio.com/about',
  description: 'Meet the team behind Raleway Studio — certified web designers and digital specialists helping small businesses grow online, remotely, from anywhere in the world.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ralewaystudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.ralewaystudio.com/about' },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › About</nav>
          <h1>About Raleway Studio</h1>
          <p>We&apos;re a remote team of certified designers and digital specialists on a mission to help small businesses grow online.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Why We Do What We Do</h2>
              <p>Raleway Studio exists to help businesses show up online with confidence. We design custom, responsive websites that are visually strong, easy to navigate, and built to convert — backed by SEO, branding, and operational support that keeps your business moving forward.</p>
              <p>We believe the work behind your online presence matters just as much as the design itself. That&apos;s why we offer services that go beyond the website — from content and SEO to automation and day-to-day support.</p>
              <Link href="/contact" className="btn btn-primary" style={{marginTop:'1rem',display:'inline-block'}}>Start a Project</Link>
            </div>
            <div style={{background:'var(--primary)',borderRadius:'var(--radius-lg)',padding:'2.5rem',color:'white'}}>
              <span className="section-label" style={{color:'rgba(255,255,255,0.7)'}}>Our Vision</span>
              <h3 style={{color:'white',marginBottom:'1rem',fontSize:'1.5rem'}}>A professional digital presence for every business</h3>
              <p style={{color:'rgba(255,255,255,0.85)'}}>We believe every business deserves a professional digital presence, regardless of size or budget. Our goal is to be the creative partner small and growing businesses turn to — not just for a website, but for the ongoing support that helps them compete, grow, and stand out online.</p>
              <div style={{marginTop:'2rem',paddingTop:'1.5rem',borderTop:'1px solid rgba(255,255,255,0.2)'}}>
                <div style={{fontFamily:'var(--font-raleway)',fontWeight:700,color:'white',marginBottom:'0.25rem'}}>Available worldwide</div>
                <div style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.75)'}}>Fully remote — we work with businesses from any country, any time zone.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">The Team</span>
            <h2 className="section-title">Meet Your Experts</h2>
            <p className="section-subtitle">Certified, experienced, and genuinely invested in your success.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'2rem',marginTop:'3rem'}}>
            {team.map(m => (
              <div key={m.name} style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'2rem',textAlign:'center'}}>
                <div style={{width:110,height:110,borderRadius:'50%',overflow:'hidden',margin:'0 auto 1rem',background:'var(--primary-light)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Image src={m.img} alt={m.name} width={110} height={110} style={m.imgStyle} />
                </div>
                <h3 style={{marginBottom:'0.25rem'}}>{m.name}</h3>
                <div style={{color:'var(--primary)',fontWeight:600,fontSize:'0.85rem',marginBottom:'0.75rem'}}>{m.role}</div>
                <p style={{fontSize:'0.88rem',lineHeight:1.6,marginBottom:'1rem'}}>{m.bio}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem',justifyContent:'center'}}>
                  {m.badges.map(b => (
                    <span key={b} style={{background:'var(--primary-light)',color:'var(--primary-dark)',fontSize:'0.75rem',fontWeight:700,padding:'0.25rem 0.65rem',borderRadius:50}}>{b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">What Sets Raleway Studio Apart</h2>
          </div>
          <div className="features-grid" style={{marginTop:'3rem'}}>
            {whyUs.map(item => (
              <div className="feature" key={item.title}>
                <div className="feature__icon">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Qualified &amp; Accredited</h2>
            <p className="section-subtitle">Our team holds recognised certifications in design, SEO, accessibility, and development.</p>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',justifyContent:'center',marginTop:'2.5rem',alignItems:'center'}}>
            {certImages.map(cert => (
              <Image key={cert.src} src={cert.src} alt={cert.alt} width={160} height={80} style={{objectFit:'contain',height:80,width:'auto'}} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Let&apos;s Work Together</h2>
          <p>Reach out and let&apos;s talk about what your business needs.</p>
          <div className="btn-group" style={{justifyContent:'center'}}>
            <Link href="/contact" className="btn btn-white">Get in Touch</Link>
            <Link href="/pricing" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
