// Ticket-click tracking.
// - GA4 is inert until NEXT_PUBLIC_GA4_ID is set.
// - The Meta Pixel ID is public (it ships in every page); set
//   NEXT_PUBLIC_META_PIXEL_ID to "" to turn the pixel off.

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1417895864737697";

export type TrackedEventName = "ticket_cta_click" | "passport_checkout_click";

export interface TicketClickParams {
  event_id: string;
  platform: string;
  position: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: TrackedEventName, params: TicketClickParams) {
  if (typeof window === "undefined") return;
  if (GA4_ID && window.gtag) window.gtag("event", name, params);
  if (META_PIXEL_ID && window.fbq) {
    // Standard event for ad optimization, plus the named event for reporting.
    window.fbq("track", "InitiateCheckout", {
      content_name: params.event_id,
      content_category: params.platform,
    });
    window.fbq("trackCustom", name, params);
  }
}
