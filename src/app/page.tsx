import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Реальные данные о городах Азербайджана
const cities = [
  {
    id: 1,
    name: 'Баку',
    slug: 'baku',
    description: 'Столица Азербайджана, расположенная на западном берегу Каспийского моря. Современный мегаполис с богатой историей, где сочетаются древние памятники архитектуры и ультрасовременные небоскребы.',
    facts: ['Население: 2.3 млн', 'Основан: I век до н.э.', 'Расположение: Каспийское побережье'],
    image: '/images/baku.jpg'
  },
  {
    id: 2,
    name: 'Габала',
    slug: 'gabala',
    description: 'Город в предгорьях Кавказа, известный как крупнейший горнолыжный курорт Азербайджана. Окружен величественными горами и хвойными лесами.',
    facts: ['Население: 13 тыс.', 'Высота: 700-1500 м', 'Курортный сезон: декабрь-март'],
    image: '/images/gabala.jpg'
  },
  {
    id: 3,
    name: 'Шеки',
    slug: 'sheki',
    description: 'Древний город на Великом Шелковом пути с 2700-летней историей. Известен своими историческими зданиями, включая Дворец Шеки Ханов — памятник Всемирного наследия ЮНЕСКО.',
    facts: ['Население: 63 тыс.', 'Основан: I тысячелетие до н.э.', 'ЮНЕСКО: с 2019 года'],
    image: '/images/sheki.jpg'
  },
  {
    id: 4,
    name: 'Гянджа',
    slug: 'gandja',
    description: 'Второй по величине город Азербайджана, один из древнейших городов Кавказа. Исторический центр с богатым культурным наследием.',
    facts: ['Население: 330 тыс.', 'Основан: IV-V века', 'История: 2500 лет'],
    image: '/images/gandja.jpg'
  },
  {
    id: 5,
    name: 'Ленкорань',
    slug: 'lenkoran',
    description: 'Курортный город на юге Азербайджана у Каспийского моря. Известен своими пляжами, термальными источниками и уникальной природой.',
    facts: ['Население: 51 тыс.', 'Курортный сезон: май-сентябрь', 'Температура летом: +25-30°C'],
    image: '/images/lenkoran.jpg'
  },
  {
    id: 6,
    name: 'Шахдаг',
    slug: 'shahdag',
    description: 'Современный горнолыжный курорт в Кавказских горах. Один из крупнейших горнолыжных центров региона с круглогодичным отдыхом.',
    facts: ['Высота: до 3000 м', 'Сезон: декабрь-апрель', 'Протяженность трасс: 40 км'],
    image: '/images/shahdag.jpg'
  }
];

// Лучшие рестораны
const topRestaurants = [
  {
    id: 1,
    name: 'Mugam Club',
    city: 'Баку',
    rating: 4.8,
    reviews: '2,341',
    cuisine: 'Азербайджанская',
    description: 'Элегантный ресторан с живой музыкой и традиционной азербайджанской кухней. Идеальное место для ужина в центре Баку с видом на Старый город.',
    features: ['Живая музыка', 'Терраса', 'Винная карта', 'VIP-зал']
  },
  {
    id: 2,
    name: 'Şirvanşah',
    city: 'Баку',
    rating: 4.7,
    reviews: '1,876',
    cuisine: 'Национальная',
    description: 'Традиционный ресторан с аутентичной азербайджанской кухней и уютной атмосферой. Популярен среди туристов и местных жителей.',
    features: ['Национальная кухня', 'Дегустация пловов', 'Сувенирный магазин']
  },
  {
    id: 3,
    name: 'Nargiz',
    city: 'Габала',
    rating: 4.6,
    reviews: '987',
    cuisine: 'Европейская',
    description: 'Современный ресторан европейской кухни с панорамным видом на горы Кавказа. Идеальное место для романтического ужина.',
    features: ['Вид на горы', 'Крафтовое пиво', 'Десертная карта']
  }
];

// Лучшие отели
const topHotels = [
  {
    id: 1,
    name: 'Four Seasons Baku',
    city: 'Баку',
    rating: 4.9,
    reviews: '1,543',
    type: 'Люкс',
    description: 'Роскошный отель в историческом центре Баку с видом на море и премиальным сервисом. Расположен в здании бывшего особняка начала XX века.',
    features: ['Спа-центр', 'Бассейн', 'Рестораны', 'Конференц-зал']
  },
  {
    id: 2,
    name: 'JW Marriott Absheron',
    city: 'Баку',
    rating: 4.8,
    reviews: '2,123',
    type: 'Премиум',
    description: 'Современный отель в деловом центре Баку с отличными условиями для бизнеса и отдыха. 5 звезд и высочайший уровень сервиса.',
    features: ['Спа', 'Фитнес-центр', 'Рестораны', 'Бар на крыше']
  },
  {
    id: 3,
    name: 'Rixos Gabala',
    city: 'Габала',
    rating: 4.7,
    reviews: '1,234',
    type: 'Курорт',
    description: 'Роскошный курорт у подножия Кавказских гор с собственным спа-центром и бассейнами. Идеальное место для семейного отдыха.',
    features: ['Горнолыжный курорт', 'Спа', 'Бассейны', 'Детский клуб']
  }
];

