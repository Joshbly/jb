"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "ChatGPT Entity Update: The Shift to Niche Authority",
    outlet: "Profound",
    desc: "Analysis of how ChatGPT's entity understanding is evolving to favor niche expertise.",
    link: "https://www.tryprofound.com/blog/chatgpt-entity-update",
    tag: "Research"
  },
  {
    title: "The Data on Reddit and AI Search",
    outlet: "Profound",
    desc: "Why Reddit is winning the war for AI visibility and what brands can do about it.",
    link: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
    tag: "Data"
  },
  {
    title: "ChatGPT Intent: A Landmark Study",
    outlet: "Profound",
    desc: "A deep dive into user intent classification within Large Language Models.",
    link: "https://www.tryprofound.com/blog/chatgpt-intent-landmark-study",
    tag: "Study"
  },
  {
    title: "Navigating the AI Revolution: 7 Insights",
    outlet: "HubSpot",
    desc: "Op-ed distilling key trends and best practices for marketers adopting AI.",
    link: "https://blog.hubspot.com/marketing/navigating-ai-revolution-trends",
    tag: "Op-Ed"
  }
];

export function Writing() {
  return (
    <section id="writing" className="py-24 border-t border-foreground/10 bg-background">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-display mb-12 text-foreground/90 italic font-bold"
      >
        Selected Writing & Research
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block p-6 -mx-6 md:mx-0 rounded-sm hover:bg-foreground/[0.03] border border-transparent hover:border-foreground/5 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-accent uppercase tracking-wide">{post.outlet}</span>
              <span className="w-1 h-1 bg-foreground/20 rounded-full" />
              <span className="text-xs text-foreground/40 font-serif italic">{post.tag}</span>
            </div>
            
            <h3 className="text-xl font-display text-foreground/90 mb-3 group-hover:text-accent transition-colors leading-snug font-bold italic">
              {post.title}
            </h3>
            
            <p className="text-foreground/60 text-sm leading-relaxed max-w-md font-serif">
              {post.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
