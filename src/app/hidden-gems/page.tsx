import Link from 'next/link';

const gems = [
  {
    title: "Yanar Dag (Burning Mountain)",
    location: "Baku, Absheron Peninsula",
    description: "A natural gas fire that has been burning continuously for centuries, even in rain and snow. The flames emerge from sandstone, creating an eerie, surreal landscape especially impressive at dusk.",
    whySpecial: "One of only a few natural eternal fires in the world. The phenomenon is caused by subsurface hydrocarbon gases.",
    tip: "Visit after sunset for the most dramatic views. Combine with Ateshgah Fire Temple nearby.",
    coordinates: "40.4975° N, 49.8822° E"
  },
  {
    title: "Lahij Copper Village",
    location: "Ismailli region, 180km from Baku",
    description: "A medieval mountain village famous for handmade copperware, cobblestone streets, and traditional Azerbaijani architecture. Lahij masters use techniques unchanged for 800 years.",
    whySpecial: "UNESCO‑recognized craft tradition. The village is car‑free in the historic center, preserving authentic atmosphere.",
    tip: "Buy directly from artisans in their workshops. Try local honey and mountain tea.",
    coordinates: "40.8500° N, 48.3833° E"
  },
  {
    title: "Goygol Lake",
    location: "Goygol district, near Ganja",
    description: "A stunning alpine lake formed after the 1139 earthquake, with crystal‑clear turquoise water surrounded by dense forests of the Lesser Caucasus.",
    whySpecial: "One of Azerbaijan's most beautiful natural sites. The water is so pure it was once used as drinking water for the Russian Imperial Army.",
    tip: "Visit in late spring (May–June) when rhododendrons bloom around the lake. Wear sturdy shoes for hiking trails.",
    coordinates: "40.4086° N, 46.3250° E"
  },
  {
    title: "Shirvanshah's Bathhouse (Baku)",
    location: "Icheri Sheher, Baku Old City",
    description: "A perfectly preserved 15th‑century hammam below street level, showcasing medieval heating systems, marble pools, and intricate stonework.",
    whySpecial: "Rare example of medieval Islamic bath architecture still intact. The underground structure maintains constant temperature year‑round.",
    tip: "Hire a guide to explain the ingenious water‑heating system using wood‑fired khan.",
    coordinates: "40.3661° N, 49.8353° E"
  },
  {
    title: "Khinalug Ancient Village",
    location: "Quba region, 2,350m altitude",
    description: "Europe's highest continuously inhabited settlement, with 5,000‑year‑old stone houses, unique language, and traditions isolated from the outside world.",
    whySpecial: "The Khinalug people have their own language (unrelated to Azerbaijani) and distinct genetic heritage. The village offers panoramic views of the Caucasus.",
    tip: "Stay overnight in a guesthouse to experience village life. Bring warm clothing even in summer.",
    coordinates: "41.1781° N, 48.1264° E"
  },
  {
    title: "Besh Barmag Mountain (Five Fingers)",
    location: "Siyazan region, 70km north of Baku",
    description: "A mysterious rock formation resembling five giant fingers rising from the coastal plain, surrounded by legends of buried treasure and ancient rituals.",
    whySpecial: "Local folklore says the mountain points to hidden Khan treasures. It's a pilgrimage site believed to grant wishes.",
    tip: "Combine with a visit to the nearby Caspian Sea beaches. Best photographed in morning light.",
    coordinates: "40.9936° N, 49.2097° E"
  }
];

export default function HiddenGemsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        

        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Hidden Gems of Azerbaijan
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Beyond the famous landmarks, Azerbaijan hides extraordinary places known mainly to locals. Explore ancient villages, natural wonders, and secret historical sites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gems.map((gem, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-gray-900">{gem.title}</h2>
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {gem.location}
                    </p>
                    <p className="text-gray-700 mb-4">{gem.description}</p>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-blue-800 mb-1">Why it's special:</p>
                        <p className="text-blue-700 text-sm">{gem.whySpecial}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-green-800 mb-1">Local tip:</p>
                        <p className="text-green-700 text-sm">{gem.tip}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Coordinates: {gem.coordinates}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Explore These Gems</h2>
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Best Time</h3>
                    <p className="text-gray-600">Spring (April–June) and Autumn (September–October) offer pleasant weather and fewer tourists.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Safety</h3>
                    <p className="text-gray-600">All sites are safe for tourists. For remote villages like Khinalug, hire a local guide.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Guided Tours</h3>
                    <p className="text-gray-600">We offer small‑group tours to hidden gems. <Link href="/contact" className="text-primary underline">Contact us</Link> for custom itineraries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        
      </div>
    </>
  );
}
