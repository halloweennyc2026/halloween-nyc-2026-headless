import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site-data";
import { SHOP_INDEXABLE } from "@/lib/shopify/config";
import { getFeaturedCollections } from "@/lib/shopify/storefront";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopNotices } from "@/components/shop/ShopNotices";

export const revalidate = 300;

const description =
  "Costumes and accessories for Halloween weekend in New York: hooded robes, gothic gowns, capes and masks, curated by Halloween NYC 2026.";

export const metadata: Metadata = {
  title: "Shop Halloween Costumes & Accessories",
  description,
  openGraph: {
    title: "Shop Halloween Costumes & Accessories | Halloween NYC 2026",
    description,
    url: "/shop",
    images: [{ url: site.defaultOgImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Halloween Costumes & Accessories | Halloween NYC 2026",
    description,
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/shop" },
  robots: { index: SHOP_INDEXABLE, follow: true },
};

export default async function ShopPage() {
  const collections = await getFeaturedCollections();
  if (!collections.length) notFound();

  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/shop` },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl">Shop the Look</h1>
          <p className="mt-4 text-sm text-muted sm:text-base">
            Costumes and accessories for Halloween weekend in New York. Hooded robes, gothic
            gowns, capes and masks that suit a night out, picked to match the mood of the
            Halloween NYC 2026 events.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <ShopNotices />
        </div>

        {collections.map((c) => (
          <div key={c.handle} className="mt-16">
            <Reveal>
              <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl">{c.title}</h2>
                <Link
                  href={`/shop/collections/${c.handle}`}
                  className="link-underline shrink-0 text-sm font-bold uppercase tracking-wide text-foreground hover:text-accent"
                >
                  View all →
                </Link>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.products.slice(0, 4).map((p, i) => (
                <Reveal key={p.handle} delayMs={i * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
