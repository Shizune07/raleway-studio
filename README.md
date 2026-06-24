# Raleway Studio — Next.js Site

**Branch:** `nextjs`  
**Live URL (after cutover):** https://www.ralewaystudio.com  
**Vercel Preview:** check the Vercel dashboard for the latest preview URL

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 App Router (TypeScript) |
| Styling | Custom CSS (globals.css) + Tailwind |
| Fonts | Raleway + Inter (Google Fonts via next/font) |
| CMS | Sanity v3 (blog) |
| Email | EmailJS |
| Booking | Calendly inline embed |
| Hosting | Vercel |

---

## Local Development

```bash
# 1. Clone and install
git clone https://github.com/Shizune07/raleway-studio.git
cd raleway-studio
git checkout nextjs
npm install

# 2. Set env vars
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SANITY_PROJECT_ID

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Sanity Studio (blog CMS)
# → http://localhost:3000/studio
```

---

## Environment Variables

Create `.env.local` in the project root:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Get your project ID at https://sanity.io after creating a project.

---

## Before Launch Checklist

### Content
- [ ] Replace Calendly URL in `components/CalendlyEmbed.tsx` (currently `https://calendly.com/ralewaystudio`)
- [ ] Add your real OG image at `public/assets/og-image.png` (1200×630px)
- [ ] Add logo files: `public/assets/logo.png`, `public/assets/logo-white.png`, `public/assets/logo-nav.webp`
- [ ] Verify all team photos load (Wix CDN URLs in `app/about/page.tsx`)
- [ ] Set up Sanity project + add `.env.local` with project ID
- [ ] Create at least one blog post in Sanity Studio

### Technical
- [ ] Run `npm install` to get all packages (including Sanity)
- [ ] Run `npm run build` locally — fix any type or import errors
- [ ] Test all 7 service pages at `/services/[slug]`
- [ ] Test contact form (EmailJS keys are already set)
- [ ] Test Calendly embed on `/book`
- [ ] Test mobile nav (hamburger menu)
- [ ] Check 404 page at `/anything-wrong`

### SEO
- [ ] Verify `/sitemap.xml` generates correctly on Vercel preview
- [ ] Verify `/robots.txt` is accessible
- [ ] Test JSON-LD with Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Submit sitemap in Google Search Console after DNS cutover

### Vercel + DNS Cutover (Jun 30 target)
1. In Vercel → Project Settings → Domains → Add `www.ralewaystudio.com` and `ralewaystudio.com`
2. Vercel gives you a CNAME value (`cname.vercel-dns.com`)
3. In your DNS registrar, update:
   - `CNAME www → cname.vercel-dns.com`
   - `A @ → 76.76.21.21` (Vercel's IP for apex domain)
4. Set environment variables in Vercel → Project → Settings → Environment Variables
5. Redeploy once env vars are set
6. DNS propagates in 15 min – 48 hours (usually under 1 hour)
7. Submit sitemap to Google Search Console: `https://www.ralewaystudio.com/sitemap.xml`

---

## Project Structure

```
app/
  page.tsx                   ← Home
  about/page.tsx
  contact/page.tsx
  pricing/page.tsx
  testimonials/page.tsx
  services/page.tsx
  services/[slug]/page.tsx   ← 7 services via dynamic route
  blog/page.tsx
  blog/[slug]/page.tsx
  book/page.tsx              ← Calendly booking
  not-found.tsx              ← Custom 404
  error.tsx                  ← Error boundary
  loading.tsx                ← Loading spinner
  sitemap.ts
  robots.ts
  layout.tsx
  globals.css

components/
  Navbar.tsx
  Footer.tsx
  ContactForm.tsx            ← EmailJS
  CalendlyEmbed.tsx          ← Calendly widget
  JsonLd.tsx                 ← Structured data

lib/
  sanity.ts                  ← Sanity client + GROQ queries

sanity/
  schemas/post.ts
  schemas/index.ts

sanity.config.ts             ← Studio at /studio
```
