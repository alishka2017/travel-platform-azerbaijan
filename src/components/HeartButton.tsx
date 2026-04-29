"use client";

import React from 'react';
import { useFavorites } from '@/lib/favorites';

interface HeartButtonProps {
  item: {
    id: string;
    name: string;
    image?: string;
    category?: string;
    rating?: number;
    type?: 'attraction' | 'restaurant' | 'tour' | 'city' | 'hotel';
  };
  className?: string;
  size?: 'sm' | 'md';
}

export const HeartButton: React.FC<HeartButtonProps> = ({ item, className = '' }) => {
  const { toggleFavoriteStatus, isItemFavorite } = useFavorites();
  const isFav = isItemFavorite(item.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavoriteStatus({
          id: item.id,
          name: item.name,
          image: item.image,
          category: item.category,
          rating: item.rating,
          type: item.type || 'attraction'
        });
      }}
      className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 ${className}`}
      aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={`w-5 h-5 transition-colors duration-200 ${
          isFav ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
        fill={isFav ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};