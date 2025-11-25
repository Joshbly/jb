"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-foreground/10 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-lg font-display font-bold tracking-tight hover:text-accent transition-colors text-foreground">
          JB.
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium font-serif italic text-foreground/80">
          <Link href="#speaking" className="hover:text-accent transition-colors relative group">
            Speaking
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#writing" className="hover:text-accent transition-colors relative group">
            Writing
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#now" className="hover:text-accent transition-colors relative group">
            Now
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
