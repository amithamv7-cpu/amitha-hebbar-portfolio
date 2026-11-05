import { ArrowUpRight, Play } from "lucide-react";

import {
  displayHost,
  instagramHandle,
  platformOf,
  youTubeId,
  type PortfolioLink,
} from "@/data/portfolio";

type Props = {
  item: PortfolioLink;
  index: number;
  total: number;
  /** Reserve a media area so text cards line up next to video cards. */
  withMedia?: boolean;
};

export function LinkCard({ item, index, total, withMedia = false }: Props) {
  const platform = platformOf(item.url);
  const ytId = youTubeId(item.url);
  const handle = instagramHandle(item.url);
  const number = String(index + 1).padStart(2, "0");
  const showNumber = total > 1;
  const subtitle = item.tag ?? handle;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      data-featured={item.featured ? "true" : undefined}
      aria-label={`${item.title}${subtitle ? ` — ${subtitle}` : ""}${showNumber ? `, number ${number}` : ""} on ${platform} (opens in a new tab)`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-card transition duration-500 ease-out hover:-translate-y-1 hover:border-primary/60 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        item.featured ? "border-primary ring-1 ring-primary" : "border-border"
      }`}
    >
      {ytId && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full scale-[1.01] object-cover grayscale-[40%] transition duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
          />
          <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition duration-500 group-hover:scale-110">
            <Play className="h-4 w-4 translate-x-px fill-current" aria-hidden />
          </span>
        </div>
      )}
      {!ytId && withMedia && (
        <div className="relative flex aspect-video items-end overflow-hidden border-b border-border bg-secondary p-5 paper-grain">
          <span className="font-display-tight text-5xl italic text-foreground/80 transition duration-700 group-hover:text-primary">
            {platform}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between gap-6 p-5">
        <div>
          <div className="flex items-center justify-between gap-3 text-muted-foreground">
            <span className="eyebrow text-primary">{platform}</span>
            {showNumber && <span className="eyebrow">No. {number}</span>}
          </div>
          <h4 className="mt-3 font-display text-2xl leading-tight tracking-tight text-card-foreground">
            {item.title}
          </h4>
          {subtitle && (
            <p
              className={`mt-1 font-display italic ${
                item.featured ? "text-xl text-primary" : "text-base text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="truncate font-mono text-xs text-muted-foreground">
            {displayHost(item.url)}
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-foreground transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            aria-hidden
          />
        </div>
      </div>
    </a>
  );
}
