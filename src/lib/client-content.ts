// Client-side content functions (no fs dependency)
import blogDataRaw from './blog.json';

const blogData = blogDataRaw as { posts: any[] };

export const getTransfers = () => [] as { id: string, name: string, image: string, priceFrom: string, description: string, capacity: string, includes: string[] }[];

export const getBlogPosts = () => blogData.posts;

export const getBlogPostBySlug = (slug: string) => blogData.posts.find(p => p.slug === slug);

export const searchContent = (query: string) => ({ cities: [], tours: [] });

export const getSettings = async () => {
  try {
    const response = await fetch('/content/settings.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error loading settings:', error);
  }
  
  // Fallback
  return {
    contacts: {
      phone: '+994 55 222 22 22',
      whatsapp: '+994 55 222 22 22',
      email: 'info@smartholiday.az',
      address: 'Baku, Azerbaijan',
      workingHours: '24/7',
      social: {
        instagram: 'https://instagram.com/smartholidayaz',
        facebook: 'https://facebook.com/smartholidayaz',
        telegram: 'https://t.me/smartholidayaz'
      }
    },
    site: {
      name: 'Smartholiday.az',
      tagline: 'Smart Holiday Travel - Azerbaijan Guide',
      description: 'Your complete guide to Azerbaijan. Discover hotels, experiences, and restaurants.'
    }
  };
};
