import type { ReactNode } from "react";

import { profile } from "@/data/profile";

import { accentBg, type Accent } from "./accents";

function ResumeSection({
  id,
  title,
  eyebrow,
  accent,
  children,
}: {
  id: string;
  title: string;
  eyebrow: string;
  accent: Accent;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="reveal grid scroll-mt-28 gap-6 border-t-2 border-foreground pt-8 md:grid-cols-12 md:gap-10 md:pt-10"
    >
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <span
              className={`inline-block h-3 w-3 shrink-0 rounded-full border-2 border-foreground ${accentBg[accent]}`}
              aria-hidden
            />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 font-display-tight text-4xl text-foreground sm:text-5xl"
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}

export function ResumeSections() {
  return (
    <div className="space-y-16 md:space-y-24">
      {profile.summary && (
        <ResumeSection id="summary" title="Summary" eyebrow="About" accent="lime">
          <p className="text-lg leading-relaxed text-foreground">{profile.summary}</p>
        </ResumeSection>
      )}

      {profile.skills.length > 0 && (
        <ResumeSection id="skills" title="Skills" eyebrow="Toolkit" accent="pink">
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

      <ResumeSection id="experience" title="Experience" eyebrow="Career" accent="orange">
        <ol className="relative space-y-3 before:absolute before:bottom-6 before:left-[1.0625rem] before:top-6 before:w-0.5 before:bg-border">
          {profile.experience.map((job) => {
            const isCurrent = job.end === "Present";
            return (
              <li key={`${job.organization}-${job.start}`} className="relative flex gap-4">
                <span
                  className={`relative z-10 mt-5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-foreground ${
                    isCurrent ? "bg-accent" : "bg-card"
                  }`}
                  aria-hidden
                >
                  <span
                    className={`h-2 w-2 rounded-full ${isCurrent ? "bg-foreground" : "bg-muted-foreground"}`}
                  />
                </span>
                <div
                  className={`flex-1 rounded-2xl border-2 border-foreground bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-pop md:p-6 ${
                    isCurrent ? "shadow-pop" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
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
                </div>
              </li>
            );
          })}
        </ol>
      </ResumeSection>

      <ResumeSection
        id="education"
        title="Education & Certification"
        eyebrow="Credentials"
        accent="sky"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {profile.education.map((ed) => (
            <li
              key={ed.degree}
              className="flex flex-col rounded-[1.15rem] border-2 border-foreground bg-pop-sky p-5 shadow-pop md:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow text-foreground">Education</p>
                <p className="font-mono text-sm text-foreground">{ed.year}</p>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight text-foreground">
                {ed.degree}
              </h3>
              <p className="mt-2 text-foreground">{ed.institution}</p>
            </li>
          ))}
          {profile.certifications.map((c) => (
            <li
              key={c.name}
              className="flex flex-col rounded-[1.15rem] border-2 border-foreground bg-pop-lime p-5 shadow-pop md:p-6"
            >
              <p className="eyebrow text-foreground">Certification</p>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-foreground">{c.detail}</p>
            </li>
          ))}
        </ul>
      </ResumeSection>
    </div>
  );
}
