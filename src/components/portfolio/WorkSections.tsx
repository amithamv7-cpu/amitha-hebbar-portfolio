import { sectionCount, sections, youTubeId } from "@/data/portfolio";

import { LinkCard } from "./LinkCard";

export function WorkSections() {
  return (
    <div className="space-y-24 md:space-y-32">
      {sections.map((section, sIndex) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-28"
        >
          <header className="mb-10 grid grid-cols-[auto_1fr] items-end gap-x-5 gap-y-2 border-b border-foreground pb-5 md:mb-12">
            <span className="eyebrow pb-2 text-primary">
              {String(sIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2
                id={`${section.id}-title`}
                className="font-display-tight text-5xl text-foreground md:text-7xl"
              >
                {section.title}
              </h2>
              <span className="eyebrow pb-2 text-muted-foreground">
                {sectionCount(section)} {sectionCount(section) === 1 ? "link" : "links"}
              </span>
            </div>
          </header>

          <div className="space-y-14">
            {section.groups.map((group, gIndex) => (
              <div key={group.label ?? gIndex}>
                {group.label && section.groups.length > 1 && (
                  <h3 className="mb-6 flex items-center gap-4 font-display text-xl italic text-foreground md:text-2xl">
                    {group.label}
                    <span className="h-px flex-1 bg-border" aria-hidden />
                    <span className="eyebrow not-italic text-muted-foreground">
                      {group.items.length}
                    </span>
                  </h3>
                )}
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, i) => (
                    <li key={item.url}>
                      <LinkCard
                        item={item}
                        index={i}
                        total={group.items.length}
                        withMedia={group.items.some((g) => youTubeId(g.url))}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
