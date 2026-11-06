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

  it("lists the four supplied experience records with exact titles and dates, newest first", () => {
    expect(profile.experience).toEqual([
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
    ]);
  });

  it("does not show unsupported or outdated experience details", () => {
    const { container } = render(<PortfolioPage />);
    expect(container.textContent).not.toMatch(/researcher|Present|Ola Krutrim|Digital Pitaa/i);
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

  it("links the exact email, phone and LinkedIn in the intro card and Contact section", () => {
    const { container } = render(<PortfolioPage />);
    const hrefs = Array.from(container.querySelectorAll("a")).map((a) => a.getAttribute("href"));
    const linkedin =
      "https://www.linkedin.com/in/amitha-m-v-631162235?utm_source=share_via&utm_content=profile&utm_medium=member_android";
    expect(hrefs.filter((h) => h === "mailto:amithamv7@gmail.com").length).toBeGreaterThanOrEqual(2);
    expect(hrefs.filter((h) => h === "tel:+919448512260")).toHaveLength(2);
    expect(hrefs.filter((h) => h === linkedin)).toHaveLength(2);
    expect(screen.getAllByText("+91 94485 12260")).toHaveLength(2);
    expect(screen.getAllByText("amithamv7@gmail.com")).toHaveLength(2);
    expect(screen.getByRole("heading", { level: 2, name: "Contact" })).toBeTruthy();
  });

  it("offers no résumé download without a real file", () => {
    render(<PortfolioPage />);
    expect(profile.resumeUrl).toBeNull();
    expect(screen.queryByText(/Download résumé/i)).toBeNull();
  });
});
