import Link from "next/link";
import Image from "next/image";
import type { EventRecord } from "@/lib/site-data";

export function EventCard({ event }: { event: EventRecord }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 transition-[border-color,transform] duration-200 hover:border-primary/60 active:scale-[0.98]"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={event.ogImage}
          alt={event.heroAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-accent">
            {event.dateLabel}
          </p>
          <h3 className="font-display mt-2 text-2xl leading-tight">{event.name}</h3>
          <p className="mt-1 text-sm text-muted">{event.venue}</p>
          <p className="mt-3 text-sm text-muted line-clamp-3">{event.description}</p>
        </div>
        <span className="link-underline mt-5 inline-flex w-fit items-center gap-1 text-sm font-bold uppercase tracking-wide text-primary group-hover:text-accent">
          Explore Event →
        </span>
      </div>
    </Link>
  );
}
