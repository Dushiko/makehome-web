export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FDFCF9]/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex items-center justify-between gap-4">
              <a
                href="#"
                className="text-sm font-semibold tracking-[0.2em] text-neutral-900 sm:text-base"
              >
                MAKE HOME
              </a>
              <a
                href="#kontakt"
                className="rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-neutral-800 sm:px-5 sm:text-sm md:hidden"
              >
                Nezávazná poptávka
              </a>
            </div>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-neutral-700 sm:gap-x-8 sm:text-sm md:flex-1"
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
              className="hidden shrink-0 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800 md:inline-flex md:items-center md:justify-center"
            >
              Nezávazná poptávka
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20"
          aria-labelledby="hero-heading"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-8">
              <h1
                id="hero-heading"
                className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
              >
                Neinzerujte dům. Inzerujte domov.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
                Připravíme nemovitost tak, aby zaujala na první pohled a prodala se
                rychleji i za lepší cenu.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-neutral-800"
                >
                  Chci připravit nemovitost
                </a>
                <p className="text-sm text-neutral-500">
                  Home staging a příprava nemovitostí k prodeji
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-4 shadow-lg shadow-black/5">
                <span className="text-xs font-semibold tracking-widest text-neutral-400">
                  FOTO PŘED
                </span>
              </div>
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-4 shadow-lg shadow-black/5">
                <span className="text-xs font-semibold tracking-widest text-neutral-400">
                  FOTO PO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          className="border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="problem-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="problem-heading"
              className="mb-10 max-w-2xl text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Proč některé nemovitosti neprodávají?
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              {[
                "Prázdný byt působí chladně a bez emocí",
                "Přeplněný prostor odvádí pozornost",
                "Fotky nezaujmou a inzerát zapadne",
                "Kupující tlačí na slevu",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-black/5 bg-[#FDFCF9] px-6 py-5 text-neutral-700 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="solution-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-black/5 sm:p-10 lg:p-12">
              <h2
                id="solution-heading"
                className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
              >
                Připravíme prostor tak, aby prodával
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                Vytvoříme prostředí, ve kterém si kupující dokáže představit svůj
                nový domov. Každý detail připravujeme s ohledem na to, jak bude
                nemovitost působit v inzerci.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-900 bg-transparent px-8 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Chci to taky
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="sluzby"
          className="scroll-mt-24 border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="sluzby-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="sluzby-heading"
              className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Co pro vás zajistíme
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              <article className="rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-md shadow-black/5">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Home staging
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Vybavíme a nastylujeme prostor tak, aby působil přirozeně a
                  atraktivně.
                </p>
              </article>
              <article className="rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-md shadow-black/5">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Příprava nemovitosti
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Pomůžeme s úklidem, odstraněním rušivých prvků a reorganizací
                  prostoru.
                </p>
              </article>
              <article className="rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-md shadow-black/5">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Příprava pro prezentaci
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Nemovitost připravíme tak, aby vypadala skvěle na fotkách i v
                  inzerci. V případě potřeby zajistíme i profesionální focení.
                </p>
              </article>
              <article className="rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-md shadow-black/5">
                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
                  Expresní staging
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Rychlá příprava před focením nebo prohlídkami.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Prepared for presentation */}
        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="prezentace-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="prezentace-heading"
              className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
            >
              Připraveno k prezentaci
            </h2>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-neutral-600">
              Naším cílem není jen hezký interiér, ale nemovitost připravená k
              prodeji. Prostor připravujeme tak, aby fungoval nejen naživo, ale i
              na fotkách a v inzerci.
            </p>
            <aside className="max-w-xl rounded-xl border border-dashed border-neutral-300 bg-white/60 px-5 py-5 text-sm text-neutral-600 sm:px-6 sm:py-6">
              <p className="mb-3 font-medium text-neutral-700">
                Pokud chcete, zajistíme i kompletní prezentaci:
              </p>
              <ul className="list-inside list-disc space-y-1 text-neutral-600">
                <li>fotografie</li>
                <li>video</li>
                <li>virtuální prohlídky</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section
          id="realizace"
          className="scroll-mt-24 border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="realizace-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="realizace-heading"
              className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
            >
              Ukázky realizací
            </h2>
            <p className="mb-12 max-w-2xl text-lg text-neutral-600">
              Každý prostor má potenciál. Pomůžeme ho ukázat.
            </p>
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
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
              ].map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-black/5 bg-[#FDFCF9] shadow-lg shadow-black/5"
                >
                  <div className="border-b border-black/5 px-4 py-3 text-center text-xs font-semibold tracking-widest text-neutral-500">
                    {project.title}
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-black/5 p-3">
                    <div className="flex aspect-square items-center justify-center rounded-lg bg-white">
                      <span className="text-[10px] font-semibold tracking-widest text-neutral-400 sm:text-xs">
                        PŘED
                      </span>
                    </div>
                    <div className="flex aspect-square items-center justify-center rounded-lg bg-white">
                      <span className="text-[10px] font-semibold tracking-widest text-neutral-400 sm:text-xs">
                        PO
                      </span>
                    </div>
                  </div>
                  <p className="px-4 py-4 text-sm leading-relaxed text-neutral-600">
                    {project.caption}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="jak-to-funguje"
          className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="process-heading"
              className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Jak to funguje
            </h2>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {[
                "Ozvete se nám",
                "Navrhneme řešení",
                "Připravíme nemovitost",
                "Vy fotíte a inzerujete",
              ].map((step, i) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/5"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="font-medium text-neutral-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Target */}
        <section
          className="border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="target-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="target-heading"
              className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
            >
              Pro koho to je
            </h2>
            <ul className="mb-8 flex flex-wrap gap-3">
              {["Realitní makléři", "Developeři", "Majitelé nemovitostí"].map(
                (label) => (
                  <li
                    key={label}
                    className="rounded-full border border-black/10 bg-[#FDFCF9] px-5 py-2 text-sm font-medium text-neutral-800"
                  >
                    {label}
                  </li>
                )
              )}
            </ul>
            <p className="max-w-2xl text-neutral-600 leading-relaxed">
              Nejčastěji spolupracujeme s makléři, kteří chtějí prodávat rychle a
              bez zbytečných slev.
            </p>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="why-heading"
              className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Proč MAKE HOME
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              {[
                "Nejsme designéři. Připravujeme nemovitosti k prodeji.",
                "Přemýšlíme očima kupujícího i fotoaparátu",
                "Víme, co funguje v realitní inzerci",
                "Rychlé a efektivní řešení",
                "Možnost kompletní prezentace",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                    aria-hidden
                  />
                  <span className="text-neutral-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="testimonials-heading"
              className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Co říkají klienti
            </h2>
            <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
              {[
                "„Po stagingu byl byt pryč během týdne.“",
                "„Zájem byl několikanásobně vyšší než u původního inzerátu.“",
                "„Nemovitost najednou působila jako domov, ne jako prázdný prostor.“",
              ].map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-md shadow-black/5"
                >
                  <p className="text-neutral-700 leading-relaxed">{quote}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-black/5 bg-neutral-900 px-8 py-14 text-center shadow-xl shadow-black/20 sm:px-12 sm:py-16">
              <h2
                id="final-cta-heading"
                className="mx-auto mb-8 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl"
              >
                Připravíme i vaši nemovitost tak, aby prodávala.
              </h2>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg transition hover:bg-[#F5F0E8]"
              >
                Nezávazná poptávka
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="kontakt"
          className="scroll-mt-24 border-t border-black/5 bg-white py-16 sm:py-20 lg:py-24"
          aria-labelledby="kontakt-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              id="kontakt-heading"
              className="mb-10 text-2xl font-semibold tracking-tight text-neutral-900 sm:mb-12 sm:text-3xl"
            >
              Kontaktujte nás
            </h2>
            <form
              className="mx-auto max-w-xl space-y-6 rounded-2xl border border-black/5 bg-[#FDFCF9] p-8 shadow-lg shadow-black/5 sm:p-10"
              action="#"
              method="post"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-800">
                  Jméno
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-neutral-900/10 transition focus:border-neutral-900 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-neutral-900/10 transition focus:border-neutral-900 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-800">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-neutral-900/10 transition focus:border-neutral-900 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-800">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none ring-neutral-900/10 transition focus:border-neutral-900 focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-neutral-900 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800 sm:w-auto sm:px-10"
              >
                Odeslat poptávku
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#F5F0E8] py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-center text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p className="text-neutral-700">
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
