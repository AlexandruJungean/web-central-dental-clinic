"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GOOGLE_RATING, REVIEWS } from "@/lib/reviews";

const AUTOPLAY_MS = 6000;
const RESUME_MS = 8000;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} din 5 stele`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-foreground" : "text-gray-separator"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const safeIndex = index < REVIEWS.length ? index : 0;
  const review = REVIEWS[safeIndex];

  const pauseTemporarily = useCallback(() => {
    setPaused(true);
    if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    resumeTimeout.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  const goTo = useCallback(
    (nextIndex: number, dir: number) => {
      setDirection(dir);
      setIndex(((nextIndex % REVIEWS.length) + REVIEWS.length) % REVIEWS.length);
      pauseTemporarily();
    },
    [pauseTemporarily]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REVIEWS.length);
    pauseTemporarily();
  }, [pauseTemporarily]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    pauseTemporarily();
  }, [pauseTemporarily]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [paused, inView]);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative min-h-[320px] overflow-hidden bg-white p-8 md:min-h-[380px] md:p-10"
        aria-roledescription="carousel"
        aria-label="Recenzii pacienți"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current == null) return;
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (delta < -50) goNext();
          if (delta > 50) goPrev();
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={safeIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex h-full min-h-[260px] flex-col justify-between md:min-h-[300px]"
            aria-live="polite"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <Stars rating={review.rating} />
                <span className="text-[11px] font-medium uppercase tracking-premium text-gray-subtle">
                  Recenzie Google
                </span>
              </div>
              <p className="mt-6 font-serif text-lg font-light italic leading-relaxed text-foreground md:text-xl lg:text-[1.35rem] lg:leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <cite className="text-[14px] font-medium not-italic text-foreground">
                {review.name}
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          {REVIEWS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i, i > safeIndex ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === safeIndex
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Recenzia ${i + 1} din ${REVIEWS.length}`}
              aria-current={i === safeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center border border-gray-separator text-foreground transition-colors hover:bg-white"
            aria-label="Recenzia anterioară"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center border border-gray-separator text-foreground transition-colors hover:bg-white"
            aria-label="Recenzia următoare"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-gray-bg section-padding overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Recenzii
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
              Ce spun pacienții
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="font-serif text-6xl font-light text-foreground md:text-7xl">
                {GOOGLE_RATING.value}
              </span>
              <div className="flex flex-col items-start gap-1">
                <Stars rating={5} />
                <span className="text-sm text-gray-subtle">
                  {GOOGLE_RATING.count} recenzii pe Google
                </span>
              </div>
            </div>

            <div className="mt-10">
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
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <ReviewsCarousel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
