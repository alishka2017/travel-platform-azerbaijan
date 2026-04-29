'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with webpack/next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface InteractiveMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  markers?: { lat: number; lon: number; popup?: string }[];
}

export default function InteractiveMap({ lat, lon, zoom = 13, markers = [] }: InteractiveMapProps) {
  useEffect(() => {
    const map = L.map('map').setView([lat, lon], zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    markers.forEach((marker) => {
      L.marker([marker.lat, marker.lon])
        .addTo(map)
        .bindPopup(marker.popup || '');
    });

    // Add main marker if no markers provided
    if (markers.length === 0) {
      L.marker([lat, lon]).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [lat, lon, zoom, markers]);

  return <div id="map" style={{ height: '300px', width: '100%', borderRadius: '8px', zIndex: 1 }}></div>;
}