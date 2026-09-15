// Central content source. Every fact here is verified against the live
// halloweennyc2026.com site and its connected ticket listings as of Sep 2026.
// Do not add prices, capacity, dress code, or ticket links that are not
// confirmed here — see README.md for the verification rules.

export const site = {
  name: "Halloween NYC 2026",
  legalName: "Nine & Up Group LLC",
  url: "https://www.halloweennyc2026.com",
  email: "support@halloweennyc2026.com",
  description:
    "Halloween NYC 2026 is a curated 21+ Halloween nightlife program operated by Nine & Up Group LLC, featuring rooftop parties, costume experiences, nightlife events, Halloween boat-party programming and official ticket information across New York City.",
  dateRange: "October 29 – November 1, 2026",
} as const;

export const social = {
  instagram: "https://www.instagram.com/halloweennyc2026/",
  // Facebook is tracked but intentionally NOT included in Organization
  // schema `sameAs` yet — verify it's connected under the same Meta
  // Business Portfolio as Instagram before adding it there.
  facebook: "https://www.facebook.com/profile.php?id=61594026775995",
} as const;

export type TicketStatus = "confirmed" | "pending";

export interface EventRecord {
  slug: string;
  name: string;
  venue: string;
  address?: string;
  neighborhood?: string;
  dateLabel: string; // e.g. "Thursday, October 29, 2026"
  isoDate: string; // e.g. "2026-10-29"
  timeLabel?: string; // only when confirmed
  description: string;
  heroAlt: string;
  heroImage: string;
  ogImage: string;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  ticket: {
    status: TicketStatus;
    platform?: "Eventbrite";
    url?: string;
  };
  notes?: string;
  // Real photography of the actual venue (not the event itself), sourced
  // from the venue's own official site/press materials — see each image's
  // credit comment at the point of use.
  venuePhotos?: { src: string; alt: string }[];
  // A real, official third-party YouTube video of the venue, embedded
  // (never downloaded/rehosted) via the standard YouTube embed player.
  venueVideoYouTubeId?: string;
}

