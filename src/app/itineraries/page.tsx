import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const itineraries = [
  {
    id: 1,
    name: '3-Day Azerbaijan',
    tag: 'Short Trip',
    difficulty: 'Easy',
    description: 'Perfect for a quick introduction to Azerbaijan. Covers the highlights of Baku and a day trip to Gobustan.',
    days: [
      {
        day: 'Day 1',
        title: 'Baku Old City & Modern Wonders',
        activities: [
          'Morning: Visit Icherisheher (Old City)',
          'Explore Maiden Tower and Shirvanshah Palace',
          'Lunch at local restaurant in Old City',
          'Afternoon: Walk along Baku Boulevard',
          'Evening: View Flame Towers from Highland Park'
        ]
      },
      {
        day: 'Day 2',
        title: 'Gobustan & Ancient History',
        activities: [
          'Morning: Drive to Gobustan National Park',
          'See ancient rock carvings (6,000+ years old)',
          'Visit mud volcanoes',
          'Afternoon: Ateshgah Fire Temple',
          'Evening: Return to Baku, dinner in Fountain Square'
        ]
      },
      {
        day: 'Day 3',
        title: 'Modern Baku & Departure',
        activities: [
          'Morning: Heydar Aliyev Center',
          'Visit Carpet Museum',
          'Lunch at seaside restaurant',
          'Afternoon: Shopping at Taza Bazaar',
          'Evening: Departure or extend trip'
        ]
      }
    ]
  },
  {
    id: 2,
    name: '5-Day Azerbaijan',
    tag: 'Classic Trip',
    difficulty: 'Medium',
    description: 'The classic route including Baku, Gobustan, and the historic city of Sheki.',
    days: [
      {
        day: 'Day 1',
        title: 'Arrival & Baku Highlights',
        activities: ['Old City exploration', 'Flame Towers at sunset', 'Baku Boulevard walk']
      },
      {
        day: 'Day 2',
        title: 'Gobustan & Nature',
        activities: ['Rock carvings tour', 'Mud volcanoes', 'Caspian Sea views']
      },
      {
        day: 'Day 3',
        title: 'Journey to Sheki',
        activities: ['Drive through mountains', 'Scenic stops', 'Arrival in Sheki']
      },
      {
        day: 'Day 4',
        title: 'Sheki Exploration',
        activities: ['Khan Palace visit', 'Caravanserai tour', 'Local silk workshop']
      },
      {
        day: 'Day 5',
        title: 'Return & Departure',
        activities: ['Morning in Sheki', 'Drive back to Baku', 'Final shopping & departure']
      }
    ]
  },
  {
    id: 3,
    name: '7-Day Azerbaijan',
    tag: 'Complete Experience',
    difficulty: 'Medium',
    description: 'Comprehensive tour covering major cities, mountains, and coastal areas.',
    days: [
      {
        day: 'Day 1',
        title: 'Baku Arrival',
        activities: ['City orientation', 'Old City walk', 'Evening at Flame Towers']
      },
      {
        day: 'Day 2',
        title: 'Gobustan & Mud Volcanoes',
        activities: ['Rock art exploration', 'Mud volcano experience', 'Caspian coast']
      },
      {
        day: 'Day 3',
        title: 'Gabala Mountains',
        activities: ['Mountain drive', 'Cable car ride', 'Lake Nohur visit']
      },
      {
        day: 'Day 4',
        title: 'Sheki Historic City',
        activities: ['Khan Palace tour', 'Caravanserai stay option', 'Local crafts']
      },
      {
        day: 'Day 5',
        title: 'Lankaran Coast',
        activities: ['Drive to Caspian coast', 'Hirkan Forest walk', 'Beach relaxation']
      },
      {
        day: 'Day 6',
        title: 'Ganja Cultural City',
        activities: ['Nizami Mausoleum', 'City parks', 'Local cuisine']
      },
      {
        day: 'Day 7',
        title: 'Return to Baku & Departure',
        activities: ['Morning shopping', 'Last sightseeing', 'Airport transfer']
      }
    ]
  },
  {
    id: 4,
    name: '10-Day Azerbaijan',
    tag: 'Extended Experience',
    difficulty: 'Easy',
    description: 'Relaxed pace covering all major destinations plus hidden gems.',
    days: [
      { day: 'Day 1-2', title: 'Baku Deep Dive', activities: ['Full city exploration'] },
      { day: 'Day 3-4', title: 'Gobustan & Surroundings', activities: ['National parks & nature'] },
      { day: 'Day 5-6', title: 'Sheki & North', activities: ['Historic cities & mountains'] },
      { day: 'Day 7-8', title: 'Lankaran & South', activities: ['Coast & forests'] },
      { day: 'Day 9-10', title: 'Gabala & Departure', activities: ['Mountain resorts & return'] }
    ]
  }
];

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Suggested Itineraries</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Choose the perfect itinerary for your trip to Azerbaijan. 
              From quick city breaks to comprehensive exploration.
            </p>
          </div>
        </section>

        {/* Itineraries Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itineraries.map((itinerary) => (
                <div key={itinerary.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">{itinerary.name}</h3>
                      <span className="bg-white/20 text-xs px-3 py-1 rounded-full">
                        {itinerary.tag}
                      </span>
                    </div>
                    <p className="text-blue-200 text-sm">{itinerary.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span>📋 {itinerary.difficulty}</span>
                      <span>📍 {itinerary.days.length} Days</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {itinerary.days.map((day, index) => (
                        <div key={index} className="border-l-2 border-blue-200 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-blue-600">{day.day}</span>
                            <span className="text-gray-500 text-sm">{day.title}</span>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1 ml-2">
                            {day.activities.map((activity, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="text-blue-300">•</span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Planning Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🗓️</div>
                <h3 className="font-semibold mb-2">Best Seasons</h3>
                <p className="text-sm text-gray-600">April-June and September-October offer best weather.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-semibold mb-2">Transport</h3>
                <p className="text-sm text-gray-600">Consider car rental for multi-city itineraries.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏨</div>
                <h3 className="font-semibold mb-2">Accommodation</h3>
                <p className="text-sm text-gray-600">Book ahead for peak seasons in resort areas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
