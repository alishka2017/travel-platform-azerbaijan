
'use client';

import React, { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

interface FilterProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  type?: 'checkbox' | 'radio' | 'range';
}

export const FilterSection: React.FC<FilterProps> = ({
  title,
  options,
  selectedValues,
  onChange,
  type = 'checkbox'
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = (value: string) => {
    if (type === 'radio') {
      onChange([value]);
    } else {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onChange(newValues);
    }
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-2 text-left"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-2">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center">
                <input
                  type={type === 'radio' ? 'radio' : 'checkbox'}
                  checked={selectedValues.includes(option.value)}
                  onChange={() => handleToggle(option.value)}
                  className={`h-4 w-4 ${
                    type === 'radio' ? 'rounded-full' : 'rounded'
                  } border-gray-300 text-primary focus:ring-primary`}
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </div>
              {option.count !== undefined && (
                <span className="text-xs text-gray-400">{option.count}</span>
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// Комплексный компонент фильтров
interface FiltersProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'All Categories', value: 'all' },
    { id: 'historic', label: 'Historic Sites', value: 'historic' },
    { id: 'museums', label: 'Museums', value: 'museums' },
    { id: 'nature', label: 'Parks & Nature', value: 'nature' },
    { id: 'restaurants', label: 'Restaurants', value: 'restaurants' },
    { id: 'hotels', label: 'Hotels', value: 'hotels' },
  ];

  const ratings = [
    { id: '5', label: '★★★★★', value: '5' },
    { id: '4', label: '★★★★☆ & up', value: '4' },
    { id: '3', label: '★★★☆☆ & up', value: '3' },
  ];

  const prices = [
    { id: 'budget', label: 'Budget ($)', value: 'budget' },
    { id: 'mid', label: 'Mid-range ($$)', value: 'mid' },
    { id: 'luxury', label: 'Luxury ($$$)', value: 'luxury' },
  ];

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      rating: selectedRating,
      price: selectedPrice,
    });
  };

  React.useEffect(() => {
    handleFilterChange();
  }, [selectedCategory, selectedRating, selectedPrice]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        <button
          onClick={() => {
            setSelectedCategory([]);
            setSelectedRating([]);
            setSelectedPrice([]);
          }}
          className="text-xs text-primary hover:underline"
        >
          Clear all
        </button>
      </div>

      <FilterSection
        title="Category"
        options={categories}
        selectedValues={selectedCategory}
        onChange={setSelectedCategory}
      />

      <FilterSection
        title="Rating"
        options={ratings}
        selectedValues={selectedRating}
        onChange={setSelectedRating}
      />

      <FilterSection
        title="Price"
        options={prices}
        selectedValues={selectedPrice}
        onChange={setSelectedPrice}
      />
    </div>
  );
};
