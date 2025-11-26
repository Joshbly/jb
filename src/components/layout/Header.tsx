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
          className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-widest"
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
              // On mobile, we force Normal blend mode because it's white-on-black.
              // On desktop, we use Difference for the split background.
              // We handle this via CSS classes + the motion style for the color transition.
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mix-blend-normal md:mix-blend-difference"
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Josh Blyskal <span className="opacity-40">/ Research</span>
            </Link>
          </motion.div>

          {/* 
             The Nav Links:
             - Mobile: Always White when transparent (because Hero is full black on mobile)
             - Desktop: Always Black (because Hero right side is white)
             - Scrolled: Always Black
          */}
          <motion.nav 
            className="flex items-center gap-4 md:gap-8"
            animate={{
              // On mobile (handled via media query in CSS normally, but for motion we need logic or CSS var)
              // Actually, simpler: Just use tailwind classes for the initial state and let motion handle the scroll transition if needed.
              // BUT: We need dynamic color switching based on scroll position AND screen size.
              
              // Since we can't easily do media queries in framer motion `animate` prop without hooks:
              // We will use Tailwind classes for the "default" state (unscrolled) and let Motion override only when needed?
              // No, Motion style overrides CSS.
              
              // Strategy: Use CSS variables or just standard Tailwind classes for the "unscrolled" state, 
              // and only use Motion for the "scrolled" transition if possible.
              
              // Let's try purely class-based approach for the color to keep it responsive.
              color: isScrolled ? "var(--foreground)" : "var(--nav-color, var(--foreground))"
            }}
          >
            {/* 
              Mobile: Text is White by default (unscrolled)
              Desktop: Text is Black by default (unscrolled)
              
              We can achieve this with a CSS variable `--nav-color` set in style prop 
              that changes based on a media query class.
            */}
            <div className="contents text-white md:text-foreground"> 
              {/* ^ This sets the "Unscrolled" color: White on Mobile, Black on Desktop */}
              
              {/* 
                 Wait, if we wrap it in a div, the `motion.nav` color animation might conflict.
                 Let's apply the classes directly to the links or the container.
                 
                 If `isScrolled` is true, we want BLACK everywhere.
                 If `isScrolled` is false:
                    Mobile: WHITE
                    Desktop: BLACK
              */}
              <div className={`flex gap-4 md:gap-8 transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white md:text-foreground'}`}>
                <Link href="#speaking" className="hover:text-accent transition-colors">
                  [ Speaking ]
                </Link>
                <Link href="#writing" className="hover:text-accent transition-colors">
                  [ Writing ]
                </Link>
                <Link href="#now" className="hover:text-accent transition-colors">
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
