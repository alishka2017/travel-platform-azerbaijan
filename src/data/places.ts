
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
    image: "https://images.unsplash.com/photo-1562184552-e0a8e3b5e899?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: ["Best for sunset"],
    tags: ["park", "view", "sunset"],
    priceLevel: null,
    lat: 40.3500,
    lon: 49.8300
  },
  {
    id: "baku-city-tour",
    name: "Baku City Tour (Full Day)",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 5.0,
    reviewsCount: 1250,
    description: "Explore Old City, Flame Towers, Heydar Aliyev Center, and Boulevard. Perfect introduction to Baku.",
    address: "Pickup from hotel",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "09:00 - 17:00",
    tips: ["Comfortable shoes", "Camera ready"],
    tags: ["culture", "city", "full-day"],
    priceLevel: "25 AZN",
    lat: 40.3777,
    lon: 49.8312
  },
  {
    id: "gobustan-mud-volcanoes-tour",
    name: "Gobustan & Mud Volcanoes Day Trip",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 4.9,
    reviewsCount: 890,
    description: "UNESCO rock carvings, unique mud volcanoes, and ancient Ateshgah Fire Temple.",
    address: "Pickup from hotel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mud_volcano_in_Azerbaijan.jpg/1280px-Mud_volcano_in_Azerbaijan.jpg",
    gallery: [],
    openingHours: "08:00 - 18:00",
    tips: ["Sunscreen", "Old clothes for volcanoes"],
    tags: ["nature", "un", "adventure"],
    priceLevel: "40 AZN",
    lat: 40.3833,
    lon: 50.0167
  },
  {
    id: "sheki-historical-tour",
    name: "Sheki Historical Tour (2 Days)",
    city: "Sheki",
    citySlug: "sheki",
    category: "Tours",
    rating: 5.0,
    reviewsCount: 450,
    description: "Visit UNESCO Sheki Khan Palace, Caravanserai, and traditional silk workshops.",
    address: "Sheki Old City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
    gallery: [],
    openingHours: "2 Days",
    tips: ["Overnight stay included", "Local guide"],
    tags: ["history", "un", "overnight"],
    priceLevel: "120 AZN",
    lat: 41.1919,
    lon: 47.1706
  },
  {
    id: "gabala-mountain-adventure",
    name: "Gabala Mountain Adventure",
    city: "Gabala",
    citySlug: "gabala",
    category: "Tours",
    rating: 4.8,
    reviewsCount: 620,
    description: "Cable car, Tufandag ski resort, Lake Nohur, and waterfalls.",
    address: "Gabala Region",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg",
    gallery: [],
    openingHours: "Full Day",
    tips: ["Check weather", "Mountain gear"],
    tags: ["nature", "ski", "family"],
    priceLevel: "50 AZN",
    lat: 40.9825,
    lon: 47.8094
  },
  {
    id: "baku-food-tour",
    name: "Food & Culture Tour Baku",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 4.9,
    reviewsCount: 780,
    description: "Taza Bazaar, tea house visit, cooking class, and Old City walking tour.",
    address: "Baku Old City",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "5 Hours",
    tips: ["Come hungry", "Vegetarian options available"],
    tags: ["food", "cooking", "culture"],
    priceLevel: "35 AZN",
    lat: 40.3653,
    lon: 49.8335
  },
  {
    id: "malacannes-145",
    name: "Malacannes 145",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.9,
    reviewsCount: 1726,
    description: "Fine dining with modern European cuisine on Nizami Street.",
    address: "Nizami St, Baku",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ["Reservation required", "Business lunch available"],
    tags: ["european", "luxury", "fine-dining"],
    priceLevel: "$$$$",
    lat: 40.3733,
    lon: 49.8511
  },
  {
    id: "dolma-restaurant",
    name: "Dolma Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 1884,
    description: "Authentic Azerbaijani cuisine in the heart of the city.",
    address: "Istiqlaliyyet St, Baku",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 23:00",
    tips: ["Try the dolma", "Cozy atmosphere"],
    tags: ["local", "traditional", "meat"],
    priceLevel: "$$",
    lat: 40.3733,
    lon: 49.8533
  },
  {
    id: "firuze-restaurant",
    name: "Firuze Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.5,
    reviewsCount: 3027,
    description: "Azerbaijani and Arabic cuisine with oriental atmosphere.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ["Hookah available", "Live music"],
    tags: ["arabic", "oriental", "atmosphere"],
    priceLevel: "$$",
    lat: 40.3700,
    lon: 49.8300
  },
  {
    id: "passage-145",
    name: "Passage 145",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.8,
    reviewsCount: 1358,
    description: "BBQ and European cuisine in a stylish setting.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ["BBQ specialties", "Wine selection"],
    tags: ["bbq", "european", "stylish"],
    priceLevel: "$$",
    lat: 40.3710,
    lon: 49.8500
  },
  {
    id: "nergiz-restaurant",
    name: "Nergiz Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 1496,
    description: "European and Georgian cuisine fusion.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 23:00",
    tips: ["Khachapuri", "Friendly staff"],
    tags: ["georgian", "european", "fusion"],
    priceLevel: "$$",
    lat: 40.3720,
    lon: 49.8520
  },
  {
    id: "araz-terrace",
    name: "Araz Terrace",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 1259,
    description: "Middle Eastern cuisine with stunning Baku Boulevard views.",
    address: "Baku Boulevard",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "10:00 - 23:00",
    tips: ["Sunset view", "Shisha"],
    tags: ["middle-eastern", "view", "outdoor"],
    priceLevel: "$$",
    lat: 40.3700,
    lon: 49.8400
  },
  {
    id: "art-club-restaurant",
    name: "Art Club Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.8,
    reviewsCount: 628,
    description: "Azerbaijani cuisine in an artistic atmosphere.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ["Art exhibitions", "Cultural events"],
    tags: ["art", "local", "atmosphere"],
    priceLevel: "$$$$",
    lat: 40.3740,
    lon: 49.8540
  },
  {
    id: "anadolu-restaurant",
    name: "Anadolu Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 945,
    description: "Turkish barbecue and kebabs.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ["Kebabs", "Turkish tea"],
    tags: ["turkish", "bbq", "kebab"],
    priceLevel: "$$",
    lat: 40.3750,
    lon: 49.8550
  },
  {
    id: "sirvansah-musey",
    name: "Sirvansah Musey",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 3.9,
    reviewsCount: 682,
    description: "Azerbaijani cuisine with vegetarian options.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 22:00",
    tips: ["Vegetarian menu", "Museum vibe"],
    tags: ["vegetarian", "local", "museum"],
    priceLevel: "$$",
    lat: 40.3760,
    lon: 49.8560
  },
  {
    id: "ateshgah-fire-temple",
    name: "Ateshgah Fire Temple",
    city: "Baku",
    citySlug: "baku",
    category: "Historic Sites",
    rating: 4.2,
    reviewsCount: 952,
    description: "Ancient Zoroastrian fire temple located near Baku, known as the 'Castle of Fire'.",
    address: "Surakhany, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ateshgah_Baku.jpg/1280px-Ateshgah_Baku.jpg",
    gallery: [],
    openingHours: "10:00 - 18:00",
    tips: ["Best visited in summer", "Guided tours available"],
    tags: ["history", "fire", "ancient"],
    priceLevel: null,
    lat: 40.4116,
    lon: 50.0094
  },
  {
    id: "fountain-square",
    name: "Fountain Square",
    city: "Baku",
    citySlug: "baku",
    category: "Attractions",
    rating: 4.4,
    reviewsCount: 1141,
    description: "Historic square in the heart of Baku, featuring numerous fountains and surrounded by architecture.",
    address: "Nizami Street, Baku",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: ["Great for people watching", "Near shopping areas"],
    tags: ["square", "fountain", "central"],
    priceLevel: null,
    lat: 40.3733,
    lon: 49.8511
  },
  {
    id: "nizami-street",
    name: "Nizami Street",
    city: "Baku",
    citySlug: "baku",
    category: "Attractions",
    rating: 4.5,
    reviewsCount: 2500,
    description: "One of the longest pedestrian streets in Europe, famous for its architecture and shopping.",
    address: "Nizami Street, Baku",
    image: "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: ["Walk the entire length", "Visit in the evening"],
    tags: ["shopping", "architecture", "walking"],
    priceLevel: null,
    lat: 40.3733,
    lon: 49.8511
  },
  {
    id: "palace-of-shirvanshahs",
    name: "Palace of Shirvanshahs",
    city: "Baku",
    citySlug: "baku",
    category: "Historic Sites",
    rating: 4.6,
    reviewsCount: 3200,
    description: "UNESCO World Heritage site, one of the pearls of Azerbaijani architecture, located in the Old City.",
    address: "Old City, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Palace_of_Shirvanshahs_Baku_2016.jpg/1280px-Palace_of_Shirvanshahs_Baku_2016.jpg",
    gallery: [],
    openingHours: "10:00 - 18:00",
    tips: ["Buy combined ticket with Maiden Tower", "Hire a guide for history"],
    tags: ["un", "history", "architecture"],
    priceLevel: null,
    lat: 40.3653,
    lon: 49.8335
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
