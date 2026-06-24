import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Raleway Studio | Custom Websites & Digital Services to Grow Your Business',
  description: 'Custom websites, SEO, graphic design, and more — Raleway Studio helps small businesses grow online. Remote-friendly, available worldwide.',
  alternates: { canonical: 'https://www.ralewaystudio.com/' },
  openGraph: { url: 'https://www.ralewaystudio.com/' },
}

const services = [
  { title: 'Website Design', img: 'https://static.wixstatic.com/media/11062b_31fcefa60a2e4659a556237badf702e1~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_31fcefa60a2e4659a556237badf702e1~mv2.webp', href: '/services/website-design', desc: 'Modern, responsive websites built to represent your brand clearly and convert visitors into clients.' },
  { title: 'Graphic Design', img: 'https://static.wixstatic.com/media/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.webp', href: '/services/graphic-design', desc: 'Logos, social media graphics, and brand visuals that make your business look polished and professional.' },
  { title: 'SEO', img: 'https://static.wixstatic.com/media/11062b_3040ce30c4fd456089061867709bc60f~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_3040ce30c4fd456089061867709bc60f~mv2.webp', href: '/services/seo', desc: 'Keyword research, on-page optimization, and content strategy to help the right people find you online.' },
  { title: 'Project Management', img: 'https://static.wixstatic.com/media/3d7bc412c43340e08591ef32a3aab71e.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/3d7bc412c43340e08591ef32a3aab71e.webp', href: '/services/project-management', desc: 'Stay organized and on track. We help manage projects, deadlines, and deliverables so you can focus on growth.' },
  { title: 'AI Automation', img: 'https://static.wixstatic.com/media/11062b_23a136fa16544a95856bb9758f77a155~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_23a136fa16544a95856bb9758f77a155~mv2.webp', href: '/services/ai-automation', desc: 'Save time with smart workflow automation — so your business runs more efficiently with less manual effort.' },
  { title: 'Social Media Management', img: 'https://static.wixstatic.com/media/da934b39b32b473f8e2a39b2fa185f48.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/da934b39b32b473f8e2a39b2fa185f48.webp', href: '/services/social-media-management', desc: 'Consistent, on-brand content managed for you — so you stay visible without the daily stress.' },
  { title: 'Virtual Assistance', img: 'https://static.wixstatic.com/media/11062b_e0e2d79140ef4c559035a696fc808052~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_e0e2d79140ef4c559035a696fc808052~mv2.webp', href: '/services/virtual-assistance', desc: 'Remote admin and business support to free up your time for what actually moves the needle.' },
]

const industries = ['Media & Entertainment','Fashion & Beauty','Construction & Architecture','Healthcare','Hospitality & Travel','Restaurants & Food','Technology & Startups','Coaching & Professional Services','Non-Profit & Education','E-Commerce','Real Estate','Home & Commercial Services']

const testimonials = [
  { stars: '★★★★★', text: '"Raleway Studio completely transformed our online presence. The website is beautiful, fast, and we\'re already getting more inquiries."', name: 'Alex M.', role: 'Small Business Owner', initial: 'A' },
  { stars: '★★★★★', text: '"Professional, communicative, and the results exceeded expectations. The SEO improvements alone made it worth every penny."', name: 'Jamie L.', role: 'E-Commerce Founder', initial: 'J' },
  { stars: '★★★★★', text: '"Working with Raleway Studio remotely was seamless. They understood our brand immediately and delivered exactly what we needed."', name: 'Maria S.', role: 'Creative Agency', initial: 'M' },
]

