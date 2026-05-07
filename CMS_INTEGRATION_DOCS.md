# Smartholiday.az — CMS Integration Documentation

## Overview

This document describes the integration of Sanity CMS into the Smartholiday.az travel platform.

## Architecture

### Data Flow

```
JSON Files (src/lib/) → Migration Script → Sanity CMS API → Next.js App
```

### Components

1. **Sanity Schemas** (`src/sanity/schemas/`): Define content structure
2. **Data Layer** (`src/lib/groq-new.ts`): GROQ queries for fetching data
3. **API Client** (`src/lib/sanity-api.ts`): REST API client for Sanity
4. **Migration Script** (`scripts/migrate-to-sanity.js`): Migrate JSON data to Sanity

## Content Types

### 1. Tours (`tour`)
- Title, slug, image
- Duration, description
- Category (reference)
- Featured flag
- SEO fields

### 2. Cities (`city`)
- Title, slug, image
- Description, short description
- SEO fields

### 3. Restaurants (`restaurant`)
- Name, slug, image
- City (reference)
- Cuisine, rating
- Description, featured flag
- SEO fields

### 4. Blog Posts (`post`)
- Title, slug, image
- Excerpt, content (rich text)
- Author, published date
- SEO fields

### 5. Categories (`category`)
- Title, slug
- Description

### 6. Settings (`settings`)
- Site name, contact info
- Global SEO

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root:

```env
SANITY_PROJECT_ID=mk35mbbk
SANITY_DATASET=production
SANITY_API_TOKEN=skDzDxlJhHVMO8i92FxBXtSzvY0Bc6tWzzq6EZYa3xdh8dQnkkiUoCkCvlpjEo69gpvVcgncTYUbG8DCk4buws4i3loz5ZYO6h9ezqowpeCg2vhLXTEvoa1NhLqrh8QTjS8WAEPOimndazRnM3T1LP3yrezcNEtt5JzhCvvkMxGvaCy1ynQf
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Run Migration

```bash
node scripts/migrate-to-sanity.js
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Start Sanity Studio (optional)

```bash
npm run sanity:studio
```

## Data Layer

### Fetching Tours

```typescript
import { getTours, getTourBySlug } from '@/lib/groq-new';

// Get all tours
const tours = await getTours();

// Get single tour by slug
const tour = await getTourBySlug('baku-city-tour');
```

### Fetching Cities

```typescript
import { getCities, getCityBySlug } from '@/lib/groq-new';

// Get all cities
const cities = await getCities();

// Get single city by slug
const city = await getCityBySlug('baku');
```

### Fetching Restaurants

```typescript
import { getRestaurants, getRestaurantBySlug } from '@/lib/groq-new';

// Get all restaurants
const restaurants = await getRestaurants();

// Get single restaurant by slug
const restaurant = await getRestaurantBySlug('nargiz');
```

### Fetching Blog Posts

```typescript
import { getPosts, getPostBySlug } from '@/lib/groq-new';

// Get all posts
const posts = await getPosts();

// Get single post by slug
const post = await getPostBySlug('10-reasons-visit-azerbaijan-2025');
```

### Fetching Settings

```typescript
import { getSettings } from '@/lib/groq-new';

// Get global settings
const settings = await getSettings();
```

## Page Updates

### Home Page (`src/app/page.tsx`)

Updated to fetch data from Sanity instead of JSON:

```typescript
export default async function Home() {
  const cities = await getCities();
  const tours = await getTours();

  return (
    <>
      <Header />
      <HomeContent cities={cities} tours={tours} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
```

### Tours Page (`src/app/tours/page.tsx`)

Updated to fetch tours from Sanity.

### Restaurants Page (`src/app/restaurants/page.tsx`)

Updated to fetch restaurants from Sanity.

### Blog Page (`src/app/blog/page.tsx`)

Updated to fetch posts from Sanity.

### City Pages (`src/app/cities/[slug]/page.tsx`)

Updated to fetch city data from Sanity.

## Extending Content Types

### Adding Rent Car Module

1. Create schema (`src/sanity/schemas/rent-car.ts`):

```typescript
export default {
  name: 'rentCar',
  title: 'Rent Car',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    // Add more fields...
  ],
}
```

2. Add to schema list (`src/sanity/schemas/schema.ts`):

```typescript
import rentCar from './rentCar'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tour, city, restaurant, post, settings, category, rentCar],
}
```

3. Create query function (`src/lib/groq-new.ts`):

```typescript
export async function getRentCars() {
  return sanityFetch(
    groq`*[_type == "rentCar"] | order(_createdAt desc)`
  );
}
```

4. Create page component

### Adding Hotels Module

Follow the same pattern as Rent Car.

### Adding Transfers Module

Follow the same pattern as Rent Car.

## Deployment

### Netlify Configuration

The project is configured for Netlify deployment:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Preview Deployments

1. Push changes to `cms-integration` branch
2. Netlify will automatically create a preview deployment
3. Test the CMS integration on the preview URL
4. Merge to `main` after verification

## Troubleshooting

### Build Errors

If the build fails with dependency conflicts:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Sanity API Errors

Ensure the `SANITY_API_TOKEN` environment variable is set correctly.

### Data Not Loading

Check that the migration script ran successfully and data exists in Sanity.

## Migration Plan

### Phase 1: Setup (Completed)
- [x] Create Sanity schemas
- [x] Configure API client
- [x] Create migration script

### Phase 2: Data Migration (Pending)
- [ ] Run migration script with API token
- [ ] Verify data in Sanity
- [ ] Update queries to use Sanity data

### Phase 3: Testing (Pending)
- [ ] Test all pages with Sanity data
- [ ] Test Sanity Studio
- [ ] Test preview deployments

### Phase 4: Deployment (Pending)
- [ ] Deploy to Netlify preview
- [ ] Full QA testing
- [ ] Merge to main branch

## Security

### GitHub Repository

Ensure all repositories are **Private**:
1. Go to Settings → Danger Zone → Change visibility
2. Set to Private
3. Only grant access to authorized users

### API Tokens

Never commit API tokens to the repository.
Use environment variables:
- `SANITY_API_TOKEN` in `.env.local`
- Netlify environment variables for deployments

## Next Steps

1. Complete data migration with actual API token
2. Test Sanity Studio locally
3. Update all pages to use Sanity data
4. Create preview deployment on Netlify
5. Perform full QA testing
6. Merge to main branch
