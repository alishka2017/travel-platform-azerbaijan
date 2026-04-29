'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import { places } from '@/data/places';
import Link from 'next/link';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-gray-200 rounded-lg animate-pulse"></div>
});

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get all unique categories from places
  const categories = useMemo(() => {
    const cats = [...new Set(places.map(p => p.category))];
    return ['all', ...cats.sort()];
  }, []);

  // Filter places with coordinates
  const placesWithCoords = useMemo(() => 
    places.filter(p => p.lat && p.lon),
    []
  );

  // Filter places based on selected category
  const filteredPlaces = useMemo(() => 
    selectedCategory === 'all' 
      ? placesWithCoords 
      : placesWithCoords.filter(p => p.category === selectedCategory),
    [placesWithCoords, selectedCategory]
  );

  // Create markers for the map
  const markers = useMemo(() => 
    filteredPlaces.map(p => ({
      lat: p.lat!,
      lon: p.lon!,
      popup: `<strong>${p.name}</strong><br>${p.category}<br><a href="/attractions/${p.id}" class="text-blue-600">View Details</a>`,
      category: p.category,
      id: p.id
    })),
    [filteredPlaces]
  );

  // Calculate map center (average of all coordinates)
  const mapCenter = useMemo(() => {
    if (filteredPlaces.length === 0) {
      return { lat: 40.4093, lon: 49.8671 }; // Baku center
    }
    const avgLat = filteredPlaces.reduce((sum, p) => sum + p.lat!, 0) / filteredPlaces.length;
    const avgLon = filteredPlaces.reduce((sum, p) => sum + p.lon!, 0) / filteredPlaces.length;
    return { lat: avgLat, lon: avgLon };
  }, [filteredPlaces]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555441565-b8e84a2571ed?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-4">
            <div className="max-w-6xl mx-auto w-full text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Explore Azerbaijan</h1>
              <p className="text-xl opacity-90">Discover places on the interactive map</p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Map Section */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <InteractiveMap 
                lat={mapCenter.lat} 
                lon={mapCenter.lon} 
                zoom={7} 
                markers={markers} 
              />
            </div>
          </section>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="font-medium text-gray-800">{filteredPlaces.length}</span> places shown
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="font-medium text-gray-800">{categories.length - 1}</span> categories
            </div>
          </div>

          {/* Places Grid */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Places ({filteredPlaces.length})</h2>
              <div className="flex gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#00AA6C] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <Link 
                  href={`/attractions/${place.id}`} 
                  key={place.id}
                  className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                      {place.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#00AA6C]">
                      {place.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400 text-sm">
                        {'★'.repeat(Math.floor(place.rating))}
                        {'☆'.repeat(5 - Math.floor(place.rating))}
                      </div>
                      <span className="text-sm text-gray-600">{place.rating}</span>
                      <span className="text-sm text-gray-400">({place.reviewsCount.toLocaleString()})</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">📍 {place.city}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPlaces.length === 0 && (
              <div className="bg-white p-12 rounded-lg text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No places found</h3>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
