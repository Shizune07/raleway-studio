import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'

/* ── Service data ─────────────────────────────────────────────── */
const services = {
  'website-design': {
    title: 'Website Design',
    headline: 'Websites That Work as Hard as You Do',
    description: 'Custom, mobile-responsive websites built to represent your brand and convert visitors into clients. Remote web design for small businesses worldwide.',
    intro: 'We design and build custom websites that represent your business professionally — not templates, not cookie-cutter layouts. Every site is tailored to your brand, your audience, and your goals.',
    intro2: 'Whether you need a simple landing page or a multi-page business site, we handle everything: design, copy structure, images, SEO setup, and launch.',
    cta: 'Get a Quote',
    price: 'From $950',
    img: 'https://static.wixstatic.com/media/11062b_31fcefa60a2e4659a556237badf702e1~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_31fcefa60a2e4659a556237badf702e1~mv2.webp',
    priority: true,
    features: [
      { icon: '📱', title: 'Mobile-Responsive', desc: 'Every site looks great on phones, tablets, and desktops.' },
      { icon: '⚡', title: 'Fast & Optimised', desc: 'Built for speed — good PageSpeed scores out of the box.' },
      { icon: '🔍', title: 'SEO-Ready', desc: 'Proper structure, meta tags, and schema from day one.' },
      { icon: '🎨', title: 'Custom Design', desc: 'No templates — every site is designed to match your brand.' },
      { icon: '✏️', title: 'Unlimited Revisions', desc: 'We iterate until you love it, within the edit window.' },
      { icon: '🌍', title: 'Remote Delivery', desc: 'Fully remote — we work with businesses anywhere in the world.' },
    ],
  },
  'graphic-design': {
    title: 'Graphic Design',
    headline: 'Design That Builds Trust',
    description: 'Logos, brand kits, social media graphics, and marketing visuals that make your small business look polished and professional.',
    intro: 'First impressions happen fast. A strong visual identity tells people your business is professional before they read a single word. We create graphics that reflect who you are and make people stop scrolling.',
    intro2: 'From a single logo to a complete brand kit, we handle it all — clean, intentional, and built to last.',
    cta: 'Start a Project',
    price: 'From $150',
    img: 'https://static.wixstatic.com/media/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_f2adb52bb1804f759798a6d9fcf4adb3~mv2.webp',
    features: [
      { icon: '🎨', title: 'Logo Design', desc: 'A distinctive logo that captures your brand identity.' },
      { icon: '📦', title: 'Brand Kits', desc: 'Full brand packages — colours, typography, and usage guidelines.' },
      { icon: '📱', title: 'Social Graphics', desc: 'On-brand visuals for Instagram, Facebook, LinkedIn, and more.' },
      { icon: '📣', title: 'Marketing Materials', desc: 'Banners, flyers, email headers, and ads designed to convert.' },
      { icon: '✏️', title: 'Unlimited Revisions', desc: 'We refine until every pixel is exactly right.' },
      { icon: '📁', title: 'All File Formats', desc: 'Delivered in PNG, SVG, PDF, and any format you need.' },
    ],
  },
  'seo': {
    title: 'SEO',
    headline: 'Get Found by the Right People',
    description: 'Keyword research, on-page optimisation, and content strategy to help the right people find your business online.',
    intro: 'A beautiful website means nothing if no one can find it. SEO is how you show up in Google when your ideal clients are actively searching for what you offer.',
    intro2: 'We handle the full picture — from technical audits and keyword research to content optimisation and monthly tracking. Starting from $200/month.',
    cta: 'Get a Free Audit',
    price: 'From $200/month',
    img: 'https://static.wixstatic.com/media/11062b_3040ce30c4fd456089061867709bc60f~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_3040ce30c4fd456089061867709bc60f~mv2.webp',
    features: [
      { icon: '🔍', title: 'Keyword Research', desc: 'Find the exact terms your customers are searching for.' },
      { icon: '📄', title: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, headings, and schema markup.' },
      { icon: '🏗️', title: 'Technical SEO', desc: 'Site speed, crawlability, sitemaps, and Core Web Vitals.' },
      { icon: '✍️', title: 'Content Strategy', desc: 'Plan and create content that ranks and converts.' },
      { icon: '📊', title: 'Monthly Reporting', desc: 'Clear reports showing rankings, traffic, and progress.' },
      { icon: '🔗', title: 'Link Strategy', desc: 'Internal linking and authority-building guidance.' },
    ],
  },
  'project-management': {
    title: 'Project Management',
    headline: 'Less Chaos, More Progress',
    description: 'Stay organized and on track. We help manage projects, deadlines, and deliverables so you can focus on growth.',
    intro: 'Running a business means juggling a lot. When projects lack structure, things get missed — deadlines slip, budgets stretch, and stress builds up. We bring the clarity and structure you need.',
    intro2: 'From a single project to ongoing support, we keep everything organized and on track. From $500 per project.',
    cta: 'Talk to Us',
    price: 'From $500/project',
    img: 'https://static.wixstatic.com/media/3d7bc412c43340e08591ef32a3aab71e.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/3d7bc412c43340e08591ef32a3aab71e.webp',
    features: [
      { icon: '📋', title: 'Project Planning', desc: 'Scopes, timelines, and milestones set up from day one.' },
      { icon: '📅', title: 'Deadline Tracking', desc: 'We keep everything on schedule so nothing falls through the cracks.' },
      { icon: '💬', title: 'Team Coordination', desc: 'We liaise with your team, contractors, and vendors on your behalf.' },
      { icon: '📊', title: 'Progress Updates', desc: 'Regular updates so you always know where things stand.' },
      { icon: '⚠️', title: 'Risk Management', desc: 'We spot blockers early and keep projects moving forward.' },
      { icon: '🔄', title: 'Process Improvement', desc: 'We identify and streamline inefficiencies in how your projects run.' },
    ],
  },
  'ai-automation': {
    title: 'AI Automation',
    headline: 'Work Smarter, Not Harder',
    description: 'Smart workflow automation to save you time and reduce manual tasks — so your business runs more efficiently.',
    intro: 'Too many small businesses lose hours every week to tasks that a smart system could handle in seconds. We identify those bottlenecks and build automations that free you up to focus on growing.',
    intro2: 'Whether it\'s connecting your tools, building AI-powered workflows, or setting up automated follow-ups, we handle the setup so you can enjoy the results. From $400 per project.',
    cta: 'Get a Free Consultation',
    price: 'From $400/project',
    img: 'https://static.wixstatic.com/media/11062b_23a136fa16544a95856bb9758f77a155~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_23a136fa16544a95856bb9758f77a155~mv2.webp',
    features: [
      { icon: '🤖', title: 'Workflow Automation', desc: 'Automate repetitive tasks across your tools and platforms.' },
      { icon: '📧', title: 'Email Automation', desc: 'Smart sequences, follow-ups, and triggers set up and ready to go.' },
      { icon: '📊', title: 'Data Processing', desc: 'Automated reporting, data collection, and analysis workflows.' },
      { icon: '🔗', title: 'App Integrations', desc: 'Connect your CRM, calendar, forms, and other tools seamlessly.' },
      { icon: '💬', title: 'Chatbot Setup', desc: 'AI-powered chat flows to handle enquiries 24/7.' },
      { icon: '⏰', title: 'Time Savings', desc: 'We measure the hours saved so you can see the direct ROI.' },
    ],
  },
  'social-media-management': {
    title: 'Social Media Management',
    headline: 'Stay Visible, Stay Consistent',
    description: 'Consistent, on-brand social media content managed for you — so you stay visible without the daily stress.',
    intro: 'Showing up on social media every day is exhausting — especially when you\'re also running a business. We take it off your plate entirely, from content planning to posting and engagement.',
    intro2: 'Every piece of content is designed to match your brand, speak to your audience, and build the kind of trust that turns followers into customers. From $300/month.',
    cta: 'Start Today',
    price: 'From $300/month',
    img: 'https://static.wixstatic.com/media/da934b39b32b473f8e2a39b2fa185f48.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/da934b39b32b473f8e2a39b2fa185f48.webp',
    features: [
      { icon: '📅', title: 'Content Calendar', desc: 'A full monthly plan so you always know what\'s going out and when.' },
      { icon: '✍️', title: 'Caption Writing', desc: 'On-brand copy that sounds like you and speaks to your audience.' },
      { icon: '🎨', title: 'Graphic Creation', desc: 'Custom visuals for every post — no stock templates.' },
      { icon: '📲', title: 'Scheduling & Posting', desc: 'We handle publishing across Instagram, Facebook, LinkedIn, and more.' },
      { icon: '📊', title: 'Monthly Analytics', desc: 'Clear reports on reach, engagement, and what\'s working.' },
      { icon: '💬', title: 'Community Engagement', desc: 'We monitor comments and messages so nothing goes unanswered.' },
    ],
  },
  'virtual-assistance': {
    title: 'Virtual Assistance',
    headline: 'Get Your Time Back',
    description: 'Remote admin and business support to free up your time for what actually moves the needle. Available worldwide, from $25/hour.',
    intro: 'Business owners spend too much time on tasks that don\'t need them personally. Emails, scheduling, data entry, admin work — these are important, but they don\'t need to be done by you.',
    intro2: 'Our virtual assistants are reliable, responsive, and genuinely helpful. You delegate, we handle it. Billed from $25/hour with flexible packages available.',
    cta: 'Get Support Today',
    price: 'From $25/hour',
    img: 'https://static.wixstatic.com/media/11062b_e0e2d79140ef4c559035a696fc808052~mv2.jpg/v1/fill/w_480,h_300,al_c,q_85,enc_auto/11062b_e0e2d79140ef4c559035a696fc808052~mv2.webp',
    features: [
      { icon: '📧', title: 'Email Management', desc: 'Inbox organisation, responses, and follow-ups handled for you.' },
      { icon: '📅', title: 'Scheduling', desc: 'Calendar management, meeting bookings, and reminders.' },
      { icon: '📝', title: 'Admin Tasks', desc: 'Data entry, document prep, research, and general admin.' },
      { icon: '🧾', title: 'Invoice & Records', desc: 'Basic bookkeeping support and records organisation.' },
      { icon: '🔍', title: 'Research', desc: 'Market research, competitor analysis, supplier sourcing.' },
      { icon: '🌍', title: 'Remote & Flexible', desc: 'We work across time zones and scale with your needs.' },
    ],
  },
} as const

type Slug = keyof typeof services

/* ── Static generation ────────────────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const svc = services[slug as Slug]
  if (!svc) return {}
  return {
    title: `${svc.title} | Raleway Studio`,
    description: svc.description,
    alternates: { canonical: `https://www.ralewaystudio.com/services/${slug}` },
    openGraph: { url: `https://www.ralewaystudio.com/services/${slug}` },
  }
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const svc = services[slug as Slug]
  if (!svc) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.description,
    url: `https://www.ralewaystudio.com/services/${slug}`,
    provider: { '@type': 'Organization', name: 'Raleway Studio', url: 'https://www.ralewaystudio.com' },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ralewaystudio.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.ralewaystudio.com/services' },
        { '@type': 'ListItem', position: 3, name: svc.title, item: `https://www.ralewaystudio.com/services/${slug}` },
      ],
    },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> › {svc.title}
          </nav>
          <h1>{svc.title}</h1>
          <p>{svc.description}</p>
          <div className="btn-group" style={{ marginTop: '1.5rem' }}>
            <Link href="/contact" className="btn btn-primary">{svc.cta}</Link>
            <Link href="/pricing" className="btn btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">{svc.headline}</h2>
              <p>{svc.intro}</p>
              <p>{svc.intro2}</p>
              <div style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">{svc.cta}</Link>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.05rem' }}>{svc.price}</span>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <Image
                src={svc.img}
                alt={svc.title}
                width={480} height={300}
                style={{ width: '100%', height: 'auto' }}
                priority={'priority' in svc ? Boolean(svc.priority) : false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What&apos;s Included</span>
            <h2 className="section-title">Everything You Get</h2>
          </div>
          <div className="features-grid" style={{ marginTop: '3rem' }}>
            {svc.features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature__icon">{f.icon}</div>
                <div><h3>{f.title}</h3><p>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Also Available</span>
            <h2 className="section-title">Explore Other Services</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem' }}>
            {Object.entries(services)
              .filter(([s]) => s !== slug)
              .map(([s, data]) => (
                <Link key={s} href={`/services/${s}`} className="btn btn-outline btn-sm">{data.title}</Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Tell us about your project and we&apos;ll get back to you within 1–2 business days.</p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-white">{svc.cta}</Link>
            <Link href="/pricing" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
