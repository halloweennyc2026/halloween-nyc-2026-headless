import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site-data";
import { SHOP_INDEXABLE } from "@/lib/shopify/config";
import { getCollection, getFeaturedCollections } from "@/lib/shopify/storefront";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopNotices } from "@/components/shop/ShopNotices";

export const revalidate = 300;

export async function generateStaticParams() {
  const collections = await getFeaturedCollections();
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollection(handle);
  if (!collection) return {};
  const title = `${collection.title} | Shop`;
  const description =
    collection.description ||
    `${collection.title} for Halloween weekend in New York, curated by Halloween NYC 2026.`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Halloween NYC 2026`,
      description,
      url: `/costumes/collections/${collection.handle}`,
    },
    alternates: { canonical: `/costumes/collections/${collection.handle}` },
    robots: { index: SHOP_INDEXABLE, follow: true },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = await getCollection(handle);
  if (!collection || !collection.products.length) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/costumes` },
            {
              "@type": "ListItem",
              position: 3,
              name: collection.title,
              item: `${site.url}/costumes/collections/${collection.handle}`,
            },
          ],
        }}
      />
      <nav className="border-b border-white/10 px-5 py-3 text-xs text-muted">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>{" "}
          →{" "}
          <Link href="/costumes" className="hover:text-accent">
            Shop
          </Link>{" "}
          → {collection.title}
        </div>
      </nav>
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl sm:text-5xl">{collection.title}</h1>
          {collection.description && (
            <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
              {collection.description}
            </p>
          )}
          <div className="mt-6 max-w-2xl">
            <ShopNotices />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collection.products.map((p, i) => (
              <Reveal key={p.handle} delayMs={(i % 4) * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
