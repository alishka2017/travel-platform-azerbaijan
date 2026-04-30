'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { places, getPlacesByCity } from '@/data/places';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { generatePlaceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { HeartButton } from '@/components/HeartButton';

export default function AttractionContent({ params }: { params: { id: string } }) {
  const place = places.find(p => p.id === params.id);
  
  if (!place) {
    // Handle 404 on client if not found (though static gen should catch it)
    notFound();
  }

  const schema = generatePlaceSchema(place);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://smartholiday.az" },
    { name: "Attractions", url: "https://smartholiday.az/attractions" },
    { name: place.city, url: `https://smartholiday.az/cities/${place.citySlug}` },
    { name: place.name, url: `https://smartholiday.az/attractions/${place.id}` }
  ]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const relatedPlaces = getPlacesByCity(place.citySlug).filter(p => p.id !== place.id).slice(0, 4);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/attractions" className="hover:text-[#00AA6C]">Attractions</Link>
            <span className="mx-2">/</span>
            <Link href={`/cities/${place.citySlug}`} className="hover:text-[#00AA6C]">{place.city}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{place.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div 
                className="relative h-80 rounded-lg overflow-hidden mb-6 cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  {place.category}
                </div>
                <HeartButton 
                  item={{
                    id: place.id,
                    name: place.name,
                    type: 'attraction',
                    category: place.category,
                    image: place.image,
                    rating: place.rating,
                  }}
                  className="absolute top-4 right-4"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                    View Gallery
                  </span>
                </div>
              </div>

              {/* Title and Rating */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{place.name}</h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#00AA6C] text-white px-2 py-1 rounded font-bold">
                      {place.rating}
                    </div>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(place.rating))}
                      {'☆'.repeat(5 - Math.floor(place.rating))}
                    </div>
                  </div>
                  <span className="text-gray-600">{place.reviewsCount.toLocaleString()} reviews</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">📍 {place.city}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">About</h2>
                <p className="text-gray-700 leading-relaxed">{place.description}</p>
              </div>

              {/* Practical Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Practical Info</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-700">{place.address}</p>
                  </div>
                  {place.openingHours && (
                    <div>
                      <p className="text-sm text-gray-500">Opening Hours</p>
                      <p className="text-gray-700">{place.openingHours}</p>
                    </div>
                  )}
                  {place.priceLevel && (
                    <div>
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="text-gray-700">{place.priceLevel}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tips */}
              {place.tips.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">💡 Tips from Travelers</h2>
                  <ul className="space-y-2">
                    {place.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00AA6C] mt-1">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {place.gallery.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {place.gallery.map((photo, index) => (
                      <div 
                        key={index} 
                        className="aspect-square rounded overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(index)}
                      >
                        <img 
                          src={photo} 
                          alt={`${place.name} photo ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-3">Location</h2>
                <div className="h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  Map Preview
                </div>
                <p className="mt-3 text-sm text-gray-600">{place.address}</p>
              </div>

              {/* Related Places */}
              {relatedPlaces.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-bold text-gray-800 mb-3">Nearby Attractions</h2>
                  <div className="space-y-4">
                    {relatedPlaces.map((related) => (
                      <Link 
                        href={`/attractions/${related.id}`} 
                        key={related.id}
                        className="flex gap-3 group"
                      >
                        <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                          <img 
                            src={related.image} 
                            alt={related.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 group-hover:text-[#00AA6C] transition text-sm">
                            {related.name}
                          </h3>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="text-xs text-gray-600">{related.rating}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{related.category}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox 
            images={place.gallery} 
            onClose={() => setLightboxOpen(false)} 
            initialIndex={lightboxIndex}
          />
        )}

        <Footer />
      </div>
    </>
  );
}