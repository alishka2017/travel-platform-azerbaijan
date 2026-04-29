import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { places, cities } from '@/data/places';

export default function RestaurantsPage() {
  const restaurants = places.filter(p => p.category === 'Restaurants');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Top Restaurants in Azerbaijan</h1>
        
        {/* Filter by City */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/restaurants" className="px-4 py-2 bg-[#00AA6C] text-white rounded-full text-sm">
            All
          </Link>
          {cities.map(city => (
            <Link 
              key={city.id} 
              href={`/restaurants?city=${city.slug}`}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100"
            >
              {city.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link 
              href={`/restaurants/${restaurant.id}`} 
              key={restaurant.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {restaurant.priceLevel && (
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                    {restaurant.priceLevel}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800 group-hover:text-[#00AA6C] transition">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="bg-[#00AA6C] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                      {restaurant.rating}
                    </span>
                    <div className="flex text-yellow-400 text-xs">
                      {'★'.repeat(Math.floor(restaurant.rating))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{restaurant.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>📍 {restaurant.city}</span>
                  <span>•</span>
                  <span>{restaurant.reviewsCount.toLocaleString()} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}