import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">О проекте</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">О нас</Link></li>
              <li><Link href="/contact" className="text-base text-gray-300 hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Города</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/city/baku" className="text-base text-gray-300 hover:text-white">Баку</Link></li>
              <li><Link href="/city/gabala" className="text-base text-gray-300 hover:text-white">Габала</Link></li>
              <li><Link href="/city/sheki" className="text-base text-gray-300 hover:text-white">Шеки</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Категории</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/restaurants" className="text-base text-gray-300 hover:text-white">Рестораны</Link></li>
              <li><Link href="/hotels" className="text-base text-gray-300 hover:text-white">Отели</Link></li>
              <li><Link href="/attractions" className="text-base text-gray-300 hover:text-white">Достопримечательности</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Соцсети</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Telegram</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2024 AzerbaijanTravel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}