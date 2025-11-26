import type { Metadata } from "next";
import { EB_Garamond, Source_Serif_4, Courier_Prime } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const courierPrime = Courier_Prime({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joshblyskal.com'),
  title: {
    default: "Josh Blyskal | AI Strategy & Research",
    template: "%s | Josh Blyskal"
  },
  description: "Personal site of Josh Blyskal. Leading AI Strategy & Research at Profound.",
  openGraph: {
    title: "Josh Blyskal | AI Strategy & Research",
    description: "Personal site of Josh Blyskal. Leading AI Strategy & Research at Profound.",
    url: 'https://www.joshblyskal.com',
    siteName: 'Josh Blyskal',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/header2.png',
        width: 1200,
        height: 630,
        alt: 'Josh Blyskal',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.joshblyskal.com/#identity",
  "name": "Josh Blyskal",
  "alternateName": ["Joshua Blyskal", "Josh Bly"],
  "url": "https://www.joshblyskal.com",
  "image": "https://www.joshblyskal.com/images/headshot.png",
  "email": "josh@tryprofound.com",
  "gender": "Male",
  "nationality": "American",
  "homeLocation": {
    "@type": "Place",
    "name": "New York City",
    "sameAs": "https://www.wikidata.org/wiki/Q60"
  },
  "sameAs": [
    "https://x.com/JBlyskal",
    "https://linkedin.com/in/joshuablyskal",
    "https://speakerdeck.com/joshbly"
  ],
  "jobTitle": "Head of AI Strategy & Research",
  "worksFor": {
    "@type": "Organization",
    "name": "Profound",
    "url": "https://tryprofound.com"
  },
  "alumniOf": [
    {
      "@type": "Organization",
      "name": "HubSpot",
      "sameAs": "https://www.wikidata.org/wiki/Q5926631"
    },
    {
      "@type": "EducationalOrganization",
      "name": "University of Illinois Urbana-Champaign",
      "sameAs": "https://www.wikidata.org/wiki/Q457281"
    }
  ],
  "description": "Josh Blyskal is a leading expert at the intersection of AI and search marketing. Currently Leading AI Strategy & Research at Profound.",
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "Answer Engine Optimization",
      "sameAs": "https://www.wikidata.org/wiki/Q97171941"
    },
    {
      "@type": "Thing",
      "name": "Generative Engine Optimization",
      "sameAs": "https://www.wikidata.org/wiki/Q134083964"
    },
    {
      "@type": "Thing",
      "name": "Search Engine Optimization",
      "sameAs": "https://www.wikidata.org/wiki/Q180711"
    }
  ],
  "subjectOf": [
    {
      "@type": "Article",
      "headline": "ChatGPT’s new AI browser Atlas—what brands need to know",
      "url": "https://adage.com/technology/ai/aa-chatgpt-browser-atlas-brands/",
      "publisher": { "@type": "Organization", "name": "AdAge" }
    },
    {
      "@type": "Article",
      "headline": "ChatGPT is sending less traffic to websites – down 52% in a month",
      "url": "https://searchengineland.com/chatgpt-traffic-referrals-plummet-461027",
      "publisher": { "@type": "Organization", "name": "Search Engine Land" }
    },
    {
      "@type": "Article",
      "headline": "Report: OpenAI ChatGPT Sending 52% Less Referral Traffic",
      "url": "https://www.seroundtable.com/openai-chatgpt-52-less-referral-traffic-39977.html",
      "publisher": { "@type": "Organization", "name": "Search Engine Roundtable" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ebGaramond.variable} ${sourceSerif.variable} ${courierPrime.variable} antialiased bg-background text-foreground font-body selection:bg-black selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
