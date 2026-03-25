import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SocialProofSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url(/images/marble-bg.png)" }}
      />
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center md:px-10">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
            Recenzii Google
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="font-serif text-6xl font-light text-foreground md:text-7xl">
              5.0
            </span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-subtle">pe Google</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <blockquote className="mt-14">
            <p className="font-serif text-xl font-light italic leading-relaxed text-foreground md:text-2xl">
              &ldquo;Profesionalism desăvârșit, cabinet de ultimă generație,
              atmosferă plăcută. Recomand cu cea mai mare încredere!&rdquo;
            </p>
            <footer className="mt-6 text-sm text-gray-subtle">
              &mdash; Pacient verificat Google
            </footer>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-12">
            <Link
              href="/testimoniale"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
            >
              Vedeți toate testimonialele
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
