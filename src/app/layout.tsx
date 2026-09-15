import type { Metadata } from "next";
import "./globals.css";
import { cramps, barlow, mono } from "@/lib/fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { site, social } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Halloween NYC 2026 | Parties, Events & Tickets in New York",
    template: "%s | Halloween NYC 2026",
  },
  description:
    "Explore Halloween NYC 2026: 21+ rooftop parties, underground events, masquerades, boat parties and nightlife across New York City.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cramps.variable} ${barlow.variable} ${mono.variable} font-sans antialiased`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${site.url}/#organization`,
            name: site.name,
            legalName: site.legalName,
            alternateName: ["Halloween NYC", "Halloween NYC 2026"],
            url: `${site.url}/`,
            email: site.email,
            description: site.description,
            // Facebook intentionally omitted until Meta Business Portfolio
            // ownership is verified — see src/lib/site-data.ts.
            sameAs: [social.instagram],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            name: site.name,
            url: `${site.url}/`,
          }}
        />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
