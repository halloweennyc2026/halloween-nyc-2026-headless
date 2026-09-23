import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { formatMoney, isShopConfigured } from "@/lib/shopify/storefront";
import { getCurrentCart, removeLine, updateLineQuantity } from "@/app/shop/actions";
import { ShopNotices } from "@/components/shop/ShopNotices";
import { notFound } from "next/navigation";

// Per-visitor cart from a cookie: never prerender or cache this page.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your Cart",
  robots: { index: false, follow: false },
};

export default async function CartPage() {
  if (!isShopConfigured()) notFound();
  const cart = await getCurrentCart();
  const lines = cart?.lines ?? [];

  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Your Cart</h1>

        {!cart || lines.length === 0 ? (
          <div className="mt-8 space-y-4 text-sm text-muted">
            <p>Your cart is empty.</p>
            <Link href="/shop" className="link-underline font-bold text-foreground hover:text-accent">
              Back to the shop →
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {lines.map((line) => {
                const m = line.merchandise;
                return (
                  <li key={line.id} className="flex gap-4 py-5">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-surface">
                      {m.image && (
                        <Image
                          src={m.image.url}
                          alt={m.image.altText || m.product.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <Link
                          href={`/shop/${m.product.handle}`}
                          className="font-semibold hover:text-accent"
                        >
                          {m.product.title}
                        </Link>
                        {m.title !== "Default Title" && (
                          <p className="text-xs text-muted">{m.title}</p>
                        )}
                        <p className="mt-1 text-xs text-muted">{formatMoney(m.price)} each</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <form action={updateLineQuantity} className="flex items-center gap-2">
                          <input type="hidden" name="lineId" value={line.id} />
                          <label className="sr-only" htmlFor={`qty-${line.id}`}>
                            Quantity
                          </label>
                          <select
                            id={`qty-${line.id}`}
                            name="quantity"
                            defaultValue={line.quantity}
                            className="rounded-md border border-white/20 bg-background px-2 py-1 text-sm"
                          >
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            ))}
                          </select>
                          <button type="submit" className="text-xs uppercase tracking-wide text-muted hover:text-foreground">
                            Update
                          </button>
                        </form>
                        <form action={removeLine}>
                          <input type="hidden" name="lineId" value={line.id} />
                          <button type="submit" className="text-xs uppercase tracking-wide text-muted hover:text-accent">
                            Remove
                          </button>
                        </form>
                        <p className="w-20 text-right text-sm font-semibold">
                          {formatMoney(line.cost.totalAmount)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex items-center justify-between text-base">
              <span className="text-muted">Subtotal</span>
              <span className="font-semibold">{formatMoney(cart.cost.subtotalAmount)}</span>
            </div>
            <p className="mt-1 text-xs text-muted">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={cart.checkoutUrl}
                className="inline-flex w-full items-center justify-center rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-90 sm:w-auto sm:self-end"
              >
                Checkout ↗
              </a>
              <p className="text-xs text-muted sm:text-right">
                Secure checkout is provided through Shopify.
              </p>
            </div>

            <div className="mt-8">
              <ShopNotices />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
