import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getPlacesByCity } from '@/data/places';

export default async function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug);
  
  if (!city) {
    notFound();
  }

  const attractions = getPlacesByCity(city.slug).filter(p => p.category !== 'Restaurants');
  const restaurants = getPlacesByCity(city.slug).filter(p => p.category === 'Restaurants');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${city.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <nav className="text-sm text-white/80 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/cities" className="hover:text-white">Cities</Link>
              <span className="mx-2">/</span>
              <span>{city.name}</span>
            </nav>
            <h1 className="text-5xl font-bold text-white mb-2">{city.name}</h1>
            <p className="text-xl text-white/90 mb-4">{city.region}, {city.country}</p>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span>👥 {city.population}</span>
              <span>🕒 Best: {city.bestTime}</span>
              <span>🚗 {city.distanceFromBaku} from Baku</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-bold text-gray-800 mb-1">Location</h3>
            <p className="text-gray-600 text-sm">{city.region}, {city.country}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🚗</div>
            <h3 className="font-bold text-gray-800 mb-1">Getting There</h3>
            <p className="text-gray-600 text-sm">{city.transport}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🌤️</div>
            <h3 className="font-bold text-gray-800 mb-1">Best Time</h3>
            <p className="text-gray-600 text-sm">{city.bestTime}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About {city.name}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{city.description}</p>
        </div>

        {/* Top Attractions */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Top Attractions</h2>
            <Link href={`/search?city=${city.slug}`} className="text-[#00AA6C] font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((place) => (
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
                  <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
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
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Restaurants */}
        {restaurants.length > 0 && (
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Top Restaurants</h2>
              <Link href={`/restaurants?city=${city.slug}`} className="text-[#00AA6C] font-medium hover:underline">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <Link 
                  href={`/attractions/${restaurant.id}`} 
                  key={restaurant.id}
                  className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-40">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {restaurant.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#00AA6C]">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400 text-sm">
                        {'★'.repeat(Math.floor(restaurant.rating))}
                        {'☆'.repeat(5 - Math.floor(restaurant.rating))}
                      </div>
                      <span className="text-sm text-gray-600">{restaurant.rating}</span>
                      {restaurant.priceLevel && (
                        <span className="text-sm text-gray-400">{restaurant.priceLevel}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Travel Guide Section */}
        <section className="bg-[#f8f9fa] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Travel Guide for {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">📍 Getting Around</h3>
              <p className="text-gray-600">{city.transport}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">🌤️ Best Time to Visit</h3>
              <p className="text-gray-600">{city.bestTime}</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}