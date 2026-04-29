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
  priceLevel?: string;
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
    description: "Capital city on the Caspian Sea, blending ancient walled city with modern skyscrapers. The Flame Towers light up the skyline at night, while the Old City whispers stories of the Silk Road.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_modern_skyline.jpg/1280px-Baku_modern_skyline.jpg",
    bestTime: "April-June, September-October",
    distanceFromBaku: "0 km",
    transport: "Metro, bus, taxi",
    topAttractions: ["Old City (Icherisheher)", "Flame Towers", "Heydar Aliyev Center", "Baku Boulevard"],
    topRestaurants: ["Cay Bagi 145", "Malacannes", "Dolma Restaurant"],
    topHotels: ["Four Seasons Baku", "JW Marriott Absheron", "Fairmont Baku"]
  },
  {
    id: "ganja",
    name: "Ganja",
    slug: "gandja",
    country: "Azerbaijan",
    region: "Ganja-Dashkasan",
    population: "330,000",
    description: "Second-largest city, known as the 'City of Poems'. Rich cultural heritage with beautiful parks, historic mosques, and the famous Bottle House.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ganja_2016.jpg/1280px-Ganja_2016.jpg",
    bestTime: "May-September",
    distanceFromBaku: "360 km",
    transport: "Train, bus, car",
    topAttractions: ["Nizami Mausoleum", "Bottle House", "Javad Khan Street", "Ganja Gate"],
    topRestaurants: ["Mugam Club", "Ganja Restaurant", "Shah Palace"],
    topHotels: ["Ganja Hotel", "Park Inn", "Qafqaz"
  },
  {
    id: "sheki",
    name: "Sheki",
    slug: "sheki",
    country: "Azerbaijan",
    region: "Shaki-Zaqatala",
    population: "63,000",
    description: "Historic mountain town and UNESCO World Heritage site. Famous for its stunning Khan Palace, ancient caravanserais, and silk production.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
    bestTime: "May-October",
    distanceFromBaku: "300 km",
    transport: "Bus, car",
    topAttractions: ["Sheki Khan Palace", "Caravanserai", "Church of Kish", "Fortress"],
    topRestaurants: ["Sheki Halva", "Caravanserai Restaurant", "Khan Evi"],
    topHotels: ["Sheki Saray", "Karvansaray Hotel", "Issam Hotel"]
  },
  {
    id: "lankaran",
    name: "Lankaran",
    slug: "lenkoran",
    country: "Azerbaijan",
    region: "Lankaran",
    population: "85,000",
    description: "Coastal resort on the Caspian Sea with beaches and Hirkan National Park. Famous for tea plantations and mild climate.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lankaran_Coast.jpg/1280px-Lankaran_Coast.jpg",
    bestTime: "June-August",
    distanceFromBaku: "320 km",
    transport: "Bus, car",
    topAttractions: ["Hirkan National Park", "Lankaran Fortress", "Talysh Mountains", "Caspian Beaches"],
    topRestaurants: ["Lankaran Fish Restaurant", "Tea House", "Caspian Breeze"],
    topHotels: ["Lankaran Resort", "Gilan Hotel", "Modern Hotel"]
  },
  {
    id: "gabala",
    name: "Gabala",
    slug: "gabala",
    country: "Azerbaijan",
    region: "Gabala",
    population: "15,000",
    description: "Mountain resort area with ski slopes and natural beauty. Perfect for outdoor activities and family vacations.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg",
    bestTime: "Winter (skiing), Summer (hiking)",
    distanceFromBaku: "230 km",
    transport: "Bus, car",
    topAttractions: ["Tufandag Mountain Resort", "Gabala Cable Car", "Nohur Lake", "Chukhur Gabala"],
    topRestaurants: ["Gabala Restaurant", "Mountain View", "Tufandag Cafe"],
    topHotels: ["Marriott Gabala", "Chinar Hotel", "Qafqaz Resort"]
  },
  {
    id: "shamakhi",
    name: "Shamakhi",
    slug: "shamakhi",
    country: "Azerbaijan",
    region: "Shamakhi",
    population: "30,000",
    description: "One of the oldest cities in Azerbaijan, known for its historic mosques and winemaking tradition.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Juma_Mosque_Shamakhi.jpg/1280px-Juma_Mosque_Shamakhi.jpg",
    bestTime: "May-October",
    distanceFromBaku: "120 km",
    transport: "Bus, car",
    topAttractions: ["Juma Mosque", "Shamakhi Astrophysical Observatory", "Yeddi Gumbaz"],
    topRestaurants: ["Shamakhi Plov", "Goychay Restaurant"],
    topHotels: ["Shamakhi Hotel", "Sirvan Hotel"]
  },
  {
    id: "quba",
    name: "Quba",
    slug: "quba",
    country: "Azerbaijan",
    region: "Quba",
    population: "20,000",
    description: "Known for the Red Settlement and apple orchards. A gateway to the Caucasus Mountains.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Quba_2021.jpg/1280px-Quba_2021.jpg",
    bestTime: "September-October (Apple Festival)",
    distanceFromBaku: "170 km",
    transport: "Bus, car",
    topAttractions: ["Red Settlement", "Quba Mosque", "Afurja Waterfall"],
    topRestaurants: ["Quba House", "Mountain View Cafe"],
    topHotels: ["Quba Hotel", "Caucasus Resort"]
  },
  {
    id: "naftalan",
    name: "Naftalan",
    slug: "naftalan",
    country: "Azerbaijan",
    region: "Goranboy",
    population: "10,000",
    description: "Famous spa resort known for its unique crude oil baths. A destination for health tourism.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Naftalan_Sanatorium.jpg/1280px-Naftalan_Sanatorium.jpg",
    bestTime: "Year-round",
    distanceFromBaku: "350 km",
    transport: "Bus, car",
    topAttractions: ["Oil Bath Sanatoriums", "Naftalan Museum"],
    topRestaurants: ["Resort Dining", "Local Cafe"],
    topHotels: ["Chinar Hotel & Spa", "Naftalan Resort", "Goranboy Hotel"]
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
    description: "Medieval walled city, UNESCO World Heritage site. Contains the Shirvanshah Palace and Maiden Tower. A maze of narrow streets, ancient mosques, caravanserais, and baths.",
    address: "Icherisheher, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b5/6c/29/old-city-baku.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b5/6c/29/old-city-baku.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Icherisheher_Baku_2016.jpg/1280px-Icherisheher_Baku_2016.jpg"
    ],
    openingHours: "Always open",
    tips: [
      "Visit early morning to avoid crowds",
      "Wear comfortable shoes for cobblestones",
      "Don't miss the tea houses in hidden courtyards"
    ],
    tags: ["history", "un", "architecture", "walking"],
    priceLevel: null
  },
  {
    id: "flame-towers-baku",
    name: "Flame Towers",
    city: "Baku",
    citySlug: "baku",
    category: "Architectural Buildings",
    rating: 4.6,
    reviewsCount: 1757,
    description: "Three skyscrapers 190m high, the symbol of modern Baku. At night, they light up with animations of fire, making the skyline unforgettable.",
    address: "Mehdi Hüseyn 1, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9b/b1/54/flame-towers.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9b/b1/54/flame-towers.jpg"
    ],
    openingHours: "Always visible",
    tips: [
      "Best viewed at night from Highland Park",
      "Go to Highland Park for best angle",
      "The Fire Museum is located inside one tower"
    ],
    tags: ["modern", "architecture", "nightlife", "landmark"],
    priceLevel: null
  },
  {
    id: "heydar-aliyev-center",
    name: "Heydar Aliyev Center",
    city: "Baku",
    citySlug: "baku",
    category: "Museums",
    rating: 4.7,
    reviewsCount: 2556,
    description: "Masterpiece by Zaha Hadid. Wave-like building without a single straight line. One of the best examples of modern architecture in the world.",
    address: "Heydar Aliyev Ave, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/83/1a/58/heydar-aliyev-center.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/83/1a/58/heydar-aliyev-center.jpg"
    ],
    openingHours: "11:00 - 18:00",
    tips: [
      "Book tickets online to avoid lines",
      "Visit the exhibitions inside",
      "The architecture is as impressive as the exhibits"
    ],
    tags: ["museum", "modern", "architecture", "art"],
    priceLevel: "$$"
  },
  {
    id: "baku-boulevard",
    name: "Baku Boulevard",
    city: "Baku",
    citySlug: "baku",
    category: "Parks & Nature",
    rating: 4.6,
    reviewsCount: 2361,
    description: "Scenic promenade along the Caspian Sea. Perfect for walking, cycling, and enjoying sea views. Includes parks, fountains, and cafes.",
    address: "Baku Boulevard, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ba/98/8c/baku-boulevard.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ba/98/8c/baku-boulevard.jpg"
    ],
    openingHours: "Always open",
    tips: [
      "Rent a bike in summer",
      "Visit the Carpet Museum along the boulevard",
      "Best sunset views near the Flag Square"
    ],
    tags: ["nature", "walking", "sea", "family"],
    priceLevel: null
  },
  {
    id: "maiden-tower-baku",
    name: "Maiden Tower (Giz Galasi)",
    city: "Baku",
    citySlug: "baku",
    category: "Towers & Observation Decks",
    rating: 4.3,
    reviewsCount: 1874,
    description: "12th-century tower, one of the most iconic symbols of Baku. Offers panoramic views of the Old City and the Caspian Sea.",
    address: "Icherisheher, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9f/bf/37/maiden-s-tower.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9f/bf/37/maiden-s-tower.jpg"
    ],
    openingHours: "10:00 - 18:00",
    tips: [
      "Climb to the top for great photos",
      "Museum inside explains the tower's history",
      "Part of the Old City walking tour"
    ],
    tags: ["history", "tower", "view", "un"],
    priceLevel: "$"
  },
  {
    id: "gobustan-rock-art",
    name: "Gobustan Rock Art",
    city: "Baku",
    citySlug: "baku",
    category: "Ancient Ruins",
    rating: 4.5,
    reviewsCount: 1217,
    description: "UNESCO World Heritage site with over 6,000 rock carvings dating back 12,000 years. Shows prehistoric life in the Caucasus.",
    address: "Gobustan, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/58/28/e6/caption.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/58/28/e6/caption.jpg"
    ],
    openingHours: "09:00 - 18:00",
    tips: [
      "Take a guided tour to understand the carvings",
      "Visit the museum first for context",
      "Wear sunscreen - little shade"
    ],
    tags: ["history", "un", "nature", "archaeology"],
    priceLevel: "$$"
  },
  {
    id: "mud-volcanoes-gobustan",
    name: "Mud Volcanoes",
    city: "Baku",
    citySlug: "baku",
    category: "Nature & Parks",
    rating: 4.4,
    reviewsCount: 258,
    description: "Unique natural phenomenon near Gobustan. Bubbling mud pools and small volcanic cones. Safe to walk on and touch.",
    address: "Gobustan, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/48/06/7d/mud-volcanoes.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/48/06/7d/mud-volcanoes.jpg"
    ],
    openingHours: "Always accessible",
    tips: [
      "Best visited with a tour",
      "Wear old shoes - mud can stain",
      "Combine with Gobustan Rock Art visit"
    ],
    tags: ["nature", "unique", "adventure"],
    priceLevel: null
  },
  {
    id: "sheki-khan-palace",
    name: "Sheki Khan Palace",
    city: "Sheki",
    citySlug: "sheki",
    category: "Historic Sites",
    rating: 4.8,
    reviewsCount: 892,
    description: "18th-century masterpiece of Azerbaijani architecture. Famous for its stained glass windows (shebeke) and intricate frescoes.",
    address: "Sheki Old City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg"
    ],
    openingHours: "10:00 - 18:00",
    tips: [
      "Take a guided tour to understand the symbolism",
      "No photography inside (check rules)",
      "Visit the garden for best photos"
    ],
    tags: ["history", "architecture", "un", "culture"],
    priceLevel: "$$"
  },
  {
    id: "tufandag-resort",
    name: "Tufandag Mountain Resort",
    city: "Gabala",
    citySlug: "gabala",
    category: "Ski & Snowboard",
    rating: 4.6,
    reviewsCount: 1054,
    description: "Year-round mountain resort with ski slopes in winter and hiking/biking in summer. Cable car offers stunning views.",
    address: "Gabala, Azerbaijan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg"
    ],
    openingHours: "09:00 - 17:00 (seasonal)",
    tips: [
      "Rent equipment on-site",
      "Cafe at the top has great views",
      "Summer activities available too"
    ],
    tags: ["ski", "nature", "family", "adventure"],
    priceLevel: "$$"
  },
  {
    id: "hirkan-national-park",
    name: "Hirkan National Park",
    city: "Lankaran",
    citySlug: "lenkoran",
    category: "National Parks",
    rating: 4.7,
    reviewsCount: 432,
    description: "UNESCO Biosphere Reserve. Ancient subtropical forest with unique flora and fauna. Perfect for hiking and nature lovers.",
    address: "Lankaran, Azerbaijan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hirkan_National_Park.jpg/1280px-Hirkan_National_Park.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hirkan_National_Park.jpg/1280px-Hirkan_National_Park.jpg"
    ],
    openingHours: "08:00 - 18:00",
    tips: [
      "Hire a guide for best experience",
      "Bring water and snacks",
      "Best visited in spring or autumn"
    ],
    tags: ["nature", "hiking", "un", "wildlife"],
    priceLevel: "$"
  },
  {
    id: "cay-bagi-145",
    name: "Cay Bagi 145 Tea Garden",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.8,
    reviewsCount: 1867,
    description: "Charming tea garden serving traditional Azerbaijani tea and sweets. Relaxed atmosphere with outdoor seating.",
    address: "28 May Street, Baku",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/45/67/35/tea-garden.jpg",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/45/67/35/tea-garden.jpg"
    ],
    openingHours: "10:00 - 23:00",
    tips: [
      "Try the shekerbura and pakhlava",
      "Best in the evening",
      "Outdoor seating is limited"
    ],
    tags: ["tea", "sweets", "traditional", "outdoor"],
    priceLevel: "$$"
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