import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Raleway Studio portfolio — each project began with a diagnosis, not a brief. Evidence of what happens when design follows strategy.',
  alternates: { canonical: 'https://www.ralewaystudio.com/work' },
  openGraph: { url: 'https://www.ralewaystudio.com/work' },
}

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Work | Raleway Studio',
  url: 'https://www.ralewaystudio.com/work',
  description: 'Raleway Studio portfolio — evidence of what happens when design follows strategy.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
}

// Section 03 — Selected Work
// Described using only verifiable facts: business, communication challenge, one strategic decision.
// No invented outcomes, metrics, or results.
const selectedWork = [
  {
    num: '01',
    name: 'Oneness Clinic — Integrative Medicine',
    challenge:
      'A multi-modality health clinic offering IV therapy, bioidentical hormones, psychiatry, coaching, and membership programmes. The communication challenge: presenting integrated care as a coherent philosophy without reducing it to a service menu where individual treatments compete for attention.',
    decision:
      'The site leads with a single patient goal rather than individual offerings. Each service is positioned as part of a larger approach to health — not a standalone product. The membership architecture communicates ongoing care rather than one-time visits.',
  },
  {
    num: '02',
    name: 'Amos Home Team — Residential Real Estate',
    challenge:
      'A personal real estate practice serving rural, lake, and small-town communities across the Kansas City Metro. The communication challenge: establishing genuine local expertise in a market dominated by larger teams with broader reach and higher volume.',
    decision:
      'The site is built around MLS access as the primary conversion path. A visitor’s first meaningful action is seeing live listings — not submitting a contact form. Featured communities are organised by lifestyle type, not price point.',
  },
  {
    num: '03',
    name: 'Manwaring Consulting — Professional Services',
    challenge:
      'A women-owned boutique firm offering four distinct service lines — notary and remote online notarisation, home watch, administrative support, and business compliance — to three different client types. The communication challenge: presenting that range without creating confusion about scope or diluting the firm’s identity.',
    decision:
      'The site leads with positioning before scope. It establishes discretion, personal attention, and an explicit departure from high-volume franchise models before the service catalogue appears. Trust is the prerequisite for relevance.',
  },
  {
    num: '04',
    name: 'Inner Life School — Online Education',
    challenge:
      'A founder-led online school built around a specific pattern-recognition methodology for women in personal development. The communication challenge: explaining a methodology to an audience who may not yet have language for what they need.',
    decision:
      'The site’s primary entry point is a quiz — not a lead-capture mechanism, but a micro-experience of the methodology itself. The founder’s narrative and the methodology appear before the course catalogue.',
  },
]

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workSchema} />

      {/* ── Section 01 — Hero (Component 08) ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body
          Layout: 100svh, lower-anchored content
          Entrance: Pattern 07 (mount animation)
          Rule 04: No hero-actions — CTA lives at the Threshold.
          Headline: 11 words (spec: 8–12) ✓
          Body: 23 words (spec: 18–25) ✓ */}
      <section
        id="main-content"
        className="hero"
        aria-label="Work"
      >
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-headline hero-entrance hero-entrance--headline">
              The portfolio is evidence of what happens when design follows diagnosis.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              Each project here began with a diagnosis. Not a brief. The visual work
              is the expression of the strategy that preceded it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — Featured Study: Raleway Studio (light field) ──
          Component 05 — Section Introduction
          .work-featured: scoped class for multi-paragraph .section-body spacing (32px).
          Defined in globals.css alongside .method-diagnostic and .method-phase-intro.
          No link to /about — this section stands independently as a self-applied study.
          Describes strategic transformation (information architecture, page responsibilities)
          rather than visual transformation. */}
      <section className="section section--divided" aria-label="Featured study: Raleway Studio">
        <div className="container">
          <div className="section-intro work-featured animate-entrance">
            <span className="section-eyebrow">Featured Study</span>
            <h2 className="section-headline">
              Before writing a single client brief, we applied the method to ourselves.
            </h2>
            <p className="section-body">
              The previous Raleway Studio website described our services clearly. What it
              didn&rsquo;t communicate was why we work the way we do &mdash;
              the thinking that governs every engagement before design begins. A visitor could
              understand that we designed websites. They couldn&rsquo;t understand that our real
              focus is helping businesses become accurately understood before any design decision
              is made.
            </p>
            <p className="section-body">
              The discovery process revealed that we had made the same mistake we help clients
              solve. Our site communicated too many things at once &mdash; services, process,
              philosophy, portfolio &mdash; without one central idea holding everything together.
              Raleway Studio is not defined by websites. It is defined by diagnosis. The website is one expression of that way of working.
            </p>
            <p className="section-body">
              Once that was clear, the architecture became obvious. Home identifies the problem.
              About explains where the conviction came from. Method shows how it becomes a
              repeatable process. Work provides evidence. Start begins the conversation. That
              structure did not emerge from design preference. It came directly from the discovery
              that visitors needed to understand our thinking before they could assess our work.
              The previous version explained our capabilities. The current one explains our judgment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 03 — Selected Work (dark field) ──
          Component: section--dark / method-list / service-item
          Four client projects described using only verifiable facts.
          No invented outcomes, metrics, or results.
          service-description + service-description spacing: 16px (existing globals.css rule). */}
      <section className="section section--dark" aria-label="Selected client work">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">Selected Work</span>
            <h2 className="section-headline">Four projects. Four industries. One process.</h2>
            <p className="section-body">
              Each project below is described using only what we can verify &mdash; the business,
              the communication challenge, and one decision that shaped how it was solved.
            </p>
          </div>
          <ul className="method-list animate-entrance" role="list" data-delay="150">
            {selectedWork.map((project) => (
              <li key={project.num} className="method-list__item">
                <div className="service-item">
                  <span className="service-counter" aria-hidden="true">{project.num}</span>
                  <span className="service-name">{project.name}</span>
                  <p className="service-description">{project.challenge}</p>
                  <p className="service-description">{project.decision}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 04 — Threshold (Component 09) ──
          Rule 11: One per page. Final section before Footer.
          Rule 07: Orange CTA — the only orange at this scroll depth.
          Preserved exactly from previous implementation. */}
      <section className="threshold" aria-label="Start a project">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              The next project in this portfolio could be yours.
            </h2>
            <p className="threshold-body animate-entrance">
              We take on a limited number of projects at a time. Each one begins with
              a conversation &mdash; not a quote, not a form. A real exchange about whether
              the fit is right for both of us.
            </p>
            <Link href="/start" className="btn-primary animate-entrance">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
