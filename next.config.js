/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
