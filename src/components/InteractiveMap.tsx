'use client';

import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import MarkerClusterGroup from 'leaflet.markercluster';

// Fix for default marker icons in Leaflet with webpack/next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export interface MapMarker {
  lat: number;
  lon: number;
  popup?: string;
  category?: string;
  id?: string;
}

interface InteractiveMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  markers?: MapMarker[];
  showFilters?: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Historic Sites': '#8B4513',
  'Restaurants': '#E74C3C',
  'Parks': '#27AE60',
  'Tours': '#3498DB',
  'Attractions': '#9B59B6',
  'Hotels': '#F39C12',
};

export default function InteractiveMap({ lat, lon, zoom = 13, markers = [], showFilters = true }: InteractiveMapProps) {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
  const [allCategories, setAllCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract unique categories from markers
    const categories = [...new Set(markers.map(m => m.category).filter(Boolean))] as string[];
    setAllCategories(categories);
    // Set all categories as active by default
    if (categories.length > 0) {
      setActiveCategories(new Set(categories));
    }
  }, [markers]);

  useEffect(() => {
    if (allCategories.length > 0 && activeCategories.size === 0) {
      // If no categories are selected, show all markers
      setActiveCategories(new Set(allCategories));
    }
  }, [allCategories]);

  useEffect(() => {
    const map = L.map('map').setView([lat, lon], zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create marker cluster group
    const markersCluster = L.markerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      spiderfyOnMaxZoom: true,
      disableClusteringAtZoom: 17,
    });

    // Filter markers by active categories
    const filteredMarkers = markers.filter(marker => 
      !marker.category || activeCategories.has(marker.category)
    );

    // Add markers to cluster group
    filteredMarkers.forEach((marker) => {
      const customIcon = marker.category 
        ? L.divIcon({
            className: 'custom-marker',
            html: `<div style="
              background-color: ${CATEGORY_COLORS[marker.category] || '#3498DB'};
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          })
        : undefined;

      const markerLayer = customIcon
        ? L.marker([marker.lat, marker.lon], { icon: customIcon })
        : L.marker([marker.lat, marker.lon]);

      markerLayer.addTo(markersCluster);
      if (marker.popup) {
        markerLayer.bindPopup(marker.popup);
      }
    });

    map.addLayer(markersCluster);

    // Add main marker if no markers provided
    if (markers.length === 0) {
      L.marker([lat, lon]).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [lat, lon, zoom, markers, activeCategories]);

  const toggleCategory = (category: string) => {
    setActiveCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full">
      {showFilters && allCategories.length > 0 && (
        <div className="bg-gray-100 p-3 rounded-t-lg border-b border-gray-200">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
            {allCategories.map(category => (
              <label
                key={category}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-sm cursor-pointer transition-colors"
                style={{
                  backgroundColor: activeCategories.has(category) ? CATEGORY_COLORS[category] || '#3498DB' : '#E0E0E0',
                  color: activeCategories.has(category) ? 'white' : '#666',
                }}
              >
                <input
                  type="checkbox"
                  checked={activeCategories.has(category)}
                  onChange={() => toggleCategory(category)}
                  className="sr-only"
                />
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeCategories.has(category) ? 'white' : CATEGORY_COLORS[category] || '#3498DB' }}></span>
                {category}
              </label>
            ))}
          </div>
        </div>
      )}
      <div 
        id="map" 
        style={{ 
          height: '400px', 
          width: '100%', 
          borderRadius: showFilters ? '0 0 8px 8px' : '8px',
          zIndex: 1 
        }}
      ></div>
    </div>
  );
}