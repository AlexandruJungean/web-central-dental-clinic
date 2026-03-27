import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimoniale - Central Dental Clinic",
  description:
    "Ce spun pacienții Central Dental Clinic din Sighetu Marmației. Testimoniale video și recenzii reale.",
};

const VIDEO_TESTIMONIALS = [
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #1 - Fațete dentare", duration: "2:30" },
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #2 - Implantologie", duration: "3:15" },
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #3 - Ortodonție", duration: "1:45" },
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #4 - Reabilitare totală", duration: "4:00" },
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #5 - Estetică dentară", duration: "2:10" },
  { id: "aZIiVDFbrgM", title: "Testimonial pacient #6 - Dantură fixă", duration: "3:30" },
];

const REVIEWS = [
  {
    name: "Maria P.",
    rating: 5,
    text: "Profesionalism desăvârșit, cabinet de ultimă generație. Doctorul a fost extrem de atent și m-a pus în temă cu fiecare etapă a tratamentului. Recomand cu cea mai mare încredere!",
    date: "Martie 2026",
  },
  {
    name: "Andrei M.",
    rating: 5,
    text: "Am venit din Italia special pentru un tratament de implantologie. Totul a decurs perfect, de la primul contact pe WhatsApp până la finalizarea lucrării. Prețuri corecte și calitate excepțională.",
    date: "Februarie 2026",
  },
  {
    name: "Elena V.",
    rating: 5,
    text: "Clinica arată impecabil, iar echipa este foarte prietenoasă. Copilul meu s-a simțit în largul lui de la prima vizită. Am găsit în sfârșit un dentist de familie pe care putem conta.",
    date: "Ianuarie 2026",
  },
  {
    name: "Gheorghe D.",
    rating: 5,
    text: "După ani de zile cu proteze mobile, am ales să fac All-on-4. A fost cea mai bună decizie. Echipa a fost extraordinară, iar rezultatul depășește așteptările.",
    date: "Decembrie 2025",
  },
];

export default function TestimonialePage() {
  return (
    <>
      <section className="bg-white pt-32 section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Testimoniale
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
              Ce spun pacienții noștri
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <div className="grid gap-px bg-gray-separator md:grid-cols-[340px_1fr]">
              <div className="max-h-[480px] space-y-px overflow-y-auto bg-gray-bg">
                {VIDEO_TESTIMONIALS.map((video, i) => (
                  <a
                    key={i}
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white p-4 transition-colors hover:bg-gray-bg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-bg">
                      <svg className="h-4 w-4 text-gray-subtle" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] font-medium text-foreground">
                        {video.title}
                      </p>
                      <p className="text-[12px] text-gray-subtle">{video.duration}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-black">
                <div className="relative aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/aZIiVDFbrgM"
                    title="Testimonial pacient"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                  Recenzii Google
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-serif text-5xl font-light text-foreground">
                    5.0
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground md:inline-flex"
              >
                Adaugă o recenzie
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white/80 backdrop-blur-sm p-8">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <svg key={j} className="h-3.5 w-3.5 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-text italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-[14px] font-medium text-foreground">{review.name}</p>
                    <p className="text-[12px] text-gray-subtle">{review.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black section-padding">
        <div className="mx-auto max-w-[600px] px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Doriți să programați o consultație?
            </h2>
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
