'use client'

import { useEffect } from 'react'

const CALENDLY_URL = 'https://calendly.com/ralewaystudio'

export default function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly"]')
    if (existing) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=c04300`}
        style={{ minWidth: 320, height: 700 }}
      />
    </>
  )
}
