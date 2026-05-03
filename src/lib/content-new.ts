// Content data using static imports (works on client & server)
import type { City, Tour, Restaurant, Settings } from '../types/content';

// Import JSON data directly from lib folder
import toursDataRaw from './tours.json';
import citiesDataRaw from './cities.json';
import restaurantsDataRaw from './restaurants.json';
import settingsDataRaw from './settings.json';

// Helper to type the raw data
const toursData = toursDataRaw as { tours: Tour[] };
const citiesData = citiesDataRaw as { cities: City[] };
const restaurantsData = restaurantsDataRaw as { restaurants: Restaurant[] };
const settingsData = settingsDataRaw as Settings;

// Types for grouped tours
export interface GroupedTours {
  'city-tours': Tour[];
  'day-trips': Tour[];
  'multi-day': Tour[];
  adventure: Tour[];
  'food-wine': Tour[];
}

// --- Tours ---
export const getToursSync = (): GroupedTours => {
  const grouped: GroupedTours = {
    'city-tours': [],
    'day-trips': [],
    'multi-day': [],
    adventure: [],
    'food-wine': []
  };

  if (toursData.tours) {
    toursData.tours.forEach((tour: Tour) => {
      if (grouped[tour.category as keyof GroupedTours]) {
        grouped[tour.category as keyof GroupedTours].push(tour);
      }
    });
  }

  return grouped;
};

// --- Cities ---
export const getCitiesSync = (): City[] => {
  return citiesData.cities || [];
};

// --- Restaurants ---
export const getRestaurantsSync = (): Restaurant[] => {
  return restaurantsData.restaurants || [];
};

// --- Settings ---
export const getSettingsSync = (): Settings => {
  return settingsData;
};

// --- Legacy exports for compatibility ---
export { getSettingsSync as getSettings };