export const events: EventRecord[] = [
  {
    slug: "dead-disco-public-hotel",
    name: "Dead Disco at PUBLIC Hotel",
    venue: "Micro Club / Roof at PUBLIC Hotel",
    address: "215 Chrystie St, New York, NY 10002",
    neighborhood: "Lower East Side, Manhattan",
    dateLabel: "Thursday, October 29, 2026",
    isoDate: "2026-10-29",
    timeLabel: "10:00 PM – Late",
    description:
      "Dead Disco takes over PUBLIC Hotel for an opening night where disco glamour meets the darkness of the afterlife — moving between an intimate indoor micro-club and an open-air rooftop atmosphere.",
    heroAlt: "Dead Disco Halloween rooftop party at PUBLIC Hotel in New York City",
    heroImage: "/events/dead-disco-wide.png",
    ogImage: "/events/dead-disco-square.png",
    seo: {
      title: "Dead Disco at PUBLIC Hotel | Halloween NYC 2026 Tickets",
      description:
        "Dead Disco at PUBLIC Hotel is a Halloween rooftop party in New York City on Thursday, October 29, 2026. Explore event details and official tickets.",
      ogTitle: "Dead Disco at PUBLIC Hotel | October 29, 2026",
      ogDescription:
        "Start Halloween weekend at Dead Disco, a rooftop party at PUBLIC Hotel in New York City on Thursday, October 29.",
    },
    ticket: {
      status: "confirmed",
      platform: "Eventbrite",
      url: "https://www.eventbrite.com/e/1999059927055",
    },
    notes:
      "Address corrected to 215 Chrystie St — verified against PUBLIC Hotel's official site (publichotels.com) and independent listings. The prior \"17 Chrystie St\" did not match any verified source.",
    // Credit: PUBLIC Hotel official site (publichotels.com/newyork/eat-and-drink/microclub).
    venuePhotos: [
      { src: "/venues/public-hotel-microclub.jpg", alt: "Micro Club bar at PUBLIC Hotel, New York City" },
      { src: "/venues/public-hotel-dancefloor.jpg", alt: "Micro Club dance floor at PUBLIC Hotel, New York City" },
    ],
  },
  {
    slug: "the-masquerade-loulou",
    name: "Masquerade Inferno at LouLou",
    venue: "LouLou",
    address: "176 8th Ave, New York, NY 10011",
    neighborhood: "Meatpacking District, Manhattan",
    dateLabel: "Friday, October 30, 2026",
    isoDate: "2026-10-30",
    description:
      "A candlelit, Parisian-inspired hideaway beneath the streets of Manhattan, where ornate masks, costumes and late-night music create an intimate world of mystery and anonymity.",
    heroAlt: "Masquerade Inferno Halloween party at LouLou in New York City",
    heroImage: "/events/masquerade-wide.png",
    ogImage: "/events/masquerade-square.png",
    seo: {
      title: "Masquerade Inferno at LouLou | Halloween NYC 2026 Tickets",
      description:
        "Masquerade Inferno at LouLou is a Halloween costume party in New York City on Friday, October 30, 2026. Explore details and official tickets.",
      ogTitle: "Masquerade Inferno at LouLou | October 30, 2026",
      ogDescription:
        "Enter Masquerade Inferno at LouLou, a Halloween costume party in New York City on Friday, October 30.",
    },
    ticket: {
      status: "confirmed",
      platform: "Eventbrite",
      url: "https://www.eventbrite.com/e/1999060291144",
    },
    notes:
      "Renamed from \"The Masquerade\" to \"Masquerade Inferno\" — confirmed by the official event flyer (Nine & Up Group). Neighborhood corrected to Meatpacking per the same flyer, though independent sources place 176 8th Ave in Chelsea, bordering the Meatpacking District — flagging for founder confirmation rather than silently picking one.",
    // Credit: LouLou official site (loulounyc.com).
    venuePhotos: [
      { src: "/venues/loulou-exterior.jpeg", alt: "Dining room at LouLou, New York City" },
    ],
  },
  {
    slug: "the-descent-submercer-soho",
    name: "The Descent at Submercer SoHo",
    venue: "Submercer",
    address: "147 1/2 Mercer St, New York, NY 10012",
    neighborhood: "SoHo, Manhattan",
    dateLabel: "Friday, October 30, 2026",
    isoDate: "2026-10-30",
    timeLabel: "10:00 PM – Late",
    description:
      "Beneath the streets of SoHo, The Descent transforms Submercer into an intimate Halloween world of deep house, curated lighting, haunting visuals and late-night New York City energy.",
    heroAlt: "The Descent Halloween nightlife event at Submercer in SoHo, New York City",
    heroImage: "/events/descent-wide.png",
    ogImage: "/events/descent-square.png",
    seo: {
      title: "The Descent at Submercer SoHo | Halloween NYC 2026 Tickets",
      description:
        "The Descent at Submercer is a Halloween nightlife event in SoHo on Friday, October 30, 2026. Explore details and official tickets.",
      ogTitle: "The Descent at Submercer SoHo | October 30, 2026",
      ogDescription:
        "Go underground at The Descent, a Halloween nightlife event at Submercer in SoHo on Friday, October 30.",
    },
    ticket: {
      status: "confirmed",
      platform: "Eventbrite",
      url: "https://www.eventbrite.com/e/1999060500771",
    },
    notes:
      "Flyer inconsistency, not resolved on this site: the official flyer's corner badge says \"10/30\" but its own body text says \"Friday October 31st.\" October 31, 2026 is a Saturday, so \"Friday\" and \"the 31st\" can't both be right. Keeping the date already confirmed on the live site (Friday, October 30) until the founder confirms which is correct.",
    // Credit: Bond Hospitality official site (bondhospitality.com/venues/submercer).
    venuePhotos: [
      { src: "/venues/submercer-interior.jpg", alt: "Bar at Submercer, New York City" },
    ],
  },
  {
    slug: "heaven-and-hell-eden",
    name: "Heaven & Hell at Eden",
    venue: "Eden",
    address: "20 W 36th St, New York, NY 10018",
    neighborhood: "Midtown Manhattan",
    dateLabel: "Saturday, October 31, 2026",
    isoDate: "2026-10-31",
    timeLabel: "10:00 PM – 4:00 AM",
    description:
      "Two realms, one night. A multi-level Halloween experience in the heart of Midtown — journey through immersive environments inspired by heaven above and hell below, with two floors, two different vibes, music, performers and elaborate décor.",
    heroAlt: "Heaven and Hell Halloween costume party at Eden in New York City",
    heroImage: "/events/eden-wide.png",
    ogImage: "/events/eden-square.png",
    seo: {
      title: "Heaven & Hell at Eden | Halloween NYC 2026 Tickets",
      description:
        "Heaven & Hell at Eden is a Halloween costume party in New York City on Saturday, October 31, 2026. Explore event details and official tickets.",
      ogTitle: "Heaven & Hell at Eden | Halloween Night 2026",
      ogDescription:
        "Choose your side at Heaven & Hell, a Halloween costume party at Eden in New York City on Saturday, October 31.",
    },
    ticket: {
      status: "confirmed",
      platform: "Eventbrite",
      url: "https://www.eventbrite.com/e/1999060605083",
    },
    notes:
      "Two conflicts: (1) a second Eventbrite listing exists (ID 1999060648212) — confirm which is canonical before running paid promotion, still unresolved. (2) The official event flyer prints the address as \"147 West 24th Street,\" which conflicts with \"20 W 36th St\" as shown on the live website — independent sources (Eden's own venue listings) confirm 20 W 36th St as the real, current address of Eden NYC, so the flyer's address appears to be the error. Keeping this address with higher confidence, but still flagging for founder sign-off since the flyer itself was never corrected.",
    // Credit: Eden's official site (edennewyork.com).
    venuePhotos: [
      { src: "/venues/eden-01.jpg", alt: "Floral-lit lounge ceiling at Eden, New York City" },
      { src: "/venues/eden-05.jpg", alt: "Neon-lit lounge corridor at Eden, New York City" },
    ],
  },
  {
    slug: "haunting-on-the-hudson",
    name: "Haunting on the Hudson",
    venue: "S.S. Nightfall (Hudson River boat party)",
    address: "Boarding at Pier 78, NYC",
    neighborhood: "Hudson River, Manhattan",
    dateLabel: "Saturday, October 31, 2026",
    isoDate: "2026-10-31",
    timeLabel: "10:00 PM – 3:00 AM",
    description:
      "A Halloween voyage like no other, aboard the S.S. Nightfall — costumes, music, immersive décor and New York City after-dark energy on the Hudson River. Costumes highly encouraged; limited capacity.",
    heroAlt: "Haunting on the Hudson Halloween boat party in New York City",
    heroImage: "/events/hudson-wide.png",
    ogImage: "/events/hudson-square.png",
    seo: {
      title: "Haunting on the Hudson | NYC Halloween Boat Party Tickets",
      description:
        "Haunting on the Hudson is a Halloween boat party in New York City on Saturday, October 31, 2026. Explore cruise details and official tickets.",
      ogTitle: "Haunting on the Hudson | Halloween Night 2026",
      ogDescription:
        "Spend Halloween night on the Hudson with a New York City boat-party experience on Saturday, October 31.",
    },
    ticket: {
      // CRITICAL: do not fill this in with a guessed URL. The live Wix
      // site's current Eventbrite link for this event incorrectly points
      // to Heaven & Hell at Eden's listing. Do not publish a ticket CTA
      // until the correct destination is supplied and verified.
      status: "pending",
    },
    notes:
      "Boarding location and vessel name (Pier 78, S.S. Nightfall) are now confirmed by the official event flyer — the earlier \"TBA\" is resolved. The ticket link is still not: no verified Eventbrite/Posh/DICE/Trybe URL exists for this event yet, so the ticket CTA remains pending on purpose. No real photo/video of the specific vessel could be verified online — a generic Hudson River charter boat photo was deliberately NOT substituted, to avoid depicting the wrong boat as this event's own.",
  },
  {
    slug: "luna-day-of-the-dead-1-hotel-brooklyn-bridge",
    name: "LUNA: Day of the Dead",
    venue: "1 Hotel Brooklyn Bridge — Harriet's Rooftop & Lounge",
    address: "60 Furman St, Brooklyn, NY 11201",
    neighborhood: "Brooklyn Bridge Park, Brooklyn",
    dateLabel: "Sunday, November 1, 2026",
    isoDate: "2026-11-01",
    timeLabel: "2:00 PM – 2:00 AM",
    description:
      "Perched above Brooklyn with sweeping views of the Manhattan skyline and Brooklyn Bridge, LUNA: Day of the Dead transforms 1 Hotel Brooklyn Bridge into an elevated Halloween weekend experience.",
    heroAlt: "LUNA Day of the Dead event at 1 Hotel Brooklyn Bridge in New York City",
    heroImage: "/events/luna-wide.png",
    ogImage: "/events/luna-square.png",
    seo: {
      title: "LUNA: Day of the Dead at 1 Hotel | Halloween NYC 2026 Tickets",
      description:
        "LUNA: Day of the Dead at 1 Hotel Brooklyn Bridge is a Halloween weekend event in NYC on Sunday, November 1, 2026. Explore details and official tickets.",
      ogTitle: "LUNA: Day of the Dead at 1 Hotel | November 1, 2026",
      ogDescription:
        "Close out Halloween weekend at LUNA: Day of the Dead, happening at 1 Hotel Brooklyn Bridge on Sunday, November 1.",
    },
    ticket: {
      status: "confirmed",
      platform: "Eventbrite",
      url: "https://www.eventbrite.com/e/1999060749515",
    },
    // Credit: 1 Hotels official site (1hotels.com/brooklyn-bridge/taste/harriets-rooftop).
    venuePhotos: [
      { src: "/venues/harriets-rooftop-01.jpg", alt: "Harriet's Rooftop lounge seating with Brooklyn Bridge view" },
      { src: "/venues/harriets-rooftop-03.jpg", alt: "Rooftop pool at 1 Hotel Brooklyn Bridge with Manhattan skyline" },
    ],
    // Real, independently-published video tour of 1 Hotel Brooklyn Bridge,
    // embedded via YouTube's standard player (not downloaded/rehosted).
    venueVideoYouTubeId: "seYNqT0AU98",
  },
];

