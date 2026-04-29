# Travel Platform Audit Fixes Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Fix critical audit issues for azerbaijan-travel-platform.vercel.app to match TripAdvisor standards, including adding restaurants, tours, maps, filters, and improving UX.

**Architecture:** 
- Next.js App Router (existing)
- Static data augmentation (src/data/places.ts) for autonomy
- Leaflet.js for interactive maps
- Tailwind CSS for styling

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Leaflet.js

---

## Phase 1: Content Expansion (Critical)

### Task 1: Add Restaurant Data

**Objective:** Populate `src/data/places.ts` with top 10 Baku restaurants from TripAdvisor audit.

**Files:**
- Modify: `src/data/places.ts`

**Step 1: Edit places.ts**

Add the following restaurants to the `places` array (JSON format):

```typescript
{
  id: "cay-bagi-145",
  name: "Cay Bagi 145",
  city: "Baku",
  citySlug: "baku",
  category: "Restaurants",
  rating: 4.8,
  reviewsCount: 1867,
  description: "Famous tea house in the Old City, serving traditional Azerbaijani tea and sweets in a historic setting.",
  address: "45 Kichik Gala, Baku",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg",
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tea_house_in_Baku_Old_City.jpg/1280px-Tea_house_in_Baku_Old_City.jpg"],
  openingHours: "09:00 - 23:00",
  tips: ["Try the shekerbura", "Best in the evening"],
  tags: ["tea", "sweets", "traditional"],
  priceLevel: "$"
},
{
  id: "malacannes",
  name: "Malacannes",
  city: "Baku",
  citySlug: "baku",
  category: "Restaurants",
  rating: 4.9,
  reviewsCount: 1200,
  description: "Upscale restaurant serving modern Azerbaijani cuisine with a creative twist.",
  address: "28 May Street, Baku",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1280&auto=format&fit=crop",
  gallery: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1280&auto=format&fit=crop"],
  openingHours: "12:00 - 23:00",
  tips: ["Reservations recommended", "Try the plov"],
  tags: ["modern", "luxury", "plov"],
  priceLevel: "$$$"
}
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds, pages generated for new restaurants.

**Step 3: Commit**

```bash
git add src/data/places.ts
git commit -m "feat: add top 10 Baku restaurants data"
```

---

### Task 2: Add Tour/Guide Data

**Objective:** Populate `src/data/places.ts` with top tour companies.

**Files:**
- Modify: `src/data/places.ts`

**Step 1: Edit places.ts**

Add tour companies to the `places` array:

```typescript
{
  id: "azterra-travel",
  name: "AzTerra Travel",
  city: "Baku",
  citySlug: "baku",
  category: "Tours",
  rating: 5.0,
  reviewsCount: 366,
  description: "Premium tour operator offering customized Azerbaijan experiences.",
  address: "28 May Street, Baku",
  image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1280&auto=format&fit=crop",
  gallery: [],
  openingHours: "09:00 - 18:00",
  tips: ["Book in advance", "Private tours available"],
  tags: ["luxury", "private", "custom"],
  priceLevel: "$$$"
}
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/data/places.ts
git commit -m "feat: add tour companies data"
```

---

### Task 3: Add Missing Attractions

**Objective:** Add Highland Park, Fountain Square, Ateshgah Fire Temple, etc.

**Files:**
- Modify: `src/data/places.ts`

**Step 1: Edit places.ts**

Add missing attractions:

```typescript
{
  id: "highland-park",
  name: "Highland Park",
  city: "Baku",
  citySlug: "baku",
  category: "Parks",
  rating: 4.7,
  reviewsCount: 560,
  description: "Scenic hilltop park offering panoramic views of Baku Bay and the Flame Towers.",
  address: "Highland Park, Baku",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Highland_Park_Baku.jpg/1280px-Highland_Park_Baku.jpg",
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Highland_Park_Baku.jpg/1280px-Highland_Park_Baku.jpg"],
  openingHours: "Always open",
  tips: ["Best for sunset", "Walk up or take the funicular"],
  tags: ["park", "view", "sunset"],
  priceLevel: null
},
{
  id: "fountain-square",
  name: "Fountain Square",
  city: "Baku",
  citySlug: "baku",
  category: "Squares",
  rating: 4.4,
  reviewsCount: 1141,
  description: "Historic square in the heart of Baku, surrounded by cafes and shops.",
  address: "Fountain Square, Baku",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Fountain_Square_Baku.jpg/1280px-Fountain_Square_Baku.jpg",
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Fountain_Square_Baku.jpg/1280px-Fountain_Square_Baku.jpg"],
  openingHours: "Always open",
  tips: ["Great for people watching", "Near Nizami Street"],
  tags: ["square", "shopping", "cafe"],
  priceLevel: null
},
{
  id: "ateshgah-fire-temple",
  name: "Ateshgah Fire Temple",
  city: "Baku",
  citySlug: "baku",
  category: "Historic Sites",
  rating: 4.2,
  reviewsCount: 952,
  description: "Ancient Zoroastrian fire temple located on the Absheron Peninsula.",
  address: "Ateshgah, Baku",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ateshgah_Fire_Temple_Baku.jpg/1280px-Ateshgah_Fire_Temple_Baku.jpg",
  gallery: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ateshgah_Fire_Temple_Baku.jpg/1280px-Ateshgah_Fire_Temple_Baku.jpg"],
  openingHours: "10:00 - 18:00",
  tips: ["Take a taxi", "Combine with Mud Volcanoes"],
  tags: ["historic", "temple", "fire"],
  priceLevel: "$"
}
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/data/places.ts
git commit -m "feat: add missing Baku attractions"
```

---

## Phase 2: UI/UX Improvements

### Task 4: Create Interactive Map Component

**Objective:** Add Leaflet map to city pages and attraction pages.

**Files:**
- Create: `src/components/InteractiveMap.tsx`
- Modify: `src/app/cities/[slug]/page.tsx`

**Step 1: Install Leaflet**

Run: `npm install leaflet @types/leaflet`

**Step 2: Create Map Component**

Write `src/components/InteractiveMap.tsx`:

```tsx
'use client';
import { useEffect } from 'react';
import L from 'leaflet';

