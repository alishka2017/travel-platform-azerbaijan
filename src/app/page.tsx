import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// TOP CITIES
const cities = [
  {
    id: 1,
    name: 'Baku',
    slug: 'baku',
    description: 'Capital city on the Caspian Sea with ancient walled city and modern skyscrapers. Perfect blend of history and future.',
    tag: 'modern',
    tagColor: 'blue'
  },
  {
    id: 2,
    name: 'Ganja',
    slug: 'gandja',
    description: 'Second-largest city with beautiful parks and rich cultural heritage. Known for its flower gardens and historic mosques.',
    tag: 'culture',
    tagColor: 'purple'
  },
  {
    id: 3,
    name: 'Sheki',
    slug: 'sheki',
    description: 'Historic mountain town with stunning architecture and silk road heritage. UNESCO World Heritage site.',
    tag: 'history',
    tagColor: 'amber'
  },
  {
    id: 4,
    name: 'Lankaran',
    slug: 'lenkoran',
    description: 'Coastal resort on Caspian Sea with beaches and national park. Famous for tea plantations and mild climate.',
    tag: 'nature',
    tagColor: 'green'
  },
  {
    id: 5,
    name: 'Gabala',
    slug: 'gabala',
    description: 'Mountain resort area with ski slopes and natural beauty. Perfect for outdoor activities and family vacations.',
    tag: 'nature',
    tagColor: 'green'
  }
];

// TOP ATTRACTIONS (25 items)
const attractions = [
  { id: 1, name: 'Old City (Icherisheher)', city: 'Baku', type: 'history', description: 'Ancient fortress with medieval walls and historic buildings.' },
  { id: 2, name: 'Maiden Tower', city: 'Baku', type: 'history', description: '12th-century tower with panoramic city views.' },
  { id: 3, name: 'Flame Towers', city: 'Baku', type: 'modern', description: 'Iconic skyscrapers lighting up the skyline.' },
  { id: 4, name: 'Baku Boulevard', city: 'Baku', type: 'nature', description: 'Scenic promenade along the Caspian Sea.' },
  { id: 5, name: 'Gobustan National Park', city: 'Baku', type: 'nature', description: 'Ancient rock carvings and mud volcanoes.' },
  { id: 6, name: 'Heydar Aliyev Center', city: 'Baku', type: 'modern', description: 'Stunning modern architecture by Zaha Hadid.' },
  { id: 7, name: 'Shirvanshah Palace', city: 'Baku', type: 'history', description: 'Medieval palace complex in Old City.' },
  { id: 8, name: 'Ateshgah Fire Temple', city: 'Baku', type: 'history', description: 'Ancient Zoroastrian fire temple.' },
  { id: 9, name: 'Martyrs Lane', city: 'Baku', type: 'history', description: 'Memorial with city views and history.' },
  { id: 10, name: 'Yanar Dag', city: 'Baku', type: 'nature', description: 'Eternal natural gas fire on mountain.' },
  { id: 11, name: 'Sheki Khan Palace', city: 'Sheki', type: 'history', description: '18th-century palace with stained glass.' },
  { id: 12, name: 'Caravanserai Sheki', city: 'Sheki', type: 'history', description: 'Ancient Silk Road inn restored.' },
  { id: 13, name: 'Khanega Mosque', city: 'Sheki', type: 'history', description: 'Historic mosque with beautiful minaret.' },
  { id: 14, name: 'Ganja Gate', city: 'Ganja', type: 'history', description: 'Ancient city gate from medieval times.' },
  { id: 15, name: 'Nizami Mausoleum', city: 'Ganja', type: 'history', description: 'Tomb of famous Persian poet.' },
  { id: 16, name: 'Lake Goyazan', city: 'Ganja', type: 'nature', description: 'Scenic mountain lake perfect for hiking.' },
  { id: 17, name: 'Lankaran Fortress', city: 'Lankaran', type: 'history', description: '18th-century fortress by the sea.' },
  { id: 18, name: 'Hirkan National Park', city: 'Lankaran', type: 'nature', description: 'Ancient forest with unique wildlife.' },
  { id: 19, name: 'Talysh Mountains', city: 'Lankaran', type: 'nature', description: 'Beautiful mountain range for trekking.' },
  { id: 20, name: 'Gabala Cable Car', city: 'Gabala', type: 'nature', description: 'Scenic ride with mountain views.' },
  { id: 21, name: 'Tufandag Resort', city: 'Gabala', type: 'nature', description: 'Popular ski and summer resort.' },
  { id: 22, name: 'Nohur Lake', city: 'Gabala', type: 'nature', description: 'Peaceful lake surrounded by mountains.' },
  { id: 23, name: 'Baku Eye', city: 'Baku', type: 'modern', description: 'Ferris wheel with sea views.' },
  { id: 24, name: 'Upland Park', city: 'Baku', type: 'nature', description: 'Green park with city panorama.' },
  { id: 25, name: ' Carpet Museum', city: 'Baku', type: 'culture', description: 'Museum shaped like rolled carpet.' }
];

