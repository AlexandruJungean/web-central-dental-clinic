import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ofertă Website | Central Dental Clinic",
  description: "Propunere comercială pentru dezvoltarea website-ului Central Dental Clinic — 3 planuri la costuri diferite.",
  robots: { index: false, follow: false },
};

export default function OfertaPage() {
  return (
    <main>
      <HeroSection />
      <PricingCards />
      <ComparisonTable />
      <MaterialsSection />
      <ProcessSteps />
      <ClosingCTA />
    </main>
  );
}

/* ═══ HERO ═══ */
function HeroSection() {
  return (
    <section className="bg-foreground py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
          Propunere comercială
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Website Central Dental Clinic
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Trei planuri, un singur obiectiv: un website care construiește
          credibilitate, convertește vizitatori în pacienți și prezintă
          serviciile clinicii la standarde europene.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Martie 2026 &middot; Valabilitate 30 de zile
        </p>
      </div>
    </section>
  );
}

/* ═══ PRICING CARDS ═══ */
const PLANS = [
  {
    name: "Esențial",
    price: "1.000",
    ideal: "Lansare rapidă. Nucleul site-ului + Dental Tourism pentru META Ads.",
    pages: "7 pagini",
    delivery: "2–3 săptămâni",
    revisions: "1 rundă",
    pagesList: [
      "Acasă (versiune compactă, ~10 secțiuni)",
      "Tratamente (overview)",
      "Dental Tourism (pagină completă conversie diaspora)",
      "Tarife (pachete + tarife individuale)",
      "Testimoniale (YouTube playlist + recenzii)",
      "Contact (formular, Google Maps)",
      "Legal ×2 (Confidențialitate + Termeni)",
    ],
    features: [
      "Design responsive mobile-first",
      "Formular programare cu confirmare email",
      "Buton WhatsApp floating",
      "Google Analytics 4 + META Pixel",
      "SEO de bază (metadata, sitemap, robots.txt)",
      "Echipa ca secțiune pe Home",
      "YouTube embeds testimoniale",
    ],
    notIncluded: [
      "Pagini dedicate per tratament",
      "Pagina Despre noi",
      "Pagina Echipa (standalone)",
      "Before/After slider",
      "Animații avansate",
      "Blog / Cazuri clinice",
      "Google Tag Manager",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "1.600",
    ideal: "Website complet — credibilitate, conversie și vânzare. Concurezi cu clinicile de top.",
    pages: "12 pagini",
    delivery: "3–5 săptămâni",
    revisions: "2 runde",
    pagesList: [
      "Tot din Esențial, PLUS:",
      "Acasă (toate 16 secțiunile)",
      "Despre noi (poveste, misiune, galerie, certificări)",
      "Echipa (pagină dedicată cu bio-uri)",
      "Fațete dentare (tipuri, proces, B/A, pachete, FAQ)",
      "Implantologie (sales page: beneficiari, proces, pachete)",
      "Ortodonție (ilustrații model dentar, prețuri, FAQ)",
    ],
    features: [
      "Tot din Esențial, PLUS:",
      "Design custom cu animații Framer Motion",
      "Before/After slider interactiv",
      "Testimoniale video premium cu carousel",
      "Pachete cu prețuri expandabile",
      "Soluții financiare + logo-uri bănci",
      "Certificări și parteneri",
      "Povești de succes pe Home",
      "Google Tag Manager",
      "SEO avansat (schema markup, Open Graph)",
      "Formular diaspora extins",
      "Fișier llms.txt",
    ],
    notIncluded: [
      "Blog cu CMS",
      "Cazuri clinice (sistem complet)",
      "Profil individual doctor",
      "SEO complet + GEO",
      "Flow vizitator per ICP",
      "Mentenanță post-lansare",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "2.800",
    ideal: "Prezență digitală completă cu blog, CMS, SEO/GEO și strategie de conversie detaliată.",
    pages: "25+ pagini",
    delivery: "5–7 săptămâni",
    revisions: "3 runde",
    pagesList: [
      "Tot din Profesional, PLUS:",
      "Cazuri clinice (listing cu filtre + pagini individuale)",
      "7 pagini tratamente suplimentare",
      "Blog (listing + articole individuale)",
      "Profil individual per doctor",
    ],
    features: [
      "Tot din Profesional, PLUS:",
      "CMS headless (Sanity) — administrezi conținut fără cod",
      "Blog complet cu categorii și paginare",
      "Animații scroll-triggered pe toate paginile",
      "Lighthouse 90+ (performanță optimizată)",
      "Training 1h administrare CMS",
      "SEO complet (audit tehnic, schema extins, URL canonical)",
      "GEO (optimizare pentru AI: Google AI, ChatGPT, Perplexity)",
      "Flow vizitator detaliat per ICP",
      "2 luni mentenanță post-lansare inclusă",
    ],
    notIncluded: [],
    highlighted: false,
  },
];

function PricingCards() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl border bg-white transition-shadow ${
                plan.highlighted
                  ? "border-brand shadow-xl shadow-brand/10 ring-2 ring-brand"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-brand py-2 text-center text-xs font-bold uppercase tracking-wider text-white">
                  Recomandat
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                <p className="mt-2 text-sm text-muted">{plan.ideal}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    €{plan.price}
                  </span>
                </div>

                <div className="mt-6 flex gap-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground">{plan.pages}</p>
                    <p className="text-muted">incluse</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-bold text-foreground">{plan.delivery}</p>
                    <p className="text-muted">livrare</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-bold text-foreground">{plan.revisions}</p>
                    <p className="text-muted">revizuiri</p>
                  </div>
                </div>

                {/* Pages */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    Pagini
                  </p>
                  <ul className="mt-3 space-y-2">
                    {plan.pagesList.map((page, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        {i === 0 && plan.name !== "Esențial" ? (
                          <span className="text-xs font-semibold text-brand">{page}</span>
                        ) : (
                          <>
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-foreground">{page}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">
                    Funcționalități
                  </p>
                  <ul className="mt-3 space-y-2">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        {i === 0 && plan.name !== "Esențial" ? (
                          <span className="text-xs font-semibold text-brand">{feat}</span>
                        ) : (
                          <>
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-muted">{feat}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not included */}
                {plan.notIncluded.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      Nu include
                    </p>
                    <ul className="mt-3 space-y-2">
                      {plan.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <a
                  href="https://wa.me/40749165211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 block rounded-full py-4 text-center text-sm font-bold transition-colors ${
                    plan.highlighted
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "bg-foreground text-white hover:bg-slate-800"
                  }`}
                >
                  Aleg {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ COMPARISON TABLE ═══ */
function ComparisonTable() {
  const rows: { label: string; e: string; p: string; pr: string }[] = [
    { label: "Preț", e: "€1.000", p: "€1.600", pr: "€2.800" },
    { label: "Pagini", e: "7", p: "12", pr: "25+" },
    { label: "Livrare", e: "2–3 săpt.", p: "3–5 săpt.", pr: "5–7 săpt." },
    { label: "Design responsive", e: "✓", p: "✓", pr: "✓" },
    { label: "Formular + email", e: "✓", p: "✓", pr: "✓" },
    { label: "WhatsApp floating", e: "✓", p: "✓", pr: "✓" },
    { label: "GA4 + META Pixel", e: "✓", p: "✓", pr: "✓" },
    { label: "Dental Tourism", e: "✓", p: "✓", pr: "✓" },
    { label: "Tarife / Prețuri", e: "✓", p: "✓", pr: "✓" },
    { label: "Testimoniale (pagină)", e: "✓", p: "✓ premium", pr: "✓ premium" },
    { label: "Despre noi", e: "—", p: "✓", pr: "✓" },
    { label: "Echipa (pagină)", e: "—", p: "✓", pr: "✓" },
    { label: "Pagini tratamente", e: "—", p: "3", pr: "10" },
    { label: "Before/After slider", e: "—", p: "✓", pr: "✓" },
    { label: "Animații", e: "—", p: "✓", pr: "✓ avansate" },
    { label: "Google Tag Manager", e: "—", p: "✓", pr: "✓" },
    { label: "SEO avansat", e: "—", p: "✓", pr: "✓ complet" },
    { label: "llms.txt", e: "—", p: "✓", pr: "✓ extins" },
    { label: "Cazuri clinice", e: "—", p: "—", pr: "✓" },
    { label: "Blog cu CMS", e: "—", p: "—", pr: "✓" },
    { label: "GEO (motoare AI)", e: "—", p: "—", pr: "✓" },
    { label: "Flow per ICP", e: "—", p: "—", pr: "✓" },
    { label: "Mentenanță", e: "—", p: "—", pr: "2 luni" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Comparație detaliată
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          Fiecare plan include tot ce este în planul anterior, plus funcționalități suplimentare.
        </p>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="py-4 text-left font-bold text-foreground">Caracteristică</th>
                <th className="px-4 py-4 text-center font-bold text-foreground">Esențial</th>
                <th className="px-4 py-4 text-center font-bold text-brand">
                  Profesional
                  <span className="ml-1 rounded bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                    REC
                  </span>
                </th>
                <th className="px-4 py-4 text-center font-bold text-foreground">Premium</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-border ${i === 0 ? "bg-surface font-bold" : ""}`}>
                  <td className="py-3 text-foreground">{row.label}</td>
                  <td className="px-4 py-3 text-center text-muted">{row.e}</td>
                  <td className="px-4 py-3 text-center text-foreground">{row.p}</td>
                  <td className="px-4 py-3 text-center text-muted">{row.pr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ═══ MATERIALE NECESARE ═══ */
function MaterialsSection() {
  const items = [
    { n: "01", title: "Logo", text: "Format vectorial (SVG sau AI) + culorile brandului." },
    { n: "02", title: "Echipa medicală", text: "Nume, specializare, bio 100–150 cuvinte, fotografie portret profesională." },
    { n: "03", title: "Prețuri", text: "Tarife exacte pentru tratamente și pachete, în RON și EUR." },
    { n: "04", title: "Fotografii clinică", text: "Interior (minim 6), exterior (1–2), echipamente (3–4)." },
    { n: "05", title: "Before / After", text: "Minim 8 perechi de fotografii cu acord pacient semnat." },
    { n: "06", title: "Video testimoniale", text: "Minim 10 pe YouTube, durata 1–3 minute fiecare." },
    { n: "07", title: "Certificări", text: "Documente, badge-uri, logo-uri parteneri și bănci." },
    { n: "08", title: "Tracking", text: "META Pixel ID + Google Analytics Measurement ID." },
  ];

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Înainte de start
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          Ce avem nevoie de la tine
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Aceste materiale sunt necesare pentru orice plan, înainte de
          începerea dezvoltării.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.n}>
              <span className="text-3xl font-black text-brand/20">{item.n}</span>
              <h3 className="mt-1 font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ PROCESS ═══ */
function ProcessSteps() {
  const steps = [
    { n: "1", title: "Alegi planul", text: "Discutăm, răspundem la întrebări, stabilim direcția." },
    { n: "2", title: "Semnare contract", text: "Confirmăm colaborarea, blocăm perioada de livrare." },
    { n: "3", title: "Ne trimiți materialele", text: "Logo, fotografii, prețuri, echipa — tot ce ai în lista de mai sus." },
    { n: "4", title: "Dezvoltăm", text: "Construim website-ul. Primești update-uri pe parcurs." },
    { n: "5", title: "Prima versiune", text: "Prezentăm versiunea funcțională, discutăm feedback." },
    { n: "6", title: "Revizuiri", text: "Implementăm ajustările solicitate." },
    { n: "7", title: "Lansare", text: "Publicăm site-ul, configurăm analytics, totul live." },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Cum funcționează
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          De la decizie la site live, în pași simpli.
        </p>

        <div className="mt-14 space-y-0">
          {steps.map((step, i) => (
            <div key={step.n} className="flex gap-6">
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {step.n}
                </div>
                {i < steps.length - 1 && <div className="h-full w-px bg-border" />}
              </div>
              {/* Content */}
              <div className={`pb-10 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <h3 className="font-bold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ═══ CTA FINAL ═══ */
function ClosingCTA() {
  return (
    <section className="bg-foreground py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Pregătit să începem?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          Recomandarea noastră este <span className="font-bold text-brand-light">Planul Profesional</span> — cel
          mai bun raport între investiție și impact. Include tot ce ai nevoie
          pentru a lansa campanii META Ads și a concura cu cele mai bune clinici
          din România online.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/40749165211"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Discutăm pe WhatsApp
          </a>
          <a
            href="tel:+40749165211"
            className="rounded-full border border-slate-600 px-10 py-4 text-sm font-medium text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
          >
            Sună: +40 749 165 211
          </a>
        </div>
        <p className="mt-8 text-xs text-slate-600">
          Propunere valabilă 30 de zile de la data emiterii.
        </p>
      </div>
    </section>
  );
}
