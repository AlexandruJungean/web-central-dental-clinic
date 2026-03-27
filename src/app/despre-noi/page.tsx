import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Despre noi — Central Dental Clinic",
  description:
    "Povestea Central Dental Clinic din Sighetu Marmației. Echipa, misiunea și valorile clinicii fondată de Dr. Șofineți Ivan Marian.",
};

export default function DespreNoiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid items-end gap-12 md:grid-cols-2 md:gap-20">
            <ScrollReveal>
              <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Despre noi
              </p>
              <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
                Povestea noastră
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-gray-text">
                Central Dental Clinic s-a născut din convingerea că fiecare
                pacient merită acces la stomatologie de cel mai înalt nivel,
                chiar aici, în Sighetu Marmației. Fondată de Dr. Șofineți Ivan
                Marian, clinica noastră reunește tehnologie modernă, materiale
                premium și o echipă dedicată într-un spațiu gândit pentru
                confort și încredere.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
                Nu credem în compromisuri. Fiecare tratament este planificat cu
                precizie, fiecare detaliu contează, iar rezultatul trebuie să
                depășească așteptările. Aceasta este promisiunea noastră.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ImagePlaceholder
                label="FOTOGRAFIE — Dr. Șofineți Ivan Marian la lucru în clinică sau portret cu echipa. Format landscape sau pătrat."
                aspectRatio="aspect-square"
                className="w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Misiune, Viziune, Valori */}
      <section className="bg-gray-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-12 text-center text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Ce ne definește
            </p>
          </ScrollReveal>

          <div className="grid gap-px bg-gray-separator md:grid-cols-3">
            {[
              {
                title: "Misiune",
                text: "Să oferim fiecărui pacient tratamente stomatologice de cea mai înaltă calitate, cu transparență, empatie și rezultate care vorbesc de la sine.",
              },
              {
                title: "Viziune",
                text: "Să devenim centrul de referință în stomatologie din Maramureș — locul unde oamenii vin cu încredere pentru orice nevoie dentară.",
              },
              {
                title: "Valori",
                text: "Excelență în fiecare detaliu. Transparență totală. Tehnologie de ultimă generație. Respect și grijă autentică pentru fiecare pacient.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10">
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Echipa
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
              Oamenii din spatele
              <br />
              fiecărui zâmbet
            </h2>
          </ScrollReveal>

          {/* Medici */}
          <div className="mt-14">
            <ScrollReveal>
              <p className="mb-8 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Medici
              </p>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {TEAM.doctors.map((doc, i) => (
                <ScrollReveal key={doc.name} delay={i * 0.08}>
                  <div className="group text-center">
                    <ImagePlaceholder
                      label={`Portret ${doc.name}`}
                      aspectRatio="aspect-[3/4]"
                      className="w-full transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                    />
                    <h3 className="mt-4 text-[15px] font-medium text-foreground">
                      {doc.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-gray-subtle">
                      {doc.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Asistente */}
          <div className="mt-16">
            <ScrollReveal>
              <p className="mb-8 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Asistente
              </p>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {TEAM.assistants.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.08}>
                  <div className="group text-center">
                    <ImagePlaceholder
                      label={`Portret ${member.name}`}
                      aspectRatio="aspect-[3/4]"
                      className="w-full transition-shadow duration-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                    />
                    <h3 className="mt-4 text-[15px] font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-gray-subtle">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie clinică */}
      <section className="bg-gray-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-10 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Clinica noastră
            </p>
          </ScrollReveal>

          <div className="grid gap-3 md:grid-cols-3">
            <ScrollReveal>
              <ImagePlaceholder
                label="INTERIOR — Recepție / sală de așteptare. Unghi larg."
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <ImagePlaceholder
                label="INTERIOR — Sala de tratament principală. Scaun dentar, echipamente."
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <ImagePlaceholder
                label="INTERIOR — A doua sală sau alt unghi."
                aspectRatio="aspect-[4/3]"
                className="w-full"
              />
            </ScrollReveal>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <ImagePlaceholder
                label="DETALIU — Echipament / scanner / tehnologie. Adâncime de câmp mică."
                aspectRatio="aspect-[3/2]"
                className="w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <ImagePlaceholder
                label="DETALIU — Echipament / instrumente / scaun premium."
                aspectRatio="aspect-[3/2]"
                className="w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certificări */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Certificări & Parteneri
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
              Standarde înalte, confirmate
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
              Calitatea tratamentelor noastre este susținută de parteneriate cu
              producători premium și de respectarea celor mai exigente
              standarde în stomatologia modernă.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
              <span className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Logo partener #1
              </span>
              <span className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Logo partener #2
              </span>
              <span className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Logo partener #3
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-padding">
        <div className="mx-auto max-w-[600px] px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Veniți să ne cunoaștem
            </h2>
            <p className="mt-4 text-[15px] text-white/50">
              Consultația inițială este fără obligație financiară.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-white text-black transition-opacity hover:opacity-80"
              >
                Programează o consultație
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
