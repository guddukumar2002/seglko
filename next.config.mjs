import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: path.resolve('./.next/cache/webpack'),
      compression: 'gzip',
    };

    config.infrastructureLogging = {
      level: 'error',
    };

    return config;
  },

  async redirects() {
    return [
      {
        source: '/fee-structure',
        destination: '/admission/fees-structure',
        permanent: true,
      },
      {
        source: '/ssitm',
        destination: 'https://ssitm.seglko.org',
        permanent: false,
      },
      {
        source: '/ssitm/:path*',
        destination: 'https://ssitm.seglko.org/:path*',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    // Rewrites removed - using subdomain instead
    return [];
  },
};

export default nextConfig;
