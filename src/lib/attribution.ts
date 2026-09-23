// Ad attribution passthrough (founder-approved 2026-09-23).
// A visitor who lands from an ad arrives with fbclid and/or utm_* on the URL,
// but those drop off as soon as they click to another page. We keep them for
// the browsing session and append them to outbound ticket links, so the
// ticket platform's own pixel can match the purchase back to the ad.

const KEYS = ["fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const STORAGE_KEY = "hnyc_attribution";

// Save any attribution params on the current URL. A new ad click replaces the
// previous set rather than mixing two campaigns together.
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of KEYS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    // Storage blocked (private mode, etc.): links just go out without params.
  }
}

// Return href with the saved params added. Params already on the link win.
export function withAttribution(href: string): string {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as Record<string, string>;
    const url = new URL(href);
    for (const [key, value] of Object.entries(saved)) {
      if (KEYS.includes(key) && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return href;
  }
}
