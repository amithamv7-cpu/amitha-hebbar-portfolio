// Every URL below is supplied by Amitha Hebbar and must be preserved exactly.
// Do not add bios, dates, descriptions or statistics that were not provided.

export type PortfolioLink = {
  title: string;
  url: string;
  /** Optional label provided by the owner (e.g. an episode number). */
  tag?: string;
  /** Highlighted in the masthead and with an accent card. */
  featured?: boolean;
};

export type PortfolioGroup = {
  label?: string;
  items: PortfolioLink[];
};

export type PortfolioSection = {
  id: string;
  title: string;
  groups: PortfolioGroup[];
};

export const NAMMURA_EPISODE_578_URL = "https://youtu.be/JTzWO45Q2WM";

export const sections: PortfolioSection[] = [
  {
    id: "certificates",
    title: "Certificates",
    groups: [
      {
        items: [
          {
            title: "Certificates",
            url: "https://drive.google.com/drive/folders/1THRLPuEsTwj2QSwsFeA8q09zQKyXvkeB?usp=drive_link",
          },
        ],
      },
    ],
  },
  {
    id: "published-works",
    title: "Published works",
    groups: [
      {
        items: [
          {
            title: "Published works",
            url: "https://drive.google.com/drive/folders/1BRIYqEX1vswpBXcBsMu4IcxW8edz4TjI?usp=drive_link",
          },
          {
            title: "TV9 Kannada feature",
            url: "https://tv9kannada.com/blog/a-loving-love-letter-to-my-nalla-who-fulfills-my-wishes-valentines-day-story-in-kannada-akp-au53-520142.html",
          },
          {
            title: "Vijayavani feature",
            url: "https://www.vijayavani.net/top-ganesh-pandals-to-visit-in-bangalore",
          },
        ],
      },
    ],
  },
  {
    id: "pratilipi",
    title: "Pratilipi Writing",
    groups: [
      {
        label: "Profile",
        items: [{ title: "Pratilipi profile", url: "https://pratilipi.page.link/VK1H9o4vwCNr8eAP7" }],
      },
      {
        label: "Works",
        items: [
          { title: "Work 1", url: "https://pratilipi.page.link/vLBcwLJ7gXavpb5X6" },
          { title: "Work 2", url: "https://pratilipi.page.link/uo5j6Q9AU1ZZJPGKA" },
        ],
      },
    ],
  },
  {
    id: "social-blogging",
    title: "Social & blogging",
    groups: [
      {
        items: [
          { title: "Facebook", url: "https://www.facebook.com/amitha.hebbar.3" },
          {
            title: "Savage Sundris",
            url: "https://www.instagram.com/savage_sundris?igsh=MXR5amQ4dXk5eTZhZA==",
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/amitha_uvaacha?rpxt=cDc5MGxsOXpwdG5y",
            featured: true,
          },
        ],
      },
    ],
  },
  {
    id: "broadcast-video",
    title: "Broadcast & video",
    groups: [
      {
        label: "Nammura Varthe episodes",
        items: [
          { title: "Nammura Varthe", url: NAMMURA_EPISODE_578_URL, tag: "Episode 578" },
          { title: "Nammura Varthe", url: "https://youtu.be/wJ5jbAF8VCw" },
          { title: "Nammura Varthe", url: "https://youtu.be/ald23gfsKME" },
          { title: "Nammura Varthe", url: "https://youtu.be/vKELhGGVeUU?si=rMa-vqMG2vOp32iU" },
          { title: "Nammura Varthe", url: "https://youtu.be/HO9ySYIk-1I?si=dGirt-EwK4yKBVll" },
          { title: "Nammura Varthe", url: "https://youtu.be/g7Vh4-5zcks?si=plmIJhOXzcrdI1wf" },
          { title: "Nammura Varthe", url: "https://youtu.be/SNjd6d1gxus?si=tpDTs_hd3eWIKAcD" },
          { title: "Nammura Varthe", url: "https://youtu.be/iUM6SXWQmT0?si=od0hpiq3Lv0A4sYV" },
          { title: "Nammura Varthe", url: "https://youtu.be/349umQsmynU?si=nOmzrBQUZ0iCKr0W" },
        ],
      },
      {
        label: "Interview",
        items: [{ title: "Interview", url: "https://youtu.be/CrZfmnJirWU" }],
      },
      {
        label: "SDM Times English bulletin",
        items: [
          { title: "SDM Times English bulletin", url: "https://youtu.be/QMNNmhGcXoo" },
          { title: "SDM Times English bulletin", url: "https://youtu.be/JRpUZ5Xl2oM" },
        ],
      },
    ],
  },
  {
    id: "digital-stories",
    title: "Digital Stories",
    groups: [
      {
        items: [
          { title: "Story 01", url: "https://fb.watch/KIkiHhOvle/" },
          { title: "Story 02", url: "https://www.facebook.com/share/v/1EZRLudx7N/" },
          { title: "Story 03", url: "https://www.facebook.com/share/v/1ECm5tqR5k/" },
          { title: "Story 04", url: "https://www.facebook.com/share/v/1A9gnZq6sq/" },
          { title: "Story 05", url: "https://www.facebook.com/DeptofJournalism/videos/2240589502953516/?mibextid=Nif5oz" },
          { title: "Story 06", url: "https://www.facebook.com/share/v/19hszTYhkS/" },
          { title: "Story 07", url: "https://www.facebook.com/share/v/1CwnPKLwiC/" },
          { title: "Story 08", url: "https://www.facebook.com/share/v/1HBgB8owEC/" },
          { title: "Story 09", url: "https://www.facebook.com/share/v/1KYwVGEZ7u/" },
        ],
      },
    ],
  },
  {
    id: "short-films",
    title: "Short films",
    groups: [
      {
        items: [
          {
            title: "Short films",
            url: "https://drive.google.com/drive/folders/1OFrkeM8KSTdAPCRE69Oklh_7suOb2Jvl",
          },
          { title: "Short film", url: "https://youtu.be/SoOJYofhu64?si=lVkpn7r3C2YXVr4o" },
          { title: "Short film", url: "https://youtu.be/MA9PamJFjB4?si=ZUdHcKR6lRVOE68N" },
        ],
      },
    ],
  },
];

