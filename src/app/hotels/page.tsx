import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: 'Four Seasons Baku',
    city: 'Баку',
    rating: 4.9,
    reviews: '1,543',
    type: 'Люкс',
    price: '$$$$',
    description: 'Роскошный отель в историческом центре Баку с видом на море и премиальным сервисом.',
    features: ['Спа-центр', 'Бассейн', 'Рестораны', 'Конференц-зал'],
    image: '/images/four-seasons.jpg'
  },
  {
    id: 2,
    name: 'JW Marriott Absheron',
    city: 'Баку',
    rating: 4.8,
    reviews: '2,123',
    type: 'Премиум',
    price: '$$$',
    description: 'Современный отель в деловом центре Баку с отличными условиями для бизнеса и отдыха.',
    features: ['Спа', 'Фитнес-центр', 'Рестораны', 'Бар на крыше'],
    image: '/images/jw-marriott.jpg'
  },
  {
    id: 3,
    name: 'Rixos Gabala',
    city: 'Габала',
    rating: 4.7,
    reviews: '1,234',
    type: 'Курорт',
    price: '$$$',
    description: 'Роскошный курорт у подножия Кавказских гор с собственным спа-центром и бассейнами.',
    features: ['Горнолыжный курорт', 'Спа', 'Бассейны', 'Детский клуб'],
    image: '/images/rixos-gabala.jpg'
  },
  {
    id: 4,
    name: 'Fairmont Baku',
    city: 'Баку',
    rating: 4.8,
    reviews: '987',
    type: 'Люкс',
    price: '$$$$',
    description: 'Элегантный отель на набережной с панорамным видом на Каспийское море.',
    features: ['Вид на море', 'Спа', 'Рестораны', 'Конгресс-центр'],
    image: '/images/fairmont.jpg'
  },
  {
    id: 5,
    name: 'Shahdag Mountain Resort',
    city: 'Шахдаг',
    rating: 4.6,
    reviews: '876',
    type: 'Горнолыжный',
    price: '$$$',
    description: 'Горнолыжный курорт с современными номерами и прямым доступом к трассам.',
    features: ['Горнолыжный курорт', 'Спа', 'Рестораны', 'Прокат снаряжения'],
    image: '/images/shahdag-resort.jpg'
  },
  {
    id: 6,
    name: 'Hotel Central Baku',
    city: 'Баку',
    rating: 4.5,
    reviews: '1,876',
    type: 'Бизнес',
    price: '$$',
    description: 'Удобный отель в центре Баку с хорошим соотношением цены и качества.',
    features: ['Wi-Fi', 'Завтрак', 'Трансфер', 'Консьерж'],
    image: '/images/central-baku.jpg'
  }
];

const categories = [
  { name: 'Все', slug: 'all' },
  { name: 'Люкс', slug: 'luxury' },
  { name: 'Премиум', slug: 'premium' },
  { name: 'Бизнес', slug: 'business' },
  { name: 'Бюджетные', slug: 'budget' },
  { name: 'Курорты', slug: 'resorts' },
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Отели Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для проживания</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/hotels/${category.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🏨</span>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm">
                        ★ {hotel.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{hotel.city} • {hotel.type} • {hotel.price}</p>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{hotel.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {hotel.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {hotel.reviews} отзывов
                    </div>
                  </div>
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
