import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/content/site";

const HERO_LINKS = [
  { href: "#speaking", label: "See Speaking" },
  { href: "#writing", label: "Read Selected Writing" },
] as const;

export function Hero() {
  const hero = site.heroImage;

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-full bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-foreground overflow-hidden group">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover filter grayscale contrast-[1.2] brightness-90 group-hover:contrast-[1.3] transition-all duration-slow"
            priority
          />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
          <div className="absolute bottom-6 left-6 bg-background px-3 py-1 border border-foreground z-10">
            <p className="font-mono text-xs tracking-tight uppercase">{hero.caption}</p>
          </div>
        </div>

        <div className="relative w-full lg:w-[45%] h-[50vh] lg:h-full flex flex-col justify-center px-6 md:px-8 lg:px-16 z-20 bg-background">
          <Reveal delay={150} className="max-w-lg w-full pt-8 lg:pt-0">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-hero-name font-display leading-[0.9] font-normal tracking-tight mb-3 lg:mb-4">
                {site.name}
              </h1>
              <div className="font-mono text-[10px] lg:text-sm text-foreground/60 uppercase tracking-widest">
                Leading {site.tagline}
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6 max-w-md mb-8 lg:mb-12">
              <p className="text-lg lg:text-xl font-body leading-relaxed">
                Defining how Fortune 500 brands secure visibility in the era of AI Answer Engines.
                Currently leading {site.tagline} at{" "}
                <a
                  href={site.employer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-accent hover:bg-accent hover:text-background transition-colors"
                >
                  {site.employer.name}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3 font-mono text-[10px] lg:text-xs uppercase tracking-widest pb-8 lg:pb-0">
              {HERO_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 hover:text-accent transition-colors py-1"
                >
                  <span className="w-4 h-px bg-foreground group-hover:bg-accent transition-colors" />
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
