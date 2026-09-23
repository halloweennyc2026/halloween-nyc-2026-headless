export interface GalleryPhoto {
  src: string;
  alt: string;
}

// Real photography from a previous Halloween NYC nightlife event (LUNA),
// supplied directly by the founder as brand assets. Not staged or generated.
export const galleryPhotos: GalleryPhoto[] = [
  // luna-02, luna-03 and luna-07 removed 2026-09-23: they show VAULT / Classic Car Club
  // signage from last year's venue (founder rule: never use frames with that signage).
  { src: "/gallery/luna-01.jpg", alt: "Crowd and DJ booth at a Halloween NYC nightlife event" },
  { src: "/gallery/luna-04.jpg", alt: "Guests dancing in colorful costumes at a Halloween NYC party" },
  { src: "/gallery/luna-05.jpg", alt: "Friends posing together at a Halloween NYC nightlife event" },
  { src: "/gallery/luna-06.jpg", alt: "Guests in costume smiling at a Halloween NYC party" },
];
