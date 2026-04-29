"use client";

import React from 'react';
import { BaseCard, BaseCardData } from './BaseCard';
import { ImageContainer } from './ImageContainer';

export interface Hotel extends BaseCardData {
  rating: number;
  reviewCount?: number;
  location: string;
  pricePerNight: number;
  amenities?: string[];
  stars?: number;
  distanceFromCenter?: string;
  freeCancellation?: boolean;
  breakfastIncluded?: boolean;
}

interface HotelCardProps {
  hotel: Hotel;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'compact';
}

export const HotelCard: React.FC<HotelCardProps> = ({
  hotel,
  onClick,
  className = '',
  variant = 'default',
}) => {
  const starsDisplay = (stars: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < stars
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-400 fill-gray-400/50'
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <BaseCard
      data={hotel}
      onClick={onClick}
      className={className}
      variant={variant === 'compact' ? 'compact' : 'default'}
    >
      {/* Image Section */}
      <ImageContainer
        src={hotel.image}
        alt={hotel.name}
        height={variant === 'compact' ? 'h-36' : 'h-56'}
      >
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white bg-emerald-600/90 rounded-md backdrop-blur-sm">
          {hotel.rating}
        </div>

        {/* Stars */}
        {hotel.stars && (
          <div className="absolute top-3 right-11 flex gap-0.5">
            {starsDisplay(hotel.stars)}
          </div>
        )}

        {/* Badges */}
        <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
          {hotel.freeCancellation && (
            <span className="px-2 py-1 text-xs font-medium text-white bg-emerald-600/90 rounded-md backdrop-blur-sm">
              Free Cancellation
            </span>
          )}
          {hotel.breakfastIncluded && (
            <span className="px-2 py-1 text-xs font-medium text-white bg-amber-500/90 rounded-md backdrop-blur-sm">
              Breakfast Included
            </span>
          )}
        </div>
      </ImageContainer>

      {/* Content Section */}
      <div className="p-4">
        {/* Name & Location */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
            {hotel.name}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
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
            {hotel.location}
            {hotel.distanceFromCenter && (
              <span className="text-gray-400">• {hotel.distanceFromCenter}</span>
            )}
          </p>
        </div>

        {/* Rating & Review Count */}
        {hotel.reviewCount !== undefined && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(hotel.rating)
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
            <span className="text-sm text-gray-600">Excellent</span>
            <span className="text-sm text-gray-400">({hotel.reviewCount} reviews)</span>
          </div>
        )}

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && variant !== 'compact' && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {hotel.amenities.slice(0, 4).map((amenity, index) => (
              <span
                key={index}
                className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full flex items-center gap-1"
              >
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 4 && (
              <span className="text-xs px-2 py-0.5 text-gray-500">
                +{hotel.amenities.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-gray-800">${hotel.pricePerNight}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            View Deal
          </button>
        </div>
      </div>
    </BaseCard>
  );
};

export default HotelCard;