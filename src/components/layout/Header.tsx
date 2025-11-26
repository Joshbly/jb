"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background Layer */}
      <motion.div 
        className="absolute inset-0 bg-background border-b-2 border-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      />

      <div className="relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-xs uppercase tracking-widest"
          initial={{ paddingBlock: "24px" }}
          animate={{ paddingBlock: isScrolled ? "12px" : "24px" }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* 
             The Title:
             mix-blend-difference text-white DOES effectively turn black when overlaid on a light background.
             
             Explanation:
             - Difference blend mode: | Layer Color - Background Color | = Result Color
             - Text Color (Layer) is WHITE (255, 255, 255).
             
             Scenario 1: Over Black Hero Image (0, 0, 0)
             | 255 - 0 | = 255 (WHITE) -> Result is White Text. CORRECT.
             
             Scenario 2: Over Paper Background (approx 240, 240, 240)
             | 255 - 240 | = 15 (Very Dark Grey) -> Result is Black-ish Text. CORRECT.
             
             So why does the user think it's not turning black?
             Maybe the z-index of the text is somehow below the background layer?
             No, text is in "relative z-10" and background is "absolute inset-0".
             
             Maybe "text-white" isn't being applied correctly?
             Or maybe the user wants PURE black, not "difference black".
             
             If we remove mix-blend-difference when scrolled, we can force pure black.
          */}
          <motion.div
            animate={{ 
              color: isScrolled ? "var(--foreground)" : "#FFFFFF",
              mixBlendMode: isScrolled ? "normal" : "difference"
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Josh Blyskal <span className="opacity-40">/ Research</span>
            </Link>
          </motion.div>

          <nav className="flex items-center gap-8 text-foreground">
            <Link href="#speaking" className="hover:text-accent transition-colors">
              [ Speaking ]
            </Link>
            <Link href="#writing" className="hover:text-accent transition-colors">
              [ Writing ]
            </Link>
            <Link href="#now" className="hover:text-accent transition-colors">
              [ Bio ]
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
