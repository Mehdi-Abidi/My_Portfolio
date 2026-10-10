import type { NextConfig } from "next";

// GitHub Pages serves the site from /My_Portfolio, so the Pages build sets
// NEXT_PUBLIC_BASE_PATH. Locally and on Vercel it is empty and nothing changes.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Plain static files in out/, which is what GitHub Pages can host.
  output: "export",
  basePath,
  // Pages has no image server, so serve images as they are.
  images: { unoptimized: true },
  // Lets a verification build run alongside `next dev` without sharing a folder.
  // Only set when asked for: with a custom distDir the export lands there instead of out/.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
