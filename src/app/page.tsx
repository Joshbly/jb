import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealRunner } from "@/components/shared/RevealRunner";
import { Hero } from "@/components/ui/Hero";
import { Inquiry } from "@/components/ui/Inquiry";
import { Proof } from "@/components/ui/Proof";
import { ResearchCredentials } from "@/components/ui/ResearchCredentials";
import { SageFeature } from "@/components/ui/SageFeature";
import { SpeakingFeature } from "@/components/ui/SpeakingFeature";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RevealRunner />
      <main>
        <Hero />
        <ResearchCredentials />
        <SageFeature />
        <Proof />
        <SpeakingFeature />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}
