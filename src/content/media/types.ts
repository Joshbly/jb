export type MediaLink = {
  label: string;
  href: string;
};

export type AppearanceKind =
  | "conference"
  | "owned-event"
  | "panel"
  | "webinar"
  | "workshop"
  | "podcast"
  | "interview";

export type Appearance = {
  id: string;
  date: string;
  dateLabel?: string;
  status?: "completed" | "upcoming";
  title: string;
  event: string;
  kind: AppearanceKind;
  role: string;
  href: string;
  location?: string;
  summary?: string;
  recording?: string;
  slides?: string;
  research?: string;
  coSpeakers?: readonly string[];
  talkFamilyId?: string;
  featuredOnHome?: boolean;
};

export type WrittenWorkKind = "article" | "research" | "guide" | "method";

export type WrittenWork = {
  id: string;
  date: string;
  title: string;
  outlet: string;
  kind: WrittenWorkKind;
  href: string;
  summary: string;
  coauthors?: readonly string[];
  editions?: readonly MediaLink[];
  featuredOnHome?: boolean;
};

export type LinkedInPostKind =
  | "research"
  | "analysis"
  | "experiment"
  | "essay"
  | "tutorial"
  | "case-study";

export type LinkedInPost = {
  id: string;
  date: string;
  title: string;
  kind: LinkedInPostKind;
  href: string;
  relatedWorkId?: string;
};

export type PressKind = "quoted" | "research-cited";

export type PressRecord = {
  id: string;
  date: string;
  dateLabel?: string;
  title: string;
  outlet: string;
  domain: string;
  kind: PressKind;
  href: string;
  alternateLinks?: readonly MediaLink[];
  featuredOnHome?: boolean;
};

export type DeckRecord = {
  id: string;
  date: string;
  title: string;
  event: string;
  href: string;
  relatedAppearances: readonly string[];
};

export type RecordingRecord = {
  id: string;
  date: string;
  title: string;
  source: string;
  href: string;
  appearanceId: string;
};
