export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  excerpt: string;
  datePublished: string;
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
    title: "Halloween Experiences in NYC 2026 | Parties, Costumes & Nightlife",
    description:
      "Discover Halloween experiences in NYC for 2026, from costume parties and rooftop events to masquerades, boat parties and nightlife planning.",
    ogTitle: "Halloween Experiences in NYC for 2026",
    ogDescription:
      "Discover costume parties, rooftops, masquerades, boat events and Halloween nightlife across New York City.",
    excerpt:
      "Halloween in New York City is a magical time when the streets come alive with spooky decorations, thrilling events, and a palpable sense of excitement. NYC offers a plethora of experiences that cater to all ages and interests.",
    datePublished: "2026-08-24",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
