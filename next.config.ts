import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every image is served from `public/`, so the optimiser needs no remote
    // hosts. Keeping this list empty also closes the remotePatterns denial of
    // service surface described in GHSA-9g9p-9gw9-jx7f.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75, 80, 90],
  },
};

export default nextConfig;
