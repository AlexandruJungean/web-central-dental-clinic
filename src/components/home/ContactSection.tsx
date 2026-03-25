"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

const TREATMENTS = [
  "Consultație generală",
  "Fațete dentare",
  "Implantologie",
  "Ortodonție",
  "Albire dentară",
  "Stomatologie generală",
  "Pedodonție",
  "Parodontologie",
  "Endodonție",
  "Chirurgie orală",
  "Profilaxie",
  "Radiologie",
  "Turism dentar",
  "Altele",
];

export function ContactSection() {
  return (
    <section className="bg-black section-padding">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <ScrollReveal>
              <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                Programare
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-5xl">
                Să discutăm despre
                <br />
                zâmbetul tău
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form className="mt-12 space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nume"
                    required
                    className="w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon sau WhatsApp"
                    required
                    className="w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60"
                  />
                </div>
                <div>
                  <select
                    required
                    defaultValue=""
                    className="w-full appearance-none border-b border-white/20 bg-transparent py-3 text-[15px] text-white/30 outline-none transition-colors focus:border-white/60 focus:text-white [&:not([value=''])]:text-white"
                  >
                    <option value="" disabled>
                      Tratament dorit
                    </option>
                    {TREATMENTS.map((t) => (
                      <option key={t} value={t} className="bg-black text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Mesaj (opțional)"
                    rows={3}
                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-white text-black transition-opacity hover:opacity-80"
                  >
                    Programează-te
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-between">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                    Adresă
                  </p>
                  <p className="mt-2 text-[15px] text-white/70">
                    Strada Andrei Mureșan 5
                    <br />
                    435500 Sighetu Marmației
                  </p>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                    Telefon
                  </p>
                  <a
                    href="tel:+40749165211"
                    className="mt-2 block text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    +40 749 165 211
                  </a>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                    Email
                  </p>
                  <a
                    href="mailto:ivanmariansofineti@gmail.com"
                    className="mt-2 block text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    ivanmariansofineti@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                    Program
                  </p>
                  <p className="mt-2 text-[15px] text-white/70">
                    Luni – Vineri: 09:00 – 18:00
                    <br />
                    Sâmbătă: 09:00 – 14:00
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-12">
                <a
                  href="https://maps.app.goo.gl/Y8AWSVvfizCp2ah17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-white/40 transition-colors hover:text-white"
                >
                  Deschide în Google Maps
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
