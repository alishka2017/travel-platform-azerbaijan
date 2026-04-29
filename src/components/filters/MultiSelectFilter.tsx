"use client";

import React, { useState, useRef, useEffect } from 'react';

interface MultiSelectFilterProps {
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const MultiSelectFilter: React.FC<MultiSelectFilterProps> = ({
  options,
  selectedValues,
  onChange,
  label,
  placeholder = 'Select options...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          {selectedValues.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Clear all
            </button>
          )}
        </div>
      )}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:border-gray-400 transition-colors"
        >
          <span className={`truncate ${selectedValues.length === 0 ? 'text-gray-400' : 'text-gray-700'}`}>
            {selectedValues.length > 0
              ? `${selectedValues.length} selected`
              : placeholder}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <>
            <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
              {options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Selected tags */}
      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {selectedValues.map((value) => {
            const option = options.find(o => o.value === value);
            return (
              <span
                key={value}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
              >
                {option?.label || value}
                <button
                  onClick={() => toggleOption(value)}
                  className="hover:text-blue-900"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Search...',
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiSelectFilter;