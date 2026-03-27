import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de cookies — Central Dental Clinic",
  description: "Informații despre cookie-urile utilizate pe website-ul Central Dental Clinic, Sighetu Marmației.",
};

export default function PoliticaCookiesPage() {
  return (
    <article className="bg-white pt-32 section-padding">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <p className="text-[13px] font-medium uppercase tracking-premium text-gray-subtle">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-3xl font-light text-foreground md:text-5xl">
          Politica de cookies
        </h1>
        <p className="mt-4 text-sm text-gray-subtle">
          Ultima actualizare: 27 martie 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-gray-text [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-foreground [&_h2]:md:text-2xl [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-medium [&_h3]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_table]:w-full [&_table]:text-left [&_th]:border-b [&_th]:border-gray-separator [&_th]:py-3 [&_th]:pr-4 [&_th]:text-[13px] [&_th]:font-medium [&_th]:uppercase [&_th]:tracking-premium [&_th]:text-gray-subtle [&_td]:border-b [&_td]:border-gray-separator/50 [&_td]:py-3 [&_td]:pr-4 [&_td]:text-[14px]">

          <h2>1. Ce sunt cookie-urile</h2>
          <p>
            Cookie-urile sunt fișiere text de mici dimensiuni care sunt plasate pe dispozitivul dumneavoastră (computer, telefon, tabletă) atunci când vizitați un website. Acestea permit website-ului să vă recunoască dispozitivul și să rețină anumite informații despre vizita dumneavoastră, cum ar fi preferințele de limbă sau alte setări.
          </p>

          <h2>2. Ce cookie-uri folosim</h2>
          <p>
            Website-ul Central Dental Clinic utilizează următoarele categorii de cookie-uri:
          </p>

          <h3>2.1. Cookie-uri strict necesare</h3>
          <p>
            Aceste cookie-uri sunt esențiale pentru funcționarea website-ului și nu pot fi dezactivate. Sunt setate ca răspuns la acțiunile dumneavoastră, cum ar fi setarea preferințelor de confidențialitate sau completarea formularelor.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Furnizor</th>
                <th>Scop</th>
                <th>Durată</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>Central Dental Clinic</td>
                <td>Stochează preferințele de consimțământ cookies</td>
                <td>1 an</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2. Cookie-uri analitice</h3>
          <p>
            Aceste cookie-uri ne ajută să înțelegem modul în care vizitatorii interacționează cu website-ul, permițându-ne să îmbunătățim experiența de navigare. Informațiile sunt colectate anonim.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Furnizor</th>
                <th>Scop</th>
                <th>Durată</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Distinge utilizatorii unici prin atribuirea unui ID generat aleatoriu</td>
                <td>2 ani</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics</td>
                <td>Menține starea sesiunii</td>
                <td>2 ani</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3. Cookie-uri de marketing</h3>
          <p>
            Aceste cookie-uri sunt utilizate pentru a urmări vizitatorii pe website-uri în scopul afișării de reclame relevante. Sunt setate de platformele noastre de publicitate.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Furnizor</th>
                <th>Scop</th>
                <th>Durată</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_fbp</td>
                <td>Meta (Facebook)</td>
                <td>Identifică browserul pentru a furniza servicii de publicitate și analiză</td>
                <td>3 luni</td>
              </tr>
              <tr>
                <td>_fbc</td>
                <td>Meta (Facebook)</td>
                <td>Stochează informații despre click-ul pe reclamă</td>
                <td>2 ani</td>
              </tr>
              <tr>
                <td>fr</td>
                <td>Meta (Facebook)</td>
                <td>Furnizează reclame personalizate și măsoară eficiența acestora</td>
                <td>3 luni</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Cum puteți gestiona cookie-urile</h2>
          <p>
            La prima vizită pe website-ul nostru, vi se va afișa un banner de consimțământ care vă permite să acceptați sau să refuzați diferitele categorii de cookie-uri. Puteți modifica preferințele oricând din setările browser-ului.
          </p>
          <p>
            Majoritatea browserelor vă permit să:
          </p>
          <ul>
            <li>Vizualizați cookie-urile stocate și să le ștergeți individual</li>
            <li>Blocați cookie-urile de la terți</li>
            <li>Blocați toate cookie-urile de pe anumite site-uri</li>
            <li>Blocați setarea tuturor cookie-urilor</li>
            <li>Ștergeți toate cookie-urile la închiderea browser-ului</li>
          </ul>
          <p>
            Instrucțiuni specifice pentru browser-ele principale:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/ro/kb/cookies-informatii-pe-care-paginile-le-stocheaza" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Safari</a></li>
            <li><a href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-cookie-urilor-în-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Microsoft Edge</a></li>
          </ul>
          <p>
            Vă atragem atenția că dezactivarea cookie-urilor poate afecta funcționalitatea unor părți ale website-ului.
          </p>

          <h2>4. Cookie-uri de la terți</h2>
          <p>
            Unele cookie-uri sunt setate de servicii terțe care apar pe paginile noastre. Noi nu controlăm setarea acestor cookie-uri. Pentru mai multe informații, vă rugăm să consultați politicile de confidențialitate ale terților respectivi:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Google Privacy Policy</a></li>
            <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">Meta Privacy Policy</a></li>
            <li><a href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">YouTube Privacy</a></li>
          </ul>

          <h2>5. Actualizarea politicii de cookies</h2>
          <p>
            Această politică de cookies poate fi actualizată periodic pentru a reflecta modificările în utilizarea cookie-urilor pe website-ul nostru. Data ultimei actualizări este afișată la începutul acestei pagini.
          </p>

          <h2>6. Contact</h2>
          <p>
            Pentru orice întrebări referitoare la utilizarea cookie-urilor pe website-ul nostru, ne puteți contacta:
          </p>
          <ul>
            <li><strong>Email:</strong> ivanmariansofineti@gmail.com</li>
            <li><strong>Telefon:</strong> +40 749 165 211</li>
            <li><strong>Adresă:</strong> Strada Andrei Mureșan 5, 435500 Sighetu Marmației</li>
          </ul>
          <p>
            Pentru informații complete despre cum prelucrăm datele dumneavoastră, consultați{" "}
            <Link href="/politica-confidentialitate" className="text-foreground underline underline-offset-2">
              Politica de confidențialitate
            </Link>.
          </p>
        </div>
      </div>
    </article>
  );
}
