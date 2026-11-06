import { ArrowUpRight, Play, Sparkles } from "lucide-react";

import {
  displayHost,
  instagramHandle,
  platformOf,
  youTubeId,
  type PortfolioLink,
} from "@/data/portfolio";

import { accentBg, type Accent } from "./accents";

type Props = {
  item: PortfolioLink;
  index: number;
  total: number;
  accent?: Accent;
  /** Reserve a media area so text cards line up next to video cards. */
  withMedia?: boolean;
};

export function LinkCard({ item, index, total, accent = "lime", withMedia = false }: Props) {
  const platform = platformOf(item.url);
  const ytId = youTubeId(item.url);
  const handle = instagramHandle(item.url);
  const number = String(index + 1).padStart(2, "0");
  // Skip "No. 01" when the owner's label already carries a number (e.g. "Work 1").
  const showNumber = total > 1 && !/\d$/.test(item.title);
  const subtitle = item.tag ?? handle;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-featured={item.featured ? "true" : undefined}
      aria-label={`${item.title}${subtitle ? ` — ${subtitle}` : ""}${showNumber ? `, number ${number}` : ""} on ${platform} (opens in a new tab)`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.15rem] border-2 border-foreground bg-card shadow-pop transition duration-300 ease-out hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-pop-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 ${
        item.featured ? "ring-4 ring-accent" : ""
      }`}
    >
      {ytId && (
        <div className="relative m-2 mb-0 aspect-video overflow-hidden rounded-xl border-2 border-foreground bg-muted">
          <img
            src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full scale-[1.02] object-cover transition duration-700 ease-out group-hover:scale-[1.07]"
          />
          <span className="absolute bottom-2.5 left-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-accent text-accent-foreground transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Play className="h-4 w-4 translate-x-px fill-current" aria-hidden />
          </span>
        </div>
      )}
      {!ytId && withMedia && (
        <div
          className={`relative m-2 mb-0 flex aspect-video items-end overflow-hidden rounded-xl border-2 border-foreground p-4 dot-grid ${accentBg[accent]}`}
        >
          <span className="font-display-tight text-4xl text-foreground transition duration-500 group-hover:-rotate-2 sm:text-5xl">
            {platform}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between gap-5 p-5">
        <div>
          <div className="flex items-center justify-between gap-3">
            <span
              className={`eyebrow inline-flex items-center gap-1.5 rounded-full border-2 border-foreground px-2.5 py-1 text-foreground ${accentBg[accent]}`}
            >
              {item.featured && <Sparkles className="h-3 w-3" aria-hidden />}
              {platform}
            </span>
            {showNumber && <span className="eyebrow text-muted-foreground">No. {number}</span>}
          </div>
          <span className="mt-4 block font-display text-2xl font-bold leading-tight tracking-tight text-card-foreground">
            {item.title}
          </span>
          {subtitle && (
            <span
              className={`mt-1 block font-medium ${
                item.featured ? "text-lg text-primary" : "text-sm text-muted-foreground"
              }`}
            >
              {subtitle}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t-2 border-dashed border-foreground/40 pt-4">
          <span className="truncate font-mono text-xs text-muted-foreground">
            {displayHost(item.url)}
          </span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground transition duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </a>
  );
}
