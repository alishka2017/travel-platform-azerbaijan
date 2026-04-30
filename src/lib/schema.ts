export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Smartholiday.az | Smart Holiday Travel",
    "description": "Your complete travel guide to Azerbaijan. Discover cities, attractions, tours, restaurants, and hidden gems.",
    "url": "https://smartholiday.az",
    "telephone": "+994****6666",
    "email": "info@smartholiday.az",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nizami str. 100",
      "addressLocality": "Baku",
      "addressRegion": "Baku",
      "postalCode": "AZ1026",
      "addressCountry": "Azerbaijan"
    },
    "priceRange": "$$-$$$",
    "openingHours": "Mo-Su 09:00-21:00",
    "currenciesAccepted": "AZN, USD, EUR",
    "sameAs": [
      "https://www.facebook.com/smartholiday.az/",
      "https://www.instagram.com/smartholiday.az/",
      "https://twitter.com/smartholidayaz"
    ]
  };
}

export function generateWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Smartholiday.az | Smart Holiday Travel",
    "url": "https://smartholiday.az",
    "description": "Your complete travel guide to Azerbaijan with Smartholiday.az. Explore Baku, Sheki, Gabala, and more. Discover tours, restaurants, hotels, and hidden gems.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://smartholiday.az/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smartholiday.az",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartholiday.az/logo.png",
        "width": 200,
        "height": 60
      }
    }
  };
}

export function generateCitySchema(cityName: string, description: string, attractions: string[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "name": cityName,
    "description": description,
    "containsPlace": attractions.map(attraction => ({
      "@type": "TouristAttraction",
      "name": attraction
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generatePlaceSchema(place: {
  name: string;
  description: string;
  image?: string;
  category?: string;
  type?: 'TouristAttraction' | 'Restaurant' | 'Tour';
  address?: string;
  telephone?: string;
  priceRange?: string;
  openingHours?: string;
  rating?: number;
  reviewCount?: number;
}): object {
  // Determine schema type from category or explicit type
  let schemaType: 'TouristAttraction' | 'Restaurant' | 'Tour' = 'TouristAttraction';
  if (place.type) {
    schemaType = place.type;
  } else if (place.category) {
    const cat = place.category.toLowerCase();
    if (cat.includes('restaurant') || cat === 'restaurants') {
      schemaType = 'Restaurant';
    } else if (cat.includes('tour') || cat === 'tours') {
      schemaType = 'Tour';
    } else {
      schemaType = 'TouristAttraction';
    }
  }
  
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": place.name,
    "description": place.description,
  };
  
  if (place.image) {
    baseSchema.image = place.image;
  }
  
  if (place.address) {
    baseSchema.address = {
      "@type": "PostalAddress",
      "streetAddress": place.address
    };
  }
  
  if (place.telephone) {
    baseSchema.telephone = place.telephone;
  }
  
  if (place.priceRange) {
    baseSchema.priceRange = place.priceRange;
  }
  
  if (place.openingHours) {
    baseSchema.openingHours = place.openingHours;
  }
  
  if (place.rating !== undefined && place.reviewCount !== undefined) {
    baseSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": place.rating,
      "reviewCount": place.reviewCount
    };
  }
  
  return baseSchema;
}

export function generateTourSchema(tour: {
  name: string;
  description: string;
  image?: string;
  priceLevel?: string;
  duration?: string;
  rating?: number;
  reviewCount?: number;
  highlights?: string[];
  includes?: string[];
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Tour",
    "name": tour.name,
    "description": tour.description,
    "image": tour.image,
    "offers": {
      "@type": "Offer",
      "price": tour.priceLevel || "Contact for price",
      "priceCurrency": "AZN",
      "availability": "https://schema.org/InStock"
    },
    "tourDifficulty": "Easy",
    "tourLength": tour.duration || "Flexible",
    "aggregateRating": tour.rating !== undefined && tour.reviewCount !== undefined ? {
      "@type": "AggregateRating",
      "ratingValue": tour.rating,
      "reviewCount": tour.reviewCount
    } : undefined,
    "itinerary": tour.highlights ? tour.highlights.map((highlight, index) => ({
      "@type": "TouristAttraction",
      "name": highlight,
      "position": index + 1
    })) : undefined
  };
}

export function generateRestaurantSchema(restaurant: {
  name: string;
  description: string;
  image?: string;
  address?: string;
  telephone?: string;
  priceRange?: string;
  openingHours?: string;
  rating?: number;
  reviewCount?: number;
  cuisine?: string[];
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "description": restaurant.description,
    "image": restaurant.image,
    "address": restaurant.address ? {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address
    } : undefined,
    "telephone": restaurant.telephone,
    "priceRange": restaurant.priceRange,
    "openingHours": restaurant.openingHours,
    "servesCuisine": restaurant.cuisine,
    "aggregateRating": restaurant.rating !== undefined && restaurant.reviewCount !== undefined ? {
      "@type": "AggregateRating",
      "ratingValue": restaurant.rating,
      "reviewCount": restaurant.reviewCount
    } : undefined
  };
}

export function generateItinerarySchema(itinerary: {
  name: string;
  description: string;
  duration: string;
  totalCost: string;
  bestFor: string;
  days: Array<{
    day: number;
    title: string;
    summary: string;
  }>;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Itinerary",
    "name": itinerary.name,
    "description": itinerary.description,
    "duration": itinerary.duration,
    "totalCost": itinerary.totalCost,
    "suitableFor": itinerary.bestFor,
    "itineraryDay": itinerary.days.map(day => ({
      "@type": "Schedule",
      "name": `Day ${day.day}: ${day.title}`,
      "description": day.summary
    }))
  };
}
