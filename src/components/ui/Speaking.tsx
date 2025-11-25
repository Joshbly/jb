"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const talks = [
  {
    event: "Ramp HQ (NYC)",
    title: "The Machine Customer Era | Zero Click 2025",
    desc: "Inaugural AI Search conference hosted in Ramp's HQ. How AI agents are becoming the primary customer.",
    link: "https://speakerdeck.com/joshbly/the-machine-customer-era-zero-click-2025",
  },
  {
    event: "BrightonSEO (San Diego)",
    title: "I analyzed 40 million search results",
    desc: "Expanding research on ChatGPT, Perplexity, and SGE patterns for US markets.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-i-analyzed-40-million-search-results-heres-what-i-found",
  },
  {
    event: "BrightonSEO (UK)",
    title: "We analysed 10,000,000 AI search results",
    desc: "Revealing how AI-powered search results differ dramatically from traditional Google results.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-we-analyed-10000-000-ai-search-results-dot-dot-dot",
  },
];

const topics = [
  "Answer Engine Optimization (AEO)",
  "The Machine Customer Era",
  "Data-Driven AI Search Insights",
  "Content Strategy for LLMs",
];

export function Speaking() {
  return (
    <section id="speaking" className="py-24 border-t border-foreground/10 bg-background">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display mb-8 text-foreground/90 italic font-bold">Speaking</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-serif">
            I translate complex AI and search concepts into actionable insights for marketing and tech audiences.
            From keynote stages to webinars, I share data-backed strategies on AEO and the future of discovery.
          </p>
          
          <h3 className="text-sm font-mono text-foreground/40 uppercase tracking-wider mb-4">Key Topics</h3>
          <ul className="space-y-2 mb-8">
            {topics.map((topic, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80 font-serif italic">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {topic}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="space-y-8">
          {talks.map((talk, index) => (
            <motion.a
              key={index}
              href={talk.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block p-6 border border-foreground/10 bg-foreground/[0.02] hover:border-accent/30 hover:bg-foreground/[0.04] transition-all rounded-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wide">{talk.event}</span>
                <span className="text-foreground/20 group-hover:text-accent transition-colors">↗</span>
              </div>
              <h3 className="text-xl font-display font-bold italic text-foreground/90 mb-2 group-hover:text-foreground transition-colors">
                {talk.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-serif">
                {talk.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
