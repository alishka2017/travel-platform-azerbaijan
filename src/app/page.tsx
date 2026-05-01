'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getCities, getTours } from '@/lib/content';
import { HeartButton } from '@/components/HeartButton';
import OptimizedImage from '@/components/OptimizedImage';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const cities = getCities();
  const tours = getTours();
  
  // Get first 8 cities and tours
  const featuredCities = cities.slice(0, 8);
  const featuredTours = [
    ...tours['city-tours'],
    ...tours['day-trips']
  ].slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
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
            Plan your perfect trip to <span className="text-[#00AA6C]">Azerbaijan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover hotels, experiences, and restaurants loved by travelers worldwide
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-2xl p-2 max-w-2xl mx-auto flex">
            <input
              type="text"
              placeholder="Where to? (e.g., Baku, Sheki, Gabala)"
              className="flex-1 px-6 py-4 text-gray-800 outline-none rounded-full text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link
              href={`/search?q=${searchQuery}`}
              className="bg-[#00AA6C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#007A52] transition whitespace-nowrap"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Popular Destinations
            </h2>
            <Link href="/cities" className="text-[#00AA6C] font-medium hover:underline">
              View all destinations →
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
              Things to Do in Azerbaijan
            </h2>
            <Link href="/tours" className="text-[#00AA6C] font-medium hover:underline">
              View all activities →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{tour.name}</h3>
                    <p className="text-white/80 text-sm">{tour.duration}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#00AA6C] font-medium">{tour.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00AA6C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to explore Azerbaijan?
          </h2>
          <p className="text-xl text-green-100 mb-6">
            Get personalized recommendations and plan your perfect trip
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00AA6C] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
