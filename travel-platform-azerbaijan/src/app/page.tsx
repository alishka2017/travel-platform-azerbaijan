import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Mock data for cities
const cities = [
  { name: 'Баку', image: '/baku.jpg', slug: 'baku' },
  { name: 'Габала', image: '/gabala.jpg', slug: 'gabala' },
  { name: 'Шеки', image: '/sheki.jpg', slug: 'sheki' },
  { name: 'Гянджа', image: '/ganja.jpg', slug: 'ganja' },
];

// Mock data for restaurants
const restaurants = [
  { name: 'Mugam Club', city: 'Баку', rating: 4.8 },
  { name: 'Chayka', city: 'Баку', rating: 4.7 },
  { name: 'Nargiz', city: 'Габала', rating: 4.6 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Путешествуй по Азербайджану</h1>
          <p className="text-xl mb-8">Откройте для себя красоту Кавказа</p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Куда хотите поехать?" 
                className="flex-1 p-3 border border-gray-300 rounded-md text-gray-900"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                Найти
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Популярные города</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city.slug} href={`/city/${city.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div> {/* Placeholder for image */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{city.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Restaurants */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Лучшие рестораны</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                  <p className="text-gray-500">{restaurant.city}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-gray-700">{restaurant.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Планируете поездку?</h2>
          <p className="mb-6">Оставьте заявку и наш специалист поможет вам организовать идеальный отдых.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
            Оставить заявку
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}