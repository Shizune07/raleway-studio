import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'The Method',
  description:
    'Four phases, in a defined order. Diagnosis before design, strategy before surface — how every Raleway engagement is structured to reduce uncertainty before each major decision.',
  alternates: { canonical: 'https://www.ralewaystudio.com/method' },
  openGraph: { url: 'https://www.ralewaystudio.com/method' },
}

const methodSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Raleway Method',
  url: 'https://www.ralewaystudio.com/method',
  description:
    'Four phases, in a defined order. Diagnosis before design, strategy before surface — how every Raleway engagement is structured to reduce uncertainty before each major decision.',
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: 'https://www.ralewaystudio.com' },
}

// Section 03 — Four governing principles
// Authoritative home for principles; Home page references these briefly.
const principles = [
  {
    num: '01',
    title: 'We diagnose before we design.',
    desc: 'Every project begins with a structured discovery process. We need to understand what the problem actually is — not assume it is what it first appears to be.',
  },
  {
    num: '02',
    title: 'We challenge before we agree.',
    desc: "When we believe a direction is wrong, we say so. Agreement that doesn't serve the business isn't professionalism — it's self-protection.",
  },
  {
    num: '03',
    title: 'Strategy before surface.',
    desc: 'A website is not the solution. It is the expression of a solution. The positioning, the narrative, the content architecture — these come before anything visual.',
  },
  {
    num: '04',
    title: 'We measure by legibility, not aesthetics.',
    desc: 'The work is successful when the right people encounter our clients and understand — quickly, clearly — whether this business is right for them. Beautiful is secondary to clear.',
  },
]

