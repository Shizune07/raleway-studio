'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Rule 08: Footer nav mirrors Navbar nav exactly.
// These links are the authoritative navigation set.
const navLinks = [
  { label: 'About',      href: '/about' },
  { label: 'The Method', href: '/method' },
  { label: 'Work',       href: '/work' },
  { label: 'Thinking',   href: '/thinking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    // Component 01 — Navbar (Design System v1.0, FROZEN)
    // Class: site-nav (not nav — new system)
    // Motion: scroll-aware hide/show via JS (Pattern 08, mobile only)
    <header className="site-nav">
      <div className="nav-inner">

        {/* Wordmark — Rule 02: Source Serif 4, 11.5px, uppercase, 0.22em tracking */}
        <Link
          href="/"
          className="nav-wordmark"
          aria-label="Raleway Studio — home"
        >
          Raleway Studio
        </Link>

        {/* Primary navigation — hidden at ≤1023px, hamburger takes over */}
        <nav aria-label="Primary navigation">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA — btn-primary nav-cta: 48px left margin, hidden at ≤1023px */}
        <Link href="/start" className="btn-primary nav-cta">
          Start a conversation
        </Link>

        {/* Hamburger — visible at ≤1023px; aria-expanded drives CSS × state */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {/* Single span — ::before and ::after form the three-bar / × icon */}
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu panel — Rule 04: hidden attribute (not display:none) */}
      <div
        id="nav-mobile-menu"
        className="nav-mobile"
        hidden={!open}
      >
        <div className="nav-mobile-inner">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile CTA — full width per Component 01 spec */}
          <div className="nav-mobile-cta">
            <Link
              href="/start"
              className="btn-primary"
              onClick={() => setOpen(false)}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
