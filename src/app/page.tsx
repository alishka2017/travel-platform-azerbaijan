import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data for homepage
const cities = [
  { name: 'Баку', slug: 'baku', image: '/images/baku.jpg', description: 'Столица Азербайджана', reviews: '12,456' },
  { name: 'Габала', slug: 'gabala', image: '/images/gabala.jpg', description: 'Горнолыжный курорт', reviews: '3,234' },
  { name: 'Шеки', slug: 'sheki', image: '/images/sheki.jpg', description: 'Исторический город', reviews: '2,876' },
  { name: 'Гянджа', slug: 'gandja', image: '/images/gandja.jpg', description: 'Второй по величине город', reviews: '1,987' },
  { name: 'Ленкорань', slug: 'lenkoran', image: '/images/lenkoran.jpg', description: 'Курорт на Каспии', reviews: '1,543' },
  { name: 'Шахдаг', slug: 'shahdag', image: '/images/shahdag.jpg', description: 'Горнолыжный курорт', reviews: '2,123' },
];

const categories = [
  { name: 'Рестораны', slug: 'restaurants', icon: '🍽️', count: '5,432' },
  { name: 'Отели', slug: 'hotels', icon: '🏨', count: '3,210' },
  { name: 'Развлечения', slug: 'attractions', icon: '🎭', count: '2,876' },
  { name: 'Туры', slug: 'tours', icon: '🚌', count: '1,234' },
];

const topRestaurants = [
  { name: 'Mugam Club', city: 'Баку', rating: 4.8, reviews: '2,341', cuisine: 'Азербайджанская' },
  { name: 'Şirvanşah', city: 'Баку', rating: 4.7, reviews: '1,876', cuisine: 'Национальная' },
  { name: 'Nargiz', city: 'Габала', rating: 4.6, reviews: '987', cuisine: 'Европейская' },
];

const topHotels = [
  { name: 'Four Seasons Baku', city: 'Баку', rating: 4.9, reviews: '1,543', type: 'Люкс' },
  { name: 'JW Marriott Absheron', city: 'Баку', rating: 4.8, reviews: '2,123', type: 'Премиум' },
  { name: 'Rixos Gabala', city: 'Габала', rating: 4.7, reviews: '1,234', type: 'Курорт' },
];

const topAttractions = [
  { name: 'Старый город (Ичери Шехер)', city: 'Баку', rating: 4.8, reviews: '3,456', type: 'Исторический' },
  { name: 'Гобустан', city: 'Баку', rating: 4.7, reviews: '2,123', type: 'Природа' },
  { name: 'Дворец Шеки Ханов', city: 'Шеки', rating: 4.9, reviews: '1,876', type: 'Архитектура' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="bg-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Азербайджан
            </h1>
            <p className="text-blue-200 text-lg">
              Откройте для себя лучшие места для отдыха, рестораны и развлечения
            </p>
          </div>
          
          {/* Search Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Куда вы хотите отправиться?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Поиск
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} объектов</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Города Азербайджана</h2>
            <Link href="/cities" className="text-blue-600 hover:text-blue-800 font-medium">
              Все города →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ru/${city.slug}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-4xl">🏰</span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{city.name}</h3>
                  <p className="text-xs text-gray-500">{city.reviews} отзывов</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Restaurants */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Лучшие рестораны</h2>
            <Link href="/restaurants" className="text-blue-600 hover:text-blue-800 font-medium">
              Все рестораны →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRestaurants.map((restaurant, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 flex gap-4 hover:bg-gray-100 transition">
                <div className="text-3xl font-bold text-gray-300 w-8">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                  <p className="text-sm text-gray-500">{restaurant.city} • {restaurant.cuisine}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                      ★ {restaurant.rating}
                    </span>
                    <span className="text-sm text-gray-500">{restaurant.reviews} отзывов</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Hotels */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Лучшие отели</h2>
            <Link href="/hotels" className="text-blue-600 hover:text-blue-800 font-medium">
              Все отели →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl">🏨</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.city} • {hotel.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm">
                      ★ {hotel.rating}
                    </span>
                    <span className="text-sm text-gray-500">{hotel.reviews} отзывов</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Популярные достопримечательности</h2>
            <Link href="/attractions" className="text-blue-600 hover:text-blue-800 font-medium">
              Все достопримечательности →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topAttractions.map((attraction, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="text-3xl font-bold text-gray-300 w-8">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                  <p className="text-sm text-gray-500">{attraction.city} • {attraction.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-yellow-500 text-white px-2 py-0.5 rounded text-sm">
                      ★ {attraction.rating}
                    </span>
                    <span className="text-sm text-gray-500">{attraction.reviews} отзывов</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Планируете поездку в Азербайджан?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Найдите лучшие отели, рестораны и развлечения для вашего идеального отдыха
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Туры
            </Link>
            <Link href="/guides" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              Гиды
            </Link>
            <Link href="/transfers" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              Трансферы
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
