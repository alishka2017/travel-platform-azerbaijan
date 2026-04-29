import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function TransfersPage() {
  const transfers = [
    {
      id: 1,
      name: 'Трансфер из аэропорта Баку',
      description: 'Встреча в аэропорту Гейдара Алиева с табличкой, помощь с багажом, комфортный переезд в отель',
      duration: '30-60 мин',
      price: 'от $25',
      icon: '✈️',
      features: ['Встреча с табличкой', 'Помощь с багажом', 'Кондиционер', 'Wi-Fi'],
    },
    {
      id: 2,
      name: 'Трансфер Баку → Габала',
      description: 'Комфортная поездка в горный курорт Габала с остановками по желанию',
      duration: '4 часа',
      price: 'от $80',
      icon: '🏔️',
      features: ['Маршрут по желанию', 'Остановки для фото', 'Кондиционер', 'Водитель-гида'],
    },
    {
      id: 3,
      name: 'Трансфер Баку → Шеки',
      description: 'Путешествие в исторический город Шеки с посещением достопримечательностей',
      duration: '5 часов',
      price: 'от $90',
      icon: '🏛️',
      features: ['Экскурсия по маршруту', 'Остановки у достопримечательностей', 'Комфортная машина'],
    },
    {
      id: 4,
      name: 'Трансфер Баку → Ленкорань',
      description: 'Поездка на Каспийское море через живописные горные дороги',
      duration: '3.5 часа',
      price: 'от $70',
      icon: '🏖️',
      features: ['Живописный маршрут', 'Остановки у озера Гёйгёль', 'Комфорт'],
    },
    {
      id: 5,
      name: 'Частный водитель на день',
      description: 'Персональный водитель на целый день для осмотра достопримечательностей Баку',
      duration: '8 часов',
      price: 'от $60',
      icon: '🚗',
      features: ['8 часов работы', 'Гибкий маршрут', 'На выбор: русский/английский язык'],
    },
    {
      id: 6,
      name: 'Трансфер в горы Шахдаг',
      description: 'Комфортная поездка в горнолыжный курорт Шахдаг зимой или летом',
      duration: '3 часа',
      price: 'от $75',
      icon: '⛷️',
      features: ['Круглый год', 'Снегоходы/летние экскурсии', 'Горный воздух'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Трансферы в Азербайджане
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комфортное и безопасное перемещение по стране с профессиональными водителями
          </p>
        </div>

        {/* Transfers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {transfers.map((transfer) => (
            <div 
              key={transfer.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary text-white p-4 text-center">
                <div className="text-3xl mb-2">{transfer.icon}</div>
                <h2 className="text-lg font-bold">{transfer.name}</h2>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{transfer.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span>⏱️</span> {transfer.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>💰</span> {transfer.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {transfer.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-primary text-white py-2.5 rounded-lg hover:bg-primary-dark transition"
                >
                  Заказать трансфер
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Как заказать трансфер
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Выберите маршрут</h3>
              <p className="text-sm text-gray-600">Укажите точки отправления и назначения</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Укажите дату и время</h3>
              <p className="text-sm text-gray-600">Выберите удобное время для встречи</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Выберите машину</h3>
              <p className="text-sm text-gray-600">Подберите подходящий класс автомобиля</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Подтвердите заказ</h3>
              <p className="text-sm text-gray-600">Получите подтверждение по email</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚙</span> Автопарк
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Седаны (1-3 пассажира)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Минивэны (4-7 пассажиров)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Внедорожники (1-5 пассажиров)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Люкс-автомобили
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> Преимущества
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Фиксированная цена без скрытых платежей
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Встреча с табличкой в аэропорту
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Круглосуточная поддержка
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Отмена за 24 часа
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Готовы к поездке?
          </h2>
          <p className="mb-6 text-blue-100">
            Закажите трансфер прямо сейчас и путешествуйте с комфортом
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Заказать трансфер
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}