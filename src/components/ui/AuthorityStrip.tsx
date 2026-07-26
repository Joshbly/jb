import Image from "next/image";

const enterpriseWork = [
  { name: "Ramp", href: "https://ramp.com", domain: "ramp.com" },
  { name: "Indeed", href: "https://www.indeed.com", domain: "indeed.com" },
  { name: "U.S. Bank", href: "https://www.usbank.com", domain: "usbank.com" },
  { name: "Kaplan", href: "https://kaplan.com", domain: "kaplan.com" },
  { name: "Reddit", href: "https://www.redditinc.com", domain: "reddit.com" },
  { name: "G2", href: "https://www.g2.com", domain: "g2.com" },
] as const;

const quotedBy = [
  {
    name: "Adweek",
    href: "https://www.adweek.com/media/profound-launches-an-ai-agent-to-manage-end-to-end-marketing/",
    domain: "adweek.com",
  },
  {
    name: "The Verge",
    href: "https://www.theverge.com/ai-artificial-intelligence/841156/ai-companies-aaif-anthropic-mcp-model-context-protocol",
    domain: "theverge.com",
  },
  {
    name: "Ad Age",
    href: "https://adage.com/technology/ai/aa-chatgpt-browser-atlas-brands/",
    domain: "adage.com",
  },
] as const;

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
    <aside
      aria-label="Selected strategy work through Profound and press"
      className="mt-10 border-t border-foreground/20 pt-6"
    >
      <div>
        <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/50">
          Researched and strategized with
          <span className="mt-1 block text-foreground/35">Through Profound</span>
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          {enterpriseWork.slice(0, 5).map((organization) => (
            <OrganizationMark key={organization.name} {...organization} />
          ))}
          <span className="inline-flex items-center gap-4">
            <OrganizationMark {...enterpriseWork[5]} />
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
              + more
            </span>
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
