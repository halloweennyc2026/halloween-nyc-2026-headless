"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { addToCart, type AddToCartState } from "@/app/costumes/actions";

type VariantOption = {
  id: string;
  title: string;
  availableForSale: boolean;
  priceLabel: string;
};

export function AddToCart({
  handle,
  variants,
  showPrices,
}: {
  handle: string;
  variants: VariantOption[];
  showPrices: boolean;
}) {
  const firstAvailable = variants.find((v) => v.availableForSale);
  const [selected, setSelected] = useState(firstAvailable?.id ?? "");
  const [state, action, pending] = useActionState<AddToCartState, FormData>(addToCart, {
    status: "idle",
  });
  const hasChoices = variants.length > 1 || variants[0]?.title !== "Default Title";

  if (!firstAvailable) {
    return <p className="text-sm text-muted">This item is currently unavailable.</p>;
  }

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="handle" value={handle} />
      <input type="hidden" name="variantId" value={selected} />
      <input type="hidden" name="quantity" value="1" />

      {hasChoices && (
        <fieldset>
          <legend className="text-xs font-bold uppercase tracking-wide text-muted">Options</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {variants.map((v) => (
              <label
                key={v.id}
                className={`cursor-pointer rounded-full border px-4 py-2 text-xs transition-colors has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background has-[:disabled]:cursor-not-allowed has-[:disabled]:text-muted has-[:disabled]:line-through ${
                  v.availableForSale ? "border-white/30" : "border-white/10"
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={v.id}
                  checked={selected === v.id}
                  disabled={!v.availableForSale}
                  onChange={() => setSelected(v.id)}
                  className="sr-only"
                />
                {v.title}
                {showPrices && ` · ${v.priceLabel}`}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* Outline style on purpose: the filled signal-red pill is reserved for ticket CTAs. */}
      <button
        type="submit"
        disabled={pending || !selected}
        className="inline-flex w-full items-center justify-center rounded-full border border-foreground px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-50 sm:w-auto"
      >
        {pending ? "Adding…" : "Add to Cart"}
      </button>

      <p aria-live="polite" className="text-sm">
        {state.status === "added" && (
          <>
            Added to your cart.{" "}
            <Link href="/costumes/cart" className="link-underline font-bold hover:text-accent">
              View cart →
            </Link>
          </>
        )}
        {state.status === "error" && <span className="text-accent">{state.message}</span>}
      </p>
    </form>
  );
}
