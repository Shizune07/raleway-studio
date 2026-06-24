import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Pricing Plans | Raleway Studio — Website Design & Digital Services',
  description: 'Transparent pricing for custom website design, SEO, graphic design, and digital services. Choose from Essentials, Business Builder, or Ultimate Success plans.',
  alternates: { canonical: 'https://www.ralewaystudio.com/pricing' },
  openGraph: { url: 'https://www.ralewaystudio.com/pricing' },
}

const plans = [
  {
    name: 'Essentials',
    tagline: 'Everything needed to launch.',
    price: '950',
    note: 'One-time payment',
    featured: false,
    cta: 'Get Started',
    href: '/contact?plan=essentials',
    features: [
      '1–3 pages',
      'Customized website design',
      'Mobile responsive',
      '5 business days of unlimited edits',
      'Delivered within 10 business days',
      'Free domain for 1 year (with annual hosting plan)',
      'Complete basic SEO package',
      '10 social media graphics included',
    ],
  },
  {
    name: 'Business Builder',
    tagline: 'Best for growing businesses.',
    price: '1,250',
    note: 'One-time payment',
    featured: true,
    popular: '⭐ Most Popular',
    cta: 'Get Started',
    href: '/contact?plan=business-builder',
    features: [
      'Up to 8 pages',
      'Customized website design',
      'Mobile responsive',
      '2 weeks of unlimited edits',
      'Delivered within 10 business days',
      'Free domain for 1 year (with annual hosting plan)',
      'Complete basic SEO package',
      '10 social media graphics included',
    ],
  },
  {
    name: 'Ultimate Success',
    tagline: 'All-in-one for established businesses.',
    price: '1,850',
    note: 'One-time payment',
    featured: false,
    cta: 'Get Started',
    href: '/contact?plan=ultimate-success',
    features: [
      'Up to 12 pages',
      'Customized or interactive website',
      'Mobile responsive',
      '1 month of unlimited edits',
      'Delivered within 10 business days',
      'Free domain for 1 year (with annual hosting plan)',
      'Complete basic SEO package',
      '20 social media graphics included',
      '3 weeks FREE site maintenance after transfer',
    ],
  },
]

const services = [
  { name: 'Website Design', desc: 'Custom responsive websites built to represent your brand and convert visitors.', price: 'From $950' },
  { name: 'Graphic Design', desc: 'Logos, brand kits, social media graphics, banners, and marketing visuals.', price: 'From $150' },
  { name: 'SEO', desc: 'Keyword research, on-page optimization, and content strategy for organic growth.', price: 'From $200 / month' },
  { name: 'Social Media Management', desc: 'Content planning, creation, and posting across your social platforms.', price: 'From $300 / month' },
  { name: 'AI Automation', desc: 'Smart workflows and automation setups to save you time and reduce manual tasks.', price: 'From $400 / project' },
  { name: 'Project Management', desc: 'Organization, scheduling, and delivery management for business projects.', price: 'From $500 / project' },
  { name: 'Virtual Assistance', desc: 'Remote admin and business support — scheduling, emails, tasks, and more.', price: 'From $25 / hour' },
]

const included = [
  { icon: '📱', title: 'Mobile-Responsive Design', desc: 'Every website looks and works great on phones, tablets, and desktops — always.' },
  { icon: '🔍', title: 'Basic SEO Setup', desc: 'Meta tags, page titles, headings, and site structure optimized for search engines.' },
  { icon: '🚀', title: 'Fast Delivery', desc: 'All website packages are delivered within 10 business days of project kickoff.' },
  { icon: '✏️', title: 'Unlimited Revisions', desc: 'Edit rounds included in every plan — so you get exactly what you envisioned.' },
  { icon: '🌍', title: 'Remote & Worldwide', desc: 'We work with businesses globally. No in-person meetings required.' },
  { icon: '💬', title: 'Dedicated Communication', desc: 'A direct line to your designer throughout the project — no middlemen.' },
]

