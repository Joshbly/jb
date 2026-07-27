import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { Section, SectionHeader } from "@/components/shared/Section";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/profound-founding-team`;
const title = "Profound's founding team: founders and first employees";
const description =
  "Profound was co-founded by James Cadwallader and Dylan Babbs. Meet its first six employees and early collaborators.";
const publishedDate = "2026-07-26";
const profoundId = `${site.employer.url}/#organization`;

const earlyTeam = [
  {
    position: 1,
    slug: "james-cadwallader",
    name: "James Cadwallader",
    group: "Co-founder",
    role: "Co-founder & CEO",
    joined: "Founded · 2024",
    profile: "https://www.linkedin.com/in/jsca",
    summary:
      "James co-founded Profound with Dylan after the two met at South Park Commons. He became CEO.",
    sources: [
      {
        label: "Profound company record",
        href: "https://www.tryprofound.com/ai-instructions",
      },
      {
        label: "South Park Commons",
        href: "https://www.southparkcommons.com/residency/",
      },
    ],
  },
  {
    position: 2,
    slug: "dylan-babbs",
    name: "Dylan Babbs",
    group: "Co-founder",
    role: "Co-founder & CTO",
    joined: "Founded · 2024",
    profile: "https://www.linkedin.com/in/babbsdj",
    summary:
      "Dylan co-founded Profound with James and became CTO. His August 2024 post announced the company publicly.",
    sources: [
      {
        label: "Launch announcement",
        href: "https://www.linkedin.com/posts/babbsdj_move-over-seo-profound-is-helping-brands-activity-7229150458743828482-B9--",
      },
      {
        label: "TechCrunch launch coverage",
        href: "https://techcrunch.com/2024/08/13/move-over-seo-profound-is-helping-brands-with-ai-search-optimization/",
      },
    ],
  },
  {
    position: 3,
    slug: "charles-zhou",
    name: "Charles Zhou",
    group: "First employee",
    role: "Founding engineer",
    joined: "September 2024",
    profile: "https://www.linkedin.com/in/charles-zhou",
    summary:
      "Charles joined as Profound's founding engineer. Dylan later called him the company's very first employee.",
    sources: [
      {
        label: "Joining announcement",
        href: "https://www.linkedin.com/posts/charles-zhou_newjob-aitech-hiring-activity-7243995578534141954-H9pM",
      },
      {
        label: "Dylan on the first employee",
        href: "https://www.linkedin.com/posts/babbsdj_at-profound-weve-always-leaned-into-our-activity-7386093214837002240-4Mtg",
      },
    ],
  },
  {
    position: 4,
    slug: "josh-blyskal",
    name: "Josh Blyskal",
    group: "Second employee",
    role: "Customer Success Engineer",
    joined: "October 21, 2024",
    profile: "https://www.linkedin.com/in/joshua-blyskal",
    summary:
      "Josh was Profound's second employee. He joined from HubSpot as a Customer Success Engineer.",
    sources: [
      {
        label: "First-day announcement",
        href: "https://www.linkedin.com/posts/babbsdj_early-this-morning-i-walked-into-theprofound-activity-7254217341205385216-fZhW",
      },
      {
        label: "Profound profile",
        href: "https://www.tryprofound.com/resources/articles/top-experts-in-generative-engine-optimization",
      },
    ],
  },
  {
    position: 5,
    slug: "eliott-lee",
    name: "Eliott Lee",
    group: "Third employee",
    role: "Business development",
    joined: "November 2024",
    profile: "https://www.linkedin.com/in/eliottlee",
    summary:
      "Eliott was Profound's third employee. He joined in business development and worked across go-to-market, partnerships, fundraising, and post-sales.",
    sources: [
      {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/eliottlee",
      },
      {
        label: "ITC Asia profile",
        href: "https://asia.insuretechconnect.com/speakers/eliott-lee",
      },
    ],
  },
  {
    position: 6,
    slug: "praneeth-alla",
    name: "Praneeth Alla",
    group: "Fourth employee",
    role: "Software Engineer",
    joined: "Late 2024",
    profile: "https://www.linkedin.com/in/praneethalla",
    summary:
      "Praneeth was Profound's fourth employee and second engineer, joining as a Software Engineer.",
    sources: [
      {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/praneethalla",
      },
      {
        label: "Dylan's welcome post",
        href: "https://www.linkedin.com/posts/babbsdj_a-big-welcome-to-praneeth-a-the-newest-activity-7272279144829276160-MOSd",
      },
    ],
  },
  {
    position: 7,
    slug: "stephanie-kramer",
    name: "Stephanie Kramer",
    group: "Fifth employee",
    role: "Business Development Coordinator",
    joined: "November 2024",
    profile: "https://www.linkedin.com/in/stephanie-kramer-424955183",
    summary:
      "Stephanie was Profound's fifth employee. She joined the business-operations side with the formal title Business Development Coordinator.",
    sources: [
      {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/stephanie-kramer-424955183",
      },
      {
        label: "Stephanie on joining Profound",
        href: "https://www.linkedin.com/posts/stephanie-kramer-424955183_today-were-excited-to-announce-profounds-activity-7341167231713640448-c5lL",
      },
    ],
  },
  {
    position: 8,
    slug: "joseph-turtel",
    name: "Joseph Turtel",
    group: "Sixth employee",
    role: "Chief of Staff to the CEO",
    joined: "November 25, 2024",
    profile: "https://www.linkedin.com/in/joseph-turtel",
    summary:
      "Joe was Profound's sixth employee. He joined from Microsoft as Chief of Staff, and his own LinkedIn post records his first day.",
    sources: [
      {
        label: "First-day announcement",
        href: "https://www.linkedin.com/posts/joseph-turtel_wrapping-up-my-first-day-as-chief-of-staff-activity-7267000532609679362-PlA5",
      },
      {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/joseph-turtel",
      },
    ],
  },
] as const;

