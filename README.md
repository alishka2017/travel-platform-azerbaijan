# Smartholiday.az — Travel Platform for Azerbaijan

A modern travel platform for Azerbaijan built with Next.js and Sanity CMS.

## Features

- **TripAdvisor-style design** with green accents
- **Interactive map** with Leaflet
- **Favorites system** with localStorage
- **Tours, Restaurants, Attractions** pages
- **Blog** with posts
- **City pages** with detailed information
- **WhatsApp integration** for contact
- **SEO optimization** with Schema.org
- **Mobile responsive** design
- **Sanity CMS** integration for content management

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Map**: Leaflet with marker clustering
- **CMS**: Sanity.io
- **Deployment**: Netlify

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/              # Utilities, data fetching
│   ├── sanity/           # Sanity schemas and config
│   └── data/             # JSON data (legacy)
├── public/               # Static assets
├── scripts/              # Migration and build scripts
└── sanity.config.ts      # Sanity Studio config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd travel-platform-azerbaijan
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create `.env.local` file:
```env
SANITY_PROJECT_ID=mk35mbbk
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Sanity Studio

To manage content in Sanity Studio:

```bash
npm run sanity:studio
```

Open [http://localhost:3333](http://localhost:3333)

## Content Management

### Adding Tours

1. Open Sanity Studio
2. Go to "Tours"
3. Click "Create new tour"
4. Fill in:
   - Title
   - Slug (auto-generated)
   - Image
   - Duration
   - Description
   - Category
   - Featured flag
5. Click "Publish"

### Adding Cities

1. Open Sanity Studio
2. Go to "Cities"
3. Click "Create new city"
4. Fill in:
   - Title
   - Slug
   - Image
   - Description
   - Short description
5. Click "Publish"

### Adding Restaurants

1. Open Sanity Studio
2. Go to "Restaurants"
3. Click "Create new restaurant"
4. Fill in:
   - Name
   - Slug
   - Image
   - City (reference)
   - Cuisine
   - Rating
   - Description
5. Click "Publish"

### Adding Blog Posts

1. Open Sanity Studio
2. Go to "Posts"
3. Click "Create new post"
4. Fill in:
   - Title
   - Slug
   - Image
   - Excerpt
   - Content (rich text)
   - Author
   - Published date
5. Click "Publish"

## Deployment

### Local Build

```bash
npm run build
npm start
```

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Add environment variables in Netlify dashboard:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Deploy

### Preview Deployments

The `cms-integration` branch is used for testing CMS features.
Preview deployments are automatically created by Netlify.

## Extending the Platform

### Adding New Content Types

1. Create schema in `src/sanity/schemas/`
2. Add to `src/sanity/schemas/schema.ts`
3. Create query function in `src/lib/groq-new.ts`
4. Create page component

### Adding New Pages

1. Create page in `src/app/`
2. Use server components for data fetching
3. Add to navigation

## Troubleshooting

### Build Errors

If you encounter dependency conflicts:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Sanity API Errors

Ensure environment variables are set correctly:
- Check `.env.local` for local development
- Check Netlify dashboard for deployed environment

### Data Not Loading

Check Sanity Studio to verify data exists.
Run migration script if needed:
```bash
node scripts/migrate-to-sanity.js
```

## Security

### GitHub Repository

**IMPORTANT**: Ensure the repository is **Private**:
1. Go to GitHub repository Settings
2. Navigate to Danger Zone → Change visibility
3. Set to Private
4. Only grant access to authorized users

### API Tokens

Never commit API tokens to the repository.
Use environment variables only.

## License

MIT License

## Contact

For questions or support, contact:
- Email: info@smartholiday.az
- WhatsApp: +994501234567
