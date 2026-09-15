import Link from "next/link";

export function NightMotion() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 px-5 py-24 text-center">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#1a0402_50%,#000_100%)]" />
      <video
        className="motion-video absolute inset-0 h-full w-full object-cover"
        src="/video/night-motion.mp4"
        poster="/gallery/luna-01.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
          After Dark in New York City
        </p>
        <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
          Step Into the Night
        </h2>
        <p className="mt-4 text-sm text-muted sm:text-base">
          Six venues. One weekend. A city that takes Halloween further than anywhere
          else — this is the mood the 2026 lineup is built around.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/gallery"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            See the Gallery
          </Link>
          <Link
            href="/events"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
}
