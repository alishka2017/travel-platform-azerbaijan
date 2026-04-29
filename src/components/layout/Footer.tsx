import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">AzerbaijanTravel</h3>
            <p className="text-sm text-gray-400">
              Ваш гид по лучшим местам Азербайджана. Откройте для себя рестораны, отели и развлечения.
            </p>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Города</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ru/baku" className="hover:text-white transition">Баку</Link></li>
              <li><Link href="/ru/gabala" className="hover:text-white transition">Габала</Link></li>
              <li><Link href="/ru/sheki" className="hover:text-white transition">Шеки</Link></li>
              <li><Link href="/ru/gandja" className="hover:text-white transition">Гянджа</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Категории</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/restaurants" className="hover:text-white transition">Рестораны</Link></li>
              <li><Link href="/hotels" className="hover:text-white transition">Отели</Link></li>
              <li><Link href="/attractions" className="hover:text-white transition">Достопримечательности</Link></li>
              <li><Link href="/tours" className="hover:text-white transition">Туры</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@azerbaijantravel.az</li>
              <li>Телефон: +994 50 123 45 67</li>
              <li>Баку, Азербайджан</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 AzerbaijanTravel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
