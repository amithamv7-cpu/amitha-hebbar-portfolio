import type { ReactNode } from "react";

import { profile } from "@/data/profile";

import { accentBg, type Accent } from "./accents";

function ResumeSection({
  id,
  title,
  accent,
  children,
}: {
  id: string;
  title: string;
  accent: Accent;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="reveal scroll-mt-28">
      <h2
        id={`${id}-title`}
        className="flex items-center gap-3 font-display-tight text-4xl text-foreground sm:text-5xl"
      >
        <span
          className={`inline-block h-4 w-4 shrink-0 rounded-full border-2 border-foreground ${accentBg[accent]}`}
          aria-hidden
        />
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ResumeSections() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 md:space-y-20">
      {profile.summary && (
        <ResumeSection id="summary" title="Summary" accent="lime">
          <p className="text-lg leading-relaxed text-foreground">{profile.summary}</p>
        </ResumeSection>
      )}

      {profile.skills.length > 0 && (
        <ResumeSection id="skills" title="Skills" accent="pink">
          <ul className="flex flex-wrap gap-2.5">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border-2 border-foreground bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </ResumeSection>
      )}

      <ResumeSection id="experience" title="Experience" accent="orange">
        <ol className="space-y-4">
          {profile.experience.map((job) => (
            <li
              key={`${job.organization}-${job.start}`}
              className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-pop md:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {job.organization}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {job.start} – {job.end}
                </p>
              </div>
              {job.role && <p className="mt-1 font-medium text-foreground">{job.role}</p>}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-foreground marker:text-primary">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </ResumeSection>

      <ResumeSection id="education" title="Education & Certification" accent="sky">
        <ul className="space-y-4">
          {profile.education.map((ed) => (
            <li
              key={ed.degree}
              className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-pop md:p-6"
            >
              <p className="eyebrow text-muted-foreground">Education</p>
              <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {ed.degree}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">{ed.year}</p>
              </div>
              <p className="mt-1 text-foreground">{ed.institution}</p>
            </li>
          ))}
          {profile.certifications.map((c) => (
            <li
              key={c.name}
              className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-pop md:p-6"
            >
              <p className="eyebrow text-muted-foreground">Certification</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">
                {c.name}
              </h3>
              <p className="mt-1 text-foreground">{c.detail}</p>
            </li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  );
}
