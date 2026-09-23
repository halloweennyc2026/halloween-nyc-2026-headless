import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { passport, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Halloween Passport NYC 2026 | Multi-Event Halloween Access",
  description:
    "Explore eligible Halloween NYC 2026 experiences with the Halloween Passport, featuring parties, rooftop events and nightlife across New York City.",
  openGraph: {
    title: "Halloween Passport NYC 2026 | Explore Eligible Experiences",
    description:
      "Plan more of Halloween weekend with access to eligible Halloween NYC 2026 experiences. Review current details and terms.",
    url: "/halloween-passport-nyc-2026",
    images: [{ url: passport.ogImage, width: 1254, height: 1254, alt: "Halloween Passport NYC 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween Passport NYC 2026 | Explore Eligible Experiences",
    description:
      "Plan more of Halloween weekend with access to eligible Halloween NYC 2026 experiences. Review current details and terms.",
    images: [passport.ogImage],
  },
  alternates: { canonical: "/halloween-passport-nyc-2026" },
};

const SECTIONS = [
  {
    title: "Curated NYC Experiences",
    body: "Move through a weekend of rooftop parties, underground nightlife, masquerade energy and late-night Halloween moments across New York City.",
  },
  {
    title: "A Weekend Built for Movement",
    body: "The Passport is designed around a multi-night Halloween weekend, not a single stop — plan your night around eligible events.",
  },
  {
    title: "Your Crew, One Plan",
    body: "Coordinate with your group around one access option instead of separate tickets for every stop.",
  },
  {
    title: "Official Event Access",
    body: "Passport access is verified through an official Halloween NYC 2026 credential and the Passport guest roster at eligible events.",
  },
];

export default function PassportPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${site.url}/halloween-passport-nyc-2026#webpage`,
              url: `${site.url}/halloween-passport-nyc-2026`,
              name: "Halloween Passport NYC 2026 | Multi-Event Halloween Access",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Halloween Passport",
                  item: `${site.url}/halloween-passport-nyc-2026`,
                },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:text-left text-center">
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 sm:mx-0">
          <Image
            src={passport.ogImage}
            alt="Halloween Passport NYC 2026"
            fill
            priority
            sizes="(min-width: 640px) 40vw, 80vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">Halloween Passport NYC 2026</h1>
          <p className="mt-4 text-sm text-muted sm:text-base">
            The Halloween Passport is your way to explore eligible Halloween NYC 2026
            experiences across the city — a weekend of rooftop parties, underground
            nightlife and late-night Halloween moments.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <TrackedLink
          href={passport.url}
          eventName="passport_checkout_click"
          params={{ event_id: "halloween_passport_2026", platform: passport.platform, position: "passport_hero" }}
          className="cta-glow-once mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
        >
          Explore Passport Access on Posh ↗
        </TrackedLink>
        <p className="mx-auto mt-4 max-w-xl text-xs text-muted">{passport.checkoutLine}</p>
        <p className="mx-auto mt-2 max-w-xl text-xs text-muted">
          {passport.complianceLine}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-10 text-sm text-muted sm:text-base">
        <div>
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            How the Passport Works
          </h2>
          <p className="mt-3">
            You buy the Passport once, on Posh. Your original Passport ticket is redeemed
            at your first eligible event check-in. After that, access to the remaining
            eligible events is verified through an official Halloween NYC 2026 credential
            and the Passport guest roster, so bring the same valid 21+ photo ID to every
            door.
          </p>
          <p className="mt-3">
            Halloween NYC 2026 runs from {site.dateRange}. The Passport is built for
            guests who want to plan more than one night rather than pick a single party,
            and the final Passport Terms set out exactly which experiences are eligible.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            What &ldquo;Eligible&rdquo; Means
          </h2>
          <p className="mt-3">
            Eligible experiences are the events and times named in the final Passport
            Terms. The Passport doesn&apos;t guarantee entry at any time. Every entry is
            still subject to venue capacity, ID and guest-roster checks, event-specific
            arrival requirements and safety procedures. Some events may ask you to RSVP
            or choose a time in advance to manage capacity, and those requirements will
            be shared through official Passport communications.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Planning a Passport Weekend
          </h2>
          <p className="mt-3">
            The week runs Thursday to Sunday across Manhattan, Brooklyn and the Hudson
            River, so it helps to plan your route before you go. Check each event page for
            its venue, address and confirmed times. Then leave time between stops for
            travel, ID checks and check-in. If you&apos;re going as a group, make sure
            everyone carries their own valid ID and knows how their own access works,
            because entry is verified against the Passport guest roster. Once final Passport Terms are
            published, read them for any timing or RSVP steps before you head out.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Before You Buy
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>All entry is 21+ with valid government-issued photo ID.</li>
            <li>
              Don&apos;t assume a Passport can be transferred. Transfer rules will be in
              the final Passport Terms.
            </li>
            <li>
              Keep your credential safe. Lost-credential steps will be in the final
              Passport Terms, and a replacement isn&apos;t guaranteed.
            </li>
            <li>
              Refunds follow the ticket platform&apos;s terms and our{" "}
              <Link href="/refund-policy" className="link-underline hover:text-accent">
                Refund Policy
              </Link>
              .
            </li>
          </ul>
          <p className="mt-3">
            Only planning one night? Every event also has its own page and ticket link in
            the{" "}
            <Link href="/events" className="link-underline hover:text-accent">
              events lineup
            </Link>
            , and the{" "}
            <Link href="/faq" className="link-underline hover:text-accent">
              FAQ
            </Link>{" "}
            answers common Passport questions.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.title} delayMs={i * 80}>
            <div className="rounded-2xl border border-white/10 p-6">
              <h2 className="font-display text-xl">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-6 text-sm text-muted">
        <Link href="/events" className="link-underline hover:text-accent">
          Explore Events
        </Link>
        <Link href="/faq" className="link-underline hover:text-accent">
          Read FAQ
        </Link>
        <Link href="/refund-policy" className="link-underline hover:text-accent">
          Review Refund Policy
        </Link>
        <Link href="/terms-and-conditions" className="link-underline hover:text-accent">
          Read Terms
        </Link>
      </div>
    </section>
  );
}
