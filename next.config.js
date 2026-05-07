/** @type {import('next').NextConfig} */
const nextConfig = {
  // Для Netlify используем стандартную сборку Next.js (без export)
  trailingSlash: true,
  
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
