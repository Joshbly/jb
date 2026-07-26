const NAME = "Josh Blyskal";
const TAGLINE = "AEO & GEO Research";
const EMPLOYER = { name: "Profound", url: "https://tryprofound.com" } as const;
const HERO_SRC = "/images/header3.png";

export const site = {
  url: "https://www.joshblyskal.com",
  name: NAME,
  email: "josh@tryprofound.com",
  role: "AI Strategy & Research",
  tagline: TAGLINE,
  location: "New York City",
  locale: "en_US",
  description: `${NAME} is an AEO expert and GEO expert leading AI Strategy & Research at ${EMPLOYER.name}. His research spans 10B+ citations and 1.5B real user prompts across major answer engines.`,
  bio: `${NAME} leads AI Strategy & Research at ${EMPLOYER.name} and studies how answer engines search, retrieve, and cite the web.`,
  ogImage: HERO_SRC,
  headshot: "/images/headshot.png",
  heroImage: {
    src: HERO_SRC,
    alt: `${NAME} speaking at Profound's Zero Click conference`,
    caption: "Fig. 1 · NYC · 2025",
  },
  employer: EMPLOYER,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/joshuablyskal" },
    { label: "Twitter", href: "https://x.com/JBlyskal" },
    { label: "Speaker Deck", href: "https://speakerdeck.com/joshbly" },
  ],
  nav: [
    { href: "/media", label: "Media" },
    { href: "/research", label: "Research Blog" },
    { href: "/about", label: "About" },
  ],
} as const;

export type Site = typeof site;
