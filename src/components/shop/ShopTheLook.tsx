import Link from "next/link";
import { EVENT_LOOKS, SHOP_LINKS_LIVE } from "@/lib/shopify/config";

// A quiet costume link, deliberately styled unlike the ticket CTA and placed
// apart from it. Renders nothing until the shop is live.
export function ShopTheLook({ eventSlug }: { eventSlug?: string }) {
  if (!SHOP_LINKS_LIVE) return null;
  const look = eventSlug ? EVENT_LOOKS[eventSlug] : undefined;
  const href = look ? `/shop/collections/${look.collection}` : "/shop";

  return (
    <aside className="rounded-2xl border border-white/10 bg-surface/30 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted">Shop the look</p>
      <p className="mt-2 text-sm text-muted">
        Still planning your costume? Browse{" "}
        {look ? look.label.toLowerCase() : "costumes and accessories"} from the Halloween NYC
        2026 shop.
      </p>
      <Link
        href={href}
        className="link-underline mt-3 inline-block text-sm font-bold uppercase tracking-wide text-foreground hover:text-accent"
      >
        {look ? `Shop ${look.label}` : "Shop costumes"} →
      </Link>
      <p className="mt-3 text-xs text-muted">
        Costumes and accessories only. Shop purchases don&apos;t include event tickets or
        Halloween Passport access.
      </p>
    </aside>
  );
}
