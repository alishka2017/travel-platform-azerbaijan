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
    description: "Baku, the vibrant capital of Azerbaijan, sits on the edge of the Caspian Sea. This stunning city masterfully blends ancient history with futuristic architecture, from the UNESCO-listed Old City (Icherisheher) with its medieval walls and Maiden Tower to the iconic Flame Towers that illuminate the skyline. Explore the bustling Baku Boulevard, admire the Heydar Aliyev Center's flowing design, and experience the city's rich cultural heritage that reflects its position at the crossroads of Europe and Asia.",
    heroImage: "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
    bestTime: "April-June, September-October",
    distanceFromBaku: "0 km",
    transport: "Metro, bus, taxi, BakuCard",
    topAttractions: ["Old City (Icherisheher)", "Flame Towers", "Heydar Aliyev Center", "Baku Boulevard"],
    topRestaurants: ["Cay Bagi 145", "Dolma Restaurant", "Malacannes 145"],
    topHotels: ["Four Seasons Baku", "JW Marriott Absheron Baku", "Fairmont Baku"]
  },
  {
    id: "ganja",
    name: "Ganja",
    slug: "ganja",
    country: "Azerbaijan",
    region: "Ganja-Dashkasan",
    population: "330,000",
    description: "Ganja, Azerbaijan's second-largest city, is affectionately known as the 'City of Poems' for its literary heritage. This historic city is home to the stunning Nizami Mausoleum, dedicated to the great poet Nizami Ganjavi, and offers a more relaxed pace than bustling Baku. Visitors can explore the beautiful Nizami Park, visit the historic Juma Mosque, and discover the city's role as a vital stop on the ancient Silk Road.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ganja_2016.jpg/1280px-Ganja_2016.jpg",
    bestTime: "May-September",
    distanceFromBaku: "360 km",
    transport: "Train, bus, car",
    topAttractions: ["Nizami Mausoleum", "Juma Mosque", "Nizami Park", "Heydar Aliyev Avenue"],
    topRestaurants: ["Mugam Club", "Ganja Restaurant"],
    topHotels: ["Ganja Hotel", "Park Chalet Ganja"]
  },
  {
    id: "qusar",
    name: "Qusar",
    slug: "qusar",
    country: "Azerbaijan",
    region: "Qusar District",
    population: "20,000",
    description: "Qusar serves as the gateway to Azerbaijan's premier mountain resort destination. This charming town provides access to the world-class Shahdag Mountain Resort, offering exceptional skiing in winter and hiking in summer. The surrounding region features stunning natural landscapes, including the breathtaking Laza Waterfalls and traditional Lezgin villages that preserve centuries-old mountain culture and hospitality.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg",
    bestTime: "December-March (skiing), June-August (hiking)",
    distanceFromBaku: "180 km",
    transport: "Car, bus",
    topAttractions: ["Shahdag Mountain Resort", "Laza Waterfalls", "Quba-Khinalig road", "Gusar River Valley"],
    topRestaurants: ["Mountain View Restaurant", "Shahdag Hotel & Spa dining"],
    topHotels: ["Shahdag Hotel & Spa", "Gafur Valley Resort"]
  },
  {
    id: "sheki",
    name: "Sheki",
    slug: "sheki",
    country: "Azerbaijan",
    region: "Shaki-Zaqatala",
    population: "65,000",
    description: "Sheki, nestled in the foothills of the Greater Caucasus Mountains, is one of Azerbaijan\'s most beautiful and historic cities. A UNESCO World Heritage Site, the stunning Sheki Khan Palace showcases exquisite stained glass work and Persian-influenced architecture. The city is renowned for its traditional silk production, local crafts, and the famous Sheki halva. The charming Old Town with its historic caravanserais and artisan workshops offers a glimpse into Silk Road history. Sheki is also known for its mineral water springs and mild climate.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
    bestTime: "May-September",
    distanceFromBaku: "300 km",
    transport: "Bus, car",
    topAttractions: ["Sheki Khan Palace", "Upper Caravanserai", "Sheki Fortress", "Kish Albanian Church"],
    topRestaurants: ["Sheki Saray", "Piti House", "Sheki Halva Shop"],
    topHotels: ["Sheki Karvansaray Hotel", "Issam Hotel Sheki"]
  },
  {
    id: "gabala",
    name: "Gabala",
    slug: "gabala",
    country: "Azerbaijan",
    region: "Gabala District",
    population: "15,000",
    description: "Gabala is Azerbaijan's premier mountain resort destination, offering year-round activities in a stunning natural setting. The magnificent Tufandag Mountain Resort features modern cable cars, ski slopes, and hiking trails with panoramic views of the Caucasus Mountains. The peaceful Nohur Lake and surrounding forests provide opportunities for outdoor adventures, while the ancient Chukhur Gabala archaeological site reveals the region's 2,500-year history. Gabala is also famous for its entertainment park \"Gabaland\" and the city's philharmonic orchestra.",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1280&auto=format&fit=crop",
    bestTime: "December-March (skiing), June-August (hiking)",
    distanceFromBaku: "220 km",
    transport: "Bus, car",
    topAttractions: ["Tufandag Mountain Resort", "Nohur Lake", "Gabala Archaeological Center", "Cable Car Station"],
    topRestaurants: ["Gabala Restaurant", "Mountain View Restaurant", "Tufandag Sky Restaurant"],
    topHotels: ["Rixos Gabala", "Qafqaz Resort", "Flamingo Mountain Resort"]
  },
  {
    id: "lankaran",
    name: "Lankaran",
    slug: "lankaran",
    country: "Azerbaijan",
    region: "Lankaran District",
    population: "85,000",
    description: "Lankaran, located on the shores of the Caspian Sea in Azerbaijan's subtropical south, offers a unique blend of beach relaxation and lush natural beauty. This coastal city is famous for its tropical climate, tea plantations, and the pristine Hirkan National Forest, a UNESCO World Heritage Site. Visitors can enjoy fresh Caspian seafood, explore the historic Lankaran Fortress, and experience the distinct culture of Azerbaijan's southern region.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lankaran_2021.jpg/1280px-Lankaran_2021.jpg",
    bestTime: "May-September",
    distanceFromBaku: "220 km",
    transport: "Bus, car",
    topAttractions: ["Hirkan National Forest", "Lankaran Fortress", "Girdiman River", "Tea Plantations"],
    topRestaurants: ["Lankaran Tea House", "Caspian Fish Restaurant", "Lankaran Bazaar"],
    topHotels: ["Lankaran Resort & Spa", "Romantic Hotel Lankaran"]
  },
  {
    id: "guba",
    name: "Guba",
    slug: "guba",
    country: "Azerbaijan",
    region: "Guba-Khachmaz",
    population: "40,000",
    description: "Guba, located in the foothills of the Greater Caucasus Mountains, is a gateway to Azerbaijan's most stunning natural landscapes and ancient mountain villages. The region is famous for the breathtaking Khinalig village, one of the highest permanently inhabited settlements in Europe, and the magnificent Guba Waterfall. Visitors can explore traditional carpet weaving workshops, taste authentic mountain cuisine, and experience the unique culture of the Lezgin and other ethnic communities that have preserved their traditions for centuries.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Khinalig_village_Guba_Azerbaijan.jpg/1280px-Khinalig_village_Guba_Azerbaijan.jpg",
    bestTime: "May-September",
    distanceFromBaku: "170 km",
    transport: "Bus, car",
    topAttractions: ["Khinalig Village", "Guba Waterfall", "Afurdzhi Waterfall", "Quba Mosque"],
    topRestaurants: ["Mountain View Restaurant", "Guba Bazaar", "Khinalig Guesthouse"],
    topHotels: ["Guba Hotel", "Khinalig Guesthouse", "Quba Resort"]
  },
  {
    id: "absheron",
    name: "Absheron",
    slug: "absheron",
    country: "Azerbaijan",
    region: "Absheron Peninsula",
    population: "500,000",
    description: "The Absheron Peninsula is home to Baku's most famous landmarks, including the Ateshgah Fire Temple and Yanar Dag. It's a must-visit for history and nature lovers.",
    heroImage: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d7?q=80&w=1280&auto=format&fit=crop",
    bestTime: "April-June, September-October",
    distanceFromBaku: "30 km",
    transport: "Bus, Taxi (30 min)",
    topAttractions: ["Ateshgah Fire Temple", "Yanar Dag", "Bibi-Heybat Mosque"],
    topRestaurants: ["Absheron Restaurant", "Sea Breeze Cafe"],
    topHotels: ["Four Seasons Baku", "JW Marriott Absheron Baku"]
  },
  {
    id: "naftalan",
    name: "Naftalan",
    slug: "naftalan",
    country: "Azerbaijan",
    region: "Ganja-Dashkash",
    population: "20,000",
    description: "Naftalan is world-famous for its unique crude oil baths, a unique form of medical tourism. The city has specialized sanatoriums treating various conditions.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1280&auto=format&fit=crop",
    bestTime: "Year-round (Health Resorts)",
    distanceFromBaku: "340 km",
    transport: "Train, Bus (4 hours)",
    topAttractions: ["Naftalan Oil Baths", "Historic Sanatoriums"],
    topRestaurants: ["Hotel Restaurant", "Local Cafes"],
    topHotels: ["Chinar Hotel & Spa", "Ganja Naftalan Hotel"]
  },
  {
    id: "shamakhi",
    name: "Shamakhi",
    slug: "shamakhi",
    country: "Azerbaijan",
    region: "Shamakhi",
    population: "100,000",
    description: "Shamakhi is one of the ancient capitals of Azerbaijan, famous for the Juma Mosque (one of the oldest in the Caucasus), historic observatory, and winemaking traditions.",
    heroImage: "https://images.unsplash.com/photo-1579033068971-36b71c8e35f7?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-June",
    distanceFromBaku: "120 km",
    transport: "Bus (2 hours)",
    topAttractions: ["Juma Mosque", "Shamakhi Astrophysical Observatory", "Yeddi Gumbaz Mausoleum"],
    topRestaurants: ["Shamakhi Restaurant", "Local Tea Houses"],
    topHotels: ["Shamakhi Hotel", "Renaissance Shirvan Hotel"]
  },
  {
    id: "ismayilli",
    name: "Ismayilli",
    slug: "ismayilli",
    country: "Azerbaijan",
    region: "Ismayilli",
    population: "80,000",
    description: "Ismayilli region is known for its pristine nature, winemaking, and the historic Basgal settlement. A perfect destination for eco-tourism.",
    heroImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-September",
    distanceFromBaku: "180 km",
    transport: "Bus (3 hours)",
    topAttractions: ["Basgal Settlement", "Ismayilli Wine Cellars", "Girdiman River Valley"],
    topRestaurants: ["Basgal Restaurant", "Local Wineries"],
    topHotels: ["Ismayilli Resort", "Basgal Hotel"]
  },
  {
    id: "khizi",
    name: "Khizi",
    slug: "khizi",
    country: "Azerbaijan",
    region: "Khizi",
    population: "15,000",
    description: "Khizi is home to the famous 'Candy Cane Mountains' (Goyazan), a geological wonder with red and white striped rocks. A paradise for photographers and hikers.",
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-October",
    distanceFromBaku: "120 km",
    transport: "Bus (2 hours)",
    topAttractions: ["Candy Cane Mountains", "Goyazan Mountain"],
    topRestaurants: ["Khizi Cafe", "Local Picnic Spots"],
    topHotels: ["Khizi Guesthouse"]
  },
  {
    id: "goygol",
    name: "Goygol",
    slug: "goygol",
    country: "Azerbaijan",
    region: "Ganja-Dashkash",
    population: "50,000",
    description: "Goygol is famous for Lake Goygol, a stunning turquoise lake formed by an earthquake. The surrounding national park offers breathtaking hiking trails.",
    heroImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-July",
    distanceFromBaku: "350 km",
    transport: "Bus (4 hours)",
    topAttractions: ["Lake Goygol", "Goygol National Park"],
    topRestaurants: ["Goygol Restaurant", "Park Cafe"],
    topHotels: ["Goygol Hotel", "Lake View Resort"]
  },
  {
    id: "mingachevir",
    name: "Mingachevir",
    slug: "mingachevir",
    country: "Azerbaijan",
    region: "Mingachevir",
    population: "100,000",
    description: "Mingachevir is known as the 'City of Lights' due to its massive hydroelectric power station. The Mingachevir Reservoir offers water sports and beaches.",
    heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1280&auto=format&fit=crop",
    bestTime: "June-August",
    distanceFromBaku: "280 km",
    transport: "Bus (3.5 hours)",
    topAttractions: ["Mingachevir Reservoir", "Hydro Power Station", "City Beach"],
    topRestaurants: ["Reservoir View Restaurant", "Local Eateries"],
    topHotels: ["Mingachevir Hotel", "Resort Hotel"]
  },
  {
    id: "zagatala",
    name: "Zagatala",
    slug: "zagatala",
    country: "Azerbaijan",
    region: "Zagatala",
    population: "50,000",
    description: "Zagatala is a scenic region in the foothills of the Caucasus Mountains, known for its wildlife reserve, historic fortress, and walnut groves.",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-September",
    distanceFromBaku: "350 km",
    transport: "Bus (5 hours)",
    topAttractions: ["Zagatala Fortress", "Zagatala Wildlife Reserve", "Walnut Groves"],
    topRestaurants: ["Zagatala Restaurant", "Forest Cafe"],
    topHotels: ["Zagatala Hotel", "Eco Resort"]
  },
  {
    id: "balakan",
    name: "Balakan",
    slug: "balakan",
    country: "Azerbaijan",
    region: "Balakan",
    population: "40,000",
    description: "Balakan is a green region near the Georgian border, known for the Balakan carpet weaving tradition and the stunning Rajah forest.",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-September",
    distanceFromBaku: "380 km",
    transport: "Bus (5.5 hours)",
    topAttractions: ["Rajah Forest", "Balakan Carpet Weavers", "Historic Mosques"],
    topRestaurants: ["Balakan Cafe", "Local Tea Houses"],
    topHotels: ["Balakan Hotel"]
  },
  {
    id: "lerik",
    name: "Lerik",
    slug: "lerik",
    country: "Azerbaijan",
    region: "Lerik",
    population: "80,000",
    description: "Lerik is located in the Talysh Mountains and is famous for its longevity center (villages with many centenarians), tea plantations, and waterfalls.",
    heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1280&auto=format&fit=crop",
    bestTime: "June-August",
    distanceFromBaku: "300 km",
    transport: "Bus (4 hours)",
    topAttractions: ["Lerik Longevity Center", "Tea Plantations", "Waterfalls"],
    topRestaurants: ["Lerik Restaurant", "Mountain Cafe"],
    topHotels: ["Lerik Guesthouse"]
  },
  {
    id: "astara",
    name: "Astara",
    slug: "astara",
    country: "Azerbaijan",
    region: "Astara",
    population: "100,000",
    description: "Astara is a subtropical region on the Caspian coast, bordering Iran. It's known for its tea plantations, citrus groves, and the stunning Hirkan National Park.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1280&auto=format&fit=crop",
    bestTime: "May-October",
    distanceFromBaku: "250 km",
    transport: "Bus (3.5 hours)",
    topAttractions: ["Hirkan National Park", "Tea Plantations", "Caspian Coast"],
    topRestaurants: ["Astara Restaurant", "Seafood Cafe"],
    topHotels: ["Astara Hotel", "Caspian Resort"]
  },

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
    description: "Step back in time at the UNESCO World Heritage Site of Icherisheher, Baku's ancient walled city. Dating back to the 5th century, this atmospheric labyrinth of narrow cobblestone streets reveals hidden mosques, caravanserais, and historic homes. The iconic Maiden Tower offers panoramic views, while the Palace of Shirvanshahs showcases stunning medieval architecture. Perfect for history enthusiasts and photographers alike.",
    address: "Icherisheher, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Icherisheher_Baku_2016.jpg/1280px-Icherisheher_Baku_2016.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Icherisheher_Baku_2016.jpg/1280px-Icherisheher_Baku_2016.jpg"
    ],
    openingHours: "Always open (Museums: 10:00-18:00)",
    tips: [
      "Visit early morning to avoid crowds",
      "Wear comfortable shoes for cobblestone streets",
      "Buy a combined ticket for Maiden Tower and Shirvanshahs Palace",
      "Try local tea at a traditional tea house"
    ],
    tags: ["history", "UNESCO", "architecture", "Old City", "Baku"],
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
    description: "Step into Azerbaijani tradition at Cay Bagi 145, a beloved tea house nestled within Baku's historic Old City. This charming establishment serves authentic Azerbaijani teas, traditional pastries, and sweets in a cozy, cultural atmosphere. The perfect spot to experience the ritual of tea drinking, try local favorites like shekerbura, pakhlava, and more while soaking in the historic ambiance of the Old City.",
    address: "45 Kichik Gala, Icherisheher, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg"
    ],
    openingHours: "09:00 - 23:00",
    tips: [
      "Try the shekerbura (sweet pastry)",
      "Ask for the house special tea blend",
      "Great for a break while exploring Old City",
      "Cash preferred in traditional establishments"
    ],
    tags: ["tea", "sweets", "traditional", "Azerbaijani", "desserts"],
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
    description: "Highland Park offers the most spectacular panoramic views of Baku Bay and the Caspian Sea. This scenic hilltop park, also known as 'Umud' or 'Fountain Park,' features beautiful landscaping, walking paths, and the Martyrs' Lane memorial. The observation deck provides stunning sunset views over the city skyline and Flame Towers, making it a favorite spot for both locals and visitors.",
    address: "Highland Park, Baku",
    image: "https://images.unsplash.com/photo-1562184552-e0a8e3b5e899?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: [
      "Best for sunset photography",
      "Visit Martyrs' Lane for reflection",
      "Free entry to the park and viewing deck",
      "Combine with a visit to the nearby Flame Towers"
    ],
    tags: ["park", "view", "sunset", "scenic", "photography"],
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
    description: "Experience the perfect introduction to Baku with our comprehensive full-day city tour. Journey through the centuries in the UNESCO-listed Old City, marvel at the futuristic Flame Towers, explore the stunning Heydar Aliyev Center designed by Zaha Hadid, and enjoy a leisurely stroll along the beautiful Baku Boulevard. This tour combines ancient history with modern marvels, led by expert local guides who share fascinating insights about Azerbaijan's capital.",
    address: "Pickup from hotel",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "09:00 - 17:00 (8 hours)",
    tips: [
      "Comfortable walking shoes essential",
      "Camera ready for architectural wonders",
      "Bring sunscreen for outdoor portions",
      "Some sites may require modest dress"
    ],
    tags: ["culture", "city", "full-day", "Old City", "Architecture"],
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
    description: "Journey to one of Azerbaijan's most extraordinary UNESCO World Heritage sites on this full-day adventure. Explore the ancient rock carvings at Gobustan National Park, where 40,000-year-old petroglyphs tell stories of prehistoric life. Experience the surreal landscape of mud volcanoes, one of only five such fields in the world, and witness the bubbling mud pools that create an otherworldly atmosphere. Complete your day with a visit to the ancient Ateshgah Fire Temple, the historic Castle of Fire.",
    address: "Pickup from hotel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mud_volcano_in_Azerbaijan.jpg/1280px-Mud_volcano_in_Azerbaijan.jpg",
    gallery: [],
    openingHours: "08:00 - 18:00 (10 hours)",
    tips: [
      "Wear clothes you don't mind getting muddy",
      "Sunscreen essential - little shade at volcanoes",
      "Bring water and snacks",
      "Camera recommended for unique landscapes"
    ],
    tags: ["nature", "UNESCO", "adventure", "day trip", "geology"],
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
    description: "Discover the crown jewel of Azerbaijan's north on this immersive two-day journey to Sheki. Explore the magnificent Sheki Khan Palace, a UNESCO World Heritage site adorned with stunning stained glass and frescoes. Wander through ancient caravanserais where Silk Road travelers once rested. Visit traditional silk workshops, sample authentic Sheki halva, and spend a night in the charming historic city. This tour offers a deep dive into the culture and history of the Caucasus.",
    address: "Sheki Old City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sheki_Khan_Palace.jpg/1280px-Sheki_Khan_Palace.jpg",
    gallery: [],
    openingHours: "2 Days / 1 Night",
    tips: [
      "Overnight stay included in tour price",
      "Explore the upper caravanserai at sunset",
      "Try local Sheki halva and piti",
      "Bring comfortable shoes for walking"
    ],
    tags: ["history", "UNESCO", "overnight", "multi-day", "Sheki"],
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
    description: "Escape to Azerbaijan's premier mountain resort destination with this thrilling Gabala adventure. Ride the scenic cable car up Tufandag Mountain Resort for breathtaking panoramic views of the Caucasus range. Hike around the crystal-clear Nohur Lake, discover hidden waterfalls, and experience the pristine alpine environment. This tour perfectly combines adventure, nature, and relaxation in one of Azerbaijan's most beautiful regions.",
    address: "Gabala Region",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tufandag_2019.jpg/1280px-Tufandag_2019.jpg",
    gallery: [],
    openingHours: "Full Day (8-9 hours)",
    tips: [
      "Check weather forecast before departure",
      "Bring mountain gear and layers",
      "Cable car operates weather permitting",
      "Great for families with children"
    ],
    tags: ["nature", "mountain", "family", "adventure", "cable car"],
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
    description: "Embark on a culinary journey through Baku's vibrant food scene. Start at the bustling Taza Bazaar to sample fresh produce, local cheeses, and dried fruits. Visit a traditional tea house to experience the art of Azerbaijani tea service. Participate in a hands-on cooking class to learn how to make authentic dishes like plov, dolma, and dolma. Complete your tour with a walking exploration of the Old City, where history meets modern culinary innovation.",
    address: "Baku Old City",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "5 Hours",
    tips: [
      "Come hungry - lots of food included",
      "Vegetarian options available upon request",
      "Cash for market purchases",
      "Take photos of your cooking creations"
    ],
    tags: ["food", "cooking", "culture", "tasting", "Old City"],
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
    description: "Malacannes 145 represents the pinnacle of fine dining in Baku, offering contemporary European cuisine with a creative twist. Located on the prestigious Nizami Street, this elegant restaurant combines sophisticated atmosphere with exceptional service. The menu features seasonal ingredients prepared with modern techniques, while the wine list offers carefully selected international and local options. Perfect for special occasions, business dinners, or an indulgent night out.",
    address: "Nizami St, Baku",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: [
      "Reservation highly recommended",
      "Business lunch available weekdays",
      "Ask for wine pairing suggestions",
      "Try the tasting menu for full experience"
    ],
    tags: ["european", "luxury", "fine-dining", "romantic", "contemporary"],
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
    description: "Experience the heart of Azerbaijani cuisine at Dolma Restaurant, where traditional recipes meet warm hospitality. Located in the historic center of Baku, this beloved establishment serves authentic dishes including their signature dolma, succulent kebabs, and hearty plov. The cozy atmosphere and attentive service make it perfect for experiencing the true flavors of Azerbaijan's rich culinary heritage.",
    address: "Istiqlaliyyet St, Baku",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 23:00",
    tips: [
      "Must try the grape leaf dolma",
      "Order the plov for sharing",
      "Save room for baklava dessert",
      "Great value for authentic cuisine"
    ],
    tags: ["local", "traditional", "meat", "Azerbaijani", "authentic"],
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
    description: "Firuze Restaurant transports diners to the mystical Orient with its stunning interior and fusion menu blending Azerbaijani and Arabic cuisines. The warm ambiance is enhanced by traditional music, live performances, and authentic hookah service. Enjoy exquisite kebabs, aromatic pilafs, and Middle Eastern specialties while soaking in the rich, decorative atmosphere that makes every meal a memorable experience.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: [
      "Evening brings live traditional music",
      "Hookah service available with fruit flavors",
      "Ask for the house special mixed grill",
      "Reservations recommended for weekends"
    ],
    tags: ["arabic", "oriental", "atmosphere", "hookah", "live music"],
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
    description: "Passage 145 is Baku's premier destination for barbecue enthusiasts and European cuisine lovers alike. Set in a stylish, contemporary environment, the restaurant offers perfectly grilled meats, an extensive wine selection, and innovative side dishes. The sophisticated atmosphere makes it ideal for both business dinners and romantic evenings, while the open kitchen adds theatrical flair to your dining experience.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: [
      "Try the wagyu beef steak",
      "Ask for wine pairing recommendations",
      "Chef's tasting menu available",
      "Perfect for special occasions"
    ],
    tags: ["bbq", "european", "stylish", "grill", "wine"],
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
    description: "Nergiz Restaurant offers a delightful fusion of European and Georgian cuisines, creating a unique culinary experience in Baku. Famous for its authentic khachapuri and traditional Georgian dishes with a modern twist, the restaurant combines friendly service with a warm, inviting atmosphere. Perfect for those seeking comfort food with international flair and a taste of Caucasus hospitality.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 23:00",
    tips: [
      "Must try the khachapuri adjaruli",
      "Ask for the Georgian wine selection",
      "Lunch specials available",
      "Great for families"
    ],
    tags: ["georgian", "european", "fusion", "khachapuri", "comfort food"],
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
    description: "Araz Terrace offers a memorable dining experience with its stunning location on the famous Baku Boulevard, overlooking the Caspian Sea. Specializing in Middle Eastern cuisine, the restaurant features aromatic dishes, fresh seafood, and traditional specialties in an elegant outdoor setting. Perfect for sunset dinners, romantic evenings, or enjoying shisha with panoramic waterfront views.",
    address: "Baku Boulevard",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "10:00 - 23:00",
    tips: [
      "Best for sunset dining",
      "Traditional shisha available",
      "Seafood specialties recommended",
      "Outdoor seating with sea views"
    ],
    tags: ["middle-eastern", "view", "outdoor", "seafood", "waterfront"],
    priceLevel: "$$",
    lat: 40.3700,
    lon: 49.8400
  },
{
    id: "sirvansah-musey",
    name: "Sirvansah Musey",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 3.9,
    reviewsCount: 682,
    description: "Sirvansah Musey offers a unique dining experience where traditional Azerbaijani cuisine meets cultural heritage. Set in a charming museum-like atmosphere, this restaurant showcases the rich culinary traditions of the region with an impressive variety of dishes including authentic pilafs, kebabs, and vegetarian options. The decor reflects Azerbaijan's artistic heritage, making it a perfect spot for those seeking both delicious food and cultural immersion.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "11:00 - 22:00",
    tips: [
      "Extensive vegetarian menu available",
      "Traditional music plays in the evenings",
      "Ask about daily specials",
      "Great for those seeking authentic local experience"
    ],
    tags: ["vegetarian", "local", "museum", "traditional", "cultural"],
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
    description: "Ateshgah Fire Temple, known as the 'Castle of Fire', is an ancient Zoroastrian sanctuary located just outside Baku in the village of Surakhany. This remarkable stone structure dates back to the 17-18th centuries and was built around a natural gas vent that once produced a continuously burning flame. The temple's unique architecture and historical significance make it a fascinating destination for history enthusiasts and those interested in ancient religious practices.",
    address: "Surakhany, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ateshgah_Baku.jpg/1280px-Ateshgah_Baku.jpg",
    gallery: [],
    openingHours: "10:00 - 18:00",
    tips: [
      "Best visited in clear weather",
      "Guided tours available on request",
      "Combined ticket with Gobustan possible",
      "Bring a camera for unique architecture"
    ],
    tags: ["history", "fire", "ancient", "Zoroastrian", "UNESCO"],
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
    description: "Fountain Square is the vibrant heart of Baku, a historic square in the city center named for its numerous decorative fountains and elegant architectural backdrop. Surrounded by historic buildings, cafes, and shops, this pedestrian-friendly plaza is perfect for leisurely strolls, people-watching, and soaking up the local atmosphere. The square comes alive in the evenings when locals and visitors gather to enjoy the pleasant weather and lively ambiance.",
    address: "Nizami Street, Baku",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: [
      "Best for people watching in evenings",
      "Surrounded by cafes and restaurants",
      "Near the Nizami Street shopping area",
      "Beautifully lit at night"
    ],
    tags: ["square", "fountain", "central", "pedestrian", "shopping"],
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
    description: "Nizami Street is one of Europe's longest pedestrian streets, stretching through the heart of Baku with stunning 19th and 20th-century architecture. Named after the famous Azerbaijani poet Nizami Ganjavi, this elegant boulevard is lined with boutiques, cafes, restaurants, and historic buildings. From luxury shopping to casual strolling, Nizami Street offers the perfect blend of architecture, culture, and modern urban life in Baku's bustling city center.",
    address: "Nizami Street, Baku",
    image: "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
    gallery: [],
    openingHours: "Always open",
    tips: [
      "Walk the entire length to see all architecture",
      "Best time to visit is early evening",
      "Stop at the many cafes along the way",
      "Photography heaven for architecture lovers"
    ],
    tags: ["shopping", "architecture", "walking", "pedestrian", "historic"],
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
    description: "The Palace of Shirvanshahs is a UNESCO World Heritage Site and one of the jewels of Azerbaijani architecture. Built in the 15th century, this magnificent medieval palace complex includes the main residence, a mosque, mausoleum, and bathhouse. Located in the heart of Baku's Old City, it showcases stunning medieval Islamic architecture with intricate stonework, beautiful courtyards, and the famous 'Divan Khane' ceremony hall. A must-visit for history and architecture enthusiasts.",
    address: "Old City, Baku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Palace_of_Shirvanshahs_Baku_2016.jpg/1280px-Palace_of_Shirvanshahs_Baku_2016.jpg",
    gallery: [],
    openingHours: "10:00 - 18:00",
    tips: [
      "Buy combined ticket with Maiden Tower for savings",
      "Hire a guide to understand the history",
      "Visit in the morning to avoid crowds",
      "Photography allowed in most areas"
    ],
    tags: ["UNESCO", "history", "architecture", "medieval", "Old City"],
    priceLevel: null,
    lat: 40.3653,
    lon: 49.8335
  },
{
    id: "baku-city-highlights-tour",
    name: "Baku City Highlights Tour",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 4.9,
    reviewsCount: 876,
    description: "Experience the very best of Baku in one unforgettable day. This comprehensive tour takes you through centuries of history in the UNESCO-listed Old City, showcases the stunning modern architecture of the Flame Towers and Heydar Aliyev Center, and allows you to stroll along the picturesque Baku Boulevard. Led by knowledgeable local guides, this tour provides the perfect introduction to Azerbaijan's capital, blending ancient traditions with contemporary marvels.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gallery: [],
    openingHours: "8 hours",
    tips: [
      "Old City exploration and photo stops",
      "Photo opportunity at Flame Towers",
      "Visit the stunning Heydar Aliyev Center",
      "Stroll the Caspian Boulevard"
    ],
    tags: ["City Tour", "8 hours", "EN, RU, AZ", "Old City", "Architecture"],
    priceLevel: "From 25 AZN",
    lat: 40.4093,
    lon: 49.8671
  },
{
    id: "gobustan-mud-volcanoes-day-trip",
    name: "Gobustan & Mud Volcanoes Day Trip",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 4.8,
    reviewsCount: 654,
    description: "Journey 60km from Baku to discover 40,000-year-old rock carvings at Gobustan National Park, witness the surreal mud volcanoes, and visit the ancient Ateshgah Fire Temple on the way back.",
    address: "Baku Region",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    gallery: [],
    openingHours: "10 hours",
    tips: ["Gobustan Rock Art", "Mud Volcanoes", "Ateshgah Fire Temple"],
    tags: ["Day Trip", "10 hours", "From Baku"],
    priceLevel: "From 40 AZN",
    lat: 40.1146,
    lon: 49.3562
  },
{
    id: "sheki-historical-2-day-tour",
    name: "Sheki Historical 2-Day Tour",
    city: "Sheki",
    citySlug: "sheki",
    category: "Tours",
    rating: 4.9,
    reviewsCount: 412,
    description: "Discover the jewel of Azerbaijan's north. The magnificent Khan Palace with its stunning stained glass, the ancient caravanserai along the Silk Road, and traditional Sheki halva workshops.",
    address: "Sheki City",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    gallery: [],
    openingHours: "2 days / 1 night",
    tips: ["Sheki Khan Palace", "Upper Caravanserai", "Silk Workshop"],
    tags: ["Multi-day", "2 days", "Hotel included"],
    priceLevel: "From 120 AZN",
    lat: 41.1919,
    lon: 47.1706
  },
{
    id: "baku-food-culture-tour",
    name: "Baku Food & Culture Tour",
    city: "Baku",
    citySlug: "baku",
    category: "Tours",
    rating: 4.9,
    reviewsCount: 534,
    description: "The ultimate Azerbaijani food experience. Explore the colourful Taza Bazaar, taste plov, dolma, and pakhlava, enjoy a traditional tea ceremony, and discover the culinary secrets of the Old City.",
    address: "Baku City",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    gallery: [],
    openingHours: "5 hours",
    tips: ["Plov", "Dolma", "Pakhlava", "Shekerbura"],
    tags: ["Food Tour", "5 hours", "Tasting"],
    priceLevel: "From 35 AZN",
    lat: 40.4093,
    lon: 49.8671
  },
{
    id: "lankaran-nature-tea-tour",
    name: "Lankaran Nature & Tea Tour",
    city: "Lankaran",
    citySlug: "lankaran",
    category: "Tours",
    rating: 4.6,
    reviewsCount: 187,
    description: "Visit the lush Hirkan Forest (UNESCO), walk through Azerbaijan's famous tea plantations, relax on the Caspian coast, and experience the subtropical south of the country.",
    address: "Lankaran Region",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    gallery: [],
    openingHours: "1 day",
    tips: ["Hirkan National Forest", "Tea Plantations", "Caspian Beaches"],
    tags: ["Nature", "1 day", "Tea Tasting"],
    priceLevel: "From 45 AZN",
    lat: 38.7538,
    lon: 48.8511
  },
{
    id: "khinalig-village",
    name: "Khinalig Village",
    city: "Guba",
    citySlug: "guba",
    category: "Historic Sites",
    rating: 4.8,
    reviewsCount: 342,
    description: "Khinalig is one of the highest permanently inhabited villages in Europe, sitting at an altitude of 2,350 meters. This ancient mountain village is home to the Khinalig people, who have preserved their unique language, culture, and traditions for centuries. The village offers breathtaking views of the Caucasus Mountains and features traditional stone houses built into the mountainside.",
    address: "Khinalig, Guba District",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Khinalig_village_Guba_Azerbaijan.jpg/1280px-Khinalig_village_Guba_Azerbaijan.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Khinalig_village_Guba_Azerbaijan.jpg/1280px-Khinalig_village_Guba_Azerbaijan.jpg"
    ],
    openingHours: "Always open",
    tips: [
      "Wear comfortable shoes for mountain terrain",
      "Bring warm clothes even in summer",
      "Try local dairy products",
      "Respect local customs and traditions"
    ],
    tags: ["village", "mountains", "UNESCO", "traditional", "Guba"],
    priceLevel: null,
    lat: 41.1747,
    lon: 48.1319
  },
{
    id: "guba-waterfall",
    name: "Guba Waterfall",
    city: "Guba",
    citySlug: "guba",
    category: "Nature",
    rating: 4.7,
    reviewsCount: 256,
    description: "The magnificent Guba Waterfall is a stunning natural attraction located in the foothills of the Caucasus Mountains. The waterfall cascades down from a height of 30 meters into a crystal-clear pool, surrounded by lush green forests and rocky cliffs. It's a popular spot for hiking, picnicking, and photography.",
    address: "Guba District",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    gallery: [],
    openingHours: "Daylight hours",
    tips: [
      "Best visited in spring when water flow is strongest",
      "Wear waterproof shoes",
      "Bring a camera for scenic shots"
    ],
    tags: ["waterfall", "nature", "hiking", "Guba"],
    priceLevel: null,
    lat: 41.3603,
    lon: 48.5129
  },
{
    id: "quba-mosque",
    name: "Quba Mosque",
    city: "Guba",
    citySlug: "guba",
    category: "Historic Sites",
    rating: 4.5,
    reviewsCount: 189,
    description: "The historic Quba Mosque is one of the oldest mosques in Azerbaijan, dating back to the 19th century. The mosque features traditional Islamic architecture with a beautiful dome and minaret. It's an important cultural and religious site for the local community.",
    address: "Guba City Center",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    gallery: [],
    openingHours: "Daily 9:00-18:00",
    tips: [
      "Dress modestly when visiting",
      "Non-Muslims welcome outside prayer times",
      "Photography allowed in exterior areas"
    ],
    tags: ["mosque", "historic", "architecture", "Guba"],
    priceLevel: null,
    lat: 41.3603,
    lon: 48.5129
  },
{
    id: "guba-carpet-workshop",
    name: "Guba Carpet Workshop",
    city: "Guba",
    citySlug: "guba",
    category: "Shopping",
    rating: 4.6,
    reviewsCount: 124,
    description: "Visit traditional carpet weaving workshops in Guba to see artisans creating beautiful handmade carpets using ancient techniques passed down through generations. You can watch the weaving process, learn about different patterns and symbols, and purchase authentic Azerbaijani carpets.",
    address: "Guba City",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    gallery: [],
    openingHours: "Daily 10:00-18:00",
    tips: [
      "Ask about the meaning of different patterns",
      "Prices vary based on size and complexity",
      "Can arrange custom orders"
    ],
    tags: ["carpets", "shopping", "crafts", "workshop", "Guba"],
    priceLevel: "$$",
    lat: 41.3603,
    lon: 48.5129
  },
{
    id: "afurdzhi-waterfall",
    name: "Afurdzhi Waterfall",
    city: "Guba",
    citySlug: "guba",
    category: "Nature",
    rating: 4.8,
    reviewsCount: 98,
    description: "Afurdzhi Waterfall is a hidden gem in the Guba region, located in a pristine mountain valley. The waterfall drops from a height of 75 meters, making it one of the highest waterfalls in Azerbaijan. The surrounding area is perfect for hiking and nature photography.",
    address: "Afurdzhi Village, Guba District",
    image: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800&q=80",
    gallery: [],
    openingHours: "Daylight hours",
    tips: [
      "Best visited after rainfall",
      "Wear hiking boots",
      "Bring water and snacks",
      "Trail is moderately difficult"
    ],
    tags: ["waterfall", "hiking", "nature", "Guba"],
    priceLevel: null,
    lat: 41.4500,
    lon: 48.6000
  },
  {
    id: "dolma-restaurant-baku",
    name: "Dolma Restaurant",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 1200,
    description: "Experience authentic Azerbaijani cuisine at Dolma Restaurant, where traditional recipes meet modern presentation. Famous for their dolma, plov, and kebabs.",
    address: "28 May Street, Baku",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    gallery: [],
    openingHours: "10:00 - 23:00",
    tips: ['Try the lamb dolma', 'Reserve table for dinner', 'Traditional music on weekends'],
    tags: ['Azerbaijani', 'Traditional', 'Dolma', 'Kebabs'],
    priceLevel: "$$",
    lat: 40.3777,
    lon: 49.8312
  },

  {
    id: "malacannes-145",
    name: "Malacannes 145",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.6,
    reviewsCount: 950,
    description: "Charming restaurant in the Old City serving delicious Armenian and Azerbaijani dishes in a historic setting.",
    address: "145 Kichik Gala, Icherisheher, Baku",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    gallery: [],
    openingHours: "11:00 - 22:00",
    tips: ['Try the kebabs', 'Outdoor seating available', 'Great views of the Old City'],
    tags: ['Old City', 'Kebabs', 'Traditional'],
    priceLevel: "$$",
    lat: 40.377,
    lon: 49.832
  },

  {
    id: "sea-breeze-cafe-baku",
    name: "Sea Breeze Cafe",
    city: "Baku",
    citySlug: "baku",
    category: "Restaurants",
    rating: 4.5,
    reviewsCount: 800,
    description: "Relaxing cafe on the Baku Boulevard with stunning Caspian Sea views. Perfect for coffee, light meals, and sunsets.",
    address: "Baku Boulevard, Baku",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
    gallery: [],
    openingHours: "09:00 - 23:00",
    tips: ['Come for sunset', 'Try the local tea', 'Great for people watching'],
    tags: ['Cafe', 'Sea View', 'Coffee', 'Sunset'],
    priceLevel: "$",
    lat: 40.365,
    lon: 49.85
  },

  {
    id: "sheki-saray",
    name: "Sheki Saray",
    city: "Sheki",
    citySlug: "sheki",
    category: "Restaurants",
    rating: 4.8,
    reviewsCount: 600,
    description: "Fine dining restaurant in Sheki serving traditional Sheki cuisine including the famous Sheki halva and piti.",
    address: "Sheki Old City",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    gallery: [],
    openingHours: "12:00 - 21:00",
    tips: ['Must try Sheki halva', 'Traditional piti dish', 'Beautiful historic setting'],
    tags: ['Sheki', 'Traditional', 'Halva', 'Piti'],
    priceLevel: "$$",
    lat: 41.1919,
    lon: 47.1706
  },

  {
    id: "piti-house-sheki",
    name: "Piti House",
    city: "Sheki",
    citySlug: "sheki",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 450,
    description: "Specialty restaurant dedicated to the traditional Azerbaijani dish piti, prepared in clay pots for hours.",
    address: "Sheki Old City",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800",
    gallery: [],
    openingHours: "11:00 - 20:00",
    tips: ['Order piti in advance', 'Clay pot presentation', 'Authentic experience'],
    tags: ['Sheki', 'Piti', 'Traditional', 'Clay Pot'],
    priceLevel: "$$",
    lat: 41.1925,
    lon: 47.171
  },

  {
    id: "mugam-club-ganja",
    name: "Mugam Club",
    city: "Ganja",
    citySlug: "ganja",
    category: "Restaurants",
    rating: 4.6,
    reviewsCount: 300,
    description: "Restaurant and cultural center in Ganja serving traditional Azerbaijani dishes with live mugam music performances.",
    address: "Nizami Street, Ganja",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800",
    gallery: [],
    openingHours: "12:00 - 23:00",
    tips: ['Live mugam music', 'Traditional kebabs', 'Cultural experience'],
    tags: ['Ganja', 'Traditional', 'Mugam', 'Music'],
    priceLevel: "$$",
    lat: 40.6828,
    lon: 46.3606
  },

  {
    id: "ganja-restaurant",
    name: "Ganja Restaurant",
    city: "Ganja",
    citySlug: "ganja",
    category: "Restaurants",
    rating: 4.5,
    reviewsCount: 250,
    description: "Local favorite restaurant in Ganja serving authentic Azerbaijani cuisine with a focus on fresh local ingredients.",
    address: "Heydar Aliyev Avenue, Ganja",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800",
    gallery: [],
    openingHours: "10:00 - 22:00",
    tips: ['Try the local lamb', 'Friendly service', 'Large portions'],
    tags: ['Ganja', 'Local', 'Lamb', 'Fresh'],
    priceLevel: "$",
    lat: 40.68,
    lon: 46.36
  },

  {
    id: "gabala-restaurant",
    name: "Gabala Restaurant",
    city: "Gabala",
    citySlug: "gabala",
    category: "Restaurants",
    rating: 4.6,
    reviewsCount: 350,
    description: "Mountain restaurant in Gabala serving hearty Caucasian cuisine with stunning mountain views.",
    address: "Tufandag Mountain Resort, Gabala",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
    gallery: [],
    openingHours: "09:00 - 21:00",
    tips: ['Mountain view seating', 'Try the trout', 'After skiing dinner'],
    tags: ['Gabala', 'Mountain', 'Trout', 'Views'],
    priceLevel: "$$",
    lat: 41.0,
    lon: 47.0
  },

  {
    id: "caspian-fish-restaurant-lankaran",
    name: "Caspian Fish Restaurant",
    city: "Lankaran",
    citySlug: "lankaran",
    category: "Restaurants",
    rating: 4.7,
    reviewsCount: 200,
    description: "Fresh seafood restaurant on the Caspian Sea coast, famous for its grilled fish and traditional fish dishes.",
    address: "Lankaran Seaside, Lankaran",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800",
    gallery: [],
    openingHours: "11:00 - 22:00",
    tips: ['Fresh fish daily', 'Grilled specialties', 'Sea view'],
    tags: ['Lankaran', 'Seafood', 'Fish', 'Caspian'],
    priceLevel: "$$",
    lat: 38.75,
    lon: 48.85
  },

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
    place.tags.some(tag => tag.includes(lowerQuery)) ||
    place.description.toLowerCase().includes(lowerQuery) ||
    place.address.toLowerCase().includes(lowerQuery)
  );
}

export function searchAutocomplete(query: string): Place[] {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.length < 2) return [];
  
  // Prioritize matches in name, then city, then category
  return places
    .filter(place => 
      place.name.toLowerCase().includes(lowerQuery) ||
      place.city.toLowerCase().includes(lowerQuery) ||
      place.category.toLowerCase().includes(lowerQuery) ||
      place.tags.some(tag => tag.includes(lowerQuery))
    )
    .slice(0, 8); // Limit to 8 suggestions
}