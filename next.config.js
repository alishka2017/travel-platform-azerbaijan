/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Netlify
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
