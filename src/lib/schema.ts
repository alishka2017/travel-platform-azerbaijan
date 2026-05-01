// Schema.org structured data components
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Smartholiday.az",
  "url": "https://smartholidayaz.netlify.app",
  "logo": "https://smartholidayaz.netlify.app/logo.png",
  "description": "Your complete guide to Azerbaijan. Discover hotels, experiences, restaurants, and tours.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nizami str. 100",
    "addressLocality": "Baku",
    "addressCountry": "Azerbaijan",
    "postalCode": "AZ1026"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+994 12 493 62 42",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+994 70 216 66 66",
      "contactType": "WhatsApp"
    }
  ]
});

export const getCitySchema = (city: any) => ({
  "@context": "https://schema.org",
  "@type": "City",
  "name": city.name,
  "description": city.description,
  "containedInPlace": {
    "@type": "Country",
    "name": "Azerbaijan"
  }
});

export const getTourSchema = (tour: any) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": tour.name,
  "description": tour.description,
  "touristType": "CulturalTour",
  "offers": {
    "@type": "Offer",
    "price": tour.price,
    "priceCurrency": "AZN"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Azerbaijan"
  }
});

export const getBreadcrumbSchema = (items: { name: string; item?: string; url?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

// Backwards compatible exports
export const generateCitySchema = (name: string, description?: string, attractions?: string[]) => ({
  "@context": "https://schema.org",
  "@type": "City",
  "name": name,
  "description": description,
  "containedInPlace": {
    "@type": "Country",
    "name": "Azerbaijan"
  },
  "touristAttraction": attractions?.map(a => ({
    "@type": "TouristAttraction",
    "name": a
  }))
});
export const generatePlaceSchema = (place: any) => ({
  "@context": "https://schema.org",
  "@type": place.type || "TouristAttraction",
  "name": place.name,
  "description": place.description,
  "image": place.image,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": place.city || "Baku",
    "addressCountry": "Azerbaijan"
  }
});
export const generateBreadcrumbSchema = getBreadcrumbSchema;
export const generateWebSiteSchema = () => getOrganizationSchema();
export const generateItinerarySchema = (itinerary: any) => ({
  "@context": "https://schema.org",
  "@type": "Trip",
  "name": itinerary.name,
  "description": itinerary.description,
  "startDate": itinerary.startDate,
  "endDate": itinerary.endDate
});
