import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { searchPlaces, places } from '@/data/places';
import { useState } from 'react';

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const results = query ? searchPlaces(query) : places.slice(0, 12);
  const [filter, setFilter] = useState('all');

  const filteredResults = filter === 'all' ? results : results.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Results</h1>
          {query && (
            <p className="text-gray-600">
              Found {results.length} results for <span className="font-semibold">"{query}"</span>
            </p>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Filters</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Category</h4>
                <div className="space-y-2">
                  {['all', 'Historic Sites', 'Museums', 'Parks & Nature', 'Restaurants', 'Architectural Buildings'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={filter === cat}
                        onChange={() => setFilter(cat)}
                        className="text-[#00AA6C] focus:ring-[#00AA6C]"
                      />
                      <span className="text-sm text-gray-700">{cat === 'all' ? 'All Categories' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="text-[#00AA6C] focus:ring-[#00AA6C]"
                      />
                      <span className="text-sm text-gray-700">
                        {'★'.repeat(rating)}{'☆'.repeat(5-rating)} & up
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="flex-1">
            {filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((place) => (
                  <Link 
                    href={`/attractions/${place.id}`} 
                    key={place.id}
                    className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex gap-4"
                  >
                    <div className="w-48 h-32 flex-shrink-0 rounded overflow-hidden">
                      <img 
                        src={place.image} 
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {place.category}
                          </span>
                          <h3 className="font-bold text-gray-800 mt-1">{place.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span className="bg-[#00AA6C] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                              {place.rating}
                            </span>
                            <div className="flex text-yellow-400 text-sm">
                              {'★'.repeat(Math.floor(place.rating))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{place.reviewsCount.toLocaleString()} reviews</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{place.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>📍 {place.city}</span>
                        {place.priceLevel && <span>{place.priceLevel}</span>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}