import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="font-serif text-8xl font-light text-gray-separator md:text-[10rem]">
          404
        </p>
        <h1 className="mt-4 font-serif text-2xl font-light text-foreground md:text-3xl">
          Pagina nu a fost găsită
        </h1>
        <p className="mt-3 text-[15px] text-gray-text">
          Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center px-10 text-[13px] font-medium uppercase tracking-premium bg-black text-white transition-opacity hover:opacity-80"
          >
            Acasă
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center px-8 text-[13px] font-medium uppercase tracking-premium border border-gray-separator text-foreground transition-colors hover:bg-foreground hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
