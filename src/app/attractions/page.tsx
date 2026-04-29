'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { HeartButton } from '@/components/HeartButton';

// Complete data about attractions in Azerbaijan
const attractions = [
  {
    id: 1,
    name: 'Old City (Icherisheher)',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '3,456',
    type: 'Historical',
    description: 'Ancient fortress with narrow streets, mosques, and historical buildings. UNESCO World Heritage Site since 2000. One of the most visited tourist attractions in Azerbaijan.',
    history: 'The fortress was founded in the 1st century BC and served as an important trading center on the Great Silk Road. Inside the walls, numerous historical buildings, mosques, and caravanserais have been preserved.',
    features: ['UNESCO', 'Guided Tours', 'Souvenirs', 'Museums', 'Photos', 'History'],
    address: 'Icherisheher Street',
    hours: '09:00 - 18:00',
    price: 'Free',
    image: '/images/icheri-sheher.jpg'
  },
  {
    id: 2,
    name: 'Gobustan',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,123',
    type: 'Nature',
    description: 'National park with ancient rock carvings dating back up to 40,000 years and unique mud volcanoes. Located 60 km from Baku.',
    history: 'More than 6,000 rock drawings depicting hunting, dancing, and rituals of ancient people have been discovered in the park. The park is also known for its mud volcanoes.',
    features: ['Rock Art', 'Volcanoes', 'Guided Tours', 'Museum', 'Nature'],
    address: 'Gobustan, 60 km from Baku',
    hours: '09:00 - 18:00',
    price: '5 AZN',
    image: '/images/gobustan.jpg'
  },
  {
    id: 3,
    name: 'Sheki Khan Palace',
    city: 'Sheki',
    citySlug: 'sheki',
    rating: 4.9,
    reviews: '1,876',
    type: 'Architecture',
    description: 'Historical palace of the 18th century with unique architecture and frescoes. UNESCO World Heritage Site since 2019.',
    history: 'The palace was built in 1797 for Sheki Khan Muhammad Hasan-bek. The building is famous for its unique frescoes and mosaics made of colored glass.',
    features: ['UNESCO', 'Guided Tours', 'Museum', 'Photos', 'Architecture'],
    address: 'Kareva Street, 5',
    hours: '10:00 - 18:00',
    price: '8 AZN',
    image: '/images/sheki-khan.jpg'
  },
  {
    id: 4,
    name: 'Maiden Tower',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,543',
    type: 'Historical',
    description: 'Medieval tower of the 12th century with panoramic views of the city. One of the symbols of Baku.',
    history: 'The tower was built in the 12th century and served as part of the defensive fortifications of the Old City. Its height is 29.5 meters.',
    features: ['UNESCO', 'City View', 'Guided Tours', 'History'],
    address: 'Maiden Street, 1',
    hours: '10:00 - 18:00',
    price: '6 AZN',
    image: '/images/maiden-tower.jpg'
  },
  {
    id: 5,
    name: 'Gabala Waterfalls',
    city: 'Gabala',
    citySlug: 'gabala',
    rating: 4.6,
    reviews: '987',
    type: 'Nature',
    description: 'Beautiful waterfalls in the mountains with clean cold water and picturesque landscapes. Ideal place for picnics and photos.',
    history: 'The waterfalls were formed as a result of snowmelt in the Caucasus Mountains. The height of the water fall reaches 30 meters.',
    features: ['Hiking', 'Photos', 'Picnic', 'Nature'],
    address: 'Caucasus Mountains, 20 km from Gabala',
    hours: 'Open 24/7',
    price: 'Free',
    image: '/images/gabala-waterfalls.jpg'
  },
  {
    id: 6,
    name: 'Opera and Ballet Theatre',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '1,234',
    type: 'Culture',
    description: 'Magnificent theatre building with high-quality performances. Located in the center of Baku.',
    history: 'The theatre was built in 1911 and is one of the oldest opera theatres in the Caucasus. The building is built in the Baroque style.',
    features: ['Ballet', 'Opera', 'Concerts', 'Guided Tours'],
    address: 'Urdu Square, 1',
    hours: '10:00 - 22:00',
    price: 'From 10 AZN',
    image: '/images/opera.jpg'
  },
  {
    id: 7,
    name: 'Goyazan Lake',
    city: 'Ganja',
    citySlug: 'gandja',
    rating: 4.5,
    reviews: '654',
    type: 'Nature',
    description: 'Beautiful lake surrounded by mountains with clean water and picturesque landscapes. Ideal place for outdoor recreation.',
    features: ['Nature', 'Photos', 'Picnic', 'Fishing'],
    address: 'Murovdag Mountains, 15 km from Ganja',
    hours: 'Open 24/7',
    price: 'Free',
    image: '/images/goyazan.jpg'
  },
  {
    id: 8,
    name: 'Palace of Shirvanshahs',
    city: 'Baku',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,123',
    type: 'Historical',
    description: 'Historical palace of the 15th century, located in the Old City. Monument of architecture and history.',
    history: 'The palace was the residence of the Shirvanshah rulers. The building is known for its unique architecture and mosaics.',
    features: ['UNESCO', 'Guided Tours', 'Museums', 'History'],
    address: 'Icherisheher Street',
    hours: '10:00 - 18:00',
    price: '6 AZN',
    image: '/images/shirvanshah-palace.jpg'
  }
];

// Filters
const filters = [
  { name: 'All', slug: 'all' },
  { name: 'Historical', slug: 'historical' },
  { name: 'Nature', slug: 'nature' },
  { name: 'Architecture', slug: 'architecture' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Museums', slug: 'museums' },
];

const cities = ['Baku', 'Gabala', 'Sheki', 'Ganja', 'Lankaran'];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Attractions</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Attractions in Azerbaijan</h1>
            <p className="text-blue-200">Best places for excursions and recreation — from ancient monuments to natural wonders</p>
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
                    href={`/attractions/${filter.slug}`}
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

        {/* Attractions List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Found: {attractions.length} attractions</p>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort by:</span>
                <select className="border rounded px-2 py-1">
                  <option>Rating</option>
                  <option>Number of reviews</option>
                  <option>Name</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {attractions.map((attraction) => (
                <Link
                  key={attraction.id}
                  href={`/attractions/${attraction.id}`}
                  className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer relative"
                >
                  <HeartButton 
                    item={{
                      id: String(attraction.id),
                      name: attraction.name,
                      type: 'attraction',
                      category: attraction.type,
                      image: attraction.image,
                      rating: attraction.rating,
                    }}
                    className="absolute top-3 right-3 z-10"
                  />
                  <div className="flex">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl">🏛️</span>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg hover:text-blue-600">{attraction.name}</h3>
                          <p className="text-sm text-gray-500">{attraction.city} • {attraction.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">
                              ★ {attraction.rating}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{attraction.reviews} reviews</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{attraction.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {attraction.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>📍 {attraction.address}</span>
                        <span>🕒 {attraction.hours}</span>
                        <span>💰 {attraction.price}</span>
                      </div>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to organize an excursion?</h2>
            <p className="text-gray-600 mb-6">Our guides will take you through the best places in Azerbaijan</p>
            <Link href="/tours" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Choose a Tour
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
