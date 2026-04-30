import { MetadataRoute } from 'next'
import { cities, places } from '@/data/places'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://azerbaijan-travel-platform.vercel.app'
  const now = new Date().toISOString()

  const routes = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/cities`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/attractions`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/restaurants`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/hotels`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/tours`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/things-to-do`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/visa`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/insurance`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/transfers`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/excursions`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/rental`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/itineraries`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/favorites`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/hidden-gems`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Add city pages
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Add attraction pages
  const attractionPages = places
    .filter(p => p.category !== 'Restaurants' && p.category !== 'Hotels' && p.category !== 'Tours')
    .map(place => ({
      url: `${baseUrl}/attractions/${place.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // Add restaurant pages
  const restaurantPages = places
    .filter(p => p.category === 'Restaurants')
    .map(place => ({
      url: `${baseUrl}/restaurants/${place.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // Add tour pages
  const tourPages = places
    .filter(p => p.category === 'Tours')
    .map(place => ({
      url: `${baseUrl}/tours/${place.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...routes, ...cityPages, ...attractionPages, ...restaurantPages, ...tourPages]
}