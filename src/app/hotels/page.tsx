import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Полные данные об отелях Азербайджана
const hotels = [
  {
    id: 1,
    name: 'Four Seasons Baku',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.9,
    reviews: '1,543',
    type: 'Люкс',
    price: '$$$$',
    description: 'Роскошный отель в историческом центре Баку с видом на море и премиальным сервисом. Расположен в здании бывшего особняка начала XX века, отреставрированном в соответствии с лучшими традициями.',
    features: ['Спа-центр', 'Бассейн', 'Рестораны', 'Конференц-зал', 'Трансфер', 'Консьерж'],
    address: 'Нефтяников проспект, 25',
    phone: '+994 12 404 10 00',
    website: 'fourseasons.com/baku',
    image: '/images/four-seasons.jpg'
  },
  {
    id: 2,
    name: 'JW Marriott Absheron',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '2,123',
    type: 'Премиум',
    price: '$$$',
    description: 'Современный отель в деловом центре Баку с отличными условиями для бизнеса и отдыха. 5 звезд и высочайший уровень сервиса. Расположен недалеко от исторического центра.',
    features: ['Спа', 'Фитнес-центр', 'Рестораны', 'Бар на крыше', 'Бизнес-центр'],
    address: 'Проспект Азербайджана, 15',
    phone: '+994 12 565 30 00',
    website: 'marriott.com/baku',
    image: '/images/jw-marriott.jpg'
  },
  {
    id: 3,
    name: 'Rixos Gabala',
    city: 'Габала',
    citySlug: 'gabala',
    rating: 4.7,
    reviews: '1,234',
    type: 'Курорт',
    price: '$$$',
    description: 'Роскошный курорт у подножия Кавказских гор с собственным спа-центром и бассейнами. Идеальное место для семейного отдыха и горнолыжного сезона.',
    features: ['Горнолыжный курорт', 'Спа', 'Бассейны', 'Детский клуб', 'Анимация'],
    address: 'Курорт Риксос Габала',
    phone: '+994 20 255 10 00',
    website: 'rixos.com/gabala',
    image: '/images/rixos-gabala.jpg'
  },
  {
    id: 4,
    name: 'Fairmont Baku',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '987',
    type: 'Люкс',
    price: '$$$$',
    description: 'Элегантный отель на набережной с панорамным видом на Каспийское море. Расположен в башнях Flame Towers.',
    features: ['Вид на море', 'Спа', 'Рестораны', 'Конгресс-центр', 'Бассейн'],
    address: 'Проспект Нефтяников, 15',
    phone: '+994 12 598 00 00',
    website: 'fairmont.com/baku',
    image: '/images/fairmont.jpg'
  },
  {
    id: 5,
    name: 'Shahdag Mountain Resort',
    city: 'Шахдаг',
    citySlug: 'shahdag',
    rating: 4.6,
    reviews: '876',
    type: 'Горнолыжный',
    price: '$$$',
    description: 'Горнолыжный курорт с современными номерами и прямым доступом к трассам. Идеальное место для зимнего отдыха.',
    features: ['Горнолыжный курорт', 'Спа', 'Рестораны', 'Прокат снаряжения', 'Школа лыж'],
    address: 'Горы Шахдаг',
    phone: '+994 12 498 50 00',
    website: 'shahdag.com',
    image: '/images/shahdag-resort.jpg'
  },
  {
    id: 6,
    name: 'Hotel Central Baku',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.5,
    reviews: '1,876',
    type: 'Бизнес',
    price: '$$',
    description: 'Удобный отель в центре Баку с хорошим соотношением цены и качества. Идеальное место для деловых поездок.',
    features: ['Wi-Fi', 'Завтрак', 'Трансфер', 'Консьерж', 'Парковка'],
    address: 'Улица Низами, 5',
    phone: '+994 12 492 34 56',
    website: 'centralbaku.az',
    image: '/images/central-baku.jpg'
  },
  {
    id: 7,
    name: 'Lankaran Resort & Spa',
    city: 'Ленкорань',
    citySlug: 'lenkoran',
    rating: 4.6,
    reviews: '543',
    type: 'Курорт',
    price: '$$',
    description: 'Курорт на берегу Каспийского моря с собственным пляжем и спа-центром. Идеальное место для летнего отдыха.',
    features: ['Пляж', 'Спа', 'Бассейн', 'Рестораны', 'Анимация'],
    address: 'Набережная, 10',
    phone: '+994 25 251 23 45',
    website: 'lankaranresort.az',
    image: '/images/lankaran-resort.jpg'
  },
  {
    id: 8,
    name: 'Sheki Palace Hotel',
    city: 'Шеки',
    citySlug: 'sheki',
    rating: 4.7,
    reviews: '765',
    type: 'Бутик',
    price: '$$$',
    description: 'Бутик-отель в историческом центре Шеки, оформленный в традиционном стиле. Расположен недалеко от Дворца Шеки Ханов.',
    features: ['Традиционный стиль', 'Ресторан', 'Терраса', 'Сувенирный магазин'],
    address: 'Улица Карева, 8',
    phone: '+994 24 231 56 78',
    website: 'shekipalace.az',
    image: '/images/sheki-palace.jpg'
  }
];

// Фильтры
const filters = [
  { name: 'Все', slug: 'all' },
  { name: 'Люкс', slug: 'luxury' },
  { name: 'Премиум', slug: 'premium' },
  { name: 'Бизнес', slug: 'business' },
  { name: 'Бюджетные', slug: 'budget' },
  { name: 'Курорты', slug: 'resorts' },
];

const cities = ['Баку', 'Габала', 'Шеки', 'Ленкорань', 'Шахдаг'];

export default function HotelsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Главная</Link>
              <span className="mx-2">/</span>
              <span>Отели</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Отели Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для проживания — от роскошных люксов до уютных бутик-отелей</p>
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
                    href={`/hotels/${filter.slug}`}
                    className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition text-sm"
                  >
                    {filter.name}
                  </Link>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                <span>Город:</span>
                <select className="border rounded px-2 py-1">
                  <option>Все города</option>
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
              <p className="text-gray-600">Найдено: {hotels.length} отелей</p>
              <div className="flex items-center gap-2 text-sm">
                <span>Сортировка:</span>
                <select className="border rounded px-2 py-1">
                  <option>По рейтингу</option>
                  <option>По количеству отзывов</option>
                  <option>По цене</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    <span className="text-5xl">🏨</span>
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium shadow">
                      ★ {hotel.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600">{hotel.name}</h3>
                        <p className="text-sm text-gray-500">{hotel.city} • {hotel.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{hotel.reviews} отзывов</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">{hotel.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {hotel.features.slice(0, 4).map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xs text-gray-500">
                        <span>📍 {hotel.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`tel:${hotel.phone}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Позвонить
                        </Link>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Нужна помощь с бронированием?</h2>
            <p className="text-gray-600 mb-6">Наши специалисты помогут подобрать идеальный отель для вашего отдыха</p>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Оставить заявку
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
