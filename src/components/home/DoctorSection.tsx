"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const LEAD_DOCTOR = {
  name: "Dr. Șofineți\nIvan Marian",
  role: "Fondator · Estetică Dentară",
  bio: "Cu o pasiune profundă pentru excelența în stomatologie, Dr. Șofineți a fondat Central Dental Clinic cu o viziune clară: să ofere fiecărui pacient tratamente de cea mai înaltă calitate, într-un mediu construit pe încredere și atenție la detalii.",
  imageLabel:
    "PORTRET EDITORIAL — Dr. Șofineți Ivan Marian. Bust sau 3/4, privire directă în cameră, fundal neutru, iluminare laterală premium.",
};

const TEAM_MEMBERS = [
  {
    name: "Dr. Brigitta",
    role: "Ortodonție",
    bio: "Specializată în ortodonție modernă, Dr. Brigitta oferă soluții personalizate pentru alinierea dinților — de la alignere transparente la aparate estetice — cu atenție la confort și rezultate de durată.",
    imageLabel: "PORTRET — Dr. Brigitta. Bust, stil consistent cu echipa.",
  },
  {
    name: "Dr. Andreea",
    role: "Parodontologie",
    bio: "Cu experiență în tratamentul și prevenirea afecțiunilor gingivale, Dr. Andreea pune accent pe sănătatea pe termen lung a țesuturilor de suport ale dinților.",
    imageLabel: "PORTRET — Dr. Andreea. Bust, stil consistent cu echipa.",
  },
  {
    name: "Dr. Ionela",
    role: "Pedodonție",
    bio: "Dedicată îngrijirii dentare a celor mici, Dr. Ionela transformă fiecare vizită la dentist într-o experiență pozitivă, fără frică, adaptată nevoilor copiilor.",
    imageLabel: "PORTRET — Dr. Ionela. Bust, stil consistent cu echipa.",
  },
  {
    name: "Dr. Ionuț",
    role: "Endodonție\n& Chirurgie",
    bio: "Specializat în tratamente de canal și intervenții chirurgicale orale, Dr. Ionuț combină precizia cu tehnologia modernă pentru rezultate predictibile.",
    imageLabel: "PORTRET — Dr. Ionuț. Bust, stil consistent cu echipa.",
  },
];

type Doctor = typeof LEAD_DOCTOR | (typeof TEAM_MEMBERS)[number];

export function DoctorSection() {
  const [selected, setSelected] = useState<Doctor | null>(null);
  const active = selected ?? LEAD_DOCTOR;

  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <ScrollReveal>
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ImagePlaceholder
                    label={active.imageLabel}
                    aspectRatio="aspect-[3/4]"
                    className="w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                  {active.role.replace("\n", " ")}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
                  {active.name.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-gray-text">
                  {active.bio}
                </p>
              </motion.div>
            </AnimatePresence>

            {selected && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSelected(null)}
                className="mt-6 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
              >
                ← Înapoi la Dr. Șofineți
              </motion.button>
            )}

            <ScrollReveal delay={0.15}>
              <div className="mt-14">
                <p className="mb-6 text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                  Echipa
                </p>
                <div className="grid grid-cols-4 gap-4 md:gap-6">
                  {TEAM_MEMBERS.map((member) => (
                    <button
                      key={member.name}
                      onClick={() =>
                        setSelected(
                          selected?.name === member.name ? null : member
                        )
                      }
                      className="group text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`mx-auto transition-shadow duration-300 ${
                          selected?.name === member.name
                            ? "ring-2 ring-foreground ring-offset-2"
                            : "group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                        }`}
                      >
                        <ImagePlaceholder
                          label={`Portret ${member.name}`}
                          aspectRatio="aspect-square"
                          className="!h-16 !w-16 rounded-full md:!h-20 md:!w-20"
                        />
                      </motion.div>
                      <p className="mt-2 text-[12px] font-medium text-foreground md:text-[13px]">
                        {member.name}
                      </p>
                      <p className="whitespace-pre-line text-[11px] leading-tight text-gray-subtle md:text-[12px]">
                        {member.role}
                      </p>
                    </button>
                  ))}
                </div>
                <Link
                  href="/despre-noi"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-gray-subtle transition-colors hover:text-foreground"
                >
                  Cunoaște echipa
                  <svg
                    className="h-3 w-3"
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
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
