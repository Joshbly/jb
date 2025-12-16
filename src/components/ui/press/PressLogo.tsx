"use client";

import { useState } from "react";

type PressLogoProps = {
  outlet: string;
  domain: string;
  useTextFallback?: boolean;
};

export function PressLogo({
  outlet,
  domain,
  useTextFallback = false,
}: PressLogoProps) {
  const [showFallback, setShowFallback] = useState(useTextFallback);

  if (showFallback) {
    return (
      <span className="font-display font-bold text-lg leading-none">
        {outlet}
      </span>
    );
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={`${outlet} logo`}
      className="h-6 w-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
      onError={() => setShowFallback(true)}
      loading="lazy"
    />
  );
}

