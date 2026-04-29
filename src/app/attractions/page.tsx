import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Полные данные о достопримечательностях Азербайджана
const attractions = [
  {
    id: 1,
    name: 'Старый город (Ичери Шехер)',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '3,456',
    type: 'Исторический',
    description: 'Древняя крепость с узкими улочками, мечетями и историческими зданиями. Всемирное наследие ЮНЕСКО с 2000 года. Один из самых посещаемых туристических объектов в Азербайджане.',
    history: 'Крепость была основана в I веке до н.э. и служила важным торговым центром на Великом Шелковом пути. Внутри стен сохранились многочисленные исторические здания, мечети и караван-сараи.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Сувениры', 'Музеи', 'Фото', 'История'],
    address: 'Улица Ичери Шехер',
    hours: '09:00 - 18:00',
    price: 'Бесплатно',
    image: '/images/icheri-sheher.jpg'
  },
  {
    id: 2,
    name: 'Гобустан',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,123',
    type: 'Природа',
    description: 'Национальный парк с древними наскальными рисунками возрастом до 40 тысяч лет и уникальными грязевыми вулканами. Расположен в 60 км от Баку.',
    history: 'На территории парка обнаружено более 6 тысяч наскальных рисунков, отображающих охоту, танцы и ритуалы древних людей. Парк также известен своими грязевыми вулканами.',
    features: ['Наскальные рисунки', 'Вулканы', 'Экскурсии', 'Музей', 'Природа'],
    address: 'Гобустан, 60 км от Баку',
    hours: '09:00 - 18:00',
    price: '5 манат',
    image: '/images/gobustan.jpg'
  },
  {
    id: 3,
    name: 'Дворец Шеки Ханов',
    city: 'Шеки',
    citySlug: 'sheki',
    rating: 4.9,
    reviews: '1,876',
    type: 'Архитектура',
    description: 'Исторический дворец 18 века с уникальной архитектурой и фресками. Памятник Всемирного наследия ЮНЕСКО с 2019 года.',
    history: 'Дворец был построен в 1797 году для шекинского хана Мухаммед Хасан-бека. Здание известно своими уникальными фресками и мозаиками из цветного стекла.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Музей', 'Фото', 'Архитектура'],
    address: 'Улица Карева, 5',
    hours: '10:00 - 18:00',
    price: '8 манат',
    image: '/images/sheki-khan.jpg'
  },
  {
    id: 4,
    name: 'Башня Мэйден',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,543',
    type: 'Исторический',
    description: 'Средневековая башня 12 века с панорамным видом на город. Один из символов Баку.',
    history: 'Башня была построена в XII веке и служила частью оборонительных сооружений Старого города. Её высота составляет 29,5 метров.',
    features: ['ЮНЕСКО', 'Вид на город', 'Экскурсии', 'История'],
    address: 'Улица Мэйден, 1',
    hours: '10:00 - 18:00',
    price: '6 манат',
    image: '/images/maiden-tower.jpg'
  },
  {
    id: 5,
    name: 'Габалинские водопады',
    city: 'Габала',
    citySlug: 'gabala',
    rating: 4.6,
    reviews: '987',
    type: 'Природа',
    description: 'Красивые водопады в горах с чистой холодной водой и живописными пейзажами. Идеальное место для пикника и фотографий.',
    history: 'Водопады образовались в результате таяния снегов в Кавказских горах. Высота падения воды достигает 30 метров.',
    features: ['Походы', 'Фото', 'Пикник', 'Природа'],
    address: 'Горы Кавказ, 20 км от Габалы',
    hours: 'Круглосуточно',
    price: 'Бесплатно',
    image: '/images/gabala-waterfalls.jpg'
  },
  {
    id: 6,
    name: 'Театр Оперы и Балета',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.8,
    reviews: '1,234',
    type: 'Культура',
    description: 'Величественное здание театра с высококачественными постановками. Расположено в центре Баку.',
    history: 'Театр был построен в 1911 году и является одним из старейших оперных театров на Кавказе. Здание выполнено в стиле барокко.',
    features: ['Балет', 'Опера', 'Концерты', 'Экскурсии'],
    address: 'Площадь Урду, 1',
    hours: '10:00 - 22:00',
    price: 'От 10 манат',
    image: '/images/opera.jpg'
  },
  {
    id: 7,
    name: 'Озеро Гоязан',
    city: 'Гянджа',
    citySlug: 'gandja',
    rating: 4.5,
    reviews: '654',
    type: 'Природа',
    description: 'Красивое озеро в окружении гор с чистой водой и живописными пейзажами. Идеальное место для отдыха на природе.',
    features: ['Природа', 'Фото', 'Пикник', 'Рыбалка'],
    address: 'Горы Муровдаг, 15 км от Гянджи',
    hours: 'Круглосуточно',
    price: 'Бесплатно',
    image: '/images/goyazan.jpg'
  },
  {
    id: 8,
    name: 'Дворец Ширваншахов',
    city: 'Баку',
    citySlug: 'baku',
    rating: 4.7,
    reviews: '2,123',
    type: 'Исторический',
    description: 'Исторический дворец 15 века, расположенный в Старом городе. Памятник архитектуры и истории.',
    history: 'Дворец был резиденцией правителей Ширваншахов. Здание известно своей уникальной архитектурой и мозаикой.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Музей', 'История'],
    address: 'Улица Ичери Шехер',
    hours: '10:00 - 18:00',
    price: '6 манат',
    image: '/images/shirvanshah-palace.jpg'
  }
];

// Фильтры
const filters = [
  { name: 'Все', slug: 'all' },
  { name: 'Исторические', slug: 'historical' },
  { name: 'Природа', slug: 'nature' },
  { name: 'Архитектура', slug: 'architecture' },
  { name: 'Культура', slug: 'culture' },
  { name: 'Музеи', slug: 'museums' },
];

const cities = ['Баку', 'Габала', 'Шеки', 'Гянджа', 'Ленкорань'];

export default function AttractionsPage() {
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
              <span>Достопримечательности</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Достопримечательности Азербайджана</h1>
            <p className="text-blue-200">Лучшие места для экскурсий и отдыха — от древних памятников до природных чудес</p>
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
                    href={`/attractions/${filter.slug}`}
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

        {/* Attractions List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Найдено: {attractions.length} достопримечательностей</p>
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
              {attractions.map((attraction) => (
                <Link
                  key={attraction.id}
                  href={`/attractions/${attraction.id}`}
                  className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex">
                    <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl">🏛️</span>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg hover:text-blue-600">{attraction.name}</h3>
                          <p className="text-sm text-gray-500">{attraction.city} • {attraction.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">
                              ★ {attraction.rating}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{attraction.reviews} отзывов</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{attraction.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {attraction.features.slice(0, 4).map((feature, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>📍 {attraction.address}</span>
                        <span>🕒 {attraction.hours}</span>
                        <span>💰 {attraction.price}</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Хотите организовать экскурсию?</h2>
            <p className="text-gray-600 mb-6">Наши гиды проведут вас по лучшим местам Азербайджана</p>
            <Link href="/tours" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Выбрать тур
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
