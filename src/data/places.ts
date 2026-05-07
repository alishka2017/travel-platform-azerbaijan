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
    priceLevel: null,
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
    priceLevel: null,
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
    priceLevel: null,
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
    priceLevel: null,
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
    priceLevel: null,
    lat: 40.9825,
    lon: 40.9825,
  },
];

// Helper functions
export const getPlacesByCity = (citySlug: string) => {
  return places.filter(place => place.citySlug === citySlug);
};

export const searchPlaces = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return places.filter(place => 
    place.name.toLowerCase().includes(lowerQuery) ||
    place.description.toLowerCase().includes(lowerQuery) ||
    place.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getCityBySlug = (slug: string) => {
  return cities.find(city => city.slug === slug);
};

export const searchAutocomplete = (query: string) => {
  if (query.length < 2) return [];
  return getPlacesByCity(query) || searchPlaces(query);
};