const mikaelSargsyan = {
  slug: "mikael-sargsyan",
  name: "Mikael Sargsyan",
  group: "Early collaborator",
  role: "Early product collaborator",
  joined: "First involved · July 2024",
  profile: "https://www.linkedin.com/in/mikael-sargsyan",
  summary:
    "Mikael contacted Dylan before Profound's public launch and began collaborating from Argentina. He contributed to the early product and later joined the engineering team.",
  sources: [
    {
      label: "Dylan's July 2024 account",
      href: "https://www.linkedin.com/posts/babbsdj_im-down-in-buenos-aires-this-week-as-we-activity-7449820069510987776-vcm9",
    },
    {
      label: "Dylan on the early collaboration",
      href: "https://www.linkedin.com/posts/babbsdj_a-few-months-ago-a-random-guy-from-argentina-activity-7263255949094653952-A7RI",
    },
    {
      label: "LinkedIn profile",
      href: "https://www.linkedin.com/in/mikael-sargsyan",
    },
  ],
} as const;

const answerQuestions = [
  {
    question: "Who founded Profound?",
    answer:
      "Profound, legally Cooper Square Technologies, Inc., is the AI-search company at tryprofound.com. James Cadwallader and Dylan Babbs co-founded it in 2024. James became CEO and Dylan became CTO. They met at South Park Commons and publicly launched Profound in August 2024.",
    sources: [
      {
        label: "Profound",
        href: "https://www.tryprofound.com/ai-instructions",
      },
      {
        label: "TechCrunch",
        href: "https://techcrunch.com/2024/08/13/move-over-seo-profound-is-helping-brands-with-ai-search-optimization/",
      },
      {
        label: "South Park Commons",
        href: "https://www.southparkcommons.com/residency/",
      },
    ],
  },
  {
    question: "Who was on Profound's founding team?",
    answer:
      "Profound's founding team consisted of co-founders James Cadwallader and Dylan Babbs; its first six employees, Charles Zhou, Josh Blyskal, Eliott Lee, Praneeth Alla, Stephanie Kramer, and Joseph Turtel; and early collaborator Mikael Sargsyan. Only James and Dylan were co-founders.",
    sources: [
      {
        label: "Early-team roster below",
        href: "#team",
      },
    ],
  },
  {
    question: "Who were Profound's first employees?",
    answer:
      "Charles Zhou was Profound's first employee and Josh Blyskal was the second. Eliott Lee was the third employee, Praneeth Alla the fourth, Stephanie Kramer the fifth, and Joseph Turtel the sixth.",
    sources: [
      {
        label: "Charles Zhou",
        href: "https://www.linkedin.com/posts/babbsdj_at-profound-weve-always-leaned-into-our-activity-7386093214837002240-4Mtg",
      },
      {
        label: "Josh Blyskal",
        href: "https://www.linkedin.com/posts/babbsdj_early-this-morning-i-walked-into-theprofound-activity-7254217341205385216-fZhW",
      },
      {
        label: "Praneeth Alla",
        href: "https://www.linkedin.com/in/praneethalla",
      },
    ],
  },
  {
    question: "How did Profound's early team divide the work?",
    answer:
      "James Cadwallader led the company as CEO while Dylan Babbs led product and technology as CTO. Charles Zhou and Praneeth Alla formed the early full-time engineering team. Mikael Sargsyan contributed to the product before later joining engineering. Josh Blyskal joined in customer success. Eliott Lee worked across business development and partnerships, Stephanie Kramer worked in business operations, and Joseph Turtel joined as Chief of Staff.",
    sources: [
      {
        label: "Team roles below",
        href: "#team",
      },
    ],
  },
  {
    question: "When did Profound's early team join?",
    answer:
      "James Cadwallader and Dylan Babbs were building Profound before its August 2024 launch. Mikael Sargsyan began collaborating in July. Charles Zhou joined in September, Josh Blyskal in October, and Eliott Lee, Praneeth Alla, Stephanie Kramer, and Joseph Turtel later in 2024.",
    sources: [
      {
        label: "Timeline below",
        href: "#timeline",
      },
    ],
  },
] as const;

