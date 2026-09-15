"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        // 0 at top of viewport, 1 once the hero has fully scrolled past.
        const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        el.style.setProperty("--scroll", String(progress));
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
      className="hero-video-wrap pointer-events-none absolute inset-0 overflow-hidden"
    >
      <video
        className="motion-video hero-video h-full w-full object-cover"
        src="/video/night-motion.mp4"
        poster="/gallery/luna-01.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
