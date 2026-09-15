"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery-data";

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, photos.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="gallery-tint group aspect-[3/4] overflow-hidden rounded-xl border border-white/10"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={667}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photos[activeIndex].alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 text-3xl text-white/80 hover:text-white"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
            }}
            className="absolute left-3 text-3xl text-white/70 hover:text-white sm:left-6"
          >
            ‹
          </button>
          <Image
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            width={1000}
            height={1333}
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            className="absolute right-3 text-3xl text-white/70 hover:text-white sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
