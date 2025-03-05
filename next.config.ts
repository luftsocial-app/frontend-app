import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      { hostname: "img.clerk.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;
