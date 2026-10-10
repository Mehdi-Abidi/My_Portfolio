import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a verification build run alongside `next dev` without sharing a folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
