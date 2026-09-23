import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Halloween NYC 2026 Blog | Parties, Costumes & Nightlife Guides",
  description:
    "Plan Halloween weekend in New York City with guides to 21+ parties, costumes, venues, nightlife, boat events and Halloween planning.",
  openGraph: {
    type: "website",
    title: "Halloween NYC 2026 Blog | Plan Your Halloween Weekend",
    description:
      "Explore NYC Halloween guides for parties, costumes, venues, nightlife and Halloween weekend planning.",
    url: "/blog",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 Blog | Plan Your Halloween Weekend",
    description:
      "Explore NYC Halloween guides for parties, costumes, venues, nightlife and Halloween weekend planning.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${site.url}/blog#webpage`,
          url: `${site.url}/blog`,
          name: "Halloween NYC 2026 Blog",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Halloween NYC 2026 Blog</h1>
        <p className="mt-4 text-sm text-muted sm:text-base">
          Explore Halloween planning guides for New York City, including costume ideas,
          nightlife neighborhoods and practical details for Halloween weekend.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/60"
          >
            <h2 className="font-display text-2xl">{post.title.split(" | ")[0]}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-bold uppercase tracking-wide text-primary">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
