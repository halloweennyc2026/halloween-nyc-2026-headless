import Link from "next/link";
import type { EventRecord } from "@/lib/site-data";

export function EventCard({ event }: { event: EventRecord }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-primary/60"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-accent">
          {event.dateLabel}
        </p>
        <h3 className="font-display mt-2 text-2xl leading-tight">{event.name}</h3>
        <p className="mt-1 text-sm text-muted">{event.venue}</p>
        <p className="mt-3 text-sm text-muted line-clamp-3">{event.description}</p>
      </div>
      <span className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-bold uppercase tracking-wide text-primary group-hover:text-accent">
        Explore Event →
      </span>
    </Link>
  );
}
