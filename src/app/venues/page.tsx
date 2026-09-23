import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { events, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Halloween Party Venues NYC 2026 | Rooftops, Clubs & More",
  description:
    "Explore Halloween NYC 2026 venues, from rooftop parties and SoHo nightlife to Chelsea, Midtown, Brooklyn and Hudson River experiences.",
  openGraph: {
    type: "website",
    title: "Halloween Party Venues in NYC 2026",
    description:
      "Explore the venues, neighborhoods and nightlife settings behind Halloween NYC 2026 experiences.",
    url: "/venues",
    images: [{ url: site.defaultOgImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Party Venues in NYC 2026",
    description:
      "Explore the venues, neighborhoods and nightlife settings behind Halloween NYC 2026 experiences.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/venues" },
};

// Local-intent headings for the neighborhood section, keyed by event slug.
const AREA_HEADINGS: Record<string, string> = {
  "dead-disco-public-hotel": "Halloween on the Lower East Side",
  "the-masquerade-loulou": "Halloween in Chelsea",
  "the-descent-submercer-soho": "Halloween in SoHo",
  "heaven-and-hell-eden": "Halloween in Midtown",
  "haunting-on-the-hudson": "Halloween on the Hudson River",
  "luna-day-of-the-dead-1-hotel-brooklyn-bridge": "Halloween in Brooklyn",
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
        <p className="mt-4 text-sm text-muted sm:text-base">
          The 2026 lineup spans six neighborhoods across Manhattan and Brooklyn — the
          Lower East Side, Chelsea, SoHo, Midtown, the Hudson River and Brooklyn Bridge
          Park — so pick the map pin, and the night, that fits your crew.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
        {events.map((e, i) => (
          <Reveal key={e.slug} delayMs={i * 60}>
            <div className="group rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/60">
              {e.venuePhotos?.[0] && (
                <Link
                  href={`/events/${e.slug}`}
                  className="gallery-tint mb-4 -mt-6 -mx-6 block aspect-[16/9] overflow-hidden rounded-t-2xl"
                >
                  <Image
                    src={e.venuePhotos[0].src}
                    alt={e.venuePhotos[0].alt}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </Link>
              )}
              <Link href={`/events/${e.slug}`}>
                <h2 className="font-display text-xl">{e.venue}</h2>
                <p className="mt-1 text-sm text-muted">
                  {e.neighborhood ?? e.address ?? ""}
                </p>
                <p className="mt-3 text-sm text-muted">{e.description}</p>
              </Link>
              {e.address && (
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title={`Map of ${e.venue}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      e.address
                    )}&output=embed`}
                    className="h-40 w-full grayscale invert-[0.92] contrast-[1.1] hue-rotate-[10deg]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
              <Link
                href={`/events/${e.slug}`}
                className="link-underline mt-4 inline-block text-sm text-accent"
              >
                {e.name} →
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-center text-2xl sm:text-3xl">
          Find a Halloween Party by Neighborhood
        </h2>
        <p className="mt-4 text-center text-sm text-muted sm:text-base">
          Every 2026 event is in a different part of the city. Start with the
          neighborhood you want to be in, then check the night.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {events.map((e) => (
            <div key={e.slug}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
                {AREA_HEADINGS[e.slug] ?? `Halloween at ${e.venue}`}
              </h3>
              <p className="mt-2 text-sm text-muted">
                <Link href={`/events/${e.slug}`} className="link-underline hover:text-accent">
                  {e.name}
                </Link>{" "}
                at {e.venue}, {e.dateLabel}
                {e.timeLabel ? `, ${e.timeLabel}` : ""}.
                {e.address ? ` ${e.address}.` : ""}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          All events are 21+ with valid photo ID. See the{" "}
          <Link href="/events" className="link-underline hover:text-accent">
            full lineup
          </Link>{" "}
          or the{" "}
          <Link href="/faq" className="link-underline hover:text-accent">
            FAQ
          </Link>{" "}
          for tickets and entry.
        </p>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted">
        Venues are independently owned and operated. Halloween NYC 2026 curates and
        promotes events at these locations; venue-specific policies apply.
      </p>
    </section>
  );
}
