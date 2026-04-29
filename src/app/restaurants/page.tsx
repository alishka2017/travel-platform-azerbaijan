import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Полные данные о ресторанах Азербайджана
const restaurants = [
  {
    id: 1,
    name: 'Mugam Club',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '2,341',
    cuisine: 'Азербайджанская',
    price: '$$',
    description: 'Элегантный ресторан с живой музыкой и традиционной азербайджанской кухней. Идеальное место для ужина в центре Баку с видом на Старый город. Вечерами выступает ансамбль народной музыки.',
    features: ['Живая музыка', 'Терраса', 'Винная карта', 'VIP-зал', 'Панорамный вид'],
    address: 'Ulitsa Золотой, 5',
    phone: '+994 12 498 12 34',
    hours: '10:00 - 02:00',
    image: '/images/mugam-club.jpg'
  },
  {
    id: 2,
    name: 'Şirvanşah',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '1,876',
    cuisine: 'Национальная',
    price: '$$',
    description: 'Традиционный ресторан с аутентичной азербайджанской кухней и уютной атмосферой. Популярен среди туристов и местных жителей. Подают фирменный шашлык и плов.',
    features: ['Национальная кухня', 'Дегустация пловов', 'Сувенирный магазин', 'Фольклорная программа'],
    address: 'Улица Ичери Шехер, 12',
    phone: '+994 12 497 23 45',
    hours: '11:00 - 23:00',
    image: '/images/shirvanshah.jpg'
  },
  {
    id: 3,
    name: 'Nargiz',
    city: 'Габала',
    citySlug: 'gabala',
    rating: 4.6,
    reviews: '987',
    cuisine: 'Европейская',
    price: '$$$',
    description: 'Современный ресторан европейской кухни с панорамным видом на горы Кавказа. Идеальное место для романтического ужина или деловой встречи.',
    features: ['Вид на горы', 'Крафтовое пиво', 'Десертная карта', 'Терраса'],
    address: 'Курорт Риксос Габала',
    phone: '+994 20 255 12 34',
    hours: '12:00 - 23:00',
    image: '/images/nargiz.jpg'
  },
  {
    id: 4,
    name: 'Çeşmə',
    city: 'Шеки',
    citySlug: 'sheki',
    rating: 4.9,
    reviews: '1,234',
    cuisine: 'Традиционная',
    price: '$',
    description: 'Уютное кафе с домашней кухней и шекинским пловом — местным деликатесом. Расположено в историческом центре Шеки.',
    features: ['Домашняя кухня', 'Шекинский плов', 'Терраса', 'Сувениры'],
    address: 'Площадь Мира, 3',
    phone: '+994 24 231 56 78',
    hours: '09:00 - 22:00',
    image: '/images/chesme.jpg'
  },
  {
    id: 5,
    name: 'Sky Grill',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '876',
    cuisine: 'Стейкхаус',
    price: '$$$',
    description: 'Ресторан на крыше с видом на Бакинскую бухту и изысканной кухней. Подают премиальные стейки и морепродукты.',
    features: ['Вид на море', 'Rooftop', 'Стейки', 'Винная карта'],
    address: 'Отель Фур Сизонс, проспект Нефтяников',
    phone: '+994 12 404 12 34',
    hours: '18:00 - 01:00',
    image: '/images/sky-grill.jpg'
  },
  {
    id: 6,
    name: 'Banana',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.5,
    reviews: '2,543',
    cuisine: 'Итальянская',
    price: '$$',
    description: 'Популярная пиццерия с аутентичной итальянской пиццей и пастой. Идеальное место для семейного ужина.',
    features: ['Живая музыка', 'Детская зона', 'Доставка', 'Терраса'],
    address: 'Улица Низами, 45',
    phone: '+994 12 492 34 56',
    hours: '10:00 - 00:00',
    image: '/images/banana.jpg'
  },
  {
    id: 7,
    name: 'Deniz',
    city: 'Ленкорань',
    citySlug: 'lenkoran',
    rating: 4.6,
    reviews: '654',
    cuisine: 'Морская',
    price: '$$',
    description: 'Ресторан на берегу Каспийского моря со свежими морепродуктами. Популярен среди местных жителей и туристов.',
    features: ['Вид на море', 'Свежие морепродукты', 'Терраса', 'Рыбный суп'],
    address: 'Набережная, 1',
    phone: '+994 25 251 23 45',
    hours: '11:00 - 23:00',
    image: '/images/deniz.jpg'
  },
  {
    id: 8,
    name: 'Gaya',
    city: 'Гянджа',
    citySlug: 'gandja',
    rating: 4.5,
    reviews: '432',
    cuisine: 'Национальная',
    price: '$',
    description: 'Традиционный ресторан с аутентичной кухней Гянджи. Популярен среди местных жителей.',
    features: ['Национальная кухня', 'Дешево', 'Быстрое обслуживание'],
    address: 'Проспект Алиева, 15',
    phone: '+994 22 251 23 45',
    hours: '09:00 - 21:00',
    image: '/images/gaya.jpg'
  }
];

// Фильтры
const filters = [
  { name: 'Все', slug: 'all' },
  { name: 'Азербайджанская', slug: 'azerbaijani' },
  { name: 'Европейская', slug: 'european' },
  { name: 'Азиатская', slug: 'asian' },
  { name: 'Стейкхаус', slug: 'steakhouse' },
  { name: 'Кофейни', slug: 'coffee' },
];

const cities = ['Баку', 'Габала', 'Шеки', 'Ленкорань', 'Гянджа'];

export default function RestaurantsPage() {
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
              <span>Рестораны</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Рестораны Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для вкусного отдыха — от традиционной азербайджанской кухни до европейских ресторанов</p>
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
                    href={`/restaurants/${filter.slug}`}
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

        {/* Restaurants List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Найдено: {restaurants.length} ресторанов</p>
              <div className="flex items-center gap-2 text-sm">
                <span>Сортировка:</span>
                <select className="border rounded px-2 py-1">
                  <option>По рейтингу</option>
                  <option>По количеству отзывов</option>
                  <option>По названию</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {restaurants.map((restaurant) => (
                <Link
                  key={restaurant.id}
                  href={`/restaurants/${restaurant.id}`}
                  className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl">🍽️</span>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg hover:text-blue-600">{restaurant.name}</h3>
                          <p className="text-sm text-gray-500">{restaurant.city} • {restaurant.cuisine} • {restaurant.price}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                              ★ {restaurant.rating}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{restaurant.reviews} отзывов</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{restaurant.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {restaurant.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>📍 {restaurant.address}</span>
                        <span>📞 {restaurant.phone}</span>
                        <span>🕒 {restaurant.hours}</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Не нашли подходящий ресторан?</h2>
            <p className="text-gray-600 mb-6">Свяжитесь с нами для получения персональных рекомендаций</p>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Связаться с нами
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
