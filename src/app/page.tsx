
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { cities, places } from '@/data/places';
import { HeartButton } from '@/components/HeartButton';
import { CityCard } from '@/components/ui/CityCard';

export default function HomePage() {
  const topAttractions = places.filter(p => p.category !== 'Restaurants' && p.category !== 'Tours').slice(0, 8);
  const topRestaurants = places.filter(p => p.category === 'Restaurants').slice(0, 4);
  const topTours = places.filter(p => p.category === 'Tours').slice(0, 6);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555441565-b8e84a2571ed?w=1920&q=80)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,170,108,0.15)_0%,transparent_70%)]" />
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                #1 Travel Destination in the Caucasus
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6 animate-slide-up"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
              <span className="block">Discover the Magic of</span>
              <span className="text-primary-light">Azerbaijan</span>
            </h1>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-center max-w-4xl mb-12 opacity-90 animate-slide-up animate-delay-100">
              Experience the perfect blend of ancient heritage and modern marvels in the Land of Fire.
              From Baku's stunning skyline to Sheki's historic charm.
            </p>

            {/* Search Box */}
            <div className="w-full max-w-4xl animate-slide-up animate-delay-200">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row items-center gap-3">
                <div className="flex-1 w-full md:w-auto flex items-center gap-3 px-4 py-3 border-r border-gray-200 md:border-r-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 font-medium">Where to?</label>
                    <input 
                      type="text" 
                      placeholder="City, attraction, or restaurant..." 
                      className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
                    />
                  </div>
                </div>
                
                <Link href="/search" className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 active:scale-95 flex items-center gap-2 min-w-[160px] justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">
              {['Hotels', 'Attractions', 'Restaurants', 'Tours'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  <span className="text-sm font-medium">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Explore Azerbaijan's Cities
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From ancient capitals to modern resorts, discover the diversity of Azerbaijan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/cities" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View All Cities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Azerbaijan Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Visit Azerbaijan?
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                From ancient history to modern marvels, discover what makes this destination extraordinary
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🏛️', title: 'Ancient History', desc: '3,000+ years of continuous history with UNESCO sites' },
                { icon: '🌆', title: 'Modern Architecture', desc: 'Futuristic skyline meeting historic Old City' },
                { icon: '🏔️', title: 'Natural Wonders', desc: 'Caspian beaches to Caucasus peaks' },
                { icon: '🎎', title: 'Unique Culture', desc: 'Where East meets West with legendary hospitality' },
              ].map((item, index) => (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-5 inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Popular Routes
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our handpicked itineraries for the perfect Azerbaijan adventure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '1-Day Baku', desc: 'Perfect city break covering Old City & modern landmarks', time: '1 day', difficulty: 'Easy' },
                { title: '3-Day Classic', desc: 'Baku, Gobustan & mountain resorts', time: '3 days', difficulty: 'Easy' },
                { title: '7-Day Discovery', desc: 'Complete tour of cities, mountains & coast', time: '7 days', difficulty: 'Medium' },
              ].map((route, index) => (
                <Link key={index} href="/itineraries" className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=800&q=80',
                        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
                        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80'
                      ][index]}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-xl mb-1">{route.title}</h3>
                      <p className="text-sm text-white/80">{route.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <span>⏱️</span> {route.time}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">{route.difficulty}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden Gems Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Hidden Gems
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover off-the-beaten-path destinations and local secrets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏔️', name: 'Khinalig Village', location: 'Guba', desc: 'One of the highest villages in Europe' },
                { icon: '💧', name: 'Laza Waterfalls', location: 'Qusar', desc: 'Stunning mountain waterfalls' },
                { icon: '🌲', name: 'Hirkan Forest', location: 'Lankaran', desc: 'UNESCO World Heritage forest' },
                { icon: '🏞️', name: 'Goygol Lake', location: 'Ganja', desc: 'Crystal-clear mountain lake' },
              ].map((gem, index) => (
                <div key={index} className="bg-gray-800 p-5 rounded-xl hover:bg-gray-750 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{gem.icon}</span>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{gem.name}</h3>
                      <p className="text-xs text-gray-400">{gem.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{gem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Guide Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Travel Guide
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Everything you need to know for a perfect trip to Azerbaijan
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🌤️', title: 'Best Time to Visit', desc: 'April-June and September-October offer pleasant weather' },
                { icon: '🛂', title: 'Visa Info', desc: 'E-visa available for most countries. Apply online before your trip' },
                { icon: '💵', title: 'Currency', desc: 'Azerbaijani Manat (AZN). ATMs widely available' },
                { icon: '🛡️', title: 'Safety', desc: 'Generally safe for tourists. Standard precautions apply' },
              ].map((guide, index) => (
                <div key={index} className="group bg-white p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {guide.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              Ready to Explore Azerbaijan?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Plan your perfect trip with our comprehensive guides, local tips, and insider knowledge.
            </p>
            <div className="flex justify-center gap-4 flex-wrap animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/plan-trip" className="group bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Plan Your Trip
              </Link>
              <Link href="/contact" className="group border-2 border-gray-600 text-white px-10 py-4 rounded-full font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Help
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
