"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/tratamente", label: "Tratamente" },
  { href: "/tarife", label: "Tarife" },
  { href: "/testimoniale", label: "Testimoniale" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Central Dental Clinic"
              width={36}
              height={36}
              className={`transition-all duration-500 ${scrolled ? "" : "invert brightness-0 md:invert-0 md:brightness-100"}`}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-subtle hover:text-foreground"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center px-6 text-[13px] font-medium uppercase tracking-[0.12em] text-white bg-black transition-opacity hover:opacity-80"
            >
              Programează-te
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-[1px] w-5 bg-current transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[3.5px] rotate-45 text-white"
                  : scrolled ? "text-foreground" : "text-foreground"
              }`}
            />
            <span
              className={`block h-[1px] w-5 bg-current transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-[3.5px] -rotate-45 text-white"
                  : scrolled ? "text-foreground" : "text-foreground"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex h-12 items-center border border-white px-8 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Programează-te
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
