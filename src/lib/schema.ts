import { Place, City } from "@/data/places";

export function generatePlaceSchema(place: Place): object {
  const schemaType = place.category === "Restaurants" 
    ? "Restaurant" 
    : place.category === "Tours"
    ? "TouristAttraction"
    : "TouristAttraction";

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": place.name,
    "description": place.description,
    "url": `https://azerbaijantravel.com/attractions/${place.id}`,
    "image": place.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": place.address,
      "addressLocality": place.city,
      "addressCountry": "Azerbaijan"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": place.rating,
      "reviewCount": place.reviewsCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "geo": place.lat && place.lon ? {
      "@type": "GeoCoordinates",
      "latitude": place.lat,
      "longitude": place.lon
    } : undefined
  };

  if (place.category === "Restaurants") {
    return {
      ...baseSchema,
      "priceRange": place.priceLevel || "Moderate",
      "servesCuisine": place.tags.join(", "),
      "openingHours": place.openingHours
    };
  }

  return baseSchema;
}

export function generateCitySchema(city: City, places: Place[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "name": city.name,
    "description": city.description,
    "url": `https://azerbaijantravel.com/cities/${city.slug}`,
    "image": city.heroImage,
    "containedInPlace": {
      "@type": "Country",
      "name": city.country
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": city.region
    },
    "population": city.population,
    "touristAttraction": places
      .filter(p => p.category !== "Restaurants" && p.category !== "Tours")
      .slice(0, 10)
      .map(p => ({
        "@type": "TouristAttraction",
        "name": p.name,
        "description": p.description,
        "url": `https://azerbaijantravel.com/attractions/${p.id}`
      }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url })
    }))
  };
}

export function generateWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Azerbaijan Travel Platform",
    "description": "Your complete travel guide to Azerbaijan. Discover cities, attractions, tours, restaurants, and hidden gems.",
    "url": "https://azerbaijantravel.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://azerbaijantravel.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
