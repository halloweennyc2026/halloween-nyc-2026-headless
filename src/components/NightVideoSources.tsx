// Sources for the "night motion" background video, shared by the hero and the
// Step Into the Night section. Phones get a portrait crop (406x720, framed on
// the red-lit wall and corridor) instead of a centre-cropped 16:9 frame.
// Both files are muted-only (no audio track) and web-optimized (faststart).
// Browsers that ignore `media` on <source> fall back to the first match, so
// the full-size file comes first.
export function NightVideoSources() {
  return (
    <>
      <source media="(min-width: 768px)" src="/video/night-motion-web.mp4" type="video/mp4" />
      <source src="/video/night-motion-mobile.mp4" type="video/mp4" />
    </>
  );
}
