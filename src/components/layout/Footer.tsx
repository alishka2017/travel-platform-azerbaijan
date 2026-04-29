import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-xl text-white">AzerbaijanTravel</span>
            </div>
            <p className="text-sm text-gray-400">
              Your complete guide to Azerbaijan. Discover hidden gems, local tips, and authentic experiences.
            </p>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-semibold text-white mb-4">Cities</h3>
            <ul className="space-y-2">
              <li><Link href="/cities/baku" className="hover:text-white transition">Baku</Link></li>
              <li><Link href="/cities/gandja" className="hover:text-white transition">Ganja</Link></li>
              <li><Link href="/cities/sheki" className="hover:text-white transition">Sheki</Link></li>
              <li><Link href="/cities/lankaran" className="hover:text-white transition">Lankaran</Link></li>
              <li><Link href="/cities/gabala" className="hover:text-white transition">Gabala</Link></li>
              <li><Link href="/cities/qusar" className="hover:text-white transition">Qusar</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/attractions" className="hover:text-white transition">Attractions</Link></li>
              <li><Link href="/tours" className="hover:text-white transition">Tours</Link></li>
              <li><Link href="/restaurants" className="hover:text-white transition">Restaurants</Link></li>
              <li><Link href="/things-to-do" className="hover:text-white transition">Things to Do</Link></li>
              <li><Link href="/itineraries" className="hover:text-white transition">Itineraries</Link></li>
              <li><Link href="/hidden-gems" className="hover:text-white transition">Hidden Gems</Link></li>
            </ul>
          </div>

          {/* Guide */}
          <div>
            <h3 className="font-semibold text-white mb-4">Travel Guide</h3>
            <ul className="space-y-2">
              <li><Link href="/guide/best-time" className="hover:text-white transition">Best Time to Visit</Link></li>
              <li><Link href="/guide/visa" className="hover:text-white transition">Visa Info</Link></li>
              <li><Link href="/guide/currency" className="hover:text-white transition">Currency</Link></li>
              <li><Link href="/guide/safety" className="hover:text-white transition">Safety</Link></li>
              <li><Link href="/guide/budget" className="hover:text-white transition">Budget Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 AzerbaijanTravel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/about" className="text-sm hover:text-white transition">About</Link>
            <Link href="/contact" className="text-sm hover:text-white transition">Contact</Link>
            <Link href="/privacy" className="text-sm hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
