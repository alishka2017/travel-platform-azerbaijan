'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getCitiesSync } from '@/lib/content-new';
import { HeartButton } from '@/components/HeartButton';
import { useLanguage } from '@/context/LanguageContext';

export default function CitiesPage() {
  const cities = getCitiesSync();
  const { language } = useLanguage();

  const t = {
    en: {
      title: "Destinations in Azerbaijan",
      subtitle: "Discover the best places to visit, from ancient cities to mountain resorts",
      breadcrumb: "Destinations"
    },
    ru: {
      title: "Направления в Азербайджане",
      subtitle: "Откройте для себя лучшие места для посещения, от древних городов до горных курортов",
      breadcrumb: "Направления"
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
          <span className="text-gray-800">{text.breadcrumb}</span>
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

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={city.image}
                  alt={language === 'ru' ? city.name.ru : city.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <HeartButton 
                    item={{
                      id: city.id,
                      name: language === 'ru' ? city.name.ru : city.name.en,
                      image: city.image,
                      type: 'city' as const
                    }} 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {language === 'ru' ? city.name.ru : city.name.en}
                  </h3>
                  <p className="text-white/80 text-sm">{city.region}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📍</span>
                  <span>{city.region}</span>
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