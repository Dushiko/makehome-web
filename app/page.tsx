import { ContactForm } from "./components/ContactForm";

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-6";

const btnPrimarySm =
  "inline-flex min-h-[40px] items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-md transition hover:bg-neutral-800 sm:px-5 sm:text-sm";

const btnPrimaryOnDark =
  "inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-neutral-900 shadow-md transition hover:bg-[#F5F0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6";

const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-full border border-neutral-900/90 bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-6";

const shell = "mx-auto max-w-2xl px-4 sm:max-w-6xl sm:px-5";
const sectionY = "py-10 sm:py-12 lg:py-14";
const h2 = "text-xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-2xl";
const listTight = "mt-3 space-y-1.5 text-sm leading-snug text-neutral-700 sm:text-[0.9375rem]";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-neutral-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#FDFCF9]/90 backdrop-blur-md">
        <div className={`${shell} flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4`}>
          <div className="flex items-center justify-between gap-3">
            <a
              href="#"
              className="text-[0.6rem] font-semibold tracking-[0.22em] text-neutral-900 sm:text-[0.65rem]"
            >
              MAKE HOME
            </a>
            <a href="#kontakt" className={`${btnPrimarySm} sm:hidden`}>
              Nezávazná poptávka
            </a>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-neutral-600 sm:justify-start sm:gap-x-6 sm:text-xs md:flex-1"
            aria-label="Hlavní navigace"
          >
            <a href="#sluzby" className="hover:text-neutral-900">
              Služby
            </a>
            <a href="#realizace" className="hover:text-neutral-900">
              Realizace
            </a>
            <a href="#jak-to-funguje" className="hover:text-neutral-900">
              Jak to funguje
            </a>
            <a href="#kontakt" className="hover:text-neutral-900">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className={`${btnPrimarySm} hidden sm:inline-flex sm:shrink-0`}
          >
            Nezávazná poptávka
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="border-b border-black/[0.05] bg-[#FDFCF9]/80"
          aria-labelledby="hero-heading"
        >
          <div className={`${shell} max-w-xl py-10 text-center sm:max-w-6xl sm:py-10 sm:text-left`}>
            <h1
              id="hero-heading"
              className="text-[1.35rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-2xl lg:text-[1.75rem]"
            >
              <span className="block">Neinzerujte dům.</span>
              <span className="block">Inzerujte domov.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-[20rem] text-sm leading-snug text-neutral-600 sm:mx-0 sm:mt-4 sm:max-w-md sm:text-[0.9375rem]">
              Připravíme nemovitost tak, aby se prodala rychleji a za lepší cenu.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
              <a href="#kontakt" className={btnSecondary}>
                Chci připravit nemovitost
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          className={`${sectionY} border-b border-black/[0.06] bg-white`}
          aria-labelledby="problem-heading"
        >
          <div className={shell}>
            <h2 id="problem-heading" className={h2}>
              Proč se nemovitosti neprodávají?
            </h2>
            <ul className={`${listTight} mt-4`} role="list">
              <li>• Působí prázdně a bez emocí</li>
              <li>• Fotky nezaujmou</li>
              <li>• Zaniknou mezi ostatními nabídkami</li>
            </ul>
            <div className="mt-5">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="sluzby"
          className={`${sectionY} scroll-mt-16 border-b border-black/[0.06] bg-[#FAF8F4]`}
          aria-labelledby="sluzby-heading"
        >
          <div className={shell}>
            <h2 id="sluzby-heading" className={h2}>
              Co děláme?
            </h2>
            <ul className={`${listTight} mt-4`} role="list">
              <li>• Home staging</li>
              <li>• Příprava nemovitosti k focení</li>
              <li>• Styling pro prodej</li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a href="#realizace" className={btnSecondary}>
                Před / Po
              </a>
              <a href="#kontakt" className={btnPrimary}>
                Chci připravit nemovitost
              </a>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section
          id="realizace"
          className={`${sectionY} scroll-mt-16 border-b border-black/[0.06] bg-white`}
          aria-labelledby="realizace-heading"
        >
          <div className={shell}>
            <h2 id="realizace-heading" className={h2}>
              Před / Po
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              <div
                className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-[#F5F0E8] text-center"
                aria-label="Místo pro fotografii před"
              >
                <span className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:text-xs">
                  Před
                </span>
              </div>
              <div
                className="flex aspect-[4/3] items-center justify-center rounded-xl border border-black/[0.08] bg-neutral-100 text-center"
                aria-label="Místo pro fotografii po"
              >
                <span className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                  Po
                </span>
              </div>
            </div>
            <ul className={`${listTight} mt-4 text-neutral-600`} role="list">
              <li>• více zájmu o prohlídky</li>
              <li>• lepší první dojem</li>
            </ul>
            <div className="mt-5">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="jak-to-funguje"
          className={`${sectionY} scroll-mt-16 border-b border-black/[0.06] bg-[#F5F0E8]`}
          aria-labelledby="process-heading"
        >
          <div className={shell}>
            <h2 id="process-heading" className={h2}>
              Jak to funguje
            </h2>
            <ol className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4">
              {[
                "Ozvete se nám",
                "Navrhneme řešení",
                "Připravíme nemovitost",
                "Vy fotíte a inzerujete",
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex gap-2 rounded-lg border border-black/[0.06] bg-white px-2.5 py-2.5 text-xs font-medium leading-snug text-neutral-800 sm:text-sm"
                >
                  <span className="shrink-0 tabular-nums text-neutral-400">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-5">
              <a href="#kontakt" className={btnSecondary}>
                Chci připravit nemovitost
              </a>
            </div>
          </div>
        </section>

        {/* Audience + proof — compact */}
        <section
          className={`${sectionY} border-b border-black/[0.06] bg-white`}
          aria-labelledby="audience-heading"
        >
          <div className={shell}>
            <h2 id="audience-heading" className={h2}>
              Pro koho
            </h2>
            <p className="mt-3 text-sm leading-snug text-neutral-700">
              Makléři · developeři · majitelé nemovitostí
            </p>
            <h3 className="mt-6 text-base font-semibold text-neutral-900 sm:text-lg">
              Proč MAKE HOME
            </h3>
            <ul className={`${listTight} mt-2`} role="list">
              <li>• Staging pro prodej — ne katalog interiérů</li>
              <li>• Ladíme to na fotku a inzerci</li>
              <li>• Krátké termíny, jasný výstup</li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className={`${sectionY} border-b border-black/[0.06] bg-[#FAF8F4]`}
          aria-labelledby="refs-heading"
        >
          <div className={shell}>
            <h2 id="refs-heading" className={h2}>
              Reference
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-snug text-neutral-800">
              <li className="border-l-2 border-neutral-900/20 pl-3">
                „Po stagingu byl byt pryč během týdne.“
              </li>
              <li className="border-l-2 border-neutral-900/20 pl-3">
                „Zájem byl několikanásobně vyšší než u původního inzerátu.“
              </li>
              <li className="border-l-2 border-neutral-900/20 pl-3">
                „Nemovitost najednou působila jako domov, ne jako prázdný prostor.“
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
              <a href="#kontakt" className={btnSecondary}>
                Chci připravit nemovitost
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={sectionY} aria-labelledby="final-cta-heading">
          <div className={shell}>
            <div className="rounded-2xl border border-black/[0.08] bg-neutral-900 px-5 py-8 text-center sm:px-8 sm:py-10">
              <h2
                id="final-cta-heading"
                className="text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl"
              >
                Připravíme nemovitost k prodeji.
              </h2>
              <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap">
                <a href="#kontakt" className={btnPrimaryOnDark}>
                  Nezávazná poptávka
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6"
                >
                  Chci připravit nemovitost
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="kontakt"
          className={`${sectionY} scroll-mt-16 border-t border-black/[0.06] bg-white`}
          aria-labelledby="kontakt-heading"
        >
          <div className={shell}>
            <h2 id="kontakt-heading" className={h2}>
              Kontakt
            </h2>
            <p className="mt-2 max-w-md text-sm leading-snug text-neutral-600">
              Krátká zpráva stačí — odpovíme co nejdříve.
            </p>
            <div className="mt-5 max-w-lg">
              <ContactForm submitClassName={btnPrimary} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] bg-[#F5F0E8] py-6 sm:py-7">
        <div className={`${shell} flex flex-col gap-2 text-center text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm`}>
          <p className="font-medium text-neutral-800">
            MAKE HOME — staging a příprava k prodeji
          </p>
          <p>
            <a
              href="https://www.instagram.com/makehomestaging/"
              className="font-medium text-neutral-900 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @makehomestaging
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
