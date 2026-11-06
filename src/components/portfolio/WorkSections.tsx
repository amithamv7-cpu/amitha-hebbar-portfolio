import { sectionCount, sections, youTubeId } from "@/data/portfolio";

import { accentBg, accentFor } from "./accents";
import { LinkCard } from "./LinkCard";
import { StoryCard } from "./StoryCard";

export function WorkSections() {
  return (
    <div className="space-y-20 md:space-y-28">
      {sections.map((section, sIndex) => {
        const accent = accentFor(section.id);
        const count = sectionCount(section);
        const compact = section.id === "digital-stories";
        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="reveal scroll-mt-28"
          >
            <header className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-b-2 border-dashed border-foreground/40 pb-5 md:mb-10">
              <span
                className={`eyebrow inline-flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-foreground px-2 text-foreground ${accentBg[accent]}`}
                aria-hidden
              >
                {String(sIndex + 1).padStart(2, "0")}
              </span>
              <h3
                id={`${section.id}-title`}
                className="font-display-tight text-4xl text-foreground sm:text-5xl md:text-6xl"
              >
                {section.title}
              </h3>
              <span className="eyebrow ml-auto text-muted-foreground">
                {count} {count === 1 ? "link" : "links"}
              </span>
            </header>

            <div className="space-y-12">
              {section.groups.map((group, gIndex) => (
                <div key={group.label ?? gIndex}>
                  {group.label && section.groups.length > 1 && (
                    <h4 className="mb-5 flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
                      {group.label}
                      <span className="h-0.5 flex-1 rounded-full bg-border" aria-hidden />
                      <span className="eyebrow text-muted-foreground">{group.items.length}</span>
                    </h4>
                  )}
                  {compact ? (
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                      {group.items.map((item) => (
                        <li key={item.url}>
                          <StoryCard item={item} accent={accent} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item, i) => (
                        <li key={item.url}>
                          <LinkCard
                            item={item}
                            index={i}
                            total={group.items.length}
                            accent={accent}
                            withMedia={group.items.some((g) => youTubeId(g.url))}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
