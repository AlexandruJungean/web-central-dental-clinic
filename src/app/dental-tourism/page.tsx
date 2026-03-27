import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CONTACT } from "@/lib/constants";
import { DiasporaFormInner } from "./DiasporaFormInner";

export const metadata: Metadata = {
  title: "Turism Dentar - Central Dental Clinic | Sighetu Marmației",
  description:
    "Tratamente stomatologice premium la prețuri corecte în Sighetu Marmației. Pachete complete pentru românii din diaspora. Fațete dentare, implantologie, All-on-4.",
  openGraph: {
    title: "Vino acasă cu un zâmbet nou - Central Dental Clinic",
    description:
      "Tratamente premium la prețuri de 2-3x mai mici decât în Europa de Vest. Pachete complete, planificare de la distanță.",
  },
};

const BENEFITS = [
  {
    number: "01",
    title: "Prețuri corecte",
    text: "Aceleași materiale și echipamente premium ca în clinicile din Vest, la prețuri de 2-3 ori mai mici.",
  },
  {
    number: "02",
    title: "Planificare de la distanță",
    text: "Ne trimiți fotografii și radiografii pe WhatsApp, primești plan de tratament și preț înainte de a pleca din țara de reședință.",
  },
  {
    number: "03",
    title: "Vizită + tratament",
    text: "Vii acasă la familie și rezolvi și dinții. Programul nostru se adaptează vizitelor de vacanță.",
  },
  {
    number: "04",
    title: "Monitorizare continuă",
    text: "După tratament, rămânem în contact. Orice nelămurire se rezolvă rapid, indiferent unde te afli.",
  },
];

const PACKAGES = [
  {
    name: "Hollywood Smile",
    detail: "10 fațete ceramice premium",
    price: "€X.XXX",
    includes: [
      "Consultație fără obligație financiară",
      "Plan de tratament personalizat",
      "Investigații radiologice complete",
      "10 fațete ceramice E-max",
      "Certificat de calitate material",
      "Controale periodice incluse",
    ],
  },
  {
    name: "Hollywood Smile Plus",
    detail: "20 fațete ceramice premium",
    price: "€X.XXX",
    includes: [
      "Consultație fără obligație financiară",
      "Plan de tratament personalizat",
      "Investigații radiologice complete",
      "20 fațete ceramice E-max",
      "Certificat de calitate material",
      "Controale periodice incluse",
    ],
  },
  {
    name: "All‑on‑4",
    detail: "Dantură fixă pe 4 implanturi",
    price: "€X.XXX",
    includes: [
      "Evaluare pe tomografie 3D",
      "Plan de tratament personalizat",
      "Inserarea a 4 implanturi dentare",
      "Lucrare dentară provizorie",
      "Monitorizare post-operatorie 1 an",
      "Lucrare definitivă",
    ],
  },
  {
    name: "All‑on‑6",
    detail: "Dantură fixă pe 6 implanturi",
    price: "€X.XXX",
    includes: [
      "Evaluare pe tomografie 3D",
      "Plan de tratament personalizat",
      "Inserarea a 6 implanturi dentare",
      "Lucrare dentară provizorie",
      "Monitorizare post-operatorie 1 an",
      "Lucrare definitivă",
    ],
  },
];

const STEPS = [
  {
    number: "01",
    title: "Ne contactezi",
    text: "Scrie-ne pe WhatsApp sau completează formularul de pe această pagină.",
  },
  {
    number: "02",
    title: "Evaluare la distanță",
    text: "Ne trimiți fotografii ale danturii și, dacă ai, radiografii recente.",
  },
  {
    number: "03",
    title: "Plan de tratament + preț",
    text: "Primești un plan detaliat cu etapele tratamentului și prețul exact în EUR.",
  },
  {
    number: "04",
    title: "Planifici vizita",
    text: "Alegi perioada care ți se potrivește. Te ajutăm cu recomandări de cazare.",
  },
  {
    number: "05",
    title: "Tratament",
    text: "La sosire, consultație, confirmare plan și începerea tratamentului.",
  },
];

