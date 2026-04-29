import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Azerbaijan Travel Blog | Tips, Guides & Stories',
  description: 'Expert travel tips, guides, and stories from Azerbaijan. Discover hidden gems, local insights, and practical advice for your trip.',
};

const articles = [
  {
    id: '7-day-itinerary',
    title: '7-Day Azerbaijan Itinerary: Mountains, Coast & History',
    excerpt: 'This week-long Azerbaijan itinerary takes in ancient culture, warm hospitality and stunning natural landscapes. From Baku\'s modern skyline to the ancient villages of the Caucasus Mountains.',
    date: 'Apr 23, 2025',
    readTime: '10 min read',
    category: 'Itineraries',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
  },
  {
    id: 'best-places',
    title: 'The 12 Best Places to Visit in Azerbaijan',
    excerpt: 'Azerbaijan offers everything from Caspian Sea beaches to dramatic mountain landscapes. Discover the must-see attractions and hidden gems.',
    date: 'Feb 19, 2025',
    readTime: '13 min read',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
  },
  {
    id: 'best-time-to-visit',
    title: 'When is the Best Time to Visit Azerbaijan?',
    excerpt: 'From mountain adventures to summer beach days, Azerbaijan is worth visiting at any time of year. Here\'s a month-by-month guide.',
    date: 'Feb 17, 2025',
    readTime: '7 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
  },
  {
    id: 'baku-hidden-gems',
    title: '10 Hidden Gems in Baku Beyond the Old City',
    excerpt: 'Beyond the UNESCO-listed Old City, Baku hides countless treasures. From local tea houses to contemporary art spaces, discover the real Baku.',
    date: 'Mar 10, 2025',
    readTime: '8 min read',
    category: 'Baku',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
  },
  {
    id: 'mountain-villages',
    title: 'Azerbaijan\'s Mountain Villages: A Complete Guide',
    excerpt: 'Explore the ancient villages of the Greater Caucasus Mountains, from Khinalig to Lahij. Discover traditional culture and stunning landscapes.',
    date: 'Jan 25, 2025',
    readTime: '12 min read',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 'food-guide',
    title: 'Azerbaijani Cuisine: A Food Lover\'s Guide',
    excerpt: 'From plov to dolma, discover the rich flavors of Azerbaijani cuisine. Where to eat, what to try, and culinary traditions.',
    date: 'Jan 15, 2025',
    readTime: '9 min read',
    category: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Azerbaijan Travel Blog</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Expert tips, guides, and stories to help you explore the Land of Fire
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Itineraries</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Destinations</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Travel Tips</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Food & Drink</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link 
                  href={`/blog/${article.id}`}
                  key={article.id}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {article.date} · {article.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-emerald-600 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Travel Tips Directly to Your Inbox</h2>
            <p className="text-emerald-100 mb-6">
              Subscribe to our newsletter for exclusive travel guides, tips, and inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-800 w-full sm:w-80"
              />
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}