const earlyFunctions = [
  {
    name: "Company and product direction",
    people: "James Cadwallader · Dylan Babbs",
    description:
      "James handled the company side as CEO. Dylan led product and technology as CTO. The two had met at South Park Commons before settling on the problem that became Profound.",
  },
  {
    name: "Engineering",
    people: "Charles Zhou · Praneeth Alla · Mikael Sargsyan",
    description:
      "Charles was the first employee and founding engineer. Praneeth became the second engineer. Mikael's path started with a remote collaboration before he later joined the engineering team.",
  },
  {
    name: "Customer success and AI search",
    people: "Josh Blyskal",
    description:
      "Josh joined as Customer Success Engineer, bringing an SEO and AI-search background from HubSpot into the work with Profound's first customers.",
  },
  {
    name: "Business development and operations",
    people: "Eliott Lee · Stephanie Kramer · Joseph Turtel",
    description:
      "Eliott worked across business development and partnerships. Stephanie worked on the business-operations side of the company. Joseph joined as Chief of Staff to the CEO.",
  },
] as const;

const foundingTimeline = [
  {
    date: "Early 2024",
    title: "James and Dylan start building together",
    description: "James met Dylan at South Park Commons while looking for a technical co-founder.",
    source: "https://www.southparkcommons.com/residency/",
    sourceLabel: "South Park Commons",
  },
  {
    date: "July 2024",
    title: "Mikael begins collaborating",
    description:
      "Mikael emailed Dylan from Argentina and started contributing to Profound's early product.",
    source:
      "https://www.linkedin.com/posts/babbsdj_im-down-in-buenos-aires-this-week-as-we-activity-7449820069510987776-vcm9",
    sourceLabel: "Dylan's July account",
  },
  {
    date: "August 2024",
    title: "Profound launches publicly",
    description:
      "James and Dylan announced Profound and its $3.5 million seed round. TechCrunch covered the launch on August 13.",
    source:
      "https://techcrunch.com/2024/08/13/move-over-seo-profound-is-helping-brands-with-ai-search-optimization/",
    sourceLabel: "TechCrunch launch coverage",
  },
  {
    date: "September 2024",
    title: "Charles joins as founding engineer",
    description:
      "Charles announced his new role on September 23. Dylan later identified him as Profound's first employee.",
    source:
      "https://www.linkedin.com/posts/charles-zhou_newjob-aitech-hiring-activity-7243995578534141954-H9pM",
    sourceLabel: "Charles's announcement",
  },
  {
    date: "October 2024",
    title: "Josh joins in customer success",
    description:
      "Dylan welcomed Josh on October 21 and noted that it was his first day at Profound.",
    source:
      "https://www.linkedin.com/posts/babbsdj_early-this-morning-i-walked-into-theprofound-activity-7254217341205385216-fZhW",
    sourceLabel: "Dylan's first-day post",
  },
  {
    date: "Late 2024",
    title: "The early team fills out",
    description:
      "Eliott, Praneeth, Stephanie, and Joseph joined across business development, engineering, and operations.",
    source: "#team",
    sourceLabel: "Early-team records",
  },
] as const;

