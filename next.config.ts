import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'softstar.s3.amazonaws.com',

    }],
    minimumCacheTTL: 0,
  }
};

export default nextConfig;
