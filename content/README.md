# Content Management Guide

This guide explains how to edit content on Smartholiday.az **without touching code**.

## Content Structure

All editable content is located in `/content/` directory:

- `/content/cities/` – City guides (Baku, Sheki, Gabala, etc.)
- `/content/blog/` – Blog articles (markdown format)
- `/content/tours/` – Tour descriptions (coming soon)
- `/content/restaurants/` – Restaurant info (coming soon)
- `/content/attractions/` – Attraction details (coming soon)

## How to Edit a City Guide

1. Open `/content/cities/baku.json`
2. Edit any field:
   - `name`: City name
   - `description`: Main description (appears on city page)
   - `heroImage`: URL for the header background
   - `population`, `bestTime`, `distanceFromBaku`: Quick facts
   - `highlights`, `hiddenGems`, `tips`: Arrays of strings

Example:
```json
{
  "name": "Baku",
  "description": "Baku, the vibrant capital...",
  "heroImage": "https://example.com/baku.jpg"
}
```

3. Save the file. The site will automatically update on next deployment.

## How to Add a Blog Article

1. Create a new file in `/content/blog/`: `your-article-slug.md`
2. Use this template:

```markdown
---
title: "Your Article Title"
author: "Author Name"
date: "2024-04-30"
excerpt: "Brief summary for preview"
category: "Travel Tips"
coverImage: "https://example.com/image.jpg"
---

# Article Title

Your content here...

## Section

More content...
```

3. Save. The article will appear at `/blog/your-article-slug`

## How to Change Images

Public images are in `/public/images/`:

- `/public/images/cities/` – City photos
- `/public/images/tours/` – Tour photos
- `/public/images/attractions/` – Attraction photos
- `/public/images/blog/` – Blog cover images

To update:
1. Upload new image to appropriate folder
2. Reference it in JSON or markdown:
   - JSON: `"heroImage": "/images/cities/baku-new.jpg"`
   - Markdown: `![Alt text](/images/blog/my-article.jpg)`

## Important Notes

- **Never delete** `page.tsx` or other React components
- Keep JSON valid (use a validator if unsure)
- Image URLs must be absolute (https://...) or start with `/`
- Blog posts support Markdown formatting
- After editing, commit changes to GitHub for deployment

## Need Help?

Contact development team for:
- Adding new content types
- Changing page layouts
- SEO optimization
- Performance issues

Last updated: April 2024