export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Smartholiday.az | Smart Holiday Travel",
    "description": "Your complete travel guide to Azerbaijan. Discover cities, attractions, tours, restaurants, and hidden gems.",
    "url": "https://smartholiday.az",
    "telephone": "+994702166666",
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
