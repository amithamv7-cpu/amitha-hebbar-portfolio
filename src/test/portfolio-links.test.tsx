import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  AnalyticsPanel,
  CONNECT_MESSAGE,
  EXTERNAL_UNAVAILABLE,
} from "@/components/portfolio/AnalyticsPanel";
import { WorkSections } from "@/components/portfolio/WorkSections";
import { allLinks, featuredLinks, NAMMURA_EPISODE_578_URL, sections } from "@/data/portfolio";

// Exactly the URLs Amitha supplied, with the episode 578 correction applied.
const EXPECTED_URLS = [
  "https://drive.google.com/drive/folders/1THRLPuEsTwj2QSwsFeA8q09zQKyXvkeB?usp=drive_link",
  "https://drive.google.com/drive/folders/1BRIYqEX1vswpBXcBsMu4IcxW8edz4TjI?usp=drive_link",
  "https://tv9kannada.com/blog/a-loving-love-letter-to-my-nalla-who-fulfills-my-wishes-valentines-day-story-in-kannada-akp-au53-520142.html",
  "https://www.vijayavani.net/top-ganesh-pandals-to-visit-in-bangalore",
  "https://pratilipi.page.link/VK1H9o4vwCNr8eAP7",
  "https://pratilipi.page.link/vLBcwLJ7gXavpb5X6",
  "https://pratilipi.page.link/uo5j6Q9AU1ZZJPGKA",
  "https://www.facebook.com/amitha.hebbar.3",
  "https://www.instagram.com/savage_sundris?igsh=MXR5amQ4dXk5eTZhZA==",
  "https://www.instagram.com/amitha_uvaacha?rpxt=cDc5MGxsOXpwdG5y",
  "https://youtu.be/JTzWO45Q2WM",
  "https://youtu.be/wJ5jbAF8VCw",
  "https://youtu.be/ald23gfsKME",
  "https://youtu.be/vKELhGGVeUU?si=rMa-vqMG2vOp32iU",
  "https://youtu.be/HO9ySYIk-1I?si=dGirt-EwK4yKBVll",
  "https://youtu.be/g7Vh4-5zcks?si=plmIJhOXzcrdI1wf",
  "https://youtu.be/SNjd6d1gxus?si=tpDTs_hd3eWIKAcD",
  "https://youtu.be/iUM6SXWQmT0?si=od0hpiq3Lv0A4sYV",
  "https://youtu.be/349umQsmynU?si=nOmzrBQUZ0iCKr0W",
  "https://youtu.be/CrZfmnJirWU",
  "https://youtu.be/QMNNmhGcXoo",
  "https://youtu.be/JRpUZ5Xl2oM",
  "https://www.facebook.com/share/v/EnbQRuFxLWEpYoMQ/?mibextid=jmPrMh",
  "https://www.facebook.com/share/v/yzgwtAdYV4SuBNdn/?mibextid=jmPrMh",
  "https://www.facebook.com/share/v/d4kmBuJbSsuL6xLP/?mibextid=jmPrMh",
  "https://www.facebook.com/share/v/dLoGQuJyYwfaqEJF/?mibextid=jmPrMh",
  "https://www.facebook.com/share/v/GJh68gebtTouKEAW/?mibextid=jmPrMh",
  "https://m.facebook.com/story.php?story_fbid=759351612682927&id=100069562481080&sfnsn=wiwspwa&mibextid=2Rb1fB",
  "https://drive.google.com/drive/folders/1OFrkeM8KSTdAPCRE69Oklh_7suOb2Jvl",
  "https://youtu.be/SoOJYofhu64?si=lVkpn7r3C2YXVr4o",
  "https://youtu.be/MA9PamJFjB4?si=ZUdHcKR6lRVOE68N",
];

describe("portfolio links", () => {
  it("contains exactly the supplied URLs, character for character", () => {
    expect(allLinks().map((l) => l.url)).toEqual(EXPECTED_URLS);
  });

  it("uses the corrected Nammura Varthe episode 578 URL", () => {
    expect(NAMMURA_EPISODE_578_URL).toBe("https://youtu.be/JTzWO45Q2WM");
    // Capital letter O (not zero) right after "JTzW", and no hyphen.
    const id = NAMMURA_EPISODE_578_URL.split("/").pop()!;
    expect(id.charAt(4)).toBe("O");
    expect(id.includes("-")).toBe(false);
    expect(allLinks().some((l) => l.url.includes("JTzW0-45Q2WM"))).toBe(false);
    const nammura = allLinks().filter((l) => l.title === "Nammura Varthe");
    expect(nammura[0]).toMatchObject({ url: NAMMURA_EPISODE_578_URL, tag: "Episode 578" });
  });

  it("features the additional Instagram link prominently", () => {
    expect(featuredLinks().map((l) => l.url)).toEqual([
      "https://www.instagram.com/amitha_uvaacha?rpxt=cDc5MGxsOXpwdG5y",
    ]);
  });

  it("groups every Pratilipi link under one section titled Pratilipi", () => {
    const withPratilipi = sections.filter((s) =>
      s.groups.some((g) => g.items.some((i) => i.url.includes("pratilipi"))),
    );
    expect(withPratilipi.map((s) => s.title)).toEqual(["Pratilipi"]);
    expect(withPratilipi[0]!.groups.flatMap((g) => g.items.map((i) => i.url))).toEqual([
      "https://pratilipi.page.link/VK1H9o4vwCNr8eAP7",
      "https://pratilipi.page.link/vLBcwLJ7gXavpb5X6",
      "https://pratilipi.page.link/uo5j6Q9AU1ZZJPGKA",
    ]);
  });

  it("has no practice journals section", () => {
    expect(sections.some((s) => /journal/i.test(s.title))).toBe(false);
  });

  it("renders every card as a link that opens in a new tab", () => {
    const { container } = render(<WorkSections />);
    const anchors = Array.from(container.querySelectorAll("a"));
    expect(anchors.map((a) => a.getAttribute("href"))).toEqual(EXPECTED_URLS);
    for (const a of anchors) {
      expect(a.getAttribute("target")).toBe("_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    }
  });

  it("shows no view numbers in analytics until a source is connected", () => {
    render(<AnalyticsPanel />);
    // One message for website visitors + one per external source group.
    expect(screen.getAllByText(CONNECT_MESSAGE)).toHaveLength(4);
    // Every external source (YouTube, Meta, others) is marked unavailable.
    expect(screen.getAllByText(new RegExp(EXTERNAL_UNAVAILABLE))).toHaveLength(3);
    expect(screen.queryByText(/\b\d[\d,.]*\s*(views|visitors)\b/i)).toBeNull();
  });
});
