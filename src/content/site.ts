const NAME = "Josh Blyskal";
const TAGLINE = "AEO & GEO Research";
const ROLE = "Head of Insights";
const EMPLOYER = { name: "Profound", url: "https://www.tryprofound.com" } as const;

export const site = {
  url: "https://www.joshblyskal.com",
  name: NAME,
  email: "josh@tryprofound.com",
  role: ROLE,
  tagline: TAGLINE,
  location: "New York City",
  locale: "en_US",
  description: `${NAME} is ${ROLE} at ${EMPLOYER.name}, where he studies how to make brands visible in AI search. He joined ${EMPLOYER.name} as its second employee.`,
  bio: `${NAME} is ${ROLE} at ${EMPLOYER.name}. He joined ${EMPLOYER.name} as its second employee and studies how to make brands visible in AI search.`,
  ogImage: "/opengraph-image",
  headshot: "/images/headshot.jpg",
  stagePhoto: {
    src: "/images/header3.jpg",
    alt: `${NAME} speaking at Profound's Zero Click conference`,
  },
  employer: EMPLOYER,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/joshua-blyskal" },
    { label: "X", href: "https://x.com/JBlyskal" },
    { label: "Speaker Deck", href: "https://speakerdeck.com/joshbly" },
  ],
  nav: [
    { href: "/research", label: "Research" },
    { href: "/research/sage-aeo-method", label: "SAGE" },
    { href: "/speaking", label: "Speaking" },
    { href: "/archive", label: "Archive" },
    { href: "/about", label: "About" },
  ],
  footerNav: [
    { href: "/research/findings", label: "Findings" },
    { href: "/archive", label: "Archive" },
    { href: "/archive#press", label: "Press" },
  ],
} as const;

export type Site = typeof site;