export const passport = {
  name: "Halloween Passport NYC 2026",
  platform: "Posh" as const,
  url: "https://posh.vip/e/halloween-passport",
  heroImage: "/events/passport-wide.png",
  ogImage: "/events/passport-square.png",
  complianceLine:
    "Passport checkout is provided through Posh. Passport access applies to eligible experiences and remains subject to valid 21+ ID, venue capacity, event-specific requirements and final Passport Terms.",
  // COMPLIANCE FLAG, not resolved on this site: the official Passport flyer
  // reads "ONE PASS. EVERY EXPERIENCE." and "ALL ACCESS / ALL EVENTS" — the
  // exact language this project's own rules say never to use ("all-access",
  // implying guaranteed entry) unless contractually true. This site
  // deliberately does NOT reuse that flyer copy. Flag the artwork itself
  // for legal/founder review rather than silently matching it.
};

export interface FaqEntry {
  question: string;
  answer: string;
}

// Verbatim from the live Wix FAQ app (verified, not placeholder copy).
export const faqEntries: FaqEntry[] = [
  {
    question: "Which ticketing platform should I use?",
    answer:
      "Use the official ticket link shown on the specific event page. Different events or campaigns may use different authorized platforms.",
  },
  {
    question: "Can I attend more than one event in one night?",
    answer:
      "You may plan your Halloween weekend around multiple events, but entry is subject to each event's ticket, credential, age, timing, venue, and capacity rules. Check official details before making plans.",
  },
  {
    question: "Where can I buy tickets?",
    answer:
      "Official ticket links will be published on each event page when tickets are released. Purchase only through official links shared by Halloween NYC 2026, Nine & Up Group LLC, the venue, or an authorized ticketing platform.",
  },
  {
    question: "I did not receive my ticket. What should I do?",
    answer:
      "First, check your spam, promotions, and junk folders. Then contact the ticketing platform shown on your purchase confirmation. If you still need help, contact Halloween NYC 2026 support and include your full name, event name, purchase email, ticket platform, and order number.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Arrival details are listed on individual event pages and in ticket confirmations. Allow enough time for ID verification, ticket scanning, security procedures, and any venue-specific entry requirements.",
  },
  {
    question: "How does the Halloween Passport work?",
    answer:
      "Your original Passport ticket is intended to be redeemed at your first eligible event check-in. After redemption, access to remaining eligible events will be verified through an official Halloween NYC 2026 credential and the Passport guest roster, subject to final Passport Terms.",
  },
  {
    question: "Can I transfer my ticket?",
    answer:
      "Transfer rules depend on the ticket platform and final event terms. Review the transfer options and terms in your ticket account or purchase confirmation.",
  },
  {
    question: "What is the Halloween Passport?",
    answer:
      "The Halloween Passport is a premium way to experience eligible Halloween NYC 2026 events across the city after dark. Final Passport details, pricing, eligibility, ticketing, credential, and entry terms will be released before sales open.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Ticket remedies depend on the official ticket platform's terms, the final Ticketing & Refund Policy, applicable law, and the circumstances of the request. Review the Ticketing & Refund Policy and contact the ticketing platform used for your purchase.",
  },
  {
    question: "What happens if an event changes, is postponed, or is cancelled?",
    answer:
      "Material updates will be communicated through the official ticket platform and/or official Halloween NYC 2026 channels where reasonably possible. Any available remedy is determined according to applicable law, ticket-platform terms, and final event policies.",
  },
  {
    question: "Can I transfer my Passport?",
    answer:
      "Passport transfer rules will be included in the final Passport Terms. Do not assume that a Passport is transferable.",
  },
  {
    question: "Is VIP table service available?",
    answer:
      "VIP table inquiries are available for Heaven & Hell at Eden. Availability, table options, final terms, and booking instructions will be confirmed through the VIP Table Inquiry page.",
  },
  {
    question: "Does the Passport guarantee entry at any time?",
    answer:
      "No. Passport access is subject to valid ID, 21+ rules, credential and guest-roster verification, venue capacity, event-specific arrival requirements, safety procedures, and applicable event terms.",
  },
  {
    question: "Will I need to RSVP for Passport events?",
    answer:
      "Some event occurrences may require RSVP or advance selection to manage capacity. Final requirements will be included in Passport Terms and official Passport communications.",
  },
  {
    question: "What if I lose my Passport credential?",
    answer:
      "Lost-credential procedures will be included in the final Passport Terms. Contact support as soon as possible and be prepared to provide ticket and identity-verification information. Replacement is not guaranteed.",
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
