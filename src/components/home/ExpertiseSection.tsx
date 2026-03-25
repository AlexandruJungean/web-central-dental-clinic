"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Estetică dentară",
    description: "Fațete ceramice premium pentru zâmbetul pe care ți-l dorești.",
    href: "/tratamente/fatete-dentare",
  },
  {
    title: "Implantologie",
    description: "Soluții definitive pentru dinții lipsă. All‑on‑4, All‑on‑6.",
    href: "/tratamente/implantologie",
  },
  {
    title: "Ortodonție",
    description: "Dinți drepți cu alignere transparente sau aparate moderne.",
    href: "/tratamente/ortodontie",
  },
];

export function ExpertiseSection() {
  return (
    <section className="bg-gray-bg section-padding">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <ScrollReveal>
          <p className="mb-16 text-center text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
            Expertiza noastră
          </p>
        </ScrollReveal>

        <div className="grid divide-y divide-gray-separator md:grid-cols-3 md:divide-x md:divide-y-0">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-10 text-center md:px-8 md:py-0"
                >
                  <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[260px] text-[15px] leading-relaxed text-gray-text">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors group-hover:text-foreground">
                    Descoperă
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
