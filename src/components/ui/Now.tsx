"use client";

import { motion } from "framer-motion";

export function Now() {
  return (
    <section id="now" className="py-32 border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-32">
        
        {/* Bio / Abstract */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Connect / Appendices */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-baseline justify-between border-b-2 border-foreground pb-4 mb-8">
            <h2 className="text-2xl font-display font-normal italic text-foreground">Connect</h2>
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
