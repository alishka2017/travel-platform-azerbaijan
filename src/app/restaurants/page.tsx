import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data for restaurants
const restaurants = [
  {
    id: 1,
    name: 'Mugam Club',
    city: 'Баку',
    rating: 4.8,
    reviews: '2,341',
    cuisine: 'Азербайджанская',
    price: '$$',
    description: 'Элегантный ресторан с живой музыкой и традиционной азербайджанской кухней. Идеальное место для ужина в центре Баку.',
    features: ['Живая музыка', 'Терраса', 'Винная карта'],
    image: '/images/mugam-club.jpg'
  },
  {
    id: 2,
    name: 'Şirvanşah',
    city: 'Баку',
    rating: 4.7,
    reviews: '1,876',
    cuisine: 'Национальная',
    price: '$$',
    description: 'Традиционный ресторан с аутентичной азербайджанской кухней и уютной атмосферой.',
    features: ['Национальная кухня', 'Дегустация пловов', 'Сувенирный магазин'],
    image: '/images/shirvanshah.jpg'
  },
  {
    id: 3,
    name: 'Nargiz',
    city: 'Габала',
    rating: 4.6,
    reviews: '987',
    cuisine: 'Европейская',
    price: '$$$',
    description: 'Современный ресторан европейской кухни с панорамным видом на горы.',
    features: ['Вид на горы', 'Крафтовое пиво', 'Десертная карта'],
    image: '/images/nargiz.jpg'
  },
  {
    id: 4,
    name: 'Çeşmə',
    city: 'Шеки',
    rating: 4.9,
    reviews: '1,234',
    cuisine: 'Традиционная',
    price: '$',
    description: 'Уютное кафе с домашней кухней и шекинским пловом.',
    features: ['Домашняя кухня', 'Шекинский плов', 'Терраса'],
    image: '/images/chesme.jpg'
  },
  {
    id: 5,
    name: 'Sky Grill',
    city: 'Баку',
    rating: 4.7,
    reviews: '876',
    cuisine: 'Стейкхаус',
    price: '$$$',
    description: 'Ресторан на крыше с видом на Бакинскую бухту и изысканной кухней.',
    features: ['Вид на море', 'Рooftop', 'Стейки'],
    image: '/images/sky-grill.jpg'
  },
  {
    id: 6,
    name: 'Banana',
    city: 'Баку',
    rating: 4.5,
    reviews: '2,543',
    cuisine: 'Итальянская',
    price: '$$',
    description: 'Популярная пиццерия с аутентичной итальянской пиццей и пастой.',
    features: ['Живая музыка', 'Детская зона', 'Доставка'],
    image: '/images/banana.jpg'
  }
];

const categories = [
  { name: 'Все', slug: 'all' },
  { name: 'Азербайджанская', slug: 'azerbaijani' },
  { name: 'Европейская', slug: 'european' },
  { name: 'Азиатская', slug: 'asian' },
  { name: 'Стейкхаус', slug: 'steakhouse' },
  { name: 'Кофейни', slug: 'coffee' },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Рестораны Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для вкусного отдыха</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/restaurants/${category.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🍽️</span>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                      <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                        ★ {restaurant.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{restaurant.city} • {restaurant.cuisine} • {restaurant.price}</p>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{restaurant.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {restaurant.reviews} отзывов
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
