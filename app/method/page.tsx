import { Fragment } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import IconMark from '@/components/media/IconMark'
import RalewayMark from '@/components/media/RalewayMark'

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
// Section 04 — The four phases as an interactive disclosure sequence.
// Version 1.1 Interaction Layer: the copy is unchanged from the prior
// static rendering (see git history) — only restructured so the outcome
// of each phase is legible without reading all sixteen paragraphs first.
// Collapsed: icon, counter, name, outcome. Expanded: the phase's own
// paragraphs. First phase open by default (an affordance, not a default
// the visitor has to guess exists).
const processPhases = [
  {
    num: '01',
    icon: 'discover' as const,
    name: 'Discover',
    outcome: 'Outcome: a shared understanding of the problem.',
    body: [
      'We begin by listening — not to your brief, but to the business underneath it. Structured conversations, competitor analysis, audience mapping. We’re building a picture of the gap: what you currently communicate versus what your intended clients need to understand to choose you.',
      'What we need from you at this stage is honest access. Time for the conversations that need to happen, and willingness to engage with questions that go beyond what a brief typically covers. The most useful input here is rarely in the written document — it’s in what you say when asked why certain clients don’t work out, or why your best clients stay.',
    ],
  },
  {
    num: '02',
    icon: 'define' as const,
    name: 'Define',
    outcome: 'Outcome: an agreed strategic direction.',
    body: [
      'Before design begins, we define what design needs to accomplish. Positioning, message architecture, content hierarchy. This is the strategic document every subsequent decision will be tested against.',
      'Your engagement here matters. If the positioning isn’t right, the time to say so is during Define — not during Design, when changing direction is more expensive. We present the strategy document and work through it with you before anything moves forward.',
      'Design does not begin until this phase is signed off.',
    ],
  },
  {
    num: '03',
    icon: 'design' as const,
    name: 'Design',
    outcome: 'Outcome: a visual system that expresses the strategy.',
    body: [
      'Every visual decision is made against the strategy. Typography, colour, layout, content structure — each choice is justified by what the business needs to communicate, and to whom. Nothing here is aesthetic preference without a strategic reason behind it.',
      'Your feedback is most useful when it connects to that standard. “This doesn’t help someone understand X” is more actionable than “I’m not sure about this.” We make the same kind of feedback in return when something doesn’t meet the standard.',
    ],
  },
  {
    num: '04',
    icon: 'deliver' as const,
    name: 'Deliver',
    outcome: 'Outcome: a complete, usable system your team can confidently operate.',
    body: [
      'We hand over a system, not just files. Documentation, usage guidance, and a handoff designed to give you confidence — to use what we built and to build on it.',
      'The goal of this phase is to leave you confident using what we’ve built long after the project is complete.',
    ],
  },
]

