import { BarChart3, Globe, Lock, Youtube } from "lucide-react";
import type { ReactNode } from "react";

import { allLinks, platformOf } from "@/data/portfolio";

export const CONNECT_MESSAGE = "Connect analytics to see live views";
export const EXTERNAL_UNAVAILABLE = "Views unavailable";

function NotConnected({ label = "Not connected" }: { label?: string }) {
  return (
    <span className="eyebrow inline-flex shrink-0 items-center gap-2 self-start justify-self-start rounded-full border border-ink-border px-3 py-1.5 text-ink-muted">
      <span className="h-2 w-2 rounded-full bg-pop-orange" aria-hidden />
      {label}
    </span>
  );
}

function SourceRow({
  icon,
  name,
  covers,
  children,
}: {
  icon: ReactNode;
  name: string;
  covers: string;
  children: ReactNode;
}) {
  return (
    <li className="grid gap-4 rounded-2xl border border-ink-border p-5 md:grid-cols-[1fr_auto] md:items-start">
      <div className="flex gap-4">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pop-lime text-foreground">
          {icon}
        </span>
        <div>
          <p className="font-display text-xl font-bold text-ink-foreground">{name}</p>
          <p className="eyebrow mt-1 text-ink-muted">{covers}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">{children}</p>
          <p className="mt-3 font-medium text-ink-foreground">{CONNECT_MESSAGE}</p>
        </div>
      </div>
      <NotConnected label={`${EXTERNAL_UNAVAILABLE} · Not connected`} />
    </li>
  );
}

export function AnalyticsPanel() {
  const links = allLinks();
  const count = (...platforms: string[]) =>
    links.filter((l) => platforms.includes(platformOf(l.url))).length;

  const youtube = count("YouTube");
  const meta = count("Facebook", "Instagram");
  const other = links.length - youtube - meta;

  return (
    <section
      id="analytics"
      aria-labelledby="analytics-title"
      className="reveal scroll-mt-28 rounded-[2rem] border-2 border-foreground bg-ink px-5 py-10 text-ink-foreground shadow-pop-lg sm:px-8 md:px-12 md:py-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id="analytics-title" className="font-display-tight text-5xl md:text-7xl">
          Analytics
        </h2>
        <span className="eyebrow rounded-full bg-pop-lime px-3 py-1.5 text-foreground">
          Official sources only
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
        No numbers are shown until an authorized, official source is connected. Nothing here is
        estimated, scraped or made up.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <article aria-labelledby="site-visitors-title">
          <p className="eyebrow text-pop-pink">A — This website</p>
          <h3 id="site-visitors-title" className="mt-3 font-display text-3xl font-bold">
            Portfolio website visitors
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            People who open this portfolio site. These numbers are never counted as views of the
            linked work.
          </p>

          <div className="mt-6 flex min-h-56 flex-col justify-between gap-8 rounded-2xl border border-ink-border p-6">
            <div className="flex items-start justify-between gap-4">
              <BarChart3 className="h-6 w-6 text-pop-lime" aria-hidden />
              <NotConnected />
            </div>
            <div>
              <p className="font-display-tight text-5xl text-ink-muted" aria-hidden>
                —
              </p>
              <p className="mt-4 font-display text-xl font-bold">{CONNECT_MESSAGE}</p>
            </div>
          </div>
        </article>

        <article aria-labelledby="external-views-title">
          <p className="eyebrow text-pop-pink">B — Linked work on other platforms</p>
          <h3 id="external-views-title" className="mt-3 font-display text-3xl font-bold">
            Views on external work
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Views of videos, stories and posts hosted elsewhere. Each platform only shares these
            numbers with the account owner's permission.
          </p>

          <ul className="mt-6 space-y-3">
            <SourceRow
              icon={<Youtube className="h-4 w-4" aria-hidden />}
              name="YouTube"
              covers={`${youtube} linked videos`}
            >
              YouTube Analytics needs the channel owner to authorize access to the channel. Videos
              on channels that are not authorized will not show views.
            </SourceRow>
            <SourceRow
              icon={<Globe className="h-4 w-4" aria-hidden />}
              name="Facebook & Instagram (Meta)"
              covers={`${meta} linked pages, posts and stories`}
            >
              Meta insights need authorized access to the Facebook page or Instagram professional
              account that owns the content.
            </SourceRow>
            <SourceRow
              icon={<Globe className="h-4 w-4" aria-hidden />}
              name="Google Drive, Pratilipi & news sites"
              covers={`${other} linked folders, profiles and features`}
            >
              No official view numbers are shown for these links unless the platform provides
              them through an authorized source.
            </SourceRow>
          </ul>
        </article>
      </div>

      <p className="mt-10 flex items-start gap-3 border-t border-ink-border pt-6 text-sm leading-relaxed text-ink-muted">
        <Lock className="mt-0.5 h-4 w-4 shrink-0 text-pop-lime" aria-hidden />
        Access keys and sign-in permissions stay on the server and are never sent to this page or
        to visitors' browsers.
      </p>
    </section>
  );
}
