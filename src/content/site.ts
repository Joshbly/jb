const NAME = "Josh Blyskal";
const TAGLINE = "AI Strategy & Research";
const EMPLOYER = { name: "Profound", url: "https://tryprofound.com" } as const;
const HERO_SRC = "/images/header2.png";

export const site = {
  url: "https://www.joshblyskal.com",
  name: NAME,
  email: "josh@tryprofound.com",
  role: "Head of AI Strategy & Research",
  tagline: TAGLINE,
  location: "New York City",
  locale: "en_US",
  description: `Personal site of ${NAME}. Leading ${TAGLINE} at ${EMPLOYER.name}.`,
  bio: `${NAME} is a leading expert at the intersection of AI and search marketing. Currently Leading ${TAGLINE} at ${EMPLOYER.name}.`,
  ogImage: HERO_SRC,
  headshot: "/images/headshot.png",
  heroImage: {
    src: HERO_SRC,
    alt: `${NAME} speaking at Profound's Zero Click conference`,
    caption: "Fig. 1 — NYC · 2025",
  },
  employer: EMPLOYER,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/joshuablyskal" },
    { label: "Twitter", href: "https://x.com/JBlyskal" },
    { label: "Speaker Deck", href: "https://speakerdeck.com/joshbly" },
  ],
  nav: [
    { href: "/research", label: "Research" },
    { href: "#speaking", label: "Speaking" },
    { href: "#writing", label: "Writing" },
    { href: "/about", label: "About" },
  ],
} as const;

export type Site = typeof site;
