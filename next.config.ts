import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/barometer-exam-selector',
        destination: '/barometr-opis',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
