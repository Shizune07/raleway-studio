import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Work With Us | Raleway Studio | Remote Web & Digital Services',
  description: 'Ready to build your website or grow your online presence? Get in touch with Raleway Studio — we work remotely with businesses worldwide. Let\'s talk.',
  alternates: { canonical: 'https://www.ralewaystudio.com/contact' },
  openGraph: { url: 'https://www.ralewaystudio.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Contact</nav>
          <h1>Let&apos;s Work Together</h1>
          <p>Tell us about your project and we&apos;ll get back to you within 1–2 business days.</p>
        </div>
      </section>

      {/* Book a call nudge */}
      <section className="section section--light" style={{ padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '1.75rem 2rem', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
            <div>
              <p style={{ margin: 0, fontFamily: 'var(--font-raleway)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--dark)' }}>
                📅 Prefer to talk it through first?
              </p>
              <p style={{ margin: '0.3rem 0 0', fontSize: '0.92rem' }}>
                Book a free 30-minute discovery call — no commitment, just a conversation.
              </p>
            </div>
            <Link href="/book" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
