import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și condiții — Central Dental Clinic",
  description: "Termenii și condițiile de utilizare a website-ului Central Dental Clinic, Sighetu Marmației.",
};

export default function TermeniSiConditiiPage() {
  return (
    <article className="bg-white pt-32 section-padding">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
          Termeni și condiții
        </h1>
        <p className="mt-4 text-sm text-gray-subtle">
          Ultima actualizare: 27 martie 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-gray-text [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-foreground [&_h2]:md:text-2xl [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-medium [&_h3]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">

          <h2>1. Informații generale</h2>
          <p>
            Prezentul document stabilește termenii și condițiile de utilizare a website-ului centraldental.ro (denumit în continuare „Website-ul"), operat de S.C. ROYAL 3D SMILE DESIGN S.R.L., cu sediul în Strada Andrei Mureșan 5, 435500 Sighetu Marmației, Maramureș, România (denumit în continuare „Clinica" sau „Operatorul").
          </p>
          <p>
            Prin accesarea și utilizarea Website-ului, confirmați că ați citit, înțeles și acceptat acești termeni și condiții în integralitatea lor.
          </p>

          <h2>2. Serviciile oferite</h2>
          <p>
            Website-ul are rolul de a prezenta informații despre serviciile stomatologice oferite de Central Dental Clinic, echipa medicală, tarifele orientative și modalitățile de contact. Website-ul permite trimiterea de solicitări de programare prin formularul de contact, dar nu constituie o platformă de consultanță medicală.
          </p>

          <h2>3. Limitarea responsabilității</h2>
          <p>
            Informațiile prezentate pe Website au caracter informativ general și nu substituie consultația medicală de specialitate. Diagnosticul, planul de tratament și tarifele exacte sunt stabilite exclusiv în urma evaluării clinice directe.
          </p>
          <p>
            Clinica depune eforturi rezonabile pentru a menține informațiile de pe Website corecte și actualizate, dar nu garantează exactitatea, completitudinea sau actualitatea acestora. Prețurile afișate sunt orientative și pot suferi modificări fără notificare prealabilă.
          </p>

          <h2>4. Programări și formularul de contact</h2>
          <p>
            Trimiterea unei solicitări prin formularul de contact nu constituie o programare confirmată. Solicitarea dumneavoastră va fi procesată de echipa noastră, care vă va contacta pentru confirmare în cel mai scurt timp posibil.
          </p>
          <p>
            Prin completarea formularului de contact, confirmați că datele introduse sunt corecte și că sunteți de acord cu prelucrarea acestora în conformitate cu Politica de confidențialitate.
          </p>

          <h2>5. Proprietatea intelectuală</h2>
          <p>
            Toate conținuturile prezente pe Website — inclusiv, dar fără a se limita la texte, fotografii, elemente grafice, logo-uri, pictograme, videoclipuri, design-ul Website-ului și structura bazei de date — sunt proprietatea S.C. ROYAL 3D SMILE DESIGN S.R.L. sau sunt utilizate cu acordul titularilor de drepturi și sunt protejate de legislația română și internațională privind dreptul de autor și proprietatea intelectuală.
          </p>
          <p>
            Reproducerea, distribuirea, modificarea sau utilizarea conținuturilor în orice scop comercial fără acordul scris prealabil al Clinicii este strict interzisă.
          </p>

          <h2>6. Fotografii și testimoniale</h2>
          <p>
            Toate fotografiile before/after, cazurile clinice și testimonialele afișate pe Website reprezintă cazuri reale de pacienți tratați la Central Dental Clinic și sunt publicate cu acordul scris al acestora. Rezultatele pot varia de la pacient la pacient în funcție de situația clinică individuală.
          </p>

          <h2>7. Legături externe</h2>
          <p>
            Website-ul poate conține link-uri către site-uri externe (Google Maps, YouTube, Facebook, WhatsApp). Clinica nu este responsabilă pentru conținutul, politicile de confidențialitate sau practicile acestor site-uri terțe.
          </p>

          <h2>8. Disponibilitatea Website-ului</h2>
          <p>
            Clinica depune eforturi pentru a menține Website-ul disponibil și funcțional, dar nu garantează accesul neîntrerupt. Ne rezervăm dreptul de a suspenda sau modifica Website-ul fără notificare prealabilă, pentru motive de mentenanță sau actualizare.
          </p>

          <h2>9. Prețuri și plăți</h2>
          <p>
            Prețurile afișate pe Website sunt orientative și pot fi exprimate în RON sau EUR. Prețul exact al tratamentelor se stabilește în urma consultației clinice și va fi comunicat pacientului prin devizul estimativ, înainte de începerea oricărui tratament. Opțiunile de plată în rate sunt disponibile prin partenerii bancari ai Clinicii, sub rezerva aprobării creditului.
          </p>

          <h2>10. Legea aplicabilă și jurisdicția</h2>
          <p>
            Acești termeni și condiții sunt guvernați de legislația română. Orice litigiu va fi soluționat pe cale amiabilă sau, în caz contrar, de instanțele judecătorești competente din România.
          </p>

          <h2>11. Soluționarea alternativă a litigiilor</h2>
          <p>
            În conformitate cu Regulamentul (UE) nr. 524/2013, consumatorii pot utiliza platforma europeană de soluționare online a litigiilor (SOL), disponibilă la:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              https://ec.europa.eu/consumers/odr
            </a>.
          </p>

          <h2>12. Modificări ale termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările intră în vigoare la data publicării pe Website. Continuarea utilizării Website-ului după publicarea modificărilor constituie acceptarea noilor termeni.
          </p>

          <h2>13. Contact</h2>
          <p>
            Pentru orice întrebări referitoare la acești termeni și condiții, ne puteți contacta:
          </p>
          <ul>
            <li><strong>Email:</strong> ivanmariansofineti@gmail.com</li>
            <li><strong>Telefon:</strong> +40 749 165 211</li>
            <li><strong>Adresă:</strong> Strada Andrei Mureșan 5, 435500 Sighetu Marmației</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
