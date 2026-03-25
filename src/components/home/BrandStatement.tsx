import { ScrollReveal } from "@/components/ScrollReveal";

export function BrandStatement() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[800px] px-6 text-center md:px-10">
        <ScrollReveal>
          <p className="font-serif text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-[1.4]">
            Fiecare zâmbet este o lucrare de precizie. Combinăm tehnologia
            modernă cu atenția la fiecare detaliu pentru rezultate care vorbesc
            de la sine.
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
