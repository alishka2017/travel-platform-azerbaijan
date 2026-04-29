"use client";

import React from 'react';
import { BaseCard, BaseCardData } from './BaseCard';
import { ImageContainer } from './ImageContainer';
import { HeartButton } from '../HeartButton';

export interface City extends BaseCardData {
  country: string;
  description?: string;
  attractionsCount?: number;
  hotelsCount?: number;
  restaurantsCount?: number;
  averageRating?: number;
  priceLevel?: 'budget' | 'moderate' | 'expensive' | 'luxury';
  featured?: boolean;
}

interface CityCardProps {
  city: City;
  onClick?: () => void;
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'compact';
}

export const CityCard: React.FC<CityCardProps> = ({
  city,
  onClick,
  className = '',
  variant = 'vertical',
}) => {
  const priceSymbol = city.priceLevel
    ? {
        budget: '$',
        moderate: '$$',
        expensive: '$$$',
        luxury: '$$$$',
      }[city.priceLevel]
    : '';

  if (variant === 'horizontal') {
    return (
      <BaseCard
        data={city}
        onClick={onClick}
        className={`flex ${className}`}
        showHeartButton={false}
      >
        <div className="flex w-full">
          {/* Image */}
          <ImageContainer
            src={city.image}
            alt={city.name}
            height="h-full min-h-[160px]"
            className="w-48 flex-shrink-0"
            overlay="gradient"
            overlayPosition="right"
          >
            {city.featured && (
              <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white bg-amber-500 rounded-full">
                Featured
              </span>
            )}
          </ImageContainer>

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-sm">{city.country}</p>
              </div>
              <HeartButton
                item={{
                  id: city.id,
                  name: city.name,
                  image: city.image,
                  type: 'city',
                }}
              />
            </div>

            {city.description && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {city.description}
              </p>
            )}

            {/* Stats */}
            <div className="flex gap-4 mt-3 text-sm text-gray-500">
              {city.attractionsCount && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {city.attractionsCount} attractions
                </span>
              )}
              {city.hotelsCount && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {city.hotelsCount} hotels
                </span>
              )}
              {city.restaurantsCount && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {city.restaurantsCount} restaurants
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
              {city.averageRating && (
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">{city.averageRating}</span>
                </div>
              )}
              {priceSymbol && (
                <span className="text-sm text-gray-500">{priceSymbol}</span>
              )}
            </div>
          </div>
        </div>
      </BaseCard>
    );
  }

  // Vertical or compact variant
  return (
    <BaseCard
      data={city}
      onClick={onClick}
      className={className}
      variant={variant === 'compact' ? 'compact' : 'default'}
    >
      <ImageContainer
        src={city.image}
        alt={city.name}
        height={variant === 'compact' ? 'h-32' : 'h-56'}
      >
        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{city.name}</h3>
          <p className="text-sm opacity-90">{city.country}</p>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {city.featured && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-amber-500 rounded-full">
              Featured
            </span>
          )}
          {priceSymbol && (
            <span className="px-2 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full">
              {priceSymbol}
            </span>
          )}
        </div>
      </ImageContainer>

      {/* Content */}
      <div className="p-4">
        {city.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {city.description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          {city.attractionsCount && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {city.attractionsCount} places
            </span>
          )}
          {city.averageRating && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium text-gray-700">{city.averageRating}</span>
            </div>
          )}
        </div>

        {/* Explore Button */}
        <button className="w-full py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
          Explore {city.name}
        </button>
      </div>
    </BaseCard>
  );
};

export default CityCard;