'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/layout/Footer';
import { getRestaurantsSync } from '@/lib/content-new';
import { HeartButton } from '@/components/HeartButton';
import { useLanguage } from '@/context/LanguageContext';

export default function RestaurantsPage() {
  const restaurants = getRestaurantsSync();
  const { language } = useLanguage();

  const t = {
    en: {
      title: "Restaurants in Azerbaijan",
      subtitle: "Discover the best places to eat, from local cuisine to fine dining",
      categories: {
        all: "All",
        local: "Local Cuisine",
        fine: "Fine Dining",
        street: "Street Food",
        cafe: "Cafe",
        seafood: "Seafood"
      },
      quote: "Get Quote →"
    },
    ru: {
      title: "Рестораны Азербайджана",
      subtitle: "Откройте для себя лучшие места для еды, от местной кухни до изысканной кухни",
      categories: {
        all: "Все",
        local: "Местная кухня",
        fine: "Изысканная кухня",
        street: "Уличная еда",
        cafe: "Кафе",
        seafood: "Морепродукты"
      },
      quote: "Получить цену →"
    }
  };

  const text = t[language as 'en' | 'ru'] || t.ru;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Рестораны</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {text.title}
          </h1>
          <p className="text-gray-600">
            {text.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(text.categories).map(([key, label]) => (
            <button
              key={key}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00AA6C] hover:text-[#00AA6C] transition"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurants/${restaurant.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={language === 'ru' ? restaurant.name.ru : restaurant.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <HeartButton 
                    item={{
                      id: restaurant.id,
                      name: language === 'ru' ? restaurant.name.ru : restaurant.name.en,
                      image: restaurant.image,
                      type: 'restaurant' as const
                    }} 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">
                    {language === 'ru' ? restaurant.name.ru : restaurant.name.en}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {language === 'ru' ? restaurant.address.ru : restaurant.address.en}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#00AA6C] font-medium">
                    ★ {restaurant.rating}
                  </span>
                  <Link href="/contact" className="text-[#00AA6C] font-medium text-sm hover:underline">
                    {text.quote}
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}