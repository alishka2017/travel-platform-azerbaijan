import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// Mock data for cities
const citiesData = {
  baku: {
    name: 'Баку',
    description: 'Баку — столица Азербайджана, крупнейший город на Кавказе, расположенный на западном берегу Каспийского моря. Это современный мегаполис, где сочетаются историческая архитектура и ультрасовременные небоскребы.',
    attractions: [
      { name: 'Старый город (Ичери Шехер)', rating: 4.8 },
      { name: 'Башня Maiden', rating: 4.7 },
      { name: 'Улица Низами', rating: 4.6 },
    ],
    restaurants: [
      { name: 'Mugam Club', rating: 4.8 },
      { name: 'Şirvanşah', rating: 4.7 },
    ],
    hotels: [
      { name: 'Four Seasons Baku', rating: 4.9 },
      { name: 'JW Marriott Absheron', rating: 4.8 },
    ],
  },
  gabala: {
    name: 'Габала',
    description: 'Габала — город в Азербайджане, известный своими горнолыжными курортами и природой.',
    attractions: [
      { name: 'Горнолыжный курорт Туфан', rating: 4.7 },
      { name: 'Водопады Габала', rating: 4.6 },
    ],
    restaurants: [
      { name: 'Nargiz', rating: 4.6 },
    ],
    hotels: [
      { name: 'Rixos Gabala', rating: 4.8 },
    ],
  },
};

export function generateStaticParams() {
  return [
    { lang: 'ru', city: 'baku' },
    { lang: 'ru', city: 'gabala' },
  ];
}

export default function CityPage({ params }: { params: { lang: string; city: string } }) {
  const cityData = citiesData[params.city as keyof typeof citiesData] || citiesData.baku;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{cityData.name}</h1>
          <p className="text-lg max-w-2xl">{cityData.description}</p>
        </div>
      </section>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Attractions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Что посмотреть</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cityData.attractions.map((attraction, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold">{attraction.name}</h3>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <span className="text-yellow-500 mr-1">★</span>
                    {attraction.rating}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Restaurants */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Рестораны</h2>
            <div className="space-y-4">
              {cityData.restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">Кухня: Азербайджанская</p>
                  </div>
                  <div className="text-right">
                    <span className="text-yellow-500">★</span> {restaurant.rating}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Hotels Sidebar */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold mb-3">Лучшие отели</h3>
            <ul className="space-y-3">
              {cityData.hotels.map((hotel, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{hotel.name}</span>
                  <span className="text-yellow-500">★ {hotel.rating}</span>
                </li>
              ))}
            </ul>
            <Link href="/hotels" className="block text-center text-blue-600 mt-4 hover:underline">
              Все отели
            </Link>
          </div>

          {/* Request Form */}
          <div className="bg-gray-100 border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-3">Получить консультацию</h3>
            <form className="space-y-3">
              <input type="text" placeholder="Ваше имя" className="w-full p-2 border rounded" />
              <input type="tel" placeholder="Телефон" className="w-full p-2 border rounded" />
              <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}