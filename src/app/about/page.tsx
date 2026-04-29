import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AzerbaijanTravel</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Your complete guide to discovering the beauty and culture of Azerbaijan.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                AzerbaijanTravel was created with a simple goal: to help travelers discover 
                the incredible beauty and culture of Azerbaijan. We believe this fascinating 
                country at the crossroads of Europe and Asia deserves to be explored and appreciated.
              </p>
              <p className="text-gray-600">
                Our team of travel enthusiasts and local experts work together to provide 
                accurate, up-to-date information that helps you plan the perfect trip.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold mb-2">Comprehensive Guides</h3>
                <p className="text-sm text-gray-600">Detailed information about cities, attractions, and activities.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Local Tips</h3>
                <p className="text-sm text-gray-600">Insider knowledge from residents and frequent travelers.</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold mb-2">Trip Planning</h3>
                <p className="text-sm text-gray-600">Itineraries and planning tools for every type of traveler.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold mb-1">Accuracy</h3>
                  <p className="text-sm text-gray-600">We verify information to ensure it's correct and up-to-date.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">❤️</span>
                <div>
                  <h3 className="font-semibold mb-1">Passion</h3>
                  <p className="text-sm text-gray-600">We genuinely love Azerbaijan and want to share its beauty.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold mb-1">Sustainability</h3>
                  <p className="text-sm text-gray-600">We promote responsible tourism that benefits local communities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold mb-1">Community</h3>
                  <p className="text-sm text-gray-600">We connect travelers with local experiences and businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Ready to Explore Azerbaijan?</h2>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Start planning your trip today and discover why Azerbaijan is one of the 
              most exciting destinations in the world.
            </p>
            <Link href="/plan-trip" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Plan Your Trip
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
