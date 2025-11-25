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
    <section id="experiments" className="py-24 border-t border-white/5">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-display mb-12 text-white/90"
      >
        Experiments
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {experiments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square bg-white/[0.02] border border-white/5 rounded-lg p-4 flex flex-col justify-between hover:bg-white/[0.05] hover:border-accent/30 transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors" />
            <div>
              <h3 className="font-medium text-sm text-white/90">{item.title}</h3>
              <p className="text-xs text-white/40 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