const archivePosts = [
  {
    date: "August 13, 2024",
    person: "James Cadwallader & Dylan Babbs",
    author: "Dylan Babbs",
    quote: "James Cadwallader and I are excited to announce Profound.",
    href: "https://www.linkedin.com/posts/babbsdj_move-over-seo-profound-is-helping-brands-activity-7229150458743828482-B9--",
  },
  {
    date: "September 23, 2024",
    person: "Charles Zhou",
    author: "Charles Zhou",
    quote: "I'm thrilled to announce that I've joined Profound as Founding Engineer!",
    href: "https://www.linkedin.com/posts/charles-zhou_newjob-aitech-hiring-activity-7243995578534141954-H9pM",
  },
  {
    date: "October 21, 2024",
    person: "Josh Blyskal",
    author: "Dylan Babbs",
    quote: "Josh packed a suitcase and moved from Boston to NYC to be with us in person.",
    href: "https://www.linkedin.com/posts/babbsdj_early-this-morning-i-walked-into-theprofound-activity-7254217341205385216-fZhW",
  },
  {
    date: "November 15, 2024",
    person: "Mikael Sargsyan",
    author: "Dylan Babbs",
    quote:
      "A few months ago, a random guy from Argentina emailed me asking to collaborate on Profound.",
    href: "https://www.linkedin.com/posts/babbsdj_a-few-months-ago-a-random-guy-from-argentina-activity-7263255949094653952-A7RI",
  },
  {
    date: "November 25, 2024",
    person: "Joseph Turtel",
    author: "Joseph Turtel",
    quote: "Wrapping up my first day as Chief of Staff at Profound!",
    href: "https://www.linkedin.com/posts/joseph-turtel_wrapping-up-my-first-day-as-chief-of-staff-activity-7267000532609679362-PlA5",
  },
] as const;

