import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",   // 🔥 important
  images: {
    unoptimized: true, // required for static export
  },
  basePath: "/your-repo-name", // replace with repo name
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;
