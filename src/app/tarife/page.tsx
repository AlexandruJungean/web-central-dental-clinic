import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tarife — Central Dental Clinic",
  description:
    "Tarife estimative pentru toate tratamentele stomatologice la Central Dental Clinic, Sighetu Marmației. Prețuri transparente, fără costuri ascunse.",
};

type PriceItem = {
  service: string;
  includes: string;
  price: string;
};

type PriceSection = {
  number: string;
  name: string;
  items: PriceItem[];
  note?: string;
};

const PRICING_SECTIONS: PriceSection[] = [
  {
    number: "01",
    name: "Consultație & Diagnostic",
    items: [
      {
        service: "Consultație clinică",
        includes:
          "Consultație inițială cu medicul specialist, evaluare clinică completă, discuție despre simptome, obiective și opțiuni de tratament. Recomandări sau bilete de trimitere pentru investigații suplimentare necesare diagnosticului complet.",
        price: "250 lei",
      },
      {
        service: "Consultație internațională (non-rezident)",
        includes:
          "Sesiune completă, la distanță sau în clinică, cu un medic din rețeaua internațională extinsă.",
        price: "400 lei",
      },
      {
        service: "Diagnostic complet",
        includes:
          "CBCT, scanări faciale și intraorale, fotografii HD — integrate într-un dosar digital complet. Include toate costurile investigațiilor necesare cazului.",
        price: "1.000 lei",
      },
    ],
  },
  {
    number: "02",
    name: "Planificare & Design de Zâmbet",
    items: [
      {
        service: `Planificare & Design „One Vision"`,
        includes:
          "Design 3D al zâmbetului realizat cu Smilecloud, plus plan funcțional explicat video, cu raționamente biologice și estetice.",
        price: "750 lei",
      },
    ],
  },
  {
    number: "03",
    name: "Tratamente de Rutină",
    items: [
      {
        service: "Obturații compozite — zona posterioară",
        includes:
          "Plombe estetice stratificate cu morfologie naturală, pentru premolari și molari.",
        price: "400 – 600 lei",
      },
      {
        service: "Fațetări directe cu compozit",
        includes:
          "Restaurări estetice realizate direct în cabinet, prin tehnici de stratificare a compozitului în zona estetică — pentru îmbunătățirea formei, culorii și armoniei zâmbetului.",
        price: "600 – 800 lei",
      },
      {
        service: "Terapie endodontică (microscop)",
        includes:
          "Curățare și închidere sub microscop. Include obturația de compozit a dintelui și, dacă este cazul, pivotul de metal sau fibră de sticlă.",
        price: "650 – 1.000 lei",
      },
      {
        service: "Reconstrucție post-endodontică",
        includes:
          "Pivoți metalici sau fibră de sticlă + obturație din compozit pentru reconstrucție coronară. Se adaugă la costul tratamentului endodontic.",
        price: "400 – 600 lei",
      },
      {
        service: "Extracție molar de minte",
        includes:
          "De la erupți complet la incluși. Prețul variază în funcție de complexitatea cazului.",
        price: "400 – 600 lei",
      },
    ],
  },
  {
    number: "04",
    name: "Estetică Restaurativă",
    items: [
      {
        service: "Element ceramic",
        includes:
          "Restaurare estetică premium — design digital, frezare monolitică sau stratificare manuală, finisaj realizat de tehnician dentar. Materialul (compozit hibrid, ceramică feldspatică sau zirconiu) se alege împreună cu medicul în funcție de caz și buget.",
        price: "€300 – €600",
      },
    ],
  },
  {
    number: "05",
    name: "Implantologie",
    note: "Pachete complete pentru reabilitare totală (All‑on‑4, All‑on‑6) sunt disponibile la cerere. Solicită o consultație pentru un deviz personalizat.",
    items: [
      {
        service: "Implant unic (IML)",
        includes: "Inserare chirurgicală. Coroana nu este inclusă.",
        price: "€500",
      },
      {
        service: "Implant unic (BREDENT)",
        includes: "Inserare chirurgicală. Coroana nu este inclusă.",
        price: "€650",
      },
      {
        service: "Coroană provizorie",
        includes: "Restaurare temporară în perioada de integrare a implantului.",
        price: "€50",
      },
      {
        service: "Bont + componente",
        includes:
          "Bont fizionomic, componente din sistem personalizat în funcție de caz.",
        price: "€150 – €300",
      },
      {
        service: "Grefă de țesut moale",
        includes: "Situațional, pentru optimizarea esteticii peri-implantare.",
        price: "€100",
      },
      {
        service: "GBR / Sinus Lift",
        includes:
          "Grefă osoasă sau augmentare sinusală pentru susținerea implantului. Situațional.",
        price: "€600 – €800",
      },
      {
        service: "PRF (add-on)",
        includes:
          "Protocol cu fibrină autologă pentru vindecare și integrare optimă.",
        price: "€200",
      },
    ],
  },
  {
    number: "06",
    name: "Proceduri Parodontale Estetice",
    items: [
      {
        service: "Reconturare gingivală ghidată",
        includes:
          "Remodelare gingivală ghidată digital, pe baza designului final al zâmbetului.",
        price: "€800",
      },
    ],
  },
  {
    number: "07",
    name: "Ortodonție",
    items: [
      {
        service: "Gutiere transparente",
        includes:
          "Invisalign, Spark sau ClearCorrect. Planificare digitală și staging personalizat.",
        price: "€1.200 – €4.500",
      },
      {
        service: "Aparat fix",
        includes:
          "Brackets metalici sau ceramici, aplicare. Activările nu sunt incluse.",
        price: "€800 (clasic) – €1.100 (safir)",
      },
    ],
  },
  {
    number: "08",
    name: "Întreținere & Albire",
    items: [
      {
        service: "Igienizare profesională",
        includes: "Detartraj ultrasonic și manual, lustruire.",
        price: "400 – 550 lei",
      },
      {
        service: "Sesiune igienă parodontală",
        includes:
          "Curățare subgingivală, întreținere pentru pacienți cu boală parodontală.",
        price: "120 – 150 lei / dinte",
      },
      {
        service: "Albire profesională în cabinet",
        includes:
          "Albire cu protocol izolat și control al sensibilității (lampă Philips Zoom).",
        price: "1.500 lei",
      },
      {
        service: "Albire profesională în cabinet + gutiere",
        includes:
          "Albire cu protocol izolat (lampă Philips Zoom) plus gutiere pentru intensificarea efectului acasă.",
        price: "2.200 lei",
      },
    ],
  },
  {
    number: "09",
    name: "Sedare & Anestezie",
    items: [
      {
        service: "Sedare intravenoasă conștientă",
        includes:
          "Administrată și monitorizată pe durata intervenției pentru confort maxim.",
        price: "€600",
      },
      {
        service: "Anestezie generală",
        includes:
          "Anestezie completă sub supraveghere medicală, utilizată în cazuri complexe sau la pacienți cu anxietate ridicată.",
        price: "€800",
      },
    ],
  },
];

