"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD_PX = 50;

const BG = cn(
  "absolute inset-0 bg-background border-b-2 border-foreground",
  "opacity-0 transition-opacity duration-medium ease-strong",
  "group-data-[scrolled=true]/header:opacity-100",
);

const INNER = cn(
  "max-w-7xl mx-auto px-6 flex items-center justify-between w-full",
  "font-mono uppercase tracking-widest",
  "py-6 transition-[padding] duration-medium ease-strong",
  "group-data-[scrolled=true]/header:py-3",
);

const TITLE = cn(
  "shrink-0 text-header-fluid pr-4 md:pr-0",
  "text-white md:mix-blend-difference transition-colors duration-medium",
  "group-data-[scrolled=true]/header:text-foreground",
  "group-data-[scrolled=true]/header:mix-blend-normal",
);

const LINKS = cn(
  "flex gap-[clamp(4px,3vw,32px)] text-header-fluid",
  "text-white md:text-foreground transition-colors duration-medium",
  "group-data-[scrolled=true]/header:text-foreground",
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = `position:absolute;top:${SCROLL_THRESHOLD_PX}px;left:0;width:1px;height:1px;pointer-events:none`;
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { rootMargin: "0px" },
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <header data-scrolled={scrolled} className="group/header fixed top-0 left-0 right-0 z-50">
      <div className={BG} aria-hidden="true" />
      <div className="relative z-10">
        <div className={INNER}>
          <div className={TITLE}>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              {site.name}
            </Link>
          </div>
          <nav className="flex items-center justify-end shrink-0">
            <div className={LINKS}>
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-bracket hover:text-accent transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
