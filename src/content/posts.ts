import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  excerpt: string;
  image: string;
};

export type Post = PostMeta & {
  Body: ComponentType;
};

// Empty until the future-of-marketing article is ready — import new posts from ./posts/ here.
const modules: readonly { meta: PostMeta; default: ComponentType }[] = [];

export const posts: readonly Post[] = modules
  .map((m) => ({ ...m.meta, Body: m.default }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug: Record<string, Post> = Object.fromEntries(posts.map((p) => [p.slug, p]));

export const latestPostDate =
  posts.length > 0
    ? new Date(Math.max(...posts.map((p) => new Date(p.date).getTime())))
    : new Date(0);
