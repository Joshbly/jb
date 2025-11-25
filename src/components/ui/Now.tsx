"use client";

import { motion } from "framer-motion";

export function Now() {
  return (
    <section id="now" className="py-24 border-t border-foreground/10 bg-background">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display mb-8 text-foreground/90 italic font-bold">Bio</h2>
          <div className="prose prose-stone prose-lg text-foreground/70 leading-relaxed space-y-4 font-serif">
            <p>
              Josh Blyskal is a leading expert at the intersection of AI and search marketing. 
              Currently serving as <strong>Leading AI Strategy & Research</strong> at <a href="https://tryprofound.com" className="text-accent hover:underline decoration-accent/30 underline-offset-2">Profound</a>, 
              he guides Fortune 500 companies like Ramp, Indeed, and US Bank on securing visibility in AI Answer Engines.
            </p>
            <p>
              Previously at <strong>HubSpot</strong>, Josh co-founded the Marketing AI practice and built the AI Search Grader tool. 
              His background blends technology, marketing, and entrepreneurship—from founding a streetwear brand in college 
              to engineering AI automations that reached millions.
            </p>
            <p>
              Based in NYC, he is a recognized thought leader frequently sharing data-driven insights on how AI 
              is rewriting the rules of SEO and digital discovery.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-display mb-8 text-foreground/90 italic font-bold">Connect</h2>
          <ul className="space-y-6">
            <li>
              <a href="https://linkedin.com/in/joshuablyskal" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-full group-hover:bg-accent/10 border border-foreground/10 group-hover:border-accent/20 transition-all">
                  <span className="text-lg font-display italic">in</span>
                </div>
                <div>
                  <div className="font-medium font-serif">LinkedIn</div>
                  <div className="text-xs text-foreground/40 font-mono">Professional updates & research</div>
                </div>
              </a>
            </li>
            <li>
              <a href="https://x.com/JBlyskal" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-full group-hover:bg-accent/10 border border-foreground/10 group-hover:border-accent/20 transition-all">
                  <span className="text-lg font-display italic">X</span>
                </div>
                <div>
                  <div className="font-medium font-serif">Twitter / X</div>
                  <div className="text-xs text-foreground/40 font-mono">Real-time insights & community</div>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:josh@tryprofound.com" className="group flex items-center gap-4 text-foreground/80 hover:text-accent transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-foreground/5 rounded-full group-hover:bg-accent/10 border border-foreground/10 group-hover:border-accent/20 transition-all">
                  <span className="text-lg font-display italic">@</span>
                </div>
                <div>
                  <div className="font-medium font-serif">Email</div>
                  <div className="text-xs text-foreground/40 font-mono">Speaking inquiries & collaboration</div>
                </div>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
