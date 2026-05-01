// Server-side content data

export const getCitiesSync = () => {
  return [
    {
      "id": "baku",
      "name": "Baku",
      "slug": "baku",
      "country": "Azerbaijan",
      "region": "Absheron Peninsula",
      "population": "2.3 million",
      "description": "Baku, the vibrant capital of Azerbaijan, sits on the edge of the Caspian Sea.",
      "heroImage": "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
      "bestTime": "April-June, September-October",
      "distanceFromBaku": "0 km",
      "transport": "Metro, bus, taxi, BakuCard",
      "topAttractions": ["Old City (Icherisheher)", "Flame Towers", "Heydar Aliyev Center", "Baku Boulevard"],
      "topRestaurants": ["Cay Bagi 145", "Dolma Restaurant", "Malacannes 145"],
      "topHotels": ["Four Seasons Baku", "JW Marriott Absheron Baku", "Fairmont Baku"],
      "hiddenGems": ["Yanar Dag", "Ateshgah Fire Temple", "Baku Ferris Wheel"],
      "mistakesToAvoid": ["Don't exchange money at the airport", "Avoid rush hour metro"]
    },
    {
      "id": "ganja",
      "name": "Ganja",
      "slug": "ganja",
      "country": "Azerbaijan",
      "region": "Ganja-Dashkasan",
      "population": "330,000",
      "description": "Ganja, Azerbaijan's second-largest city, is affectionately known as the 'City of Poems' for its literary heritage.",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ganja_2016.jpg/1280px-Ganja_2016.jpg",
      "bestTime": "May-September",
      "distanceFromBaku": "360 km",
      "transport": "Train, bus, car",
      "topAttractions": ["Nizami Mausoleum", "Juma Mosque", "Nizami Park", "Heydar Aliyev Avenue"],
      "topRestaurants": ["Mugam Club", "Ganja Restaurant"],
      "topHotels": ["Ganja Hotel", "Park Chalet Ganja"],
      "hiddenGems": ["Goygol Lake", "Ganja Fortress"],
      "mistakesToAvoid": ["Don't miss Nizami Mausoleum"]
    },
    {
      "id": "sheki",
      "name": "Sheki",
      "slug": "sheki",
      "country": "Azerbaijan",
      "region": "Shaki-Zaqatala",
      "population": "65,000",
      "description": "Sheki, nestled in the foothills of the Greater Caucasus Mountains, is one of Azerbaijan's most beautiful and historic cities.",
      "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
      "bestTime": "May-September",
      "distanceFromBaku": "300 km",
      "transport": "Bus, car",
      "topAttractions": ["Sheki Khan Palace", "Upper Caravanserai", "Sheki Fortress", "Kish Albanian Church"],
      "topRestaurants": ["Sheki Saray", "Khan's Garden"],
      "topHotels": ["Sheki Saray Hotel", "Issam Hotel"],
      "hiddenGems": ["Sheki Glass Factory", "Local silk workshops"],
      "mistakesToAvoid": ["Don't miss the stained glass windows"]
    },
    {
      "id": "absheron",
      "name": "Absheron",
      "slug": "absheron",
      "country": "Azerbaijan",
      "region": "Absheron Peninsula",
      "population": "200,000",
      "description": "Absheron Peninsula is home to ancient fire temples, oil fields, and unique natural landmarks.",
      "heroImage": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1280",
      "bestTime": "April-October",
      "distanceFromBaku": "30 km",
      "transport": "Bus, taxi",
      "topAttractions": ["Ateshgah Fire Temple", "Yanar Dag", "Gobustan National Park", "Mud Volcanoes"],
      "topRestaurants": ["Absheron Restaurant", "Local tea houses"],
      "topHotels": ["Absheron Hotel", "Gobustan Resort"],
      "hiddenGems": ["Ateshgah village", "Oil fields tour"],
      "mistakesToAvoid": ["Don't visit in winter", "Wear comfortable shoes"]
    },
    {
      "id": "naftalan",
      "name": "Naftalan",
      "slug": "naftalan",
      "country": "Azerbaijan",
      "region": "Ganja-Dashkasan",
      "population": "10,000",
      "description": "Naftalan is world-famous for its unique crude oil baths.",
      "heroImage": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1280",
      "bestTime": "Year-round",
      "distanceFromBaku": "380 km",
      "transport": "Train, car",
      "topAttractions": ["Naftalan Oil Baths", "Health resorts", "Treatment centers"],
      "topRestaurants": ["Resort restaurants"],
      "topHotels": ["Naftalan Resort Hotel", "Chinar Hotel"],
      "hiddenGems": ["Local treatment methods"],
      "mistakesToAvoid": ["Don't book without doctor consultation"]
    },
    {
      "id": "shamakhi",
      "name": "Shamakhi",
      "slug": "shamakhi",
      "country": "Azerbaijan",
      "region": "Shamakhi",
      "population": "30,000",
      "description": "Shamakhi is one of the oldest cities in Azerbaijan, known for its historic mosques, wineries, and mountain scenery.",
      "heroImage": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1280",
      "bestTime": "May-October",
      "distanceFromBaku": "120 km",
      "transport": "Bus, car",
      "topAttractions": ["Juma Mosque", "Shamakhi Astrophysical Observatory", "Local wineries"],
      "topRestaurants": ["Shamakhi Restaurant", "Wine cellars"],
      "topHotels": ["Shamakhi Hotel", "Country clubs"],
      "hiddenGems": ["Mountain villages", "Ancient observatory"],
      "mistakesToAvoid": ["Don't miss sunset at the mosque"]
    },
    {
      "id": "ismayilli",
      "name": "Ismayilli",
      "slug": "ismayilli",
      "country": "Azerbaijan",
      "region": "Ismayilli",
      "population": "15,000",
      "description": "Ismayilli region is known for its beautiful mountain landscapes, wineries, and traditional villages.",
      "heroImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280",
      "bestTime": "May-September",
      "distanceFromBaku": "200 km",
      "transport": "Bus, car",
      "topAttractions": ["Ismayilli Mountains", "Local wineries", "Traditional villages"],
      "topRestaurants": ["Local cafes", "Wine cellars"],
      "topHotels": ["Mountain resorts", "Guest houses"],
      "hiddenGems": ["Hiking trails", "Local crafts"],
      "mistakesToAvoid": ["Bring warm clothes for mountains"]
    },
    {
      "id": "khizi",
      "name": "Khizi",
      "slug": "khizi",
      "country": "Azerbaijan",
      "region": "Khizi",
      "population": "5,000",
      "description": "Khizi is famous for its Candy Cane Mountains - colorful striped rock formations.",
      "heroImage": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280",
      "bestTime": "April-October",
      "distanceFromBaku": "120 km",
      "transport": "Car",
      "topAttractions": ["Candy Cane Mountains", "Photography spots", "Hiking trails"],
      "topRestaurants": ["Local cafes"],
      "topHotels": ["Guest houses"],
      "hiddenGems": ["Hidden valleys", "Sunset viewpoints"],
      "mistakesToAvoid": ["Don't come at noon - too hot"]
    },
    {
      "id": "goygol",
      "name": "Goygol",
      "slug": "goygol",
      "country": "Azerbaijan",
      "region": "Ganja-Dashkasan",
      "population": "2,000",
      "description": "Goygol Lake is one of the most beautiful lakes in Azerbaijan.",
      "heroImage": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280",
      "bestTime": "May-September",
      "distanceFromBaku": "400 km",
      "transport": "Car, bus",
      "topAttractions": ["Goygol Lake", "Mountain views", "Hiking"],
      "topRestaurants": ["Local cafes"],
      "topHotels": ["Guest houses"],
      "hiddenGems": ["Forest trails", "Wildlife"],
      "mistakesToAvoid": ["Bring insect repellent"]
    },
    {
      "id": "mingachevir",
      "name": "Mingachevir",
      "slug": "mingachevir",
      "country": "Azerbaijan",
      "region": "Mingachevir",
      "population": "100,000",
      "description": "Mingachevir is known for its reservoir and hydroelectric power station.",
      "heroImage": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280",
      "bestTime": "May-September",
      "distanceFromBaku": "300 km",
      "transport": "Bus, car",
      "topAttractions": ["Mingachevir Reservoir", "Hydroelectric Station"],
      "topRestaurants": ["Local restaurants"],
      "topHotels": ["Mingachevir Hotel"],
      "hiddenGems": ["Fishing spots", "Water sports"],
      "mistakesToAvoid": ["Check water levels before visiting"]
    }
  ];
};

