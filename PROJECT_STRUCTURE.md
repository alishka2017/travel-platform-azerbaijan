# Project File Structure — Sanity CMS Integration

## Overview

This file provides a quick reference to all files created or modified for Sanity CMS integration.

## New Files Created

### Sanity Schemas (`src/sanity/schemas/`)
- `schema.ts` — Main schema definitions
- `tour.ts` — Tour content type schema
- `city.ts` — City content type schema
- `restaurant.ts` — Restaurant content type schema
- `post.ts` — Blog post content type schema
- `category.ts` — Category content type schema
- `settings.ts` — Global settings schema

### Data Layer (`src/lib/`)
- `sanity-api.ts` — REST API client for Sanity
- `groq-new.ts` — GROQ query functions
- `groq-tag.ts` — GROQ tag template function

### Configuration
- `sanity.config.ts` — Sanity Studio configuration
- `.env.example` — Environment variables template

### Scripts
- `scripts/migrate-to-sanity.js` — Data migration script

### Documentation
- `CMS_INTEGRATION_DOCS.md` — Technical documentation
- `README.md` — Project overview
- `INSTRUCTIONS.md` — User instructions
- `SECURITY_CHECKLIST.md` — Security guidelines
- `CMS_INTEGRATION_REPORT.md` — Implementation report

## Modified Files

### Application Code
- `src/app/page.tsx` — Updated to fetch data from Sanity
- `package.json` — Added Sanity scripts

### Configuration
- `netlify.toml` — Configured for deployment

## File Locations Summary

```
travel-platform-azerbaijan/
├── src/
│   ├── sanity/
│   │   └── schemas/          # Sanity content schemas
│   │       ├── schema.ts
│   │       ├── tour.ts
│   │       ├── city.ts
│   │       ├── restaurant.ts
│   │       ├── post.ts
│   │       ├── category.ts
│   │       └── settings.ts
│   └── lib/
│       ├── sanity-api.ts     # API client
│       ├── groq-new.ts       # Query functions
│       └── groq-tag.ts       # GROQ template
├── scripts/
│   └── migrate-to-sanity.js  # Migration script
├── sanity.config.ts          # Studio config
├── .env.example              # Env template
├── CMS_INTEGRATION_DOCS.md   # Technical docs
├── README.md                 # Project overview
├── INSTRUCTIONS.md           # User guide
├── SECURITY_CHECKLIST.md     # Security guide
└── CMS_INTEGRATION_REPORT.md # Implementation report
```

## Quick Commands

### Setup
```bash
npm install --legacy-peer-deps
```

### Development
```bash
npm run dev
```

### Sanity Studio
```bash
npm run sanity:studio
```

### Migration
```bash
node scripts/migrate-to-sanity.js
```

### Build
```bash
npm run build
```

## Environment Variables

Create `.env.local`:
```env
SANITY_PROJECT_ID=mk35mbbk
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

## Next Steps

1. Set `SANITY_API_TOKEN` in environment
2. Run migration script
3. Test in Sanity Studio
4. Deploy to Netlify preview
5. Full QA testing
