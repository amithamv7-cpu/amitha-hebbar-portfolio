export type Accent = "lime" | "pink" | "orange" | "sky";

/** Literal class names so Tailwind keeps them. */
export const accentBg: Record<Accent, string> = {
  lime: "bg-pop-lime",
  pink: "bg-pop-pink",
  orange: "bg-pop-orange",
  sky: "bg-pop-sky",
};

export const sectionAccent: Record<string, Accent> = {
  certificates: "lime",
  "published-works": "orange",
  pratilipi: "pink",
  "social-blogging": "sky",
  "broadcast-video": "lime",
  "digital-stories": "pink",
  "short-films": "orange",
};

export const accentFor = (id: string): Accent => sectionAccent[id] ?? "lime";
