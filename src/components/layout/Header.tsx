import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-xl text-gray-800">AzerbaijanTravel</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/cities" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Cities
            </Link>
            <Link href="/attractions" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Attractions
            </Link>
            <Link href="/things-to-do" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Things to Do
            </Link>
            <Link href="/itineraries" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Itineraries
            </Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-600 transition font-medium">
              Travel Guide
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/search" className="text-gray-600 hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/plan-trip" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
              Plan Trip
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
