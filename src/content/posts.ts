import type { ComponentType } from "react";
import * as whatWeDontSay from "./posts/what-we-dont-say-at-conferences";

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

const modules = [whatWeDontSay];

export const posts: readonly Post[] = modules
  .map((m) => ({ ...m.meta, Body: m.default }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug: Record<string, Post> = Object.fromEntries(posts.map((p) => [p.slug, p]));

export const latestPostDate =
  posts.length > 0
    ? new Date(Math.max(...posts.map((p) => new Date(p.date).getTime())))
    : new Date();
