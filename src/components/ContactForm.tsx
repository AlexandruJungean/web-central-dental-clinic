"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/lib/actions";
import { TREATMENTS } from "@/lib/constants";

interface ContactFormProps {
  variant?: "dark" | "light";
}

export function ContactForm({ variant = "light" }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const isDark = variant === "dark";

  const inputClass = isDark
    ? "w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60"
    : "w-full border-b border-gray-separator bg-transparent py-3 text-[15px] text-foreground placeholder:text-gray-subtle outline-none transition-colors focus:border-foreground";

  const selectClass = isDark
    ? "w-full appearance-none border-b border-white/20 bg-transparent py-3 text-[15px] text-white/30 outline-none transition-colors focus:border-white/60 focus:text-white [&:not([value=''])]:text-white"
    : "w-full appearance-none border-b border-gray-separator bg-transparent py-3 text-[15px] text-gray-subtle outline-none transition-colors focus:border-foreground focus:text-foreground [&:not([value=''])]:text-foreground";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitContactForm({
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        treatment: formData.get("treatment") as string,
        message: (formData.get("message") as string) || undefined,
      });

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    });
  }

  if (status === "success") {
    return (
      <div className={`flex flex-col items-start gap-4 py-12 ${isDark ? "text-white" : "text-foreground"}`}>
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-serif text-2xl font-light">Mulțumim!</h3>
        <p className={`text-[15px] leading-relaxed ${isDark ? "text-white/60" : "text-gray-text"}`}>
          Am primit solicitarea dumneavoastră. Veți primi un email de confirmare,
          iar echipa noastră vă va contacta în cel mai scurt timp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className={`mt-4 text-[13px] font-medium uppercase tracking-premium transition-colors ${isDark ? "text-white/40 hover:text-white" : "text-gray-subtle hover:text-foreground"}`}
        >
          Trimite o altă solicitare
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input name="name" type="text" placeholder="Nume" required className={inputClass} />
      </div>
      <div>
        <input name="phone" type="tel" placeholder="Telefon sau WhatsApp" required className={inputClass} />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" required className={inputClass} />
      </div>
      <div>
        <select name="treatment" required defaultValue="" className={selectClass}>
          <option value="" disabled>Tratament dorit</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t} className={isDark ? "bg-black text-white" : "bg-white text-foreground"}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Mesaj (opțional)"
          rows={3}
          className={`resize-none ${inputClass}`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          A apărut o eroare. Vă rugăm să ne contactați telefonic la +40 749 165 211.
        </p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className={`inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium transition-opacity hover:opacity-80 disabled:opacity-50 ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {isPending ? "Se trimite..." : "Programează-te"}
        </button>
      </div>
    </form>
  );
}
