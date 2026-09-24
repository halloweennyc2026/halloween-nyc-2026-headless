"use server";

import { cookies } from "next/headers";
import { refresh } from "next/cache";
import { getProduct } from "@/lib/shopify/storefront";
import {
  addCartLine,
  createCart,
  getCart,
  removeCartLine,
  updateCartLine,
} from "@/lib/shopify/cart";

const CART_COOKIE = "hnyc_cart";
const MAX_QUANTITY = 10;

export type AddToCartState = { status: "idle" | "added" | "error"; message?: string };

async function cartIdFromCookie() {
  return (await cookies()).get(CART_COOKIE)?.value ?? null;
}

async function saveCartId(id: string) {
  (await cookies()).set(CART_COOKIE, id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
}

function clampQuantity(value: FormDataEntryValue | null, min: number) {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n)) return min;
  return Math.min(MAX_QUANTITY, Math.max(min, n));
}

export async function addToCart(
  _prev: AddToCartState,
  formData: FormData,
): Promise<AddToCartState> {
  const handle = String(formData.get("handle") ?? "");
  const variantId = String(formData.get("variantId") ?? "");
  const quantity = clampQuantity(formData.get("quantity"), 1);

  // Server actions are public endpoints: re-check the approval gate and the
  // live availability instead of trusting what the form sent.
  const product = await getProduct(handle);
  const variant = product?.variants.find((v) => v.id === variantId);
  if (!product || !variant) {
    return { status: "error", message: "That item isn't available in the shop." };
  }
  if (!variant.availableForSale) {
    return { status: "error", message: "That option is currently unavailable." };
  }

  try {
    const existingId = await cartIdFromCookie();
    const existing = existingId ? await getCart(existingId) : null;
    const cart = existing
      ? await addCartLine(existing.id, variant.id, quantity)
      : await createCart(variant.id, quantity);
    await saveCartId(cart.id);
  } catch {
    return { status: "error", message: "Couldn't add to cart. Please try again." };
  }

  refresh();
  return { status: "added" };
}

export async function updateLineQuantity(formData: FormData) {
  const cartId = await cartIdFromCookie();
  const lineId = String(formData.get("lineId") ?? "");
  if (!cartId || !lineId) return;
  const quantity = clampQuantity(formData.get("quantity"), 0);
  if (quantity === 0) await removeCartLine(cartId, lineId);
  else await updateCartLine(cartId, lineId, quantity);
  refresh();
}

export async function removeLine(formData: FormData) {
  const cartId = await cartIdFromCookie();
  const lineId = String(formData.get("lineId") ?? "");
  if (!cartId || !lineId) return;
  await removeCartLine(cartId, lineId);
  refresh();
}

export async function getCurrentCart() {
  const cartId = await cartIdFromCookie();
  if (!cartId) return null;
  try {
    return await getCart(cartId);
  } catch {
    return null;
  }
}