export default function MethodPage() {
  return (
    <>
      <JsonLd data={methodSchema} />

      {/* ── Section 01 — Hero ──
          Component: hero / hero-inner / hero-content / hero-headline / hero-body
          Layout: 100svh, lower-anchored content
          Entrance: Pattern 07 (mount animation)
          Rule 04: No hero-actions — CTA lives at the Threshold.
          Connects from About page: conviction → operational process (Stage 2 → Stage 3). */}
      <section
        id="main-content"
        className="hero"
        aria-label="The Raleway Method"
      >
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-headline hero-entrance hero-entrance--headline">
              This is what that conviction looks like in practice.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              Every engagement follows a defined process: four phases, in a specific order.
              The sequence exists to reduce uncertainty before each major decision is made.
              Discovery before strategy. Strategy before design. Design before delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — The Diagnostic Standard ──
          Component 05 — Section Introduction
          Eyebrow: "Before Design Begins"
          Explains what commitment to diagnosis means in practice:
          not an abstract value but a specific refusal before design begins.
          Multi-paragraph spacing via .method-diagnostic (globals.css). */}
      <section className="section section--divided" aria-label="Before design begins">
        <div className="container">
          <div className="section-intro method-diagnostic animate-entrance">
            <span className="section-eyebrow">Before Design Begins</span>
            <h2 className="section-headline">
              Before we discuss what anything should look like, we need to understand
              what it needs to accomplish.
            </h2>
            <p className="section-body">
              The diagnostic phase is organised around three questions. Who is the right
              client for this business — specifically, not generally? What does that person
              need to understand before they decide to reach out? And what is the business
              currently communicating that helps or works against that?
            </p>
            <p className="section-body">
              Until those questions are answered, design decisions are premature. Colour,
              layout, typography, content structure — these choices should follow from a
              clear communication objective, not precede one. We postpone them deliberately.
            </p>
            <p className="section-body">
              The diagnostic work also tests assumptions. Most businesses have a working
              theory of why people choose them. That theory is frequently incomplete — and
              sometimes wrong. Uncovering the gap between how a business describes itself
              and how it is actually perceived is what this phase is for. Finding that gap
              before design begins is what prevents expensive rebuilds later.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 03 — The Four Principles (dark field) ──
          Component 04 — Service Item (counter + name + description)
          Dark field — inverted token colours via .section--dark CSS
          Authoritative home for principles; Home references them briefly.
          Rule: do not reproduce full principle text on other pages. */}
      <section className="section section--dark" aria-label="How we work">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-headline">
              Four principles that govern every engagement.
            </h2>
            <p className="section-body">
              They determine what we will and won&rsquo;t do at each stage of the process.
              They&rsquo;re why the work unfolds in the sequence it does.
            </p>
          </div>
          <ul className="method-list animate-entrance" role="list" data-delay="150">
            {principles.map((p) => (
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

      {/* ── Section 04 — The Process ──
          Component 04 — Service Item (counter + name + description)
          Phases written as static JSX — each has multi-paragraph content,
          client obligations embedded in the process, and an outcome sentence.
          Transition intro explains why phases are sequenced as they are.
          Paragraph spacing:
            - Transition paragraphs: .method-phase-intro scoping (globals.css)
            - Phase body: .service-description + .service-description (globals.css)
            - Outcome line: .service-description--outcome (globals.css) */}
      <section className="section section--divided" aria-label="The process">
        <div className="container">
          <div className="section-intro method-phase-intro animate-entrance">
            <span className="section-eyebrow">The Process</span>
            <p className="section-body">
              The four phases that follow are sequenced deliberately. Each one closes a
              question before the next opens. Discover establishes what the problem actually
              is. Define translates that into a strategy. Design expresses the strategy
              visually. Deliver makes the work usable and transferable.
            </p>
            <p className="section-body">
              No phase begins until the previous one is complete.
            </p>
          </div>
          <ul className="method-list animate-entrance" role="list" data-delay="150">

            {/* Phase 01 — Discover */}
            <li className="method-list__item">
              <div className="service-item">
                <span className="service-counter" aria-hidden="true">01</span>
                <span className="service-name">Discover</span>
                <p className="service-description">
                  We begin by listening — not to your brief, but to the business underneath
                  it. Structured conversations, competitor analysis, audience mapping. We&rsquo;re
                  building a picture of the gap: what you currently communicate versus what your
                  intended clients need to understand to choose you.
                </p>
                <p className="service-description">
                  What we need from you at this stage is honest access. Time for the conversations
                  that need to happen, and willingness to engage with questions that go beyond what
                  a brief typically covers. The most useful input here is rarely in the written
                  document — it&rsquo;s in what you say when asked why certain clients don&rsquo;t
                  work out, or why your best clients stay.
                </p>
                <p className="service-description service-description--outcome">
                  Outcome: a shared understanding of the problem.
                </p>
              </div>
            </li>

            {/* Phase 02 — Define */}
            <li className="method-list__item">
              <div className="service-item">
                <span className="service-counter" aria-hidden="true">02</span>
                <span className="service-name">Define</span>
                <p className="service-description">
                  Before design begins, we define what design needs to accomplish. Positioning,
                  message architecture, content hierarchy. This is the strategic document every
                  subsequent decision will be tested against.
                </p>
                <p className="service-description">
                  Your engagement here matters. If the positioning isn&rsquo;t right, the time
                  to say so is during Define — not during Design, when changing direction is more
                  expensive. We present the strategy document and work through it with you before
                  anything moves forward.
                </p>
                <p className="service-description">
                  Design does not begin until this phase is signed off.
                </p>
                <p className="service-description service-description--outcome">
                  Outcome: an agreed strategic direction.
                </p>
              </div>
            </li>

            {/* Phase 03 — Design */}
            <li className="method-list__item">
              <div className="service-item">
                <span className="service-counter" aria-hidden="true">03</span>
                <span className="service-name">Design</span>
                <p className="service-description">
                  Every visual decision is made against the strategy. Typography, colour, layout,
                  content structure — each choice is justified by what the business needs to
                  communicate, and to whom. Nothing here is aesthetic preference without a
                  strategic reason behind it.
                </p>
                <p className="service-description">
                  Your feedback is most useful when it connects to that standard.
                  &ldquo;This doesn&rsquo;t help someone understand X&rdquo; is more actionable
                  than &ldquo;I&rsquo;m not sure about this.&rdquo; We make the same kind of
                  feedback in return when something doesn&rsquo;t meet the standard.
                </p>
                <p className="service-description service-description--outcome">
                  Outcome: a visual system that expresses the strategy.
                </p>
              </div>
            </li>

            {/* Phase 04 — Deliver */}
            <li className="method-list__item">
              <div className="service-item">
                <span className="service-counter" aria-hidden="true">04</span>
                <span className="service-name">Deliver</span>
                <p className="service-description">
                  We hand over a system, not just files. Documentation, usage guidance, and a
                  handoff designed to give you confidence — to use what we built and to build on it.
                </p>
                <p className="service-description">
                  The goal of this phase is to leave you confident using what we&rsquo;ve built
                  long after the project is complete.
                </p>
                <p className="service-description service-description--outcome">
                  Outcome: a complete, usable system your team can confidently operate.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      {/* ── Section 05 — Threshold ──
          Component 09 — preserved exactly from prior implementation.
          Rule 11: One per page. Final section before Footer.
          Rule 07: btn-primary (orange) — Stage 3 (Clarity) → Stage 6 (Action).
          No .threshold .btn-navigate override needed — btn-primary is correct here. */}
      <section className="threshold" aria-label="Start a project">
        <div className="threshold-inner">
          <div className="threshold-content">
            <h2 className="threshold-headline animate-entrance">
              The method works when the client is ready to follow it.
            </h2>
            <p className="threshold-body animate-entrance">
              We work with founders who are prepared to question their assumptions,
              engage with the discovery process honestly, and trust that strategy
              precedes every surface decision.
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
