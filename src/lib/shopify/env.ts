// Storefront API credentials, read server-side only.
//
// The Vercel Shopify integration was installed with the prefix
// "SHOPIFY_STORE_DOMAIN", so its variables carry that doubled prefix. Its
// token is preferred because the hand-entered SHOPIFY_STOREFRONT_TOKEN was
// rejected by Shopify (401, 2026-09-24). The hand-entered names stay as a
// fallback.
export function shopifyCredentials() {
  const rawDomain =
    process.env.SHOPIFY_STORE_DOMAIN_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN;
  const token =
    process.env.SHOPIFY_STORE_DOMAIN_SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
    process.env.SHOPIFY_STOREFRONT_TOKEN;

  // The integration may store a full URL; the API call needs the bare host.
  const domain = rawDomain?.trim().replace(/^https?:\/\//, "").replace(/\/+$/, "");
  return { domain: domain || undefined, token: token?.trim() || undefined };
}
