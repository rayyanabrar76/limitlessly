/**
 * Single source of truth for the site's public URL.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel dashboard the day a custom domain
 * lands — nothing else in the codebase needs to change.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://limitlessly.vercel.app";

export const SITE_NAME = "Limitlessly";
