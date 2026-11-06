// Professional content for the résumé sections.
// Only facts supplied by Amitha go here — copy résumé wording exactly; never embellish.
// Summary, skills and highlights stay empty until the user supplies verified wording.

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
    {
      organization: "Wadhwani Foundation",
      role: "Content Localization Expert (Kannada)",
      start: "August 2026",
      end: "October 2026",
    },
    {
      organization: "KAVI Research",
      role: "Content Editor (English)",
      start: "August 2025",
      end: "July 2026",
    },
    {
      organization: "Krutrim",
      role: "Kannada Linguist",
      start: "March 2025",
      end: "July 2025",
    },
    {
      organization: "Vijayavani",
      role: "Sub Editor",
      start: "July 2024",
      end: "February 2025",
    },
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
  contact: {
    email: "amithamv7@gmail.com",
    phone: "+91 94485 12260",
    linkedin:
      "https://www.linkedin.com/in/amitha-m-v-631162235?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  /** Set to a real uploaded file URL to show a download button. */
  resumeUrl: "/Amitha_M_V_Resume-1.pdf" as string | null,
};
