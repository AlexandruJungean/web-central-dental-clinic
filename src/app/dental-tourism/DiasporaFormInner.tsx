"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/lib/actions";

const TREATMENTS = [
  "Fațete dentare",
  "Implantologie (All-on-4 / All-on-6)",
  "Ortodonție",
  "Reabilitare totală",
  "Albire dentară",
  "Altele / Nu sunt sigur",
];

const COUNTRIES = [
  "Italia",
  "Spania",
  "Germania",
  "Regatul Unit",
  "Franța",
  "Belgia",
  "Austria",
  "Olanda",
  "Irlanda",
  "Danemarca",
  "Norvegia",
  "Suedia",
  "Elveția",
  "Canada",
  "SUA",
  "Altă țară",
];

const VISIT_PERIODS = [
  "Cât mai curând posibil",
  "În următoarele 1-2 luni",
  "În următoarele 3-6 luni",
  "La vacanța de vară",
  "La vacanța de iarnă",
  "Nu m-am decis încă",
];

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/60";

const selectClass =
  "w-full appearance-none border-b border-white/20 bg-transparent py-3 text-[15px] text-white/30 outline-none transition-colors focus:border-white/60 focus:text-white [&:not([value=''])]:text-white";

export function DiasporaFormInner() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const country = fd.get("country") as string;
    const period = fd.get("period") as string;

    startTransition(async () => {
      const result = await submitContactForm({
        name: fd.get("name") as string,
        phone: fd.get("phone") as string,
        email: fd.get("email") as string,
        treatment: fd.get("treatment") as string,
        message: [
          `Țara: ${country}`,
          `Perioadă vizită: ${period}`,
          fd.get("message") ? `Mesaj: ${fd.get("message")}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
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
      <div className="flex flex-col items-start gap-4 py-12 text-white">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-serif text-2xl font-light">Mulțumim!</h3>
        <p className="text-[15px] leading-relaxed text-white/60">
          Am primit solicitarea dumneavoastră. Veți primi un email de confirmare,
          iar echipa noastră vă va contacta în cel mai scurt timp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white/40 transition-colors hover:text-white"
        >
          Trimite o altă solicitare
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input name="name" type="text" placeholder="Nume" required className={inputClass} />
      <input name="phone" type="tel" placeholder="Telefon sau WhatsApp" required className={inputClass} />
      <input name="email" type="email" placeholder="Email" required className={inputClass} />

      <select name="country" required defaultValue="" className={selectClass}>
        <option value="" disabled>Țara de reședință</option>
        {COUNTRIES.map((c) => (
          <option key={c} value={c} className="bg-black text-white">{c}</option>
        ))}
      </select>

      <select name="treatment" required defaultValue="" className={selectClass}>
        <option value="" disabled>Tratament dorit</option>
        {TREATMENTS.map((t) => (
          <option key={t} value={t} className="bg-black text-white">{t}</option>
        ))}
      </select>

      <select name="period" required defaultValue="" className={selectClass}>
        <option value="" disabled>Când planificați vizita</option>
        {VISIT_PERIODS.map((p) => (
          <option key={p} value={p} className="bg-black text-white">{p}</option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Descrieți pe scurt situația dumneavoastră (opțional)"
        rows={3}
        className={`resize-none ${inputClass}`}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">
          A apărut o eroare. Vă rugăm să ne contactați pe WhatsApp.
        </p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-[0.12em] bg-white text-black transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {isPending ? "Se trimite..." : "Trimite solicitarea"}
        </button>
      </div>
    </form>
  );
}
