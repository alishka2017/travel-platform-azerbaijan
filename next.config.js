/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем output: 'export', так как используем ISR и статическую генерацию
  // output: 'export', 
  
  trailingSlash: true,
  
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений Next.js (используем Sanity Image URL)
    domains: ['cdn.sanity.io'], // Разрешаем домен для картинок Sanity
  },
  
  // Настройки для Netlify (если требуется)
  experimental: {
    // Включаем статическую генерацию для страниц
  },
};

module.exports = nextConfig;
