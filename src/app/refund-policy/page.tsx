import type { Metadata } from "next";
import { site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Refund Policy | Halloween NYC 2026 Tickets",
  description:
    "Review Halloween NYC 2026 ticket refunds, transfers, event changes, ticket-provider terms and customer-support guidance before purchasing.",
  openGraph: {
    type: "website",
    title: "Halloween NYC 2026 Refund Policy",
    description:
      "Review ticket refunds, transfers, event changes and ticket-provider terms before purchasing.",
    url: "/refund-policy",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 Refund Policy",
    description:
      "Review ticket refunds, transfers, event changes and ticket-provider terms before purchasing.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/refund-policy" },
};

// Sections 1-6 are transcribed verbatim from the live, published policy.
// Section 6 is cut where the source text was captured — confirm the
// remaining clause with the policy owner before treating this as complete.
const SECTIONS = [
  {
    title: "1. Official Ticket Sources",
    body: "Tickets must be purchased through an official link published by Halloween NYC 2026, Nine & Up Group LLC, the applicable venue, or an authorized ticketing platform. Tickets acquired from unauthorized third parties may be invalid, counterfeit, cancelled, duplicated, or denied entry. We are not responsible for tickets purchased through unofficial resale channels or fraudulent websites.",
  },
  {
    title: "2. Ticket Delivery and Order Support",
    body: "Ticket delivery, payment processing, order confirmation, account access, and ticket retrieval are generally handled by the ticketing platform used for your purchase. For ticket-delivery, billing, payment, account-access, or platform-specific questions, first contact the ticketing platform shown on your purchase confirmation. If you still need help, submit a request through info@halloweennyc2026.com, including your full name, event name and date, the email used at purchase, ticket platform, order or confirmation number, and a clear description of the issue.",
  },
  {
    title: "3. All Sales and Finality",
    body: "Unless otherwise required by applicable law, stated in the official ticket listing, or approved in writing by the applicable ticketing platform and organizer, tickets are final sale. Do not interpret this policy as removing any refund, exchange, or other consumer right that cannot be waived under applicable law.",
  },
  {
    title: "4. Event Cancellation",
    body: "If an event is cancelled and is not rescheduled, eligible ticket purchasers will be notified through the official ticket platform or official event communications where reasonably possible. Any refund, credit, exchange, or other remedy will be handled according to applicable law, the official ticket platform's terms, the venue agreement, and the circumstances of the cancellation.",
  },
  {
    title: "5. Postponement, Rescheduling or Location Change",
    body: "If an event is postponed, rescheduled, relocated, or materially changed, ticket holders will be notified through the official ticket platform and/or official Halloween NYC 2026 communications where reasonably possible. Available remedies may depend on the nature of the change, applicable law, the ticket platform's policies, venue requirements, and final event terms. Contact the official ticket source for your order if you have a question about an affected event.",
  },
  {
    title: "6. Ticket Transfers and Resale",
    body: "Ticket transfer and resale rules are determined by the platform through which your ticket was purchased and the final event rules. Do not transfer, resell, duplicate, alter, reproduce, or distribute tickets in violation of ticket-platform terms, applicable law, or event rules.",
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/refund-policy#webpage`,
              url: `${site.url}/refund-policy`,
              name: "Refund Policy | Halloween NYC 2026 Tickets",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Refund Policy",
                  item: `${site.url}/refund-policy`,
                },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl">Refund Policy</h1>
        <p className="mt-2 text-xs uppercase tracking-wide text-muted">
          Last updated: August 27, 2026
        </p>
        <div className="mt-6 rounded-xl border border-white/10 bg-surface/30 p-5 text-sm text-muted">
          Halloween NYC 2026 is operated by Nine &amp; Up Group LLC. This policy applies
          to tickets and related customer-support questions for Halloween NYC 2026
          events, subject to the terms of the authorized ticketing platform through
          which a ticket was purchased.
        </div>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              <p className="mt-2 text-sm text-muted sm:text-base">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
