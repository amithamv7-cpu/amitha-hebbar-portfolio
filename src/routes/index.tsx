import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Instagram } from "lucide-react";

import { AnalyticsPanel } from "@/components/portfolio/AnalyticsPanel";
import { WorkSections } from "@/components/portfolio/WorkSections";
import {
  displayHost,
  featuredLinks,
  instagramHandle,
  sectionCount,
  sections,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amitha Hebbar — Portfolio" },
      {
        name: "description",
        content:
          "Amitha Hebbar's portfolio: certificates, published works, broadcast and video, digital stories, short films and social links.",
      },
      { property: "og:title", content: "Amitha Hebbar — Portfolio" },
      {
        property: "og:description",
        content:
          "Certificates, published works, broadcast and video, digital stories, short films and social links by Amitha Hebbar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  ...sections.map((s) => ({ id: s.id, title: s.title })),
  { id: "analytics", title: "Analytics" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background paper-grain">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 md:px-10">
          <a
            href="#top"
            className="shrink-0 font-display text-lg tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Amitha Hebbar<span className="text-primary">.</span>
          </a>
          <nav aria-label="Sections" className="-mx-2 flex-1 overflow-x-auto">
            <ul className="ml-auto flex w-max gap-1 whitespace-nowrap">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="eyebrow block rounded-full px-3 py-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Masthead */}
        <section className="grid gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
          <div className="animate-rise">
            <p className="eyebrow text-primary">Portfolio — Index of work</p>
            <h1 className="mt-6 font-display-tight text-[clamp(4rem,14vw,11rem)] text-foreground">
              Amitha
              <br />
              <span className="italic">Hebbar</span>
              <span className="text-primary">.</span>
            </h1>
            {featuredLinks().map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.title} — ${instagramHandle(link.url) ?? displayHost(link.url)} (opens in a new tab)`}
                className="group mt-10 inline-flex max-w-full items-center gap-4 rounded-full border border-primary bg-card py-2 pl-2 pr-5 shadow-card transition duration-500 hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Instagram className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow block text-muted-foreground">{link.title}</span>
                  <span className="block truncate font-display text-xl italic text-foreground group-hover:text-primary">
                    {instagramHandle(link.url) ?? displayHost(link.url)}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-primary transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            ))}
          </div>

          <nav
            aria-label="Index"
            className="animate-rise [animation-delay:150ms] lg:pb-4"
          >
            <ol className="border-t border-foreground">
              {sections.map((s, i) => (
                <li key={s.id} className="border-b border-border">
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-4 py-3.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="eyebrow w-6 text-muted-foreground group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-2xl tracking-tight">{s.title}</span>
                    <span className="eyebrow text-muted-foreground">
                      {String(sectionCount(s)).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <p className="eyebrow mt-5 text-muted-foreground">
              Every card opens the original in a new tab
            </p>
          </nav>
        </section>

        <WorkSections />

        <div className="py-24 md:py-32">
          <AnalyticsPanel />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-10">
          <p className="font-display text-lg text-foreground">
            Amitha Hebbar<span className="text-primary">.</span>
          </p>
          <a
            href="#top"
            className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </footer>
    </div>
  );
}
