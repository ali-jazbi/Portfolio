import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const base = siteUrl;
  return [
    "/",
    "/work",
    ...projects
      .filter((project) => project.caseStudy)
      .map((project) => `/work/${project.slug}`),
    "/about",
    "/contact",
  ].map((path) => ({ url: new URL(path, base).href }));
}
