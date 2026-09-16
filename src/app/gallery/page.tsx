import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site-data";
import { galleryPhotos } from "@/lib/gallery-data";
import { JsonLd } from "@/components/JsonLd";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Halloween NYC Photo Gallery | Past Party Highlights",
  description:
    "See what Halloween NYC nightlife looks like: real photos from a past Halloween NYC event — costumes, DJs and the after-dark energy this year's lineup builds on.",
  openGraph: {
    title: "Halloween NYC Photo Gallery",
    description:
      "Real photos from a past Halloween NYC nightlife event — costumes, DJs and after-dark energy.",
    url: "/gallery",
    images: [{ url: galleryPhotos[0].src, width: 1667, height: 2500, alt: galleryPhotos[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC Photo Gallery",
    description:
      "Real photos from a past Halloween NYC nightlife event — costumes, DJs and after-dark energy.",
    images: [galleryPhotos[0].src],
  },
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/gallery#webpage`,
              url: `${site.url}/gallery`,
              name: "Halloween NYC Photo Gallery | Past Party Highlights",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "Gallery", item: `${site.url}/gallery` },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Halloween NYC Photo Gallery</h1>
        <p className="mt-4 text-sm text-muted sm:text-base">
          A look at what a Halloween NYC night actually feels like — real photography from
          a past Halloween NYC nightlife event, not stock photos. Costumes, DJs and the
          after-dark crowd energy this year&apos;s lineup is built on.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl">
        <GalleryGrid photos={galleryPhotos} />
      </div>

      <div className="mx-auto mt-14 max-w-3xl text-center">
        <Link
          href="/events"
          className="link-underline text-sm font-bold uppercase tracking-wide text-primary hover:text-accent"
        >
          See the 2026 Lineup →
        </Link>
      </div>
    </section>
  );
}
