import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de confidențialitate — Central Dental Clinic",
  description: "Politica de confidențialitate și protecția datelor cu caracter personal la Central Dental Clinic, Sighetu Marmației.",
};

export default function PoliticaConfidentialitatePage() {
  return (
    <article className="bg-white pt-32 section-padding">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
          Politica de confidențialitate
        </h1>
        <p className="mt-4 text-sm text-gray-subtle">
          Ultima actualizare: 27 martie 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-gray-text [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-foreground [&_h2]:md:text-2xl [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-medium [&_h3]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">

          <h2>1. Introducere</h2>
          <p>
            S.C. ROYAL 3D SMILE DESIGN S.R.L., cu sediul în Strada Andrei Mureșan 5, 435500 Sighetu Marmației, Maramureș, România, operator al Central Dental Clinic (denumit în continuare „Clinica", „noi" sau „Operatorul"), respectă confidențialitatea datelor dumneavoastră cu caracter personal și se angajează să le protejeze în conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European și al Consiliului din 27 aprilie 2016 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date (GDPR) și cu legislația națională aplicabilă.
          </p>
          <p>
            Această politică de confidențialitate descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră cu caracter personal atunci când utilizați website-ul nostru sau serviciile noastre.
          </p>

          <h2>2. Date de contact ale Operatorului</h2>
          <ul>
            <li><strong>Denumire:</strong> S.C. ROYAL 3D SMILE DESIGN S.R.L.</li>
            <li><strong>Sediu:</strong> Strada Andrei Mureșan 5, 435500 Sighetu Marmației, Maramureș</li>
            <li><strong>Telefon:</strong> +40 749 165 211</li>
            <li><strong>Email:</strong> ivanmariansofineti@gmail.com</li>
          </ul>

          <h2>3. Ce date cu caracter personal colectăm</h2>
          <p>Colectăm următoarele categorii de date:</p>

          <h3>3.1. Date furnizate direct de dumneavoastră</h3>
          <ul>
            <li>Nume și prenume</li>
            <li>Număr de telefon / WhatsApp</li>
            <li>Adresă de email</li>
            <li>Tratamentul dorit</li>
            <li>Mesaje sau informații suplimentare transmise prin formularul de contact</li>
            <li>Țara de reședință (pentru pacienții din diaspora, pe pagina de turism dentar)</li>
            <li>Perioada estimată a vizitei</li>
          </ul>

          <h3>3.2. Date colectate automat</h3>
          <ul>
            <li>Adresa IP</li>
            <li>Tipul și versiunea browserului</li>
            <li>Sistemul de operare</li>
            <li>Paginile vizitate și durata vizitei</li>
            <li>Sursa de referință (de unde ați ajuns pe site)</li>
            <li>Date colectate prin cookie-uri și tehnologii similare (vezi <Link href="/politica-cookies" className="text-foreground underline underline-offset-2">Politica de cookies</Link>)</li>
          </ul>

          <h2>4. Scopurile și temeiurile juridice ale prelucrării</h2>
          <p>Prelucrăm datele dumneavoastră pentru următoarele scopuri:</p>
          <ul>
            <li><strong>Programarea consultațiilor și gestionarea solicitărilor</strong> — temei: executarea unui contract sau măsuri precontractuale (art. 6 alin. 1 lit. b GDPR)</li>
            <li><strong>Comunicarea cu dumneavoastră</strong> (confirmări, răspunsuri la solicitări) — temei: executarea unui contract (art. 6 alin. 1 lit. b GDPR)</li>
            <li><strong>Îmbunătățirea serviciilor și a website-ului</strong> — temei: interesul nostru legitim (art. 6 alin. 1 lit. f GDPR)</li>
            <li><strong>Analiza traficului și comportamentului pe website</strong> (Google Analytics, META Pixel) — temei: consimțământul dumneavoastră (art. 6 alin. 1 lit. a GDPR)</li>
            <li><strong>Respectarea obligațiilor legale</strong> — temei: obligație legală (art. 6 alin. 1 lit. c GDPR)</li>
          </ul>

          <h2>5. Destinatarii datelor</h2>
          <p>Datele dumneavoastră pot fi transmise către:</p>
          <ul>
            <li><strong>Resend Inc.</strong> — serviciu de trimitere email-uri tranzacționale (confirmări programare)</li>
            <li><strong>Google LLC</strong> — Google Analytics 4, Google Maps (analiză trafic, afișare hartă)</li>
            <li><strong>Meta Platforms, Inc.</strong> — META Pixel (măsurarea eficienței campaniilor publicitare)</li>
            <li><strong>Netlify, Inc.</strong> — serviciu de hosting website</li>
          </ul>
          <p>
            Acești furnizori acționează în calitate de persoane împuternicite și prelucrează datele exclusiv conform instrucțiunilor noastre și cu respectarea unor garanții adecvate de protecție a datelor.
          </p>

          <h2>6. Transferul datelor în afara SEE</h2>
          <p>
            Unii dintre furnizorii noștri de servicii au sediul în Statele Unite ale Americii. Transferul datelor către aceștia se realizează pe baza clauzelor contractuale standard aprobate de Comisia Europeană și/sau a Cadrului UE-SUA privind confidențialitatea datelor (EU-U.S. Data Privacy Framework).
          </p>

          <h2>7. Durata de stocare</h2>
          <p>
            Datele cu caracter personal sunt stocate doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate. Orientativ:
          </p>
          <ul>
            <li>Datele din formularul de contact: 2 ani de la ultima interacțiune</li>
            <li>Datele de analiză (analytics): conform politicilor Google și META (maxim 26 luni pentru Google Analytics)</li>
            <li>Documentele fiscale și contabile: conform obligațiilor legale (10 ani)</li>
          </ul>

          <h2>8. Drepturile dumneavoastră</h2>
          <p>
            În conformitate cu GDPR, aveți următoarele drepturi:
          </p>
          <ul>
            <li><strong>Dreptul de acces</strong> — să solicitați informații despre datele pe care le deținem</li>
            <li><strong>Dreptul la rectificare</strong> — să solicitați corectarea datelor inexacte</li>
            <li><strong>Dreptul la ștergere</strong> — să solicitați ștergerea datelor („dreptul de a fi uitat")</li>
            <li><strong>Dreptul la restricționarea prelucrării</strong></li>
            <li><strong>Dreptul la portabilitatea datelor</strong></li>
            <li><strong>Dreptul de opoziție</strong> — să vă opuneți prelucrării bazate pe interes legitim</li>
            <li><strong>Dreptul de a retrage consimțământul</strong> în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
          </ul>
          <p>
            Pentru exercitarea acestor drepturi, ne puteți contacta la adresa de email: <strong>ivanmariansofineti@gmail.com</strong>.
          </p>
          <p>
            De asemenea, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, 010336 București, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">www.dataprotection.ro</a>.
          </p>

          <h2>9. Securitatea datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii, inclusiv: criptare SSL/TLS, acces restricționat, audit periodic și proceduri de backup.
          </p>

          <h2>10. Modificări ale politicii</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice modificare va fi publicată pe această pagină cu data ultimei actualizări.
          </p>

          <h2>11. Contact</h2>
          <p>
            Pentru orice întrebări legate de prelucrarea datelor dumneavoastră cu caracter personal, ne puteți contacta:
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
