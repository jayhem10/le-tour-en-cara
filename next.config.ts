import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Filet de sécurité anti-indexation en plus de la balise meta et de robots.txt.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
