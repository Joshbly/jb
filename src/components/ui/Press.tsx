"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using Clearbit Logo API for consistent branding
// Fallback to text if logo fails or isn't found (handled by alt text + styling)
const pressMentions = [
  {
    outlet: "Search Engine Land",
    domain: "searchengineland.com",
    title: "ChatGPT is sending less traffic to websites – down 52% in a month",
    link: "https://searchengineland.com/chatgpt-traffic-referrals-plummet-461027",
    year: "2025"
  },
  {
    outlet: "AdAge",
    domain: "adage.com",
    title: "ChatGPT’s new AI browser Atlas—what brands need to know",
    link: "https://adage.com/technology/ai/aa-chatgpt-browser-atlas-brands/",
    year: "2025"
  },
  {
    outlet: "Search Engine Roundtable",
    domain: "seroundtable.com",
    title: "Report: OpenAI ChatGPT Sending 52% Less Referral Traffic",
    link: "https://www.seroundtable.com/openai-chatgpt-52-less-referral-traffic-39977.html",
    year: "2025"
  },
  {
    outlet: "Boston Consulting Group",
    domain: "bcg.com",
    title: "The Future of Discoverability",
    link: "https://www.bcg.com/x/the-multiplier/the-future-of-discoverability",
    year: "2025"
  },
  {
    outlet: "Business of Fashion",
    domain: "businessoffashion.com",
    title: "GEO Is Beauty’s New SEO",
    link: "https://www.businessoffashion.com/articles/beauty/geo-is-beautys-new-seo/",
    year: "2025"
  },
  {
    outlet: "Format",
    domain: "useformat.ai",
    title: "Speed Series: Josh Blyskal",
    link: "https://useformat.ai/speed/josh-blyskal",
    year: "2025",
    useTextFallback: true
  },
  {
    outlet: "Profound Podcast",
    domain: "spotify.com",
    title: "AI Just Broke Marketing (And What You Need to Do Now)",
    link: "https://open.spotify.com/episode/0w4sALglHGrq9V7Yj4CSvw?si=c088583230ae4931",
    year: "2025"
  },
  {
    outlet: "The Long Game",
    domain: "spotify.com",
    title: "Answer Engine Optimization Strategies & Tactics",
    link: "https://open.spotify.com/episode/4156Yoc3rkk2tvyaQmeHIb?si=cfb116d1727f4e00",
    year: "2025"
  },
  {
    outlet: "Siege Media",
    domain: "spotify.com",
    title: "AEO Playbook: How to Optimize for AI",
    link: "https://open.spotify.com/episode/04xczqIbckYXWDLgID995E?si=cc12790b65fb43be",
    year: "2025"
  },
  {
    outlet: "The Agency Insider",
    domain: "spotify.com",
    title: "Inside ChatGPT's Algorithm: Why Some Sites Get Cited 32.9% More",
    link: "https://open.spotify.com/episode/7i20dQkZ43H9BDKKbtgaCR?si=c0ba2701f3ae4c2a",
    year: "2025"
  }
];

export function Press() {
  return (
    <section id="press" className="py-32 border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-baseline justify-between border-b-2 border-foreground pb-4"
        >
          <h2 className="text-4xl font-display font-normal italic text-foreground">Press & Citations</h2>
          <span className="font-mono text-xs uppercase tracking-widest opacity-50">Media Log</span>
        </motion.div>

        {/* Grid Layout for Logos/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/20 border-2 border-foreground/20">
          {pressMentions.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-background p-8 hover:bg-foreground/5 transition-colors relative flex flex-col h-full"
            >
              {/* Header: Date + Arrow */}
              <div className="flex justify-between items-start mb-8 w-full">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">{item.year}</span>
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">↗</span>
              </div>

              {/* Logo Area */}
              <div className="mb-6 h-8 flex items-center">
                {item.useTextFallback ? (
                  <span className="font-display font-bold text-lg leading-none">{item.outlet}</span>
                ) : (
                  <>
                    <img 
                      src={`https://logo.clearbit.com/${item.domain}?size=60&greyscale=true`}
                      alt={`${item.outlet} logo`}
                      className="h-6 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      style={{ mixBlendMode: 'multiply' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const textFallback = e.currentTarget.nextElementSibling;
                        if (textFallback) textFallback.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden font-display font-bold text-lg leading-none">{item.outlet}</span>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="font-body text-sm font-medium leading-relaxed text-foreground/90 group-hover:text-accent transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
