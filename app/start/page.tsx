import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import CalendlyEmbed from '@/components/CalendlyEmbed'

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    'Begin the conversation with Raleway Studio. A 30-minute discovery call to understand your business, your goals, and whether we are the right fit.',
  alternates: { canonical: 'https://www.ralewaystudio.com/start' },
  openGraph: { url: 'https://www.ralewaystudio.com/start' },
}

const startSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Start a Project | Raleway Studio',
  url: 'https://www.ralewaystudio.com/start',
  description: 'Begin the conversation with Raleway Studio.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
}

// What happens in the discovery call — presented as Service Items
const callPoints = [
  {
    num: '01',
    title: 'You describe the business.',
    desc: 'What it does, who it serves, what the gap feels like from the inside — and what the current digital presence communicates versus what it should.',
  },
  {
    num: '02',
    title: 'We ask the hard questions.',
    desc: 'We challenge assumptions, look for the real problem behind the described one, and give you an honest read on what we think needs to change and why.',
  },
  {
    num: '03',
    title: 'We both decide.',
    desc: "At the end of the call, we tell you directly whether we believe we are the right studio for this project — and you decide whether you agree.",
  },
]

// What happens after the call — presented as Service Items (Section 04)
const nextSteps = [
  {
    num: '01',
    title: 'Book a conversation.',
    desc: "Choose a time that works for you. You're not committing to a project — only to a conversation.",
  },
  {
    num: '02',
    title: 'We explore the business and diagnose what needs to change.',
    desc: 'We use the call to understand your position, where the gap is, and whether our method is suited to your situation.',
  },
  {
    num: '03',
    title: 'If the fit is right, you receive a recommended scope.',
    desc: 'Within two business days you will receive a written outline of how we would approach the project. No commitment required to receive it.',
  },
]

export default function StartPage() {
  return (
    <>
      <JsonLd data={startSchema} />

      {/* ── Section 01 — Hero (Component 08) ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body
          Layout: 100svh, lower-anchored content
          Entrance: Pattern 07 (mount animation)
          Rule 04: No hero-actions — the booking widget IS the action (Section 03).
          Rule 11 exemption: Start page is the conversion destination, not a routing
          point. No Threshold required — this page IS the threshold moment.
          Headline: 9 words (spec: 8–12) ✓
          Body: 24 words (spec: 18–25) ✓ */}
      <section
        id="main-content"
        className="hero texture-dots glow-field mark-bleed"
        aria-label="Start a project"
      >
        <div className="hero-inner">
          <div className="hero-content hero-content--centered">
            <h1 className="hero-headline hero-headline--bold hero-headline--display-xl hero-entrance hero-entrance--headline">
              The first{' '}
              <span className="chip-highlight chip-highlight--tint">
                conversation
              </span>{' '}
              is how we understand the fit.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              We begin every project with a conversation. Thirty minutes to
              understand your business and determine whether the fit is right
              for both of us.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — What to Expect (light field) ──
          Component 05 — Section Introduction
          Component 04 — Service Items (three points of what happens on the call)
          Dark section deliberately not used — two consecutive sections before booking
          would break the flow. Both kept light. */}
      <section className="section section--divided" aria-label="What to expect">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">The Discovery Call</span>
            <h2 className="section-headline">
              A structured conversation, not a sales pitch.
            </h2>
            <p className="section-body">
              We use the call to understand your business, your position in the market,
              and where the gap between quality and perception is most pronounced. You use
              it to decide whether our approach makes sense for the problem you have.
            </p>
          </div>
          <ul className="method-list animate-entrance" role="list" data-delay="150">
            {callPoints.map((p) => (
              <li key={p.num} className="method-list__item">
                <div className="service-item">
                  <span className="service-counter" aria-hidden="true">{p.num}</span>
                  <span className="service-name">{p.title}</span>
                  <p className="service-description">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 03 — Book the Call (light field) ──
          Calendly embed — client component (see CalendlyEmbed.tsx)
          Brand colour applied via Calendly's primary_color param in the component.
          Prefer to write first: navigate link to /contact as a secondary option.
          Note: CalendlyEmbed uses inline style (height: 700) — retained from
          the component spec. Not a design system token violation; it is a
          third-party widget dimension requirement. */}
      <section className="section section--divided" aria-label="Book a discovery call">
        <div className="container">
          <div className="start-booking animate-entrance">
            <div className="start-booking__intro">
              <span className="section-eyebrow">Book a Call</span>
              <h2 className="section-headline">
                Choose a time that works for you.
              </h2>
              <p className="section-body">
                Thirty minutes. Free. No commitment required. If we are a good fit,
                we&rsquo;ll outline what a project together would look like and go from there.
                You&rsquo;ll receive a calendar confirmation immediately after booking.
              </p>
              {/* NOTE: /contact page does not exist. Secondary option uses mailto directly.
                  If a contact form is added in future, update href to the new route. */}
              <p className="start-booking__secondary">
                Prefer to write first?{' '}
                <a href="mailto:info@ralewaystudio.com" className="start-booking__link">
                  Send us a message
                </a>{' '}
                and we&rsquo;ll respond within one business day.
              </p>
            </div>
            <div className="start-booking__calendly">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 04 — What Happens Next (light field) ──
          Reduces post-booking uncertainty without adding sales pressure.
          Three steps: book → explore → scope.
          Reuses method-list / service-item pattern — no new components. */}
      <section className="section section--divided" aria-label="What happens next">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">What Happens Next</span>
            <h2 className="section-headline">
              Here is what the process looks like from here.
            </h2>
          </div>
          <ul className="method-list animate-entrance" role="list" data-delay="150">
            {nextSteps.map((p) => (
              <li key={p.num} className="method-list__item">
                <div className="service-item">
                  <span className="service-counter" aria-hidden="true">{p.num}</span>
                  <span className="service-name">{p.title}</span>
                  <p className="service-description">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
