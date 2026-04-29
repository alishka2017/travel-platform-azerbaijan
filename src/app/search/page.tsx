import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const searchCategories = [
  { name: 'Cities', icon: '🏙️', items: ['Baku', 'Ganja', 'Sheki', 'Lankaran', 'Gabala', 'Shamakhi', 'Quba', 'Naftalan'] },
  { name: 'Attractions', icon: '📍', items: ['Old City', 'Flame Towers', 'Sheki Palace', 'Gobustan', 'Hirkan Forest', 'Tufandag Resort'] },
  { name: 'Things to Do', icon: '🎯', items: ['Cultural Tours', 'Nature Hikes', 'Food Experiences', 'Nightlife', 'Shopping', 'Spa & Wellness'] },
  { name: 'Accommodation', icon: '🏨', items: ['Hotels', 'Resorts', 'Boutique Stays', 'Mountain Lodges', 'Beachfront'] }
];

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Search</h1>
              
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for cities, attractions, or activities..."
                  className="w-full px-6 py-4 rounded-full text-gray-800 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-gray-100 p-4 flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-semibold text-gray-800">{category.name}</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <Link 
                            href={`/search?q=${encodeURIComponent(item)}`}
                            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition block"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Searches */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Popular Searches</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Baku Old City', 'Sheki Tours', 'Gobustan Park', 'Gabala Skiing', 'Lankaran Beach', 'Azerbaijani Food', 'Baku Nightlife', 'Mountain Villages'].map((search, index) => (
                <Link 
                  key={index}
                  href={`/search?q=${encodeURIComponent(search)}`}
                  className="bg-white px-4 py-2 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition text-sm"
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-semibold mb-4">Search Tips</h2>
              <p className="text-gray-600">
                Try searching for specific cities, attractions, or types of activities. 
                For example: "restaurants in Baku", "hiking in Gabala", or "beaches in Lankaran".
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
