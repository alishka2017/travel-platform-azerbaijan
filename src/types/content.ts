// Types for content
export interface City {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  population: string;
  description: string;
  heroImage: string;
  bestTime: string;
  distanceFromBaku: string;
  transport: string;
  topAttractions: string[];
  topRestaurants: string[];
  topHotels: string[];
  hiddenGems: string[];
  mistakesToAvoid: string[];
}

export interface Tour {
  id: string;
  name: string;
  slug: string;
  duration: string;
  price: string;
  category: string;
  program: string[];
  includes: string[];
  description: string;
  image: string;
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