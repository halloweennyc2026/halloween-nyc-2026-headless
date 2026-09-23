import type { Metadata } from "next";
import { faqEntries, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Halloween NYC 2026 FAQ | Tickets, Entry, Costumes & Events",
  description:
    "Get answers about Halloween NYC 2026 tickets, 21+ entry, costumes, event venues, VIP tables, the Halloween Passport, refunds and support.",
  openGraph: {
    type: "website",
    title: "Halloween NYC 2026 FAQ | Tickets, Entry & Event Info",
    description:
      "Find answers about tickets, entry, costumes, venues, the Halloween Passport, refunds and support.",
    url: "/faq",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 FAQ | Tickets, Entry & Event Info",
    description:
      "Find answers about tickets, entry, costumes, venues, the Halloween Passport, refunds and support.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/faq#webpage`,
              url: `${site.url}/faq`,
              name: "Halloween NYC 2026 FAQ | Tickets, Entry, Costumes & Events",
              isPartOf: { "@id": `${site.url}/#website` },
              about: { "@id": `${site.url}/#organization` },
              inLanguage: "en-US",
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${site.url}/faq#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                { "@type": "ListItem", position: 2, name: "FAQ", item: `${site.url}/faq` },
              ],
            },
          ],
        }}
      />
      {/* This FAQPage schema matches the visible Q&A below word-for-word, by design. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />

      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-center text-4xl sm:text-5xl">
          Halloween NYC 2026 FAQ
        </h1>
        <p className="mt-4 text-center text-sm text-muted sm:text-base">
          Find answers about Halloween NYC 2026 tickets, entry, costumes, venues, the
          Halloween Passport, refunds and support.
        </p>
        <h2 className="font-display mt-12 text-2xl">Tickets, Entry &amp; Event Information</h2>
        <Reveal>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
            {faqEntries.map((f) => (
              <details key={f.question} className="group p-5">
                <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">
                  {f.question}
                </summary>
                <p className="mt-2 text-sm text-muted">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
