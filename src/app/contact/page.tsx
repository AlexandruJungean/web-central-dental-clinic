import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Central Dental Clinic",
  description:
    "Programează o consultație la Central Dental Clinic, Sighetu Marmației. Telefon, WhatsApp, email și formular de programare.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pt-32 section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
              Programează o consultație
            </h1>
            <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-gray-text">
              Completează formularul de mai jos sau contactează-ne direct.
              Consultația inițială este fără obligație financiară.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
            <ScrollReveal delay={0.1}>
              <ContactForm variant="light" />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-10">
                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                    Telefon & WhatsApp
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-2 block font-serif text-2xl font-light text-foreground transition-opacity hover:opacity-70"
                  >
                    {CONTACT.phone}
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
                  >
                    Deschide WhatsApp
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 block text-[15px] text-foreground transition-opacity hover:opacity-70"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                    Adresă
                  </p>
                  <p className="mt-2 text-[15px] text-gray-text">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}
                  </p>
                  <a
                    href={CONTACT.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
                  >
                    Deschide în Google Maps
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div>
                  <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                    Program
                  </p>
                  <div className="mt-2 space-y-1 text-[15px] text-gray-text">
                    <p>{CONTACT.schedule.weekdays}</p>
                    <p>{CONTACT.schedule.saturday}</p>
                    <p>{CONTACT.schedule.sunday}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white pb-8">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <div className="overflow-hidden border border-gray-separator">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800!2d23.88827!3d47.926696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737bbf9e5bc02a1%3A0xa52d0bda00f21948!2sROYAL%203D%20SMILE%20DESIGN%20SRL%20-%20CENTRAL%20DENTAL%20CLINIC!5e0!3m2!1sro!2sro"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Central Dental Clinic pe Google Maps"
                className=""
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
