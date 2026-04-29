import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const planOptions = [
  {
    title: 'Short Trip (3-5 Days)',
    description: 'Perfect for a quick getaway to explore the highlights.',
    color: 'blue',
    icon: '✈️',
    details: [
      'Focus on Baku and one nearby destination',
      'Highlights: Old City, Gobustan, Flame Towers',
      'Budget: $300-600 per person'
    ]
  },
  {
    title: 'Classic Trip (7 Days)',
    description: 'The essential Azerbaijan experience covering major cities.',
    color: 'green',
    icon: '🎒',
    details: [
      'Baku, Sheki, Gabala',
      'Mix of culture, nature, and history',
      'Budget: $700-1,200 per person'
    ]
  },
  {
    title: 'Extended Trip (10-14 Days)',
    description: 'Deep dive into all regions of Azerbaijan.',
    color: 'purple',
    icon: '🏔️',
    details: [
      'All major cities and hidden gems',
      'Including Lankaran coast and mountain villages',
      'Budget: $1,200-2,000 per person'
    ]
  }
];

const budgetRanges = [
  { range: 'Budget ($30-50/day)', desc: 'Hostels, local transport, street food' },
  { range: 'Mid-Range ($70-120/day)', desc: '3-star hotels, mix of transport, some tours' },
  { range: 'Luxury ($200+/day)', desc: '5-star hotels, private tours, fine dining' }
];

export default function PlanTripPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Azerbaijan Trip</h1>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">
              Let us help you plan the perfect trip to Azerbaijan. 
              From quick city breaks to extended adventures.
            </p>
          </div>
        </section>

        {/* Trip Duration Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Trip Length</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`p-6 text-white ${
                    option.color === 'blue' ? 'bg-blue-600' :
                    option.color === 'green' ? 'bg-green-600' :
                    'bg-purple-600'
                  }`}>
                    <span className="text-2xl">{option.icon}</span>
                    <h3 className="font-bold text-xl mt-2">{option.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{option.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {option.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/itineraries`} 
                      className="mt-4 block text-center bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      View Itineraries
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Guide */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Budget Planning</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {budgetRanges.map((budget, index) => (
                <div key={index} className="bg-white rounded-lg p-5 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">{budget.range}</h3>
                  <p className="text-sm text-gray-500">{budget.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Checklist */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Planning Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="text-2xl mb-3">🛂</div>
                <h3 className="font-semibold mb-2">Check Visa</h3>
                <p className="text-sm text-gray-600">Verify entry requirements for your nationality.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="text-2xl mb-3">📅</div>
                <h3 className="font-semibold mb-2">Pick Dates</h3>
                <p className="text-sm text-gray-600">Choose the best season for your interests.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="text-2xl mb-3">🏨</div>
                <h3 className="font-semibold mb-2">Book Stays</h3>
                <p className="text-sm text-gray-600">Reserve accommodation in advance for peak seasons.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="text-2xl mb-3">🚙</div>
                <h3 className="font-semibold mb-2">Transport</h3>
                <p className="text-sm text-gray-600">Plan how you'll get around (car, train, bus).</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-green-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Need Help Planning?</h2>
            <p className="text-green-200 mb-6 max-w-2xl mx-auto">
              Contact us for personalized travel advice and recommendations.
            </p>
            <Link href="/contact" className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
