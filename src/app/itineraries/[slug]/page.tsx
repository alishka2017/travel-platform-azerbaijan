import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';

interface ItineraryItem {
  time: string;
  activity: string;
  description: string;
  location: string;
  duration: string;
  cost?: string;
}

interface Itinerary {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  days: {
    day: number;
    title: string;
    summary: string;
    schedule: ItineraryItem[];
  }[];
  totalCost: string;
  bestFor: string;
  transport: string;
}

const itineraries: Record<string, Itinerary> = {
  '1-day': {
    title: 'Baku Highlights in One Day',
    duration: '1 day',
    description: 'Perfect for layovers or short visits. Experience Baku's iconic landmarks, Old City charm, and modern architecture in a single packed day.',
    highlights: [
      'Explore UNESCO‑listed Icheri Sheher (Old City)',
      'Visit the Palace of the Shirvanshahs',
      'See the iconic Flame Towers up close',
      'Enjoy panoramic views from Highland Park',
      'Walk along the Baku Boulevard by the Caspian Sea'
    ],
    days: [
      {
        day: 1,
        title: 'Baku Intensive',
        summary: 'Historic core, modern landmarks, and evening seaside stroll.',
        schedule: [
          { time: '08:00', activity: 'Breakfast at a local café', description: 'Try traditional Azerbaijani breakfast with tea, honey, and butter', location: 'Near Fountains Square', duration: '45 min', cost: '5–10 AZN' },
          { time: '09:00', activity: 'Icheri Sheher (Old City) walking tour', description: 'Explore Maiden Tower, caravanserais, medieval streets', location: 'Icheri Sheher', duration: '2 hours', cost: 'Free (guide optional 20 AZN)' },
          { time: '11:00', activity: 'Palace of the Shirvanshahs', description: '15th‑century royal complex with palace, mosque, bathhouse', location: 'Old City', duration: '1 hour', cost: '15 AZN entry' },
          { time: '12:30', activity: 'Lunch at traditional restaurant', description: 'Plov, kebabs, salad, local bread', location: 'Old City restaurant', duration: '1 hour', cost: '15–25 AZN' },
          { time: '14:00', activity: 'Museum of Miniature Books', description: 'Unique collection of tiny books, Guinness record holder', location: 'Old City', duration: '30 min', cost: '5 AZN' },
          { time: '15:00', activity: 'Flame Towers & Highland Park', description: 'Take taxi to park, best photo spot of Baku skyline', location: 'Highland Park', duration: '1.5 hours', cost: 'Taxi 5 AZN' },
          { time: '16:30', activity: 'Heydar Aliyev Center (exterior)', description: 'Architectural masterpiece by Zaha Hadid, photo stop', location: 'Heydar Aliyev Center', duration: '45 min', cost: 'Free (exterior)' },
          { time: '17:30', activity: 'Baku Boulevard & Little Venice', description: 'Leisurely walk along Caspian, boat ride optional', location: 'Baku Boulevard', duration: '1.5 hours', cost: 'Boat 10 AZN' },
          { time: '19:30', activity: 'Dinner with view of Flame Towers', description: 'Modern Azerbaijani cuisine, rooftop restaurant', location: 'Flame Towers area', duration: '1.5 hours', cost: '30–50 AZN' },
        ]
      }
    ],
    totalCost: '~100–150 AZN per person (excluding accommodation)',
    bestFor: 'Solo travelers, couples, layovers',
    transport: 'Taxi/walking (Old City is pedestrian)'
  },
  '3-days': {
    title: 'Baku & Beyond: 3‑Day Exploration',
    duration: '3 days',
    description: 'Discover Baku's highlights plus day trips to Absheron Peninsula's natural wonders and the ancient fire worship sites.',
    highlights: [
      'Full day in Baku Old City and museums',
      'Visit Ateshgah Fire Temple and Yanar Dag',
      'See the mud volcanoes of Gobustan',
      'Explore the modern Baku waterfront',
      'Traditional dinner with live music'
    ],
    days: [
      {
        day: 1,
        title: 'Baku Historical Core',
        summary: 'Old City, museums, Flame Towers, evening boulevard.',
        schedule: [
          { time: '09:00', activity: 'Old City comprehensive tour', description: 'Maiden Tower, Shirvanshah Palace, caravanserais', location: 'Icheri Sheher', duration: '3 hours' },
          { time: '13:00', activity: 'Lunch at local eatery', description: 'Dushbara soup, kutab, fresh salad', location: 'Old City', duration: '1 hour' },
          { time: '14:30', activity: 'National Museum of History', description: 'Azerbaijan archaeology, ethnography, carpets', location: 'H. Z. Taghiyev St.', duration: '2 hours' },
          { time: '17:00', activity: 'Flame Towers & shopping', description: 'Visit shopping mall, photo session', location: 'Flame Towers', duration: '2 hours' },
          { time: '19:30', activity: 'Dinner at traditional restaurant', description: 'Kebab, plov, live mugham music', location: 'City center', duration: '2 hours' },
        ]
      },
      {
        day: 2,
        title: 'Absheron Peninsula Wonders',
        summary: 'Fire Temple, burning mountain, mud volcanoes.',
        schedule: [
          { time: '09:00', activity: 'Ateshgah Fire Temple', description: 'Ancient Zoroastrian temple, fire altars', location: 'Surakhani', duration: '1.5 hours' },
          { time: '11:00', activity: 'Yanar Dag (Burning Mountain)', description: 'Natural eternal flames, scenic views', location: 'Absheron', duration: '1 hour' },
          { time: '12:30', activity: 'Lunch by the sea', description: 'Grilled fish, vegetable meze', location: 'Caspian coast restaurant', duration: '1 hour' },
          { time: '14:00', activity: 'Gobustan Mud Volcanoes', description: 'Lunar landscape, bubbling mud cones', location: 'Gobustan', duration: '2 hours' },
          { time: '16:30', activity: 'Gobustan Rock Art Museum', description: 'UNESCO prehistoric petroglyphs', location: 'Gobustan Reserve', duration: '1.5 hours' },
          { time: '18:30', activity: 'Return to Baku', description: 'Scenic drive through semi‑desert', location: 'Highway', duration: '1 hour' },
          { time: '20:00', activity: 'Free evening', description: 'Optional Caravanserai visit', location: 'Old City', duration: 'Flexible' },
        ]
      },
      {
        day: 3,
        title: 'Modern Baku & Departure',
        summary: 'Heydar Aliyev Center, Baku Boulevard, souvenir shopping.',
        schedule: [
          { time: '10:00', activity: 'Heydar Aliyev Center tour', description: 'Architecture exhibition, interior photography', location: 'Heydar Aliyev Center', duration: '2 hours' },
          { time: '12:30', activity: 'Lunch at modern café', description: 'International cuisine, coffee', location: 'Port Baku area', duration: '1 hour' },
          { time: '14:00', activity: 'Baku Boulevard & Little Venice', description: 'Boat ride, Ferris wheel, relaxation', location: 'Baku Boulevard', duration: '2 hours' },
          { time: '16:00', activity: 'Souvenir shopping', description: 'Carpets, pomegranate products, local crafts', location: 'Nizami Street', duration: '1.5 hours' },
          { time: '18:00', activity: 'Transfer to airport', description: 'Depending on flight schedule', location: 'Hotel to airport', duration: '30 min' },
        ]
      }
    ],
    totalCost: '~300–450 AZN per person (excluding accommodation)',
    bestFor: 'First‑time visitors, families, small groups',
    transport: 'Car with driver (recommended for day trips)'
  },
  '7-days': {
    title: 'Azerbaijan Grand Tour: Baku, Mountains & Culture',
    duration: '7 days',
    description: 'Complete journey from Baku to the Caucasus mountains, visiting ancient cities, remote villages, and natural wonders.',
    highlights: [
      '3 days in Baku and Absheron',
      'Trip to Sheki with palace and caravanserai',
      'Gabala mountain resort and Nohur Lake',
      'Guba apple orchards and Khinalug village',
      'Traditional crafts, cuisine, and hospitality'
    ],
    days: [
      {
        day: 1,
        title: 'Baku Arrival & Old City',
        summary: 'Arrival, check‑in, evening Old City walk.',
        schedule: [
          { time: '14:00', activity: 'Airport pickup & hotel check‑in', description: 'Transfer to centrally located hotel', location: 'Baku', duration: '1 hour' },
          { time: '16:00', activity: 'Orientation walk', description: 'Fountains Square, Nizami Street', location: 'City center', duration: '2 hours' },
          { time: '18:30', activity: 'Welcome dinner', description: 'Traditional Azerbaijani feast', location: 'Old City restaurant', duration: '2 hours' },
        ]
      },
      {
        day: 2,
        title: 'Baku Highlights',
        summary: 'Full day exploring Baku’s key sites.',
        schedule: [
          { time: '09:30', activity: 'Old City guided tour', description: 'Maiden Tower, Shirvanshah Palace, museums', location: 'Icheri Sheher', duration: '3 hours' },
          { time: '13:00', activity: 'Lunch', description: 'Local restaurant', location: 'Old City', duration: '1 hour' },
          { time: '14:30', activity: 'National Carpet Museum', description: 'World‑class collection of Azerbaijani carpets', location: 'Baku Boulevard', duration: '1.5 hours' },
          { time: '16:30', activity: 'Flame Towers & Highland Park', description: 'Panoramic views, photography', location: 'Highland Park', duration: '1.5 hours' },
          { time: '18:30', activity: 'Baku Boulevard sunset walk', description: 'Caspian Sea views, evening atmosphere', location: 'Baku Boulevard', duration: '1.5 hours' },
        ]
      },
      {
        day: 3,
        title: 'Absheron & Gobustan',
        summary: 'Day trip to fire temples and mud volcanoes.',
        schedule: [
          { time: '09:00', activity: 'Ateshgah Fire Temple', description: 'Zoroastrian heritage site', location: 'Surakhani', duration: '1.5 hours' },
          { time: '11:00', activity: 'Yanar Dag', description: 'Burning mountain natural phenomenon', location: 'Absheron', duration: '1 hour' },
          { time: '13:00', activity: 'Lunch in Gobustan', description: 'Local cuisine', location: 'Gobustan village', duration: '1 hour' },
          { time: '14:30', activity: 'Gobustan Mud Volcanoes', description: 'Otherworldly landscape', location: 'Gobustan', duration: '2 hours' },
          { time: '17:00', activity: 'Gobustan Rock Art', description: 'Prehistoric petroglyphs museum', location: 'Gobustan Reserve', duration: '1.5 hours' },
          { time: '19:00', activity: 'Return to Baku', description: 'Evening at leisure', location: 'Hotel', duration: '1 hour' },
        ]
      },
      {
        day: 4,
        title: 'Baku → Sheki',
        summary: 'Scenic drive to the mountain city of Sheki.',
        schedule: [
          { time: '08:00', activity: 'Depart Baku', description: 'Drive through Caucasian foothills', location: 'Baku‑Sheki highway', duration: '4 hours' },
          { time: '12:30', activity: 'Arrival Sheki, hotel check‑in', description: 'Traditional guesthouse or hotel', location: 'Sheki', duration: '1 hour' },
          { time: '13:30', activity: 'Lunch', description: 'Sheki specialties: piti, halva', location: 'Sheki restaurant', duration: '1 hour' },
          { time: '15:00', activity: 'Sheki Khan Palace', description: 'UNESCO site, stunning stained glass', location: 'Sheki Fortress', duration: '2 hours' },
          { time: '17:30', activity: 'Sheki Caravanserai', description: 'Historic merchant inn, craft shops', location: 'Sheki center', duration: '1.5 hours' },
          { time: '19:30', activity: 'Dinner with local family', description: 'Home‑cooked meal, hospitality', location: 'Sheki guesthouse', duration: '2 hours' },
        ]
      },
      {
        day: 5,
        title: 'Sheki → Gabala',
        summary: 'Mountain resort, Nohur Lake, cable car.',
        schedule: [
          { time: '09:00', activity: 'Sheki craft workshops', description: 'Stained glass, silk weaving demonstration', location: 'Sheki', duration: '2 hours' },
          { time: '11:00', activity: 'Drive to Gabala', description: 'Scenic mountain road', location: 'Sheki‑Gabala', duration: '1.5 hours' },
          { time: '12:30', activity: 'Gabala hotel check‑in', description: 'Mountain resort', location: 'Gabala', duration: '1 hour' },
          { time: '13:30', activity: 'Lunch', description: 'Gabala trout, mountain vegetables', location: 'Gabala restaurant', duration: '1 hour' },
          { time: '15:00', activity: 'Nohur Lake', description: 'Boat ride, photography', location: 'Gabala', duration: '2 hours' },
          { time: '17:30', activity: 'Gabaland & cable car', description: 'Amusement park, panoramic views', location: 'Gabala', duration: '2 hours' },
          { time: '20:00', activity: 'Dinner at resort', description: 'Evening relaxation', location: 'Gabala hotel', duration: '1.5 hours' },
        ]
      },
      {
        day: 6,
        title: 'Gabala → Guba → Khinalug → Baku',
        summary: 'Remote village, apple orchards, return to Baku.',
        schedule: [
          { time: '08:00', activity: 'Drive to Guba', description: 'Through mountain passes', location: 'Gabala‑Guba', duration: '2 hours' },
          { time: '10:00', activity: 'Guba apple orchards', description: 'Tour, tasting (seasonal)', location: 'Guba region', duration: '1.5 hours' },
          { time: '11:30', activity: 'Drive to Khinalug', description: 'Steep mountain road, 4x4 recommended', location: 'Guba‑Khinalug', duration: '1.5 hours' },
          { time: '13:00', activity: 'Khinalug village tour', description: 'Ancient stone houses, museum, viewpoints', location: 'Khinalug', duration: '2 hours' },
          { time: '15:00', activity: 'Lunch in Khinalug', description: 'Simple mountain meal', location: 'Khinalug guesthouse', duration: '1 hour' },
          { time: '16:30', activity: 'Return to Baku', description: 'Long drive back', location: 'Khinalug‑Baku', duration: '4 hours' },
          { time: '20:30', activity: 'Hotel check‑in, farewell dinner', description: 'Final evening in Baku', location: 'Baku', duration: '2 hours' },
        ]
      },
      {
        day: 7,
        title: 'Departure',
        summary: 'Last‑minute shopping, transfer to airport.',
        schedule: [
          { time: '10:00', activity: 'Free time / souvenir shopping', description: 'Nizami Street, local markets', location: 'Baku', duration: '2 hours' },
          { time: '12:00', activity: 'Lunch', description: 'Final Azerbaijani meal', location: 'Baku', duration: '1 hour' },
          { time: '14:00', activity: 'Airport transfer', description: 'Depending on flight schedule', location: 'Hotel to airport', duration: '30 min' },
        ]
      }
    ],
    totalCost: '~800–1200 AZN per person (including accommodation, transport, most meals)',
    bestFor: 'Adventure travelers, culture enthusiasts, photographers',
    transport: 'Private car with driver, some 4x4 for mountain villages'
  }
};

