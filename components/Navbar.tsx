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
      <div className="banner"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor" style={{verticalAlign:'-0.1em',display:'inline-block',marginRight:'0.3em'}}><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>For every sale, 5% goes to non-government animal shelters</div>
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
