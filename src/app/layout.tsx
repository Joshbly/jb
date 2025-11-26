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
    default: "Joshua Blyskal | AI Strategy & Research",
    template: "%s | Josh Blyskal"
  },
  description: "Personal site of Joshua Blyskal. Leading AI Strategy & Research at Profound.",
  openGraph: {
    title: "Joshua Blyskal | AI Strategy & Research",
    description: "Personal site of Joshua Blyskal. Leading AI Strategy & Research at Profound.",
    url: 'https://www.joshblyskal.com',
    siteName: 'Josh Blyskal',
    locale: 'en_US',
    type: 'website',
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
        {children}
      </body>
    </html>
  );
}
