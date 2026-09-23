import Link from "next/link";
import Image from "next/image";
import { formatPriceRange, type ShopProduct } from "@/lib/shopify/storefront";

export function ProductCard({ product }: { product: ShopProduct }) {
  const image = product.featuredImage;
  return (
    <Link
      href={`/shop/${product.handle}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 transition-[border-color,transform] duration-200 hover:border-white/40 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-wide text-muted">
            Photo coming soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug">{product.title}</h3>
        <p className="text-sm text-muted">
          {product.availableForSale ? formatPriceRange(product) : "Currently unavailable"}
        </p>
      </div>
    </Link>
  );
}
