import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { places } from '@/data/places';
import { notFound } from 'next/navigation';
import { generateTourMetadata } from '@/lib/metadata';
import { generatePlaceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import { HeartButton } from '@/components/HeartButton';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return generateTourMetadata(params.id);
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = places.find(p => p.id === params.id && p.category === 'Tours');

  if (!tour) {
    notFound();
  }

  const schema = generatePlaceSchema(tour);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://smartholiday.az" },
    { name: "Tours", url: "https://smartholiday.az/tours" },
    { name: tour.name, url: `https://smartholiday.az/tours/${tour.id}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-[#00AA6C]">Tours</Link>
            <span>/</span>
            <span className="text-gray-800">{tour.name}</span>
          </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Details */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative h-80 rounded-xl overflow-hidden mb-6">
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.jpg';
                }}
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#00AA6C]">
                {tour.priceLevel}
              </div>
              <HeartButton 
                item={{
                  id: tour.id,
                  name: tour.name,
                  type: 'tour',
                  category: tour.category,
                  image: tour.image,
                  rating: tour.rating,
                }}
                className="absolute bottom-4 right-4"
              />
            </div>

            {/* Title & Rating */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{tour.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="font-medium">{tour.rating}</span>
                <span className="text-gray-500">({tour.reviewsCount.toLocaleString()} reviews)</span>
              </div>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{tour.city}</span>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">About this tour</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </div>

            {/* What's Included */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">What's Included</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#00AA6C]">✓</span>
                  Professional guide
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00AA6C]">✓</span>
                  Transportation (if applicable)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00AA6C]">✓</span>
                  Entrance fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00AA6C]">✓</span>
                  Hotel pickup/drop-off
                </li>
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <h3 className="font-semibold text-blue-800 mb-3">💡 Tips from our guide</h3>
              <ul className="space-y-2 text-blue-700">
                {tour.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#00AA6C] mb-4">
                {tour.priceLevel}
                <span className="text-sm font-normal text-gray-500"> / person</span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                <span>📅 {tour.openingHours}</span>
              </div>

              <button className="w-full bg-[#00AA6C] text-white py-3 rounded-lg font-semibold hover:bg-[#008855] transition mb-3">
                Book Now
              </button>

              <button className="w-full border border-[#00AA6C] text-[#00AA6C] py-3 rounded-lg font-semibold hover:bg-[#00AA6C] hover:text-white transition">
                Send Inquiry
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Contact Tour Operator</h4>
                <p className="text-sm text-gray-600 mb-2">Response time: Usually within 24 hours</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📞</span>
                  <span>+994 50 123 45 67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}