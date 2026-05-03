// Client-side content functions (no fs dependency)
export const getTransfers = () => [] as { id: string, name: string, image: string, priceFrom: string, description: string, capacity: string, includes: string[] }[];

export const getBlogPosts = () => [{ slug: 'first-post', title: 'First Post', readTime: '5 min', category: 'Guide', excerpt: 'Intro', image: '/', date: '2023-01-01' }];

export const getBlogPostBySlug = (slug: string) => ({ 
  id: slug, title: 'First Post', excerpt: 'Intro', content: '<p>Content</p>', date: '2023-01-01', image: '/', slug: 'first-post', 
  category: 'Guide', readTime: '5 min', author: 'Admin', tags: [] 
});

export const searchContent = (query: string) => ({ cities: [], tours: [] });
