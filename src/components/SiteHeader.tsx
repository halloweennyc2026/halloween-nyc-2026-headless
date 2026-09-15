import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/venues", label: "Venues" },
  { href: "/halloween-passport-nyc-2026", label: "Halloween Passport" },
  { href: "/about-halloween-nyc-2026", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/brand/logo.png"
            alt="Halloween NYC 2026 logo"
            width={140}
            height={49}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-muted">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/events"
          className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
        >
          Explore Events
        </Link>
      </div>
    </header>
  );
}
