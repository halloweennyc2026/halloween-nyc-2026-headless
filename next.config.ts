import type { NextConfig } from "next";

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
};

export default nextConfig;
