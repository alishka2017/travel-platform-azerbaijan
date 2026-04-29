import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { cities, places } from '@/data/places';

export default function HomePage() {
  const topAttractions = places.filter(p => p.category !== 'Restaurants').slice(0, 8);
  const topRestaurants = places.filter(p => p.category === 'Restaurants');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_modern_skyline.jpg/1280px-Baku_modern_skyline.jpg)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Discover Azerbaijan</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Explore ancient history, modern architecture, and natural wonders in the Land of Fire</p>
          
          {/* Search Box */}
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2 flex gap-2">
            <input 
              type="text" 
              placeholder="Search destinations, attractions, restaurants..." 
              className="flex-1 px-4 py-3 text-gray-700 outline-none"
            />
            <button className="bg-[#00AA6C] text-white px-6 py-3 rounded font-semibold hover:bg-[#008855] transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Things to Do', 'Hotels', 'Restaurants', 'Cities', 'Tours', 'Hidden Gems'].map((cat) => (
              <Link 
                href={`/${cat.toLowerCase().replace(' ', '-')}`} 
                key={cat}
                className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition">
                  {cat === 'Things to Do' && '🎭'}
                  {cat === 'Hotels' && '🏨'}
                  {cat === 'Restaurants' && '🍽️'}
                  {cat === 'Cities' && '🏙️'}
                  {cat === 'Tours' && '🚌'}
                  {cat === 'Hidden Gems' && '💎'}
                </div>
                <div className="font-medium text-gray-700">{cat}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Top Cities</h2>
            <Link href="/cities" className="text-[#00AA6C] font-medium hover:underline">
              View All Cities →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link 
                href={`/cities/${city.slug}`} 
                key={city.id}
                className="group"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={city.heroImage} 
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg">{city.name}</h3>
                    <p className="text-sm opacity-90">{city.region}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Top Attractions</h2>
            <Link href="/attractions" className="text-[#00AA6C] font-medium hover:underline">
              View All Attractions →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAttractions.map((place) => (
              <Link 
                href={`/attractions/${place.id}`} 
                key={place.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
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
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#00AA6C] transition">
                    {place.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(place.rating))}
                      {'☆'.repeat(5 - Math.floor(place.rating))}
                    </div>
                    <span className="text-sm text-gray-600">{place.rating}</span>
                    <span className="text-sm text-gray-400">({place.reviewsCount.toLocaleString()} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-500">{place.city}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide Section */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Travel Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🌤️</div>
              <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
              <p className="text-sm text-gray-600">April-June and September-October offer pleasant weather for sightseeing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🛂</div>
              <h3 className="font-bold text-gray-800 mb-2">Visa Info</h3>
              <p className="text-sm text-gray-600">E-visa available for most countries. Apply online before your trip.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">💵</div>
              <h3 className="font-bold text-gray-800 mb-2">Currency</h3>
              <p className="text-sm text-gray-600">Azerbaijani Manat (AZN). ATMs widely available.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-800 mb-2">Safety</h3>
              <p className="text-sm text-gray-600">Generally safe for tourists. Standard precautions apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00AA6C] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Azerbaijan?</h2>
          <p className="text-lg opacity-90 mb-8">Plan your perfect trip with our comprehensive guides and local tips.</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/plan-trip" 
              className="bg-white text-[#00AA6C] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Plan Your Trip
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Get Help
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}