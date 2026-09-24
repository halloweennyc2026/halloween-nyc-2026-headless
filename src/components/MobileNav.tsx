"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { SHOP_LINKS_LIVE } from "@/lib/shopify/config";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15"
      >
        <span
          className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-4 bg-foreground transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[57px] z-30 max-h-[calc(100vh-57px)] overflow-y-auto border-b border-white/10 bg-black/95 backdrop-blur"
        >
          <nav className="flex flex-col divide-y divide-white/10 px-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-sm font-bold uppercase tracking-wide text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 pb-6 pt-2">
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            >
              Explore Events
            </Link>
            {SHOP_LINKS_LIVE && (
              <Link
                href="/costumes"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-foreground"
              >
                Shop Costumes
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
