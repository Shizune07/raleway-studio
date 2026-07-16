'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'About',      href: '/about' },
  { label: 'The Method', href: '/method' },
  { label: 'Work',       href: '/work' },
  { label: 'Thinking',   href: '/thinking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href="/" className="nav__logo">
            <Image
              src="/assets/logo-nav.webp"
              alt="Raleway Studio"
              width={250}
              height={102}
              className="nav__logo-img"
              priority
            />
          </Link>

          <ul className={`nav__links${open ? ' open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Start link visible only in mobile menu */}
            <li className="nav__mobile-cta">
              <Link href="/start" onClick={() => setOpen(false)}>Start</Link>
            </li>
          </ul>

          <div className="nav__cta-group">
            <Link href="/start" className="btn btn-dark btn-sm">
              Start
            </Link>
          </div>

          <button
            className="nav__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
