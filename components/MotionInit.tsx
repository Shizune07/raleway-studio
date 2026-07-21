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
 */
import { useEffect } from 'react'

declare global {
  interface Window {
    __motionReady?: boolean
    __motionFailsafe?: ReturnType<typeof setTimeout>
  }
}

export default function MotionInit() {
  useEffect(() => {
    // Signal successful hydration and cancel the layout.tsx blank-page failsafe.
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
    // rAF defers one frame so the browser paints the initial opacity:0 state
    // before the class flips — without it the transition is skipped.
    const heroElements = document.querySelectorAll<HTMLElement>('.hero-entrance')

    if (heroElements.length > 0) {
      requestAnimationFrame(() => {
        heroElements.forEach((el) => el.classList.add('motion-entered'))
      })
    }
  }, [])

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

      return () => observer.disconnect()
    }
  }, [])

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
