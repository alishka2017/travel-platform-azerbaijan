# Azerbaijan Travel Platform

Travel platform for Azerbaijan using Next.js.

## Features
- TripAdvisor-style design
- 6+ tours, 10+ restaurants
- English language support
- Favorites system with localStorage
- WhatsApp integration
- SEO optimized

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

### Tours
Edit file: `src/lib/tours.json`

### Restaurants
Edit file: `src/lib/restaurants.json`

### Contacts & WhatsApp
Edit file: `src/lib/settings.json`

### Images
- Local: `/public/images/`
- External: Use URLs (not recommended for production)

## Deployment

The site is deployed on Netlify. Auto-deploy is configured for the `main` branch.

1. Commit changes: `git add . && git commit -m "Update content"`
2. Push: `git push origin main`
3. Netlify automatically deploys the site.

## Backup
- Repository on GitHub is the backup.
- For full backup: `git clone` or download ZIP from GitHub.

## Restore
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run `npm run build && npm run export`.
4. Upload the `out/` folder to your hosting.

## Netlify Configuration
- Auto-deploy: Enabled for `main` branch
- Build command: `npm run build && npm run export`
- Publish directory: `out`