export default function InteractiveMap({ lat, lon, zoom = 13 }: {{ lat: number; lon: number; zoom?: number }}) {
  useEffect(() => {
    const map = L.map('map').setView([lat, lon], zoom);
    L.tileLayer('https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    return () => map.remove();
  }, [lat, lon, zoom]);

  return <div id="map" style={{ height: '300px', width: '100%', borderRadius: '8px' }}></div>;
}
```

**Step 3: Add Map to City Page**

Modify `src/app/cities/[slug]/page.tsx` to include map component (use lat/lon from city data).

**Step 4: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/components/InteractiveMap.tsx src/app/cities/[slug]/page.tsx
git commit -m "feat: add interactive map component"
```

---

### Task 5: Add Filters to Search Page

**Objective:** Add category and rating filters to `/search` page.

**Files:**
- Modify: `src/app/search/page.tsx`

**Step 1: Update Search Page**

Add filter UI (Category, Rating, Price) to the search page.

**Step 2: Implement Filtering Logic**

Filter `places` array based on selected filters.

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/app/search/page.tsx
git commit -m "feat: add filters to search page"
```

---

### Task 6: Improve Hero Section

**Objective:** Replace hero background with high-quality image/video.

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update Hero Image**

Replace background URL with a professional photo from Unsplash or Wikimedia.

**Step 2: Add Overlay**

Ensure text is readable with dark overlay.

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "style: improve hero section"
```

---

## Phase 3: Deployment

### Task 7: Deploy to Vercel

**Objective:** Deploy all changes to production.

**Files:**
- None

**Step 1: Push to GitHub**

```bash
git push origin main
```

**Step 2: Trigger Vercel Deploy**

Use Vercel API to deploy.

**Step 3: Verify**

Check `https://azerbaijan-travel-platform.vercel.app`

**Step 4: Commit**

```bash
git commit --allow-empty -m "deploy: v1.2.0"
```
