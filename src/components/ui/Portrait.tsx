import Image from "next/image";
import { SectionHeader } from "@/components/shared/Section";

type PortraitProps = {
  src: string;
  alt: string;
};

export function Portrait({ src, alt }: PortraitProps) {
  return (
    <>
      <div className="hidden lg:block">
        <SectionHeader title="Portrait" eyebrow="Fig. 2" className="mb-8" />
        <PortraitImage src={src} alt={alt} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <details className="lg:hidden group border-t border-foreground/20">
        <summary className="list-none cursor-pointer py-4 flex items-center justify-between [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
            Portrait
          </span>
          <span
            aria-hidden="true"
            className="font-mono text-xs transition-transform group-open:rotate-180"
          >
            ↓
          </span>
        </summary>
        <div className="mt-4 mb-8">
          <PortraitImage src={src} alt={alt} sizes="100vw" />
        </div>
      </details>
    </>
  );
}

type PortraitImageProps = {
  src: string;
  alt: string;
  sizes: string;
};

function PortraitImage({ src, alt, sizes }: PortraitImageProps) {
  return (
    <div className="relative aspect-[3/4] w-full group/img cursor-zoom-in">
      <a href={src} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </a>
      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-foreground/20 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
        View Full Res
      </div>
    </div>
  );
}
