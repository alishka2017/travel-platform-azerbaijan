
export interface Place {
  id: string;
  name: string;
  city: string;
  citySlug: string;
  category: string;
  rating: number;
  reviewsCount: number;
  description: string;
  address: string;
  image: string;
  gallery: string[];
  openingHours?: string;
  tips: string[];
  tags: string[];
  priceLevel?: string | null;
  lat?: number;
  lon?: number;
}

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
}

export const cities: City[] = [
  {
    id: "baku",
    name: "Baku",
    slug: "baku",
    country: "Azerbaijan",
    region: "Absheron Peninsula",
    population: "2.3 million",
    description: "Capital city on the Caspian Sea, blending ancient walled city with modern skyscrapers.",
    heroImage: "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
    bestTime: "April-June, September-October",
    distanceFromBaku: "0 km",
    transport: "Metro, bus, taxi",
    topAttractions: ["Old City", "Flame Towers"],
    topRestaurants: ["Cay Bagi 145"],
    topHotels: ["Four Seasons Baku"]
  },
  {
    id: "ganja",
    name: "Ganja",
    slug: "gandja",
    country: "Azerbaijan",
    region: "Ganja-Dashkasan",
    population: "330,000",
    description: "Second-largest city, known as the 'City of Poems'.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ganja_2016.jpg/1280px-Ganja_2016.jpg",
    bestTime: "May-September",
    distanceFromBaku: "360 km",
    transport: "Train, bus, car",
    topAttractions: ["Nizami Mausoleum"],
    topRestaurants: ["Mugam Club"],
    topHotels: ["Ganja Hotel"]
  }
];

export const places: Place[] = [
  {
    id: "old-city-baku",
    name: "Old City (Icherisheher)",
    city: "Baku",
    citySlug: "baku",
    category: "Historic Sites",
    rating: 4.6,
    reviewsCount: 4472,
    description: "Medieval walled city, UNESCO World Heritage site.",
    address: "Icherisheher, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Icherisheher_Baku_2016.jpg/1280px-Icherisheher_Baku_2016.jpg",
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Icherisheher_Baku_2016.jpg/1280px-Icherisheher_Baku_2016.jpg"],
    openingHours: "Always open",
    tips: ["Visit early morning"],
    tags: ["history", "un", "architecture"],
    priceLevel: null,
    lat: 40.3653,
    lon: 49.8335
  },
  {
    id: "cay-bagi-145",
    name: "Cay Bagi 145",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.8,
    reviewsCount: 1867,
    description: "Famous tea house in the Old City.",
    address: "45 Kichik Gala, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg",
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg"],
    openingHours: "09:00 - 23:00",
    tips: ["Try the shekerbura"],
    tags: ["tea", "sweets", "traditional"],
    priceLevel: "$",
    lat: 40.3777,
    lon: 49.8312
  },
  {
    id: "highland-park",
    name: "Highland Park",
    city: "Baku",
    citySlug: "baku",
    category: "Parks",
    rating: 4.7,
    reviewsCount: 560,
    description: "Scenic hilltop park offering panoramic views.",
    address: "Highland Park, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Highland_Park_Baku.jpg/1280px-Highland_Park_Baku.jpg",
    gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Highland_Park_Baku.jpg/1280px-Highland_Park_Baku.jpg"],
    openingHours: "Always open",
    tips: ["Best for sunset"],
    tags: ["park", "view", "sunset"],
    priceLevel: null,
    lat: 40.3500,
    lon: 49.8300
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getPlacesByCity(citySlug: string): Place[] {
  return places.filter(place => place.citySlug === citySlug);
}

export function searchPlaces(query: string): Place[] {
  const lowerQuery = query.toLowerCase();
  return places.filter(place => 
    place.name.toLowerCase().includes(lowerQuery) ||
    place.city.toLowerCase().includes(lowerQuery) ||
    place.category.toLowerCase().includes(lowerQuery) ||
    place.tags.some(tag => tag.includes(lowerQuery))
  );
}
