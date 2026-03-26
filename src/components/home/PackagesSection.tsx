"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const PACKAGES = [
  {
    name: "Hollywood Smile",
    count: "10",
    unit: "fațete dentare premium",
    description:
      "Zâmbet complet transformat, cu formă, proporții și culoare perfect adaptate trăsăturilor tale.",
    price: "€X.000",
    includes: [
      "Consultație de specialitate fără obligație financiară",
      "Plan de tratament complet personalizat",
      "Investigații radiologice complete",
      "Certificat de calitate al materialului",
      "Controale periodice fără obligație financiară",
    ],
  },
  {
    name: "Hollywood Smile Plus",
    count: "20",
    unit: "fațete dentare premium",
    description:
      "Pentru un zâmbet integral uniform, luminos și armonios — sus și jos.",
    price: "€X.000",
    includes: [
      "Consultație de specialitate fără obligație financiară",
      "Plan de tratament complet personalizat",
      "Investigații radiologice complete",
      "Certificat de calitate al materialului",
      "Controale periodice fără obligație financiară",
    ],
  },
];

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="border border-gray-separator p-8 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-10">
        <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
          {pkg.name}
        </h3>
        <p className="mt-3 text-sm font-medium uppercase tracking-premium text-gray-subtle">
          {pkg.count} {pkg.unit}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
          {pkg.description}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="mt-6 flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
        >
          {open ? "Ascunde detalii" : "Ce conține pachetul"}
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2 border-t border-gray-separator pt-4">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[14px] text-gray-text"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-end justify-between">
          <span className="font-serif text-3xl font-light text-foreground md:text-4xl">
            {pkg.price}
          </span>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center px-6 text-[13px] font-medium uppercase tracking-premium text-white bg-black transition-opacity hover:opacity-80"
          >
            Alege pachetul
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function PackagesSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <ScrollReveal>
          <p className="text-center text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
            Pachete
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-light text-foreground md:text-5xl">
            Alege pachetul potrivit
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-gray-subtle">
            Plata în rate disponibilă prin partenerii noștri bancari
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-center">
            <Link
              href="/tarife"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
            >
              Vedeți toate tarifele
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
