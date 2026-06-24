import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Work With Us | Raleway Studio | Remote Web & Digital Services',
  description: 'Ready to build your website or grow your online presence? Get in touch with Raleway Studio — we work remotely with businesses worldwide. Let\'s talk.',
  alternates: { canonical: 'https://www.ralewaystudio.com/contact' },
  openGraph: { url: 'https://www.ralewaystudio.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Contact</nav>
          <h1>Let&apos;s Work Together</h1>
          <p>Tell us about your project and we&apos;ll get back to you within 1–2 business days.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
