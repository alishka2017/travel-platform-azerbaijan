'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { searchContent } from '@/lib/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ cities: any[] }>({ cities: [] });
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && event.target instanceof Node && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#00AA6C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Smartholiday.az</span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-xl" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00AA6C] focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {showResults && searchResults.cities.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                  {searchResults.cities.map((city: any) => (
                    <Link
                      key={city.id}
                      href={`/cities/${city.slug}`}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                      onClick={() => {
                        setSearchQuery('');
                        setShowResults(false);
                      }}
                    >
                      <p className="font-medium text-gray-900">{city.name}</p>
                      <p className="text-sm text-gray-500">{city.region}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/cities" className="text-gray-600 hover:text-[#00AA6C] font-medium text-sm transition">
              Destinations
            </Link>
            <Link href="/tours" className="text-gray-600 hover:text-[#00AA6C] font-medium text-sm transition">
              Things to Do
            </Link>
            <Link href="/restaurants" className="text-gray-600 hover:text-[#00AA6C] font-medium text-sm transition">
              Restaurants
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#00AA6C] font-medium text-sm transition">
              Travel Guide
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="text-[#00AA6C] font-medium text-sm hover:underline"
            >
              List Your Property
            </Link>
            <a
              href="https://wa.me/994702166666"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00AA6C] text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-[#007A52] transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#00AA6C] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search destinations, tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00AA6C]"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {showResults && searchResults.cities.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
                {searchResults.cities.map((city: any) => (
                  <Link
                    key={city.id}
                    href={`/cities/${city.slug}`}
                    className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                    onClick={() => {
                      setSearchQuery('');
                      setShowResults(false);
                    }}
                  >
                    <p className="font-medium text-gray-900">{city.name}</p>
                    <p className="text-sm text-gray-500">{city.region}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link href="/cities" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Destinations
            </Link>
            <Link href="/tours" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Things to Do
            </Link>
            <Link href="/restaurants" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Restaurants
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Travel Guide
            </Link>
            <div className="pt-2 border-t border-gray-100 mt-2">
              <a
                href="https://wa.me/994702166666"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-[#00AA6C] text-white rounded-md text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