export const getCities = () => {
  return getCitiesSync();
};

export const getCityBySlug = (slug: string) => {
  return getCitiesSync().find((city) => city.slug === slug);
};

export const getToursSync = () => {
  return {
    'city-tours': [
      {
        "id": "baku-city-tour",
        "name": "Baku City Tour",
        "slug": "baku-city-tour",
        "duration": "8 hours",
        "price": "25 AZN",
        "category": "City Tours",
        "program": ["09:00 - Hotel pickup", "09:30 - Old City", "11:00 - Maiden Tower", "12:00 - Lunch", "13:00 - Flame Towers", "14:00 - Heydar Aliyev Center", "15:30 - Baku Boulevard", "17:00 - Hotel drop-off"],
        "includes": ["Professional guide", "Transportation", "Entrance fees", "Hotel pickup/drop-off"],
        "description": "Experience the perfect introduction to Baku with our comprehensive full-day city tour.",
        "image": "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=800"
      }
    ],
    'day-trips': [
      {
        "id": "gobustan-mud-volcanoes",
        "name": "Gobustan & Mud Volcanoes Day Trip",
        "slug": "gobustan-mud-volcanoes",
        "duration": "10 hours",
        "price": "40 AZN",
        "category": "Day Trips",
        "program": ["08:00 - Hotel pickup", "09:30 - Gobustan National Park", "12:00 - Rock carvings", "13:00 - Lunch", "14:00 - Mud Volcanoes", "16:00 - Ateshgah Fire Temple", "18:00 - Hotel drop-off"],
        "includes": ["Professional guide", "Transportation", "Entrance fees", "Lunch"],
        "description": "Journey to one of Azerbaijan's most extraordinary UNESCO World Heritage sites.",
        "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
      }
    ],
    'multi-day': [
      {
        "id": "sheki-historical-2-days",
        "name": "Sheki Historical Tour (2 Days)",
        "slug": "sheki-historical-2-days",
        "duration": "2 days / 1 night",
        "price": "120 AZN",
        "category": "Multi-day",
        "program": ["Day 1: Sheki arrival, Khan Palace, Caravanserai, dinner", "Day 2: Local workshops, Kish Church, return to Baku"],
        "includes": ["Professional guide", "Transportation", "Accommodation", "Meals", "Entrance fees"],
        "description": "Immersive two-day journey to Sheki's historic treasures.",
        "image": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800"
      }
    ],
    'adventure': [
      {
        "id": "gabala-mountain-adventure",
        "name": "Gabala Mountain Adventure",
        "slug": "gabala-mountain-adventure",
        "duration": "8-9 hours",
        "price": "50 AZN",
        "category": "Adventure",
        "program": ["08:00 - Hotel pickup", "11:00 - Gabala arrival", "11:30 - Cable car", "13:00 - Hiking", "14:00 - Lunch", "15:00 - Nohur Lake", "17:00 - Return"],
        "includes": ["Professional guide", "Transportation", "Cable car ticket", "Lunch"],
        "description": "Escape to Azerbaijan's premier mountain resort destination.",
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
      }
    ],
    'food-wine': [
      {
        "id": "food-culture-tour",
        "name": "Food & Culture Tour Baku",
        "slug": "food-culture-tour",
        "duration": "5 hours",
        "price": "35 AZN",
        "category": "Food & Wine",
        "program": ["10:00 - Taza Bazaar", "11:30 - Tea house", "13:00 - Cooking class", "15:00 - Old City walk"],
        "includes": ["Professional guide", "Tasting", "Cooking class"],
        "description": "Embark on a culinary journey through Baku's vibrant food scene.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
      }
    ]
  };
};