const principles = [
  {
    num: '01',
    icon: 'diagnose' as const,
    title: 'We diagnose before we design.',
    desc: 'Every project begins with a structured discovery process. We need to understand what the problem actually is — not assume it is what it first appears to be.',
  },
  {
    num: '02',
    icon: 'challenge' as const,
    title: 'We challenge before we agree.',
    desc: "When we believe a direction is wrong, we say so. Agreement that doesn't serve the business isn't professionalism — it's self-protection.",
  },
  {
    num: '03',
    icon: 'strategy' as const,
    title: 'Strategy before surface.',
    desc: 'A website is not the solution. It is the expression of a solution. The positioning, the narrative, the content architecture — these come before anything visual.',
  },
  {
    num: '04',
    icon: 'legibility' as const,
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
        className="hero texture-dots glow-field mark-bleed"
        aria-label="The Raleway Method"
      >
        <div className="hero-inner hero-inner--relative">
          <div className="proof-rail proof-rail--hero-float animate-entrance" aria-hidden="true">
            <span className="proof-pill" style={{ bottom: '22%', left: '2%' }}>Discovery before strategy</span>
            <span className="proof-pill" style={{ bottom: '10%', right: '4%' }}>Four phases, gated in order</span>
            <span className="float-mark" style={{ top: '6%', left: '4%' }}>
              <RalewayMark variant="fragment" size={24} aria-hidden />
            </span>
          </div>
          <div className="hero-content hero-content--centered">
            <span className="hero-kicker hero-entrance hero-entrance--headline">The Method</span>
            <h1 className="hero-headline hero-headline--bold hero-headline--display-xl hero-entrance hero-entrance--headline">
              This is what that conviction looks like in{' '}
              <span className="chip-highlight chip-highlight--tint">
                practice
              </span>.
            </h1>
            <p className="hero-body hero-entrance hero-entrance--body">
              Every engagement follows a defined process: four phases, in a specific order.
              The sequence exists to reduce uncertainty before each major decision is made.
              Discovery before strategy. Strategy before design. Design before delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 02 — The Diagnostic Standard (Component 14 — Editorial) ──
          Component 05 — Section Introduction
          Eyebrow: "Before Design Begins"
          Explains what commitment to diagnosis means in practice:
          not an abstract value but a specific refusal before design begins.
          Multi-paragraph spacing via .method-diagnostic (globals.css).
          Version 1.1 Editorial Layer: the three questions that structure
          this entire phase were stated mid-paragraph, easy to read past.
          Pulled out below using the same numbered-marker device already
          built for Home's Diagnosis section (.editorial-split +
          .section-marker) — the same visual move for the same kind of
          content: a diagnostic sequence. Exact existing wording, no new
          copy; the source paragraph is unchanged. */}
      <section className="section section--divided texture-dots" aria-label="Before design begins">
        <div className="container">
          <div className="section-intro method-diagnostic animate-entrance">
            <span className="section-eyebrow section-eyebrow--mono">Before Design Begins</span>
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
          </div>
          <div className="method-diagnostic__questions">
            <div className="editorial-split animate-entrance">
              <span className="section-marker" aria-hidden="true">I</span>
              <p className="service-description">
                Who is the right client for this business — specifically, not generally?
              </p>
            </div>
            <div className="editorial-split animate-entrance">
              <span className="section-marker" aria-hidden="true">II</span>
              <p className="service-description">
                What does that person need to understand before they decide to reach out?
              </p>
            </div>
            <div className="editorial-split animate-entrance">
              <span className="section-marker" aria-hidden="true">III</span>
              <p className="service-description">
                What is the business currently communicating that helps or works against that?
              </p>
            </div>
          </div>
          {/* Collage exploration: same idea the removed arc diagram
              illustrated (something found, not yet visible), now a
              layered paper composition. Caption carried over verbatim. */}
          <div
            className="collage-cluster"
            role="img"
            aria-label="What the diagnostic phase is built to find — represented as two layered paper pieces"
            style={{ height: '300px', maxWidth: '560px', margin: '0 auto' }}
          >
            <div
              className="collage-piece collage-piece--clay animate-entrance"
              style={{
                top: '10px', left: '40px', width: '260px', height: '180px',
                ['--piece-rotate' as any]: '-3deg', ['--piece-rotate-start' as any]: '-10deg',
              }}
            >
              <span className="collage-piece__label">What the diagnostic phase is built to find.</span>
            </div>
            <div
              className="collage-piece collage-piece--cream animate-entrance"
              style={{
                top: '150px', left: '320px', width: '160px', height: '120px',
                ['--piece-rotate' as any]: '5deg', ['--piece-rotate-start' as any]: '12deg',
              }}
              data-delay="100"
            />
          </div>
          <div className="section-intro method-diagnostic animate-entrance">
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
      <section className="section section--dark glow-field glow-field--dark" aria-label="How we work">
        <div className="container">
          <div className="section-intro animate-entrance">
            <span className="section-eyebrow section-eyebrow--mono">How We Work</span>
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
                  <IconMark name={p.icon} className="service-icon service-icon--hero" />
                  <span className="service-counter" aria-hidden="true">{p.num}</span>
                  <span className="service-name">{p.title}</span>
                  <p className="service-description">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 04 — The Process (Component 13 — Disclosure) ──
          Version 1.1 Interaction Layer: converted from a fully-expanded
          16-paragraph wall of text to an interactive sequence. Every
          phase's outcome is visible without opening anything — the
          paragraphs (the "how") are what expand. This isn't decoration:
          the copy above states the process is strictly gated ("No phase
          begins until the previous one is complete") and a flat list
          was hiding that shape rather than showing it. Built on native
          <details>/<summary> — works with zero JavaScript. MotionInit
          adds single-open exclusivity as an enhancement (see
          data-accordion-group), mirroring the gated, one-thing-at-a-time
          nature of the real process. All copy preserved exactly — see
          the processPhases array above this component. */}
      <section className="section section--divided" aria-label="The process">
        <div className="container">
          <div className="section-intro method-phase-intro animate-entrance">
            <span className="section-eyebrow section-eyebrow--mono">The Process</span>
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
          {/* v0.7: compact visual flow summary, pulled from pleurat.com's
              "workspace" panel idea — a bordered card with a mono status
              header and connected nodes. Sits above the accessible
              disclosure list below; doesn't replace it. Node labels and
              the note are exact phase names/copy already defined in
              processPhases above, nothing invented. */}
          <div className="process-panel animate-entrance">
            <div className="process-panel__header">
              <span>Method / Process / Four Phases</span>
              <span className="process-panel__status">Gated · Sequential</span>
            </div>
            <div className="process-panel__flow">
              {processPhases.map((phase, i) => (
                <Fragment key={phase.num}>
                  <span className="process-panel__node">{phase.name}</span>
                  {i < processPhases.length - 1 && (
                    <span className="process-panel__arrow" aria-hidden="true">&rarr;</span>
                  )}
                </Fragment>
              ))}
            </div>
            <p className="process-panel__note fig-caption" style={{ textAlign: 'left' }}>
              No phase begins until the previous one is complete.
            </p>
          </div>
          <div className="process-rail">
            <ul className="method-list animate-entrance" role="list" data-delay="150">
              {processPhases.map((phase) => (
                <li key={phase.num} className="method-list__item">
                  <details
                    className="disclosure disclosure--process"
                    data-accordion-group="method-process"
                    open={phase.num === '01'}
                  >
                    <summary className="disclosure__summary">
                      <IconMark name={phase.icon} className="service-icon service-icon--hero" />
                      <div className="disclosure__summary-text">
                        <div className="disclosure__heading-row">
                          <div className="disclosure__heading-labels">
                            <span className="service-counter" aria-hidden="true">{phase.num}</span>
                            <span className="service-name">{phase.name}</span>
                          </div>
                          <span className="disclosure__indicator" aria-hidden="true" />
                        </div>
                        <p className="service-description service-description--outcome disclosure__teaser">
                          {phase.outcome}
                        </p>
                      </div>
                    </summary>
                    <div className="disclosure__body">
                      {phase.body.map((paragraph, i) => (
                        <p key={i} className="service-description">{paragraph}</p>
                      ))}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
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
