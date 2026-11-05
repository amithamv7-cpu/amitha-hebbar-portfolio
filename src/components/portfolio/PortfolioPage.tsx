import { ArrowDown, ArrowUp, ArrowUpRight, Download, Instagram } from "lucide-react";

import { displayHost, featuredLinks, instagramHandle } from "@/data/portfolio";
import { profile } from "@/data/profile";

import { AnalyticsPanel } from "./AnalyticsPanel";
import { ResumeSections } from "./ResumeSections";
import { WorkSections } from "./WorkSections";

const [headlineRole, headlineFocus] = profile.headline.split(" | ");
const focusAreas = headlineFocus?.split(/,\s*|\s*&\s*/) ?? [];

const navItems = [
  ...(profile.summary ? [{ id: "summary", title: "Summary" }] : []),
  ...(profile.skills.length ? [{ id: "skills", title: "Skills" }] : []),
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "selected-work", title: "Selected Work" },
  { id: "analytics", title: "Analytics" },
];

export function PortfolioPage() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background">
      <header className="sticky top-0 z-30 border-b-2 border-foreground bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-10">
          <a
            href="#top"
            className="shrink-0 rounded-full bg-foreground px-3.5 py-1.5 font-display text-base font-bold tracking-tight text-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          >
            {profile.name}
          </a>
          <nav aria-label="Sections" className="-mr-4 flex-1 overflow-x-auto pr-4 md:mr-0 md:pr-0">
            <ul className="ml-auto flex w-max gap-1.5 whitespace-nowrap">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="block rounded-full border-2 border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Intro */}
        <section
          aria-labelledby="intro-name"
          className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 md:px-10 md:pb-20 md:pt-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-pop-pink opacity-60 blur-3xl md:h-96 md:w-96"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-pop-sky opacity-70 blur-3xl"
          />

          <div className="relative">
            <p className="eyebrow animate-rise inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1.5 text-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              Portfolio & Résumé
            </p>

            <h1
              id="intro-name"
              className="animate-rise mt-6 font-display-tight text-[clamp(4.25rem,17vw,13rem)] text-foreground [animation-delay:80ms]"
            >
              Amitha <span className="marker">M V</span>
            </h1>

            <p className="animate-rise mt-8 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-foreground [animation-delay:160ms] md:text-3xl">
              {headlineRole}
              <span className="text-primary"> | </span>
              <span className="text-muted-foreground">{headlineFocus}</span>
            </p>

            <div className="animate-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-primary px-5 py-3 font-medium text-primary-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              >
                Selected Work <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-5 py-3 font-medium text-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
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
                  className="group inline-flex max-w-full items-center gap-3 rounded-full border-2 border-foreground bg-accent py-1.5 pl-1.5 pr-4 text-accent-foreground shadow-pop transition hover:-translate-y-0.5 hover:shadow-pop-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
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
        </section>

        {/* Focus marquee (decorative; the same words are in the headline above) */}
        <div
          aria-hidden
          className="relative z-10 overflow-hidden border-y-2 border-foreground bg-foreground py-3 text-background"
        >
          <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-2xl font-bold tracking-tight md:text-3xl">
            {Array.from({ length: 2 }).flatMap((_, r) =>
              ["English", "ಕನ್ನಡ", ...focusAreas].map((word, i) => (
                <span key={`${r}-${i}`} className="flex items-center gap-8">
                  {word}
                  <span className="inline-block h-3 w-3 rounded-full bg-accent" />
                </span>
              )),
            )}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-20 md:px-10 md:pt-28">
          <ResumeSections />
        </div>

        <section
          id="selected-work"
          aria-labelledby="selected-work-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-24 md:px-10 md:pt-32"
        >
          <div className="mb-14 md:mb-20">
            <h2
              id="selected-work-title"
              className="font-display-tight text-[clamp(3.25rem,11vw,8rem)] text-foreground"
            >
              Selected <span className="marker">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Every card opens the original in a new tab.</p>
          </div>
          <WorkSections />
        </section>

        <div className="mx-auto max-w-7xl px-4 py-24 md:px-10 md:py-32">
          <AnalyticsPanel />
        </div>
      </main>

      <footer className="border-t-2 border-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 md:px-10">
          <p className="font-display text-xl font-bold tracking-tight text-foreground">
            {profile.name}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </footer>
    </div>
  );
}
