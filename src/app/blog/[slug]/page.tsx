import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/client-content';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  
  return {
    title: post.title + " | Smartholiday.az",
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getBlogPosts().filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#00AA6C]">Travel Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{post.title}</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-[#00AA6C] bg-green-50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
            <span>Written by {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '</p><p class="mt-4">').replace(/\n/g, '<br>') }}
            />
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-800 group-hover:text-[#00AA6C] transition">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
