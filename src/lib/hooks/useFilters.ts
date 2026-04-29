"use client";

import React, { useState, useCallback, useEffect } from 'react';

export interface FilterState {
  [key: string]: any;
}

interface UseFiltersProps {
  initialState?: FilterState;
  onFilterChange?: (filters: FilterState) => void;
}

export const useFilters = (props: UseFiltersProps = {}) => {
  const { initialState = {}, onFilterChange } = props;
  const [filters, setFilters] = useState<FilterState>(initialState);

  const updateFilter = useCallback((key: string, value: any) => {
    setFilters(prev => {
      const newFilters = { ...prev, [key]: value };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  }, [onFilterChange]);

  const resetFilters = useCallback(() => {
    setFilters(initialState);
    onFilterChange?.(initialState);
  }, [initialState, onFilterChange]);

  const clearFilter = useCallback((key: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      onFilterChange?.(newFilters);
      return newFilters;
    });
  }, [onFilterChange]);

  return {
    filters,
    updateFilter,
    resetFilters,
    clearFilter,
  };
};

export const filterUtils = {
  applyFilters: <T,>(items: T[], filters: FilterState): T[] => {
    return items.filter(item => {
      return Object.entries(filters).every(([key, filterValue]) => {
        if (filterValue === null || filterValue === undefined || filterValue === '') {
          return true;
        }

        const itemValue = (item as any)[key];
        
        // Handle array filters (multiple selection)
        if (Array.isArray(filterValue)) {
          if (filterValue.length === 0) return true;
          return filterValue.includes(itemValue);
        }

        // Handle range filters
        if (typeof filterValue === 'object' && filterValue !== null && 'min' in filterValue && 'max' in filterValue) {
          return itemValue >= filterValue.min && itemValue <= filterValue.max;
        }

        // Handle exact match
        return itemValue === filterValue;
      });
    });
  },

  sortItems: <T,>(items: T[], sortKey: string, direction: 'asc' | 'desc' = 'asc'): T[] => {
    return [...items].sort((a, b) => {
      const aVal = (a as any)[sortKey];
      const bVal = (b as any)[sortKey];
      
      if (aVal === bVal) return 0;
      
      const comparison = aVal > bVal ? 1 : -1;
      return direction === 'asc' ? comparison : -comparison;
    });
  },
};

export default useFilters;