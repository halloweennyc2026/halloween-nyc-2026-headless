import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/site-data";
import { EventCard } from "@/components/EventCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Halloween Events NYC 2026 | Parties, Nightlife & Tickets",
  description:
    "Explore Halloween events in NYC for 2026, including rooftop parties, underground nightlife, masquerades, boat parties and official ticket links.",
  openGraph: {
    type: "website",
    title: "Halloween Events NYC 2026 | Explore the Lineup",
    description:
      "Explore Halloween parties, rooftop nightlife, masquerades, boat events and official ticket options across New York City.",
    url: "/events",
    images: [{ url: site.defaultOgImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Events NYC 2026 | Explore the Lineup",
    description:
      "Explore Halloween parties, rooftop nightlife, masquerades, boat events and official ticket options across New York City.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/events" },
};

// Events grouped by night, built from site-data so dates never drift.
const nights = Array.from(new Set(events.map((e) => e.isoDate)))
  .sort()
  .map((date) => {
    const onNight = events.filter((e) => e.isoDate === date);
    return { date, label: onNight[0].dateLabel, events: onNight };
  });

export default function EventsHubPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Events", item: `${site.url}/events` },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl">Halloween Events NYC 2026</h1>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Explore Halloween NYC 2026 events across the city, from rooftop parties and
            costume nights to underground dance floors, masquerades and waterfront
            experiences. Select an event to view current details and official ticket
            options.
          </p>
        </div>
        <h2 className="font-display mt-14 text-center text-2xl sm:text-3xl">
          The Full Lineup
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.slug} delayMs={i * 80}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-10 text-sm text-muted sm:text-base">
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Halloween Weekend, Night by Night
            </h2>
            <p className="mt-3">
              Halloween NYC 2026 runs across four nights, from {site.dateRange}. Halloween
              itself falls on a Saturday this year, so the week builds from a Thursday
              opening night to a Sunday finale in Brooklyn.
            </p>
            <ul className="mt-4 space-y-3">
              {nights.map((night) => (
                <li key={night.date}>
                  <h3 className="font-bold text-foreground">{night.label}</h3>
                  <p>
                    {night.events.map((e, i) => (
                      <span key={e.slug}>
                        {i > 0 ? " · " : ""}
                        <Link href={`/events/${e.slug}`} className="link-underline hover:text-accent">
                          {e.name}
                        </Link>
                        {e.neighborhood ? ` (${e.neighborhood})` : ""}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              How Tickets Work
            </h2>
            <p className="mt-3">
              Each event has its own page with the date, venue and address (and start
              time once it&apos;s confirmed), plus a single button to the official ticket
              listing. Checkout happens on the ticket
              platform, not on this site, and every button says which platform it opens.
              Buy only through the link on the event page so you know the listing is
              the real one.
            </p>
            <p className="mt-3">
              Planning more than one night? The{" "}
              <Link href="/halloween-passport-nyc-2026" className="link-underline hover:text-accent">
                Halloween Passport
              </Link>{" "}
              covers eligible experiences under its own terms, with checkout on Posh.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Before You Go
            </h2>
            <p className="mt-3">
              Every Halloween NYC 2026 event is 21+, and you&apos;ll need a valid
              government-issued photo ID at the door. Leave time for ID checks and ticket
              scanning. Questions about arrival,
              transfers or refunds are answered in the{" "}
              <Link href="/faq" className="link-underline hover:text-accent">
                FAQ
              </Link>{" "}
              and the{" "}
              <Link href="/refund-policy" className="link-underline hover:text-accent">
                Refund Policy
              </Link>
              , and the{" "}
              <Link href="/venues" className="link-underline hover:text-accent">
                Venues guide
              </Link>{" "}
              covers each location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
