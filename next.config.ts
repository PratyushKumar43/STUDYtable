import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/notice',
        destination: '/notice-board',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
