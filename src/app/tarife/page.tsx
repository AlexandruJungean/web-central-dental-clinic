import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tarife — Central Dental Clinic",
  description:
    "Prețuri transparente pentru toate tratamentele stomatologice la Central Dental Clinic, Sighetu Marmației. Pachete și tarife individuale.",
};

const PACKAGES = [
  {
    name: "Hollywood Smile",
    detail: "10 fațete dentare premium",
    price: "€X.XXX",
    includes: [
      "Consultație fără obligație financiară",
      "Plan de tratament personalizat",
      "Investigații radiologice complete",
      "Certificat de calitate material",
      "Controale periodice incluse",
    ],
  },
  {
    name: "Hollywood Smile Plus",
    detail: "20 fațete dentare premium",
    price: "€X.XXX",
    includes: [
      "Consultație fără obligație financiară",
      "Plan de tratament personalizat",
      "Investigații radiologice complete",
      "Certificat de calitate material",
      "Controale periodice incluse",
    ],
  },
  {
    name: "All‑on‑4",
    detail: "Dantură fixă pe 4 implanturi",
    price: "€X.XXX",
    includes: [
      "Evaluare pe tomografie 3D",
      "Plan de tratament personalizat",
      "Inserarea a 4 implanturi",
      "Lucrare provizorie",
      "Monitorizare post-operatorie",
    ],
  },
  {
    name: "All‑on‑6",
    detail: "Dantură fixă pe 6 implanturi",
    price: "€X.XXX",
    includes: [
      "Evaluare pe tomografie 3D",
      "Plan de tratament personalizat",
      "Inserarea a 6 implanturi",
      "Lucrare provizorie",
      "Monitorizare post-operatorie",
    ],
  },
];

const PRICE_CATEGORIES = [
  {
    name: "Consultații & Diagnostic",
    items: [
      { service: "Consultație generală", price: "Gratuită" },
      { service: "Radiografie panoramică", price: "XXX RON" },
      { service: "Computer tomograf (CBCT)", price: "XXX RON" },
      { service: "Radiografie retroalveolară", price: "XX RON" },
    ],
  },
  {
    name: "Estetică dentară",
    items: [
      { service: "Fațetă ceramică E-max", price: "XXX RON" },
      { service: "Fațetă feldspatică", price: "XXX RON" },
      { service: "Coroană ceramică", price: "XXX RON" },
      { service: "Albire profesională", price: "XXX RON" },
    ],
  },
  {
    name: "Implantologie",
    items: [
      { service: "Implant dentar (standard)", price: "X.XXX RON" },
      { service: "Implant dentar (premium)", price: "X.XXX RON" },
      { service: "Adiție osoasă", price: "X.XXX RON" },
      { service: "Sinus lift", price: "X.XXX RON" },
    ],
  },
  {
    name: "Ortodonție",
    items: [
      { service: "Consultație ortodontică", price: "XXX RON" },
      { service: "Aparat dentar fix (metalic)", price: "X.XXX RON" },
      { service: "Aparat dentar fix (ceramic)", price: "X.XXX RON" },
      { service: "Alignere transparente", price: "X.XXX RON" },
    ],
  },
  {
    name: "Stomatologie generală",
    items: [
      { service: "Obturație compozit", price: "XXX RON" },
      { service: "Extracție simplă", price: "XXX RON" },
      { service: "Extracție chirurgicală", price: "XXX RON" },
      { service: "Detartraj + Airflow", price: "XXX RON" },
    ],
  },
  {
    name: "Endodonție",
    items: [
      { service: "Tratament de canal (monoradicular)", price: "XXX RON" },
      { service: "Tratament de canal (pluriradicular)", price: "XXX RON" },
      { service: "Retratament endodontic", price: "XXX RON" },
    ],
  },
  {
    name: "Pedodonție",
    items: [
      { service: "Consultație copii", price: "Gratuită" },
      { service: "Sigilare dinte", price: "XX RON" },
      { service: "Obturație dinte temporar", price: "XXX RON" },
      { service: "Extracție dinte temporar", price: "XX RON" },
    ],
  },
  {
    name: "Parodontologie",
    items: [
      { service: "Tratament parodontal (per sextant)", price: "XXX RON" },
      { service: "Chiuretaj subgingival", price: "XXX RON" },
    ],
  },
];

export default function TarifePage() {
  return (
    <>
      <section className="bg-white pt-32 section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Tarife
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
              Prețuri transparente
            </h1>
            <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-gray-text">
              Fără costuri ascunse. Toate prețurile includ materialele și
              controalele aferente. Consultația inițială este gratuită.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-10 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Pachete
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between border border-gray-separator p-8 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-10">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-premium text-gray-subtle">
                      {pkg.detail}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[14px] text-gray-text">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <span className="font-serif text-3xl font-light text-foreground">
                      {pkg.price}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center px-6 text-[13px] font-medium uppercase tracking-premium text-white bg-black transition-opacity hover:opacity-80"
                    >
                      Solicită
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-10 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Tarife individuale
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {PRICE_CATEGORIES.map((category, ci) => (
              <ScrollReveal key={category.name} delay={ci * 0.05}>
                <details className="group border-t border-gray-separator last:border-b">
                  <summary className="flex cursor-pointer items-center justify-between py-6 text-foreground transition-colors hover:text-foreground/70">
                    <h3 className="font-serif text-xl font-light md:text-2xl">
                      {category.name}
                    </h3>
                    <svg
                      className="h-4 w-4 shrink-0 text-gray-subtle transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="pb-6">
                    {category.items.map((item) => (
                      <div
                        key={item.service}
                        className="flex items-center justify-between border-t border-gray-separator/50 py-3"
                      >
                        <span className="text-[15px] text-gray-text">
                          {item.service}
                        </span>
                        <span className="text-[15px] font-medium text-foreground">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 mx-auto max-w-[600px] px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-light text-foreground md:text-3xl">
              Plata în rate
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
              Tratamentele pot fi achitate în până la X rate lunare cu 0%
              dobândă prin partenerii noștri bancari.
            </p>
            <div className="mt-8 flex items-center justify-center gap-8">
              <span className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Logo bancă parteneră #1
              </span>
              <span className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Logo bancă parteneră #2
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black section-padding">
        <div className="mx-auto max-w-[600px] px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Consultația este gratuită
            </h2>
            <p className="mt-4 text-[15px] text-white/50">
              Veniți să ne cunoaștem și să discutăm despre planul de tratament
              potrivit pentru dumneavoastră.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-white text-black transition-opacity hover:opacity-80"
              >
                Programează-te
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