// THINGS TO DO
const thingsToDo = {
  cultural: [
    { name: 'Visit Old City', description: 'Walk through medieval streets and historic sites.' },
    { name: 'Sheki Palace Tour', description: 'Explore stunning 18th-century architecture.' },
    { name: 'Carpet Weaving', description: 'Watch traditional carpet making process.' },
    { name: 'Mugham Music', description: 'Listen to traditional Azerbaijani music.' }
  ],
  nature: [
    { name: 'Gobustan Exploration', description: 'See ancient rock carvings and volcanoes.' },
    { name: 'Hirkan Forest Hike', description: 'Trek through ancient Caspian forest.' },
    { name: 'Mountain Skiing', description: 'Ski slopes in Gabala and Shahdag.' },
    { name: 'Caspian Beaches', description: 'Relax on coastal beaches in Lankaran.' }
  ],
  food: [
    { name: 'Plov Tasting', description: 'Try national dish with saffron rice.' },
    { name: 'Dolma Experience', description: 'Taste stuffed vegetables and grape leaves.' },
    { name: 'Tea Ceremony', description: 'Traditional tea with local sweets.' },
    { name: 'Kebab Tour', description: 'Sample grilled meats at local spots.' }
  ],
  nightlife: [
    { name: 'Baku Bars', description: 'Trendy bars in Fountain Square area.' },
    { name: 'Jazz Clubs', description: 'Live music in historic venues.' },
    { name: 'Rooftop Lounges', description: 'Drinks with city skyline views.' },
    { name: 'Beach Clubs', description: 'Summer parties by the Caspian Sea.' }
  ]
};

// TRAVEL GUIDE
const travelGuide = {
  bestTime: {
    title: 'Best Time to Visit',
    content: 'April to June and September to October offer pleasant weather for sightseeing and outdoor activities.'
  },
  visa: {
    title: 'Visa Info',
    content: 'Many countries enjoy visa-free entry for up to 30 days. E-visa available for other nationalities.'
  },
  currency: {
    title: 'Currency',
    content: 'Azerbaijani Manat (AZN). Credit cards widely accepted in cities.'
  },
  safety: {
    title: 'Safety Overview',
    content: 'Azerbaijan is generally safe for tourists. Standard precautions recommended in crowded areas.'
  },
  budget: {
    title: 'Budget Range',
    content: 'Budget: $30-50/day, Mid-range: $70-120/day, Luxury: $200+/day.'
  }
};

// ITINERARIES
const itineraries = [
  {
    id: 1,
    name: '3-Day Azerbaijan',
    days: [
      { day: 'Day 1', places: ['Old City Baku', 'Flame Towers', 'Baku Boulevard'] },
      { day: 'Day 2', places: ['Gobustan National Park', 'Mud Volcanoes', 'Ateshgah Temple'] },
      { day: 'Day 3', places: ['Highland Park', 'Carpet Museum', 'Fountain Square'] }
    ]
  },
  {
    id: 2,
    name: '5-Day Azerbaijan',
    days: [
      { day: 'Day 1', places: ['Old City Baku', 'Flame Towers', 'Baku Boulevard'] },
      { day: 'Day 2', places: ['Gobustan', 'Mud Volcanoes', 'Yanar Dag'] },
      { day: 'Day 3', places: ['Sheki City', 'Khan Palace', 'Caravanserai'] },
      { day: 'Day 4', places: ['Sheki Surroundings', 'Local Crafts', 'Mountain Villages'] },
      { day: 'Day 5', places: ['Return to Baku', 'Shopping', 'Evening Entertainment'] }
    ]
  },
  {
    id: 3,
    name: '7-Day Azerbaijan',
    days: [
      { day: 'Day 1', places: ['Old City Baku', 'Flame Towers', 'Baku Boulevard'] },
      { day: 'Day 2', places: ['Gobustan', 'Mud Volcanoes', 'Yanar Dag'] },
      { day: 'Day 3', places: ['Gabala Mountains', 'Cable Car', 'Lake Nohur'] },
      { day: 'Day 4', places: ['Sheki City', 'Khan Palace', 'Local Wine'] },
      { day: 'Day 5', places: ['Lankaran Coast', 'Hirkan Forest', 'Beach Time'] },
      { day: 'Day 6', places: ['Ganja City', 'Nizami Mausoleum', 'Parks'] },
      { day: 'Day 7', places: ['Return to Baku', 'Last Shopping', 'Departure'] }
    ]
  }
];

