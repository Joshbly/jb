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
          className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono uppercase tracking-widest w-full"
          initial={{ paddingBlock: "24px" }}
          animate={{ paddingBlock: isScrolled ? "12px" : "24px" }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* 
             The Title:
             - Mobile: Always White when transparent (because Hero is full black on mobile)
             - Desktop: Difference blend (because Hero is split)
             - Scrolled: Always Black
          */}
          <motion.div
            animate={{ 
              color: isScrolled ? "var(--foreground)" : "#FFFFFF",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mix-blend-normal md:mix-blend-difference shrink-0 text-[clamp(6px,2.5vw,12px)] pr-4 md:pr-0"
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Josh Blyskal <span className="opacity-40 hidden sm:inline">/ Research</span>
            </Link>
          </motion.div>

          {/* 
             The Nav Links:
             Using container queries logic (via flex-wrap/basis) or just simpler clamp spacing.
          */}
          <motion.nav 
            className="flex items-center justify-end shrink-0"
            animate={{
              color: isScrolled ? "var(--foreground)" : "var(--nav-color, var(--foreground))"
            }}
          >
            <div className="contents text-white md:text-foreground"> 
              <div className={`flex gap-[clamp(4px,3vw,32px)] transition-colors duration-300 text-[clamp(6px,2.5vw,12px)] ${isScrolled ? 'text-foreground' : 'text-white md:text-foreground'}`}>
                <Link href="#speaking" className="hover:text-accent transition-colors whitespace-nowrap">
                  [ Speaking ]
                </Link>
                <Link href="#writing" className="hover:text-accent transition-colors whitespace-nowrap">
                  [ Writing ]
                </Link>
                <Link href="#now" className="hover:text-accent transition-colors whitespace-nowrap">
                  [ Bio ]
                </Link>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      </div>
    </header>
  );
}
