import { APPROVED_SHIPPING_NOTE } from "@/lib/shopify/config";

// Honest shipping copy for dropshipped goods, plus the line that keeps the
// shop clearly separate from tickets and the Passport.
export function ShopNotices() {
  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-surface/30 p-4 text-xs text-muted">
      <p>
        <span className="font-bold uppercase tracking-wide text-foreground">Shipping · </span>
        {APPROVED_SHIPPING_NOTE ??
          "Ships directly from our fulfillment partner. Delivery estimates haven't been confirmed yet and will be posted here. Please don't rely on a specific arrival date until they are."}
      </p>
      <p>
        Shop purchases are costumes and accessories only. They don&apos;t include event tickets
        or Halloween Passport access. Tickets are sold separately through each event&apos;s official
        ticket platform.
      </p>
    </div>
  );
}
