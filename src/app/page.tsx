import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { Thoughts } from "@/components/ui/Thoughts";
import { Speaking } from "@/components/ui/Speaking";
import { Writing } from "@/components/ui/Writing";
import { Now } from "@/components/ui/Now";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        {/* Thoughts section directly below Hero as requested */}
        <Thoughts />
        <Speaking />
        <Writing />
        <Now />
      </main>

      <Footer />
    </div>
  );
}
