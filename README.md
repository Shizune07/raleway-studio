# Raleway Studio — Version 1.0

**Live:** https://www.ralewaystudio.com  
**Hosting:** Vercel  
**Status:** Version 1.0 — frozen. No design, copy, or structural changes without evidence trigger.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 App Router (TypeScript) |
| Design system | Custom CSS (`styles/main.css` + `app/globals.css`) |
| Fonts | Source Serif 4 + DM Sans (via `next/font/google`) |
| CMS | Sanity v3 (Thinking articles + Services) |
| Booking | Calendly inline embed |
| Hosting | Vercel |

---

## Pages

| Route | Status | Notes |
|---|---|---|
| `/` | V1.0 ✓ | Home |
| `/about` | V1.0 ✓ | Founder portrait is placeholder — awaiting photography |
| `/method` | V1.0 ✓ | |
| `/services` | V1.0 ✓ | CMS-driven with static fallback |
| `/work` | V1.0 ✓ | Self-case only — client cases added in V2 |
| `/thinking` | V1.0 ✓ | CMS-driven; empty state active until first article published |
| `/thinking/[slug]` | V1.0 ✓ | Sanity-powered article template |
| `/start` | V1.0 ✓ | Calendly embed + What Happens Next |
| `/services/[slug]` | Redirect → `/services` | Individual pages are V2 scope |
| `/blog` | Redirect → `/thinking` | Route migration complete |
| `/blog/[slug]` | Redirect → `/thinking/[slug]` | Route migration complete |
| `/book` | Redirect → `/start` | Duplicate — removed |
| `/contact` | Redirect → `/start` | Consolidated |
| `/pricing` | Redirect → `/start` | Removed — contradicts V1.0 positioning |
| `/testimonials` | Redirect → `/about` | Removed — awaiting real testimonials |

---

## Local Development

```bash
# 1. Install
npm install

# 2. Environment variables
cp .env.local.example .env.local
# Required:
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
# NEXT_PUBLIC_SANITY_DATASET=production

# 3. Run
npm run dev
# → http://localhost:3000

# 4. Sanity Studio
# → http://localhost:3000/studio
```

---

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Project ID available at https://sanity.io/manage.

---

## Design System

The V1.0 design system is frozen. Do not modify design system files without an evidence-based reason.

| File | Role |
|---|---|
| `styles/main.css` | Design system — tokens, components, layout primitives, motion |
| `app/globals.css` | Legacy tokens + per-page supplement styles |

**Component classes in use:** `hero`, `section--divided`, `section--dark`, `threshold`, `service-item`, `service-item--linked`, `service-counter`, `service-name`, `service-description`, `section-intro`, `section-eyebrow`, `section-headline`, `section-body`, `btn-primary`, `btn-navigate`, `btn-navigate__arrow`, `site-nav`, `site-footer`

**Legacy classes (non-V1.0 pages only, do not use on new pages):** `page-hero`, `btn`, `cta-banner`, `two-col`, `features-grid`, `section-label`, `section-title`

---

## CMS (Sanity)

Studio at `/studio`. Two content types active:

- **post** — Thinking articles. Fields: title, slug, excerpt, publishedAt, category, mainImage, body (Portable Text)
- **service** — Services list. Fields: title, slug, tagline, description, order

Publishing an article in Sanity automatically makes it appear on `/thinking`. No code changes required.

---

## Known Gaps (V2 Scope)

The following are intentionally deferred to Version 2:

- Individual service pages (`/services/[slug]`)
- Client case studies on Work page
- Testimonials component and page
- Founder portrait photography
- OG image (`/public/assets/og-image.png` — 1200×630px, not yet created)
- Route: `/thinking/[slug]` template needs design system update (currently uses legacy `blog/[slug]` template with old styling)

V2 trigger conditions: minimum 2 client case studies, 4 published Thinking articles, 2 real testimonials, 6 months of analytics.

---

## Project Structure

```
app/
  page.tsx                    ← Home
  about/page.tsx
  method/page.tsx
  services/page.tsx           ← CMS-driven index
  services/[slug]/page.tsx    ← Redirects to /services (V2 scope)
  work/page.tsx
  thinking/page.tsx           ← CMS-driven index
  blog/[slug]/page.tsx        ← Redirects to /thinking/[slug]
  start/page.tsx
  not-found.tsx
  error.tsx
  loading.tsx
  layout.tsx
  globals.css
  sitemap.ts
  robots.ts

components/
  Navbar.tsx
  Footer.tsx
  CalendlyEmbed.tsx
  JsonLd.tsx
  MotionInit.tsx

styles/
  main.css                    ← Design system (frozen)

lib/
  sanity.ts                   ← Client + GROQ queries

sanity/
  schemas/

next.config.ts                ← Redirects + image domains
```
