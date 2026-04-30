"use client";

import React, { ReactNode } from 'react';
import { HeartButton } from '../HeartButton';

export interface BaseCardData {
  id: string;
  name: string;
  image: string;
  type?: 'city' | 'attraction' | 'restaurant' | 'tour' | 'hotel' | string;
  [key: string]: any;
}

export interface BaseCardProps {
  data: BaseCardData;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'compact';
  showHeartButton?: boolean;
  heartButtonPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const BaseCard: React.FC<BaseCardProps> = ({
  data,
  children,
  onClick,
  className = '',
  variant = 'default',
  showHeartButton = true,
  heartButtonPosition = 'top-right'
}) => {
  const positionClasses = {
    'top-right': 'top-3 right-3',
    'top-left': 'top-3 left-3',
    'bottom-right': 'bottom-3 right-3',
    'bottom-left': 'bottom-3 left-3',
  };

  return (
    <div
      onClick={onClick}
      className={`
        group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl 
        transition-all duration-300 overflow-hidden cursor-pointer
        border border-gray-100 hover:border-primary/20 hover:-translate-y-1
        ${variant === 'compact' ? 'p-3' : ''}
        ${className}
      `}
    >
      {/* TripAdvisor-style top gradient border on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {children}
      
      {showHeartButton && (
        <HeartButton
          item={{
            id: data.id,
            name: data.name,
            image: data.image,
            type: data.type as 'city' | 'attraction' | 'restaurant' | 'tour' | 'hotel',
          }}
          className={`absolute z-10 ${positionClasses[heartButtonPosition]}`}
        />
      )}
    </div>
  );
};

export default BaseCard;