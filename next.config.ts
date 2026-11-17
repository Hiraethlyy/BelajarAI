import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: allow requests from this chat's cloud preview hostname.
  allowedDevOrigins: ["pv-d6f375697d18-9e0a99df-0c08-4c21-bd2c-9d8b87c64321.style.dev"],
};

export default nextConfig;
