"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/marble-bg.png)" }}
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="Central Dental Clinic"
            width={80}
            height={80}
            priority
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 font-serif text-4xl font-light tracking-[0.04em] text-black md:text-6xl lg:text-7xl"
        >
          CENTRAL
          <br />
          DENTAL CLINIC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-4 font-serif text-lg italic text-gray-subtle md:text-xl"
        >
          By Dr. Șofineți Ivan Marian
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-[0.12em] text-white bg-black transition-opacity hover:opacity-80"
          >
            Programează o consultație
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-subtle">
            Scroll
          </span>
          <div className="h-8 w-px bg-gray-separator" />
        </motion.div>
      </motion.div>
    </section>
  );
}
