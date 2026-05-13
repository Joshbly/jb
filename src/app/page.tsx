import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealRunner } from "@/components/shared/RevealRunner";
import { Hero } from "@/components/ui/Hero";
import { Now } from "@/components/ui/Now";
import { Press } from "@/components/ui/Press";
import { Speaking } from "@/components/ui/Speaking";
import { Thoughts } from "@/components/ui/Thoughts";
import { Writing } from "@/components/ui/Writing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <RevealRunner />
      <main>
        <Hero />
        <Thoughts />
        <Speaking />
        <Writing />
        <Press />
        <Now />
      </main>
      <Footer />
    </div>
  );
}
