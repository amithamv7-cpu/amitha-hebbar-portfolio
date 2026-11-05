// Professional content for the résumé sections.
// Only facts supplied by Amitha go here — copy résumé wording exactly; never embellish.
// Summary, skills, role titles and highlights stay empty until taken from the résumé file.

export type Experience = {
  organization: string;
  start: string;
  end: string;
  role?: string;
  highlights?: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export type Certification = {
  name: string;
  detail: string;
};

export const profile = {
  name: "Amitha M V",
  headline:
    "Bilingual Language Specialist (English & Kannada) | Editing, LLM Evaluation & Localization",
  summary: null as string | null,
  skills: [] as string[],
  experience: [
    { organization: "Wadhwani Foundation", start: "Aug 2026", end: "Present" },
    { organization: "Kavi Research", start: "Aug 2025", end: "Jul 2026" },
    { organization: "Ola Krutrim", start: "Mar 2025", end: "Aug 2025" },
    { organization: "Vijayavani", start: "Jun 2024", end: "Feb 2025" },
    { organization: "Digital Pitaa", start: "Jul 2021", end: "Dec 2021" },
  ] as Experience[],
  education: [
    {
      degree: "M.A. Journalism & Mass Communication",
      institution: "SDM College, Ujire",
      year: "2024",
    },
  ] as Education[],
  certifications: [
    { name: "UGC-NET Journalism & Mass Communication", detail: "Qualified May 2023" },
  ] as Certification[],
  /** Set to a real uploaded file URL to show a download button. */
  resumeUrl: null as string | null,
};
