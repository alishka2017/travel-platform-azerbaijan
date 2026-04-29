import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const hiddenGems = [
  {
    name: 'Lahij Village',
    location: 'Ismailli District',
    description: 'Ancient mountain village famous for copper crafts and stone architecture.',
    whyVisit: 'Authentic village life, local crafts, stunning mountain views.',
    tip: 'Visit the copper workshop and try traditional water from the springs.'
  },
  {
    name: 'Khinalig',
    location: 'Quba District',
    description: 'One of the highest villages in Azerbaijan, accessible by a dramatic mountain road.',
    whyVisit: 'Unique ancient culture, breathtaking views, traditional stone houses.',
    tip: 'Bring warm clothes even in summer - high altitude means cool temperatures.'
  },
  {
    name: 'Goygol Lake',
    location: 'Ganja Region',
    description: 'Crystal-clear mountain lake surrounded by lush forests.',
    whyVisit: 'Perfect for hiking, picnics, and photography.',
    tip: 'Best visited in late spring when flowers are in bloom.'
  },
  {
    name: 'Girdiman Valley',
    location: 'Goychay District',
    description: 'Hidden valley with waterfalls, hiking trails, and traditional villages.',
    whyVisit: 'Escape the crowds and experience rural Azerbaijan.',
    tip: 'Hire a local guide to explore the best trails.'
  },
  {
    name: 'Tangaltan Waterfall',
    location: 'Shaki District',
    description: 'Hidden waterfall accessible through a scenic forest hike.',
    whyVisit: 'Peaceful nature spot away from tourist trails.',
    tip: 'Wear comfortable shoes for the forest trail.'
  },
  {
    name: 'Local Tea Houses',
    location: 'Various Regions',
    description: 'Traditional tea experiences in small villages and towns.',
    whyVisit: 'Authentic cultural experience with locals.',
    tip: 'Accept tea when offered - it\'s a sign of hospitality.'
  },
  {
    name: 'Mountain Monasteries',
    location: 'Quba & Sheki Regions',
    description: 'Ancient Christian monasteries in remote mountain settings.',
    whyVisit: 'Historical significance and peaceful atmosphere.',
    tip: 'Dress respectfully when visiting religious sites.'
  },
  {
    name: 'Village Markets',
    location: 'Small Towns',
    description: 'Weekly local markets with fresh produce and handmade goods.',
    whyVisit: 'Experience local life and taste regional specialties.',
    tip: 'Go early morning for the best selection.'
  }
];

const localTips = [
  'Ask locals for recommendations - they often know the best non-touristy spots.',
  'Carry some cash - not all small shops accept cards.',
  'Learn basic Azerbaijani phrases - locals appreciate the effort.',
  'Respect dress codes when visiting religious sites.',
  'Try food from street vendors - often the most authentic.',
  'Be flexible with plans - local discoveries happen unexpectedly.',
  'Visit markets in the morning for the best experience.',
  'Take time to sit in tea houses - it\'s part of the culture.'
];

export default function HiddenGemsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">💎 Hidden Gems & Local Tips</h1>
            <p className="text-amber-100 text-lg max-w-2xl mx-auto">
              Discover the lesser-known treasures of Azerbaijan with insider knowledge 
              from local travelers.
            </p>
          </div>
        </section>

        {/* Gems Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiddenGems.map((gem, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-amber-400 to-orange-500 relative">
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition"></div>
                    <div className="absolute bottom-2 left-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {gem.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 mb-2">{gem.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{gem.description}</p>
                    <div className="bg-amber-50 rounded p-2 mb-3">
                      <p className="text-xs text-amber-800">
                        <strong>Why visit:</strong> {gem.whyVisit}
                      </p>
                    </div>
                    <p className="text-xs text-blue-600">
                      <strong>💡 Tip:</strong> {gem.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Tips */}
        <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Essential Local Tips</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {localTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <span className="text-amber-500">💡</span>
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Ready to Discover?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              These are just a few of the hidden gems waiting to be discovered in Azerbaijan. 
              The best adventures often happen when you least expect them.
            </p>
            <Link href="/plan-trip" className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">
              Start Planning
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
