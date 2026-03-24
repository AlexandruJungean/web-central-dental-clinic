import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustNumbers />
      <BentoServices />
      <AtuuriSection />
      <AboutTeaser />
      <BeforeAfterShowcase />
      <TeamSection />
      <SuccessStories />
      <TestimonialsSection />
      <PackagesSection />
      <ConsultationBand />
      <TrustBand />
      <DentalTourismTeaser />
      <ContactSection />
      <ClosingCTA />
    </main>
  );
}

/* ═══ S1 — HERO ═══ */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="HERO — Fotografie cinematică a clinicii sau a echipei medicale (wide, min 1920px)"
          aspect="auto"
          className="h-full w-full rounded-none opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-6 pb-20 lg:pb-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
          Sighetu Marmației, Maramureș
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Nu mai trebuie să pleci din Maramureș pentru un
          <span className="text-brand-light"> zâmbet perfect.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Am adus stomatologia de nivel european chiar la tine acasă.
          Pentru tine, pentru familia ta, pentru zâmbetul pe care ți-l dorești.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Vreau o programare
          </Link>
          <a
            href="tel:+40749165211"
            className="rounded-full border border-slate-600 px-8 py-4 text-sm font-medium text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
          >
            +40 749 165 211
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══ S2 — NUMERE DE ÎNCREDERE ═══ */
function TrustNumbers() {
  const stats = [
    { number: "10+", label: "ani de practică" },
    { number: "5.000+", label: "pacienți mulțumiți" },
    { number: "8", label: "medici specialiști" },
    { number: "4.9", label: "rating Google" },
  ];
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-10 text-center">
            <p className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
              {s.number}
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══ S3 — SERVICII (bento grid) ═══ */
function BentoServices() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Tratamente
        </p>
        <h2 className="mt-3 max-w-md text-3xl font-bold leading-snug text-foreground sm:text-4xl">
          Ce putem face pentru tine
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large featured card — spans 2 rows */}
          <Link
            href="/tratamente/fatete-dentare"
            className="group row-span-2 flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-xl"
          >
            <ImagePlaceholder
              label="Imagine — Fațete dentare (close-up zâmbet)"
              aspect="3/4"
              className="flex-1 rounded-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground group-hover:text-brand">
                Fațete dentare
              </h3>
              <p className="mt-2 text-sm text-muted">
                Zâmbetul pe care îl vezi la cei din jur? Poate fi și al tău. Fațete ceramice
                personalizate, rezultat natural garantat.
              </p>
            </div>
          </Link>

          {/* Regular cards */}
          {[
            {
              title: "Implantologie avansată",
              text: "Dinți ficși în locul celor pierduți. Soluții definitive All-on-4 și All-on-6, chiar și pentru cazuri considerate imposibile.",
              href: "/tratamente/implantologie",
            },
            {
              title: "Ortodonție modernă",
              text: "Alignere transparente sau aparate estetice. Dinți drepți fără ca nimeni să observe că porți aparat.",
              href: "/tratamente/ortodontie",
            },
            {
              title: "Stomatologie pentru toată familia",
              text: "De la primul dinte de lapte la protetica bunicilor. O singură clinică pentru toți ai casei, fără drum la Cluj sau Baia Mare.",
              href: "/tratamente",
            },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-xl"
            >
              <ImagePlaceholder
                label={`Imagine — ${s.title}`}
                aspect="16/10"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ S4 — ATUURI (layout cu numere mari) ═══ */
function AtuuriSection() {
  const items = [
    {
      n: "01",
      title: "Vedeți rezultatul înainte de tratament",
      text: "Planificare digitală cu simulare 3D. Nicio surpriză, doar certitudini.",
    },
    {
      n: "02",
      title: "Tratamente fără durere",
      text: "Tehnici moderne de anestezie și sedare. Veniți stresați, plecați zâmbind.",
    },
    {
      n: "03",
      title: "O echipă, nu un singur medic",
      text: "Fiecare caz este evaluat multidisciplinar. Mai mulți specialiști, o singură direcție corectă.",
    },
    {
      n: "04",
      title: "Prețul? Îl știți din prima zi",
      text: "Deviz complet la prima vizită. Fără costuri ascunse, fără surprize la final.",
    },
    {
      n: "05",
      title: "Rate fără dobândă",
      text: "Plătiți în liniște, în rate lunare cu 0% dobândă prin partenerii noștri bancari.",
    },
    {
      n: "06",
      title: "Echipamente din 2025, nu din 2005",
      text: "Investim constant: scanner digital, tomograf 3D, laser. Tehnologia contează.",
    },
    {
      n: "07",
      title: "Sterilizare la standarde de bloc operator",
      text: "Protocol strict de sterilizare, controlat digital la fiecare pas. Zero compromisuri.",
    },
    {
      n: "08",
      title: "Vă tratăm ca pe familie",
      text: "Nu sunteți un număr de dosar. Vă cunoaștem, vă ascultăm, vă urmărim progresul.",
    },
  ];

  return (
    <section className="bg-foreground py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light">
          De ce pacienții aleg Central Dental Clinic
        </p>
        <h2 className="mt-3 max-w-lg text-3xl font-bold leading-snug sm:text-4xl">
          8 motive pe care nu le spunem noi. Le confirmă pacienții.
        </h2>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.n} className="group flex gap-5">
              <span className="text-4xl font-black text-brand/30 transition-colors group-hover:text-brand/60">
                {item.n}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ S5 — DESPRE NOI (teaser cu pullquote) ═══ */
function AboutTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Povestea noastră
            </p>

            <blockquote className="mt-6 border-l-4 border-accent pl-6 text-2xl font-semibold leading-snug text-foreground italic sm:text-3xl">
              &ldquo;Nimeni din Maramureș nu ar trebui să facă sute de kilometri
              pentru un zâmbet sănătos.&rdquo;
            </blockquote>

            <p className="mt-8 leading-relaxed text-muted">
              Cu acest gând am deschis Central Dental Clinic. Am adus aici
              echipamente pe care până acum le găseai doar în clinicile din
              București sau Cluj, o echipă de medici cu experiență în cazuri
              complexe și un standard de îngrijire de care fiecare pacient din
              zonă ar trebui să beneficieze — fără drum lung, fără liste de
              așteptare.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Suntem clinica la care veniți cu toată familia: de la primul
              detartraj al copilului, la fațetele adolescentului, la implanturile
              bunicii. Un singur loc, aceleași fețe cunoscute, aceeași grijă.
            </p>

            <Link
              href="/despre-noi"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark"
            >
              Citește povestea completă
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              <ImagePlaceholder label="Interior — recepție" aspect="3/4" className="col-span-2 w-full" />
              <ImagePlaceholder label="Cabinet" aspect="1/1" className="w-full" />
              <ImagePlaceholder label="Echipamente" aspect="1/1" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ S6 — BEFORE / AFTER ═══ */
function BeforeAfterShowcase() {
  const cases = [
    { treatment: "Fațete ceramice E-max", detail: "10 fațete, arcadă superioară" },
    { treatment: "Implantologie All-on-4", detail: "Reabilitare completă mandibulă" },
    { treatment: "Reabilitare totală", detail: "Fațete + implanturi, ambele arcade" },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Portofoliu
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Înainte și după. Diferența se vede.
            </h2>
          </div>
          <Link
            href="/cazuri-clinice"
            className="shrink-0 text-sm font-bold text-brand hover:text-brand-dark"
          >
            Toate cazurile →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.treatment} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative">
                <ImagePlaceholder
                  label={`Before / After — ${c.treatment}\n(Slider interactiv drag: înainte ← → după)`}
                  aspect="4/3"
                  className="w-full rounded-none"
                />
                <div className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                    <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground">{c.treatment}</p>
                <p className="mt-1 text-sm text-muted">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ S7 — ECHIPA ═══ */
function TeamSection() {
  const team = [
    { name: "Dr. Nume Prenume", role: "Chirurgie Dento-Alveolară & Implantologie" },
    { name: "Dr. Nume Prenume", role: "Estetică Dentară & Restaurativă" },
    { name: "Dr. Nume Prenume", role: "Ortodonție & Ortopedie Dento-Facială" },
    { name: "Dr. Nume Prenume", role: "Endodonție la Microscop" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Echipa
        </p>
        <h2 className="mt-3 max-w-md text-3xl font-bold leading-snug text-foreground sm:text-4xl">
          Oamenii din spatele zâmbetului tău
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Fiecare specialist aduce la masă experiență, dedicare și o perspectivă
          unică. Împreună, acoperim tot ce ai nevoie sub un singur acoperiș.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((doc, i) => (
            <div key={i} className="group text-center">
              <div className="mx-auto w-full overflow-hidden rounded-2xl">
                <ImagePlaceholder
                  label={`Portret — ${doc.role}`}
                  aspect="4/5"
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-bold text-foreground">{doc.name}</h3>
              <p className="mt-1 text-sm text-muted">{doc.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/echipa"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark"
          >
            Cunoaște toată echipa
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══ S8 — POVEȘTI DE SUCCES (featured + compact) ═══ */
function SuccessStories() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
          Cazuri reale
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          Zâmbete cu poveste
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Featured story */}
          <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-3">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              Finalizat
            </span>
            <blockquote className="mt-6 text-2xl font-semibold leading-snug text-foreground">
              &ldquo;Mi-am dorit de ani de zile să rezolv, dar mă temeam. Aici
              m-au ascultat, mi-au explicat fiecare pas și rezultatul a depășit
              ce mi-am imaginat.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-lighter text-lg font-bold text-brand">
                M
              </div>
              <div>
                <p className="font-bold text-foreground">Pacientă M.I.</p>
                <p className="text-sm text-muted">52 ani, Sighetu Marmației — Reabilitare totală</p>
              </div>
            </div>
          </div>

          {/* Compact stories */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {[
              {
                badge: "Finalizat",
                badgeColor: "bg-green-100 text-green-700",
                quote: `„Copilul meu se temea de dentist. Acum întreabă când mai mergem."`,
                initials: "A",
                name: "Pacientă A.R.",
                detail: "34 ani, Vișeu de Sus — Pedodonție",
              },
              {
                badge: "În curs",
                badgeColor: "bg-amber-100 text-amber-700",
                quote: `„Am venit din Italia special. Prețurile sunt corecte, iar calitatea la fel ca în Milano."`,
                initials: "D",
                name: "Pacient D.P.",
                detail: "41 ani, diaspora Italia — Fațete dentare",
              },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-sm">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${s.badgeColor}`}>
                  {s.badge}
                </span>
                <blockquote className="mt-4 font-semibold leading-snug text-foreground">
                  {s.quote}
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lighter text-sm font-bold text-brand">
                    {s.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{s.name}</p>
                    <p className="text-xs text-muted">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cazuri-clinice"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark"
          >
            Mai multe povești
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══ S9 — TESTIMONIALE VIDEO ═══ */
function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Testimoniale
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Spun ei, nu noi
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Nu vă cerem să ne credeți pe cuvânt. Ascultați-i pe cei care au trecut deja prin cabinet.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl shadow-lg">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/aZIiVDFbrgM"
              title="Testimonial pacient Central Dental Clinic"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Quote strip below video */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { text: "Profesionalism rar întâlnit la noi în zonă.", author: "Recenzie Google ★★★★★" },
            { text: "Copiii mei nu se mai tem de dentist.", author: "Recenzie Google ★★★★★" },
            { text: "Am venit de la Borșa și a meritat fiecare kilometru.", author: "Recenzie Google ★★★★★" },
          ].map((q, i) => (
            <div key={i} className="rounded-2xl border border-border p-5">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="mt-3 text-xs text-muted">{q.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimoniale"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark"
          >
            Toate testimonialele
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══ S10 — PACHETE ═══ */
function PackagesSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
            Pachete
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Alege-ți zâmbetul
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Pachete complete, fără costuri ascunse. Prețul include tot ce ai nevoie
            de la prima consultație până la ultimul control.
          </p>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Divider "sau" */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 items-center md:flex">
            <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              sau
            </span>
          </div>

          <PackageCard
            name="Zâmbet Complet"
            count="10"
            unit="fațete ceramice premium"
            desc="Arcada superioară transformată: formă, proporții și culoare adaptate trăsăturilor tale."
            price="€X.499"
            includes={[
              "Consultație și plan de tratament personalizat",
              "Investigații radiologice complete",
              "Certificat de calitate al materialului",
              "Controale periodice incluse",
              "Coordonator dedicat pe tot parcursul",
            ]}
          />
          <PackageCard
            name="Zâmbet Total"
            count="20"
            unit="fațete ceramice premium"
            desc="Ambele arcade, un zâmbet complet nou — armonios, luminos, natural."
            price="€X.999"
            popular
            includes={[
              "Tot ce include Zâmbet Complet",
              "Acoperire completă sus și jos",
              "Investigații radiologice complete",
              "Certificat de calitate al materialului",
              "Controale periodice incluse",
              "Coordonator dedicat pe tot parcursul",
            ]}
          />
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Disponibilă <span className="font-semibold text-foreground">plata în rate cu 0% dobândă</span> prin partenerii bancari.
        </p>
      </div>
    </section>
  );
}

function PackageCard({
  name, count, unit, desc, price, includes, popular,
}: {
  name: string; count: string; unit: string; desc: string; price: string; includes: string[]; popular?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border bg-white transition-shadow hover:shadow-lg ${popular ? "border-brand shadow-md" : "border-border"}`}>
      {popular && (
        <div className="bg-brand px-4 py-1.5 text-center text-xs font-bold text-white">
          Cel mai ales
        </div>
      )}
      <ImagePlaceholder
        label={`Fotografie — ${name} (close-up zâmbet)`}
        aspect="16/10"
        className="w-full rounded-none"
      />
      <div className="p-7">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-2 rounded-lg bg-brand-darker py-2.5 text-center text-sm font-bold text-white">
          {count} {unit}
        </p>
        <p className="mt-4 text-sm text-muted">{desc}</p>

        <details className="mt-5 rounded-xl border border-border">
          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-brand select-none hover:bg-brand-lighter">
            Ce include pachetul
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </summary>
          <ul className="space-y-2.5 border-t border-border px-4 py-4">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </details>

        <p className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">{price}</p>
        <Link
          href="/contact"
          className={`mt-4 block rounded-full py-3.5 text-center text-sm font-bold text-white transition-colors ${
            popular ? "bg-brand hover:bg-brand-dark" : "bg-foreground hover:bg-slate-800"
          }`}
        >
          Vreau acest pachet
        </Link>
      </div>
    </div>
  );
}

/* ═══ S11 — CONSULTAȚIE GRATUITĂ ═══ */
function ConsultationBand() {
  return (
    <section className="bg-gradient-to-r from-brand-darker to-brand-dark py-16">
      <div className="mx-auto max-w-7xl px-6 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Prima consultație? Pe noi.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-light">
          Vino să ne cunoști fără nicio obligație financiară. Pleci cu un plan de
          tratament complet, set de radiografii și o părere sinceră — chiar dacă
          nu revii la noi.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
          {["Plan de tratament", "Consultație de specialitate", "Set poze & radiografii"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent-light" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-accent px-10 py-4 text-sm font-bold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30"
        >
          Programează-te gratuit
        </Link>
      </div>
    </section>
  );
}

/* ═══ S12 + S13 — TRUST BAND (Financiar + Certificări, unificate) ═══ */
function TrustBand() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Financial */}
        <div className="text-center">
          <p className="text-4xl font-extrabold text-brand sm:text-5xl">
            0% dobândă. <span className="text-foreground">100% zâmbet.</span>
          </p>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tratamentele pot fi achitate în rate lunare fără dobândă, prin
            partenerii noștri bancari. Pentru că sănătatea dinților nu ar trebui
            să depindă de bugetul lunii.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <ImagePlaceholder label="Logo bancă parteneră" aspect="3/1" className="h-12 w-36" />
            <ImagePlaceholder label="Logo bancă parteneră" aspect="3/1" className="h-12 w-36" />
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 border-t border-border pt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted">
            Standarde dovedite
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            <ImagePlaceholder label="Certificare ISO" aspect="1/1" className="h-20 w-20" />
            <ImagePlaceholder label="Certificare ISO" aspect="1/1" className="h-20 w-20" />
            <ImagePlaceholder label="Logo partener" aspect="2/1" className="h-12 w-24" />
            <ImagePlaceholder label="Logo partener" aspect="2/1" className="h-12 w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ S14 — TURISM DENTAR ═══ */
function DentalTourismTeaser() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-white">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
        <ImagePlaceholder
          label="Imagine Maramureș (peisaj / poartă maramureșeană)"
          aspect="auto"
          className="h-full w-full rounded-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-light">
          Diaspora
        </p>
        <h2 className="mt-3 max-w-lg text-3xl font-bold leading-snug sm:text-4xl">
          Acasă la dentist. Literal.
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Ești în Italia, Spania, UK sau Germania? Vino acasă în Maramureș și
          rezolvă-ți dinții la prețuri de 2-3 ori mai mici, cu aceleași materiale
          și echipamente. Pachete complete în EUR, gândite special pentru tine.
        </p>
        <Link
          href="/dental-tourism"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
        >
          Vezi pachetele pentru diaspora
        </Link>
      </div>
    </section>
  );
}

/* ═══ S15 — CONTACT ═══ */
function ContactSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Hai să ne cunoaștem
            </h2>
            <p className="mt-4 text-muted">
              Completează formularul sau sună-ne direct. Răspundem în cel mai scurt timp.
            </p>

            <form className="mt-10 space-y-4">
              <input
                type="text"
                placeholder="Numele tău"
                className="w-full rounded-xl border border-border px-5 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <input
                type="tel"
                placeholder="Telefon sau WhatsApp"
                className="w-full rounded-xl border border-border px-5 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <select className="w-full rounded-xl border border-border px-5 py-3.5 text-sm text-muted outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20">
                <option value="">Tratament dorit</option>
                <option>Fațete dentare</option>
                <option>Implantologie</option>
                <option>Ortodonție</option>
                <option>Stomatologie generală</option>
                <option>Albire dentară</option>
                <option>Altele</option>
              </select>
              <textarea
                placeholder="Mesaj (opțional)"
                rows={3}
                className="w-full rounded-xl border border-border px-5 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-brand py-4 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
              >
                Trimite mesajul
              </button>
            </form>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-bold text-foreground">Adresă</p>
                <p className="mt-1 text-muted">Str. Andrei Mureșan 5,<br />Sighetu Marmației</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Telefon</p>
                <p className="mt-1">
                  <a href="tel:+40749165211" className="text-brand hover:text-brand-dark">+40 749 165 211</a>
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground">Program</p>
                <p className="mt-1 text-muted">L–V: 09:00 – 18:00<br />S: 09:00 – 14:00</p>
              </div>
              <div>
                <p className="font-bold text-foreground">Email</p>
                <p className="mt-1">
                  <a href="mailto:ivanmariansofineti@gmail.com" className="text-brand hover:text-brand-dark">Scrie-ne</a>
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.5!2d23.8937!3d47.9297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737d6f1f1f1f1f1%3A0x0!2sStrada+Andrei+Mure%C8%99an+5%2C+Sighetu+Marma%C8%9Biei!5e0!3m2!1sro!2sro!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Central Dental Clinic pe Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ S16 — CTA FINAL ═══ */
function ClosingCTA() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Pregătit pentru un zâmbet nou?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-brand-light">
          Sună-ne, scrie-ne pe WhatsApp, sau trimite un mesaj.
          Primul pas e întotdeauna cel mai ușor.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+40749165211"
            className="flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-lighter"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +40 749 165 211
          </a>
          <a
            href="https://wa.me/40749165211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Scrie pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
