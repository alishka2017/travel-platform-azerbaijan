'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { places, cities } from '@/data/places';

export default function ToursPage() {
  const tours = places.filter(p => p.category === 'Tours');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tours in Azerbaijan</h1>
        
        {/* Filter by City */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/tours" className="px-4 py-2 bg-[#00AA6C] text-white rounded-full text-sm">
            All
          </Link>
          {cities.map(city => (
            <Link 
              key={city.id} 
              href={`/tours?city=${city.slug}`} 
              className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm hover:bg-[#00AA6C] hover:text-white transition"
            >
              {city.name}
            </Link>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map(tour => (
            <Link 
              key={tour.id} 
              href={`/attractions/${tour.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group"
            >
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.jpg';
                  }}
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium text-[#00AA6C]">
                  {tour.priceLevel}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{tour.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{tour.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-400">
                  <span>{tour.city}</span>
                  <span>⭐ {tour.rating} ({tour.reviewsCount})</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {tours.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No tours found.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}