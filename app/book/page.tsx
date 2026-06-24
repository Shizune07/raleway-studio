import type { Metadata } from 'next'
import Link from 'next/link'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Raleway Studio',
  description: 'Schedule a free discovery call with Raleway Studio. We\'ll talk through your project, timeline, and goals — no commitment required.',
  alternates: { canonical: 'https://www.ralewaystudio.com/book' },
  openGraph: { url: 'https://www.ralewaystudio.com/book' },
}

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Book a Call</nav>
          <h1>Book a Free Discovery Call</h1>
          <p>Pick a time that works for you — we&apos;ll talk through your project, goals, and next steps. No commitment required.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            {/* What to expect */}
            <div>
              <span className="section-label">What to Expect</span>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>30-Minute Intro Call</h2>
              <p>A quick, relaxed conversation to understand what you need — and whether we&apos;re the right fit.</p>

              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '🎯', text: 'We listen to your goals and current challenges' },
                  { icon: '🛠️', text: 'We explain which services fit your situation' },
                  { icon: '💬', text: 'You ask anything — no pressure, no sales pitch' },
                  { icon: '📋', text: 'We outline a plan and next steps together' },
                ].map(item => (
                  <li key={item.text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--dark)' }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--light)', borderRadius: 'var(--radius)', borderLeft: '3px solid var(--primary)' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--dark)', fontWeight: 600 }}>Prefer to email first?</p>
                <p style={{ margin: '0.4rem 0 0', fontSize: 0.88 + 'rem' }}>
                  <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: 600 }}>Send us a message</Link> and we&apos;ll get back to you within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Calendly embed */}
            <div>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
