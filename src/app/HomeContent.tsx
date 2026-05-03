'use client';

import Link from 'next/link';
import { HeartButton } from '@/components/HeartButton';
import OptimizedImage from '@/components/OptimizedImage';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface City {
  id: string;
  name: string;
  slug: string;
  region: string;
  heroImage: string;
}

interface Tour {
  id: string;
  name: string;
  slug: string;
  duration: string;
  category: string;
  image: string;
}

interface HomeContentProps {
  cities: City[];
  tours: {
    'city-tours': Tour[];
    'day-trips': Tour[];
    'multi-day': Tour[];
    'adventure': Tour[];
    'food-wine': Tour[];
  };
}

export default function HomeContent({ cities, tours }: HomeContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useLanguage();
  
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

  const text = t[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1920&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {text.heroTitle1} <span className="text-[#00AA6C]">{text.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {text.heroDesc}
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-2xl p-2 max-w-2xl mx-auto flex">
            <input
              type="text"
              placeholder={text.searchPlaceholder}
              className="flex-1 px-6 py-4 text-gray-800 outline-none rounded-full text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              href={`/search?q=${searchQuery}`}
              className="bg-[#00AA6C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#007A52] transition whitespace-nowrap"
            >
              {text.searchBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {text.popularDestinations}
            </h2>
            <Link href="/cities" className="text-[#00AA6C] font-medium hover:underline">
              {text.viewAllDestinations}
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredCities.map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
                  <OptimizedImage
                    src={city.heroImage}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold">{city.name}</h3>
                    <p className="text-white/80 text-xs">{city.region}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {text.thingsToDo}
            </h2>
            <Link href="/tours" className="text-[#00AA6C] font-medium hover:underline">
              {text.viewAllActivities}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <Link href={`/tours/${tour.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#00AA6C] text-white text-xs px-2 py-1 rounded-full">
                        {tour.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold">{tour.name}</h3>
                      <p className="text-white/80 text-sm">{tour.duration}</p>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <Link href="/contact" className="text-[#00AA6C] font-medium text-sm hover:underline">
                      {text.getQuote}
                    </Link>
                    <HeartButton item={tour} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00AA6C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {text.readyToExplore}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {text.heroDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00AA6C] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {text.getFreeQuote}
          </Link>
        </div>
      </section>
    </div>
  );
}
