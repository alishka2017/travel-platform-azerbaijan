#!/usr/bin/env node

// Migration script: JSON -> Sanity
// Usage: node scripts/migrate-to-sanity.js

const fs = require('fs');
const path = require('path');

// Sanity API configuration
const projectId = 'mk35mbbk';
const dataset = 'production';
const apiVersion = '2024-05-07';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_TOKEN environment variable is required');
  process.exit(1);
}

const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

// Helper function to make API requests
async function sanityMutate(mutations) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Full error response:', JSON.stringify(error, null, 2));
    throw new Error(`Sanity API error: ${error.description || error.message || 'Unknown error'}`);
  }

  return response.json();
}

// Helper function to extract English text from localized content
function getEnText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (field.en) return field.en;
  return '';
}

// Import JSON data
const toursData = require(path.join(__dirname, '../src/lib/tours.json')).tours;
const citiesData = require(path.join(__dirname, '../src/lib/cities.json')).cities;
const restaurantsData = require(path.join(__dirname, '../src/lib/restaurants.json')).restaurants;
const postsData = require(path.join(__dirname, '../src/lib/blog.json'))?.posts || [];

async function migrateCategories() {
  console.log('Migrating categories...');
  const categories = new Set();
  
  toursData.forEach(tour => {
    if (tour.category) categories.add(tour.category);
  });

  const mutations = Array.from(categories).map((category) => ({
    create: {
      _type: 'category',
      _id: `category-${category}`,
      title: category,
      slug: { current: category },
    },
  }));

  if (mutations.length > 0) {
    await sanityMutate(mutations);
    console.log(`Migrated ${mutations.length} categories`);
  }
}

async function migrateCities() {
  console.log('Migrating cities...');
  const mutations = citiesData.map((city) => ({
    create: {
      _type: 'city',
      _id: `city-${city.id}`,
      title: getEnText(city.name) || city.name,
      slug: { current: city.slug },
      description: getEnText(city.about) || getEnText(city.description),
      shortDescription: getEnText(city.description),
    },
  }));

  await sanityMutate(mutations);
  console.log(`Migrated ${mutations.length} cities`);
}

async function migrateTours() {
  console.log('Migrating tours...');
  const mutations = toursData.map((tour) => ({
    create: {
      _type: 'tour',
      _id: `tour-${tour.id}`,
      title: getEnText(tour.name) || tour.name,
      slug: { current: tour.slug },
      duration: tour.duration,
      description: getEnText(tour.description),
      category: { _type: 'reference', _ref: `category-${tour.category}` },
      featured: tour.featured || false,
      publishedAt: new Date().toISOString(),
    },
  }));

  await sanityMutate(mutations);
  console.log(`Migrated ${mutations.length} tours`);
}

async function migrateRestaurants() {
  console.log('Migrating restaurants...');
  const mutations = restaurantsData.map((restaurant) => ({
    create: {
      _type: 'restaurant',
      _id: `restaurant-${restaurant.id}`,
      name: getEnText(restaurant.name) || restaurant.name,
      slug: { current: restaurant.slug },
      cuisine: restaurant.cuisine,
      rating: restaurant.rating,
      description: getEnText(restaurant.description),
      featured: restaurant.featured || false,
      city: { _type: 'reference', _ref: `city-${restaurant.city}` },
    },
  }));

  await sanityMutate(mutations);
  console.log(`Migrated ${mutations.length} restaurants`);
}

async function migratePosts() {
  if (!postsData.length) {
    console.log('No posts found, skipping...');
    return;
  }
  
  console.log('Migrating posts...');
  const mutations = postsData.map((post) => ({
    create: {
      _type: 'post',
      _id: `post-${post.slug}`,
      title: getEnText(post.title) || post.title,
      slug: { current: post.slug },
      excerpt: getEnText(post.excerpt),
      content: getEnText(post.content),
      author: post.author,
      publishedAt: post.date || new Date().toISOString(),
    },
  }));

  await sanityMutate(mutations);
  console.log(`Migrated ${mutations.length} posts`);
}

async function migrateSettings() {
  console.log('Migrating settings...');
  const settings = {
    _type: 'settings',
    _id: 'settings',
    siteName: 'Smartholiday.az',
    whatsapp: '+994501234567',
    phone: '+994123456789',
    email: 'info@smartholiday.az',
    address: 'Baku, Azerbaijan',
  };

  await sanityMutate([{ create: settings }]);
  console.log('Settings migrated');
}

async function main() {
  try {
    await migrateCategories();
    await migrateCities();
    await migrateTours();
    await migrateRestaurants();
    await migratePosts();
    await migrateSettings();
    console.log('\n✅ Migration completed successfully!');
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  }
}

main();