const faqs = [
  { q: 'Do you offer payment plans?', a: 'Yes — we\'re happy to discuss split payments for larger projects. Typically 50% upfront and 50% on delivery. Reach out and we\'ll work something out that fits your budget.' },
  { q: 'What\'s the difference between the plans?', a: 'The main differences are the number of pages, the revision period, and what\'s included. Essentials is perfect for getting online quickly; Business Builder suits growing businesses; Ultimate Success is for businesses that want a larger, fully supported site.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. If you start with Essentials and your needs grow, you can add pages or services at any time. We\'ll quote the additional work separately.' },
  { q: 'What platform do you build on?', a: 'We build on the platform that best fits your needs — including Wix Studio, Next.js, and other modern web platforms. We\'ll discuss what\'s right for you during our initial call.' },
  { q: 'Are the individual service prices per month or one-time?', a: 'It depends on the service. SEO and Social Media Management are ongoing monthly services. Graphic Design, AI Automation, and Project Management are typically one-time or per-project. Virtual Assistance is billed hourly.' },
  { q: 'Do I need to provide content (text and images)?', a: 'Ideally yes — you know your business best. But if you need help with copywriting or sourcing images, we can assist as an add-on service.' },
  { q: 'How do I get started?', a: 'Click "Get Started" on any plan, or fill out the contact form. We\'ll reply within 1–2 business days to set up a discovery call.' },
]

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pricing Plans | Raleway Studio — Website Design & Digital Services',
  url: 'https://www.ralewaystudio.com/pricing',
  description: 'Transparent pricing for website design, SEO, graphic design, and digital services. No hidden fees — choose the plan that fits your business.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ralewaystudio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.ralewaystudio.com/pricing' },
    ],
  },
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Pricing</nav>
          <h1>Simple, Transparent Pricing</h1>
          <p>No hidden fees. No surprises. Choose the plan that fits your business — or mix and match individual services.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Website Packages</span>
            <h2 className="section-title">Choose Your Plan</h2>
            <p style={{color:'var(--gray)',maxWidth:560,margin:'0 auto'}}>All packages include a custom-designed, mobile-responsive website built to represent your brand and convert visitors.</p>
          </div>
          <div className="pricing-grid">
            {plans.map(plan => (
              <div key={plan.name} className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
                {plan.featured && plan.popular && <div className="popular-badge">{plan.popular}</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-tagline">{plan.tagline}</div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                </div>
                <div className="plan-note">{plan.note}</div>
                <hr className="plan-divider" />
                <ul className="plan-features">
                  {plan.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link href={plan.href} className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>{plan.cta}</Link>
              </div>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:'2rem',fontSize:'0.85rem',color:'var(--gray)'}}>Not sure which plan fits? <Link href="/contact" style={{color:'var(--primary)',fontWeight:600}}>Send us a message</Link> and we&apos;ll recommend the right one for you.</p>
        </div>
      </section>

      {/* A la carte */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">À La Carte</span>
            <h2 className="section-title">Individual Service Pricing</h2>
            <p style={{color:'var(--gray)',maxWidth:540,margin:'0 auto'}}>Already have a website? Pick only the services you need — no package required.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.25rem',marginTop:'2.5rem'}}>
            {services.map(s => (
              <div key={s.name} style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'1.5rem'}}>
                <h4 style={{fontSize:'0.95rem',fontWeight:700,color:'var(--dark)',marginBottom:'0.3rem'}}>{s.name}</h4>
                <p style={{fontSize:'0.82rem',color:'var(--gray)',marginBottom:'0.75rem',lineHeight:1.5}}>{s.desc}</p>
                <div style={{fontSize:'1.05rem',fontWeight:800,color:'var(--primary)'}}>{s.price}</div>
              </div>
            ))}
            <div style={{background:'var(--light)',border:'1px dashed var(--border)',borderRadius:'var(--radius-lg)',padding:'1.5rem'}}>
              <h4 style={{fontSize:'0.95rem',fontWeight:700,color:'var(--dark)',marginBottom:'0.3rem'}}>Custom Quote</h4>
              <p style={{fontSize:'0.82rem',color:'var(--gray)',marginBottom:'0.75rem',lineHeight:1.5}}>Need something specific or a combination of services? Let&apos;s build a custom scope and price together.</p>
              <Link href="/contact" style={{fontSize:'1.05rem',fontWeight:800,color:'var(--primary)'}}>Request a quote →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Always included */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Every Project</span>
            <h2 className="section-title">What&apos;s Always Included</h2>
          </div>
          <div className="features-grid" style={{marginTop:'2.5rem'}}>
            {included.map(item => (
              <div className="feature" key={item.title}>
                <div className="feature__icon">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container" style={{maxWidth:760}}>
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pricing Questions</h2>
          </div>
          <div className="faq-list" style={{marginTop:'2rem'}}>
            {faqs.map(faq => (
              <details key={faq.q} style={{borderBottom:'1px solid var(--border)'}}>
                <summary style={{padding:'1.15rem 0',fontSize:'0.97rem',fontWeight:600,color:'var(--dark)',cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  {faq.q}
                  <span style={{color:'var(--primary)',flexShrink:0,marginLeft:'1rem',fontSize:'1.2rem'}}>+</span>
                </summary>
                <p style={{fontSize:'0.9rem',color:'var(--gray)',lineHeight:1.7,padding:'0 0 1.25rem'}}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Tell us about your project and we&apos;ll recommend the right plan for your business.</p>
          <div className="btn-group" style={{justifyContent:'center'}}>
            <Link href="/contact" className="btn btn-white">Contact Us</Link>
            <Link href="/services" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)',color:'white'}}>View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
