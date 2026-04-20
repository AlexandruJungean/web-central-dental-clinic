import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/images/marble-bg.png)" }}
      />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <ScrollReveal>
              <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Programare
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
                Să discutăm despre
                <br />
                zâmbetul tău
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-12">
                <ContactForm variant="light" />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-between">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">Adresă</p>
                  <p className="mt-2 text-[15px] text-gray-text">
                    {CONTACT.address.street}<br />{CONTACT.address.city}
                  </p>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">Telefon</p>
                  <a href={CONTACT.phoneHref} className="mt-2 block text-[15px] text-foreground transition-opacity hover:opacity-70">
                    {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="mt-2 block text-[15px] text-foreground transition-opacity hover:opacity-70">
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">Program</p>
                  <p className="mt-2 text-[15px] text-gray-text">
                    {CONTACT.schedule.weekdays}<br />{CONTACT.schedule.saturday}<br />{CONTACT.schedule.sunday}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-12">
                <a
                  href={CONTACT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
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
