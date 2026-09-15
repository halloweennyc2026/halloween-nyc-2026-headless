import Image from "next/image";
import type { EventRecord } from "@/lib/site-data";

export function VenueMedia({ event }: { event: EventRecord }) {
  const photos = event.venuePhotos ?? [];
  if (photos.length === 0 && !event.venueVideoYouTubeId) return null;

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-muted">
        Inside {event.venue}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="gallery-tint aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className="h-full w-full object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        ))}
        {event.venueVideoYouTubeId && (
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 sm:col-span-2">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${event.venueVideoYouTubeId}`}
              title={`Video tour of ${event.venue}`}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
