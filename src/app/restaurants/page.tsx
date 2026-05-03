import Link from 'next/link';
import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/layout/Footer';
import { places } from '@/data/places';
import { HeartButton } from '@/components/HeartButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Restaurants in Azerbaijan | Smartholiday.az",
  description: "Discover the best restaurants in Azerbaijan. From traditional cuisine to fine dining.",
};

export default function RestaurantsPage() {
  const restaurants = places.filter(p => p.category === 'Restaurants');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Restaurants</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Restaurants in Azerbaijan
          </h1>
          <p className="text-gray-600">
            Discover the best places to eat, from local cuisine to fine dining
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Local Cuisine', 'Fine Dining', 'Street Food', 'Cafes', 'Seafood'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00AA6C] hover:text-[#00AA6C] transition"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 12).map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurants/${restaurant.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={restaurant.image || `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80`}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {restaurant.rating && (
                  <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium text-sm">{restaurant.rating}</span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <HeartButton 
                    item={{
                      id: restaurant.id,
                      name: restaurant.name,
                      image: restaurant.image,
                      category: restaurant.category,
                      rating: restaurant.rating,
                      type: 'restaurant' as const
                    }} 
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-[#00AA6C] transition mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{restaurant.city}</p>
                {restaurant.category && (
                  <p className="text-xs text-gray-400">{restaurant.category}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
