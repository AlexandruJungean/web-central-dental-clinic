"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const PROBLEMS = [
  {
    id: "inghesuiti",
    title: "Dinți înghesiți",
    image: "/images/prototip/dinti-inghesuiti.webp",
    description:
      "Dinții suprapuși sau înghesiți afectează nu doar estetica, ci și igiena orală. Zonele greu accesibile favorizează acumularea de plăcă bacteriană și apariția cariilor.",
    solution: "Ortodonție cu alignere transparente sau aparat dentar",
  },
  {
    id: "spatiere",
    title: "Spațiere excesivă",
    image: "/images/prototip/spatiere-excesiva.webp",
    description:
      "Spațiile dintre dinți pot cauza probleme de masticație și pot afecta încrederea în zâmbetul dumneavoastră. Ele pot fi corectate estetic sau ortodontic.",
    solution: "Fațete ceramice sau ortodonție",
  },
  {
    id: "muscatura",
    title: "Mușcătură deschisă",
    image: "/images/prototip/muscatura-deschisa.webp",
    description:
      "Când dinții superiori și inferiori nu se ating la închiderea gurii, masticația și vorbirea sunt afectate. Tratamentul corectează alinierea ambelor arcade.",
    solution: "Ortodonție avansată",
  },
  {
    id: "lipsa",
    title: "Dinte lipsă",
    image: "/images/prototip/dinte-lipsa.webp",
    description:
      "Un dinte lipsă afectează masticația, estetica și poate duce la deplasarea dinților vecini. Implantul dentar oferă o soluție definitivă și naturală.",
    solution: "Implant dentar sau punte ceramică",
  },
  {
    id: "spart",
    title: "Dinte spart",
    image: "/images/prototip/dinte-spart.webp",
    description:
      "Un dinte fractura poate fi dureros și susceptibil la infecții. În funcție de gravitate, poate fi reconstruit cu o coroană ceramică sau tratat endodontic.",
    solution: "Coroană ceramică sau reconstrucție",
  },
  {
    id: "scurti",
    title: "Dinți scurți",
    image: "/images/prototip/dinti-scurti.webp",
    description:
      "Dinții scurți sau uzați pot fi alungiți estetic cu fațete ceramice, oferind un zâmbet mai armonios și proporționat cu trăsăturile faciale.",
    solution: "Fațete ceramice premium",
  },
];

export function DentalProblemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = PROBLEMS[activeIndex];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROBLEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, inView]);

  return (
    <section ref={sectionRef} className="bg-black section-padding overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <ScrollReveal>
          <p className="text-center text-[13px] font-medium uppercase tracking-premium text-white/40">
            Probleme frecvente
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-light text-white md:text-5xl">
            Te regăsești aici?
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-center text-[15px] text-white/40">
            Oricare ar fi situația, avem soluția potrivită. Programează o
            consultație și îți prezentăm opțiunile.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="mt-14 grid items-center gap-10 md:grid-cols-2 md:gap-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Image */}
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -8 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 8 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative w-full max-w-[420px] mx-auto"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={600}
                    height={500}
                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(255,255,255,0.06)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div>
              {/* Title tabs */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {PROBLEMS.map((problem, i) => (
                  <button
                    key={problem.id}
                    onClick={() => { setActiveIndex(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                    className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-premium transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-white text-black"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {problem.title}
                  </button>
                ))}
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-8"
                >
                  <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                    {active.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-[12px] font-medium uppercase tracking-premium text-white/30">
                      Soluție:
                    </span>
                    <span className="text-[14px] text-white/70">
                      {active.solution}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-white text-black transition-opacity hover:opacity-80"
                >
                  Programează o consultație
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dots */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex items-center justify-center gap-2">
            {PROBLEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Problema ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
