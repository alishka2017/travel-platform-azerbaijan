import { groq } from './groq-tag';

const projectId = 'mk35mbbk';
const dataset = 'production';
const apiVersion = '2024-05-07';
const token = process.env.SANITY_API_TOKEN;

const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

async function sanityFetch(query: string, params: Record<string, any> = {}) {
  const url = new URL(baseUrl);
  
  // Replace $variables in query with actual values
  let finalQuery = query;
  for (const [key, value] of Object.entries(params)) {
    // Simple string replacement for $key
    finalQuery = finalQuery.replace(new RegExp(`\\$${key}\\b`, 'g'), JSON.stringify(value));
  }
  
  url.searchParams.set('query', finalQuery);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  const response = await fetch(url.toString(), options);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Sanity API error: ${error.message}`);
  }

  const { result } = await response.json();
  return result;
}

export { sanityFetch, groq };