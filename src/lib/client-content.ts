// Client-side content functions (no fs dependency)
export const getTransfers = () => [] as { id: string, name: string, image: string, priceFrom: string, description: string, capacity: string, includes: string[] }[];

export const getBlogPosts = () => [{ slug: 'first-post', title: 'First Post', readTime: '5 min', category: 'Guide', excerpt: 'Intro', image: '/', date: '2023-01-01' }];

export const getBlogPostBySlug = (slug: string) => ({ 
  id: slug, title: 'First Post', excerpt: 'Intro', content: '<p>Content</p>', date: '2023-01-01', image: '/', slug: 'first-post', 
  category: 'Guide', readTime: '5 min', author: 'Admin', tags: [] 
});

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
