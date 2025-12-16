"use client";

import { useEffect } from "react";

type HeaderScriptProps = {
  targetId?: string;
  threshold?: number;
};

export function HeaderScript({
  targetId = "site-header",
  threshold = 50,
}: HeaderScriptProps) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      target.setAttribute("data-scrolled", isScrolled ? "true" : "false");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId, threshold]);

  return null;
}

