"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

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

interface BlogPostContentProps {
  initialPost: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ initialPost, relatedPosts }: BlogPostContentProps) {
  const { language } = useLanguage();
  
  const t = {
    en: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Travel Guide",
      relatedArticles: "Related Articles",
      writtenBy: "Written by"
    },
    ru: {
      breadcrumbHome: "Главная",
      breadcrumbCurrent: "Путеводитель",
      relatedArticles: "Похожие статьи",
      writtenBy: "Автор"
    }
  };
  
  const text = t[language];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">{text.breadcrumbHome}</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#00AA6C]">{text.breadcrumbCurrent}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{initialPost.title[language]}</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-[#00AA6C] bg-green-50 px-3 py-1 rounded-full">
              {initialPost.category}
            </span>
            <span className="text-sm text-gray-500">{initialPost.readTime}</span>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
            <img 
              src={initialPost.image} 
              alt={initialPost.title[language]}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {initialPost.title[language]}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
            <span>{text.writtenBy} {initialPost.author}</span>
            <span>•</span>
            <span>{initialPost.date}</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: initialPost.content[language] }}
            />
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{text.relatedArticles}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                <div className="aspect-video bg-gray-200 rounded overflow-hidden mb-3">
                  <img 
                    src={related.image} 
                    alt={related.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-[#00AA6C] transition">
                  {related.title[language]}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}