import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: allow requests from this chat's cloud preview hostname.
  allowedDevOrigins: [
    "pv-d6f375697d18-9f35f1d1-3168-463c-b3af-3cec4f978179.style.dev",
  ],
};

export default nextConfig;
