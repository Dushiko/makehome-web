import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { ContactForm } from "./components/ContactForm";

const btnPrimary =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-neutral-900/25 ring-2 ring-neutral-900/10 transition hover:bg-neutral-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:min-h-[44px] sm:px-6 sm:py-2.5";

const btnPrimarySm =
  "inline-flex min-h-[40px] items-center justify-center rounded-full bg-neutral-900 px-3.5 py-2 text-[0.7rem] font-semibold tracking-wide text-white shadow-md shadow-neutral-900/20 ring-1 ring-neutral-900/10 transition hover:bg-neutral-800 sm:min-h-[40px] sm:px-4 sm:text-xs";

const btnPrimaryOnDark =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold tracking-wide text-neutral-900 shadow-lg shadow-black/20 ring-2 ring-white/30 transition hover:bg-[#F5F0E8] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[44px] sm:py-2.5";

const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-neutral-900/90 bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-6";

const shell = "mx-auto max-w-2xl px-3 sm:max-w-6xl sm:px-5";
const sectionY = "py-5 sm:py-7";
const h2 =
  "text-lg font-semibold leading-tight tracking-tight text-neutral-900 sm:text-xl";
const listTight =
  "mt-2 space-y-1 text-[0.8125rem] leading-snug text-neutral-700 sm:text-sm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-neutral-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#FDFCF9]/95 backdrop-blur-md">
        <div
          className={`${shell} flex flex-col gap-1.5 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3`}
        >
          <div className="flex items-center justify-between gap-2">
            <a
              href="#"
              className="text-[0.55rem] font-semibold tracking-[0.2em] text-neutral-900 sm:text-[0.6rem]"
            >
              MAKE HOME
            </a>
            <a href="#kontakt" className={`${btnPrimarySm} sm:hidden`}>
              Poptávka
            </a>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-neutral-600 sm:justify-start sm:gap-x-5 sm:text-[0.65rem] md:flex-1"
            aria-label="Hlavní navigace"
          >
            <a href="#reseni" className="hover:text-neutral-900">
              Řešení
            </a>
            <a href="#realizace" className="hover:text-neutral-900">
              Před / Po
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
          <div
            className={`${shell} max-w-xl py-6 text-center sm:max-w-6xl sm:py-7 sm:text-left`}
          >
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-neutral-500 sm:text-xs">
              Makléři · developeři
            </p>
            <h1
              id="hero-heading"
              className="mt-1.5 text-[1.25rem] font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:mt-2 sm:text-2xl lg:text-[1.65rem]"
            >
              <span className="block">Neinzerujte dům.</span>
              <span className="block">Inzerujte domov.</span>
            </h1>
            <p className="mx-auto mt-2 max-w-[18rem] text-[0.8125rem] leading-snug text-neutral-600 sm:mx-0 sm:mt-2.5 sm:max-w-sm sm:text-sm">
              Staging a příprava k focení — rychlejší prodej, lepší cena.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
              <a href="#realizace" className={btnSecondary}>
                Před / Po
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
              Co brzdí prodej
            </h2>
            <ul className={`${listTight}`} role="list">
              <li>• Prázdný interiér na fotkách táhne méně zájemců.</li>
              <li>• Inzerát vypadá jako stovka jiných.</li>
              <li>• Méně prohlídek, delší čas na trhu.</li>
            </ul>
            <div className="mt-3">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section
          id="reseni"
          className={`${sectionY} scroll-mt-14 border-b border-black/[0.06] bg-[#FAF8F4]`}
          aria-labelledby="reseni-heading"
        >
          <div className={shell}>
            <h2 id="reseni-heading" className={h2}>
              Co z toho máte
            </h2>
            <ul className={`${listTight}`} role="list">
              <li>• Silnější první dojem v inzerci.</li>
              <li>• Místnosti čitelné na fotce — ne „prázdný box“.</li>
              <li>• Termíny a postup domluvené dopředu.</li>
            </ul>
            <div className="mt-3">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section
          id="realizace"
          className={`${sectionY} scroll-mt-14 border-b border-black/[0.06] bg-white`}
          aria-labelledby="realizace-heading"
        >
          <div className={shell}>
            <h2 id="realizace-heading" className={h2}>
              Před / Po
            </h2>
            <div className="mt-2 w-full sm:mt-2.5">
              <BeforeAfterSlider
                beforeSrc="/IMAGES/PREDPO/001_pred.jpeg"
                afterSrc="/IMAGES/PREDPO/001_po.jpg"
              />
            </div>
            <p className="mt-2 text-[0.8125rem] leading-snug text-neutral-600 sm:text-sm">
              Více kliků, lepší fotky, vyšší šance na prohlídku.
            </p>
            <div className="mt-3">
              <a href="#kontakt" className={btnPrimary}>
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className={sectionY} aria-labelledby="mid-cta-heading">
          <div className={shell}>
            <div className="rounded-xl border-2 border-neutral-900 bg-neutral-900 px-4 py-5 text-center shadow-lg shadow-neutral-900/20 sm:px-6 sm:py-6">
              <h2
                id="mid-cta-heading"
                className="text-base font-semibold leading-snug tracking-tight text-white sm:text-lg"
              >
                Jedna zpráva, nezávazně — ozveme se s termínem.
              </h2>
              <div className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
                <a href="#kontakt" className={`${btnPrimaryOnDark} w-full sm:w-auto`}>
                  Nezávazná poptávka
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="kontakt"
          className={`${sectionY} scroll-mt-14 border-t border-black/[0.06] bg-white pb-8`}
          aria-labelledby="kontakt-heading"
        >
          <div className={shell}>
            <h2 id="kontakt-heading" className={h2}>
              Kontakt
            </h2>
            <p className="mt-1 text-[0.8125rem] leading-snug text-neutral-600 sm:text-sm">
              Stačí pár řádků — odpovídáme rychle.
            </p>
            <div className="mt-3 max-w-lg">
              <ContactForm submitClassName={btnPrimary} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] bg-[#F5F0E8] py-3.5 sm:py-4">
        <div
          className={`${shell} flex flex-col gap-1 text-center text-[0.65rem] text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-xs`}
        >
          <p className="font-medium text-neutral-800">
            MAKE HOME — staging k prodeji
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
