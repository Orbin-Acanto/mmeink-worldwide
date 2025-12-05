import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "avatar.iran.liara.run"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
