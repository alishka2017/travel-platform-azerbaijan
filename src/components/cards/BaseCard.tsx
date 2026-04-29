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
        group relative bg-white rounded-xl shadow-md hover:shadow-xl 
        transition-all duration-300 overflow-hidden cursor-pointer
        ${variant === 'compact' ? 'p-3' : ''}
        ${className}
      `}
    >
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