"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchAutocomplete, Place } from '@/data/places';

interface SearchBarProps {
  variant?: 'header' | 'hero';
  placeholder?: string;
}

export default function SearchBar({ variant = 'hero', placeholder = 'City, attraction, or restaurant...' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Place[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Update suggestions when query changes
  useEffect(() => {
    if (query.length >= 2) {
      const results = searchAutocomplete(query);
      setSuggestions(results);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSelect(suggestions[selectedIndex]);
      } else if (query.trim()) {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleSelect = (place: Place) => {
    setQuery(place.name);
    setShowSuggestions(false);
    // Focus on input for further typing or navigation
    inputRef.current?.focus();
  };

  const handleSearch = () => {
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Restaurants': return '🍽️';
      case 'Historic Sites': return '🏛️';
      case 'Museums': return '🏛️';
      case 'Parks & Nature': return '🌳';
      case 'Architectural Buildings': return '🏢';
      case 'Tours': return '🚌';
      default: return '📍';
    }
  };

  const inputClass = variant === 'header' 
    ? 'w-full px-4 py-2.5 rounded-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm'
    : 'w-full px-6 py-4 rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-primary/40 outline-none transition-all text-base';

  const containerClass = variant === 'header' 
    ? 'relative w-64'
    : 'relative max-w-2xl mx-auto';

  return (
    <div className={containerClass} ref={searchRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setShowSuggestions(true)}
          placeholder={placeholder}
          className={inputClass}
          aria-label="Search for cities, attractions, restaurants"
        />
        <button
          onClick={handleSearch}
          className={`absolute right-2 top-1/2 -translate-y-1/2 ${variant === 'header' ? 'bg-primary text-white p-2 rounded-full' : 'bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors'}`}
          aria-label="Search"
        >
          {variant === 'header' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ) : 'Search'}
        </button>
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs font-semibold text-gray-500 px-3 py-2">
              Suggestions ({suggestions.length})
            </div>
            {suggestions.map((place, index) => (
              <Link
                key={place.id}
                href={`/attractions/${place.id}`}
                onClick={() => handleSelect(place)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors ${selectedIndex === index ? 'bg-gray-50 ring-1 ring-primary/20' : ''}`}
              >
                <div className="w-10 h-10 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center text-lg">
                  {getCategoryIcon(place.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text truncate">{place.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{place.city}</span>
                    <span>•</span>
                    <span>{place.category}</span>
                    <span>•</span>
                    <span className="flex items-center text-primary">
                      ★ {place.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <button
                onClick={handleSearch}
                className="w-full text-center py-2 text-primary font-medium hover:bg-gray-50 rounded-lg"
              >
                Search for "{query}"
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}