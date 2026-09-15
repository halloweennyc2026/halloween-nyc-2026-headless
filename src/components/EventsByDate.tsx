"use client";

import { useMemo, useState } from "react";
import type { EventRecord } from "@/lib/site-data";
import { EventCard } from "@/components/EventCard";

function dayLabel(isoDate: string) {
  const d = new Date(isoDate + "T00:00:00");
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
    day: d.getDate(),
  };
}

export function EventsByDate({ events }: { events: EventRecord[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  const uniqueDates = useMemo(() => {
    const seen = new Set<string>();
    const dates: string[] = [];
    for (const e of events) {
      if (!seen.has(e.isoDate)) {
        seen.add(e.isoDate);
        dates.push(e.isoDate);
      }
    }
    return dates;
  }, [events]);

  const visibleEvents = selected ? events.filter((e) => e.isoDate === selected) : events;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter events by date"
        className="flex flex-wrap justify-center gap-3 text-sm font-bold uppercase tracking-wide"
      >
        <button
          type="button"
          onClick={() => setSelected(null)}
          aria-pressed={selected === null}
          className={`rounded-full border px-4 py-1.5 transition-colors ${
            selected === null
              ? "border-primary bg-primary text-white"
              : "border-white/10 text-accent hover:border-accent"
          }`}
        >
          All Nights
        </button>
        {uniqueDates.map((isoDate) => {
          const { weekday, day } = dayLabel(isoDate);
          const active = selected === isoDate;
          return (
            <button
              key={isoDate}
              type="button"
              onClick={() => setSelected(active ? null : isoDate)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 transition-colors ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-white/10 text-accent hover:border-accent"
              }`}
            >
              {weekday} {day}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-muted" aria-live="polite">
        {selected
          ? `Showing ${visibleEvents.length} event${visibleEvents.length === 1 ? "" : "s"} on ${dayLabel(selected).weekday} the ${dayLabel(selected).day}`
          : `Showing all ${events.length} events across the weekend`}
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleEvents.map((event, i) => (
          <div
            key={event.slug}
            className="transition-all duration-300"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
