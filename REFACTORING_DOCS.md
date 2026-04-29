# Component Refactoring - Documentation

## Overview

This document describes the refactored component structure for the travel-platform-azerbaijan project.

## New Structure

### Directory Structure

```
src/components/
├── cards/                 # Card components (new organized structure)
│   ├── BaseCard.tsx       # Base card component with common functionality
│   ├── ImageContainer.tsx # Reusable image container with overlay options
│   ├── HotelCard.tsx      # Improved hotel card
│   ├── CityCard.tsx       # Improved city card
│   ├── AttractionCard.tsx # Improved attraction card
│   ├── RestaurantCard.tsx # Restaurant card (new)
│   ├── TourCard.tsx       # Tour card (new)
│   └── index.ts           # Card components exports
├── filters/              # Filter components (new organized structure)
│   ├── FilterPanel.tsx   # Improved filter panel with sections
│   ├── PriceRangeFilter.tsx # Improved price range filter
│   ├── RatingFilter.tsx  # Rating and category filters
│   ├── MultiSelectFilter.tsx # Multi-select dropdown filter
│   └── index.ts          # Filter components exports
├── ui/                   # UI components (reserved for future use)
├── providers/            # React context providers (reserved for future use)
├── layout/               # Layout components (Header, Footer)
└── index.ts              # Main exports file
```

### Component Improvements

#### 1. BaseCard Component
- **Purpose**: Provides a consistent foundation for all card components
- **Features**:
  - Optional heart button with configurable positioning
  - Variant support (default/compact)
  - Click handler support
  - Consistent styling foundation

#### 2. ImageContainer Component
- **Purpose**: Reusable image component with overlay options
- **Features**:
  - Multiple overlay styles (gradient/solid/none)
  - Configurable overlay positions (top/bottom/both)
  - Hover zoom effect
  - Height customization

#### 3. Improved Card Components
- **HotelCard**: Enhanced with base card structure, improved badge system
- **CityCard**: Added horizontal and compact variants
- **AttractionCard**: Improved tag system and metadata display
- **New RestaurantCard**: Cuisine-based filtering, popular badges
- **New TourCard**: Difficulty levels, bestseller badges, includes display

#### 4. Filter System Improvements
- **FilterPanel**: Added reset functionality, better animation, sticky footer
- **PriceRangeFilter**: Quick select options, improved visual feedback
- **RatingFilter**: Button-based selection with clear visual states
- **CategoryFilter**: Supports both button and checkbox display types
- **MultiSelectFilter**: Clear all button, better dropdown UX
- **SearchFilter**: New component for text-based filtering

### Hooks

#### useFilters Hook
- **Purpose**: Centralized filter state management
- **Features**:
  - Filter state management
  - Update, reset, and clear functions
  - Integration with filter change callbacks

#### filterUtils
- **Purpose**: Utility functions for filtering and sorting
- **Functions**:
  - `applyFilters`: Apply multiple filters to an array
  - `sortItems`: Sort items by key and direction

### Backward Compatibility

All original components have been updated to re-export from the new structure:

```typescript
// Old import path still works
import { HotelCard } from '@/components/HotelCard';

// Internally imports from new structure
export { HotelCard, Hotel } from './cards/HotelCard';
```

### Migration Guide

#### For Existing Code
No changes required! The old imports will continue to work as they re-export from the new structure.

#### For New Code
Use the new organized imports:

```typescript
// Recommended: Import from the new structure
import { HotelCard, CityCard, AttractionCard } from '@/components/cards';
import { PriceRangeFilter, RatingFilter } from '@/components/filters';

// Or import specific components
import { HotelCard } from '@/components/cards/HotelCard';
import { PriceRangeFilter } from '@/components/filters/PriceRangeFilter';
```

### Benefits

1. **Better Organization**: Components are grouped by type and function
2. **Reusability**: Base components reduce code duplication
3. **Maintainability**: Clear structure makes it easier to find and update components
4. **Type Safety**: Proper TypeScript types for all components
5. **Flexibility**: Components support multiple variants and configurations
6. **Performance**: Optimized components with proper React patterns

### Component Examples

#### Using BaseCard
```tsx
<BaseCard
  data={hotel}
  onClick={handleClick}
  variant="compact"
  heartButtonPosition="top-right"
>
  {/* Custom content */}
</BaseCard>
```

#### Using Filter Hook
```typescript
const { filters, updateFilter, resetFilters } = useFilters({
  initialState: { minPrice: 0, maxPrice: 1000 },
  onFilterChange: (newFilters) => console.log(newFilters),
});

updateFilter('minPrice', 100);
```

### Next Steps

1. Migrate existing pages to use the new card components
2. Update filter implementations to use the new hook
3. Add more specialized card variants as needed
4. Consider adding animations and transitions
5. Add accessibility improvements (ARIA labels, keyboard navigation)
6. Add unit tests for components

### Performance Considerations

- Cards use React.memo for optimization
- Filters use useCallback to prevent unnecessary re-renders
- Image components use native lazy loading support
- Minimal re-renders with proper state management

### Known Limitations

- Some components may need additional props for specific use cases
- Advanced filter features (like range validation) may need enhancement
- Mobile responsiveness may need fine-tuning in some cases