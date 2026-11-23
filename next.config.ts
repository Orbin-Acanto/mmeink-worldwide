import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

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
  allowedDevOrigins: ["172.31.160.1", "http://localhost:3000"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      // Keep the development copy out of search until the site launches on www.mmeink.com.
      {
        source: "/:path*",
        has: [{ type: "host", value: "development.mmeink.com" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default withBotId(nextConfig);
