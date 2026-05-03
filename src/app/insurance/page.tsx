import Link from 'next/link';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Страхование для путешествий
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Защитите себя и свои вещи во время путешествия по Азербайджану
          </p>
        </div>

        {/* Insurance Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Travel Insurance */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-blue-500 text-white p-6">
              <h2 className="text-xl font-bold">Туристическая страховка</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Медицинское страхование на весь срок поездки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Покрытие экстренной медицинской помощи</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Страхование отмены поездки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Потеря багажа и документов</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Оформить полис
              </Link>
            </div>
          </div>

          {/* Medical Insurance */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-red-500 text-white p-6">
              <h2 className="text-xl font-bold">Медицинское страхование</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Срочная медицинская помощь</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Госпитализация и лечение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Репатриация на родину</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✓</span>
                  <span>Круглосуточная поддержка</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
              >
                Оформить полис
              </Link>
            </div>
          </div>

          {/* Baggage Insurance */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-green-500 text-white p-6">
              <h2 className="text-xl font-bold">Страхование багажа</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Потеря или задержка багажа</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Повреждение вещей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Кража в отеле</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Компенсация до $1000</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Оформить полис
              </Link>
            </div>
          </div>
        </div>

        {/* Why Insurance Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Зачем нужно страхование?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Медицинские услуги в Азербайджане</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Частные клиники в Баку предоставляют качественные услуги</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Стоимость лечения может быть высокой для иностранцев</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Страховая компания оплатит расходы</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Что покрывает страховка</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Амбулаторное и стационарное лечение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Лекарства по рецепту</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Транспортировка в клинику</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="mb-6 text-blue-100">
            Наши специалисты помогут подобрать оптимальную страховку для вашей поездки
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