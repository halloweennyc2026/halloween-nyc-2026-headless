"use client";

import { trackEvent, type TicketClickParams, type TrackedEventName } from "@/lib/analytics";

// External checkout link that reports a click event (no-op without GA4).
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
      onClick={() => trackEvent(eventName, params)}
    >
      {children}
    </a>
  );
}
