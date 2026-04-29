"use client";

import React, { useState, useEffect } from 'react';

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
  label?: string;
  currency?: string;
  className?: string;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange,
  label = 'Price Range',
  currency = '$',
  className = '',
}) => {
  const [localMin, setLocalMin] = useState(currentMin);
  const [localMax, setLocalMax] = useState(currentMax);

  // Sync with parent when props change
  useEffect(() => {
    setLocalMin(currentMin);
    setLocalMax(currentMax);
  }, [currentMin, currentMax]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), localMax - 10);
    setLocalMin(value);
    onChange(value, localMax);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), localMin + 10);
    setLocalMax(value);
    onChange(localMin, value);
  };

  const range = maxPrice - minPrice;
  const minPercent = ((localMin - minPrice) / range) * 100;
  const maxPercent = ((localMax - minPrice) / range) * 100;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {currency}{localMin.toLocaleString()} - {currency}{localMax.toLocaleString()}
        </span>
      </div>
      
      {/* Range Track */}
      <div className="relative h-6">
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />
        
        {/* Selected Range */}
        <div 
          className="absolute top-1/2 h-1.5 bg-blue-600 rounded-full -translate-y-1/2"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        />
        
        {/* Invisible Range Inputs */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={localMin}
          onChange={handleMinChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
          aria-label="Minimum price"
        />
        
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={localMax}
          onChange={handleMaxChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
          aria-label="Maximum price"
        />
        
        {/* Thumbs */}
        <div 
          className="absolute top-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow-md -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `${minPercent}%` }}
        />
        
        <div 
          className="absolute top-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow-md -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `${maxPercent}%` }}
        />
      </div>
      
      {/* Quick Select Options */}
      <div className="flex flex-wrap gap-2 pt-2">
        {['0-100', '100-200', '200-500', '500+'].map((range) => (
          <button
            key={range}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
            onClick={() => {
              const [min, max] = range.split('-').map(Number);
              if (isNaN(max)) {
                onChange(min, maxPrice);
              } else {
                onChange(min, max);
              }
            }}
          >
            {currency}{range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeFilter;