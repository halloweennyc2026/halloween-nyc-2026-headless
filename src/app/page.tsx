import type { Metadata } from "next";
import Link from "next/link";
import { events, faqEntries, site } from "@/lib/site-data";
import { EventsByDate } from "@/components/EventsByDate";
import { HeroVideo } from "@/components/HeroVideo";
import { NightMotion } from "@/components/NightMotion";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Halloween NYC 2026 | Parties, Events & Tickets in New York",
  description:
    "Explore Halloween NYC 2026: 21+ rooftop parties, underground events, masquerades, boat parties and nightlife across New York City.",
  openGraph: {
    title: "Halloween NYC 2026 | Parties, Events & Tickets in New York",
    description:
      "Explore 21+ Halloween parties, rooftop events, masquerades, boat parties and nightlife across New York City.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halloween NYC 2026 | Parties, Events & Tickets in New York",
    description:
      "Explore 21+ Halloween parties, rooftop events, masquerades, boat parties and nightlife across New York City.",
  },
  alternates: { canonical: "/" },
};

const previewFaqs = faqEntries.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero — always fully visible on load, no reveal/motion gating */}
      <section className="relative overflow-hidden border-b border-white/10 bg-background px-5 py-24 text-center">
        <HeroVideo />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {site.dateRange} · New York City · 21+
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] sm:text-7xl">
            THE ULTIMATE
            <br />
            NYC HALLOWEEN GUIDE
          </h1>
          <p className="mt-6 text-base text-muted sm:text-lg">
            Discover Halloween NYC 2026: rooftop parties, underground events, a Hudson
            River Halloween cruise, masquerade nights, and the ultimate New York
            Halloween weekend guide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/events"
              className="cta-glow-once rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
            >
              Explore Events +
            </Link>
            <Link
              href="/halloween-passport-nyc-2026"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Halloween Passport +
            </Link>
          </div>
        </div>
      </section>

      {/* Lineup intro */}
      <Reveal>
        <section className="border-b border-white/10 px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted">
              {site.name}
            </p>
            <h2 className="font-display mt-2 text-4xl leading-tight text-primary sm:text-5xl">
              Five Venues. Four Nights.
            </h2>
            <p className="mt-4 text-sm text-muted sm:text-base">
              From rooftops and hidden rooms to masks, black water, and Manhattan after
              dark—choose your way into Halloween weekend. Tap a date to see what&apos;s on
              that night.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Event grid, filterable by date */}
      <section id="events" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-center text-3xl sm:text-4xl">
              Explore the Halloween NYC 2026 Lineup
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="mt-8">
              <EventsByDate events={events} />
            </div>
          </Reveal>
        </div>
      </section>

      <NightMotion />

      {/* Passport */}
      <Reveal>
        <section className="border-y border-white/10 bg-surface/30 px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Halloween Passport NYC 2026</h2>
            <p className="mt-4 text-sm text-muted sm:text-base">
              One pass to move through a weekend of eligible Halloween NYC 2026
              experiences — official access, subject to valid 21+ ID and final Passport
              Terms.
            </p>
            <Link
              href="/halloween-passport-nyc-2026"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
            >
              Explore Passport Access +
            </Link>
          </div>
        </section>
      </Reveal>

      {/* FAQ teaser */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-center text-3xl sm:text-4xl">
              Tickets, Entry &amp; Event Information
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
              {previewFaqs.map((f) => (
                <details key={f.question} className="group p-5">
                  <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">
                    {f.question}
                  </summary>
                  <p className="mt-2 text-sm text-muted">{f.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="link-underline text-sm font-bold uppercase tracking-wide text-primary hover:text-accent"
            >
              Read the full FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Reveal>
        <section className="border-t border-white/10 px-5 py-20 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Find Your Halloween Night</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/events"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
            >
              Explore Events
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground hover:border-accent hover:text-accent"
            >
              Read the FAQ
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
