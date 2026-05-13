import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { Bio } from "@/content/bio";
import { site } from "@/content/site";
import { Portrait } from "./Portrait";

const HEADSHOT_ALT = `Professional headshot of ${site.name}, ${site.role} at ${site.employer.name}`;

const connect = [
  ...site.socials.map((s) => ({ ...s, external: true })),
  { label: "Email", href: `mailto:${site.email}`, external: false },
] as const;

const EXTERNAL_PROPS = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Now() {
  return (
    <Section id="now" layout="trio">
      <Reveal className="flex flex-col">
        <Portrait src={site.headshot} alt={HEADSHOT_ALT} />
      </Reveal>

      <Reveal>
        <SectionHeader title="Bio" eyebrow="Abstract" className="mb-8" />
        <Bio />
      </Reveal>

      <Reveal>
        <SectionHeader title="Connect" eyebrow="Appx. A" className="mb-8" />
        <ul className="font-mono text-sm">
          {connect.map(({ label, href, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external ? EXTERNAL_PROPS : {})}
                className="group flex items-center justify-between py-4 border-b border-foreground/20 hover:bg-foreground/5 px-2 -mx-2 transition-colors"
              >
                <span className="uppercase tracking-wider">{label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