export default function ItineraryPage({ params }: { params: { slug: string } }) {
  const itinerary = itineraries[params.slug];

  if (!itinerary) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                {itinerary.duration} itinerary
              </span>
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {itinerary.title}
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {itinerary.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {itinerary.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Days */}
            <div className="space-y-12">
              {itinerary.days.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold">Day {day.day}</h3>
                        <p className="text-primary-100">{day.title}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Summary</p>
                        <p className="font-medium">{day.summary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Activity</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Duration</th>
                            {day.schedule.some(s => s.cost) && <th className="text-left py-3 px-4 font-semibold text-gray-700">Cost</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {day.schedule.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium text-gray-900">{item.time}</td>
                              <td className="py-3 px-4 font-medium">{item.activity}</td>
                              <td className="py-3 px-4 text-gray-700">{item.description}</td>
                              <td className="py-3 px-4 text-gray-600">{item.location}</td>
                              <td className="py-3 px-4 text-gray-600">{item.duration}</td>
                              {item.cost && <td className="py-3 px-4 text-gray-600">{item.cost}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Total Cost</h3>
                <p className="text-gray-700">{itinerary.totalCost}</p>
                <p className="text-sm text-gray-500 mt-2">Per person, estimates</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Best For</h3>
                <p className="text-gray-700">{itinerary.bestFor}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary">Transport</h3>
                <p className="text-gray-700">{itinerary.transport}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Book This Itinerary?</h3>
                <p className="mb-6 max-w-2xl mx-auto">
                  Customize this plan, adjust dates, add activities, or combine with other destinations.
                </p>
                <a
                  href="https://wa.me/994702166666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

// Generate static params
export async function generateStaticParams() {
  return Object.keys(itineraries).map((slug) => ({
    slug,
  }));
}

export const dynamicParams = false;
