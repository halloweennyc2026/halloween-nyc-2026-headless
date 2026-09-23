import type { NextConfig } from "next";

// Permanent redirects from the live Wix site's URLs to this rebuild's routes,
// so existing rankings and backlinks carry over at the domain cutover.
// Old paths were crawled from the live Wix site and its sitemaps on 2026-09-23.
// `permanent: true` sends a 308, which search engines treat like a 301.
const wixRedirects = [
  // Top-level pages on Wix default slugs
  { source: "/home-1", destination: "/about-halloween-nyc-2026" },
  { source: "/blank-1", destination: "/halloween-passport-nyc-2026" },
  { source: "/blank-2", destination: "/venues" },
  { source: "/blank-4-2", destination: "/events" },
  // Wix event-detail pages (live, indexed and in the Wix sitemap)
  { source: "/blank-4", destination: "/events/dead-disco-public-hotel" },
  { source: "/blank-4-1", destination: "/events/the-descent-submercer-soho" },
  { source: "/blank-4-1-1", destination: "/events/the-masquerade-loulou" },
  { source: "/blank-4-1-1-1", destination: "/events/heaven-and-hell-eden" },
  { source: "/blank-4-1-1-1-1", destination: "/events/haunting-on-the-hudson" },
  {
    source: "/blank-4-1-1-1-1-1",
    destination: "/events/luna-day-of-the-dead-1-hotel-brooklyn-bridge",
  },
  // Existing Wix redirect (old FAQ slug), kept so it doesn't break at cutover
  { source: "/blank-10", destination: "/faq" },
  // Wix blog feed and posts (post slugs are identical in this rebuild)
  { source: "/blog-feed", destination: "/blog" },
  { source: "/blog-feed.xml", destination: "/blog" },
  { source: "/post/:slug", destination: "/blog/:slug" },
];

const nextConfig: NextConfig = {
  images: {
    // Product photos from the Halloween NYC Shopify store's own CDN folder only.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/1/0689/4459/2994/**",
      },
    ],
  },
  async redirects() {
    return wixRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
