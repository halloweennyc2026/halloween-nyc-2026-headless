import { SHOP_LINKS_LIVE } from "@/lib/shopify/config";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/venues", label: "Venues" },
  { href: "/halloween-passport-nyc-2026", label: "Halloween Passport" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-halloween-nyc-2026", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  ...(SHOP_LINKS_LIVE ? [{ href: "/costumes", label: "Costumes" }] : []),
];
