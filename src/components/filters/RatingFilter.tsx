"use client";

import React from 'react';

interface RatingFilterProps {
  currentRating: number;
  onChange: (rating: number) => void;
  minRating?: number;
  maxRating?: number;
  label?: string;
  className?: string;
}

export const RatingFilter: React.FC<RatingFilterProps> = ({
  currentRating,
  onChange,
  minRating = 1,
  maxRating = 5,
  label = 'Rating',
  className = '',
}) => {
  const ratings = [];
  for (let i = maxRating; i >= minRating; i--) {
    ratings.push(i);
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange(0)}
          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
            currentRating === 0
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Any
        </button>
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center gap-1 ${
              currentRating === rating
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}+
          </button>
        ))}
      </div>
    </div>
  );
};

interface CategoryFilterProps {
  categories: { value: string; label: string; count?: number }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  label?: string;
  className?: string;
  displayType?: 'buttons' | 'checkbox';
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedValues,
  onChange,
  label = 'Categories',
  className = '',
  displayType = 'buttons',
}) => {
  const toggleCategory = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(c => c !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  if (displayType === 'checkbox') {
    return (
      <div className={`space-y-2 ${className}`}>
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <label
              key={category.value}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(category.value)}
                  onChange={() => toggleCategory(category.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{category.label}</span>
              </span>
              {category.count !== undefined && (
                <span className="text-sm text-gray-500">({category.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => toggleCategory(category.value)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors flex items-center gap-1 ${
              selectedValues.includes(category.value)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
            {category.count !== undefined && (
              <span className="text-xs opacity-75">({category.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;