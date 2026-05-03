/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Netlify
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverExternalPackages: ['fs', 'path'],
  },
};

module.exports = nextConfig;
