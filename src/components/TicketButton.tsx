import type { EventRecord } from "@/lib/site-data";
import { TrackedLink } from "@/components/TrackedLink";

export function TicketButton({
  ticket,
  eventId,
  position,
}: {
  ticket: EventRecord["ticket"];
  eventId: string;
  position: string;
}) {
  if (ticket.status === "pending") {
    return (
      <div className="inline-flex flex-col gap-2">
        <span className="inline-flex w-fit cursor-not-allowed rounded-full border border-muted/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-muted">
          Ticket details pending confirmation
        </span>
        <span className="text-xs text-muted">
          Official ticket information will be published here once the correct checkout link is confirmed.
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col gap-2">
      <TrackedLink
        href={ticket.url ?? ""}
        eventName="ticket_cta_click"
        params={{ event_id: eventId, platform: ticket.platform ?? "", position }}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
      >
        Get Official Tickets on {ticket.platform} ↗
      </TrackedLink>
      <span className="text-xs text-muted">
        Official ticket checkout is provided through {ticket.platform}.
      </span>
    </div>
  );
}
