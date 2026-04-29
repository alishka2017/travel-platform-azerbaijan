import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { places } from '@/data/places';
import { HeartButton } from '@/components/HeartButton';

export default function ToursPage() {
  const tours = places.filter(p => p.category === 'Tours');

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tours & Experiences in Azerbaijan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked tours led by expert local guides. Discover the best of Azerbaijan with curated itineraries.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'City Tours', 'Day Trips', 'Multi-day', 'Food', 'Adventure', 'Nature'].map((filter) => (
              <button 
                key={filter}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-[#00AA6C] hover:text-[#00AA6C] transition"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Link 
                href={`/tours/${tour.id}`} 
                key={tour.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 relative"
              >
                <HeartButton 
                  item={{
                    id: tour.id,
                    name: tour.name,
                    type: 'tour',
                    category: tour.category,
                    image: tour.image,
                    rating: tour.rating,
                  }}
                  className="absolute top-4 right-4 z-10"
                />
                <div className="relative h-56">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
                    {tour.tags[0]}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#00AA6C] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {tour.priceLevel}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <span>{tour.tags.join(' • ')}</span>
                    <span>•</span>
                    <span>{tour.openingHours}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-[#00AA6C] transition">
                    {tour.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tour.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(tour.rating))}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">{tour.rating}</span>
                      <span className="text-sm text-gray-400">({tour.reviewsCount})</span>
                    </div>
                    <button className="bg-[#00AA6C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#008855] transition">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Why Book Section */}
          <section className="mt-20 py-12 bg-white rounded-2xl shadow-sm">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Book With Us?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-medium">Local Guides</h3>
                </div>
                <div>
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-medium">Best Price</h3>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎒</div>
                  <h3 className="font-medium">Small Groups</h3>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔄</div>
                  <h3 className="font-medium">Flexible Cancel</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}