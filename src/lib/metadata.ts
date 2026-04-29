import { Metadata } from "next";
import { places, getCityBySlug } from "@/data/places";

export function generatePlaceMetadata(placeId: string): Metadata {
  const place = places.find((p) => p.id === placeId);
  
  if (!place) {
    return {
      title: "Page Not Found | Azerbaijan Travel",
      description: "The page you're looking for doesn't exist.",
    };
  }

  const title = `${place.name} | ${place.city} | Azerbaijan Travel Guide`;
  const description = place.description;

  return {
    title,
    description,
    keywords: [
      place.name,
      place.city,
      place.category,
      "Azerbaijan",
      "travel guide",
      ...place.tags,
    ],
    metadataBase: new URL("https://azerbaijantravel.com"),
    alternates: {
      canonical: `/${place.category.toLowerCase()}/${place.id}`,
    },
    openGraph: {
      title: `${place.name} | ${place.city} | Azerbaijan Travel`,
      description,
      url: `https://azerbaijantravel.com/${place.category.toLowerCase()}/${place.id}`,
      siteName: "Azerbaijan Travel Platform",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: place.image,
          width: 1280,
          height: 720,
          alt: place.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [place.image],
    },
  };
}

export function generateTourMetadata(tourId: string): Metadata {
  const tour = places.find((p) => p.id === tourId && p.category === "Tours");
  
  if (!tour) {
    return {
      title: "Tour Not Found | Azerbaijan Travel",
      description: "The tour you're looking for doesn't exist.",
    };
  }

  const title = `${tour.name} | Book Now | Azerbaijan Travel`;
  const description = `${tour.description} Book this tour at ${tour.priceLevel}.`;

  return {
    title,
    description,
    keywords: [
      tour.name,
      "tour",
      "experience",
      "Azerbaijan",
      tour.city,
      ...tour.tags,
    ],
    metadataBase: new URL("https://azerbaijantravel.com"),
    alternates: {
      canonical: `/tours/${tour.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://azerbaijantravel.com/tours/${tour.id}`,
      siteName: "Azerbaijan Travel Platform",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: tour.image,
          width: 1280,
          height: 720,
          alt: tour.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tour.image],
    },
  };
}

export function generateRestaurantMetadata(restaurantId: string): Metadata {
  const restaurant = places.find((p) => p.id === restaurantId && p.category === "Restaurants");
  
  if (!restaurant) {
    return {
      title: "Restaurant Not Found | Azerbaijan Travel",
      description: "The restaurant you're looking for doesn't exist.",
    };
  }

  const title = `${restaurant.name} | ${restaurant.city} | Azerbaijan Restaurants`;
  const description = `${restaurant.description} ${restaurant.priceLevel ? `Price range: ${restaurant.priceLevel}.` : ""}`;

  return {
    title,
    description,
    keywords: [
      restaurant.name,
      "restaurant",
      restaurant.city,
      "Azerbaijan cuisine",
      "food",
      ...restaurant.tags,
    ],
    metadataBase: new URL("https://azerbaijantravel.com"),
    alternates: {
      canonical: `/restaurants/${restaurant.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://azerbaijantravel.com/restaurants/${restaurant.id}`,
      siteName: "Azerbaijan Travel Platform",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: restaurant.image,
          width: 1280,
          height: 720,
          alt: restaurant.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [restaurant.image],
    },
  };
}

export function generateAttractionMetadata(attractionId: string): Metadata {
  const attraction = places.find((p) => p.id === attractionId);
  
  if (!attraction) {
    return {
      title: "Attraction Not Found | Azerbaijan Travel",
      description: "The attraction you're looking for doesn't exist.",
    };
  }

  const title = `${attraction.name} | ${attraction.city} | Azerbaijan Attractions`;
  const description = attraction.description;

  return {
    title,
    description,
    keywords: [
      attraction.name,
      "attraction",
      attraction.city,
      "Azerbaijan",
      ...attraction.tags,
    ],
    metadataBase: new URL("https://azerbaijantravel.com"),
    alternates: {
      canonical: `/attractions/${attraction.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://azerbaijantravel.com/attractions/${attraction.id}`,
      siteName: "Azerbaijan Travel Platform",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: attraction.image,
          width: 1280,
          height: 720,
          alt: attraction.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [attraction.image],
    },
  };
}

export function generateCityMetadata(citySlug: string): Metadata {
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: "City Not Found | Azerbaijan Travel",
      description: "The city you're looking for doesn't exist.",
    };
  }

  const title = `${city.name} | Azerbaijan Travel Guide | Places to Visit & Stay`;
  const description = city.description;

  return {
    title,
    description,
    keywords: [city.name, city.country, "travel guide", "tourism", "Azerbaijan"],
    metadataBase: new URL("https://azerbaijantravel.com"),
    alternates: {
      canonical: `/cities/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://azerbaijantravel.com/cities/${city.slug}`,
      siteName: "Azerbaijan Travel Platform",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: city.heroImage,
          width: 1280,
          height: 720,
          alt: `${city.name} skyline`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [city.heroImage],
    },
  };
}
