'use client'
/**
 * MotionInit — Design System Motion Initialization
 * Source: Pillar IV — Motion Specifications (Patterns 06, 08)
 *
 * Runs once at mount. Initializes:
 *   1. Scroll entrance observer (Pattern 06) — `.animate-entrance` elements
 *   2. Navbar scroll-aware hide/show (Pattern 08) — mobile only
 *
 * FOIC mitigation (Pattern 07) is handled via an inline <script> in layout.tsx
 * so it fires synchronously before first paint, before this component hydrates.
 *
 * IMPORTANT — route changes:
 * This component lives in the root layout, so it mounts once and persists across
 * client-side navigations. Effects therefore key on `pathname`: on every route
 * change the incoming page renders fresh .hero-entrance / .animate-entrance
 * nodes at opacity:0, and they must be re-revealed and re-observed. Without the
 * pathname dependency, navigating in-app leaves the new page permanently blank.
 */
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    __motionReady?: boolean
    __motionFailsafe?: ReturnType<typeof setTimeout>
  }
}

export default function MotionInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Signal successful hydration and cancel the layout.tsx blank-page failsafe.
    // One-time only — not keyed to pathname.
    window.__motionReady = true
    if (window.__motionFailsafe) clearTimeout(window.__motionFailsafe)
  }, [])

  useEffect(() => {
    // ── Pattern 07 — Hero Entrance (mount, not scroll) ──
    // Hero elements use .hero-entrance and are held at opacity:0 by
    // .js-motion-ready in motion.css. They are NOT observed by the scroll
    // observer below, so they must be revealed here on mount.
    // Stagger (headline → body → CTA) is handled in CSS via
    // .hero-entrance--headline / --body / --cta transition-delay.
    //
    // No rAF here (deliberately). The opacity:0 "before" state is already
    // painted by the browser prior to this effect running — either from the
    // server-rendered HTML (initial load) or from React's commit of the new
    // route's DOM (client-side navigation), both of which paint before any
    // useEffect fires. Wrapping in rAF adds a dependency on visual paint
    // scheduling, which is throttled to near-zero in backgrounded/hidden
    // tabs — a real scenario (opening a link in a background tab) that
    // would leave the page permanently blank until the tab gains focus.
    // Plain execution here is not subject to that throttling.
    const heroElements = document.querySelectorAll<HTMLElement>('.hero-entrance')
    heroElements.forEach((el) => el.classList.add('motion-entered'))
  }, [pathname])

  useEffect(() => {
    // ── Pattern 06 — Scroll Entrance ──
    // Trigger: threshold 0.15 (15% visible)
    // Each element animates exactly once (unobserved after trigger)
    const entranceElements = document.querySelectorAll<HTMLElement>('.animate-entrance')

    if (entranceElements.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              // Apply stagger delay if specified via data attribute
              const delay = el.dataset.delay
              if (delay) {
                el.style.transitionDelay = `${delay}ms`
              }
              el.classList.add('motion-entered')
              observer.unobserve(el) // Animate exactly once
            }
          })
        },
        { threshold: 0.15 }
      )

      entranceElements.forEach((el) => observer.observe(el))

      // Disconnected on route change so the next page rebuilds its own observer.
      return () => observer.disconnect()
    }
  }, [pathname])

  useEffect(() => {
    // ── Component 13 — Disclosure: accordion exclusivity ──
    // Pure enhancement, not a dependency. Every <details data-accordion-group>
    // already opens and closes correctly with zero JS (native behaviour).
    // This just makes grouped sets (currently: Method's four process phases)
    // close their siblings when one opens, so the page mirrors the gated,
    // one-thing-at-a-time nature of the actual process. If this effect never
    // ran — slow connection, JS error upstream — multiple phases could stay
    // open at once. Content and comprehension are unaffected either way.
    const groups = new Map<string, HTMLDetailsElement[]>()
    document.querySelectorAll<HTMLDetailsElement>('[data-accordion-group]').forEach((el) => {
      const key = el.dataset.accordionGroup!
      const list = groups.get(key) ?? []
      list.push(el)
      groups.set(key, list)
    })

    const cleanups: Array<() => void> = []

    groups.forEach((members) => {
      members.forEach((el) => {
        const onToggle = () => {
          if (el.open) {
            members.forEach((other) => {
              if (other !== el) other.open = false
            })
          }
        }
        el.addEventListener('toggle', onToggle)
        cleanups.push(() => el.removeEventListener('toggle', onToggle))
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [pathname])

  useEffect(() => {
    // ── Pattern 08 — Navbar Scroll-Aware (mobile only) ──
    // Hide on scroll-down: .nav-hidden (transform: translateY(-100%), 250ms ease-in)
    // Show on scroll-up:  .nav-visible (transform: translateY(0), 200ms ease-out)
    // Only active below 1023px

    const nav = document.querySelector<HTMLElement>('.site-nav')
    if (!nav) return

    let lastScrollY = window.scrollY
    let ticking = false

    const MOBILE_BREAKPOINT = 1023
    const SCROLL_THRESHOLD = 60  // px scrolled before hiding — avoids triggering on minor scroll

    const onScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        if (window.innerWidth > MOBILE_BREAKPOINT) {
          // Desktop: always visible, no class manipulation
          nav.classList.remove('nav-hidden', 'nav-visible')
          lastScrollY = window.scrollY
          ticking = false
          return
        }

        const currentScrollY = window.scrollY
        const scrollDelta = currentScrollY - lastScrollY

        if (currentScrollY < SCROLL_THRESHOLD) {
          // Near top of page — always show
          nav.classList.remove('nav-hidden')
          nav.classList.add('nav-visible')
        } else if (scrollDelta > 0) {
          // Scrolling down — hide
          nav.classList.add('nav-hidden')
          nav.classList.remove('nav-visible')
        } else if (scrollDelta < 0) {
          // Scrolling up — reveal
          nav.classList.remove('nav-hidden')
          nav.classList.add('nav-visible')
        }

        lastScrollY = currentScrollY
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // This component renders nothing — it only registers effects
  return null
}
