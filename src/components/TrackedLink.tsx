"use client";

import { trackEvent, type TicketClickParams, type TrackedEventName } from "@/lib/analytics";
import { withAttribution } from "@/lib/attribution";

// External checkout link that reports a click event and carries any saved ad
// attribution (fbclid, utm_*) through to the ticket platform.
export function TrackedLink({
  href,
  eventName,
  params,
  className,
  children,
}: {
  href: string;
  eventName: TrackedEventName;
  params: TicketClickParams;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={(e) => {
        e.currentTarget.href = withAttribution(href);
        trackEvent(eventName, params);
      }}
      onAuxClick={(e) => {
        e.currentTarget.href = withAttribution(href);
      }}
    >
      {children}
    </a>
  );
}
