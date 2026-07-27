import Image from "next/image";
import { pressRecords } from "@/content/media";

const enterpriseWork = [
  { name: "Ramp", href: "https://ramp.com", domain: "ramp.com" },
  { name: "Indeed", href: "https://www.indeed.com", domain: "indeed.com" },
  { name: "U.S. Bank", href: "https://www.usbank.com", domain: "usbank.com" },
  { name: "Kaplan", href: "https://kaplan.com", domain: "kaplan.com" },
  { name: "Reddit", href: "https://www.redditinc.com", domain: "reddit.com" },
  { name: "G2", href: "https://www.g2.com", domain: "g2.com" },
  { name: "MongoDB", href: "https://www.mongodb.com", domain: "mongodb.com" },
  { name: "Kalshi", href: "https://kalshi.com", domain: "kalshi.com" },
  { name: "Figma", href: "https://www.figma.com", domain: "figma.com" },
  { name: "Hatch", href: "https://www.hatch.co", domain: "hatch.co" },
  { name: "Eight Sleep", href: "https://www.eightsleep.com", domain: "eightsleep.com" },
  { name: "Golin", href: "https://golin.com", domain: "golin.com" },
] as const;

const quotedOutletOrder = ["Adweek", "The Verge", "Ad Age"];
const quotedBy = pressRecords
  .filter((record) => quotedOutletOrder.includes(record.outlet))
  .sort(
    (firstRecord, secondRecord) =>
      quotedOutletOrder.indexOf(firstRecord.outlet) -
      quotedOutletOrder.indexOf(secondRecord.outlet),
  )
  .map((record) => ({ name: record.outlet, href: record.href, domain: record.domain }));

function OrganizationMark({ name, href, domain }: { name: string; href: string; domain: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-w-0 items-center gap-2.5 py-1 text-foreground/70 transition-colors hover:text-accent"
    >
      <Image
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt=""
        width={24}
        height={24}
        unoptimized
        className="size-6 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
      />
      <span className="whitespace-nowrap font-display text-lg font-medium leading-none tracking-tight">
        {name}
      </span>
    </a>
  );
}

export function AuthorityStrip() {
  return (
    <aside aria-label="Selected work through Profound and press">
      <div>
        <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/50">
          Contributed to AEO programs for teams at Profound
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          {enterpriseWork.map((organization) => (
            <OrganizationMark key={organization.name} {...organization} />
          ))}
          <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
            + more
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-foreground/15 pt-5">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">Quoted by</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          {quotedBy.slice(0, 2).map((publication) => (
            <OrganizationMark key={publication.name} {...publication} />
          ))}
          <span className="inline-flex items-center gap-4">
            <OrganizationMark {...quotedBy[2]} />
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
              + more
            </span>
          </span>
        </div>
      </div>
    </aside>
  );
}
