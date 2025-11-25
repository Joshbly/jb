import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link href="/#writing" className="text-sm text-white/40 hover:text-accent transition-colors mb-8 block">
          ← Back to home
        </Link>
        
        <article className="prose prose-invert prose-lg prose-headings:font-display prose-a:text-accent prose-a:no-underline hover:prose-a:opacity-80">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The case for quiet software</h1>
          <div className="flex gap-4 text-sm text-white/40 mb-12 font-mono">
            <span>2025-10-12</span>
            <span>•</span>
            <span>Philosophy</span>
          </div>
          
          <p className="lead text-xl text-white/80">
            Why tools should be tools, not destinations. Examining the attention economy in SaaS.
          </p>
          
          <p>
            (This is a placeholder for the blog post content for slug: {slug})
          </p>
          
          <p>
            We live in an era where every piece of software wants to be a "platform". 
            They want your time, your attention, and your daily active usage.
            But the best tools are the ones you use, finish your task with, and then close.
          </p>
          
          <h2>The problem with sticky</h2>
          <p>
            "Stickiness" is a metric that PMs love and users unknowingly suffer from. 
            When a tool is sticky, it means you can't get rid of it. It means it's designed to keep you there.
          </p>
          
          <blockquote>
            The most respectful interface is one that helps you leave it.
          </blockquote>
          
          <p>
            As designers, we need to ask ourselves: are we designing for engagement metrics, or for user success?
          </p>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}

