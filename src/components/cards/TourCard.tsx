"use client";

import React from 'react';
import { BaseCard, BaseCardData } from './BaseCard';
import { ImageContainer } from './ImageContainer';

export interface Tour extends BaseCardData {
  description?: string;
  rating: number;
  reviewCount?: number;
  duration?: string;
  price?: number;
  priceRange?: string;
  groupSize?: string;
  includes?: string[];
  languages?: string[];
  difficulty?: 'easy' | 'moderate' | 'challenging';
  isBestseller?: boolean;
}

interface TourCardProps {
  tour: Tour;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'compact';
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onClick,
  className = '',
  variant = 'default',
}) => {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    moderate: 'bg-yellow-100 text-yellow-700',
    challenging: 'bg-red-100 text-red-700',
  };

  return (
    <BaseCard
      data={tour}
      onClick={onClick}
      className={className}
      variant={variant === 'compact' ? 'compact' : 'default'}
    >
      <ImageContainer
        src={tour.image}
        alt={tour.name}
        height={variant === 'compact' ? 'h-32' : 'h-48'}
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tour.isBestseller && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-600/90 rounded-full backdrop-blur-sm">
              Bestseller
            </span>
          )}
          {tour.difficulty && (
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${difficultyColors[tour.difficulty]}`}
            >
              {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-bold text-white bg-blue-600/90 rounded-full backdrop-blur-sm flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {tour.rating}
        </div>
      </ImageContainer>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
          {tour.name}
        </h3>

        {/* Description */}
        {tour.description && (
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {tour.description}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
          {tour.duration && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {tour.duration}
            </span>
          )}
          {tour.groupSize && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {tour.groupSize}
            </span>
          )}
        </div>

        {/* Includes */}
        {tour.includes && tour.includes.length > 0 && variant !== 'compact' && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tour.includes.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded-full flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </span>
            ))}
            {tour.includes.length > 3 && (
              <span className="text-xs px-2 py-0.5 text-gray-500">
                +{tour.includes.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            {tour.languages && tour.languages.length > 0 && (
              <div className="flex items-center">
                {tour.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded mr-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {tour.price && (
              <div>
                <span className="text-lg font-bold text-gray-800">${tour.price}</span>
                <span className="text-xs text-gray-500">/person</span>
              </div>
            )}
            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default TourCard;