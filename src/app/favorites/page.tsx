import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { getFavorites } from '@/lib/favorites-utils';

export default function FavoritesPage() {
  const favorites = getFavorites();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ❤️ My Favorites
          </h1>
          <p className="text-gray-600">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {favorites.length === 0 ? (
          // Empty State
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your favorites list is empty</h2>
            <p className="text-gray-500 mb-8">
              Start exploring and save your favorite places to see them here!
            </p>
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 bg-[#00AA6C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#008855] transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Explore Attractions
            </Link>
          </div>
        ) : (
          // Favorites Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <FavoriteCard key={favorite.id} favorite={favorite} />
            ))}
          </div>
        )}

        {/* Back to browsing CTA */}
        {favorites.length > 0 && (
          <div className="mt-16 text-center">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 text-[#00AA6C] font-medium hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add more favorites
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function FavoriteCard({ favorite }: { favorite: any }) {
  const getCategoryUrl = (type: string, id: string) => {
    switch (type) {
      case 'attraction':
        return `/attractions/${id}`;
      case 'restaurant':
        return `/restaurants/${id}`;
      case 'tour':
        return `/tours/${id}`;
      case 'city':
        return `/cities/${id}`;
      default:
        return '/';
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'attraction':
        return 'bg-blue-100 text-blue-800';
      case 'restaurant':
        return 'bg-orange-100 text-orange-800';
      case 'tour':
        return 'bg-purple-100 text-purple-800';
      case 'city':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link
      href={getCategoryUrl(favorite.type, favorite.id)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="relative h-48 bg-gray-200">
        {favorite.image ? (
          <img
            src={favorite.image}
            alt={favorite.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-4xl">
              {favorite.type === 'attraction' && '🏛️'}
              {favorite.type === 'restaurant' && '🍽️'}
              {favorite.type === 'tour' && '🚌'}
              {favorite.type === 'city' && '🏙️'}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium capitalize">
          {favorite.type}
        </div>
        {favorite.priceLevel && (
          <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
            {favorite.priceLevel}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 group-hover:text-[#00AA6C] transition mb-2 line-clamp-1">
          {favorite.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {favorite.city && `📍 ${favorite.city}`}
          </span>
          {favorite.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600">{favorite.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
