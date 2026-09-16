import { ScrollReveal } from "@/components/ScrollReveal";

export function BrandStatement() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[800px] px-6 text-center md:px-10">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
            Clinica
          </p>
          <p className="mt-5 font-serif text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-[2.25rem] lg:leading-[1.4]">
            Central Dental Clinic este clinica stomatologică din Sighetu
            Marmației unde poți rezolva totul într-un singur loc.
          </p>
          <p className="mx-auto mt-6 max-w-[640px] text-[15px] leading-relaxed text-gray-text">
            Fondată de Dr. Șofineți Ivan Marian, echipa noastră reunește
            specialiști în estetică dentară, implantologie, ortodonție,
            parodontologie, pedodonție și chirurgie orală. Tehnologie modernă,
            materiale premium și un spațiu gândit pentru confort și încredere.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 w-24">
            <svg
              viewBox="0 0 96 24"
              fill="none"
              className="w-full text-gray-separator"
            >
              <path
                d="M0 18 C24 18, 24 6, 48 6 S72 18, 96 18"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
