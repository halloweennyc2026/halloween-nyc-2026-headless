import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent, site } from "@/lib/site-data";
import { TicketButton } from "@/components/TicketButton";
import { EventCard } from "@/components/EventCard";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: event.seo.title,
    description: event.seo.description,
    openGraph: {
      title: event.seo.ogTitle,
      description: event.seo.ogDescription,
      url: `/events/${event.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: event.seo.ogTitle,
      description: event.seo.ogDescription,
    },
    alternates: { canonical: `/events/${event.slug}` },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      {event.ticket.status === "confirmed" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.name,
            startDate: event.isoDate,
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: event.venue,
              address: event.address ?? undefined,
            },
            description: event.description,
            offers: {
              "@type": "Offer",
              url: event.ticket.url,
              availability: "https://schema.org/InStock",
            },
            organizer: {
              "@type": "Organization",
              name: site.name,
              url: `${site.url}/`,
            },
          }}
        />
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Events", item: `${site.url}/events` },
            {
              "@type": "ListItem",
              position: 3,
              name: event.name,
              item: `${site.url}/events/${event.slug}`,
            },
          ],
        }}
      />

      <nav className="border-b border-white/10 px-5 py-3 text-xs text-muted">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>{" "}
          →{" "}
          <Link href="/events" className="hover:text-accent">
            Events
          </Link>{" "}
          → {event.name}
        </div>
      </nav>

      <section className="border-b border-white/10 px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {event.dateLabel}
            {event.timeLabel ? ` · ${event.timeLabel}` : ""}
          </p>
          <h1 className="font-display mt-3 text-4xl leading-tight sm:text-6xl">
            {event.name}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {event.venue}
            {event.neighborhood ? ` · ${event.neighborhood}` : ""}
          </p>
          <p className="mt-6 max-w-2xl text-base text-muted">{event.description}</p>
          <div className="mt-8">
            <TicketButton ticket={event.ticket} />
          </div>
          {event.notes && (
            <p className="mt-4 max-w-xl rounded-lg border border-hot-orange/30 bg-accent/10 p-3 text-xs text-accent">
              {event.notes}
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-12">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Date</p>
            <p className="mt-1 text-sm">{event.dateLabel}</p>
          </div>
          {event.timeLabel && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Time</p>
              <p className="mt-1 text-sm">{event.timeLabel}</p>
            </div>
          )}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Venue</p>
            <p className="mt-1 text-sm">{event.venue}</p>
          </div>
          {event.address && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">Address</p>
              <p className="mt-1 text-sm">{event.address}</p>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-2xl sm:text-3xl">
            Explore More Halloween NYC Events
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
            <Link href="/faq" className="hover:text-accent">
              FAQ
            </Link>
            <Link href="/refund-policy" className="hover:text-accent">
              Refund Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
