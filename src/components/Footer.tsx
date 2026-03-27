import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/tarife", label: "Tarife" },
  { href: "/testimoniale", label: "Testimoniale" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/politica-confidentialitate", label: "Confidențialitate" },
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
  { href: "/politica-cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Central Dental Clinic"
                width={40}
                height={40}
                className="invert"
              />
            </Link>
            <p className="mt-4 font-serif text-lg italic text-white/60">
              By Dr. Șofineți Ivan Marian
            </p>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white/40">
              Navigare
            </p>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white/40">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-[15px] text-white/60">
              <p>Str. Andrei Mureșan 5</p>
              <p>435500 Sighetu Marmației</p>
              <a
                href="tel:+40749165211"
                className="transition-colors hover:text-white"
              >
                +40 749 165 211
              </a>
              <a
                href="mailto:ivanmariansofineti@gmail.com"
                className="transition-colors hover:text-white"
              >
                ivanmariansofineti@gmail.com
              </a>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.facebook.com/royal.3d.smile.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="text-[12px] leading-relaxed text-white/25">
            <p>
              ROYAL 3D SMILE DESIGN S.R.L. · CUI 39231116 · Nr. Reg. Com. J20/553244/2018 · EUID ROONRC.J2018000553244
            </p>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-[13px] text-white/30 md:flex-row md:items-center">
            <p>&copy; {new Date().getFullYear()} Central Dental Clinic</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
