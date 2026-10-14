import type { Metadata } from "next";

// No deployment domain is assumed. Set this once the real domain is known.
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl) : null;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | Ali Jazbi` },
    description,
    ...(siteUrl
      ? { alternates: { canonical: new URL(path, siteUrl).href } }
      : {}),
    openGraph: {
      title: `${title} | Ali Jazbi`,
      description,
      type: "website",
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ali Jazbi`,
      description,
    },
  };
}
