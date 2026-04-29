import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cities } from '@/data/places';
import { HeartButton } from '@/components/HeartButton';

// Map city tags for display
const cityTags: Record<string, { tag: string; tagColor: string; highlights: string[] }> = {
  baku: { tag: 'modern', tagColor: 'blue', highlights: ['Old City', 'Flame Towers', 'Baku Boulevard'] },
  ganja: { tag: 'culture', tagColor: 'purple', highlights: ['Nizami Mausoleum', 'Botanical Garden', 'Ganja Gate'] },
  sheki: { tag: 'history', tagColor: 'amber', highlights: ['Khan Palace', 'Caravanserai', 'Silk Factory'] },
  lankaran: { tag: 'nature', tagColor: 'green', highlights: ['Hirkan Forest', 'Lankaran Beach', 'Tea Plantations'] },
  gabala: { tag: 'nature', tagColor: 'green', highlights: ['Tufandag Resort', 'Cable Car', 'Nohur Lake'] },
  qusar: { tag: 'nature', tagColor: 'green', highlights: ['Shahdag Resort', 'Laza Waterfalls', 'Mountain Villages'] },
  guba: { tag: 'culture', tagColor: 'purple', highlights: ['Khinalig Village', 'Guba Waterfall', 'Carpet Workshops'] },
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cities of Azerbaijan</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Discover the diverse cities of Azerbaijan, from the modern capital Baku 
              to historic mountain towns and coastal resorts.
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => {
                const tags = cityTags[city.slug] || { tag: 'destination', tagColor: 'gray', highlights: [] };
                return (
                  <Link
                    key={city.id}
                    href={`/cities/${city.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={city.heroImage || `https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&q=80`}
                        alt={city.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute top-3 left-3 bg-${tags.tagColor === 'blue' ? 'blue' : tags.tagColor === 'purple' ? 'purple' : tags.tagColor === 'amber' ? 'amber' : 'green'}-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize`}>
                        {tags.tag}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{city.region}</p>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {city.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {tags.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Explore City →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick City Facts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick City Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {cities.map((city) => (
                <div key={city.id} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-800">{city.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{city.population}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}