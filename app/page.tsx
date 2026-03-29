const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] transition duration-300 hover:bg-neutral-800 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const btnPrimarySm =
  "inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] transition duration-300 hover:bg-neutral-800 sm:px-6 sm:text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const btnPrimaryOnDark =
  "inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 shadow-[0_4px_28px_-4px_rgba(0,0,0,0.35)] transition duration-300 hover:bg-[#F5F0E8] hover:shadow-[0_12px_48px_-8px_rgba(0,0,0,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-neutral-900/90 bg-transparent px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 transition duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-neutral-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#FDFCF9]/85 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex items-center justify-between gap-4">
              <a
                href="#"
                className="text-[0.65rem] font-semibold tracking-[0.28em] text-neutral-900 sm:text-xs"
              >
                MAKE HOME
              </a>
              <a href="#kontakt" className={`${btnPrimarySm} md:hidden`}>
                Nezávazná poptávka
              </a>
            </div>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-600 sm:gap-x-10 sm:text-xs md:flex-1"
              aria-label="Hlavní navigace"
            >
              <a href="#sluzby" className="transition-colors hover:text-neutral-900">
                Služby
              </a>
              <a href="#realizace" className="transition-colors hover:text-neutral-900">
                Realizace
              </a>
              <a
                href="#jak-to-funguje"
                className="transition-colors hover:text-neutral-900"
              >
                Jak to funguje
              </a>
              <a href="#kontakt" className="transition-colors hover:text-neutral-900">
                Kontakt
              </a>
            </nav>
            <a
              href="#kontakt"
              className={`${btnPrimarySm} hidden md:inline-flex md:items-center md:justify-center`}
            >
              Nezávazná poptávka
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.85),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-10 lg:pb-36 lg:pt-24">
            <div className="flex flex-col gap-16 lg:gap-24">
              <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-4xl lg:text-left">
                <h1
                  id="hero-heading"
                  className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-neutral-900 sm:text-4xl sm:leading-[1.1] lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]"
                >
                  Neinzerujte dům. Inzerujte domov.
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:mx-0 lg:mt-10 lg:text-xl lg:leading-relaxed">
                  Připravíme nemovitost tak, aby zaujala na první pohled a prodala se
                  rychleji i za lepší cenu.
                </p>
                <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start lg:gap-8">
                  <a href="#kontakt" className={btnPrimary}>
                    Chci připravit nemovitost
                  </a>
                  <p className="max-w-xs text-center text-sm leading-relaxed text-neutral-500 sm:max-w-none sm:text-left">
                    Home staging a příprava nemovitostí k prodeji
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-6xl lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/80 via-transparent to-[#E8E0D4]/40 blur-2xl sm:-inset-6 lg:-inset-8"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white shadow-[0_32px_80px_-24px_rgba(0,0,0,0.18)] sm:rounded-[2rem]">
                  <div className="grid min-h-[300px] grid-cols-1 sm:min-h-[380px] md:grid-cols-2 md:min-h-[440px] lg:min-h-[min(56vh,600px)]">
                    <div className="relative flex flex-col items-center justify-center border-b border-black/[0.06] bg-gradient-to-b from-[#EFEBE3] to-[#E5DFD4] px-6 py-20 md:border-b-0 md:border-r md:py-24">
                      <div className="flex min-h-[200px] w-full max-w-sm flex-1 items-center justify-center rounded-xl border border-dashed border-neutral-400/40 bg-white/30 sm:min-h-[240px] lg:min-h-[280px]">
                        <span className="text-xs font-semibold tracking-[0.35em] text-neutral-400 sm:text-sm">
                          FOTO PŘED
                        </span>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#FDFCF9] to-[#F0EBE2] px-6 py-20 md:py-24">
                      <div className="flex min-h-[200px] w-full max-w-sm flex-1 items-center justify-center rounded-xl border border-black/[0.06] bg-white/80 shadow-inner sm:min-h-[240px] lg:min-h-[280px]">
                        <span className="text-xs font-semibold tracking-[0.35em] text-neutral-500 sm:text-sm">
                          FOTO PO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          className="border-t border-black/[0.06] bg-white py-20 sm:py-24 lg:py-32"
          aria-labelledby="problem-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="problem-heading"
              className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Proč některé nemovitosti neprodávají?
            </h2>
            <ul className="mt-14 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {[
                "Prázdný byt působí chladně a bez emocí",
                "Přeplněný prostor odvádí pozornost",
                "Fotky nezaujmou a inzerát zapadne",
                "Kupující tlačí na slevu",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-6 py-7 text-base leading-relaxed text-neutral-700 sm:py-8 sm:text-lg"
                >
                  <span
                    className="mt-2 h-px w-8 shrink-0 bg-neutral-900 sm:w-12"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section
          className="py-20 sm:py-24 lg:py-32"
          aria-labelledby="solution-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <h2
                  id="solution-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
                >
                  Připravíme prostor tak, aby prodával
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-relaxed">
                  Vytvoříme prostředí, ve kterém si kupující dokáže představit svůj
                  nový domov. Každý detail připravujeme s ohledem na to, jak bude
                  nemovitost působit v inzerci.
                </p>
                <div className="mt-10">
                  <a href="#kontakt" className={btnSecondary}>
                    Chci to taky
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="sluzby"
          className="scroll-mt-28 border-t border-black/[0.06] bg-[#FAF8F4] py-20 sm:py-24 lg:py-32"
          aria-labelledby="sluzby-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="sluzby-heading"
              className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Co pro vás zajistíme
            </h2>
            <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-6 lg:gap-6">
              <article className="flex flex-col justify-between rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.08)] lg:col-span-3 lg:min-h-[240px] lg:p-10">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                    Home staging
                  </h3>
                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    Vybavíme a nastylujeme prostor tak, aby působil přirozeně a
                    atraktivně.
                  </p>
                </div>
              </article>
              <article className="rounded-2xl border border-transparent bg-neutral-900 p-8 text-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.35)] lg:col-span-3 lg:min-h-[240px] lg:p-10">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Příprava nemovitosti
                </h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  Pomůžeme s úklidem, odstraněním rušivých prvků a reorganizací
                  prostoru.
                </p>
              </article>
              <article className="rounded-2xl border border-black/[0.06] bg-white/80 p-8 backdrop-blur-sm lg:col-span-4 lg:p-10">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  Příprava pro prezentaci
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Nemovitost připravíme tak, aby vypadala skvěle na fotkách i v
                  inzerci. V případě potřeby zajistíme i profesionální focení.
                </p>
              </article>
              <article className="rounded-2xl border border-dashed border-neutral-400/60 bg-[#F5F0E8]/50 p-8 lg:col-span-2 lg:p-10">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  Expresní staging
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Rychlá příprava před focením nebo prohlídkami.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Prepared for presentation */}
        <section
          className="py-20 sm:py-24 lg:py-32"
          aria-labelledby="prezentace-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="prezentace-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Připraveno k prezentaci
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Naším cílem není jen hezký interiér, ale nemovitost připravená k
              prodeji. Prostor připravujeme tak, aby fungoval nejen naživo, ale i
              na fotkách a v inzerci.
            </p>
            <aside className="mt-10 max-w-lg border-l-2 border-neutral-900 pl-6 sm:pl-8">
              <p className="text-sm font-medium text-neutral-800 sm:text-base">
                Pokud chcete, zajistíme i kompletní prezentaci:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-neutral-900" aria-hidden />
                  fotografie
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-neutral-900" aria-hidden />
                  video
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-neutral-900" aria-hidden />
                  virtuální prohlídky
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section
          id="realizace"
          className="scroll-mt-28 border-t border-black/[0.06] bg-neutral-900 py-24 text-white sm:py-28 lg:py-36"
          aria-labelledby="realizace-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <h2
                id="realizace-heading"
                className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Ukázky realizací
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                Každý prostor má potenciál. Pomůžeme ho ukázat.
              </p>
            </div>

            <div className="mt-16 flex flex-col gap-16 lg:mt-20 lg:gap-24">
              {[
                {
                  title: "OBÝVACÍ POKOJ",
                  caption: "Teplejší atmosféra a jasný účel místnosti v inzerci.",
                },
                {
                  title: "LOŽNICE",
                  caption: "Klid a útulno — kupující si snáze představí odpočinek.",
                },
                {
                  title: "BYT 2+KK",
                  caption: "Celkový dojem bytu sjednocený pro fotky i prohlídky.",
                },
              ].map((project, index) => (
                <article
                  key={project.title}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
                >
                  <div
                    className={`lg:col-span-5 ${index === 1 ? "lg:order-2 lg:text-right" : ""}`}
                  >
                    <p className="text-[0.7rem] font-semibold tabular-nums text-white/40 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p
                      className={`mt-5 text-base leading-relaxed text-white/65 sm:text-lg ${index === 1 ? "lg:ml-auto lg:max-w-md" : "max-w-md"}`}
                    >
                      {project.caption}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_40px_100px_-32px_rgba(0,0,0,0.6)] lg:col-span-7 ${index === 1 ? "lg:order-1" : ""}`}
                  >
                    <div className="grid grid-cols-2 gap-px bg-white/10">
                      <div className="relative flex min-h-[240px] items-center justify-center bg-[#2a2826] sm:min-h-[300px] lg:min-h-[360px]">
                        <span className="absolute left-4 top-4 rounded bg-black/40 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:left-6 sm:top-6 sm:text-[0.65rem]">
                          PŘED
                        </span>
                        <span className="h-16 w-px bg-white/10 sm:h-20" aria-hidden />
                      </div>
                      <div className="relative flex min-h-[240px] items-center justify-center bg-gradient-to-br from-[#4a4640] to-[#2e2c29] sm:min-h-[300px] lg:min-h-[360px]">
                        <span className="absolute right-4 top-4 rounded bg-white/15 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:right-6 sm:top-6 sm:text-[0.65rem]">
                          PO
                        </span>
                        <span className="h-16 w-px bg-white/20 sm:h-20" aria-hidden />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="jak-to-funguje"
          className="scroll-mt-28 bg-[#F5F0E8] py-20 sm:py-24 lg:py-32"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="process-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Jak to funguje
            </h2>
            <div className="relative mt-16">
              <div
                className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-black/15 to-transparent lg:block"
                aria-hidden
              />
              <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {[
                  "Ozvete se nám",
                  "Navrhneme řešení",
                  "Připravíme nemovitost",
                  "Vy fotíte a inzerujete",
                ].map((step, i) => (
                  <li key={step} className="relative pt-2">
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-neutral-900 shadow-sm">
                      {i + 1}
                    </span>
                    <span className="text-base font-medium leading-snug text-neutral-800 sm:text-lg">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Target */}
        <section
          className="border-t border-black/[0.06] bg-white py-20 sm:py-24 lg:py-32"
          aria-labelledby="target-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="target-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Pro koho to je
            </h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {["Realitní makléři", "Developeři", "Majitelé nemovitostí"].map(
                (label) => (
                  <li
                    key={label}
                    className="rounded-full border border-black/[0.08] bg-[#FAF8F4] px-6 py-2.5 text-sm font-medium text-neutral-800"
                  >
                    {label}
                  </li>
                )
              )}
            </ul>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Nejčastěji spolupracujeme s makléři, kteří chtějí prodávat rychle a
              bez zbytečných slev.
            </p>
          </div>
        </section>

        {/* Why us */}
        <section
          className="border-t border-black/[0.06] bg-[#FAF8F4] py-20 sm:py-24 lg:py-32"
          aria-labelledby="why-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:pr-8">
                <h2
                  id="why-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
                >
                  Proč MAKE HOME
                </h2>
                <div className="mt-8 hidden h-24 w-px bg-gradient-to-b from-neutral-900 to-transparent lg:block" aria-hidden />
              </div>
              <ul className="space-y-4 sm:space-y-5 lg:col-span-8">
                {[
                  "Nejsme designéři. Připravujeme nemovitosti k prodeji.",
                  "Přemýšlíme očima kupujícího i fotoaparátu",
                  "Víme, co funguje v realitní inzerci",
                  "Rychlé a efektivní řešení",
                  "Možnost kompletní prezentace",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-5 rounded-2xl border border-black/[0.06] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)] sm:gap-8 sm:p-8"
                  >
                    <span
                      className="w-10 shrink-0 pt-0.5 text-2xl font-semibold tabular-nums leading-none text-neutral-200 sm:w-12 sm:text-3xl"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 flex-1 pt-1 text-base font-medium leading-relaxed text-neutral-800 sm:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="border-t border-black/[0.06] bg-white py-20 sm:py-24 lg:py-32"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2
              id="testimonials-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
            >
              Co říkají klienti
            </h2>
            <div className="mt-14 columns-1 gap-8 md:columns-2 lg:columns-3 lg:gap-10">
              {[
                "„Po stagingu byl byt pryč během týdne.“",
                "„Zájem byl několikanásobně vyšší než u původního inzerátu.“",
                "„Nemovitost najednou působila jako domov, ne jako prázdný prostor.“",
              ].map((quote) => (
                <blockquote
                  key={quote}
                  className="mb-8 break-inside-avoid rounded-2xl border border-black/[0.06] bg-[#FAF8F4] p-8 sm:p-9"
                >
                  <p className="text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
                    {quote}
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-20 sm:py-24 lg:py-32"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.08] bg-neutral-900 px-8 py-16 text-center shadow-[0_40px_100px_-32px_rgba(0,0,0,0.45)] sm:px-14 sm:py-20 lg:px-20 lg:py-24">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-[#F5F0E8]/[0.07] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-white/[0.08] sm:inset-8"
                aria-hidden
              />
              <div className="relative mx-auto max-w-3xl">
                <h2
                  id="final-cta-heading"
                  className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
                >
                  Připravíme i vaši nemovitost tak, aby prodávala.
                </h2>
                <div className="mt-12">
                  <a href="#kontakt" className={btnPrimaryOnDark}>
                    Nezávazná poptávka
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="kontakt"
          className="scroll-mt-28 border-t border-black/[0.06] bg-white py-20 sm:py-24 lg:py-32"
          aria-labelledby="kontakt-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2
                  id="kontakt-heading"
                  className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
                >
                  Kontaktujte nás
                </h2>
              </div>
              <div className="lg:col-span-7">
                <ContactForm submitClassName={btnPrimary} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] bg-[#F5F0E8] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-10">
          <p className="font-medium text-neutral-800">
            MAKE HOME – Home staging a příprava nemovitostí
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/makehomestaging/"
              className="font-medium text-neutral-900 underline-offset-4 hover:underline"
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
