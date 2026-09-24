import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/lib/site-data";
import { SHOP_INDEXABLE } from "@/lib/shopify/config";
import {
  formatMoney,
  formatPriceRange,
  getApprovedProducts,
  getProduct,
} from "@/lib/shopify/storefront";
import { JsonLd } from "@/components/JsonLd";
import { ShopNotices } from "@/components/shop/ShopNotices";
import { AddToCart } from "@/components/shop/AddToCart";

export const revalidate = 300;

export async function generateStaticParams() {
  const products = await getApprovedProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  const title = product.seo.title || product.title;
  const description =
    product.seo.description ||
    product.description.slice(0, 155) ||
    `${product.title}, from the Halloween NYC 2026 costume shop.`;
  const image = product.featuredImage;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Halloween NYC 2026`,
      description,
      url: `/costumes/${product.handle}`,
      images: image ? [{ url: image.url, alt: image.altText || product.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Halloween NYC 2026`,
      description,
      images: image ? [image.url] : undefined,
    },
    alternates: { canonical: `/costumes/${product.handle}` },
    robots: { index: SHOP_INDEXABLE, follow: true },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  const url = `${site.url}/costumes/${product.handle}`;
  const [mainImage, ...moreImages] = product.images;

  return (
    <>
      {/* Product schema is built only from live Storefront API data. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.description || undefined,
          image: product.images.map((i) => i.url),
          url,
          offers: product.variants.map((v) => ({
            "@type": "Offer",
            name: v.title === "Default Title" ? product.title : `${product.title} (${v.title})`,
            sku: v.sku || undefined,
            price: v.price.amount,
            priceCurrency: v.price.currencyCode,
            availability: v.availableForSale
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            url,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/costumes` },
            { "@type": "ListItem", position: 3, name: product.title, item: url },
          ],
        }}
      />

      <nav className="border-b border-white/10 px-5 py-3 text-xs text-muted">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>{" "}
          →{" "}
          <Link href="/costumes" className="hover:text-accent">
            Shop
          </Link>{" "}
          → {product.title}
        </div>
      </nav>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
              {mainImage ? (
                <Image
                  src={mainImage.url}
                  alt={mainImage.altText || product.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-wide text-muted">
                  Photo coming soon
                </span>
              )}
            </div>
            {moreImages.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {moreImages.slice(0, 8).map((img) => (
                  <div
                    key={img.url}
                    className="relative aspect-square overflow-hidden rounded-lg border border-white/10"
                  >
                    <Image
                      src={img.url}
                      alt={img.altText || product.title}
                      fill
                      sizes="12vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="font-display text-3xl leading-tight sm:text-5xl">{product.title}</h1>
            <p className="mt-4 text-xl font-semibold">
              {product.availableForSale ? formatPriceRange(product) : "Currently unavailable"}
            </p>

            <div className="mt-6">
              <AddToCart
                handle={product.handle}
                showPrices={
                  product.priceRange.minVariantPrice.amount !==
                  product.priceRange.maxVariantPrice.amount
                }
                variants={product.variants.map((v) => ({
                  id: v.id,
                  title: v.title,
                  availableForSale: v.availableForSale,
                  priceLabel: formatMoney(v.price),
                }))}
              />
            </div>

            {product.description && (
              <p className="mt-6 whitespace-pre-line text-sm text-muted sm:text-base">
                {product.description}
              </p>
            )}

            <div className="mt-8">
              <ShopNotices />
            </div>

            <p className="mt-6 text-sm text-muted">
              Planning your night?{" "}
              <Link href="/events" className="link-underline text-foreground hover:text-accent">
                Browse Halloween NYC 2026 events
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
