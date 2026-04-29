import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Данные о Баку
const cityData = {
  name: 'Баку',
  slug: 'baku',
  description: 'Столица Азербайджана, расположенная на западном берегу Каспийского моря. Современный мегаполис с богатой историей, где сочетаются древние памятники архитектуры и ультрасовременные небоскребы.',
  facts: [
    { label: 'Население', value: '2.3 млн' },
    { label: 'Основан', value: 'I век до н.э.' },
    { label: 'Расположение', value: 'Каспийское побережье' },
    { label: 'Климат', value: 'Умеренно континентальный' }
  ],
  sections: [
    {
      title: 'Что посмотреть',
      items: [
        { name: 'Старый город (Ичери Шехер)', rating: 4.8, description: 'Древняя крепость с узкими улочками и историческими зданиями' },
        { name: 'Башня Мэйден', rating: 4.7, description: 'Средневековая башня 12 века с панорамным видом' },
        { name: 'Гобустан', rating: 4.7, description: 'Национальный парк с наскальными рисунками и грязевыми вулканами' },
        { name: 'Дворец Ширваншахов', rating: 4.7, description: 'Исторический дворец 15 века в Старом городе' }
      ]
    },
    {
      title: 'Рестораны',
      items: [
        { name: 'Mugam Club', rating: 4.8, cuisine: 'Азербайджанская', price: '$$' },
        { name: 'Şirvanşah', rating: 4.7, cuisine: 'Национальная', price: '$$' },
        { name: 'Sky Grill', rating: 4.7, cuisine: 'Стейкхаус', price: '$$$' }
      ]
    },
    {
      title: 'Отели',
      items: [
        { name: 'Four Seasons Baku', rating: 4.9, type: 'Люкс', price: '$$$$' },
        { name: 'JW Marriott Absheron', rating: 4.8, type: 'Премиум', price: '$$$' },
        { name: 'Fairmont Baku', rating: 4.8, type: 'Люкс', price: '$$$$' }
      ]
    }
  ],
  routes: [
    { name: 'Баку за 1 день', description: 'Обзорная экскурсия по столице' },
    { name: 'Баку за 3 дня', description: 'Полное погружение в столицу' },
    { name: 'Weekend in Baku', description: 'Короткий отдых в столице' }
  ]
};

// Рестораны в Баку
const restaurants = [
  { id: 1, name: 'Mugam Club', rating: 4.8, reviews: '2,341', cuisine: 'Азербайджанская', description: 'Элегантный ресторан с живой музыкой' },
  { id: 2, name: 'Şirvanşah', rating: 4.7, reviews: '1,876', cuisine: 'Национальная', description: 'Традиционный ресторан с аутентичной кухней' },
  { id: 3, name: 'Sky Grill', rating: 4.7, reviews: '876', cuisine: 'Стейкхаус', description: 'Ресторан на крыше с видом на море' }
];

// Отели в Баку
const hotels = [
  { id: 1, name: 'Four Seasons Baku', rating: 4.9, reviews: '1,543', type: 'Люкс', description: 'Роскошный отель в историческом центре' },
  { id: 2, name: 'JW Marriott Absheron', rating: 4.8, reviews: '2,123', type: 'Премиум', description: 'Современный отель в деловом центре' },
  { id: 3, name: 'Fairmont Baku', rating: 4.8, reviews: '987', type: 'Люкс', description: 'Элегантный отель на набережной' }
];

// Достопримечательности в Баку
const attractions = [
  { id: 1, name: 'Старый город (Ичери Шехер)', rating: 4.8, reviews: '3,456', type: 'Исторический', description: 'Древняя крепость с узкими улочками' },
  { id: 2, name: 'Гобустан', rating: 4.7, reviews: '2,123', type: 'Природа', description: 'Национальный парк с наскальными рисунками' },
  { id: 3, name: 'Башня Мэйден', rating: 4.7, reviews: '2,543', type: 'Исторический', description: 'Средневековая башня 12 века' }
];

export default function CityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Главная</Link>
              <span className="mx-2">/</span>
              <Link href="/cities" className="hover:text-white">Города</Link>
              <span className="mx-2">/</span>
              <span>{cityData.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cityData.name}</h1>
            <p className="text-lg text-blue-200 max-w-3xl">{cityData.description}</p>
            
            {/* Facts */}
            <div className="flex flex-wrap gap-6 mt-8">
              {cityData.facts.map((fact, index) => (
                <div key={index} className="bg-white/10 px-4 py-2 rounded">
                  <div className="text-sm text-blue-200">{fact.label}</div>
                  <div className="font-semibold">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-4 bg-white border-b sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4">
              <a href="#overview" className="text-gray-600 hover:text-blue-600 transition">Обзор</a>
              <a href="#attractions" className="text-gray-600 hover:text-blue-600 transition">Достопримечательности</a>
              <a href="#restaurants" className="text-gray-600 hover:text-blue-600 transition">Рестораны</a>
              <a href="#hotels" className="text-gray-600 hover:text-blue-600 transition">Отели</a>
              <a href="#routes" className="text-gray-600 hover:text-blue-600 transition">Маршруты</a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Обзор {cityData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Что посмотреть</h3>
                <div className="space-y-3">
                  {cityData.sections[0].items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                        ★ {item.rating}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Готовые маршруты</h3>
                <div className="space-y-3">
                  {cityData.routes.map((route, index) => (
                    <Link
                      key={index}
                      href={`/routes/${route.slug}`}
                      className="block p-3 bg-blue-50 rounded hover:bg-blue-100 transition"
                    >
                      <div className="font-medium text-blue-800">{route.name}</div>
                      <div className="text-sm text-blue-600">{route.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section id="attractions" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Достопримечательности</h2>
              <Link href="/attractions" className="text-blue-600 hover:text-blue-800 text-sm">
                Все достопримечательности →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attractions.map((attraction) => (
                <Link
                  key={attraction.id}
                  href={`/attractions/${attraction.id}`}
                  className="block bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                    <span className="bg-yellow-500 text-white px-2 py-0.5 rounded text-sm">
                      ★ {attraction.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{attraction.city} • {attraction.type}</p>
                  <p className="text-sm text-gray-600 mt-2">{attraction.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{attraction.reviews} отзывов</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants */}
        <section id="restaurants" className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Рестораны</h2>
              <Link href="/restaurants" className="text-blue-600 hover:text-blue-800 text-sm">
                Все рестораны →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <Link
                  key={restaurant.id}
                  href={`/restaurants/${restaurant.id}`}
                  className="block bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                      ★ {restaurant.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.price}</p>
                  <p className="text-sm text-gray-600 mt-2">{restaurant.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{restaurant.reviews} отзывов</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section id="hotels" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Отели</h2>
              <Link href="/hotels" className="text-blue-600 hover:text-blue-800 text-sm">
                Все отели →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  className="block bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm">
                      ★ {hotel.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{hotel.type}</p>
                  <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{hotel.reviews} отзывов</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Планируете поездку в {cityData.name}?</h2>
            <p className="text-blue-200 mb-6">Найдите лучшие отели, рестораны и развлечения</p>
            <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Оставить заявку
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