// HIDDEN GEMS
const hiddenGems = [
  { name: 'Lahij Village', description: 'Ancient mountain village with copper crafts.' },
  { name: 'Khinalig', description: 'Highest village in Azerbaijan, ancient culture.' },
  { name: 'Girdiman Valley', description: 'Hidden valley with waterfalls and hiking.' },
  { name: 'Goygol Lake', description: 'Beautiful mountain lake with crystal water.' },
  { name: 'Local Tea Houses', description: 'Traditional tea experience in villages.' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">🔥 POPULAR DESTINATION</span>
              <span className="text-blue-200 text-sm">2024 Travel Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Azerbaijan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Discover the Land of Fire where ancient Silk Road heritage meets modern architecture. 
              From Caspian beaches to mountain resorts, experience the unique blend of East and West.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/explore" 
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition text-lg shadow-lg"
              >
                Explore Azerbaijan
              </Link>
              <Link 
                href="/plan-trip" 
                className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition text-lg"
              >
                Plan Your Trip
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10 text-blue-200">
              <div className="flex items-center gap-2">
                <span>⭐ 4.8</span>
                <span className="text-sm">Travelers Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💬 50K+</span>
                <span className="text-sm">Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Top Cities</h2>
              <p className="text-gray-500 mt-2">Discover the best places to visit in Azerbaijan</p>
            </div>
            <Link href="/cities" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Cities →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-xl transition"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  city.tagColor === 'blue' ? 'from-blue-400 to-blue-600' :
                  city.tagColor === 'purple' ? 'from-purple-400 to-purple-600' :
                  city.tagColor === 'amber' ? 'from-amber-400 to-amber-600' :
                  'from-green-400 to-green-600'
                }`}></div>
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className={`text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2 inline-block`}>
                    {city.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{city.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOP ATTRACTIONS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Top Attractions</h2>
              <p className="text-gray-500 mt-2">25 must-visit places in Azerbaijan</p>
            </div>
            <Link href="/attractions" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Attractions →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {attractions.map((attraction) => (
              <Link
                key={attraction.id}
                href={`/attractions/${attraction.id}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition group"
              >
                <div className="aspect-square bg-gray-200 rounded mb-3 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-500 text-sm">★ 4.7</span>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 text-sm">
                  {attraction.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{attraction.city}</p>
                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{attraction.description}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full mt-2 inline-block ${
                  attraction.type === 'history' ? 'bg-amber-100 text-amber-700' :
                  attraction.type === 'nature' ? 'bg-green-100 text-green-700' :
                  attraction.type === 'culture' ? 'bg-purple-100 text-purple-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {attraction.type}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THINGS TO DO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Things to Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Cultural */}
            <div className="bg-amber-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎭</span>
                <h3 className="font-bold text-gray-800">Cultural Experiences</h3>
              </div>
              <ul className="space-y-3">
                {thingsToDo.cultural.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nature */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏔️</span>
                <h3 className="font-bold text-gray-800">Nature Trips</h3>
              </div>
              <ul className="space-y-3">
                {thingsToDo.nature.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Food */}
            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🍽️</span>
                <h3 className="font-bold text-gray-800">Food Experiences</h3>
              </div>
              <ul className="space-y-3">
                {thingsToDo.food.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nightlife */}
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌙</span>
                <h3 className="font-bold text-gray-800">Nightlife</h3>
              </div>
              <ul className="space-y-3">
                {thingsToDo.nightlife.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Travel Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.values(travelGuide).map((guide, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-bold mb-3 text-blue-200">{guide.title}</h3>
                <p className="text-sm text-blue-100">{guide.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Suggested Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg">{itinerary.name}</h3>
                  <p className="text-sm text-blue-200">Perfect for first-time visitors</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {itinerary.days.map((day, index) => (
                      <li key={index} className="border-l-2 border-blue-200 pl-4">
                        <div className="font-semibold text-gray-800">{day.day}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {day.places.join(' → ')}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIDDEN GEMS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-2xl">💎</span>
            <h2 className="text-3xl font-bold text-gray-800">Hidden Gems & Local Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {hiddenGems.map((gem, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-500">⭐</span>
                  <span className="text-xs text-amber-600 font-medium">LOCAL FAVORITE</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{gem.name}</h3>
                <p className="text-sm text-gray-600">{gem.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">💡 Local Tip</h3>
            <p className="text-gray-600">
              The best way to experience Azerbaijan is to venture beyond Baku. 
              Visit mountain villages, try local homestays, and ask locals for recommendations 
              - they often know the best spots not in guidebooks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Azerbaijan?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start planning your trip today and discover why Azerbaijan is becoming one of 
            the most exciting destinations in the world.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/plan-trip" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Plan Your Trip
            </Link>
            <Link href="/contact" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
              Get Help
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
