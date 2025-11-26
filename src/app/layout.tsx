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
  title: "Joshua Blyskal | AI Strategy & Research",
  description: "Personal site of Joshua Blyskal. Leading AI Strategy & Research at Profound.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${sourceSerif.variable} ${courierPrime.variable} antialiased bg-background text-foreground font-body selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
