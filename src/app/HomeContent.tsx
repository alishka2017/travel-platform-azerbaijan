'use client';

import Link from 'next/link';
import { HeartButton } from '@/components/HeartButton';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { City, Tour } from '@/types/content';
import type { GroupedTours } from '@/lib/content-new';

interface HomeContentProps {
  cities: City[];
  tours: GroupedTours;
}

export default function HomeContent({ cities, tours }: HomeContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useLanguage(); // Use language from context

  // Get first 8 cities and tours
  const featuredCities = cities.slice(0, 8);
  const featuredTours = [
    ...tours['city-tours'],
    ...tours['day-trips']
  ].slice(0, 8);

  const t = {
    en: {
      heroTitle1: "Plan your perfect trip to",
      heroTitle2: "Azerbaijan",
      heroDesc: "Discover hotels, experiences, and restaurants loved by travelers worldwide",
      searchPlaceholder: "Where to? (e.g., Baku, Sheki, Gabala)",
      searchBtn: "Search",
      popularDestinations: "Popular Destinations",
      viewAllDestinations: "View all destinations →",
      thingsToDo: "Things to Do in Azerbaijan",
      viewAllActivities: "View all activities →",
      getQuote: "Get Quote →",
      readyToExplore: "Ready to explore Azerbaijan?",
      getFreeQuote: "Get a Free Quote"
    },
    ru: {
      heroTitle1: "Спланируйте идеальную поездку в",
      heroTitle2: "Азербайджан",
      heroDesc: "Откройте для себя отели, впечатления и рестораны, полюбившиеся путешественникам по всему миру",
      searchPlaceholder: "Куда? (например, Баку, Шеки, Габала)",
      searchBtn: "Поиск",
      popularDestinations: "Популярные направления",
      viewAllDestinations: "Смотреть все направления →",
      thingsToDo: "Что делать в Азербайджане",
      viewAllActivities: "Смотреть все активности →",
      getQuote: "Получить цену →",
      readyToExplore: "Готовы исследовать Азербайджан?",
      getFreeQuote: "Получить бесплатную смету"
    }
  };

  const text = t[language as 'en' | 'ru'] || t.ru;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-baku.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {text.heroTitle1} <span className="text-[#00AA6C]">{text.heroTitle2}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {text.heroDesc}
            </p>
            
            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={text.searchPlaceholder}
                  className="flex-1 px-4 py-3 text-gray-700 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00AA6C]"
                />
                <Link
                  href={`/search?q=${searchQuery}`}
                  className="bg-[#00AA6C] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#00885C] transition"
                >
                  {text.searchBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Destinations */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {text.popularDestinations}
            </h2>
            <Link href="/cities" className="text-[#00AA6C] hover:text-[#00885C] font-medium">
              {text.viewAllDestinations}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.slug}`}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
                  <img
                    src={city.image}
                    alt={language === 'ru' ? city.name.ru : city.name.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold">
                      {language === 'ru' ? city.name.ru : city.name.en}
                    </h3>
                    <p className="text-white/80 text-xs">{city.region}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Things to Do */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {text.thingsToDo}
            </h2>
            <Link href="/tours" className="text-[#00AA6C] hover:text-[#00885C] font-medium">
              {text.viewAllActivities}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour: Tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={language === 'ru' ? tour.name.ru : tour.name.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#00AA6C] text-white text-xs px-2 py-1 rounded-full">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">
                      {language === 'ru' ? tour.name.ru : tour.name.en}
                    </h3>
                    <p className="text-white/80 text-sm">{tour.duration}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <Link href="/contact" className="text-[#00AA6C] font-medium text-sm hover:underline">
                      {text.getQuote}
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#00AA6C] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {text.readyToExplore}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00AA6C] px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            {text.getFreeQuote}
          </Link>
        </section>
      </main>
    </div>
  );
}