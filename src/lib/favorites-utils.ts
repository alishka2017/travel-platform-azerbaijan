export interface FavoriteItem {
  id: string;
  name: string;
  type: 'attraction' | 'restaurant' | 'tour' | 'city';
  category?: string;
  image?: string;
  rating?: number;
  city?: string;
  priceLevel?: string | null;
  addedAt: string;
}

const STORAGE_KEY = 'azerbaijan-travel-favorites';

// Get favorites from localStorage
export const getFavorites = (): FavoriteItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save favorites to localStorage
export const saveFavorites = (favorites: FavoriteItem[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

// Check if item is in favorites
export const isFavorite = (id: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(item => item.id === id);
};

// Toggle favorite status
export const toggleFavorite = (item: Omit<FavoriteItem, 'addedAt'>): FavoriteItem[] => {
  const favorites = getFavorites();
  const existingIndex = favorites.findIndex(f => f.id === item.id);
  
  if (existingIndex >= 0) {
    // Remove from favorites
    favorites.splice(existingIndex, 1);
  } else {
    // Add to favorites
    favorites.push({
      ...item,
      addedAt: new Date().toISOString()
    });
  }
  
  saveFavorites(favorites);
  return favorites;
};
