import type { MetadataRoute } from "next";
import { site, events } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";

const STATIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/events", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/venues", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/halloween-passport-nyc-2026", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/about-halloween-nyc-2026", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/refund-policy", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const eventEntries: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${site.url}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...eventEntries, ...blogEntries];
}
