import type { NextConfig } from "next";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  reactStrictMode: true,
  // Silence Next.js 16 warning about having a webpack config with no turbopack config
  turbopack: {},
  // Serve images as-is so the site needs no paid image service on Cloudflare.
  images: { unoptimized: true },
  // Allow phone access via LAN IP in dev without warnings (optional)
  allowedDevOrigins: process.env.ALLOW_DEV_ORIGIN
    ? [process.env.ALLOW_DEV_ORIGIN]
    : undefined,
};

export default nextConfig;

// Lets `next dev` use Cloudflare bindings locally.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
