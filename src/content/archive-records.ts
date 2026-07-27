import {
  type Appearance,
  appearances,
  linkedinPosts,
  pressRecords,
  writtenWorks,
} from "@/content/media";
import { formatDate } from "@/lib/time";

export const archiveFormatOptions = [
  { value: "stage", label: "Stage" },
  { value: "podcast", label: "Podcast / interview" },
  { value: "press", label: "Press" },
  { value: "writing", label: "Writing" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "recording", label: "Recording" },
  { value: "deck", label: "Deck" },
] as const;

export type ArchiveFormat = (typeof archiveFormatOptions)[number]["value"];

export const archiveTopicOptions = [
  { value: "aeo-visibility", label: "AEO & visibility" },
  { value: "platforms-models", label: "Platforms & models" },
  { value: "agents-commerce", label: "Agents & commerce" },
  { value: "marketing-systems", label: "Marketing systems" },
  { value: "company-career", label: "Company & career" },
] as const;

export type ArchiveTopic = (typeof archiveTopicOptions)[number]["value"];
export type ArchiveOwnership = "first-party" | "independent";
export type ArchiveSort = "newest" | "oldest";

export type ArchiveFilters = {
  query: string;
  format: ArchiveFormat | "";
  year: string;
  topic: ArchiveTopic | "";
  ownership: ArchiveOwnership | "";
  sort: ArchiveSort;
};

export type ArchiveRecord = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  displayTitle?: string;
  source: string;
  sourceDetail: string;
  href: string;
  formats: readonly ArchiveFormat[];
  topics: readonly ArchiveTopic[];
  ownership: ArchiveOwnership;
  actions: readonly {
    label: string;
    href: string;
    format?: Extract<ArchiveFormat, "recording" | "deck">;
  }[];
  searchText: string;
};

export const defaultArchiveFilters: ArchiveFilters = {
  query: "",
  format: "",
  year: "",
  topic: "",
  ownership: "",
  sort: "newest",
};

const topicLabels = new Map(
  archiveTopicOptions.map((topicOption) => [topicOption.value, topicOption.label]),
);
const validFormats = new Set<ArchiveFormat>(
  archiveFormatOptions.map((formatOption) => formatOption.value),
);
const validTopics = new Set<ArchiveTopic>(
  archiveTopicOptions.map((topicOption) => topicOption.value),
);
const podcastKinds = new Set(["podcast", "interview"]);
const topicRules: readonly { topic: ArchiveTopic; pattern: RegExp }[] = [
  {
    topic: "aeo-visibility",
    pattern:
      /\b(?:aeo|geo|serp|rank(?:ing|ed|s)?)\b|answer engine|ai search|generative engine|citation|cited|visibility|discoverability|blue links|referral traffic|search results|search channels|find you|large scale ai search research/i,
  },
  {
    topic: "platforms-models",
    pattern:
      /\b(?:chatgpt|claude|perplexity|openai|brave|bing|llms?|gpt-5|atlas)\b|google ai|ai companies|state of aeo 2026/i,
  },
  {
    topic: "agents-commerce",
    pattern:
      /\bagents?\b|operator|machine customer|commerce|shopping|checkout|e-?commerce|buyers?|product feed|atlas/i,
  },
  {
    topic: "marketing-systems",
    pattern:
      /marketing engineer|marketing engineering|prompt engineering|marketing prompts?|personalized marketing|marketing ai|marketers|documentation|\bdocs\b|email system|prompt practitioners/i,
  },
  {
    topic: "company-career",
    pattern:
      /founding team|founders|first employees|my job|startup|moat|profound launches|meet aim/i,
  },
];

const brightonPost =
  "https://www.linkedin.com/posts/joshua-blyskal_thats-a-wrap-on-brighton-seo-san-diego-2025-activity-7377089308924739584-VOVN";

function topicsFor(...fields: (string | undefined)[]) {
  const topicSource = fields.filter(Boolean).join(" ").replaceAll("-", " ");
  return topicRules
    .filter((topicRule) => topicRule.pattern.test(topicSource))
    .map((topicRule) => topicRule.topic);
}