// Лучшие достопримечательности
const topAttractions = [
  {
    id: 1,
    name: 'Старый город (Ичери Шехер)',
    city: 'Баку',
    rating: 4.8,
    reviews: '3,456',
    type: 'Исторический',
    description: 'Древняя крепость с узкими улочками, мечетями и историческими зданиями. Всемирное наследие ЮНЕСКО с 2000 года.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Сувениры', 'Музеи']
  },
  {
    id: 2,
    name: 'Гобустан',
    city: 'Баку',
    rating: 4.7,
    reviews: '2,123',
    type: 'Природа',
    description: 'Национальный парк с древними наскальными рисунками возрастом до 40 тысяч лет и уникальными грязевыми вулканами.',
    features: ['Наскальные рисунки', 'Вулканы', 'Экскурсии', 'Музей']
  },
  {
    id: 3,
    name: 'Дворец Шеки Ханов',
    city: 'Шеки',
    rating: 4.9,
    reviews: '1,876',
    type: 'Архитектура',
    description: 'Исторический дворец 18 века с уникальной архитектурой и фресками. Памятник Всемирного наследия ЮНЕСКО.',
    features: ['ЮНЕСКО', 'Экскурсии', 'Музей', 'Фото']
  }
];

// Категории
const categories = [
  { name: 'Рестораны', slug: 'restaurants', icon: '🍽️', count: '5,432' },
  { name: 'Отели', slug: 'hotels', icon: '🏨', count: '3,210' },
  { name: 'Развлечения', slug: 'attractions', icon: '🎭', count: '2,876' },
  { name: 'Туры', slug: 'tours', icon: '🚌', count: '1,234' },
];

// Готовые маршруты
const routes = [
  { name: 'Баку за 1 день', slug: 'baku-1-day', description: 'Обзорная экскурсия по столице' },
  { name: 'Баку за 3 дня', slug: 'baku-3-days', description: 'Полное погружение в столицу' },
  { name: 'Азербайджан за 7 дней', slug: 'azerbaijan-7-days', description: 'Полный тур по стране' },
  { name: 'Weekend in Baku', slug: 'weekend-baku', description: 'Короткий отдых в столице' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Азербайджан
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Откройте для себя лучшие места для отдыха, рестораны и развлечения в стране огней
            </p>
            
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-xl p-4 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Куда вы хотите отправиться?"
                    className="w-full px-4 py-4 border border-gray-300 rounded-md text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition text-lg">
                  Поиск
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition group"
              >
                <span className="text-3xl group-hover:scale-110 transition">{category.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.count} объектов</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Города Азербайджана</h2>
              <p className="text-gray-500 text-sm">Выберите город для исследования</p>
            </div>
            <Link href="/cities" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все города <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ru/${city.slug}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  <span className="text-4xl">🏰</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{city.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{city.description}</p>
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
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Лучшие рестораны</h2>
              <p className="text-gray-500 text-sm">Изысканная кухня на любой вкус</p>
            </div>
            <Link href="/restaurants" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все рестораны <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRestaurants.map((restaurant, index) => (
              <div key={restaurant.id} className="bg-gray-50 rounded-lg p-5 flex gap-4 hover:bg-gray-100 transition cursor-pointer group">
                <div className="text-3xl font-bold text-gray-300 w-8 pt-1">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{restaurant.name}</h3>
                  <p className="text-sm text-gray-500">{restaurant.city} • {restaurant.cuisine}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm font-medium">
                      ★ {restaurant.rating}
                    </span>
                    <span className="text-sm text-gray-500">{restaurant.reviews} отзывов</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{restaurant.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {restaurant.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
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
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Лучшие отели</h2>
              <p className="text-gray-500 text-sm">Комфортное проживание в любом городе</p>
            </div>
            <Link href="/hotels" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все отели <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                  <span className="text-4xl">🏨</span>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    ★ {hotel.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{hotel.name}</h3>
                  <p className="text-sm text-gray-500">{hotel.city} • {hotel.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">{hotel.reviews} отзывов</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{hotel.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {hotel.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
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
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Популярные достопримечательности</h2>
              <p className="text-gray-500 text-sm">Исторические и культурные объекты</p>
            </div>
            <Link href="/attractions" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все достопримечательности <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topAttractions.map((attraction, index) => (
              <div key={attraction.id} className="flex gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer group">
                <div className="text-3xl font-bold text-gray-300 w-8 pt-1">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">{attraction.name}</h3>
                  <p className="text-sm text-gray-500">{attraction.city} • {attraction.type}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-yellow-500 text-white px-2 py-0.5 rounded text-sm font-medium">
                      ★ {attraction.rating}
                    </span>
                    <span className="text-sm text-gray-500">{attraction.reviews} отзывов</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{attraction.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {attraction.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Routes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Готовые маршруты</h2>
              <p className="text-gray-500 text-sm">Идеальные планы поездок</p>
            </div>
            <Link href="/routes" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все маршруты <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {routes.map((route) => (
              <Link
                key={route.slug}
                href={`/routes/${route.slug}`}
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition group"
              >
                <h3 className="font-semibold group-hover:text-blue-200">{route.name}</h3>
                <p className="text-sm text-blue-200 mt-1">{route.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Планируете поездку в Азербайджан?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Найдите лучшие отели, рестораны и развлечения для вашего идеального отдыха в стране огней
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
            <Link href="/visas" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
              Визы
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Articles Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Полезные статьи</h2>
              <p className="text-gray-500 text-sm">Советы и рекомендации для путешественников</p>
            </div>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Все статьи <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Лучшее время для посещения Азербайджана', excerpt: 'Узнайте, когда лучше всего планировать поездку в зависимости от сезона и интересов.', category: 'Сезонные поездки' },
              { title: 'Что попробовать в Азербайджане: топ-10 блюд', excerpt: 'Обязательные к пробу азербайджанские блюда и где их найти.', category: 'Еда и напитки' },
              { title: 'Как добраться из аэропорта Баку в центр города', excerpt: 'Все способы трансфера: такси, автобусы, метро.', category: 'Транспорт' }
            ].map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition cursor-pointer group">
                <span className="text-xs text-blue-600 font-medium">{article.category}</span>
                <h3 className="font-semibold text-gray-800 mt-2 group-hover:text-blue-600">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
