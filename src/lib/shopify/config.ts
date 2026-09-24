// Shop configuration: what the headless site is allowed to show from the
// Halloween NYC Shopify store (wdvc5h-pf.myshopify.com).
//
// Nothing here is a price, stock level or shipping time. Those only ever come
// live from the Storefront API. Changing this file changes what's visible on
// the site, so every edit needs the founder's sign-off.

// Latest stable Storefront API version as of 2026-09-23. 2026-10 becomes
// stable on Oct 1; bump after checking the release notes.
export const SHOPIFY_API_VERSION = "2026-07";

// Seconds between background price/availability refreshes (ISR).
export const SHOP_REVALIDATE_SECONDS = 300;

// Keep every shop page out of search results until the founder approves the
// launch. Flip to true in the same PR that adds /shop to the sitemap.
export const SHOP_INDEXABLE = false;

// Master switch for links *into* the shop from the rest of the site (event
// pages, FAQ, blog, header nav, homepage). Turned on 2026-09-24 at the
// founder's request. Merge only once /costumes returns 200 in production.
export const SHOP_LINKS_LIVE = true;

// PROPOSED "Shop the look" pairing of event → collection, pending founder
// approval. Events not listed link to /shop generally.
export const EVENT_LOOKS: Readonly<Record<string, { collection: string; label: string }>> = {
  "the-masquerade-loulou": { collection: "masks", label: "Masks" },
  "heaven-and-hell-eden": { collection: "gothic", label: "Gothic looks" },
  "the-descent-submercer-soho": { collection: "gothic", label: "Gothic looks" },
  "haunting-on-the-hudson": { collection: "womens-costumes", label: "Costumes" },
};

// PROPOSED launch set, pending founder approval (Step 1 review, 2026-09-23).
// A product appears only if it is on this list AND published to the Headless
// channel. Excluded on purpose: gore ("Bloody …"), cartoon novelty items,
// character lookalikes and every kids item.
export const APPROVED_PRODUCT_HANDLES: readonly string[] = [
  "faceless-spirit-robe-with-mask",
  "faceless-spirit-white-mask",
  "gothic-ghost-gown-with-bell-sleeves",
  "hooded-ghost-gown-with-capelet",
  "sheer-tulle-hooded-cape",
  "hooded-monk-robe-with-rope-belt",
  "black-hooded-reaper-robe",
  "grim-reaper-hooded-cloak-set",
  "gothic-clown-capelet-with-tutu",
  "harlequin-clown-dress",
  "harlequin-clown-jumpsuit",
  "pirate-dress-set-with-hat-and-belt",
  "skeleton-hooded-onesie",
];

// Hard rule, independent of the list above: the site is 21+, so anything
// tagged for kids never renders, even if someone adds it to the list.
export const BLOCKED_PRODUCT_TAGS: readonly string[] = ["kids"];

// Collections shown on /shop, in display order. A collection with no
// approved, published products is hidden automatically.
export const FEATURED_COLLECTION_HANDLES: readonly string[] = [
  "gothic",
  "masks",
  "womens-costumes",
  "mens-costumes",
  "couples-costumes",
  "accessories",
];

// Delivery-time copy for dropshipped items. Must come from the supplier
// (EPROLO) and be approved by the founder before it goes here. While null,
// product pages say the estimate isn't confirmed yet, never a guess.
export const APPROVED_SHIPPING_NOTE: string | null = null;
