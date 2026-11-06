import { ArrowUpRight, Play } from "lucide-react";

import { displayHost, platformOf, type PortfolioLink } from "@/data/portfolio";

import { accentBg, type Accent } from "./accents";

/** Compact card for a run of same-platform videos with neutral labels (e.g. Story 01). */
export function StoryCard({ item, accent = "pink" }: { item: PortfolioLink; accent?: Accent }) {
  const platform = platformOf(item.url);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.title} on ${platform} (opens in a new tab)`}
      className="group flex h-full flex-col justify-between gap-6 rounded-[1.15rem] border-2 border-foreground bg-card p-4 shadow-pop transition duration-300 ease-out hover:-translate-y-1 hover:shadow-pop-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 md:p-5"
    >
      <span className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground text-foreground transition duration-300 group-hover:-rotate-6 group-hover:scale-110 ${accentBg[accent]}`}
        >
          <Play className="h-4 w-4 translate-x-px fill-current" aria-hidden />
        </span>
        <span className="eyebrow text-muted-foreground">{platform}</span>
      </span>
      <span>
        <span className="block font-display-tight text-3xl text-card-foreground md:text-4xl">
          {item.title}
        </span>
        <span className="mt-3 flex items-center justify-between gap-2 border-t-2 border-dashed border-foreground/40 pt-3">
          <span className="truncate font-mono text-xs text-muted-foreground">
            {displayHost(item.url)}
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 transition group-hover:rotate-45 group-hover:text-primary"
            aria-hidden
          />
        </span>
      </span>
    </a>
  );
}
