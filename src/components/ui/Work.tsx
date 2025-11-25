"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Vercel Analytics",
    role: "Product Design",
    result: "Redesigned onboarding, improved activation +18% while reducing steps by 40%.",
    image: "/projects/analytics.jpg", // Placeholder
    link: "#",
  },
  {
    id: 2,
    title: "Linear Mobile",
    role: "Design Engineering",
    result: "Built the first version of the mobile sync engine and offline mode.",
    image: "/projects/linear.jpg", // Placeholder
    link: "#",
  },
  {
    id: 3,
    title: "Raycast Extensions",
    role: "Community",
    result: "Created the most popular extension for developer tools integration.",
    image: "/projects/raycast.jpg", // Placeholder
    link: "#",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-display mb-12 text-white/90"
      >
        Selected work
      </motion.h2>

      <div className="grid gap-12 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block p-6 -mx-6 rounded-2xl hover:bg-white/[0.03] transition-colors relative border border-transparent hover:border-accent/20"
          >
            <div className="space-y-4">
              <div className="aspect-video bg-white/5 rounded-lg overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
                 {/* Placeholder for image */}
                 <div className="absolute bottom-4 left-4 text-xs font-mono text-white/40 uppercase tracking-wider">
                   Project {project.id} Preview
                 </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2">
                  {project.title}
                  <span className="opacity-0 group-hover:opacity-100 text-accent transition-opacity">→</span>
                </h3>
                <p className="text-sm text-white/50 mt-1">{project.role}</p>
                <p className="text-white/80 mt-3 leading-relaxed text-sm md:text-base">
                  {project.result}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

