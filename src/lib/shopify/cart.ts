// Storefront Cart API. Server code only. Carts are never cached. Checkout
// itself happens on Shopify's hosted checkout via cart.checkoutUrl.

import { SHOPIFY_API_VERSION } from "./config";
import type { Money, ShopImage } from "./storefront";

export type CartLine = {
  id: string;
  quantity: number;
  cost: { totalAmount: Money };
  merchandise: {
    id: string;
    title: string;
    price: Money;
    image: ShopImage | null;
    product: { handle: string; title: string };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: Money };
  lines: CartLine[];
};

type RawCart = Omit<Cart, "lines"> & { lines: { nodes: CartLine[] } };
type CartPayload = { cart: RawCart | null; userErrors: { message: string }[] };

const CART_FIELDS = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost { subtotalAmount { amount currencyCode } }
    lines(first: 100) {
      nodes {
        id
        quantity
        cost { totalAmount { amount currencyCode } }
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            image { url altText width height }
            product { handle title }
          }
        }
      }
    }
  }
`;

async function cartRequest<T>(query: string, variables: Record<string, unknown>) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  if (!domain || !token) throw new Error("Shop is not configured");

  const res = await fetch(`https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Shopify Storefront API responded ${res.status}`);
  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join("; "));
  if (!json.data) throw new Error("Shopify Storefront API returned no data");
  return json.data;
}

function unwrap(payload: CartPayload): Cart {
  if (payload.userErrors.length) throw new Error(payload.userErrors[0].message);
  if (!payload.cart) throw new Error("Cart not returned");
  return { ...payload.cart, lines: payload.cart.lines.nodes };
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await cartRequest<{ cart: RawCart | null }>(
    `${CART_FIELDS} query Cart($cartId: ID!) { cart(id: $cartId) { ...CartFields } }`,
    { cartId },
  );
  return data.cart ? { ...data.cart, lines: data.cart.lines.nodes } : null;
}

export async function createCart(merchandiseId: string, quantity: number) {
  const data = await cartRequest<{ cartCreate: CartPayload }>(
    `${CART_FIELDS}
    mutation CartCreate($input: CartInput!) {
      cartCreate(input: $input) { cart { ...CartFields } userErrors { message } }
    }`,
    { input: { lines: [{ merchandiseId, quantity }] } },
  );
  return unwrap(data.cartCreate);
}

export async function addCartLine(cartId: string, merchandiseId: string, quantity: number) {
  const data = await cartRequest<{ cartLinesAdd: CartPayload }>(
    `${CART_FIELDS}
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ...CartFields } userErrors { message } }
    }`,
    { cartId, lines: [{ merchandiseId, quantity }] },
  );
  return unwrap(data.cartLinesAdd);
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  const data = await cartRequest<{ cartLinesUpdate: CartPayload }>(
    `${CART_FIELDS}
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ...CartFields } userErrors { message } }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] },
  );
  return unwrap(data.cartLinesUpdate);
}

export async function removeCartLine(cartId: string, lineId: string) {
  const data = await cartRequest<{ cartLinesRemove: CartPayload }>(
    `${CART_FIELDS}
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ...CartFields } userErrors { message } }
    }`,
    { cartId, lineIds: [lineId] },
  );
  return unwrap(data.cartLinesRemove);
}