export const getTours = () => {
  return getToursSync();
};

export const getTransfers = () => {
  return [
    {
      "id": "economy",
      "name": "Economy",
      "description": "Standard sedan for budget-conscious travelers",
      "capacity": "1-3 passengers",
      "priceFrom": "15 AZN",
      "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "includes": ["Air conditioning", "Professional driver", "Meet & greet"]
    },
    {
      "id": "comfort",
      "name": "Comfort",
      "description": "Premium sedan for comfortable travel",
      "capacity": "1-3 passengers",
      "priceFrom": "25 AZN",
      "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
      "includes": ["Air conditioning", "Professional driver", "Meet & greet", "Water", "Phone charger"]
    },
    {
      "id": "business",
      "name": "Business",
      "description": "Business class sedan for executives",
      "capacity": "1-3 passengers",
      "priceFrom": "40 AZN",
      "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "includes": ["Air conditioning", "Professional driver", "Meet & greet", "Water", "WiFi", "Newspaper"]
    },
    {
      "id": "vip",
      "name": "VIP",
      "description": "Representative class for VIP guests",
      "capacity": "1-3 passengers",
      "priceFrom": "60 AZN",
      "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      "includes": ["Luxury vehicle", "English-speaking driver", "Champagne", "WiFi", "Personal assistant"]
    },
    {
      "id": "group",
      "name": "Group Transport",
      "description": "Minivan or bus for groups",
      "capacity": "Up to 20 passengers",
      "priceFrom": "50 AZN",
      "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      "includes": ["Air conditioning", "Professional driver", "Luggage space"]
    }
  ];
};

