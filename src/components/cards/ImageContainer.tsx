"use client";

import React, { ReactNode } from 'react';

interface ImageContainerProps {
  src: string;
  alt: string;
  children?: ReactNode;
  height?: string;
  className?: string;
  overlay?: 'gradient' | 'solid' | 'none';
  overlayPosition?: 'top' | 'bottom' | 'both' | 'right';
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  children,
  height = 'h-56',
  className = '',
  overlay = 'gradient',
  overlayPosition = 'bottom',
}) => {
  const getOverlayClass = () => {
    if (overlay === 'none') return '';
    
    const gradients = {
      top: 'bg-gradient-to-t from-black/40 to-transparent',
      bottom: 'bg-gradient-to-b from-black/40 to-transparent',
      both: 'bg-gradient-to-b from-black/20 via-transparent to-black/40',
      right: 'bg-gradient-to-r from-black/40 to-transparent',
    };
    
    const solids = {
      top: 'bg-black/20',
      bottom: 'bg-black/20',
      both: 'bg-black/20',
      right: 'bg-black/20',
    };
    
    if (overlay === 'gradient') {
      return gradients[overlayPosition] || gradients.bottom;
    }
    return solids[overlayPosition] || solids.bottom;
  };

  return (
    <div className={`relative overflow-hidden ${height} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${getOverlayClass()}`} />
      )}
      {children}
    </div>
  );
};

export default ImageContainer;