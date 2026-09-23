// Ticket-click tracking. Inert until NEXT_PUBLIC_GA4_ID is set: with no ID,
// no script loads and trackEvent() does nothing.

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

export type TrackedEventName = "ticket_cta_click" | "passport_checkout_click";

export interface TicketClickParams {
  event_id: string;
  platform: string;
  position: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: TrackedEventName, params: TicketClickParams) {
  if (!GA4_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
