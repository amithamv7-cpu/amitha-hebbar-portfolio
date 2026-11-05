import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { profile } from "@/data/profile";
import { Route } from "@/routes/index";

describe("profile content", () => {
  it("shows the name exactly as Amitha M V and never the old name", () => {
    const { container } = render(<PortfolioPage />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Amitha M V");
    expect(container.textContent).not.toMatch(/Hebbar/);
    const head = (Route.options.head as () => { meta: { title?: string; content?: string }[] })();
    const text = head.meta.map((m) => m.title ?? m.content ?? "").join(" ");
    expect(text).toContain("Amitha M V");
    expect(text).not.toMatch(/Hebbar/);
  });

  it("shows the exact headline", () => {
    render(<PortfolioPage />);
    expect(
      screen.getByText((_, el) =>
        el?.tagName === "P" &&
        el.textContent ===
          "Bilingual Language Specialist (English & Kannada) | Editing, LLM Evaluation & Localization",
      ),
    ).toBeTruthy();
  });

  it("lists experience with the supplied dates, newest first", () => {
    expect(profile.experience.map((e) => `${e.organization}: ${e.start} – ${e.end}`)).toEqual([
      "Wadhwani Foundation: Aug 2026 – Present",
      "Kavi Research: Aug 2025 – Jul 2026",
      "Ola Krutrim: Mar 2025 – Aug 2025",
      "Vijayavani: Jun 2024 – Feb 2025",
      "Digital Pitaa: Jul 2021 – Dec 2021",
    ]);
  });

  it("lists education and certification as supplied", () => {
    expect(profile.education).toEqual([
      {
        degree: "M.A. Journalism & Mass Communication",
        institution: "SDM College, Ujire",
        year: "2024",
      },
    ]);
    expect(profile.certifications).toEqual([
      { name: "UGC-NET Journalism & Mass Communication", detail: "Qualified May 2023" },
    ]);
  });

  it("uses the standard résumé headings", () => {
    render(<PortfolioPage />);
    const h2s = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(h2s).toEqual(
      expect.arrayContaining(["Experience", "Education & Certification", "Selected Work"]),
    );
  });

  it("offers no résumé download without a real file", () => {
    render(<PortfolioPage />);
    expect(profile.resumeUrl).toBeNull();
    expect(screen.queryByText(/Download résumé/i)).toBeNull();
  });
});
