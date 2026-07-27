import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/content/site";

const HERO_LINKS = [
  { href: "/research", label: "Research" },
  { href: "/speaking", label: "Speaking" },
] as const;

export function Hero() {
  const hero = site.heroImage;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <div className="group relative h-[36svh] w-full shrink-0 overflow-hidden border-b-2 border-foreground bg-black lg:h-auto lg:min-h-screen lg:w-[42%] lg:border-r-2 lg:border-b-0">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[center_35%] grayscale brightness-90 contrast-[1.2] transition-all duration-slow group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-[1.15] lg:object-center"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }}
          />
        </div>

        <div className="relative z-20 flex min-h-[64svh] w-full flex-1 items-center bg-background px-6 py-14 md:px-10 lg:min-h-screen lg:w-[58%] lg:px-12 lg:py-24 xl:px-20">
          <Reveal delay={150} className="w-full max-w-3xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground/60">
              {site.name} · AEO & GEO researcher
            </p>
            <h1 className="max-w-2xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
              I study how to make brands visible in AI search.
            </h1>
            <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-foreground/80 lg:text-xl">
              I joined{" "}
              <a
                href={site.employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-accent transition-colors hover:bg-accent hover:text-background"
              >
                {site.employer.name}
              </a>{" "}
              as its second employee and now lead AI Strategy & Research there. I compare how
              ChatGPT, Claude, Gemini, and Google AI products research products, resolve brand
              identity, and decide which brands appear in an answer.
            </p>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/65 lg:text-lg">
              I use research drawn from more than 10 billion AI citations and 1.5 billion real user
              prompts across at least eight answer engines to map the customer questions, search
              queries, product facts, and public pages that determine whether a brand appears.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
              {HERO_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 py-1 transition-colors hover:text-accent"
                >
                  <span className="h-px w-4 bg-foreground transition-colors group-hover:bg-accent" />
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
