import Link from 'next/link';
import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/layout/Footer';
import { getToursSync } from '@/lib/content';
import { HeartButton } from '@/components/HeartButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Что делать в Азербайджане | Smartholiday.az",
  description: "Откройте для себя лучшие туры и мероприятия в Азербайджане. От городских экскурсий до приключений в горах.",
};

export default function ToursPage() {
  const tours = getToursSync();
  
  // Flatten all tours for the main listing
  const allTours = [
    ...tours['city-tours'],
    ...tours['day-trips'],
    ...tours['multi-day'],
    ...tours['adventure'],
    ...tours['food-wine']
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Что делать</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Что делать в Азербайджане
          </h1>
          <p className="text-gray-600">
            Откройте для себя кураторские туры и мероприятия для каждого путешественника
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(tours).map((category) => (
            <Link
              key={category}
              href={`/tours?category=${category}`}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00AA6C] hover:text-[#00AA6C] transition"
            >
              {category.replace('-', ' ').replace(/\w/g, l => l.toUpperCase())}
            </Link>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#00AA6C] text-white text-xs px-2 py-1 rounded-full">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{tour.name}</h3>
                  <p className="text-white/80 text-sm">{tour.duration}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link href="/contact" className="text-[#00AA6C] font-medium text-sm hover:underline">
                    Get Quote →
                  </Link>
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
