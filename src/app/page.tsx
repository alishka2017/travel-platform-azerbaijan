
'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cities, places } from '@/data/places';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // Mock search logic for the hero search bar
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 1) {
      const filtered = places.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.city.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1920&auto=format&fit=crop')",
            filter: "brightness(0.7)"
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Magic of <span className="text-[#00AA6C]">Azerbaijan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Experience the Land of Fire with authentic local tours, luxury transfers, and hidden gems.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="flex bg-white rounded-full shadow-2xl p-2">
              <input 
                type="text" 
                placeholder="Search for cities, attractions, restaurants..." 
                className="flex-1 px-6 py-4 text-gray-700 outline-none rounded-full"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Link 
                href={`/search?q=${searchQuery}`}
                className="bg-[#00AA6C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#007A52] transition"
              >
                Search
              </Link>
            </div>
            
            {/* Autocomplete Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-xl overflow-hidden z-50">
                {suggestions.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/attractions/${item.id}`}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span className="text-sm text-gray-400">{item.city}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Azerbaijan's Cities</h2>
            <p className="text-gray-600">From ancient capitals to mountain retreats</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.id} 
                href={`/cities/${city.id}`}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={city.heroImage} 
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{city.name}</h3>
                  <p className="text-sm text-gray-200">{city.region}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/cities" className="text-[#00AA6C] font-semibold hover:underline">
              View All Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Tours Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Experiences</h2>
            <p className="text-gray-600">Curated tours and activities for every traveler</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1529963183134-618ad7995f9d?q=80&w=800&auto=format&fit=crop" 
                  alt="Baku City Tour"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#00AA6C] text-white text-xs font-bold px-2 py-1 rounded">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Baku City Tour (Full Day)</h3>
                  <span className="text-[#00AA6C] font-bold">25 AZN</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Explore the Old City, Flame Towers, and Heydar Aliyev Center.</p>
                <Link href="/tours/baku-city-tour" className="text-[#00AA6C] font-medium text-sm hover:underline">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Tour Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1589233215243-39b655b25c2f?q=80&w=800&auto=format&fit=crop" 
                  alt="Gobustan & Mud Volcanoes"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Gobustan & Mud Volcanoes</h3>
                  <span className="text-[#00AA6C] font-bold">40 AZN</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Visit 40,000-year-old rock carvings and surreal mud volcanoes.</p>
                <Link href="/tours/gobustan-tour" className="text-[#00AA6C] font-medium text-sm hover:underline">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Tour Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop" 
                  alt="Sheki Historical Tour"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">Sheki Historical 2-Day Tour</h3>
                  <span className="text-[#00AA6C] font-bold">120 AZN</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">UNESCO palace, caravanserais, and silk workshops.</p>
                <Link href="/tours/sheki-tour" className="text-[#00AA6C] font-medium text-sm hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/tours" className="bg-[#00AA6C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#007A52] transition">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00AA6C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Azerbaijan?</h2>
          <p className="text-lg opacity-90 mb-8">Let us help you plan your perfect trip. Get a free quote today.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#00AA6C] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get a Quote
            </Link>
            <Link href="https://wa.me/994702166666" target="_blank" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00AA6C] transition">
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
