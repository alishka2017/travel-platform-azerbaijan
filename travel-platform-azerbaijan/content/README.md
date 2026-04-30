# Smartholiday.az Content Management

This directory contains the content for the Smartholiday.az website. Content is edited via GitHub without changing code.

## Structure

- `cities/` - City data (JSON files)
- `tours/` - Tour data (JSON files)
- `attractions/` - Attraction data (JSON files)
- `blog/` - Blog posts (JSON files)
- `homepage.json` - Homepage configuration
- `settings.json` - Global settings

## How to Edit Content

### Changing Text
1. Navigate to the relevant JSON file in this directory
2. Edit the text values
3. Commit and push to GitHub
4. The site will automatically update

### Changing Images
1. Upload new images to `/public/images/`
2. Update the image URL in the relevant JSON file
3. Commit and push to GitHub

## Example City JSON
\`\`\`json
{
  "id": "baku",
  "name": "Baku",
  "slug": "baku",
  "description": "Baku, the vibrant capital...",
  "image": "/images/cities/baku.jpg",
  "attractions": ["old-city", "flame-towers"],
  "restaurants": ["cafe-1", "cafe-2"],
  "hidden_gems": ["local-tea-houses"]
}
\`\`\`

## Contact
For questions, contact info@smartholiday.az