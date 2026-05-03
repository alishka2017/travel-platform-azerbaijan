// Server-side content data
import * as fs from 'fs';
import * as path from 'path';

const contentDir = path.join(process.cwd(), 'public', 'content');

export const getToursSync = () => {
  try {
    const filePath = path.join(contentDir, 'tours', 'categories', 'tours.json');
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const toursData = JSON.parse(fileContents);
      // Structure is { categories: { 'city-tours': [...] } }
      if (toursData.categories) {
        return toursData.categories;
      }
    }
  } catch (error) {
    console.error('Error loading tours:', error);
  }
  return { 'city-tours': [], 'day-trips': [], 'multi-day': [], 'adventure': [], 'food-wine': [] };
}; 

export const getCitiesSync = () => {
  return [
    {
      "id": "baku",
      "name": "Baku",
      "slug": "baku",
      "country": "Azerbaijan",
      "region": "Absheron Peninsula",
      "population": "2.3 million",
      "description": "Baku, the vibrant capital of Azerbaijan, sits on the edge of the Caspian Sea.",
      "heroImage": "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?q=80&w=1280&auto=format&fit=crop",
      "bestTime": "April-June, September-October",
      "distanceFromBaku": "0 km",
      "transport": "Metro, bus, taxi, BakuCard",
      "topAttractions": ["Old City (Icherisheher)", "Flame Towers", "Heydar Aliyev Center", "Baku Boulevard"],
      "topRestaurants": ["Cay Bagi 145", "Dolma Restaurant", "Malacannes 145"],
      "topHotels": ["Four Seasons Baku", "JW Marriott Absheron Baku", "Fairmont Baku"],
      "hiddenGems": ["Yanar Dag", "Ateshgah Fire Temple", "Baku Ferris Wheel"],
      "mistakesToAvoid": ["Don't exchange money at the airport", "Avoid rush hour metro"]
    },
    {
      "id": "ganja",
      "name": "Ganja",
      "slug": "ganja",
      "country": "Azerbaijan",
      "region": "Ganja-Dashkasan",
      "population": "330,000",
      "description": "Ganja, Azerbaijan's second-largest city, is affectionately known as the 'City of Poems' for its literary heritage.",
      "heroImage": "https://images.unsplash.com/photo-1581409295962-d83b4f6f7f57?q=80&w=1280&auto=format&fit=crop",
      "bestTime": "May-September",
      "distanceFromBaku": "360 km",
      "transport": "Bus, train",
      "topAttractions": ["Nizami Mausoleum", "Chokh Garden", "Ganja Fortress"],
      "topRestaurants": ["Mugam Club", "Ganja Sheher Restaurant"],
      "topHotels": ["Ramada by Wyndham", "Ganja Hotel"],
      "hiddenGems": ["Khan's Garden", "Juma Mosque"],
      "mistakesToAvoid": ["Skipping the local markets"]
    }
    // Add other cities as needed or load from JSON
  ];
};

export const getTransfers = () => [] as { id: string, name: string, image: string, priceFrom: string, description: string, capacity: string, includes: string[] }[];
export const getBlogPosts = () => [{ slug: 'first-post', title: 'First Post', readTime: '5 min', category: 'Guide', excerpt: 'Intro', image: '/', date: '2023-01-01' }];
export const getBlogPostBySlug = (slug: string) => ({ 
  id: slug, title: 'First Post', excerpt: 'Intro', content: '<p>Content</p>', date: '2023-01-01', image: '/', slug: 'first-post', 
  category: 'Guide', readTime: '5 min', author: 'Admin', tags: [] 
});
export const searchContent = (query: string) => ({ cities: [], tours: [] });
