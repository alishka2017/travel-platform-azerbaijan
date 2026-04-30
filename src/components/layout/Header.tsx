import Link from 'next/link';
import SearchBar from '@/components/ui/SearchBar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-gray-900 leading-tight">
                Smartholiday.az
              </span>
              <span className="text-xs text-primary font-medium">Discover • Explore • Experience</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {[
              { href: '/cities', label: 'Cities', icon: '🏙️' },
              { href: '/attractions', label: 'Attractions', icon: '🏛️' },
              { href: '/things-to-do', label: 'Things to Do', icon: '🎭' },
              { href: '/restaurants', label: 'Dining', icon: '🍽️' },
              { href: '/tours', label: 'Tours', icon: '🚌' },
              { href: '/blog', label: 'Blog', icon: '📖' },
              { href: '/visa', label: 'Visa', icon: '📋' },
              { href: '/itineraries', label: 'Itineraries', icon: '🗺️' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 text-gray-600 hover:text-primary transition-all duration-200 font-medium"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                <span>{item.label}</span>
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden sm:block">
              <SearchBar variant="header" placeholder="Search cities, attractions..." />
            </div>

            {/* Favorites Button */}
            <Link 
              href="/favorites" 
              className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">Favorites</span>
            </Link>

            {/* Plan Trip Button */}
            <Link 
              href="/plan-trip" 
              className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95 text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Plan Trip
            </Link>

            {/* Mobile Menu Button */}
            <button className="xl:hidden p-2 text-gray-500 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