function searchableText(topics: readonly ArchiveTopic[], ...fields: (string | undefined)[]) {
  return [...fields, ...topics.map((topic) => topicLabels.get(topic))]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function appearanceRecord(appearance: Appearance): ArchiveRecord {
  const primaryFormat: ArchiveFormat = podcastKinds.has(appearance.kind) ? "podcast" : "stage";
  const actions: ArchiveRecord["actions"][number][] = [];

  if (appearance.recording) {
    actions.push({ label: "Recording", href: appearance.recording, format: "recording" });
  }
  if (appearance.slides) {
    actions.push({ label: "Slides", href: appearance.slides, format: "deck" });
  }
  if (appearance.research) {
    actions.push({ label: "Research", href: appearance.research });
  }
  if (appearance.id === "2025-09-24-brightonseo-san-diego") {
    actions.push({ label: "Original post", href: brightonPost });
  }

  const topics = topicsFor(
    appearance.title,
    appearance.listTitle,
    appearance.summary,
    appearance.talkFamilyId,
    appearance.event,
  );
  const formats: ArchiveFormat[] = [primaryFormat];
  for (const archiveAction of actions) {
    if (archiveAction.format && !formats.includes(archiveAction.format)) {
      formats.push(archiveAction.format);
    }
  }

  const dateLabel = appearance.dateLabel ?? formatDate(appearance.date);
  return {
    id: `appearance-${appearance.id}`,
    date: appearance.date,
    dateLabel: appearance.status === "upcoming" ? `Upcoming · ${dateLabel}` : dateLabel,
    title: appearance.title,
    displayTitle: appearance.listTitle,
    source: appearance.event,
    sourceDetail: [appearance.role, appearance.location].filter(Boolean).join(" · "),
    href: appearance.href,
    formats,
    topics,
    ownership: appearance.kind === "owned-event" ? "first-party" : "independent",
    actions,
    searchText: searchableText(
      topics,
      appearance.title,
      appearance.listTitle,
      appearance.event,
      appearance.role,
      appearance.location,
      appearance.summary,
      appearance.coSpeakers?.join(" "),
      appearance.talkFamilyId,
    ),
  };
}

const appearanceRecords = appearances.map(appearanceRecord);
const pressArchiveRecords: ArchiveRecord[] = pressRecords.map((pressRecord) => {
  const topics = topicsFor(pressRecord.title, pressRecord.outlet);
  return {
    id: `press-${pressRecord.id}`,
    date: pressRecord.date,
    dateLabel: pressRecord.dateLabel ?? formatDate(pressRecord.date),
    title: pressRecord.title,
    displayTitle: pressRecord.listTitle,
    source: pressRecord.outlet,
    sourceDetail: pressRecord.kind === "quoted" ? "Quoted" : "Research cited",
    href: pressRecord.href,
    formats: ["press"],
    topics,
    ownership: "independent",
    actions:
      pressRecord.alternateLinks?.map((alternateLink) => ({
        label: alternateLink.label,
        href: alternateLink.href,
      })) ?? [],
    searchText: searchableText(
      topics,
      pressRecord.title,
      pressRecord.listTitle,
      pressRecord.outlet,
      pressRecord.kind,
    ),
  };
});

const writingArchiveRecords: ArchiveRecord[] = writtenWorks.map((writtenWork) => {
  const topics = topicsFor(
    writtenWork.title,
    writtenWork.summary,
    writtenWork.id,
    writtenWork.outlet,
  );
  return {
    id: `writing-${writtenWork.id}`,
    date: writtenWork.date,
    dateLabel: formatDate(writtenWork.date),
    title: writtenWork.title,
    displayTitle: writtenWork.listTitle,
    source: writtenWork.outlet,
    sourceDetail: writtenWork.kind,
    href: writtenWork.href,
    formats: ["writing"],
    topics,
    ownership:
      writtenWork.outlet === "JoshBlyskal.com" || writtenWork.outlet === "Profound"
        ? "first-party"
        : "independent",
    actions:
      writtenWork.editions?.map((edition) => ({
        label: edition.label,
        href: edition.href,
      })) ?? [],
    searchText: searchableText(
      topics,
      writtenWork.title,
      writtenWork.listTitle,
      writtenWork.outlet,
      writtenWork.kind,
      writtenWork.summary,
      writtenWork.coauthors?.join(" "),
    ),
  };
});

const linkedinArchiveRecords: ArchiveRecord[] = linkedinPosts.map((linkedinPost) => {
  const topics = topicsFor(linkedinPost.title, linkedinPost.listTitle, linkedinPost.relatedWorkId);
  return {
    id: `linkedin-${linkedinPost.id}`,
    date: linkedinPost.date,
    dateLabel: formatDate(linkedinPost.date),
    title: linkedinPost.title,
    displayTitle: linkedinPost.listTitle,
    source: "LinkedIn",
    sourceDetail: linkedinPost.kind,
    href: linkedinPost.href,
    formats: ["linkedin"],
    topics,
    ownership: "first-party",
    actions: [],
    searchText: searchableText(
      topics,
      linkedinPost.title,
      linkedinPost.listTitle,
      linkedinPost.kind,
      linkedinPost.relatedWorkId,
    ),
  };
});

export const archiveRecords: readonly ArchiveRecord[] = [
  ...appearanceRecords,
  ...pressArchiveRecords,
  ...writingArchiveRecords,
  ...linkedinArchiveRecords,
].sort(
  (firstRecord, secondRecord) =>
    secondRecord.date.localeCompare(firstRecord.date) ||
    firstRecord.title.localeCompare(secondRecord.title),
);

export const archiveYears = Array.from(
  new Set(archiveRecords.map((archiveRecord) => archiveRecord.date.slice(0, 4))),
).sort((firstYear, secondYear) => secondYear.localeCompare(firstYear));

export function parseArchiveFilters(readParam: (parameterName: string) => string | null) {
  const requestedFormat = readParam("format");
  const requestedTopic = readParam("topic");
  const requestedOwnership = readParam("source");
  const requestedYear = readParam("year");

  return {
    query: readParam("q") ?? "",
    format:
      requestedFormat && validFormats.has(requestedFormat as ArchiveFormat)
        ? (requestedFormat as ArchiveFormat)
        : "",
    year: requestedYear && archiveYears.includes(requestedYear) ? requestedYear : "",
    topic:
      requestedTopic && validTopics.has(requestedTopic as ArchiveTopic)
        ? (requestedTopic as ArchiveTopic)
        : "",
    ownership:
      requestedOwnership === "first-party" || requestedOwnership === "independent"
        ? requestedOwnership
        : "",
    sort: readParam("sort") === "oldest" ? "oldest" : "newest",
  } satisfies ArchiveFilters;
}
