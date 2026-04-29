"use client";

import React from 'react';
import { BaseCard, BaseCardData } from './BaseCard';
import { ImageContainer } from './ImageContainer';

export interface Attraction extends BaseCardData {
  description?: string;
  rating: number;
  reviewCount?: number;
  category?: string;
  location?: string;
  price?: string;
  duration?: string;
  tags?: string[];
}

interface AttractionCardProps {
  attraction: Attraction;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'compact';
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  onClick,
  className = '',
  variant = 'default',
}) => {
  return (
    <BaseCard
      data={attraction}
      onClick={onClick}
      className={className}
      variant={variant === 'compact' ? 'compact' : 'default'}
    >
      <ImageContainer
        src={attraction.image}
        alt={attraction.name}
        height={variant === 'compact' ? 'h-32' : 'h-48'}
      >
        {/* Category Badge */}
        {attraction.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-white bg-blue-600/90 rounded-full backdrop-blur-sm">
            {attraction.category}
          </span>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-11 px-2.5 py-1 text-xs font-bold text-white bg-green-600/90 rounded-full backdrop-blur-sm flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {attraction.rating}
        </div>
      </ImageContainer>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
          {attraction.name}
        </h3>

        {/* Location */}
        {attraction.location && (
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {attraction.location}
          </p>
        )}

        {/* Review Count */}
        {attraction.reviewCount !== undefined && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(attraction.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({attraction.reviewCount} reviews)
            </span>
          </div>
        )}

        {/* Tags */}
        {attraction.tags && attraction.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {attraction.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price/Duration Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {attraction.price && (
            <span className="text-sm text-gray-500">{attraction.price}</span>
          )}
          {attraction.duration && (
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {attraction.duration}
            </span>
          )}
          <button className="px-3 py-1.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors ml-auto">
            Details
          </button>
        </div>
      </div>
    </BaseCard>
  );
};

export default AttractionCard;