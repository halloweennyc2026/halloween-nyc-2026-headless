export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  excerpt: string;
  datePublished: string;
  // Full article body. Posts without one render the excerpt only.
  sections?: { heading: string; paragraphs: string[] }[];
  // Events this post links to at the end (defaults to the full lineup).
  relatedEventSlugs?: string[];
}

// Titles/descriptions verified against the live blog. Full article bodies
// were not captured in the source audit — excerpt only until the complete
// copy is supplied.
export const blogPosts: BlogPost[] = [
  {
    slug: "top-21-halloween-events-in-nyc-this-weekend",
    title: "Top 21+ Halloween Events in NYC 2026 | Halloween NYC Guide",
    description:
      "Explore top 21+ Halloween events in NYC for 2026, including rooftop parties, masquerades, nightlife experiences and official ticket information.",
    ogTitle: "Top 21+ Halloween Events in NYC for 2026",
    ogDescription:
      "Explore 21+ Halloween parties, rooftops, masquerades and nightlife experiences across New York City.",
    excerpt:
      "Halloween in New York City is a magical time filled with spooky decorations, thrilling events, and a vibrant atmosphere that captures the spirit of the season. This weekend, NYC is buzzing with events that cater to all ages and interests.",
    datePublished: "2026-08-24",
  },
  {
    slug: "plan-your-halloween-night-out-in-nyc-2026",
    title: "Plan Your Halloween Night Out in NYC | Halloween NYC 2026",
    description:
      "Plan a Halloween night out in NYC with tips for tickets, costumes, venues, arrival times, group plans and 21+ nightlife experiences.",
    ogTitle: "Plan Your Halloween Night Out in NYC",
    ogDescription:
      "Plan tickets, costumes, venues, arrival timing and group logistics for Halloween weekend in New York City.",
    excerpt:
      "Halloween in New York City is a magical time filled with excitement, creativity, and a touch of spookiness. Planning your Halloween night out in NYC can be an exhilarating experience — this guide helps you navigate the best events, parties, and activities.",
    datePublished: "2026-08-24",
  },
  {
    slug: "halloween-experiences-in-nyc-your-2026-guide",
    title: "Halloween Experiences in NYC 2026 | Parties & Nightlife",
    description:
      "Discover Halloween experiences in NYC for 2026, from costume parties and rooftop events to masquerades, boat parties and nightlife planning.",
    ogTitle: "Halloween Experiences in NYC for 2026",
    ogDescription:
      "Discover costume parties, rooftops, masquerades, boat events and Halloween nightlife across New York City.",
    excerpt:
      "Halloween in New York City is a magical time when the streets come alive with spooky decorations, thrilling events, and a palpable sense of excitement. NYC offers a plethora of experiences that cater to all ages and interests.",
    datePublished: "2026-08-24",
  },
  // Phase 3 planning guides (drafted 2026-09-23). Every event fact below comes
  // from site-data.ts. Update both together if a date, venue or time changes.
  {
    slug: "nyc-halloween-weekend-2026-guide",
    title: "NYC Halloween Weekend 2026 Guide | Thursday to Sunday",
    description:
      "Plan Halloween weekend 2026 in New York City night by night, from a Thursday rooftop opener to a Sunday Day of the Dead finale in Brooklyn.",
    ogTitle: "NYC Halloween Weekend 2026: Night by Night",
    ogDescription:
      "Four nights, six events: a night-by-night plan for Halloween weekend 2026 in New York City.",
    excerpt:
      "Halloween falls on a Saturday in 2026, which turns the holiday into a full weekend in New York City. Halloween NYC 2026 runs four nights, Thursday, October 29 to Sunday, November 1, with six events across Manhattan, Brooklyn and the Hudson River. Here is how the week fits together.",
    datePublished: "2026-09-23",
    sections: [
      {
        heading: "Thursday, October 29: Open on the Lower East Side",
        paragraphs: [
          "The week starts at Dead Disco at PUBLIC Hotel, 215 Chrystie Street on the Lower East Side, from 10 PM. It moves between an intimate indoor micro-club and an open-air rooftop, with disco glamour and afterlife styling. Starting on a Thursday gives you a first night out before the weekend.",
        ],
      },
      {
        heading: "Friday, October 30: Chelsea or SoHo",
        paragraphs: [
          "Friday has two options. Masquerade Inferno at LouLou, 176 8th Avenue in Chelsea, is a candlelit, Parisian-inspired hideaway built around ornate masks and costumes. The Descent at Submercer, 147 Mercer Street in SoHo, starts at 10 PM and goes underground with deep house, curated lighting and haunting visuals.",
          "They suit different nights out. Choose the masquerade for an intimate, costume-first room, or The Descent if you want to dance. Check each event page for confirmed times before you plan a route between them.",
        ],
      },
      {
        heading: "Saturday, October 31: Halloween Night",
        paragraphs: [
          "Halloween itself has two events, both starting at 10 PM. Heaven & Hell at Eden, 20 West 36th Street in Midtown, runs until 5 AM and is a multi-level party with heaven above and hell below: two floors, two vibes, performers and elaborate décor. Haunting on the Hudson boards near Hudson Yards (exact pier to be confirmed) for a night on the river aboard the S.S. Nightfall, until 4 AM.",
          "Halloween night is busy across the city, so plan your travel and give yourself time for ID checks at the door.",
        ],
      },
      {
        heading: "Sunday, November 1: Day of the Dead in Brooklyn",
        paragraphs: [
          "The finale is LUNA: Day of the Dead at 1 Hotel Brooklyn Bridge, Harriet's Rooftop & Lounge, 60 Furman Street. It runs from 2 PM to 2 AM, so it's the one event you can start in daylight, with views of the Manhattan skyline and the Brooklyn Bridge.",
        ],
      },
      {
        heading: "Planning More Than One Night",
        paragraphs: [
          "Every event has its own page with the venue, address and official ticket link. If you want to go out on several nights, the Halloween Passport covers eligible experiences under its own terms, with checkout on Posh. All Halloween NYC 2026 events are 21+ and require a valid government-issued photo ID.",
        ],
      },
    ],
  },
  {
    slug: "nyc-rooftop-halloween-parties-2026",
    title: "NYC Rooftop Halloween Parties 2026 | Manhattan & Brooklyn",
    description:
      "Two rooftop Halloween parties in NYC for 2026: Dead Disco at PUBLIC Hotel on the Lower East Side and LUNA: Day of the Dead at 1 Hotel Brooklyn Bridge.",
    ogTitle: "NYC Rooftop Halloween Parties 2026",
    ogDescription:
      "Dead Disco at PUBLIC Hotel and LUNA: Day of the Dead at 1 Hotel Brooklyn Bridge: Halloween with a skyline.",
    excerpt:
      "Two Halloween NYC 2026 events take you up to a rooftop, and they bookend the week. One opens Halloween weekend in Manhattan on Thursday night. The other closes it in Brooklyn on Sunday, starting in daylight.",
    datePublished: "2026-09-23",
    relatedEventSlugs: [
      "dead-disco-public-hotel",
      "luna-day-of-the-dead-1-hotel-brooklyn-bridge",
    ],
    sections: [
      {
        heading: "Dead Disco at PUBLIC Hotel: Lower East Side, Thursday",
        paragraphs: [
          "Dead Disco takes over the Micro Club and Roof at PUBLIC Hotel, 215 Chrystie Street, on Thursday, October 29, from 10 PM. The night moves between an intimate indoor micro-club and an open-air rooftop, pairing disco glamour with the darkness of the afterlife.",
          "It's the week's opening night, which makes it a good pick if you want to start Halloween before the weekend.",
        ],
      },
      {
        heading: "LUNA: Day of the Dead: Brooklyn, Sunday",
        paragraphs: [
          "LUNA: Day of the Dead is at Harriet's Rooftop & Lounge at 1 Hotel Brooklyn Bridge, 60 Furman Street, on Sunday, November 1, from 2 PM to 2 AM. It's built to run from day into night, above Brooklyn Bridge Park with views across to the Manhattan skyline.",
          "Because it starts in the afternoon, it's the easiest event of the week to fit around a Halloween weekend that already has late nights in it.",
        ],
      },
      {
        heading: "Rooftop Tips for Late October",
        paragraphs: [
          "Late-October nights in New York can turn cold, especially up high and by the water. Plan a costume that works with a layer over it, and wear shoes you can stand in for hours. Check the event page for the confirmed times before you go, and bring a valid government-issued photo ID: every Halloween NYC 2026 event is 21+.",
        ],
      },
    ],
  },
  {
    slug: "what-to-wear-halloween-party-nyc-2026",
    title: "What to Wear to a Halloween Party in NYC | 2026 Guide",
    description:
      "Costume ideas matched to each Halloween NYC 2026 theme, from disco-afterlife and masquerade to heaven and hell and Day of the Dead, plus practical tips.",
    ogTitle: "What to Wear to a Halloween Party in NYC",
    ogDescription:
      "Costume ideas for each Halloween NYC 2026 theme, plus practical tips for a night out in New York.",
    excerpt:
      "Each Halloween NYC 2026 event has its own theme, and dressing for it is half the fun. These are ideas, not rules: check each event page for any official guidance. Here's how to match your look to the night.",
    datePublished: "2026-09-23",
    sections: [
      {
        heading: "Dead Disco: Disco Glamour Meets the Afterlife",
        paragraphs: [
          "Dead Disco at PUBLIC Hotel is where disco glamour meets the darkness of the afterlife. Think sequins, metallics and flares with a ghostly or skeletal twist: glitter over grave-pale makeup, or a mirror-ball look gone gothic.",
        ],
      },
      {
        heading: "Masquerade Inferno: Masks First",
        paragraphs: [
          "Masquerade Inferno at LouLou is built around ornate masks, costumes and anonymity in a candlelit, Parisian-inspired room. A statement mask is the centerpiece. Build the rest around it with dark velvet, lace or tailoring that suits an intimate, low-lit space.",
        ],
      },
      {
        heading: "The Descent: Dressed to Dance",
        paragraphs: [
          "The Descent at Submercer is an underground night of deep house, curated lighting and haunting visuals. Go for a costume you can move in: dark, minimal and sharp, with one striking detail that catches the light.",
        ],
      },
      {
        heading: "Heaven & Hell: Pick a Side",
        paragraphs: [
          "Heaven & Hell at Eden splits the night between heaven above and hell below. The theme gives you an easy choice: angelic whites, gold and feathers, or devilish reds, black and horns. Groups can split between the two.",
        ],
      },
      {
        heading: "LUNA: Day of the Dead",
        paragraphs: [
          "LUNA: Day of the Dead at 1 Hotel Brooklyn Bridge runs from afternoon into night. Florals, rich color and skull-inspired makeup fit the theme. Treat Día de los Muertos imagery with respect: it's a living tradition of remembrance, not just a costume theme.",
        ],
      },
      {
        heading: "Practical Tips for Any Night",
        paragraphs: [
          "Wear shoes you can stand in for hours. Plan a costume that works under a coat on colder nights. Keep your valid government-issued photo ID somewhere you can reach it easily, because every Halloween NYC 2026 event is 21+ and ID is checked at the door. Leave props that could be mistaken for weapons at home, and check the event page for venue-specific guidance before you go.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
