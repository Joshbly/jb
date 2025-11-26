"use client";

import { motion } from "framer-motion";

const experiments = [
  { title: "Kinetic Type", desc: "Variable font interaction" },
  { title: "WebGL Fluid", desc: "Stable fluids shader" },
  { title: "Audio Vis", desc: "Frequency analysis" },
  { title: "Procedural Gen", desc: "City map generator" },
  { title: "Cursor Follow", desc: "Custom hook logic" },
];

export function Experiments() {
  return (
    <section id="experiments" className="py-32 border-t-2 border-foreground bg-background">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-6xl font-display font-black uppercase tracking-tighter mb-16 text-foreground"
      >
        Experiments
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 border-l-2 border-t-2 border-foreground">
        {experiments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square bg-background border-r-2 border-b-2 border-foreground p-6 flex flex-col justify-between hover:bg-foreground hover:text-background transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 bg-foreground group-hover:bg-background transition-colors" />
            <div>
              <h3 className="font-mono font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h3>
              <p className="text-xs font-mono opacity-60">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
