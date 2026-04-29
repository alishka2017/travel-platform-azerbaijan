import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data for attractions
const attractions = [
  {
    id: 1,
    name: 'Старый город (Ичери Шехер)',
    city: 'Баку',
    rating: 4.8,
    reviews: '3,456',
    type: 'Исторический',
    description: 'Древняя крепость с узкими улочками, мечетями и историческими зданиями. Всемирное наследие ЮНЕСКО.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Сувениры'],
    image: '/images/icheri-sheher.jpg'
  },
  {
    id: 2,
    name: 'Гобустан',
    city: 'Баку',
    rating: 4.7,
    reviews: '2,123',
    type: 'Природа',
    description: 'Национальный парк с древними наскальными рисунками и грязевыми вулканами.',
    features: ['Наскальные рисунки', 'Вулканы', 'Экскурсии'],
    image: '/images/gobustan.jpg'
  },
  {
    id: 3,
    name: 'Дворец Шеки Ханов',
    city: 'Шеки',
    rating: 4.9,
    reviews: '1,876',
    type: 'Архитектура',
    description: 'Исторический дворец 18 века с уникальной архитектурой и фресками.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Музей'],
    image: '/images/sheki-khan.jpg'
  },
  {
    id: 4,
    name: 'Башня Мэйден',
    city: 'Баку',
    rating: 4.7,
    reviews: '2,543',
    type: 'Исторический',
    description: 'Средневековая башня 12 века с панорамным видом на город.',
    features: ['ЮНЕСКО', 'Вид на город', 'Экскурсии'],
    image: '/images/maiden-tower.jpg'
  },
  {
    id: 5,
    name: 'Габалинские водопады',
    city: 'Габала',
    rating: 4.6,
    reviews: '987',
    type: 'Природа',
    description: 'Красивые водопады в горах с чистой холодной водой и живописными пейзажами.',
    features: ['Походы', 'Фото', 'Пикник'],
    image: '/images/gabala-waterfalls.jpg'
  },
  {
    id: 6,
    name: 'Театр Оперы и Балета',
    city: 'Баку',
    rating: 4.8,
    reviews: '1,234',
    type: 'Культура',
    description: 'Величественное здание театра с высококачественными постановками.',
    features: ['Балет', 'Опера', 'Концерты'],
    image: '/images/opera.jpg'
  }
];

const categories = [
  { name: 'Все', slug: 'all' },
  { name: 'Исторические', slug: 'historical' },
  { name: 'Природа', slug: 'nature' },
  { name: 'Архитектура', slug: 'architecture' },
  { name: 'Культура', slug: 'culture' },
  { name: 'Музеи', slug: 'museums' },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Достопримечательности Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для экскурсий и отдыха</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/attractions/${category.slug}`}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {attractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                      <span className="bg-yellow-500 text-white px-2 py-0.5 rounded text-sm">
                        ★ {attraction.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{attraction.city} • {attraction.type}</p>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{attraction.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {attraction.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {attraction.reviews} отзывов
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
