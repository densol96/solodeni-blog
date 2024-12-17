import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false // true will change the browser behavior when requesting localhost:3000 in my case (during the dev - it is not what I want) 
      }
    ]
  }
};

export default nextConfig;
