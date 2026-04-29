import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface CityData {
  name: string;
  slug: string;
  description: string;
  population: string;
  region: string;
  tag: string;
  highlights: string[];
  attractions: { name: string; description: string }[];
  restaurants: { name: string; description: string }[];
  hotels: { name: string; description: string }[];
  tips: string[];
}

const citiesData: Record<string, CityData> = {
  baku: {
    name: 'Baku',
    slug: 'baku',
    description: 'The capital of Azerbaijan and the largest city on the Caspian Sea. A fascinating blend of ancient history and modern architecture.',
    population: '2.3 million',
    region: 'Absheron Peninsula',
    tag: 'Modern',
    highlights: ['Old City', 'Flame Towers', 'Baku Boulevard', 'Heydar Aliyev Center', 'Maiden Tower'],
    attractions: [
      { name: 'Icherisheher (Old City)', description: 'Ancient fortified city with medieval walls and historic buildings.' },
      { name: 'Flame Towers', description: 'Iconic skyscrapers lighting up the skyline day and night.' },
      { name: 'Baku Boulevard', description: 'Scenic promenade along the Caspian Sea, perfect for walks.' },
      { name: 'Heydar Aliyev Center', description: 'Stunning modern architecture designed by Zaha Hadid.' },
      { name: 'Gobustan National Park', description: 'Ancient rock carvings and mud volcanoes just outside the city.' }
    ],
    restaurants: [
      { name: 'Şirvanshah Restaurant', description: 'Traditional Azerbaijani cuisine in historic setting.' },
      { name: 'Nargiz', description: 'Fine dining with rooftop views of the city.' },
      { name: 'Buta Restaurant', description: 'Authentic local dishes with modern presentation.' }
    ],
    hotels: [
      { name: 'Four Seasons Baku', description: 'Luxury hotel in the heart of the city.' },
      { name: 'Fairmont Baku', description: 'Five-star hotel with Caspian Sea views.' },
      { name: 'JW Marriott Absheron', description: 'Premium accommodation on the Boulevard.' }
    ],
    tips: [
      'Visit Old City early morning to avoid crowds.',
      'Use the metro for cheap transportation around the city.',
      'Book tickets for Heydar Aliyev Center in advance.'
    ]
  },
  gandja: {
    name: 'Ganja',
    slug: 'gandja',
    description: 'Azerbaijan\'s second-largest city, known for its beautiful parks, historic sites, and rich cultural heritage.',
    population: '350,000',
    region: 'Central Azerbaijan',
    tag: 'Culture',
    highlights: ['Nizami Mausoleum', 'Ganja Gate', 'Botanical Garden', 'Chokh Garden'],
    attractions: [
      { name: 'Nizami Mausoleum', description: 'Tomb of the famous Persian poet Nizami Ganjavi.' },
      { name: 'Ganja Gate', description: 'Historic city gate from the medieval period.' },
      { name: 'Chokh Garden', description: 'Beautiful park with lakes and walking paths.' },
      { name: 'Karvansaray', description: 'Historic caravanserai restored as a cultural center.' }
    ],
    restaurants: [
      { name: 'Ganja Restaurant', description: 'Traditional dishes with local ingredients.' },
      { name: 'Park View', description: 'Modern dining with park views.' }
    ],
    hotels: [
      { name: 'Ganja Hotel', description: 'Central location with comfortable rooms.' }
    ],
    tips: [
      'Visit the local bazaar for fresh produce.',
      'Explore the city by bike on the dedicated paths.'
    ]
  },
  sheki: {
    name: 'Sheki',
    slug: 'sheki',
    description: 'Historic mountain town with stunning architecture and UNESCO World Heritage status.',
    population: '70,000',
    region: 'Northern Azerbaijan',
    tag: 'History',
    highlights: ['Sheki Khan Palace', 'Caravanserai', 'Silk Factory', 'Church of Kish'],
    attractions: [
      { name: 'Sheki Khan Palace', description: '18th-century palace with stunning stained glass windows.' },
      { name: 'Caravanserai', description: 'Historic Silk Road inn, beautifully restored.' },
      { name: 'Silk Factory', description: 'Watch traditional silk production.' },
      { name: 'Church of Kish', description: 'Ancient Albanian Christian church.' }
    ],
    restaurants: [
      { name: 'Sheki Palace Restaurant', description: 'Traditional cuisine in a historic setting.' }
    ],
    hotels: [
      { name: 'Sheki Karvansaray', description: 'Stay in a restored historic caravanserai.' }
    ],
    tips: [
      'Try Sheki halva - a local specialty.',
      'Explore the old town on foot.'
    ]
  },
  lenkoran: {
    name: 'Lankaran',
    slug: 'lenkoran',
    description: 'Coastal resort on the Caspian Sea with beaches and national park.',
    population: '220,000',
    region: 'Southern Azerbaijan',
    tag: 'Nature',
    highlights: ['Hirkan National Park', 'Lankaran Beach', 'Tea Plantations', 'Lankaran Fortress'],
    attractions: [
      { name: 'Hirkan National Park', description: 'Ancient Caspian forest with unique wildlife.' },
      { name: 'Lankaran Beach', description: 'Relax on the Caspian Sea coast.' },
      { name: 'Tea Plantations', description: 'Visit the historic tea estates.' },
      { name: 'Lankaran Fortress', description: '18th-century fortress by the sea.' }
    ],
    restaurants: [
      { name: 'Sea View Restaurant', description: 'Fresh seafood with coastal views.' }
    ],
    hotels: [
      { name: 'Lankaran Resort', description: 'Beachfront accommodation.' }
    ],
    tips: [
      'Best time to visit: June-September for beach weather.',
      'Try the local tea - Lankaran is famous for it.'
    ]
  },
  gabala: {
    name: 'Gabala',
    slug: 'gabala',
    description: 'Mountain resort area with ski slopes and natural beauty.',
    population: '100,000',
    region: 'Northern Azerbaijan',
    tag: 'Nature',
    highlights: ['Tufandag Resort', 'Cable Car', 'Nohur Lake', 'Caucasian Mountains'],
    attractions: [
      { name: 'Tufandag Resort', description: 'Ski resort in winter, hiking destination in summer.' },
      { name: 'Cable Car', description: 'Scenic ride with mountain views.' },
      { name: 'Nohur Lake', description: 'Peaceful mountain lake perfect for picnics.' },
      { name: 'Caucasian Mountains', description: 'Stunning mountain scenery and hiking trails.' }
    ],
    restaurants: [
      { name: 'Mountain View Restaurant', description: 'Traditional dishes with panoramic views.' }
    ],
    hotels: [
      { name: 'Tufandag Mountain Resort', description: 'Ski-in/ski-out accommodation.' },
      { name: 'Gabala Hotel', description: 'Comfortable base for exploring the region.' }
    ],
    tips: [
      'Winter: Book ski equipment in advance.',
      'Summer: Great for hiking and mountain biking.'
    ]
  }
};

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = citiesData[params.slug];
  
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{city.tag}</span>
              <span className="text-blue-200 text-sm">{city.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.name}</h1>
            <p className="text-blue-200 text-lg max-w-2xl">{city.description}</p>
            <div className="flex items-center gap-6 mt-6 text-blue-200">
              <span>👥 {city.population}</span>
              <span>⭐ Top attractions: {city.highlights.slice(0, 3).join(', ')}</span>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Highlights</h2>
            <div className="flex flex-wrap gap-2">
              {city.highlights.map((highlight, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants & Hotels */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Restaurants</h2>
                <div className="space-y-3">
                  {city.restaurants.map((restaurant, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600">{restaurant.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Hotels</h2>
                <div className="space-y-3">
                  {city.hotels.map((hotel, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                      <p className="text-sm text-gray-600">{hotel.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Local Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {city.tips.map((tip, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-amber-500">💡</span>
                  <p className="text-sm text-gray-700">{tip}</p>
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

export async function generateStaticParams() {
  return Object.keys(citiesData).map((slug) => ({ slug }));
}
