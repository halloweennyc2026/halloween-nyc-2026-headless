import type { Metadata } from "next";
import Link from "next/link";
import { events, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Halloween Party Venues NYC 2026 | Rooftops, Clubs & More",
  description:
    "Explore Halloween NYC 2026 venues, from rooftop parties and SoHo nightlife to Chelsea, Midtown, Brooklyn and Hudson River experiences.",
  openGraph: {
    title: "Halloween Party Venues in NYC 2026",
    description:
      "Explore the venues, neighborhoods and nightlife settings behind Halloween NYC 2026 experiences.",
    url: "/venues",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Party Venues in NYC 2026",
    description:
      "Explore the venues, neighborhoods and nightlife settings behind Halloween NYC 2026 experiences.",
  },
  alternates: { canonical: "/venues" },
};

export default function VenuesPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/venues#webpage`,
              url: `${site.url}/venues`,
              name: "Halloween Party Venues NYC 2026 | Rooftops, Clubs & More",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Venues", item: `${site.url}/venues` },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">
          Halloween Party Venues in NYC 2026
        </h1>
        <p className="mt-4 text-sm text-muted sm:text-base">
          Halloween in New York City does not live in one room. It moves through
          rooftops, hidden downtown spaces, Midtown nightlife, Brooklyn waterfront views
          and the Hudson after dark — each venue with its own way of doing Halloween.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
        {events.map((e) => (
          <Link
            key={e.slug}
            href={`/events/${e.slug}`}
            className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/60"
          >
            <h2 className="font-display text-xl">{e.venue}</h2>
            <p className="mt-1 text-sm text-muted">
              {e.neighborhood ?? e.address ?? ""}
            </p>
            <p className="mt-3 text-sm text-accent">{e.name} →</p>
          </Link>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted">
        Venues are independently owned and operated. Halloween NYC 2026 curates and
        promotes events at these locations; venue-specific policies apply.
      </p>
    </section>
  );
}