export const allLinks = (): PortfolioLink[] =>
  sections.flatMap((s) => s.groups.flatMap((g) => g.items));

export const featuredLinks = (): PortfolioLink[] => allLinks().filter((l) => l.featured);

export const sectionCount = (section: PortfolioSection) =>
  section.groups.reduce((n, g) => n + g.items.length, 0);

export type Platform =
  | "YouTube"
  | "Facebook"
  | "Instagram"
  | "Google Drive"
  | "Pratilipi"
  | "TV9 Kannada"
  | "Vijayavani"
  | "Web";

export function platformOf(url: string): Platform {
  const host = new URL(url).hostname.replace(/^www\.|^m\./, "");
  if (host === "youtu.be" || host.endsWith("youtube.com")) return "YouTube";
  if (host.endsWith("facebook.com") || host === "fb.watch") return "Facebook";
  if (host.endsWith("instagram.com")) return "Instagram";
  if (host === "drive.google.com") return "Google Drive";
  if (host.startsWith("pratilipi")) return "Pratilipi";
  if (host === "tv9kannada.com") return "TV9 Kannada";
  if (host === "vijayavani.net") return "Vijayavani";
  return "Web";
}

export function displayHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function youTubeId(url: string): string | null {
  const u = new URL(url);
  if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
  if (u.hostname.endsWith("youtube.com")) return u.searchParams.get("v");
  return null;
}

/** Instagram handle taken directly from the URL path. */
export function instagramHandle(url: string): string | null {
  const u = new URL(url);
  if (!u.hostname.endsWith("instagram.com")) return null;
  const handle = u.pathname.split("/").filter(Boolean)[0];
  return handle ? `@${handle}` : null;
}
