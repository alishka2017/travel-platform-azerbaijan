import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HeartButton } from '@/components/HeartButton';

const cities = [
  {
    id: 1,
    name: 'Baku',
    slug: 'baku',
    description: 'Capital city on the Caspian Sea with ancient walled city and modern skyscrapers. Perfect blend of history and future.',
    tag: 'modern',
    tagColor: 'blue',
    population: '2.3M',
    highlights: ['Old City', 'Flame Towers', 'Baku Boulevard']
  },
  {
    id: 2,
    name: 'Ganja',
    slug: 'gandja',
    description: 'Second-largest city with beautiful parks and rich cultural heritage. Known for its flower gardens and historic mosques.',
    tag: 'culture',
    tagColor: 'purple',
    population: '350K',
    highlights: ['Nizami Mausoleum', 'Botanical Garden', 'Ganja Gate']
  },
  {
    id: 3,
    name: 'Sheki',
    slug: 'sheki',
    description: 'Historic mountain town with stunning architecture and silk road heritage. UNESCO World Heritage site.',
    tag: 'history',
    tagColor: 'amber',
    population: '70K',
    highlights: ['Khan Palace', 'Caravanserai', 'Silk Factory']
  },
  {
    id: 4,
    name: 'Lankaran',
    slug: 'lenkoran',
    description: 'Coastal resort on Caspian Sea with beaches and national park. Famous for tea plantations and mild climate.',
    tag: 'nature',
    tagColor: 'green',
    population: '220K',
    highlights: ['Hirkan Forest', 'Lankaran Beach', 'Tea Plantations']
  },
  {
    id: 5,
    name: 'Gabala',
    slug: 'gabala',
    description: 'Mountain resort area with ski slopes and natural beauty. Perfect for outdoor activities and family vacations.',
    tag: 'nature',
    tagColor: 'green',
    population: '100K',
    highlights: ['Tufandag Resort', 'Cable Car', 'Nohur Lake']
  },
  {
    id: 6,
    name: 'Shamakhi',
    slug: 'shamakhi',
    description: 'One of the oldest cities in Azerbaijan with historic observatory and ancient mosques.',
    tag: 'history',
    tagColor: 'amber',
    population: '100K',
    highlights: ['Juma Mosque', 'Shamakhi Observatory', 'Seven Beauty Waterfalls']
  },
  {
    id: 7,
    name: 'Quba',
    slug: 'quba',
    description: 'Mountain town famous for carpets and historic ethnic villages.',
    tag: 'culture',
    tagColor: 'purple',
    population: '40K',
    highlights: ['Quba Carpet Museum', 'Khinalig Village', 'Red Village']
  },
  {
    id: 8,
    name: 'Naftalan',
    slug: 'naftalan',
    description: 'Unique resort town known for therapeutic oil treatments and spa resorts.',
    tag: 'modern',
    tagColor: 'blue',
    population: '15K',
    highlights: ['Oil Spa Resorts', 'Sanatoriums', 'Therapeutic Treatments']
  }
];

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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/cities/${city.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group relative"
                >
                  <HeartButton 
                    item={{
                      id: city.slug,
                      name: city.name,
                      type: 'city',
                      category: 'City',
                      image: `/images/cities/${city.slug}.jpg`
                    }}
                    className="absolute top-2 right-2 z-10"
                  />
                  <div className={`h-40 bg-gradient-to-br ${
                    city.tagColor === 'blue' ? 'from-blue-400 to-blue-600' :
                    city.tagColor === 'purple' ? 'from-purple-400 to-purple-600' :
                    city.tagColor === 'amber' ? 'from-amber-400 to-amber-600' :
                    'from-green-400 to-green-600'
                  } relative`}>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {city.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-600 text-lg mb-2">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {city.highlights.map((highlight, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Quick City Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cities.map((city) => (
                <div key={city.id} className="bg-gray-50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-800">{city.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{city.population}</p>
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
