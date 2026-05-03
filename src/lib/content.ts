// Server-side content data
import * as fs from 'fs';
import * as path from 'path';
import type { City, Tour, Settings } from '../types/content';

const contentDir = path.join(process.cwd(), 'public', 'content');

export const getToursSync = (): {
  'city-tours': Tour[];
  'day-trips': Tour[];
  'multi-day': Tour[];
  adventure: Tour[];
  'food-wine': Tour[];
} => {
  try {
    const filePath = path.join(contentDir, 'tours', 'categories', 'tours.json');
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const toursData = JSON.parse(fileContents);
      // Structure is { categories: { 'city-tours': [...] } }
      if (toursData.categories) {
        return toursData.categories;
      }
    }
  } catch (error) {
    console.error('Error loading tours:', error);
  }
  return { 
    'city-tours': [], 
    'day-trips': [], 
    'multi-day': [], 
    adventure: [], 
    'food-wine': [] 
  };
}; 

export const getCitiesSync = (): City[] => {
  try {
    const filePath = path.join(contentDir, 'cities', 'cities.json');
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const citiesData = JSON.parse(fileContents);
      if (citiesData.cities) {
        return citiesData.cities;
      }
    }
  } catch (error) {
    console.error('Error loading cities:', error);
  }
  return [];
};

// Re-export client-side functions
export { getTransfers, getBlogPosts, getBlogPostBySlug, searchContent, getSettings } from './client-content';
