import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealRunner } from "@/components/shared/RevealRunner";
import { Hero } from "@/components/ui/Hero";
import { Now } from "@/components/ui/Now";
import { Podcasts } from "@/components/ui/Podcasts";
import { ResearchCredentials } from "@/components/ui/ResearchCredentials";
import { Speaking } from "@/components/ui/Speaking";
import { Writing } from "@/components/ui/Writing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RevealRunner />
      <main>
        <Hero />
        <ResearchCredentials />
        <Writing />
        <Speaking />
        <Podcasts />
        <Now />
      </main>
      <Footer />
    </div>
  );
}
