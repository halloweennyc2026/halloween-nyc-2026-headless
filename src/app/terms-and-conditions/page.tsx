import type { Metadata } from "next";
import { site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms and Conditions | Halloween NYC 2026",
  description:
    "Read the Halloween NYC 2026 terms for website use, tickets, 21+ entry, event policies, conduct, external ticketing and support.",
  openGraph: {
    type: "website",
    title: "Halloween NYC 2026 Terms and Conditions",
    description:
      "Read the terms governing website use, tickets, event entry, conduct and external ticketing.",
    url: "/terms-and-conditions",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 Terms and Conditions",
    description:
      "Read the terms governing website use, tickets, event entry, conduct and external ticketing.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/terms-and-conditions" },
};

// Drafted content, grounded only in facts already verified elsewhere on this
// site (21+ policy, legal entity name, real ticketing platforms, and the
// absence of any analytics/tracking currently wired into this codebase).
// This has NOT been reviewed by a licensed attorney — see the on-page notice
// below, which is intentionally visible rather than a code comment only.
const SECTIONS = [
  {
    title: "Terms and Conditions — the basics",
    clauses: [
      {
        heading: "Acceptance of these terms",
        body: "By accessing this website, purchasing a ticket to a Halloween NYC 2026 event, or otherwise using our services, you agree to be bound by these Terms and Conditions. If you do not agree, do not use this website or purchase tickets to our events.",
      },
      {
        heading: "What this website is",
        body: "Halloween NYC 2026 is a curated guide to independently owned and operated Halloween nightlife events across New York City, operated by Nine & Up Group LLC. This website provides event information and links to official third-party ticketing platforms; it does not itself sell, process, or fulfill ticket purchases.",
      },
      {
        heading: "Eligibility",
        body: "Use of this website is intended for individuals 21 years of age or older. All events listed are 21+ unless an event page states otherwise. See the Age Policy below for entry requirements.",
      },
      {
        heading: "Third-party ticketing platforms",
        body: "All ticket purchases are made through independent, authorized ticketing platforms (such as Eventbrite or Posh), not directly through this website. Your purchase is subject to that platform's own terms of service, privacy policy, and payment terms, which you should review before buying. Halloween NYC 2026 and Nine & Up Group LLC are not the seller of record and are not responsible for the ticketing platform's processing, security, or fulfillment of your order.",
      },
      {
        heading: "Event details and changes",
        body: "Event details shown on this website — including date, time, venue and pricing — are provided to the best of our knowledge and are subject to change by the venue, performer, or organizer at any time. Where we are aware of a discrepancy between sources, we note it directly on the affected event page rather than guessing. Check the official ticket listing for the most current details before attending.",
      },
      {
        heading: "Venues are independently operated",
        body: "Each venue featured on this website is independently owned and operated. Halloween NYC 2026 curates and promotes events at these locations but does not control, and is not responsible for, the venue's own policies, staff, security procedures, or premises.",
      },
      {
        heading: "Intellectual property",
        body: "The content on this website — including text, graphics, logos and design — is owned by or licensed to Nine & Up Group LLC and may not be copied, reproduced, or distributed without prior written permission, except as necessary to view the website in a standard web browser.",
      },
      {
        heading: "No warranties; limitation of liability",
        body: "This website and its content are provided \"as is\" without warranties of any kind, express or implied. To the fullest extent permitted by law, Nine & Up Group LLC is not liable for any indirect, incidental, or consequential damages arising from your use of this website, attendance at an event, or reliance on information provided here. Nothing in this section limits any liability that cannot be limited under applicable law.",
      },
      {
        heading: "Indemnification",
        body: "You agree to indemnify and hold harmless Nine & Up Group LLC, its officers, and affiliates from any claims, losses, or damages arising from your violation of these terms or your misuse of this website.",
      },
      {
        heading: "Governing law",
        body: "These terms are governed by the laws of the State of New York, without regard to its conflict-of-law principles. Any dispute arising from these terms or your use of this website will be subject to the exclusive jurisdiction of the state and federal courts located in New York County, New York.",
      },
      {
        heading: "Changes to these terms",
        body: "We may update these Terms and Conditions from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision. Continued use of this website after a change constitutes acceptance of the revised terms.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms can be sent to info@halloweennyc2026.com.",
      },
    ],
  },
  {
    title: "Age Policy",
    clauses: [
      {
        heading: "21+ entry",
        body: "All Halloween NYC 2026 events are 21 years of age and older only, with no exceptions, regardless of ticket type, Passport status, or accompaniment by a parent or guardian.",
      },
      {
        heading: "Valid ID required",
        body: "Every guest must present a valid, government-issued photo ID (such as a driver's license, state ID, or passport) matching the name on file at the door. Venue security has sole discretion to determine whether an ID is acceptable.",
      },
      {
        heading: "No admission for minors",
        body: "Guests who cannot provide valid proof of age will be denied entry. This applies even if a ticket was already purchased.",
      },
      {
        heading: "Refunds for age-related denial",
        body: "Entry denied due to a failure to provide valid ID or meet the age requirement is not grounds for a refund from Halloween NYC 2026, Nine & Up Group LLC, or the venue. See our Refund Policy for how ticket remedies are generally handled.",
      },
    ],
  },
  {
    title: "Privacy Policy",
    clauses: [
      {
        heading: "Information we collect directly",
        body: "This website does not require you to create an account or submit payment information directly to Halloween NYC 2026. Basic technical information (such as IP address, browser type, and pages visited) may be collected automatically through standard web server and hosting logs, consistent with any website.",
      },
      {
        heading: "Information handled by ticketing platforms",
        body: "When you purchase a ticket, your name, email, and payment details are collected and processed directly by the ticketing platform you use (such as Eventbrite or Posh), under that platform's own privacy policy — not by this website. Review the ticketing platform's privacy policy before completing a purchase.",
      },
      {
        heading: "Cookies and analytics",
        body: "As of this policy's last update, this website does not use third-party advertising or analytics tracking cookies. If that changes, this policy will be updated to describe what is used and how to opt out.",
      },
      {
        heading: "How we use information",
        body: "Halloween NYC 2026 uses information from support requests (such as messages sent to info@halloweennyc2026.com) only to respond to your inquiry, and does not use it for unrelated marketing without your consent.",
      },
      {
        heading: "Sharing of information",
        body: "We do not sell personal information. Information may be shared with service providers (such as hosting or email providers) solely to operate this website, or as required by law.",
      },
      {
        heading: "Data retention and security",
        body: "We retain information only as long as reasonably necessary for the purposes described in this policy and take reasonable measures to protect it, though no method of transmission or storage is completely secure.",
      },
      {
        heading: "Your choices",
        body: "You can decline to provide information directly to us (for example, by not emailing support); this may limit our ability to help with a request. For information held by a ticketing platform, contact that platform directly to exercise privacy rights available under its own policy and applicable law.",
      },
      {
        heading: "Children's privacy",
        body: "This website and our events are intended for adults 21 and older. We do not knowingly collect personal information from anyone under 18.",
      },
      {
        heading: "Changes to this policy",
        body: "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision.",
      },
      {
        heading: "Contact",
        body: "Privacy questions can be sent to info@halloweennyc2026.com.",
      },
    ],
  },
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
          Last updated: September 16, 2026
        </p>

        <div className="mt-6 rounded-lg border border-hot-orange/30 bg-accent/10 p-4 text-xs text-accent">
          <strong>Draft pending legal review.</strong> This page is a drafted starting
          point — standard terms for a 21+ nightlife ticketing guide — and has not yet
          been reviewed by a licensed attorney. Before this is treated as final, counsel
          should confirm it, including whether to add dispute-resolution provisions
          (e.g. arbitration or a class-action waiver), insurance-related disclosures, or
          state-specific consumer-protection language beyond what is drafted here.
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-surface/30 p-5 text-sm text-muted">
          Halloween NYC 2026 is operated by Nine &amp; Up Group LLC. By using this
          website or purchasing tickets to Halloween NYC 2026 events, you agree to the
          terms below.
        </div>

        <div className="mt-10 space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-3xl text-primary">{section.title}</h2>
              <div className="mt-4 space-y-5">
                {section.clauses.map((clause) => (
                  <div key={clause.heading}>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
                      {clause.heading}
                    </h3>
                    <p className="mt-1 text-sm text-muted sm:text-base">{clause.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
