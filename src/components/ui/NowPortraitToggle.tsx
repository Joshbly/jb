"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type NowPortraitToggleProps = {
  imageSrc: string;
  imageAlt: string;
};

export function NowPortraitToggle({
  imageSrc,
  imageAlt,
}: NowPortraitToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden border-t border-foreground/20">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-4 flex items-center justify-between group"
      >
        <span className="font-mono text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
          {isOpen ? "Hide Portrait" : "View Portrait"}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="overflow-hidden">
          <div className="relative aspect-[3/4] w-full mb-8">
            <a href={imageSrc} target="_blank" rel="noopener noreferrer">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