const FAQ = [
  {
    q: "Cum pot fi evaluat de la distanță?",
    a: "Ne trimiți pe WhatsApp sau email fotografii ale danturii (față, profil, deschis) și, dacă ai, o radiografie panoramică recentă. Pe baza acestora, medicul stabilește un plan preliminar de tratament.",
  },
  {
    q: "Câte vizite sunt necesare?",
    a: "Depinde de tratament. Fațetele ceramice necesită de regulă 2 vizite (la interval de 7-10 zile). Implanturile necesită minim 2 vizite cu o perioadă de vindecare între ele. La evaluare, veți primi un calendar exact.",
  },
  {
    q: "Ce se întâmplă dacă apare o problemă după ce plec?",
    a: "Rămânem în contact permanent. Problemele minore se pot rezolva prin consultație online. Pentru orice necesită intervenție, vă programăm prioritar la următoarea vizită.",
  },
  {
    q: "Pot plăti în euro?",
    a: "Da. Toate pachetele noastre pentru pacienții din diaspora au prețuri fixe în EUR. Acceptăm și plata în lei sau plata cu cardul.",
  },
  {
    q: "Plata în rate este disponibilă?",
    a: "Da. Oferim plata în rate prin partenerii noștri bancari. Detaliile se stabilesc la consultație.",
  },
  {
    q: "Există garanție pentru tratamente?",
    a: "Da. Toate lucrările protetice și implanturile vin cu garanție. Durata garanției variază în funcție de tipul tratamentului și se comunică în scris.",
  },
  {
    q: "Recomandați cazare în Sighetu Marmației?",
    a: "Da, vă putem recomanda opțiuni de cazare potrivite bugetului și preferințelor dumneavoastră - de la pensiuni tradiționale maramureșene la hoteluri moderne.",
  },
  {
    q: "Cât durează tratamentul în total?",
    a: "Fațetele ceramice: 7-14 zile. Implanturile: prima vizită 3-5 zile, apoi o perioadă de vindecare de 3-6 luni, urmată de a doua vizită pentru lucrarea definitivă (3-5 zile).",
  },
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

export default function DentalTourismPage() {
  return (
    <>
      {/* S1 - Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-32 pb-20 md:px-10">
          <div className="max-w-[650px]">
            <ScrollReveal>
              <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
                Turism dentar · Sighetu Marmației
              </p>
              <h1 className="mt-4 font-serif text-4xl font-light text-foreground md:text-6xl lg:text-7xl">
                Vino acasă cu
                <br />
                un zâmbet nou
              </h1>
              <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-gray-text">
                Tratamente stomatologice premium la prețuri corecte, chiar în
                inima Maramureșului. Planifici totul de la distanță, vii acasă
                la familie și pleci cu un zâmbet nou.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#formular"
                  className="inline-flex h-12 items-center justify-center px-10 text-[13px] font-medium uppercase tracking-premium bg-black text-white transition-opacity hover:opacity-80"
                >
                  Solicită o evaluare
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-foreground/20 px-8 text-[13px] font-medium uppercase tracking-premium text-foreground transition-colors hover:bg-foreground hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* S2 - De ce noi */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              De ce Central Dental Clinic
            </p>
            <h2 className="mt-3 max-w-[500px] font-serif text-3xl font-light text-foreground md:text-4xl">
              Tot ce ai nevoie, într-un singur loc
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-0 border-t border-gray-separator md:grid-cols-2">
            {BENEFITS.map((benefit, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={benefit.number} delay={i * 0.08}>
                  <div
                    className={`border-b border-gray-separator py-8 md:py-10 ${
                      isLeft
                        ? "md:border-r md:pr-10"
                        : "md:pl-10"
                    }`}
                  >
                    <span className="text-[13px] font-medium tracking-premium text-gray-subtle">
                      {benefit.number}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-light text-foreground md:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-text">
                      {benefit.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* S3 - Pachete EUR */}
      <section className="bg-gray-bg section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Pachete cu prețuri fixe în EUR
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
              Alege pachetul potrivit
            </h2>
            <p className="mt-3 text-[15px] text-gray-text">
              Prețurile sunt finale și includ toate materialele, controalele și
              monitorizarea post-tratament.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between bg-white p-8 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-10">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-premium text-gray-subtle">
                      {pkg.detail}
                    </p>
                    <ul className="mt-6 space-y-2">
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
                    </ul>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <span className="font-serif text-3xl font-light text-foreground">
                      {pkg.price}
                    </span>
                    <a
                      href="#formular"
                      className="inline-flex h-10 items-center px-6 text-[13px] font-medium uppercase tracking-premium text-white bg-black transition-opacity hover:opacity-80"
                    >
                      Solicită
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-center text-sm text-gray-subtle">
              Plata în rate disponibilă prin partenerii noștri bancari
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* S4 - Cum funcționează */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Proces simplu
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
              Cum funcționează
            </h2>
          </ScrollReveal>

          <div className="mt-14 space-y-0">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-gray-separator py-8 md:gap-10">
                  <span className="font-serif text-3xl font-light text-gray-separator md:text-4xl">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-text">
                      {step.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S5 - Before/After */}
      <section className="bg-black section-padding">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <ScrollReveal>
            <p className="mb-3 text-center text-[13px] font-medium uppercase tracking-premium text-white/40">
              Rezultate reale
            </p>
            <h2 className="text-center font-serif text-3xl font-light text-white md:text-4xl">
              Transformări reale
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  <ImagePlaceholder
                    label="BEFORE - Pacient diaspora, caz fațete"
                    aspectRatio="aspect-square"
                    className="!border-white/20 !bg-white/5 !text-white/50"
                  />
                  <ImagePlaceholder
                    label="AFTER - Același pacient, după tratament"
                    aspectRatio="aspect-square"
                    className="!border-white/20 !bg-white/5 !text-white/50"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-white/40">
                  Fațete ceramice - Pacient din Italia
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  <ImagePlaceholder
                    label="BEFORE - Pacient diaspora, caz implantologie"
                    aspectRatio="aspect-square"
                    className="!border-white/20 !bg-white/5 !text-white/50"
                  />
                  <ImagePlaceholder
                    label="AFTER - Același pacient, după tratament"
                    aspectRatio="aspect-square"
                    className="!border-white/20 !bg-white/5 !text-white/50"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-white/40">
                  All‑on‑4 - Pacient din Germania
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* S6 - Testimonial video */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url(/images/marble-bg.png)" }}
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 mx-auto max-w-[800px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-center text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Testimonial
            </p>
            <h2 className="mt-3 text-center font-serif text-3xl font-light text-foreground md:text-4xl">
              Ce spun pacienții din diaspora
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 overflow-hidden">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed/aZIiVDFbrgM"
                  title="Testimonial pacient diaspora"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-subtle">
              Pacient din Italia - Fațete dentare ceramice
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* S7 - FAQ */}
      <section className="bg-gray-bg section-padding">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
              Tot ce trebuie să știi
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-0">
            {FAQ.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <details className="group border-t border-gray-separator last:border-b">
                  <summary className="flex cursor-pointer items-center justify-between py-6 text-foreground transition-colors hover:text-foreground/70">
                    <h3 className="pr-4 font-serif text-lg font-light md:text-xl">
                      {item.q}
                    </h3>
                    <svg
                      className="h-4 w-4 shrink-0 text-gray-subtle transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="pb-6 text-[15px] leading-relaxed text-gray-text">
                    {item.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S8 - Formular dedicat diaspora */}
      <section id="formular" className="bg-black section-padding">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <ScrollReveal>
                <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                  Solicită o evaluare
                </p>
                <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-5xl">
                  Primul pas spre
                  <br />
                  zâmbetul nou
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                  Completează formularul și te contactăm în cel mai scurt timp
                  pentru a discuta despre planul de tratament.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-12">
                  <DiasporaFormInner />
                </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col justify-between">
              <ScrollReveal delay={0.1}>
                <div className="space-y-8">
                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                      WhatsApp
                    </p>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block font-serif text-2xl font-light text-white/80 transition-colors hover:text-white"
                    >
                      {CONTACT.phone}
                    </a>
                    <p className="mt-1 text-[14px] text-white/40">
                      Scrie-ne oricând, răspundem rapid
                    </p>
                  </div>

                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-2 block text-[15px] text-white/70 transition-colors hover:text-white"
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-premium text-white/40">
                      Locație
                    </p>
                    <p className="mt-2 text-[15px] text-white/70">
                      {CONTACT.address.street}
                      <br />
                      {CONTACT.address.city}
                    </p>
                    <p className="mt-3 text-[14px] text-white/40">
                      Cel mai apropiat aeroport: Cluj-Napoca (~170 km)
                      <br />
                      Alternativ: Baia Mare (~60 km)
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="mt-12">
                  <a
                    href={CONTACT.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-premium text-white/40 transition-colors hover:text-white"
                  >
                    Deschide în Google Maps
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

