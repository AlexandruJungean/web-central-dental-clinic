import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tratamente — Central Dental Clinic",
  description:
    "Servicii stomatologice complete la Central Dental Clinic, Sighetu Marmației. Fațete dentare, implantologie, ortodonție și multe altele.",
};

const TREATMENTS = [
  {
    name: "Estetică dentară · Fațete",
    description: "Fațete ceramice premium pentru un zâmbet transformat complet.",
    href: "/tratamente/fatete-dentare",
    available: true,
  },
  {
    name: "Implantologie",
    description: "Soluții definitive pentru dinții lipsă. All‑on‑4, All‑on‑6.",
    href: "/tratamente/implantologie",
    available: true,
  },
  {
    name: "Ortodonție",
    description: "Alignere transparente și aparate moderne pentru dinți drepți.",
    href: "/tratamente/ortodontie",
    available: true,
  },
  {
    name: "Stomatologie generală",
    description: "Obturații, extracții, tratamente de rutină pentru întreaga familie.",
    href: "/tratamente/stomatologie-generala",
    available: false,
  },
  {
    name: "Albire dentară",
    description: "Albire profesională pentru un zâmbet mai luminos.",
    href: "/tratamente/albire-dentara",
    available: false,
  },
  {
    name: "Pedodonție",
    description: "Îngrijire dentară adaptată celor mici, fără frică.",
    href: "/tratamente/pedodontie",
    available: false,
  },
  {
    name: "Parodontologie",
    description: "Tratamentul și prevenirea afecțiunilor gingiilor.",
    href: "/tratamente/parodontologie",
    available: false,
  },
  {
    name: "Endodonție",
    description: "Tratamente de canal precise, cu tehnologie modernă.",
    href: "/tratamente/endodontie",
    available: false,
  },
  {
    name: "Chirurgie orală",
    description: "Extracții complexe, adiții osoase, intervenții chirurgicale.",
    href: "/tratamente/chirurgie-orala",
    available: false,
  },
  {
    name: "Profilaxie dentară",
    description: "Detartraj, igienizare profesională, prevenție.",
    href: "/tratamente/profilaxie",
    available: false,
  },
  {
    name: "Radiologie dentară",
    description: "Radiografii panoramice, CBCT, diagnostic precis.",
    href: "/tratamente/radiologie",
    available: false,
  },
];

export default function TratamentePage() {
  return (
    <>
      <section className="bg-white pt-32 section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Servicii
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
              Tratamente
            </h1>
            <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-gray-text">
              Soluții complete pentru sănătatea și estetica zâmbetului
              dumneavoastră, de la tratamente de rutină la reabilitări complexe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="border-t border-gray-separator">
            {TREATMENTS.map((treatment, i) => (
              <ScrollReveal key={treatment.name} delay={i * 0.04}>
                {treatment.available ? (
                  <Link
                    href={treatment.href}
                    className="group flex items-center justify-between border-b border-gray-separator py-7 transition-colors hover:bg-gray-bg hover:px-6"
                  >
                    <div>
                      <h2 className="font-serif text-xl font-light text-foreground md:text-2xl">
                        {treatment.name}
                      </h2>
                      <p className="mt-1 text-[14px] text-gray-text">
                        {treatment.description}
                      </p>
                    </div>
                    <svg
                      className="h-4 w-4 shrink-0 text-gray-subtle transition-transform group-hover:translate-x-1 group-hover:text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ) : (
                  <div className="flex items-center justify-between border-b border-gray-separator py-7">
                    <div>
                      <h2 className="font-serif text-xl font-light text-foreground md:text-2xl">
                        {treatment.name}
                      </h2>
                      <p className="mt-1 text-[14px] text-gray-text">
                        {treatment.description}
                      </p>
                    </div>
                    <span className="text-[12px] font-medium uppercase tracking-premium text-gray-subtle">
                      În curând
                    </span>
                  </div>
                )}
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
              Nu sunteți sigur ce tratament aveți nevoie?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
              Programați o consultație gratuită și echipa noastră vă va ghida
              către soluția potrivită.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-black text-white transition-opacity hover:opacity-80"
              >
                Consultație gratuită
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
