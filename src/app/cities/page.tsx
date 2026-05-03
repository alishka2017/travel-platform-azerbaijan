import Link from 'next/link';
import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/layout/Footer';
import { getCitiesSync } from '@/lib/content';
import { HeartButton } from '@/components/HeartButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Destinations in Azerbaijan | Smartholiday.az",
  description: "Explore all destinations in Azerbaijan - from Baku to Sheki, Gabala to Lankaran. Discover the best places to visit, stay, and explore.",
};

// Get cities for static generation
const cities = getCitiesSync();

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Destinations</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Destinations in Azerbaijan
          </h1>
          <p className="text-gray-600">
            Discover the best places to visit, from ancient cities to mountain resorts
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={city.heroImage}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <HeartButton 
                    item={{
                      id: city.id,
                      name: city.name,
                      image: city.heroImage,
                      type: 'city' as const
                    }} 
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.region}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📍</span>
                  <span>{city.region}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
