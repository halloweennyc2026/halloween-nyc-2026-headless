// Read-only Storefront API client. Server code only: the token is read from
// process.env without a NEXT_PUBLIC_ prefix, so it never reaches the browser.
//
// Every function returns null / [] when the store isn't configured, so the
// site builds and the shop simply 404s until .env.local is filled in.

import {
  APPROVED_PRODUCT_HANDLES,
  BLOCKED_PRODUCT_TAGS,
  FEATURED_COLLECTION_HANDLES,
  SHOPIFY_API_VERSION,
  SHOP_REVALIDATE_SECONDS,
} from "./config";

export type Money = { amount: string; currencyCode: string };

export type ShopImage = {
  url: string;
  altText: string | null;
  width: number | null;
  height: number | null;
};

export type ShopVariant = {
  id: string;
  title: string;
  sku: string | null;
  availableForSale: boolean;
  price: Money;
  selectedOptions: { name: string; value: string }[];
};

export type ShopProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  availableForSale: boolean;
  updatedAt: string;
  featuredImage: ShopImage | null;
  images: ShopImage[];
  priceRange: { minVariantPrice: Money; maxVariantPrice: Money };
  variants: ShopVariant[];
  seo: { title: string | null; description: string | null };
};

export type ShopCollection = {
  handle: string;
  title: string;
  description: string;
  products: ShopProduct[];
};

export function isShopConfigured() {
  return Boolean(process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_TOKEN);
}

async function storefront<T>(query: string, variables: Record<string, unknown> = {}) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  if (!domain || !token) return null;

  const res = await fetch(`https://${domain}/api/${SHOPIFY_API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: SHOP_REVALIDATE_SECONDS, tags: ["shopify"] },
  });

  if (!res.ok) {
    throw new Error(`Shopify Storefront API responded ${res.status}`);
  }
  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length) {
    throw new Error(`Shopify Storefront API: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  return json.data ?? null;
}

const PRODUCT_FIELDS = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    tags
    availableForSale
    updatedAt
    featuredImage { url altText width height }
    images(first: 10) { nodes { url altText width height } }
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    variants(first: 50) {
      nodes {
        id
        title
        sku
        availableForSale
        price { amount currencyCode }
        selectedOptions { name value }
      }
    }
    seo { title description }
  }
`;

type RawProduct = Omit<ShopProduct, "images" | "variants"> & {
  images: { nodes: ShopImage[] };
  variants: { nodes: ShopVariant[] };
};

function normalize(p: RawProduct): ShopProduct {
  return { ...p, images: p.images.nodes, variants: p.variants.nodes };
}

// The single gate every product passes through before it can render.
export function isApprovedProduct(p: Pick<ShopProduct, "handle" | "tags">) {
  if (!APPROVED_PRODUCT_HANDLES.includes(p.handle)) return false;
  const tags = p.tags.map((t) => t.toLowerCase());
  return !BLOCKED_PRODUCT_TAGS.some((t) => tags.includes(t));
}

export async function getProduct(handle: string): Promise<ShopProduct | null> {
  const data = await storefront<{ product: RawProduct | null }>(
    `${PRODUCT_FIELDS}
    query Product($handle: String!) {
      product(handle: $handle) { ...ProductFields }
    }`,
    { handle },
  );
  if (!data?.product) return null;
  const product = normalize(data.product);
  return isApprovedProduct(product) ? product : null;
}

export async function getCollection(handle: string): Promise<ShopCollection | null> {
  if (!FEATURED_COLLECTION_HANDLES.includes(handle)) return null;
  const data = await storefront<{
    collection: {
      handle: string;
      title: string;
      description: string;
      products: { nodes: RawProduct[] };
    } | null;
  }>(
    `${PRODUCT_FIELDS}
    query Collection($handle: String!) {
      collection(handle: $handle) {
        handle
        title
        description
        products(first: 100) { nodes { ...ProductFields } }
      }
    }`,
    { handle },
  );
  if (!data?.collection) return null;
  return {
    ...data.collection,
    products: data.collection.products.nodes.map(normalize).filter(isApprovedProduct),
  };
}

// Featured collections that currently have at least one approved product.
export async function getFeaturedCollections(): Promise<ShopCollection[]> {
  if (!isShopConfigured()) return [];
  const all = await Promise.all(FEATURED_COLLECTION_HANDLES.map(getCollection));
  return all.filter((c): c is ShopCollection => Boolean(c && c.products.length));
}

// Approved products that are live on the Headless channel, deduplicated
// across collections. Used for static params and (later) the sitemap.
export async function getApprovedProducts(): Promise<ShopProduct[]> {
  const collections = await getFeaturedCollections();
  const byHandle = new Map<string, ShopProduct>();
  for (const c of collections) for (const p of c.products) byHandle.set(p.handle, p);
  return [...byHandle.values()];
}

export function formatMoney({ amount, currencyCode }: Money) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: currencyCode }).format(
    Number(amount),
  );
}

export function formatPriceRange(p: Pick<ShopProduct, "priceRange">) {
  const { minVariantPrice: min, maxVariantPrice: max } = p.priceRange;
  return min.amount === max.amount
    ? formatMoney(min)
    : `${formatMoney(min)} – ${formatMoney(max)}`;
}
