import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function BeforeAfterSection() {
  return (
    <section className="bg-black section-padding">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <ScrollReveal>
          <p className="mb-4 text-center text-[13px] font-medium uppercase tracking-premium text-white/40">
            Rezultate reale
          </p>
          <h2 className="text-center font-serif text-3xl font-light text-white md:text-5xl">
            Transformări reale
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-14">
            <div className="relative overflow-hidden">
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <ImagePlaceholder
                  label="BEFORE — Fotografie pacient înainte de tratament (close-up dantură)"
                  aspectRatio="aspect-[3/4] md:aspect-[4/3]"
                  className="!border-white/20 !bg-white/5 !text-white/50"
                />
                <ImagePlaceholder
                  label="AFTER — Fotografie pacient după tratament (close-up dantură, aceeași iluminare și unghi)"
                  aspectRatio="aspect-[3/4] md:aspect-[4/3]"
                  className="!border-white/20 !bg-white/5 !text-white/50"
                />
              </div>

              <div className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 backdrop-blur-sm">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-white/40">
              Fațete dentare ceramice — Pacient, 32 ani
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 text-center">
            <a
              href="/cazuri-clinice"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-white/50 transition-colors hover:text-white"
            >
              Vedeți mai multe cazuri
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