const faqs = [
  { q: 'What services does Raleway Studio offer?', a: 'Raleway Studio offers website design, graphic design, SEO, project management, AI automation, social media management, and virtual assistance.' },
  { q: 'Do you work with clients worldwide?', a: 'Yes. Raleway Studio operates fully remotely and works with businesses anywhere in the world. Location is never a barrier.' },
  { q: 'Can I hire you for just one service?', a: 'Yes. You can hire Raleway Studio for a single service — whatever your business needs most right now.' },
  { q: 'Do you redesign existing websites?', a: 'Yes. If your current website feels outdated or no longer reflects your business, we can redesign it.' },
  { q: 'How long does a website project usually take?', a: 'Timelines vary based on scope. We always discuss and agree on a timeline before work begins so there are no surprises.' },
  { q: 'How do I get started?', a: 'Simply reach out through our Contact page and share what you need. We\'ll guide you through the next steps.' },
]

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Raleway Studio | Custom Websites & Digital Services',
  url: 'https://www.ralewaystudio.com/',
  description: 'Custom websites, SEO, graphic design, and more — Raleway Studio helps small businesses grow online. Remote-friendly, available worldwide.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
  about: { '@type': 'Organization', name: 'Raleway Studio' },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div>
              <span className="hero__eyebrow">Remote · Worldwide · Available Now</span>
              <h1>Remote web design and digital services for <span style={{color:'var(--primary)'}}>small businesses</span></h1>
              <p>We design websites that look professional, load fast, and help your business grow — backed by SEO, graphic design, and creative support. Work with us from anywhere.</p>
              <div className="btn-group">
                <Link href="/contact" className="btn btn-primary">Let&apos;s Build Your Website</Link>
                <Link href="/book" className="btn btn-outline">Book a Free Call</Link>
              </div>
              <p style={{marginTop:'1.5rem',fontSize:'0.85rem',color:'var(--gray)'}}>✓ No location barriers &nbsp;·&nbsp; ✓ Flexible services &nbsp;·&nbsp; ✓ Real results</p>
            </div>
            <div className="hero__image" style={{position:'relative',height:420}}>
              <div style={{position:'absolute',top:0,right:0,width:190,height:190,borderRadius:'50%',overflow:'hidden',border:'4px solid var(--primary)',boxShadow:'0 8px 28px rgba(228,88,0,0.2)'}}>
                <Image src="https://static.wixstatic.com/media/11062b_cb911216de184296b79f70f64177f00a~mv2.jpg/v1/fill/w_380,h_380,al_c,q_85,enc_auto/11062b_cb911216de184296b79f70f64177f00a~mv2.webp" alt="Small business owner" fill style={{objectFit:'cover'}} priority />
              </div>
              <div style={{position:'absolute',top:110,left:'50%',transform:'translateX(-50%)',width:205,height:205,borderRadius:'50%',overflow:'hidden',border:'4px solid var(--primary)',boxShadow:'0 8px 28px rgba(228,88,0,0.2)'}}>
                <Image src="https://static.wixstatic.com/media/11062b_0489cf0b1f1a4824a5de5e27ec0b1f0b~mv2.jpg/v1/fill/w_410,h_410,al_c,q_85,enc_auto/11062b_0489cf0b1f1a4824a5de5e27ec0b1f0b~mv2.webp" alt="Creative business owner" fill style={{objectFit:'cover'}} />
              </div>
              <div style={{position:'absolute',bottom:20,left:0,width:172,height:172,borderRadius:'50%',overflow:'hidden',border:'4px solid var(--primary)',boxShadow:'0 8px 28px rgba(228,88,0,0.2)'}}>
                <Image src="https://static.wixstatic.com/media/11062b_ab2cd87fb9114f6c897ce66d79641f8b~mv2.jpg/v1/fill/w_344,h_344,al_c,q_85,enc_auto/11062b_ab2cd87fb9114f6c897ce66d79641f8b~mv2.webp" alt="Product business owner" fill style={{objectFit:'cover'}} />
              </div>
              <div style={{position:'absolute',bottom:0,right:15,width:168,height:168,borderRadius:'50%',overflow:'hidden',border:'4px solid var(--primary)',boxShadow:'0 8px 28px rgba(228,88,0,0.2)'}}>
                <Image src="https://static.wixstatic.com/media/b69a347cdbfd4c1eb90e1336b57c5bc0.jpg/v1/fill/w_336,h_336,al_c,q_85,enc_auto/b69a347cdbfd4c1eb90e1336b57c5bc0.webp" alt="Restaurant business owner" fill style={{objectFit:'cover'}} />
              </div>
              <div style={{position:'absolute',top:200,right:-5,background:'white',borderRadius:50,padding:'0.45rem 0.9rem',boxShadow:'var(--shadow)',display:'flex',alignItems:'center',gap:'0.4rem',fontFamily:'var(--font-raleway)',fontWeight:700,fontSize:'0.82rem',color:'var(--dark)',whiteSpace:'nowrap'}}>
                <span style={{color:'var(--primary)'}}>✓</span> Successfully helped
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">More Than Just Website Design</h2>
            <p className="section-subtitle">Your website is often the first impression people have of your business. We make sure it counts — and we support everything around it.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.href}>
                <Image src={s.img} alt={s.title} width={480} height={300} className="service-card__img" />
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className="btn btn-outline btn-sm" style={{marginTop:'auto',alignSelf:'flex-start'}}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section section--light">
        <div className="container">
          <div className="two-col two-col--wide">
            <div>
              <span className="section-label">Why Raleway Studio</span>
              <h2 className="section-title">A Creative Partner, Not Just a Vendor</h2>
              <p>We take the time to understand your goals, your style, and the way you want your business seen online. The result is a website — and a working relationship — that actually fits.</p>
              <div className="btn-group" style={{marginTop:'2rem'}}>
                <Link href="/about" className="btn btn-primary">Meet the Team</Link>
                <Link href="/pricing" className="btn btn-outline">See Pricing</Link>
              </div>
            </div>
            <div className="features-grid" style={{marginTop:0}}>
              {[
                { icon: '✨', title: 'Custom, responsive design', desc: 'No cookie-cutter templates. Every site is built to fit your brand.' },
                { icon: '🔍', title: 'SEO-aware from the start', desc: 'Structure, content, and meta setup built for search engines.' },
                { icon: '🌍', title: 'Fully remote — work with us anywhere', desc: 'We serve businesses worldwide with no location restrictions.' },
                { icon: '🤝', title: 'Support beyond the website', desc: 'From branding to automation, we\'re one partner for multiple needs.' },
              ].map(f => (
                <div className="feature" key={f.title}>
                  <div className="feature__icon">{f.icon}</div>
                  <div><h3>{f.title}</h3><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">Built for Every Industry</h2>
            <p className="section-subtitle">Whether you&apos;re a startup, a creative, or an established business, we design for the way your industry works.</p>
          </div>
          <div className="industries-grid">
            {industries.map(i => <div className="industry-tag" key={i}>{i}</div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Client Reviews</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">{t.stars}</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:'2.5rem'}}>
            <Link href="/testimonials" className="btn btn-outline">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => (
              <details className="faq-item" key={f.q}>
                <summary className="faq-question" style={{listStyle:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.25rem 0',fontFamily:'var(--font-raleway)',fontWeight:600,fontSize:'1rem',color:'var(--dark)',gap:'1rem'}}>
                  {f.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <div style={{paddingBottom:'1.25rem',fontSize:'0.95rem',color:'var(--gray)'}}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Build Something Great?</h2>
          <p>Tell us about your project and let&apos;s figure out the best way to move forward.</p>
          <div className="btn-group" style={{justifyContent:'center'}}>
            <Link href="/contact" className="btn btn-white">Start a Project</Link>
            <Link href="/book" className="btn btn-outline" style={{color:'white',borderColor:'rgba(255,255,255,0.55)'}}>Book a Free Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
