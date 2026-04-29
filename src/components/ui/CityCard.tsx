
'use client';

import React from 'react';
import Link from 'next/link';
import { HeartButton } from '@/components/HeartButton';

interface CityCardProps {
  city: {
    id: string;
    name: string;
    slug: string;
    description: string;
    region: string;
    population: string;
    heroImage?: string;
    tag?: string;
    tagColor?: string;
    highlights?: string[];
  };
}

export const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const tagColors: Record<string, string> = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    amber: 'bg-amber-600',
    green: 'bg-green-600',
  };

  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
    >
      <div className="relative h-48 md:h-52 overflow-hidden">
        <img
          src={city.heroImage || `https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&q=80`}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {city.tag && (
          <div className={`absolute top-3 left-3 ${tagColors[city.tagColor || 'blue']} text-white px-3 py-1 rounded-full text-xs font-medium capitalize shadow-sm`}>
            {city.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
            {city.name}
          </h3>
          <HeartButton 
            item={{
              id: city.id,
              name: city.name,
              image: city.heroImage || '',
              category: 'City',
              rating: 4.8
            }} 
            size="sm"
          />
        </div>
        
        <p className="text-sm text-gray-500 mb-3">{city.region}</p>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
          {city.description}
        </p>
        
        {city.highlights && city.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {city.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold text-gray-700">4.8</span>
            <span className="text-gray-400 text-xs">(1,234 reviews)</span>
          </div>
          
          <span className="text-primary text-xs font-medium group-hover:translate-x-1 transition-transform">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
};
