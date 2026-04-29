import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Визы Азербайджана
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полная информация о визовом режиме для граждан Азербайджана и иностранцев
          </p>
        </div>

        {/* Visa Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Безвизовые страны */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-green-500 text-white p-4">
              <h2 className="text-xl font-bold">Безвизовый режим</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Граждане Азербайджана могут посещать следующие страны без визы:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Турция (90 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Грузия (365 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Россия (90 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Казахстан (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> ОАЭ (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Украина (90 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Беларусь (90 дней)
                </li>
              </ul>
              <Link 
                href="/visa/visa-free" 
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Смотреть все страны →
              </Link>
            </div>
          </div>

          {/* eVisa страны */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-bold">eVisa (Электронная виза)</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Азербайджан предоставляет электронную визу гражданам многих стран:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Индия (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Китай (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Пакистан (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Саудовская Аравия (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> ОАЭ (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Катар (30 дней)
                </li>
              </ul>
              <Link 
                href="/visa/evisa" 
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Подать заявку на eVisa →
              </Link>
            </div>
          </div>

          {/* Виза по прибытии */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white p-4">
              <h2 className="text-xl font-bold">Виза по прибытии</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Граждане следующих стран могут получить визу по прибытии в аэропорту:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Кувейт (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Бахрейн (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Оман (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Саудовская Аравия (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Катар (30 дней)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> ОАЭ (30 дней)
                </li>
              </ul>
              <Link 
                href="/visa/arrival" 
                className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                Подробнее →
              </Link>
            </div>
          </div>
        </div>

        {/* Visa Requirements Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Требования для получения визы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Документы</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Заграничный паспорт (действителен минимум 6 месяцев)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Заполненная анкета</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Фотография 3x4 см</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Подтверждение бронирования отеля</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Обратный билет</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Сроки и стоимость</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Срок оформления: 3-5 рабочих дней</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Стоимость: от $20 до $100 в зависимости от типа</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Срок действия: 30-90 дней</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Кратность: однократная или многократная</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Нужна помощь с визой?
          </h2>
          <p className="mb-6 text-blue-100">
            Наши специалисты помогут вам оформить визу быстро и без проблем
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Связаться с нами
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}