import Link from 'next/link';
import { HeartButton } from '@/components/HeartButton';

// Complete data about hotels in Azerbaijan
const hotels = [
  {
    id: 1,
    name: 'Four Seasons Baku',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.9,
    reviews: '1,543',
    type: 'Luxury',
    price: '$$$$',
    description: 'Luxury hotel in the historic center of Baku with sea views and premium service. Located in a restored early 20th-century mansion.',
    features: ['Spa Center', 'Pool', 'Restaurants', 'Conference Hall', 'Transfer', 'Concierge'],
    address: 'Neftchilar Avenue, 25',
    phone: '+994 12 404 10 00',
    website: 'fourseasons.com/baku',
    image: '/images/four-seasons.jpg'
  },
  {
    id: 2,
    name: 'JW Marriott Absheron',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '2,123',
    type: 'Premium',
    price: '$$$',
    description: 'Modern hotel in the business center of Baku with excellent conditions for business and leisure. 5 stars and highest level of service.',
    features: ['Spa', 'Fitness Center', 'Restaurants', 'Rooftop Bar', 'Business Center'],
    address: 'Azerbaijan Avenue, 15',
    phone: '+994 12 565 30 00',
    website: 'marriott.com/baku',
    image: '/images/jw-marriott.jpg'
  },
  {
    id: 3,
    name: 'Rixos Gabala',
    city: 'Gabala',
    citySlug: 'gabala',
    rating: 4.7,
    reviews: '1,234',
    type: 'Resort',
    price: '$$$',
    description: 'Luxury resort at the foot of the Caucasus Mountains with its own spa center and pools. Ideal for family vacation and ski season.',
    features: ['Ski Resort', 'Spa', 'Pools', 'Kids Club', 'Animation'],
    address: 'Rixos Gabala Resort',
    phone: '+994 20 234 56 78',
    website: 'rixos.com/gabala',
    image: '/images/rixos-gabala.jpg'
  },
  {
    id: 4,
    name: 'Baku Marriott Hotel Boulevard',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '1,890',
    type: 'Premium',
    price: '$$$',
    description: 'Elegant hotel on the Baku Boulevard with panoramic views of the Caspian Sea. Perfect for both business and leisure travelers.',
    features: ['Sea View', 'Pool', 'Restaurants', 'Business Center', 'Gym'],
    address: 'Baku Boulevard, 10',
    phone: '+994 12 510 60 00',
    website: 'marriott.com/baku-boulevard',
    image: '/images/baku-marriott.jpg'
  },
  {
    id: 5,
    name: 'Shahdag Hotel & Spa',
    city: 'Qusar',
    citySlug: 'qusar',
    rating: 4.8,
    reviews: '956',
    type: 'Luxury',
    price: '$$$$',
    description: 'Premium mountain resort with direct access to Shahdag ski slopes. Year-round destination for mountain lovers.',
    features: ['Ski-in/Ski-out', 'Spa', 'Fine Dining', 'Kids Club', 'Mountain View'],
    address: 'Shahdag Mountain Resort',
    phone: '+994 12 498 76 54',
    website: 'shahdaghotel.az',
    image: '/images/shahdag-hotel.jpg'
  }
];

// Filters
const filters = [
  { name: 'All', slug: 'all' },
  { name: 'Luxury', slug: 'luxury' },
  { name: 'Premium', slug: 'premium' },
  { name: 'Resort', slug: 'resort' },
  { name: 'Boutique', slug: 'boutique' },
  { name: 'Budget', slug: 'budget' },
];

const cities = ['Baku', 'Gabala', 'Qusar', 'Sheki', 'Lankaran'];

export default function HotelsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Hotels</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Best Hotels in Azerbaijan</h1>
            <p className="text-blue-200">Comfortable accommodation for every taste — from luxury resorts to cozy boutique hotels</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 bg-white border-b sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Link
                    key={filter.slug}
                    href={`/hotels?category=${filter.slug}`}
                    className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition text-sm"
                  >
                    {filter.name}
                  </Link>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                <span>City:</span>
                <select className="border rounded px-2 py-1">
                  <option>All cities</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Found: {hotels.length} hotels</p>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort by:</span>
                <select className="border rounded px-2 py-1">
                  <option>Rating</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer relative"
                >
                  <HeartButton 
                    item={{
                      id: String(hotel.id),
                      name: hotel.name,
                      type: 'attraction',
                      category: hotel.type,
                      image: hotel.image,
                      rating: hotel.rating,
                    }}
                    className="absolute top-3 right-3 z-10"
                  />
                  <div className="relative h-48 bg-gray-200">
                     {/* Placeholder for image */}
                     <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-4xl">🏨</span>
                     </div>
                     <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-medium text-[#00AA6C]">
                       {hotel.price}
                     </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-[#00AA6C]">{hotel.name}</h3>
                        <p className="text-sm text-gray-500">📍 {hotel.city}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-[#00AA6C] text-white px-2 py-1 rounded text-sm">
                        <span>★</span>
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{hotel.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {hotel.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">Contact us for personalized hotel recommendations</p>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Get Help
            </Link>
          </div>
        </section>
      </main>

      
    </div>
  );
}