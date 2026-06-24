'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Website Design',         href: '/services/website-design' },
  { label: 'Graphic Design',         href: '/services/graphic-design' },
  { label: 'SEO',                    href: '/services/seo' },
  { label: 'Project Management',     href: '/services/project-management' },
  { label: 'AI Automation',          href: '/services/ai-automation' },
  { label: 'Social Media Management',href: '/services/social-media-management' },
  { label: 'Virtual Assistance',     href: '/services/virtual-assistance' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="banner">🐾 For every sale, 5% goes to non-government animal shelters</div>
      <nav className="nav">
        <div className="container">
          <div className="nav__inner">
            <Link href="/" className="nav__logo">
              <Image src="/assets/logo-nav.webp" alt="Raleway Studio" width={250} height={102} className="nav__logo-img" priority />
            </Link>

            <ul className={`nav__links${open ? ' open' : ''}`} id="navLinks">
              <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li className="nav__dropdown">
                <Link href="/services">
                  Services{' '}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{display:'inline-block',verticalAlign:'middle',marginLeft:1}}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </Link>
                <ul className="nav__dropdown-menu">
                  {services.map(s => (
                    <li key={s.href}><Link href={s.href} onClick={() => setOpen(false)}>{s.label}</Link></li>
                  ))}
                </ul>
              </li>
              <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
              <li><Link href="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link></li>
              <li><Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
            </ul>

            <div className="nav__cta-group">
              <Link href="/book" className="btn btn-outline btn-sm">Book a Call</Link>
              <Link href="/contact" className="btn btn-primary btn-sm">Get in Touch</Link>
            </div>

            <button className="nav__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
