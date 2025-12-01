"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Now() {
  const [isHeadshotOpen, setIsHeadshotOpen] = useState(false);

  return (
    <section id="now" className="py-32 border-t-2 border-foreground bg-background">
      {/* Changed grid layout to 3 columns on large screens: Portrait, Bio, Socials */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr_1fr] gap-16 lg:gap-16">
        
        {/* Headshot - Left Column (Desktop) / Accordion (Mobile) */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="flex flex-col"
        >
           {/* Desktop View */}
           <div className="hidden lg:block">
             <div className="flex items-baseline justify-between border-b-2 border-foreground pb-4 mb-8">
                <h2 className="text-4xl font-display font-normal italic text-foreground">Portrait</h2>
                <span className="font-mono text-xs uppercase tracking-widest opacity-50">Fig. 2</span>
              </div>
              
              <div className="relative aspect-[3/4] w-full group cursor-zoom-in">
                 <a href="/images/headshot.png" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/headshot.png"
                    alt="Josh Blyskal Portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                 </a>
                 <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    View Full Res
                 </div>
              </div>
           </div>

           {/* Mobile View (Accordion) */}
           <div className="lg:hidden border-t border-foreground/20">
              <button 
                onClick={() => setIsHeadshotOpen(!isHeadshotOpen)}
                className="w-full py-4 flex items-center justify-between group"
              >
                 <span className="font-mono text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                    View Portrait
                 </span>
                 {isHeadshotOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {isHeadshotOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                     <div className="relative aspect-[3/4] w-full mb-8">
                        <a href="/images/headshot.png" target="_blank" rel="noopener noreferrer">
                          <Image
                            src="/images/headshot.png"
                            alt="Josh Blyskal Portrait"
                            fill
                            className="object-cover"
                          />
                        </a>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </motion.div>

        {/* Bio / Abstract - Middle Column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-baseline justify-between border-b-2 border-foreground pb-4 mb-8">
            <h2 className="text-4xl font-display font-normal italic text-foreground">Bio</h2>
            <span className="font-mono text-xs uppercase tracking-widest opacity-50">Abstract</span>
          </div>
          
          <div className="space-y-6 text-lg font-body leading-relaxed text-foreground/90">
            <p>
              Josh Blyskal is a leading expert at the intersection of AI and search marketing. 
              Currently <strong className="font-semibold text-accent">Leading AI Strategy & Research</strong> at <a href="https://tryprofound.com" className="hover:text-accent hover:underline decoration-1 underline-offset-4 transition-colors">Profound</a>, 
              he guides Fortune 500 companies like Ramp, Indeed, and US Bank on securing visibility in AI Answer Engines.
            </p>
            <p>
              Previously at <strong className="font-semibold">HubSpot</strong>, Josh co-founded the Marketing AI practice and built the AI Search Grader tool. 
              His background blends technology, marketing, and entrepreneurship—from founding a streetwear brand in college 
              to engineering AI automations that reached millions.
            </p>
            <p>
              Based in NYC, he is a recognized thought leader frequently sharing data-driven insights on how AI 
              is rewriting the rules of SEO and digital discovery.
            </p>
          </div>
        </motion.div>

        {/* Connect / Appendices - Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-baseline justify-between border-b-2 border-foreground pb-4 mb-8">
            <h2 className="text-4xl font-display font-normal italic text-foreground">Connect</h2>
            <span className="font-mono text-xs uppercase tracking-widest opacity-50">Appx. A</span>
          </div>

          <ul className="space-y-0 font-mono text-sm">
            <li>
              <a href="https://linkedin.com/in/joshuablyskal" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:bg-foreground/5 px-2 -mx-2 transition-colors">
                <span className="uppercase tracking-wider">LinkedIn</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/JBlyskal" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:bg-foreground/5 px-2 -mx-2 transition-colors">
                <span className="uppercase tracking-wider">Twitter / X</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="https://speakerdeck.com/joshbly" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:bg-foreground/5 px-2 -mx-2 transition-colors">
                <span className="uppercase tracking-wider">Speaker Deck</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="mailto:josh@tryprofound.com" className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:bg-foreground/5 px-2 -mx-2 transition-colors">
                <span className="uppercase tracking-wider">Email</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
