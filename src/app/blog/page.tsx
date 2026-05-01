import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getBlogPosts } from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Azerbaijan Travel Blog | Tips, Guides & Stories",
  description: "Expert travel tips, guides, and stories to help you explore the Land of Fire",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Travel Guide</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Azerbaijan Travel Blog
          </h1>
          <p className="text-gray-600">
            Expert tips, guides, and stories to help you explore the Land of Fire
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Itineraries', 'Destinations', 'Travel Tips', 'Food & Drink', 'Adventure', 'City Guides'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#00AA6C] hover:text-[#00AA6C] transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#00AA6C] bg-green-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#00AA6C] transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-sm text-[#00AA6C] font-medium">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="mt-16 bg-[#00AA6C] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Get Travel Tips Directly to Your Inbox
          </h2>
          <p className="text-green-100 mb-6">
            Subscribe to our newsletter for exclusive tips and offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#00AA6C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
