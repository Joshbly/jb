import type { Metadata } from "next";
import { Courier_Prime, EB_Garamond, Source_Serif_4 } from "next/font/google";
import { site } from "@/content/site";
import { personJsonLd } from "@/lib/seo";
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

const titleFull = `${site.name} | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: titleFull, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: titleFull,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ebGaramond.variable} ${sourceSerif.variable} ${courierPrime.variable} antialiased bg-background text-foreground font-body selection:bg-accent selection:text-background`}
      >
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: inline pre-paint script that gates reveal CSS so no-JS users see content immediately
          dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline serialization, content is a static object
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
