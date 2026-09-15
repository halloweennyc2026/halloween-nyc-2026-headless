"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function BloodStainImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const el = wrapRef.current;
    if (!el) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // -1 (below viewport) -> 0 (centered) -> 1 (above viewport)
        const progress = Math.min(Math.max((vh / 2 - (rect.top + rect.height / 2)) / vh, -1), 1);
        el.style.setProperty("--p", String(progress));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="blood-stain-wrap relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
    >
      <div className="blood-stain-image absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          className="object-cover grayscale contrast-125"
        />
      </div>

      {/* Minimal red stain accent — one irregular soaked-in blob with a
          couple of trailing droplets, blended rather than a flat sticker. */}
      <svg
        className="blood-stain-mark pointer-events-none absolute bottom-0 right-0 h-20 w-20 sm:h-24 sm:w-24"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          fill="var(--pure-red)"
          d="M75 55c9 6 14 16 10 26-4 11-17 16-27 12-9-4-14-13-11-22 2-6 1-9-3-14-5-6-5-13 0-18 6-6 15-6 20 0 3 4 6 10 11 16z"
        />
        <circle cx="46" cy="34" r="2.6" fill="var(--pure-red)" />
        <circle cx="41" cy="27" r="1.4" fill="var(--pure-red)" />
      </svg>
    </div>
  );
}
