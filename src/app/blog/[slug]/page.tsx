import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/client-content';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogPostContent from './BlogPostContent';

interface BlogPost {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  title: { ru: string; en: string };
  excerpt: { ru: string; en: string };
  content: { ru: string; en: string };
  author: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  
  return {
    title: post.title?.ru || post.title + " | Smartholiday.az",
    description: post.excerpt?.ru || post.excerpt,
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
  const allPosts = getBlogPosts();
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = allPosts.filter((p: any) => p.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <BlogPostContent initialPost={post} relatedPosts={relatedPosts} />
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}