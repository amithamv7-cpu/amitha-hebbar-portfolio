import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amitha M V — Bilingual Language Specialist (English & Kannada)" },
      {
        name: "description",
        content:
          "Amitha M V — Bilingual Language Specialist (English & Kannada) | Editing, LLM Evaluation & Localization. Experience, education and selected work.",
      },
      { property: "og:title", content: "Amitha M V — Portfolio & Résumé" },
      {
        property: "og:description",
        content:
          "Bilingual Language Specialist (English & Kannada) | Editing, LLM Evaluation & Localization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
