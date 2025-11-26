"use client";

import { motion } from "framer-motion";

const articles = [
  {
    year: "June 2025",
    title: "ChatGPT Intent: A Landmark Study",
    outlet: "Profound",
    desc: "A deep dive into user intent classification within Large Language Models.",
    link: "https://www.tryprofound.com/blog/chatgpt-intent-landmark-study",
    tag: "Research"
  },
  {
    year: "Nov 2025",
    title: "ChatGPT’s Entity Update",
    outlet: "Profound",
    desc: "Analysis of how entity understanding is evolving to favor niche expertise.",
    link: "https://www.tryprofound.com/blog/chatgpt-entity-update",
    tag: "Research"
  },
  {
    year: "Nov 2025",
    title: "The Data on Reddit and AI Search",
    outlet: "Profound",
    desc: "Why Reddit is winning the war for AI visibility and what brands can do about it.",
    link: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
    tag: "Research"
  },
  {
    year: "Dec 2023",
    title: "Navigating the AI Revolution",
    outlet: "HubSpot",
    desc: "Op-ed distilling key trends and best practices for marketers adopting AI.",
    link: "https://blog.hubspot.com/marketing/ai-insights-for-new-year",
    tag: "Early Op-Ed"
  }
];

export function Writing() {
  return (
    <section id="writing" className="py-32 border-t-2 border-foreground bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-baseline justify-between border-b-2 border-foreground pb-4"
        >
          <h2 className="text-4xl font-display font-normal italic text-foreground">Selected Writing</h2>
          <span className="font-mono text-xs uppercase tracking-widest opacity-50">Ref. List 02</span>
        </motion.div>

        <div className="space-y-8">
          {articles.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 md:gap-8 items-baseline hover:bg-foreground/5 p-4 -mx-4 rounded-sm transition-colors"
            >
              {/* Margin Data */}
              <div className="hidden md:block font-mono text-xs text-foreground/50 text-right uppercase tracking-wider">
                {post.year}
              </div>

              {/* Main Entry */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{post.outlet}</span>
                  <h3 className="font-display text-xl font-bold leading-snug group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-foreground/70 max-w-xl leading-relaxed">
                  {post.desc}
                </p>
              </div>

              {/* Type tag */}
              <div className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-0.5 rounded-full opacity-50 group-hover:opacity-100 group-hover:border-accent group-hover:text-accent transition-all">
                {post.tag}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
