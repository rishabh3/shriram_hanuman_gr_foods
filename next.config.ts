import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",   // 🔥 important
  images: {
    unoptimized: true, // required for static export
  },
  basePath: "/shriram_hanuman_gr_foods",
  assetPrefix: "/shriram_hanuman_gr_foods/"
};

export default nextConfig;
