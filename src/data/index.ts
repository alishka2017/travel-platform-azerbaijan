import toursDataRaw from './tours.json';
import citiesDataRaw from './cities.json';
import restaurantsDataRaw from './restaurants.json';
import settingsDataRaw from './settings.json';

// Используем относительный импорт для типов, так как @ может не работать внутри src/data
import type { City, Tour, Restaurant, Settings } from '../types/content';

export const toursData = toursDataRaw as { tours: Tour[] };
export const citiesData = citiesDataRaw as { cities: City[] };
export const restaurantsData = restaurantsDataRaw as { restaurants: Restaurant[] };
export const settingsData = settingsDataRaw as Settings;