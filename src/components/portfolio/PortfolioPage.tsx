import { ArrowDown, ArrowUp, ArrowUpRight, Download, Instagram, Mail } from "lucide-react";

import { displayHost, featuredLinks, instagramHandle, sectionCount, sections } from "@/data/portfolio";
import { profile } from "@/data/profile";

import { accentBg, accentFor } from "./accents";
import { ContactList, ContactTiles } from "./ContactLinks";
import { ResumeSections } from "./ResumeSections";
import { WorkSections } from "./WorkSections";

const [headlineRole, headlineFocus] = profile.headline.split(" | ");
const focusAreas = headlineFocus?.split(/,\s*|\s*&\s*/) ?? [];
const current = profile.experience.find((e) => e.end === "Present");

const navItems = [
  ...(profile.summary ? [{ id: "summary", title: "Summary" }] : []),
  ...(profile.skills.length ? [{ id: "skills", title: "Skills" }] : []),
  { id: "what-i-do", title: "What I do" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "selected-work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const focusRing = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40";

export function PortfolioPage() {
  return (
    <div id="top" className="paper-grain min-h-screen overflow-x-clip bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b-2 border-foreground bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-10">
          <a
            href="#top"
            className={`shrink-0 rounded-full bg-foreground px-3.5 py-1.5 font-display text-base font-bold tracking-tight text-background ${focusRing}`}
          >
            {profile.name}
          </a>
          <nav aria-label="Sections" className="-mr-4 flex-1 overflow-x-auto pr-4 md:mr-0 md:pr-0">
            <ul className="ml-auto flex w-max gap-1 whitespace-nowrap">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={`block rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground ${focusRing}`}
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={`mailto:${profile.contact.email}`}
            className={`hidden shrink-0 items-center gap-2 rounded-full border-2 border-foreground bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-pop md:inline-flex ${focusRing}`}
          >
            <Mail className="h-3.5 w-3.5" aria-hidden /> Email me
          </a>
        </div>
      </header>

      <main id="main">
        {/* Intro */}
        <section
          aria-labelledby="intro-name"
          className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-pop-pink opacity-50 blur-3xl md:h-[28rem] md:w-[28rem]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-pop-sky opacity-60 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow animate-rise inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1.5 text-foreground">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Portfolio & Résumé
              </p>

              <h1
                id="intro-name"
                className="animate-rise mt-6 font-display-tight text-[clamp(4.2rem,16vw,9.5rem)] text-foreground [animation-delay:80ms]"
              >
                <span className="block">Amitha</span>{" "}
                <span className="marker">M V</span>
              </h1>

              <p className="animate-rise mt-7 max-w-2xl font-display text-xl font-semibold leading-snug tracking-tight text-foreground [animation-delay:160ms] md:text-2xl">
                {headlineRole}
                <span className="text-primary"> / </span>
                <span className="text-muted-foreground">{headlineFocus}</span>
              </p>

              <div className="animate-rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
                <a
                  href="#selected-work"
                  className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-5 py-3 font-medium text-primary-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg ${focusRing}`}
                >
                  Selected Work <ArrowDown className="h-4 w-4" aria-hidden />
                </a>
                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    download
                    className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-5 py-3 font-medium text-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg ${focusRing}`}
                  >
                    Download résumé <Download className="h-4 w-4" aria-hidden />
                  </a>
                )}
                {featuredLinks().map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.title} — ${instagramHandle(link.url) ?? displayHost(link.url)} (opens in a new tab)`}
                    className={`group inline-flex max-w-full items-center gap-3 rounded-full border-2 border-foreground bg-accent py-1.5 pl-1.5 pr-4 text-accent-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg ${focusRing}`}
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                      <Instagram className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="eyebrow block">{link.title}</span>
                      <span className="block truncate font-display text-lg font-bold">
                        {instagramHandle(link.url) ?? displayHost(link.url)}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition group-hover:rotate-45"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Editorial cutout portrait + quick contact */}
            <aside
              aria-label="Portrait and quick contact"
              className="animate-rise [animation-delay:320ms] lg:col-span-5 lg:pl-6"
            >
              <div className="relative mx-auto flex min-h-[340px] w-full max-w-[470px] items-start justify-center overflow-hidden md:min-h-[500px]">
                <div aria-hidden className="absolute bottom-7 h-[78%] w-[82%] rotate-[-7deg] rounded-[2.5rem] border-2 border-foreground bg-pop-pink shadow-pop-lg md:bottom-9" />
                <div aria-hidden className="absolute bottom-3 h-[76%] w-[82%] rotate-[5deg] rounded-[2.5rem] border-2 border-foreground bg-pop-sky md:bottom-5" />
                <div aria-hidden className="absolute bottom-8 h-[72%] w-[76%] rounded-[48%_52%_38%_42%] bg-pop-lime/80 md:bottom-10" />
                <span aria-hidden className="absolute left-2 top-8 z-20 rotate-[-12deg] font-display text-4xl text-primary md:left-0 md:top-12 md:text-5xl">✳</span>
                <span aria-hidden className="absolute right-4 top-24 z-20 rotate-12 font-display text-3xl text-foreground md:right-2 md:top-28 md:text-4xl">✦</span>
                <img
                  src="https://cdn.jsdelivr.net/gh/amithamv7-cpu/amitha-hebbar-portfolio@main/1000561050.png"
                  alt="Portrait of Amitha M V"
                  width={900}
                  height={1200}
                  decoding="async"
                  className="absolute left-1/2 top-0 z-10 h-[125%] w-auto max-w-none -translate-x-1/2 object-contain object-top drop-shadow-[0_16px_14px_rgba(0,0,0,0.2)]"
                  fetchPriority="high"
                />
                <span className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rotate-[-3deg] whitespace-nowrap rounded-full border-2 border-foreground bg-card px-4 py-2 font-mono text-[11px] font-bold tracking-[0.16em] shadow-pop md:bottom-7">
                  WORDS • STORIES • IDEAS
                </span>
                <span className="absolute right-0 top-3 z-20 rotate-6 rounded-full border-2 border-foreground bg-pop-orange px-3 py-2 font-mono text-xs font-bold shadow-pop md:right-1 md:top-5">
                  THAT’S ME!
                </span>
              </div>
              <div className="relative mt-5 rounded-[1.5rem] border-2 border-foreground bg-card p-5 shadow-pop-lg transition duration-500 md:p-6 lg:rotate-[1.25deg] lg:hover:rotate-0">
                {current && (
                  <div className="rounded-2xl bg-ink p-4 text-ink-foreground">
                    <p className="eyebrow flex items-center gap-2 text-ink-muted">
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                      Currently
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold tracking-tight">
                      {current.organization}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-ink-muted">
                      {current.start} – {current.end}
                    </p>
                  </div>
                )}

                {focusAreas.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
                    {focusAreas.map((f, i) => (
                      <li
                        key={f}
                        className={`rounded-full border-2 border-foreground px-3 py-1 text-sm font-semibold text-foreground ${
                          [accentBg.lime, accentBg.pink, accentBg.sky][i % 3]
                        }`}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-3">
                  <ContactList />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Focus marquee (decorative; the same words are in the headline above) */}
        <div
          aria-hidden
          className="relative z-10 overflow-hidden border-y-2 border-foreground bg-pop-orange py-2.5 text-foreground"
        >
          <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-xl font-bold tracking-tight md:text-2xl">
            {Array.from({ length: 2 }).flatMap((_, r) =>
              ["English", "ಕನ್ನಡ", ...focusAreas].map((word, i) => (
                <span key={`${r}-${i}`} className="flex items-center gap-8">
                  {word}
                  <span className="inline-block h-2.5 w-2.5 rotate-45 bg-accent" />
                </span>
              )),
            )}
          </div>
        </div>

        <section id="what-i-do" aria-labelledby="what-i-do-title" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 md:px-10 md:pt-28">
          <p className="eyebrow text-muted-foreground">A little bit of everything</p>
          <h2 id="what-i-do-title" className="mt-3 font-display-tight text-[clamp(3.25rem,10vw,7rem)] text-foreground">What I <span className="marker">do</span></h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Words, languages, stories and smart tools — I bring ideas to life across formats and platforms.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Create content", "Create engaging content for digital platforms, social media and editorial needs."],
              ["02", "Write scripts & copy", "Write scripts, captions, campaign copy and clear, audience-first brand communication."],
              ["03", "Translate Kannada & English", "Translate and localize content between Kannada and English while keeping meaning, tone and context intact."],
              ["04", "Transcription", "Turn audio and video into accurate, readable transcripts, with careful editing and cleanup."],
              ["05", "Edit videos", "Shape raw footage into polished, engaging videos for reels and other digital formats."],
              ["06", "Make things happen with AI", "Use AI tools for ideation, content creation, language tasks, editing and smarter workflows."],
            ].map(([number, title, description], index) => (
              <article key={number} className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-pop transition duration-200 hover:-translate-y-1 hover:shadow-pop-lg md:p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground ${["bg-pop-lime", "bg-pop-pink", "bg-pop-sky", "bg-pop-orange", "bg-pop-pink", "bg-pop-lime"][index]}`} aria-hidden>
                  <span className="font-mono text-sm font-bold">{number}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pt-20 md:px-10 md:pt-28">
          <ResumeSections />
        </div>

        <section
          id="selected-work"
          aria-labelledby="selected-work-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-24 md:px-10 md:pt-32"
        >
          <div className="mb-14 md:mb-20">
            <p className="eyebrow text-muted-foreground">Portfolio</p>
            <h2
              id="selected-work-title"
              className="mt-3 font-display-tight text-[clamp(3.25rem,10vw,7rem)] text-foreground"
            >
              Selected <span className="marker">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Every card opens the original in a new tab.</p>

            <nav aria-label="Work categories" className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card py-1 pl-1 pr-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-pop ${focusRing}`}
                    >
                      <span
                        className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 font-mono text-[0.6875rem] ${accentBg[accentFor(s.id)]}`}
                      >
                        {sectionCount(s)}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <WorkSections />
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 md:px-10 md:py-32"
        >
          <div className="reveal rounded-[1.5rem] border-2 border-foreground bg-ink px-5 py-10 text-ink-foreground shadow-pop-lg sm:px-8 md:px-12 md:py-14">
            <p className="eyebrow text-accent">Get in touch</p>
            <h2
              id="contact-title"
              className="mt-3 font-display-tight text-[clamp(3rem,10vw,6.5rem)] text-ink-foreground"
            >
              Contact
            </h2>
            <div className="mt-10">
              <ContactTiles />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 md:px-10">
          <p className="font-display text-xl font-bold tracking-tight text-foreground">
            {profile.name}
          </p>
          <a
            href="#top"
            className={`inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent ${focusRing}`}
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </footer>
    </div>
  );
}
