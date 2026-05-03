import Link from 'next/link';

export default function ExcursionsPage() {
  const excursions = [
    {
      id: 1,
      name: 'Обзорная экскурсия по Баку',
      description: 'Познакомьтесь с главными достопримечательностями столицы: Старый город, Улица Низами, Бакинская крепость',
      duration: '3-4 часа',
      price: 'от $30',
      icon: '🏙️',
      highlights: ['Старый город (Ичери-Шехер)', 'Башня Медная Кузница', 'Дворец Ширваншахов', 'Улица Низами'],
    },
    {
      id: 2,
      name: 'Габала: Горы и озёра',
      description: 'Экскурсия в горный курорт Габала с посещением озера Нур и канатной дороги',
      duration: '8 часов',
      price: 'от $60',
      icon: '🏔️',
      highlights: ['Озеро Нур', 'Канатная дорога Туфан', 'Горы Вардена', 'Остановки у деревень'],
    },
    {
      id: 3,
      name: 'Историческая Шеки',
      description: 'Экскурсия в один из старейших городов Азербайджана с посещением Дворца Шекихановых',
      duration: '10 часов',
      price: 'от $70',
      icon: '🏛️',
      highlights: ['Дворец Шекихановых', 'Караван-сарай', 'Музей творчества Расима Бабаева', 'Шекинская кухня'],
    },
    {
      id: 4,
      name: 'Природные достопримечательности',
      description: 'Экскурсия к озеру Гёйгёль и водопаду',
      duration: '6 часов',
      price: 'от $50',
      icon: '🌲',
      highlights: ['Озеро Гёйгёль', 'Водопад Айрынджалар', 'Национальный парк', 'Фото-остановки'],
    },
    {
      id: 5,
      name: 'Винные туры',
      description: 'Дегустация азербайджанских вин на винодельнях',
      duration: '4 часа',
      price: 'от $40',
      icon: '🍷',
      highlights: ['Винодельня Chateau Mouton', 'Дегустация вин', 'История виноделия', 'Сувениры'],
    },
    {
      id: 6,
      name: 'Гастрономический тур',
      description: 'Знакомство с азербайджанской кухней: дегустация национальных блюд',
      duration: '3-4 часа',
      price: 'от $45',
      icon: '🍽️',
      highlights: ['Дегустация плова', 'Мясо на мангале', 'Сладости', 'Чайная церемония'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Экскурсии в Азербайджане
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с культурой, историей и природой Азербайджана с профессиональными гидами
          </p>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {excursions.map((excursion) => (
            <div 
              key={excursion.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-orange-500 text-white p-4 text-center">
                <div className="text-3xl mb-2">{excursion.icon}</div>
                <h2 className="text-lg font-bold">{excursion.name}</h2>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{excursion.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span>⏱️</span> {excursion.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>💰</span> {excursion.price}
                  </span>
                </div>
                <div className="space-y-1 mb-4">
                  {excursion.highlights.slice(0, 3).map((highlight, index) => (
                    <p key={index} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-orange-500">•</span> {highlight}
                    </p>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 transition"
                >
                  Забронировать экскурсию
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Почему выбирают наши экскурсии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Профессиональные гиды</h3>
              <p className="text-sm text-gray-600">
                Опытные гиды знают все секреты местных достопримечательностей
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚙</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Комфортный транспорт</h3>
              <p className="text-sm text-gray-600">
                Современные кондиционированные автомобили для вашей поездки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Аудиогид</h3>
              <p className="text-sm text-gray-600">
                Многоязычная аудиоинформация о достопримечательностях
              </p>
            </div>
          </div>
        </div>

        {/* Private Tours */}
        <div className="bg-gray-800 text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Частные экскурсии
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Индивидуальный маршрут</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Экскурсия по вашему плану
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Гибкий график
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Персональный гид
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Преимущества</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Ваш темп и интересы
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Дополнительные остановки
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Фотосессия в лучших местах
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Готовы исследовать Азербайджан?
          </h2>
          <p className="mb-6 text-orange-100">
            Забронируйте экскурсию прямо сейчас и получите незабываемые впечатления
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Забронировать экскурсию
          </Link>
        </div>
      </div>

      
    </div>
  );
}