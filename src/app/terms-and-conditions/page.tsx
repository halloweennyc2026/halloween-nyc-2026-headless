import type { Metadata } from "next";
import { site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms and Conditions | Halloween NYC 2026",
  description:
    "Read the Halloween NYC 2026 terms for website use, tickets, 21+ entry, event policies, conduct, external ticketing and support.",
  openGraph: {
    title: "Halloween NYC 2026 Terms and Conditions",
    description:
      "Read the terms governing website use, tickets, event entry, conduct and external ticketing.",
    url: "/terms-and-conditions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 Terms and Conditions",
    description:
      "Read the terms governing website use, tickets, event entry, conduct and external ticketing.",
  },
  alternates: { canonical: "/terms-and-conditions" },
};

// NOTE: only section headings were confirmed from the live source at build
// time — the full clause text under each section still needs to be supplied
// (by counsel or the current live page) before this is a complete policy.
const SECTIONS = [
  "Terms and Conditions — the basics",
  "Age Policy",
  "Privacy Policy",
];

export default function TermsPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/terms-and-conditions#webpage`,
              url: `${site.url}/terms-and-conditions`,
              name: "Terms and Conditions | Halloween NYC 2026",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Terms and Conditions",
                  item: `${site.url}/terms-and-conditions`,
                },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Terms and Conditions</h1>
        <p className="mt-2 text-xs uppercase tracking-wide text-muted">
          Last updated: August 28, 2026
        </p>
        <div className="mt-6 rounded-xl border border-white/10 bg-surface/30 p-5 text-sm text-muted">
          Halloween NYC 2026 is operated by Nine &amp; Up Group LLC. By using this
          website or purchasing tickets to Halloween NYC 2026 events, you agree to the
          terms below.
        </div>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((title) => (
            <div key={title}>
              <h2 className="font-display text-2xl text-primary">{title}</h2>
              <p className="mt-2 text-sm text-muted">
                Full policy text for this section is being finalized and will be
                published here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