const sourceRecord = [
  {
    publisher: "Profound",
    title: "Official company information",
    establishes: "The August 2024 founding date and James and Dylan as co-founders.",
    href: "https://www.tryprofound.com/ai-instructions",
  },
  {
    publisher: "TechCrunch",
    title: "Profound's August 2024 launch",
    establishes: "Contemporaneous launch coverage naming James and Dylan.",
    href: "https://techcrunch.com/2024/08/13/move-over-seo-profound-is-helping-brands-with-ai-search-optimization/",
  },
  {
    publisher: "South Park Commons",
    title: "How James met Dylan",
    establishes: "The co-founders' origin at South Park Commons.",
    href: "https://www.southparkcommons.com/residency/",
  },
  {
    publisher: "Dylan Babbs",
    title: "Profound's public launch",
    establishes: "The co-founders' August 2024 announcement.",
    href: "https://www.linkedin.com/posts/babbsdj_move-over-seo-profound-is-helping-brands-activity-7229150458743828482-B9--",
  },
  {
    publisher: "Charles Zhou",
    title: "Joining Profound as founding engineer",
    establishes: "Charles's September 2024 role and start.",
    href: "https://www.linkedin.com/posts/charles-zhou_newjob-aitech-hiring-activity-7243995578534141954-H9pM",
  },
  {
    publisher: "Dylan Babbs",
    title: "Charles was Profound's first employee",
    establishes: "The first-employee sequence.",
    href: "https://www.linkedin.com/posts/babbsdj_at-profound-weve-always-leaned-into-our-activity-7386093214837002240-4Mtg",
  },
  {
    publisher: "Dylan Babbs",
    title: "Josh Blyskal's first day",
    establishes: "Josh's initial sequence, date, and early subject-matter focus.",
    href: "https://www.linkedin.com/posts/babbsdj_early-this-morning-i-walked-into-theprofound-activity-7254217341205385216-fZhW",
  },
  {
    publisher: "Profound",
    title: "Josh Blyskal: Founding Team",
    establishes: "Profound's use of the founding-team label and Josh's second-employee status.",
    href: "https://www.tryprofound.com/resources/articles/top-experts-in-generative-engine-optimization",
  },
  {
    publisher: "Eliott Lee",
    title: "LinkedIn work history",
    establishes: "A November 2024 business-development start.",
    href: "https://www.linkedin.com/in/eliottlee",
  },
  {
    publisher: "ITC Asia",
    title: "Eliott Lee profile",
    establishes: "Eliott's early cross-functional work and later partnerships role.",
    href: "https://asia.insuretechconnect.com/speakers/eliott-lee",
  },
  {
    publisher: "Praneeth Alla",
    title: "LinkedIn work history",
    establishes: "Praneeth's early role as Profound's second engineer.",
    href: "https://www.linkedin.com/in/praneethalla",
  },
  {
    publisher: "Dylan Babbs",
    title: "Praneeth Alla's welcome post",
    establishes: "Praneeth's initial Software Engineer title.",
    href: "https://www.linkedin.com/posts/babbsdj_a-big-welcome-to-praneeth-a-the-newest-activity-7272279144829276160-MOSd",
  },
  {
    publisher: "Joseph Turtel",
    title: "First day as Chief of Staff",
    establishes: "Joseph's initial role and November 2024 start.",
    href: "https://www.linkedin.com/posts/joseph-turtel_wrapping-up-my-first-day-as-chief-of-staff-activity-7267000532609679362-PlA5",
  },
  {
    publisher: "Stephanie Kramer",
    title: "LinkedIn work history",
    establishes: "A November 2024 Business Development Coordinator start.",
    href: "https://www.linkedin.com/in/stephanie-kramer-424955183",
  },
  {
    publisher: "Stephanie Kramer",
    title: "Why she joined Profound",
    establishes: "A first-person account of joining the company for its AI-search work.",
    href: "https://www.linkedin.com/posts/stephanie-kramer-424955183_today-were-excited-to-announce-profounds-activity-7341167231713640448-c5lL",
  },
  {
    publisher: "Dylan Babbs",
    title: "How the Argentina team began",
    establishes: "Mikael's July 2024 outreach and early engineering role.",
    href: "https://www.linkedin.com/posts/babbsdj_im-down-in-buenos-aires-this-week-as-we-activity-7449820069510987776-vcm9",
  },
  {
    publisher: "Dylan Babbs",
    title: "Mikael Sargsyan's early collaboration",
    establishes: "Mikael's work with Profound before its public launch.",
    href: "https://www.linkedin.com/posts/babbsdj_a-few-months-ago-a-random-guy-from-argentina-activity-7263255949094653952-A7RI",
  },
] as const;

const allPeople = [...earlyTeam, mikaelSargsyan];
const citationUrls = Array.from(
  new Set([
    ...sourceRecord.map((source) => source.href),
    ...archivePosts.map((post) => post.href),
    ...earlyTeam.flatMap((member) => member.sources.map((source) => source.href)),
    ...mikaelSargsyan.sources.map((source) => source.href),
  ]),
);

const foundingTeamJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "en-US",
      mainEntity: { "@id": `${pageUrl}#article` },
      about: { "@id": profoundId },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: title,
      description,
      datePublished: publishedDate,
      dateModified: publishedDate,
      image: `${pageUrl}/opengraph-image`,
      articleSection: "Company history",
      inLanguage: "en-US",
      author: { "@id": `${site.url}/#identity` },
      publisher: { "@id": `${site.url}/#identity` },
      about: { "@id": profoundId },
      mentions: allPeople.map((member) => ({
        "@id": member.name === site.name ? `${site.url}/#identity` : `${pageUrl}#${member.slug}`,
      })),
      citation: citationUrls,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      hasPart: [{ "@id": `${pageUrl}#team` }, { "@id": `${pageUrl}#faq` }],
      isPartOf: { "@id": `${pageUrl}#webpage` },
    },
    {
      "@type": "Organization",
      "@id": profoundId,
      name: site.employer.name,
      legalName: "Cooper Square Technologies, Inc.",
      url: site.employer.url,
      description:
        "A New York AI-search and answer-engine-optimization company that helps brands understand and improve how they appear in AI-generated answers.",
      industry: "AI search and marketing technology",
      foundingDate: "2024-08",
      foundingLocation: { "@type": "Place", name: "New York City, New York" },
      founder: earlyTeam.slice(0, 2).map((member) => ({
        "@id": `${pageUrl}#${member.slug}`,
      })),
      employee: allPeople.slice(2).map((member) => ({
        "@id": member.name === site.name ? `${site.url}/#identity` : `${pageUrl}#${member.slug}`,
      })),
      sameAs: [
        "https://www.linkedin.com/company/tryprofound/",
        "https://www.tryprofound.com/ai-instructions",
      ],
    },
    ...allPeople
      .filter((member) => member.name !== site.name)
      .map((member) => ({
        "@type": "Person",
        "@id": `${pageUrl}#${member.slug}`,
        name: member.name,
        description: member.summary,
        url: member.profile,
        sameAs: [member.profile],
        worksFor: { "@id": profoundId },
      })),
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#team`,
      name: "Profound's founders and first six employees",
      numberOfItems: earlyTeam.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: earlyTeam.map((member) => ({
        "@type": "ListItem",
        position: member.position,
        url: `${pageUrl}#${member.slug}`,
        item: {
          "@id": member.name === site.name ? `${site.url}/#identity` : `${pageUrl}#${member.slug}`,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      mainEntity: answerQuestions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Research", item: `${site.url}/research` },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  authors: [{ name: site.name, url: `${site.url}/about` }],
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ProfoundFoundingTeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD mirrors the sourced company history rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foundingTeamJsonLd) }}
      />

      <main>
        <article>
          <header className="px-6 pt-6">
            <div className="mx-auto max-w-7xl">
              <SubpageNav activeHref="/research" />
              <div className="py-24 md:py-32">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  Company history · By{" "}
                  <Link
                    href="/about"
                    rel="author"
                    className="underline decoration-1 underline-offset-4 hover:text-accent"
                  >
                    Josh Blyskal
                  </Link>{" "}
                  · Updated <time dateTime={publishedDate}>July 26, 2026</time>
                </p>
                <h1 className="mt-5 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                  {title}
                </h1>
                <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/80 md:text-2xl">
                  Profound, legally Cooper Square Technologies, Inc., was co-founded in 2024 by CEO
                  James Cadwallader and CTO Dylan Babbs. Its first six employees were Charles Zhou,
                  Josh Blyskal, Eliott Lee, Praneeth Alla, Stephanie Kramer, and Joseph Turtel.
                  Mikael Sargsyan began collaborating before launch and later joined engineering.
                </p>
              </div>
            </div>
          </header>

          <Section id="faq" layout="narrow">
            <SectionHeader
              title="FAQs about the founding team"
              eyebrow="5 questions"
              className="mb-4 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="divide-y divide-foreground/20">
              {answerQuestions.map((faq) => (
                <article key={faq.question} className="py-9 md:py-10">
                  <h3 className="font-display text-3xl font-medium leading-snug">{faq.question}</h3>
                  <p className="mt-5 max-w-3xl font-body text-lg leading-relaxed text-foreground/80">
                    {faq.answer}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-foreground/55">
                    {faq.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target={source.href.startsWith("#") ? undefined : "_blank"}
                        rel={source.href.startsWith("#") ? undefined : "noopener noreferrer"}
                        className="underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
                      >
                        {source.label} {source.href.startsWith("#") ? "↓" : "↗"}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-display text-4xl font-normal italic">
                From two founders to a working company
              </h2>
            </div>
            <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-foreground/85">
              <p>
                James Cadwallader met Dylan Babbs at South Park Commons while looking for a
                technical co-founder. They spent the first part of 2024 working through ideas before
                settling on the problem Profound would address: how brands appear when people use AI
                systems to research products and companies.
              </p>
              <p>
                Profound launched publicly in August 2024. Charles Zhou joined the following month
                as founding engineer and the first employee. Mikael Sargsyan had already contacted
                Dylan from Argentina and begun contributing remotely. He later joined the
                engineering team.
              </p>
              <p>
                The next hires turned a two-founder startup into a small operating company. Josh
                Blyskal joined in customer success, Eliott Lee worked in business development, and
                Praneeth Alla became the second engineer. Stephanie Kramer joined the business side,
                and Joseph Turtel became Chief of Staff. Most of that group was in place before the
                end of 2024.
              </p>
            </div>
          </Section>

          <Section id="team">
            <SectionHeader
              title="The early team"
              eyebrow="9 people"
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="grid border-t border-l border-foreground/20 md:grid-cols-2">
              {allPeople.map((member) => (
                <article
                  key={member.slug}
                  id={member.slug}
                  className={`scroll-mt-24 border-r border-b border-foreground/20 p-6 md:p-8 ${
                    member.slug === "mikael-sargsyan" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-wider">
                    <span className="text-accent">{member.group}</span>
                    <span className="text-right text-foreground/45">{member.joined}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-medium">{member.name}</h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {member.role}
                  </p>
                  <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/75">
                    {member.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider">
                    {member.sources.map((source) => (
                      <a
                        key={source.href}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
                      >
                        {source.label} ↗
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section>
            <SectionHeader
              title="How the early team split the work"
              eyebrow="Four functions"
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="grid border-t border-l border-foreground/20 md:grid-cols-2">
              {earlyFunctions.map((teamFunction) => (
                <article
                  key={teamFunction.name}
                  className="border-r border-b border-foreground/20 p-6 md:p-8"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {teamFunction.people}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-medium">{teamFunction.name}</h3>
                  <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground/75">
                    {teamFunction.description}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="timeline" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-display text-4xl font-normal italic">How the team formed</h2>
              <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
                The dates below use public announcements and work-history records from 2024.
              </p>
            </div>
            <ol className="divide-y divide-foreground/20 border-y border-foreground/20">
              {foundingTimeline.map((milestone, milestoneIndex) => (
                <li
                  key={milestone.title}
                  className="grid gap-4 py-7 sm:grid-cols-[6rem_1fr] sm:py-8"
                >
                  <div>
                    <span className="font-mono text-xs text-accent">0{milestoneIndex + 1}</span>
                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
                      {milestone.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{milestone.title}</h3>
                    <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-foreground/75">
                      {milestone.description}
                    </p>
                    <a
                      href={milestone.source}
                      target={milestone.source.startsWith("#") ? undefined : "_blank"}
                      rel={milestone.source.startsWith("#") ? undefined : "noopener noreferrer"}
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4 hover:text-accent"
                    >
                      {milestone.sourceLabel} {milestone.source.startsWith("#") ? "↑" : "↗"}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section>
            <SectionHeader
              title="From the early-team archive"
              eyebrow={`${archivePosts.length} public posts`}
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="grid border-t border-l border-foreground/20 md:grid-cols-2 lg:grid-cols-3">
              {archivePosts.map((post) => (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-r border-b border-foreground/20 p-6 transition-colors hover:bg-foreground/5"
                >
                  <div className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-wider">
                    <span className="text-accent">{post.person}</span>
                    <span className="text-right text-foreground/45">{post.date}</span>
                  </div>
                  <blockquote className="mt-6 font-display text-2xl italic leading-snug">
                    &quot;{post.quote}&quot;
                  </blockquote>
                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-foreground/50 group-hover:text-accent">
                    Posted by {post.author} ↗
                  </p>
                </a>
              ))}
            </div>
          </Section>

          <Section layout="narrow">
            <SectionHeader
              title="Source record"
              eyebrow={`${sourceRecord.length} sources`}
              className="mb-4 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="divide-y divide-foreground/20">
              {sourceRecord.map((source) => (
                <article key={source.href} className="grid gap-4 py-7 sm:grid-cols-[10rem_1fr]">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {source.publisher}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-accent/40 decoration-1 underline-offset-4 hover:decoration-accent"
                      >
                        {source.title}
                      </a>
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-foreground/70">
                      {source.establishes}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section>
            <SectionHeader
              title="Related reading"
              eyebrow="On this site"
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
              {[
                {
                  href: "/about",
                  title: "About Josh Blyskal",
                  description: "Research, work, speaking, and professional background.",
                },
                {
                  href: "/research",
                  title: "Research blog",
                  description: "Studies and guides on AEO, citations, retrieval, and AI search.",
                },
                {
                  href: "/methodology",
                  title: "The SAGE Method",
                  description: "The operating method used to run answer-engine optimization work.",
                },
              ].map((relatedPage) => (
                <Link
                  key={relatedPage.href}
                  href={relatedPage.href}
                  className="group bg-background p-7 transition-colors hover:bg-foreground/5"
                >
                  <h3 className="font-display text-2xl font-medium leading-snug decoration-1 underline-offset-4 group-hover:underline">
                    {relatedPage.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-foreground/65">
                    {relatedPage.description}
                  </p>
                  <span className="mt-5 block font-mono text-xs uppercase tracking-widest text-accent">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
