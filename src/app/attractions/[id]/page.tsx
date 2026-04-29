import { notFound } from 'next/navigation';
import { places } from '@/data/places';
import AttractionContent from './content';
import { generateAttractionMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return places.map((place) => ({
    id: place.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return generateAttractionMetadata(params.id);
}

export default function AttractionPage({ params }: { params: { id: string } }) {
  // Static validation: if place doesn't exist, return 404 immediately
  const placeExists = places.some(p => p.id === params.id);
  if (!placeExists) {
    notFound();
  }

  return <AttractionContent params={params} />;
}