export default function TarifePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Tarife
            </p>
            <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-6xl">
              Tarife estimative
            </h1>
            <p className="mt-6 max-w-[640px] text-[15px] leading-relaxed text-gray-text md:text-[16px]">
              Toate prețurile sunt orientative și menite să ofere claritate
              asupra categoriilor de tratamente. Estimările finale sunt stabilite
              în urma diagnosticului și a unui plan personalizat.
            </p>
            <p className="mt-3 max-w-[640px] text-[14px] italic leading-relaxed text-gray-subtle">
              Plata în rate este disponibilă prin partenerii noștri bancari.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing sections */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          {PRICING_SECTIONS.map((section) => (
            <ScrollReveal key={section.number}>
              <div className="mt-28 first:mt-0 md:mt-40">
                {/* Section header */}
                <div className="flex items-baseline gap-5 border-b border-foreground pb-5 md:gap-7">
                  <span className="font-serif text-3xl font-light text-gray-subtle md:text-5xl">
                    {section.number}
                  </span>
                  <h2 className="font-serif text-2xl font-light text-foreground md:text-4xl">
                    {section.name}
                  </h2>
                </div>

                {/* Optional note */}
                {section.note && (
                  <p className="mt-4 text-[14px] italic leading-relaxed text-gray-text">
                    {section.note}
                  </p>
                )}

                {/* Column labels */}
                <div className="mt-6 hidden grid-cols-[2fr_3fr_1fr] gap-6 border-b border-gray-separator pb-3 text-[12px] font-medium uppercase tracking-premium text-gray-subtle md:grid">
                  <span>Serviciu</span>
                  <span>Ce include</span>
                  <span className="text-right">Tarif</span>
                </div>

                {/* Items */}
                <div>
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="grid gap-2 border-b border-gray-separator py-6 md:grid-cols-[2fr_3fr_1fr] md:gap-6"
                    >
                      <p className="font-serif text-[17px] font-light text-foreground md:text-[18px]">
                        {item.service}
                      </p>
                      <p className="text-[14px] leading-relaxed text-gray-text">
                        {item.includes}
                      </p>
                      <p className="text-[15px] font-medium text-foreground md:text-right md:text-[16px]">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Plata in rate */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 mx-auto max-w-[700px] px-6 text-center md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Soluții financiare
            </p>
            <h2 className="mt-3 font-serif text-2xl font-light text-foreground md:text-3xl">
              Plata în rate
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-text">
              Tratamentele pot fi achitate în rate lunare prin partenerii noștri
              bancari. Detaliile se stabilesc la consultație, în funcție de
              valoarea totală a planului de tratament.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black section-padding">
        <div className="mx-auto max-w-[600px] px-6 text-center md:px-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Hai să discutăm despre
              <br />
              zâmbetul tău
            </h2>
            <p className="mt-4 text-[15px] text-white/50">
              Programează o consultație și primești un plan de tratament
              personalizat, cu deviz estimativ clar.
            </p>
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
