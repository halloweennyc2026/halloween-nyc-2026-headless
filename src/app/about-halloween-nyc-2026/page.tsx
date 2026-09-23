import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { BloodStainImage } from "@/components/BloodStainImage";

export const metadata: Metadata = {
  title: "About Halloween NYC 2026 | NYC Halloween Events & Nightlife",
  description:
    "Learn about Halloween NYC 2026, your guide to 21+ Halloween parties, rooftop events, masquerades and nightlife experiences across New York City.",
  openGraph: {
    type: "website",
    title: "About Halloween NYC 2026",
    description:
      "Meet the vision behind a curated guide to Halloween parties, costume nights and nightlife experiences across New York City.",
    url: "/about-halloween-nyc-2026",
    images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Halloween NYC 2026",
    description:
      "Meet the vision behind a curated guide to Halloween parties, costume nights and nightlife experiences across New York City.",
    images: [site.defaultOgImage],
  },
  alternates: { canonical: "/about-halloween-nyc-2026" },
};

const SECTIONS = [
  {
    h2: "One City. Endless Nights.",
    h3: "A Curated Guide to NYC Halloween Nightlife",
    body: "New York City does Halloween at full volume. We spotlight the parties, rooftops, masquerades, underground rooms and waterfront experiences that give Halloween weekend its unmistakable after-dark energy.",
  },
  {
    h2: "Plan Less. Go Bigger.",
    h3: "Clear Event Details Before You Commit",
    body: "Every night out begins with the right information. Explore event highlights, venue context, age requirements and official ticket paths so you can choose the experience that fits your crew, costume and pace.",
  },
  {
    h2: "The Night Is Yours.",
    h3: "From First Costume Idea to Final Call",
    body: "Whether you are arriving solo, bringing friends or planning a full Halloween itinerary, Halloween NYC 2026 is designed to help you discover a night worth dressing up for — and remember long after November arrives.",
  },
];

export default function AboutPage() {
  return (
    <section className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${site.url}/about-halloween-nyc-2026#webpage`,
              url: `${site.url}/about-halloween-nyc-2026`,
              name: "About Halloween NYC 2026",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${site.url}/about-halloween-nyc-2026`,
                },
              ],
            },
          ],
        }}
      />
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-center text-4xl sm:text-5xl">
          About Halloween NYC 2026
        </h1>
        <p className="mt-6 text-sm text-muted sm:text-base">
          Halloween NYC 2026 is your guide to 21+ Halloween parties, costume nights and
          nightlife experiences across New York City. From rooftop celebrations and
          underground dance floors to masquerades and Hudson River events, we bring
          together the season&apos;s most memorable ways to go out after dark.
        </p>
        <p className="mt-4 text-sm text-muted sm:text-base">
          Built for guests planning an unforgettable Halloween weekend, our platform
          makes it easier to explore event details, compare experiences and find
          official ticket links in one place. Whether you are dressing for a late-night
          party, coordinating a group or choosing one standout event, Halloween NYC 2026
          helps you plan the night with confidence.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <BloodStainImage
          src="/gallery/luna-01.jpg"
          alt="Crowd and DJ booth at a Halloween NYC nightlife event"
        />
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-12">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.h2} delayMs={i * 80}>
            <div>
              <h2 className="font-display text-3xl text-primary">{s.h2}</h2>
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-accent">
                {s.h3}
              </h3>
              <p className="mt-3 text-sm text-muted sm:text-base">{s.body}</p>
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
          Ticket Policy
        </Link>
      </div>
    </section>
  );
}
