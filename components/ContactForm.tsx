'use client'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

const EMAILJS_PUBLIC_KEY  = 'bMePVKBzytA-ocUv3'
const EMAILJS_SERVICE_ID  = 'service_5leqyib'
const EMAILJS_TEMPLATE_ID = 'template_xubdg7b'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'info@ralewaystudio.com', href: 'mailto:info@ralewaystudio.com' },
  { icon: '🌍', label: 'Location', value: 'Remote — available worldwide', href: null },
  { icon: '⏱️', label: 'Response Time', value: 'Within 1–2 business days', href: null },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const params = {
      from_name:  (form.elements.namedItem('name') as HTMLInputElement).value,
      from_email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service:    (form.elements.namedItem('service') as HTMLSelectElement).value,
      budget:     (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message:    (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const emailjs = (await import('@emailjs/browser')).default
      emailjs.init(EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      setStatus('sent')
    } catch (err: unknown) {
      const msg = err && typeof err === 'object' && 'text' in err
        ? String((err as { text: string }).text) : String(err)
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  return (
    <div className="contact-grid">
      {/* Info */}
      <div>
        <span className="section-label">Reach Us</span>
        <h2 style={{fontSize:'1.6rem',marginBottom:'1.5rem'}}>We&apos;d love to hear from you</h2>
        <div className="contact-info">
          {contactInfo.map(item => (
            <div className="contact-info-item" key={item.label}>
              <div className="contact-info-item__icon">{item.icon}</div>
              <div>
                <div className="contact-info-item__label">{item.label}</div>
                <p className="contact-info-item__value">
                  {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'2.5rem',padding:'1.5rem',background:'var(--light)',borderRadius:'var(--radius-lg)'}}>
          <h4 style={{marginBottom:'0.5rem'}}>Not sure where to start?</h4>
          <p style={{fontSize:'0.9rem',margin:0}}>Browse our <Link href="/services">services</Link> or <Link href="/pricing">pricing plans</Link> to get an idea of what fits your needs.</p>
        </div>
        <div style={{marginTop:'2rem'}}>
          <div style={{fontFamily:'var(--font-raleway)',fontWeight:700,fontSize:'0.88rem',color:'var(--dark)',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.08em'}}>Follow Us</div>
          <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
            <a href="https://www.instagram.com/raleway_studio/" target="_blank" rel="noopener" className="btn btn-outline btn-sm">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61562921306084" target="_blank" rel="noopener" className="btn btn-outline btn-sm">Facebook</a>
            <a href="https://www.linkedin.com/company/104446233" target="_blank" rel="noopener" className="btn btn-outline btn-sm">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        {status === 'sent' ? (
          <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'3rem',textAlign:'center'}}>
            <h3 style={{color:'var(--primary)',marginBottom:'1rem'}}>Message sent! ✓</h3>
            <p>We&apos;ll get back to you within 1–2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'2.5rem'}}>
            <h3 style={{marginBottom:'1.5rem'}}>Send a Message</h3>
            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input className="form-input" type="text" id="name" name="name" placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input className="form-input" type="email" id="email" name="email" placeholder="jane@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="service">Which service are you interested in?</label>
              <select className="form-select" id="service" name="service">
                <option value="">Select a service…</option>
                <option>Website Design</option>
                <option>Graphic Design</option>
                <option>SEO</option>
                <option>Project Management</option>
                <option>AI Automation</option>
                <option>Social Media Management</option>
                <option>Virtual Assistance</option>
                <option>Multiple services</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="budget">Approximate budget</label>
              <select className="form-select" id="budget" name="budget">
                <option value="">Select a range…</option>
                <option>Under $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $2,500</option>
                <option>$2,500+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Tell us about your project *</label>
              <textarea className="form-textarea" id="message" name="message" placeholder="What do you need help with? What's your timeline?" required />
            </div>
            {status === 'error' && (
              <p style={{color:'red',fontSize:'0.85rem',marginBottom:'0.75rem'}}>
                Something went wrong ({errorMsg}). Please email <a href="mailto:info@ralewaystudio.com">info@ralewaystudio.com</a> directly.
              </p>
            )}
            <button type="submit" className="btn btn-primary" style={{width:'100%'}} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p style={{fontSize:'0.82rem',color:'var(--gray)',textAlign:'center',marginTop:'0.75rem'}}>We respond within 1–2 business days.</p>
          </form>
        )}
      </div>
    </div>
  )
}
