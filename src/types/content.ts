// Types for content
export interface City {
  id: string;
  slug: string;
  image: string;
  heroImage?: string; // Optional for backwards compatibility
  population: string;
  bestTime: string;
  distanceFromBaku: string;
  transport: string;
  name: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  about: {
    en: string;
    ru: string;
  };
  region?: string;
}

export interface Tour {
  id: string;
  slug: string;
  category: string;
  image: string;
  duration: string;
  priceFrom: string;
  name: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
}

export interface Restaurant {
  id: string;
  slug: string;
  city: string;
  image: string;
  rating: number;
  category: string;
  name: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  address: {
    en: string;
    ru: string;
  };
}

export interface Settings {
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    workingHours: string;
    social: {
      instagram: string;
      facebook: string;
      telegram: string;
    };
  };
  site: {
    name: string;
    tagline: string;
    description: string;
  };
}

// JSON wrapper types
export interface ToursJson {
  tours: Tour[];
}

export interface CitiesJson {
  cities: City[];
}

export interface RestaurantsJson {
  restaurants: Restaurant[];
}