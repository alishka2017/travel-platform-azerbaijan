import Link from 'next/link';

const categories = [
  {
    title: 'Cultural Experiences',
    icon: '🎭',
    description: 'Immerse yourself in Azerbaijan\'s rich cultural heritage.',
    items: [
      { name: 'Visit Old City Baku', desc: 'Walk through the ancient walls of Icherisheher.' },
      { name: 'Sheki Palace Tour', desc: 'Explore the stunning 18th-century architecture.' },
      { name: 'Carpet Weaving', desc: 'Watch traditional carpet making process.' },
      { name: 'Mugham Music', desc: 'Listen to traditional Azerbaijani music.' },
      { name: 'Visit Ancient Mosques', desc: 'Discover historic Islamic architecture.' }
    ]
  },
  {
    title: 'Nature Trips',
    icon: '🏔️',
    description: 'Explore the natural beauty of Azerbaijan.',
    items: [
      { name: 'Gobustan Exploration', desc: 'See ancient rock carvings and volcanoes.' },
      { name: 'Hirkan Forest Hike', desc: 'Trek through ancient Caspian forest.' },
      { name: 'Mountain Skiing', desc: 'Ski slopes in Gabala and Shahdag.' },
      { name: 'Caspian Beaches', desc: 'Relax on coastal beaches in Lankaran.' },
      { name: 'Mountain Villages', desc: 'Visit remote highland communities.' }
    ]
  },
  {
    title: 'Food Experiences',
    icon: '🍽️',
    description: 'Taste the delicious cuisine of Azerbaijan.',
    items: [
      { name: 'Plov Tasting', desc: 'Try national dish with saffron rice.' },
      { name: 'Dolma Experience', desc: 'Taste stuffed vegetables and grape leaves.' },
      { name: 'Tea Ceremony', desc: 'Traditional tea with local sweets.' },
      { name: 'Kebab Tour', desc: 'Sample grilled meats at local spots.' },
      { name: 'Sweet Shop Visit', desc: 'Try pakhlava and shekerbura.' }
    ]
  },
  {
    title: 'Nightlife',
    icon: '🌙',
    description: 'Experience the nightlife scene.',
    items: [
      { name: 'Baku Bars', desc: 'Trendy bars in Fountain Square area.' },
      { name: 'Jazz Clubs', desc: 'Live music in historic venues.' },
      { name: 'Rooftop Lounges', desc: 'Drinks with city skyline views.' },
      { name: 'Beach Clubs', desc: 'Summer parties by the Caspian Sea.' },
      { name: 'Cultural Shows', desc: 'Traditional dance and music performances.' }
    ]
  }
];

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Things to Do in Azerbaijan</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              From cultural experiences to outdoor adventures, discover the best activities 
              and experiences Azerbaijan has to offer.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{category.icon}</span>
                      <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <div>
                            <span className="font-medium text-gray-800">{item.name}:</span>
                            <span className="text-gray-600 ml-1">{item.desc}</span>
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

        {/* Quick Tips */}
        <section className="py-12 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Pro Tips for Travelers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Local Apps</h3>
                <p className="text-sm text-blue-200">Download Bolt and Yandex Go for easy transportation.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">Cash is King</h3>
                <p className="text-sm text-blue-200">Always carry some cash for small shops and taxis.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl mb-3">🗣️</div>
                <h3 className="font-semibold mb-2">Basic Phrases</h3>
                <p className="text-sm text-blue-200">Learn "Salam" (Hello) and "Teshekkur" (Thank you).</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
