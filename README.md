# Central Dental Clinic

Website premium pentru Central Dental Clinic, Sighetu Marmatiei.
Fondator: Dr. Sofineti Ivan Marian.

**Live:** [centraldentalclinic.ro](https://centraldentalclinic.ro)

---

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Fonts:** Cormorant Garamond (serif) + Geist Sans (sans-serif)
- **Email:** Resend (server actions)
- **Hosting:** Netlify
- **Analytics:** Google Tag Manager, GA4, META Pixel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - 8 premium sections |
| `/despre-noi` | About - clinic story, team, gallery, certifications |
| `/tarife` | Pricing - packages + individual pricing |
| `/testimoniale` | Testimonials - YouTube playlist + Google reviews |
| `/contact` | Contact - form with Resend + Google Maps |
| `/dental-tourism` | Diaspora landing page (META Ads only, not in nav) |
| `/politica-confidentialitate` | GDPR privacy policy |
| `/termeni-si-conditii` | Terms and conditions |
| `/politica-cookies` | Cookie policy |

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SITE_URL=https://centraldentalclinic.ro
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTIFY_EMAIL=alex.jungean@gmail.com
FROM_EMAIL=noreply@centraldentalclinic.ro
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Site URL (used in SEO, sitemap, schema) |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `NOTIFY_EMAIL` | Email that receives form notifications |
| `FROM_EMAIL` | Sender email for confirmations (requires verified domain in Resend) |

## Deploy on Netlify

Config is in `netlify.toml`. Steps:

1. Connect repo on Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add env variables from `.env.local` in Netlify Dashboard > Site settings > Environment variables
5. After adding a custom domain, update `NEXT_PUBLIC_SITE_URL`

## Images needed before launch

Add these files to `public/images/`:

| File | Size | Description |
|------|------|-------------|
| `og-image.jpg` | 1200 x 630 px | Social sharing image - logo + text on marble background |
| `icon-192.png` | 192 x 192 px | Logo on white background |
| `icon-512.png` | 512 x 512 px | Logo on white background |
| `apple-touch-icon.png` | 180 x 180 px | Logo on white background (iOS) |

Also at the root of `public/`:

| File | Description |
|------|-------------|
| `favicon.ico` | Logo 32x32 on transparent background, .ico format |

## SEO and GEO

Everything is configured and production-ready:

- **Metadata:** Title template, description, keywords, OG + Twitter cards per page
- **Schema JSON-LD:** Dentist + MedicalBusiness + LocalBusiness (address, coordinates, hours, team, services, rating), WebSite, BreadcrumbList, FAQPage (dental-tourism)
- **Sitemap:** `/sitemap.xml` - dynamic, all pages with priorities
- **Robots:** `/robots.txt` - allow all, disallow /api/, sitemap link
- **llms.txt:** `/llms.txt` - structured document for AI engines (ChatGPT, Perplexity, Google AI)
- **404:** Custom premium page

## File structure

| Directory | File | Role |
|-----------|------|------|
| `src/app/` | `layout.tsx` | Root layout, fonts, metadata, schema |
| | `page.tsx` | Home (8 premium sections) |
| | `not-found.tsx` | Custom 404 |
| | `sitemap.ts` | Dynamic sitemap |
| | `robots.ts` | Robots.txt |
| | `globals.css` | Design system |
| | `despre-noi/page.tsx` | About page |
| | `tarife/page.tsx` | Pricing page |
| | `testimoniale/page.tsx` | Testimonials page |
| | `contact/page.tsx` | Contact page |
| | `dental-tourism/page.tsx` | Diaspora landing page |
| | `dental-tourism/DiasporaFormInner.tsx` | Diaspora form (client component) |
| | `politica-confidentialitate/page.tsx` | GDPR |
| | `termeni-si-conditii/page.tsx` | Terms |
| | `politica-cookies/page.tsx` | Cookies |
| `src/components/` | `Header.tsx` | Transparent/solid header, mobile menu |
| | `Footer.tsx` | Black footer, company data, legal |
| | `WhatsAppButton.tsx` | Floating WhatsApp button |
| | `ContactForm.tsx` | Shared form (dark/light variant) |
| | `ScrollReveal.tsx` | Fade-in on scroll animation |
| | `ImagePlaceholder.tsx` | Image placeholder |
| | `SchemaMarkup.tsx` | JSON-LD schema components |
| | `home/HeroSection.tsx` | S1 Hero |
| | `home/BrandStatement.tsx` | S2 Brand statement |
| | `home/ExpertiseSection.tsx` | S3 Expertise |
| | `home/BeforeAfterSection.tsx` | S4 Before/After |
| | `home/DoctorSection.tsx` | S5 Doctor + team |
| | `home/SocialProofSection.tsx` | S6 Social proof |
| | `home/PackagesSection.tsx` | S7 Packages |
| | `home/ContactSection.tsx` | S8 Contact |
| `src/lib/` | `constants.ts` | Contact, team, treatments (single source of truth) |
| | `actions.ts` | Resend server action (notification + confirmation email) |
| `public/` | `llms.txt` | GEO - document for AI engines |
| | `favicon.ico` | Favicon |
| `public/images/` | `logo.png` | Clinic logo |
| | `marble-bg.png` | Marble texture (signature background) |
| | `og-image.jpg` | Social sharing image (1200x630) |
