import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { cities, places } from '@/data/places';
import Head from 'next/head';
import { generateWebSiteSchema } from '@/lib/schema';

export default function HomePage() {
  const topAttractions = places.filter(p => p.category !== 'Restaurants' && p.category !== 'Tours').slice(0, 8);
  const topRestaurants = places.filter(p => p.category === 'Restaurants').slice(0, 4);
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <Head>
        <title>Azerbaijan Travel Platform - Discover Ancient & Modern Wonders</title>
        <meta name="description" content="Explore Azerbaijan with our comprehensive travel guide. Discover cities, attractions, restaurants, and hidden gems in the Land of Fire." />
        <meta property="og:title" content="Azerbaijan Travel Platform" />
        <meta property="og:description" content="Your complete guide to Azerbaijan." />
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_modern_skyline.jpg/1280px-Baku_modern_skyline.jpg" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1555441565-b8e84a2571ed?w=1920&q=80)',
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,170,108,0.15)_0%,transparent_70%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
            {/* Badge */}
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                #1 Travel Destination in the Caucasus
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center mb-6 animate-slide-up"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              <span className="block">Discover the Magic of</span>
              <span className="text-primary-light">Azerbaijan</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl lg:text-3xl text-center max-w-4xl mb-12 opacity-90 animate-slide-up animate-delay-100" style={{ animationDelay: '0.1s' }}>
              Experience the perfect blend of ancient heritage and modern marvels in the Land of Fire. 
              From Baku's stunning skyline to Sheki's historic charm.
            </p>

            {/* Search Box - Enhanced */}
            <div className="w-full max-w-4xl animate-slide-up animate-delay-200" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row items-center gap-3">
                {/* Location Input */}
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

                {/* Date Input */}
                <div className="hidden lg:flex items-center gap-3 px-4 py-3 border-r border-gray-200">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 font-medium">Dates</label>
                    <input 
                      type="text" 
                      placeholder="Add dates" 
                      className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="hidden lg:flex items-center gap-3 px-4 py-3 border-r border-gray-200">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 font-medium">Travelers</label>
                    <input 
                      type="text" 
                      placeholder="Add guests" 
                      className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none text-base"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <Link 
                  href="/search"
                  className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 active:scale-95 flex items-center gap-2 min-w-[160px] justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">
              {[
                { href: '/hotels', label: 'Hotels', icon: '🏨' },
                { href: '/attractions', label: 'Attractions', icon: '🏛️' },
                { href: '/restaurants', label: 'Restaurants', icon: '🍽️' },
                { href: '/tours', label: 'Tours', icon: '🚌' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover the best of Azerbaijan with our curated selection of experiences
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {[
                { name: 'Things to Do', icon: '🎭', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80' },
                { name: 'Hotels', icon: '🏨', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
                { name: 'Restaurants', icon: '🍽️', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' },
                { name: 'Cities', icon: '🏙️', img: 'https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=400&q=80' },
                { name: 'Tours', icon: '🚌', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80' },
                { name: 'Hidden Gems', icon: '💎', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80' }
              ].map((cat) => (
                <Link 
                  key={cat.name}
                  href={`/${cat.name.toLowerCase().replace(' ', '-')}`} 
                  className="group relative h-56 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/75 group-hover:to-transparent transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-white">
                    <span className="text-3xl mb-3 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300">{cat.icon}</span>
                    <span className="font-semibold text-sm md:text-base tracking-wide">{cat.name}</span>
                  </div>
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Cities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  Top Cities
                </h2>
                <p className="text-gray-600">
                  Explore the most popular destinations in Azerbaijan
                </p>
              </div>
              <Link 
                href="/cities" 
                className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                View All Cities
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link 
                  href={`/cities/${city.slug}`} 
                  key={city.id}
                  className="group"
                >
                  <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden mb-5 shadow-card group-hover:shadow-card-hover transition-all duration-300">
                    <img 
                      src={city.heroImage} 
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-300"></div>
                    
                    {/* City Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-xs font-medium opacity-80">{city.region}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl group-hover:text-primary-light transition-colors">
                        {city.name}
                      </h3>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3 group-hover:text-gray-800 transition-colors">
                    {city.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Explore City
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Attractions Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  Top Attractions
                </h2>
                <p className="text-gray-600">
                  Discover the must-visit landmarks and places of interest
                </p>
              </div>
              <Link 
                href="/attractions" 
                className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                View All Attractions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topAttractions.map((place) => (
                <Link 
                  href={`/attractions/${place.id}`} 
                  key={place.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {place.category}
                      </span>
                    </div>
                    {/* UNESCO Badge */}
                    {place.tags.includes("UNESCO") && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                          </svg>
                          UNESCO
                        </span>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1 flex-1">
                        {place.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{place.rating}</span>
                        {place.reviewsCount && (
                          <span className="text-xs text-gray-400">
                            ({place.reviewsCount.toLocaleString()} reviews)
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{place.city}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Restaurants Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                  Top Restaurants
                </h2>
                <p className="text-gray-600">
                  Experience the finest dining in Azerbaijan
                </p>
              </div>
              <Link 
                href="/restaurants" 
                className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                View All Restaurants
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRestaurants.map((place) => (
                <Link 
                  href={`/restaurants/${place.id}`} 
                  key={place.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
                    />
                    {/* Price Level Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                        {place.priceLevel}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-display font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-1">
                      {place.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                      {place.tags.join(' • ')}
                    </p>
                    
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{place.rating}</span>
                      <span className="text-xs text-gray-400">
                        ({place.reviewsCount?.toLocaleString() || '0'} reviews)
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
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
                { 
                  icon: (
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                      🏛️
                    </div>
                  ),
                  title: 'Ancient History',
                  description: '3,000+ years of continuous history with UNESCO World Heritage sites and legendary Silk Road heritage.'
                },
                { 
                  icon: (
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                      🌆
                    </div>
                  ),
                  title: 'Modern Architecture',
                  description: 'Futuristic skyline meeting historic Old City in perfect harmony, featuring iconic Flame Towers.'
                },
                { 
                  icon: (
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                      🏔️
                    </div>
                  ),
                  title: 'Natural Wonders',
                  description: 'From Caspian beaches to Caucasus peaks, mud volcanoes, and lush national parks.'
                },
                { 
                  icon: (
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                      🎎
                    </div>
                  ),
                  title: 'Unique Culture',
                  description: 'Where East meets West with legendary hospitality, rich traditions, and warm welcomes.'
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-5 inline-block group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    {item.description}
                  </p>
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
                { 
                  icon: '🌤️', 
                  title: 'Best Time to Visit', 
                  description: 'April-June and September-October offer pleasant weather for sightseeing.',
                  bgColor: 'bg-orange-400'
                },
                { 
                  icon: '🛂', 
                  title: 'Visa Info', 
                  description: 'E-visa available for most countries. Apply online before your trip.',
                  bgColor: 'bg-blue-400'
                },
                { 
                  icon: '💵', 
                  title: 'Currency', 
                  description: 'Azerbaijani Manat (AZN). ATMs widely available throughout the country.',
                  bgColor: 'bg-green-400'
                },
                { 
                  icon: '🛡️', 
                  title: 'Safety', 
                  description: 'Generally safe for tourists. Standard precautions and situational awareness apply.',
                  bgColor: 'bg-purple-400'
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 animate-slide-up">
              Ready to Explore Azerbaijan?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Plan your perfect trip with our comprehensive guides, local tips, and insider knowledge.
            </p>
            <div className="flex justify-center gap-4 flex-wrap animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link 
                href="/plan-trip" 
                className="group bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Plan Your Trip
              </Link>
              <Link 
                href="/contact" 
                className="group border-2 border-gray-600 text-white px-10 py-4 rounded-full font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 active:scale-95 flex items-center gap-3 text-lg"
              >
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
