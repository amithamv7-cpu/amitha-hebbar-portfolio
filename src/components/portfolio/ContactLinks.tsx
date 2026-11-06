import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { profile } from "@/data/profile";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

export function contactItems(): ContactItem[] {
  const { email, phone, linkedin } = profile.contact;
  return [
    { label: "Email", value: email, href: `mailto:${email}`, icon: <Mail className="h-4 w-4" aria-hidden /> },
    {
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
      icon: <Phone className="h-4 w-4" aria-hidden />,
    },
    {
      label: "LinkedIn",
      value: "Amitha M V",
      href: linkedin,
      icon: <Linkedin className="h-4 w-4" aria-hidden />,
      external: true,
    },
  ];
}

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Compact rows for the intro card. */
export function ContactList() {
  return (
    <ul className="divide-y-2 divide-dashed divide-border">
      {contactItems().map((c) => (
        <li key={c.label}>
          <a
            href={c.href}
            {...(c.external ? externalProps : {})}
            aria-label={`${c.label}: ${c.value}${c.external ? " (opens in a new tab)" : ""}`}
            className="group flex items-center gap-3 py-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground transition group-hover:bg-accent">
              {c.icon}
            </span>
            <span className="min-w-0 flex-1">
              <span className="eyebrow block text-muted-foreground">{c.label}</span>
              <span className="block truncate font-medium text-foreground group-hover:underline group-hover:underline-offset-4">
                {c.value}
              </span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-foreground"
              aria-hidden
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Large tiles for the contact section (on the ink panel). */
export function ContactTiles() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {contactItems().map((c) => (
        <li key={c.label}>
          <a
            href={c.href}
            {...(c.external ? externalProps : {})}
            aria-label={`${c.label}: ${c.value}${c.external ? " (opens in a new tab)" : ""}`}
            className="group flex h-full flex-col justify-between gap-8 rounded-2xl border-2 border-ink-border bg-ink p-5 transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 md:p-6"
          >
            <span className="flex items-center justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                {c.icon}
              </span>
              <ArrowUpRight
                className="h-5 w-5 text-ink-muted transition group-hover:rotate-45 group-hover:text-accent"
                aria-hidden
              />
            </span>
            <span>
              <span className="eyebrow block text-ink-muted">{c.label}</span>
              <span className="mt-1 block break-words font-display text-xl font-bold tracking-tight text-ink-foreground md:text-2xl">
                {c.value}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
