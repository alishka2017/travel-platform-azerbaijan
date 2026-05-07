import { groq, sanityFetch } from './sanity-api';

// Получение всех туров
export async function getTours() {
  return sanityFetch(
    groq`*[_type == "tour"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      duration,
      description,
      category->,
      featured,
      publishedAt
    }`
  );
}

// Получение тура по slug
export async function getTourBySlug(slug: string) {
  return sanityFetch(
    groq`*[_type == "tour" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      duration,
      description,
      category->,
      featured,
      publishedAt,
      seo
    }`,
    { slug }
  );
}

// Получение всех городов
export async function getCities() {
  return sanityFetch(
    groq`*[_type == "city"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      description,
      shortDescription
    }`
  );
}

// Получение города по slug
export async function getCityBySlug(slug: string) {
  return sanityFetch(
    groq`*[_type == "city" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      description,
      shortDescription,
      seo
    }`,
    { slug }
  );
}

// Получение всех ресторанов
export async function getRestaurants() {
  return sanityFetch(
    groq`*[_type == "restaurant"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      "imageUrl": image.asset->url,
      city->,
      cuisine,
      rating,
      description,
      featured
    }`
  );
}

// Получение ресторана по slug
export async function getRestaurantBySlug(slug: string) {
  return sanityFetch(
    groq`*[_type == "restaurant" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      "imageUrl": image.asset->url,
      city->,
      cuisine,
      rating,
      description,
      featured,
      seo
    }`,
    { slug }
  );
}

// Получение всех постов блога
export async function getPosts() {
  return sanityFetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      excerpt,
      author,
      publishedAt
    }`
  );
}

// Получение поста по slug
export async function getPostBySlug(slug: string) {
  return sanityFetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      excerpt,
      content,
      author,
      publishedAt,
      seo
    }`,
    { slug }
  );
}

// Получение настроек
export async function getSettings() {
  return sanityFetch(
    groq`*[_type == "settings"][0] {
      siteName,
      whatsapp,
      phone,
      email,
      address,
      seo
    }`
  );
}

// Получение всех арендных машин
export async function getRentCars() {
  return sanityFetch(
    groq`*[_type == "rentCar"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      price,
      carType,
      description,
      featured,
      publishedAt
    }`
  );
}

// Получение всех трансферов
export async function getTransfers() {
  return sanityFetch(
    groq`*[_type == "transfer"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      price,
      route,
      duration,
      description,
      featured,
      publishedAt
    }`
  );
}

// Получение всех отелей
export async function getHotels() {
  return sanityFetch(
    groq`*[_type == "hotel"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      city->,
      rating,
      price,
      description,
      featured,
      publishedAt
    }`
  );
}

// Получение всех experiences
export async function getExperiences() {
  return sanityFetch(
    groq`*[_type == "experience"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      price,
      duration,
      description,
      featured,
      publishedAt
    }`
  );
}

// Получение всех VIP сервисов
export async function getVipServices() {
  return sanityFetch(
    groq`*[_type == "vipService"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      "imageUrl": image.asset->url,
      price,
      description,
      featured,
      publishedAt
    }`
  );
}