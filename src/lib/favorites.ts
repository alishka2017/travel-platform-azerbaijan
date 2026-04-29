'use client';

import { useState, useEffect, useCallback } from 'react';
import { FavoriteItem, getFavorites, saveFavorites } from './favorites-utils';

// Custom hook for favorites management
export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setFavorites(getFavorites());
  }, []);

  const addToFavorites = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      if (exists) {
        return prev.filter(f => f.id !== item.id);
      }
      const newFavorites = [...prev, { ...item, addedAt: new Date().toISOString() }];
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(f => f.id !== id);
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, []);

  const toggleFavoriteStatus = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      let newFavorites;
      if (exists) {
        newFavorites = prev.filter(f => f.id !== item.id);
      } else {
        newFavorites = [...prev, { ...item, addedAt: new Date().toISOString() }];
      }
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, []);

  const isItemFavorite = useCallback((id: string): boolean => {
    return favorites.some(f => f.id === id);
  }, [favorites]);

  return {
    favorites,
    isClient,
    addToFavorites,
    removeFromFavorites,
    toggleFavoriteStatus,
    isItemFavorite,
    favoritesCount: favorites.length
  };
}