export const searchContent = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  const cities = getCitiesSync();
  
  const cityResults = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(lowercaseQuery) ||
      city.description.toLowerCase().includes(lowercaseQuery)
  );
  
  return {
    cities: cityResults,
  };
};


// Blog content
export const blogPosts = [
  {
    slug: "best-time-to-visit-azerbaijan",
    title: "Best Time to Visit Azerbaijan: Complete Seasonal Guide",
    author: "Local Travel Expert",
    excerpt: "When is the best time to visit Azerbaijan? This question is one of the most common among travelers...",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Travel Tips",
    content: `When is the best time to visit Azerbaijan? This question is one of the most common among travelers planning a trip to this fascinating country at the crossroads of Europe and Asia.

The short answer: **April to June** and **September to November** are the best months to visit Azerbaijan.

## Spring in Azerbaijan (March-May)

Spring is arguably the best time to visit Azerbaijan. The weather is mild and pleasant, with temperatures ranging from 15-25°C (59-77°F).

**What to see in spring:**
- Cherry and apricot blossoms in Shamakhi
- Valley of the Fire in Gobustan
- Old City of Baku without summer crowds

## Summer in Azerbaijan (June-August)

Summer can be hot, especially in Baku and lowland areas. Temperatures reach 30-35°C (86-95°F) in July-August.

**Best for:**
- Beach resorts on the Caspian Sea (July-August)
- Mountain resorts in Gabala and Gusar
- Nightlife in Baku

## Autumn in Azerbaijan (September-November)

Autumn is another excellent time to visit. Temperatures cool down to 15-25°C, and the landscape transforms with golden colors.

**Highlights:**
- Grape harvest in Shamakhi and Ismayilli (September-October)
- Beautiful autumn foliage in the Caucasus Mountains
- Ideal conditions for hiking

## Winter in Azerbaijan (December-February)

Winter is mild in Baku (5-10°C) but cold in the mountains. Perfect for ski resorts.

**Ski resorts:**
- Shahdag Mountain Resort
- Tufandag Mountain Resort (Gabala)
`
  },
  {
    slug: "7-day-itinerary-azerbaijan",
    title: "Perfect 7-Day Azerbaijan Itinerary: From Baku to the Mountains",
    author: "Local Travel Expert",
    excerpt: "Planning a week in Azerbaijan? This comprehensive itinerary covers the best of the country...",
    date: "January 10, 2025",
    readTime: "12 min read",
    category: "Itineraries",
    content: `Planning a week in Azerbaijan? This comprehensive 7-day itinerary covers the best of the country, from the modern capital Baku to ancient villages in the Caucasus Mountains.

## Day 1: Arrival in Baku

**Morning:**
- Arrive at Heydar Aliyev International Airport
- Transfer to your hotel in the city center

**Afternoon:**
- Visit **Highland Park** for panoramic views
- Walk along **Baku Boulevard**

**Evening:**
- Dinner at **Cay Bagi 145**
- Watch the **Flame Towers** light show

## Day 2: Baku Old City

**Morning:**
- Explore **Icherisheher** (Old City)
  - Visit **Maiden Tower**
  - Explore **Palace of the Shirvanshahs**

**Afternoon:**
- Visit **Heydar Aliyev Center**
- Walk through **Nizami Street**

## Day 3: Gobustan & Mud Volcanoes

**Morning:**
- Depart for **Gobustan National Park**
- Visit the **Rock Art Museum**

**Afternoon:**
- Drive to **Mud Volcanoes**
- Experience the unique landscape
- Return to Baku

## Day 4: Sheki

**Morning:**
- Early departure for Sheki

**Afternoon:**
- Visit **Sheki Khan Palace**
- Explore the **Upper Caravanserai**

**Evening:**
- Overnight in Sheki

## Day 5: Sheki Surroundings

**Morning:**
- Visit **Kish Albanian Church**
- Explore local **silk workshops**

**Afternoon:**
- Drive to **Ilisu Village**
- Enjoy mountain scenery

## Day 6: Gabala

**Morning:**
- Depart for Gabala
- Visit **Nohur Lake**

**Afternoon:**
- Ride the **cable car** to the mountain peak

## Day 7: Return to Baku

**Morning:**
- Depart for Baku

**Afternoon:**
- Last-minute shopping
- Visit **Taza Bazaar**
`
  },
  {
    slug: "top-10-things-to-do-baku",
    title: "Top 10 Things to Do in Baku: Ultimate Guide",
    author: "Local Travel Expert",
    excerpt: "Baku offers a unique blend of ancient history and ultra-modern architecture...",
    date: "January 5, 2025",
    readTime: "10 min read",
    category: "City Guides",
    content: `Baku, the vibrant capital of Azerbaijan, offers a unique blend of ancient history and ultra-modern architecture.

## 1. Explore the Old City (Icherisheher)

The UNESCO World Heritage site is the heart of Baku.

- **Maiden Tower** - 12th century tower
- **Palace of the Shirvanshahs** - 15th century complex

## 2. Watch the Flame Towers

Baku's iconic trio of flame-shaped skyscrapers.

- **Best viewing spots:** Highland Park
- **Night show:** Every 15 minutes

## 3. Visit Heydar Aliyev Center

Architectural masterpiece by Zaha Hadid.

- **Highlights:** Flowing curves, no straight lines
- **Inside:** Cultural center

## 4. Stroll Along Baku Boulevard

16 km of Caspian Sea promenade.

- **Rent a bike**
- **Visit Baku Eye** Ferris wheel

## 5. Experience Azerbaijani Cuisine

Must-try dishes:
- **Plov** - saffron rice with meat
- **Dolma** - stuffed vegetables
- **Qutab** - thin stuffed flatbread
`
  }
];

export const getBlogPosts = () => blogPosts;
export const getBlogPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
