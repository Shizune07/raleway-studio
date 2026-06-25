'use client'

import { Studio } from 'sanity'
import config from '@/sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return (
    <>
      <style>{`
        body { overflow: hidden; }
      `}</style>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
      }}>
        <Studio config={config} />
      </div>
    </>
  )
}
