import Image from "next/image";

type MediaPhotoBreakProps = {
  src: string;
  alt: string;
  kicker: string;
  caption: string;
  sourceHref: string;
  sourceLabel: string;
  layout?: "wide" | "split" | "split-reverse";
  priority?: boolean;
};

export function MediaPhotoBreak({
  src,
  alt,
  kicker,
  caption,
  sourceHref,
  sourceLabel,
  layout = "split",
  priority = false,
}: MediaPhotoBreakProps) {
  const photo = (
    <a
      href={sourceHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-4/3 overflow-hidden bg-foreground md:aspect-video"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={layout === "wide" ? "100vw" : "(min-width: 768px) 66vw, 100vw"}
        className="object-cover grayscale contrast-110 transition-all duration-500 group-hover:grayscale-0"
        priority={priority}
      />
    </a>
  );

  const credit = (
    <figcaption className="flex flex-col justify-between gap-6 border-foreground/20 py-5 md:px-6 md:py-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{kicker}</p>
        <p className="mt-4 max-w-md font-display text-2xl font-medium italic leading-snug">
          {caption}
        </p>
      </div>
      <a
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit font-mono text-xs uppercase tracking-wider underline decoration-dotted decoration-1 underline-offset-4 transition-colors hover:text-accent"
      >
        {sourceLabel}
      </a>
    </figcaption>
  );

  return (
    <section className="border-t-2 border-foreground bg-background py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        {layout === "wide" ? (
          <figure>
            {photo}
            <div className="border-b border-foreground/20 md:grid md:grid-cols-[1fr_2fr]">
              {credit}
            </div>
          </figure>
        ) : (
          <figure
            className={`border-b border-foreground/20 md:grid ${
              layout === "split-reverse" ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-[2fr_1fr]"
            }`}
          >
            {layout === "split-reverse" ? (
              <>
                {credit}
                {photo}
              </>
            ) : (
              <>
                {photo}
                {credit}
              </>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
