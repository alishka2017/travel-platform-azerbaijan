import Link from 'next/link';

export default function RentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Аренда авто в Азербайджане
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Удобный способ передвижения по стране. Выбирайте машину по вашим нуждам
          </p>
        </div>

        {/* Car Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Economy */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-500 text-white p-6 text-center">
              <div className="text-4xl mb-2">🚗</div>
              <h2 className="text-xl font-bold">Эконом</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600 mb-4 text-sm">
                <li>• Hyundai Solaris, Kia Rio</li>
                <li>• 4 места</li>
                <li>• Кондиционер</li>
                <li>• Механика/Автомат</li>
              </ul>
              <p className="text-lg font-bold text-gray-800 mb-4">
                от $25/день
              </p>
              <Link 
                href="/contact" 
                className="block w-full text-center bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Забронировать
              </Link>
            </div>
          </div>

          {/* Business */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-blue-500 text-white p-6 text-center">
              <div className="text-4xl mb-2">🚘</div>
              <h2 className="text-xl font-bold">Бизнес</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600 mb-4 text-sm">
                <li>• Toyota Camry, BMW 5 series</li>
                <li>• 4-5 мест</li>
                <li>• Кожаный салон</li>
                <li>• Навигация</li>
              </ul>
              <p className="text-lg font-bold text-gray-800 mb-4">
                от $50/день
              </p>
              <Link 
                href="/contact" 
                className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Забронировать
              </Link>
            </div>
          </div>

          {/* SUV */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-green-500 text-white p-6 text-center">
              <div className="text-4xl mb-2">🚙</div>
              <h2 className="text-xl font-bold">Внедорожник</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-gray-600 mb-4 text-sm">
                <li>• Toyota Land Cruiser, Nissan Patrol</li>
                <li>• 5-7 мест</li>
                <li>• Полный привод</li>
                <li>• Больший багажник</li>
              </ul>
              <p className="text-lg font-bold text-gray-800 mb-4">
                от $70/день
              </p>
              <Link 
                href="/contact" 
                className="block w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Забронировать
              </Link>
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Условия аренды
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Требования</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Возраст от 21 года</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Водительский стаж от 2 лет</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Паспорт и водительское удостоверение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Депозит (возвратный)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Включено</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Неограниченный пробег</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Страховка КАСКО</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Круглосуточная поддержка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Детское кресло (по запросу)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="bg-gray-800 text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Популярные маршруты на авто
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Баку → Габала</p>
                <p className="text-sm text-gray-300">~4 часа / 300 км</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Баку → Шеки</p>
                <p className="text-sm text-gray-300">~5 часов / 330 км</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Баку → Ленкорань</p>
                <p className="text-sm text-gray-300">~3.5 часа / 320 км</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Баку → Нафталан</p>
                <p className="text-sm text-gray-300">~4 часа / 280 км</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Нужна помощь с выбором?
          </h2>
          <p className="mb-6 text-blue-100">
            Наши специалисты помогут подобрать оптимальный автомобиль для вашего маршрута
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Связаться с нами
          </Link>
        </div>
      </div>

      
    </div>
  );
}