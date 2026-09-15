import Link from "next/link";
import { site, social } from "@/lib/site-data";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/events", label: "Events" },
      { href: "/venues", label: "Venues" },
      { href: "/halloween-passport-nyc-2026", label: "Halloween Passport" },
      { href: "/gallery", label: "Gallery" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/about-halloween-nyc-2026", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/refund-policy", label: "Refund Policy" },
      { href: "/terms-and-conditions", label: "Terms and Conditions" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.dateRange} · New York City · 21+</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-muted hover:text-accent"
          >
            {site.email}
          </a>
          <div className="mt-4 flex gap-4 text-sm text-muted">
            <a href={social.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
              Instagram
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer" className="hover:text-accent">
              Facebook
            </a>
          </div>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
