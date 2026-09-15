import type { Metadata } from "next";
import Link from "next/link";
import { passport, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Halloween Passport NYC 2026 | Multi-Event Halloween Access",
  description:
    "Explore eligible Halloween NYC 2026 experiences with the Halloween Passport, featuring parties, rooftop events and nightlife across New York City.",
  openGraph: {
    title: "Halloween Passport NYC 2026 | Explore Eligible Experiences",
    description:
      "Plan more of Halloween weekend with access to eligible Halloween NYC 2026 experiences. Review current details and terms.",
    url: "/halloween-passport-nyc-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Passport NYC 2026 | Explore Eligible Experiences",
    description:
      "Plan more of Halloween weekend with access to eligible Halloween NYC 2026 experiences. Review current details and terms.",
  },
  alternates: { canonical: "/halloween-passport-nyc-2026" },
};

const SECTIONS = [
  {
    title: "Curated NYC Experiences",
    body: "Move through a weekend of rooftop parties, underground nightlife, masquerade energy and late-night Halloween moments across New York City.",
  },
  {
    title: "A Weekend Built for Movement",
    body: "The Passport is designed around a multi-night Halloween weekend, not a single stop — plan your night around eligible events.",
  },
  {
    title: "Your Crew, One Plan",
    body: "Coordinate with your group around one access option instead of separate tickets for every stop.",
  },
  {
    title: "Official Event Access",
    body: "Passport access is verified through an official Halloween NYC 2026 credential and the Passport guest roster at eligible events.",
  },
];

export default function PassportPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/halloween-passport-nyc-2026#webpage`,
              url: `${site.url}/halloween-passport-nyc-2026`,
              name: "Halloween Passport NYC 2026 | Multi-Event Halloween Access",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Halloween Passport",
                  item: `${site.url}/halloween-passport-nyc-2026`,
                },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Halloween Passport NYC 2026</h1>
        <p className="mt-4 text-sm text-muted sm:text-base">
          The Halloween Passport is your way to explore eligible Halloween NYC 2026
          experiences across the city — a weekend of rooftop parties, underground
          nightlife and late-night Halloween moments.
        </p>
        <a
          href={passport.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
        >
          Explore Passport Access on Posh ↗
        </a>
        <p className="mx-auto mt-4 max-w-xl text-xs text-muted">
          {passport.complianceLine}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 p-6">
            <h2 className="font-display text-xl">{s.title}</h2>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-6 text-sm text-muted">
        <Link href="/events" className="hover:text-accent">
          Explore Events
        </Link>
        <Link href="/faq" className="hover:text-accent">
          Read FAQ
        </Link>
        <Link href="/refund-policy" className="hover:text-accent">
          Review Refund Policy
        </Link>
        <Link href="/terms-and-conditions" className="hover:text-accent">
          Read Terms
        </Link>
      </div>
    </section>
  );
}
