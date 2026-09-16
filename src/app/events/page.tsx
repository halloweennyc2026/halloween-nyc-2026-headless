import type { Metadata } from "next";
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
    title: "Halloween Events NYC 2026 | Explore the Lineup",
    description:
      "Explore Halloween parties, rooftop nightlife, masquerades, boat events and official ticket options across New York City.",
    url: "/events",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.slug} delayMs={i * 80}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
