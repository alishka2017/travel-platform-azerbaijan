import { Metadata } from "next";
import { places, getCityBySlug } from "@/data/places";

export function generatePlaceMetadata(placeId: string): Metadata {
  const place = places.find((p) => p.id === placeId);
  
  if (!place) {
    return {
      title: "Page Not Found | Smartholiday.az",
      description: "The page you're looking for doesn't exist.",
    };
  }

  const title = `${place.name} | ${place.city} | Smartholiday.az Travel Guide`;
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
      "Smartholiday.az",
      ...place.tags,
    ],
    metadataBase: new URL("https://travel-platform-azerbaijan.vercel.app"),
    alternates: {
      canonical: `/${place.category.toLowerCase()}/${place.id}`,
    },
    openGraph: {
      title: `${place.name} | ${place.city} | Smartholiday.az Travel`,
      description,
      url: `https://smartholiday.az/${place.category.toLowerCase()}/${place.id}`,
      siteName: "Smartholiday.az",
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
      title: "Tour Not Found | Smartholiday.az",
      description: "The tour you're looking for doesn't exist.",
    };
  }

  const title = `${tour.name} | Book Now | Smartholiday.az`;
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
      "Smartholiday.az",
      ...tour.tags,
    ],
    metadataBase: new URL("https://travel-platform-azerbaijan.vercel.app"),
    alternates: {
      canonical: `/tours/${tour.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartholiday.az/tours/${tour.id}`,
      siteName: "Smartholiday.az",
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
      title: "Restaurant Not Found | Smartholiday.az",
      description: "The restaurant you're looking for doesn't exist.",
    };
  }

  const title = `${restaurant.name} | ${restaurant.city} | Smartholiday.az Restaurants`;
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
      "Smartholiday.az",
      ...restaurant.tags,
    ],
    metadataBase: new URL("https://travel-platform-azerbaijan.vercel.app"),
    alternates: {
      canonical: `/restaurants/${restaurant.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartholiday.az/restaurants/${restaurant.id}`,
      siteName: "Smartholiday.az",
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
      title: "Attraction Not Found | Smartholiday.az",
      description: "The attraction you're looking for doesn't exist.",
    };
  }

  const title = `${attraction.name} | ${attraction.city} | Smartholiday.az Attractions`;
  const description = attraction.description;

  return {
    title,
    description,
    keywords: [
      attraction.name,
      "attraction",
      attraction.city,
      "Azerbaijan",
      "Smartholiday.az",
      ...attraction.tags,
    ],
    metadataBase: new URL("https://travel-platform-azerbaijan.vercel.app"),
    alternates: {
      canonical: `/attractions/${attraction.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartholiday.az/attractions/${attraction.id}`,
      siteName: "Smartholiday.az",
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
      title: "City Not Found | Smartholiday.az",
      description: "The city you're looking for doesn't exist.",
    };
  }

  const title = `${city.name} | Smartholiday.az Travel Guide | Places to Visit & Stay`;
  const description = city.description;

  return {
    title,
    description,
    keywords: [city.name, city.country, "travel guide", "tourism", "Azerbaijan", "Smartholiday.az"],
    metadataBase: new URL("https://travel-platform-azerbaijan.vercel.app"),
    alternates: {
      canonical: `/cities/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartholiday.az/cities/${city.slug}`,
      siteName: "Smartholiday.az",
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
