"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// This would eventually come from a CMS or MDX files
const latestThoughts = [
  {
    date: "2025-10-12",
    title: "The Agentic Web is here",
    excerpt: "Why your website needs to be readable by machines first, humans second. The shift from SEO to AEO is just the beginning of the agentic transition.",
    slug: "agentic-web-is-here"
  },
  {
    date: "2025-09-28",
    title: "Stop optimizing for keywords",
    excerpt: "LLMs don't care about your keyword density. They care about semantic density and information gain. Here is how to write for the new algorithm.",
    slug: "stop-optimizing-keywords"
  }
];

export function Thoughts() {
  return (
    <section id="thoughts" className="py-24 border-b border-foreground/10 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-display mb-8 text-foreground/90 flex items-baseline gap-4 italic font-bold">
          Latest Thoughts
          <span className="text-sm font-mono text-foreground/40 font-normal not-italic">/ Blog</span>
        </h2>
        
        <div className="space-y-12">
          {latestThoughts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer max-w-3xl pl-4 border-l-2 border-transparent hover:border-accent transition-all"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <div className="text-xs font-mono text-accent/80 mb-2">{post.date}</div>
                <h3 className="text-3xl font-display font-medium text-foreground group-hover:text-accent transition-colors italic">
                  {post.title}
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors font-serif">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-sm text-foreground/40 mt-2 group-hover:text-accent transition-colors font-serif italic">
                  Read essay <span className="ml-2 not-italic">→</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 pl-4">
          <Link href="/blog" className="text-sm text-foreground/40 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground pb-0.5 font-serif italic">
            View archive
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
