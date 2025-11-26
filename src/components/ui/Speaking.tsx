"use client";

import { motion } from "framer-motion";

const talks = [
  {
    year: "October 2025",
    conference: "Zero Click",
    location: "NYC, USA",
    title: "The Machine Customer Era",
    desc: "Inaugural AI Search conference. Topic: how AI agents are becoming the primary customer.",
    link: "https://speakerdeck.com/joshbly/the-machine-customer-era-zero-click-2025",
    video: "https://www.youtube.com/watch?v=pBe1BcuVqBw"
  },
  {
    year: "Sept 2025",
    conference: "Spotlight AR",
    location: "Kansas City, USA",
    title: "If Gen AI can't find you, neither can your buyers",
    desc: "How analyst relations is now at the center of B2B AI visibility",
    link: null, 
    video: "https://www.youtube.com/watch?v=twkME1D_IhM"
  },
  {
    year: "Sept 2025",
    conference: "BrightonSEO",
    location: "San Diego, USA",
    title: "I analyzed 40 million search results",
    desc: "Expanding research on ChatGPT, Perplexity, and SGE patterns for US markets.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-i-analyzed-40-million-search-results-heres-what-i-found",
    video: null // Video same as Spotlight AR but kept distinct if needed, or null if not available
  },
  {
    year: "April 2025",
    conference: "BrightonSEO",
    location: "Brighton, UK",
    title: "I analyzed 10,000,000 AI search results: here's what I found",
    desc: "Revealing how AI-powered search results differ dramatically from traditional Google results.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-we-analyed-10000-000-ai-search-results-dot-dot-dot",
    video: "https://www.youtube.com/watch?v=slE1sgPReTM"
  },
];

const topics = [
  "AI Answer Engine Optimization (AEO)",
  "Large Language Model (LLM) Search Behavior",
  "AI-Driven Consumer Intent Analysis",
  "Entity-Based SEO Strategy",
  "The Transition from Search to Answer Engines"
];

export function Speaking() {
  return (
    <section id="speaking" className="py-32 border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
        
        {/* Left: Foreword / Context */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="sticky top-32">
            <h2 className="text-4xl font-display font-normal italic text-foreground mb-6">Speaking</h2>
            <p className="text-lg font-body leading-relaxed text-foreground/80 mb-8">
              Translating complex AI and search concepts into actionable insights. From keynote stages to webinars, sharing data-backed strategies on AEO and the future of discovery.
            </p>
            
            <div className="pt-8 border-t border-foreground/20">
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-60">Core Topics</h3>
              <ul className="space-y-2 font-mono text-xs">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right: Ledger / List */}
        <div className="border-t-2 border-foreground">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="group block py-8 border-b border-foreground/20 px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 mb-2">
                {/* Meta Column */}
                <div className="flex flex-col gap-1 font-mono text-xs text-accent w-32 shrink-0 uppercase tracking-wider">
                  <span className="font-bold">{talk.conference}</span>
                  <span className="text-foreground/60">{talk.location}</span>
                  <span className="text-[10px] opacity-50 mt-1">{talk.year}</span>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-3">
                    {talk.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed max-w-xl mb-4">
                    {talk.desc}
                  </p>

                  <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                    {talk.link && (
                      <a 
                        href={talk.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
                      >
                        <span>View Slides</span>
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0">→</span>
                      </a>
                    )}
                    
                    {talk.video && (
                      <a 
                        href={talk.video} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/video flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
                      >
                        <span>Watch Recording</span>
                        <span className="opacity-0 group-hover/video:opacity-100 transition-opacity -translate-x-1 group-hover/video:translate-x-0">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
