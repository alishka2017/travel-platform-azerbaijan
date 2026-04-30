
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="text-white text-xl font-bold flex items-center gap-2 mb-4">
              <span className="text-[#00AA6C]">◆</span> Smartholiday.az
            </Link>
            <p className="text-sm text-gray-400">
              Your complete guide to Azerbaijan. Discover hidden gems, local tips, and authentic experiences in the Land of Fire.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cities" className="hover:text-[#00AA6C] transition">Cities</Link></li>
              <li><Link href="/tours" className="hover:text-[#00AA6C] transition">Tours</Link></li>
              <li><Link href="/transfers" className="hover:text-[#00AA6C] transition">Transfers</Link></li>
              <li><Link href="/attractions" className="hover:text-[#00AA6C] transition">Attractions</Link></li>
              <li><Link href="/restaurants" className="hover:text-[#00AA6C] transition">Restaurants</Link></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/visa" className="hover:text-[#00AA6C] transition">Visa Info</Link></li>
              <li><Link href="/itineraries" className="hover:text-[#00AA6C] transition">Itineraries</Link></li>
              <li><Link href="/blog" className="hover:text-[#00AA6C] transition">Blog</Link></li>
              <li><Link href="/about" className="hover:text-[#00AA6C] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#00AA6C] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+994 70 216 66 66 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+994 12 493 62 42</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>info@smartholiday.az</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Nizami str. 100, Baku, Azerbaijan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Smartholiday.az. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
