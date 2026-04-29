import 'leaflet';
import 'leaflet.markercluster';

declare module 'leaflet' {
  export interface MarkerClusterGroupOptions {
    spiderfyOnMaxZoom?: boolean;
    showCoverageOnHover?: boolean;
    zoomToBoundsOnClick?: boolean;
    disableClusteringAtZoom?: number;
    maxClusterRadius?: number;
    iconCreateFunction?: (cluster: any) => any;
  }

  export function markerClusterGroup(options?: MarkerClusterGroupOptions): any;
}

declare module 'leaflet' {
  export class MarkerClusterGroup extends LayerGroup {
    constructor(options?: MarkerClusterGroupOptions);
    addLayer(layer: Layer): this;
    removeLayer(layer: Layer): this;
    clearLayers(): this;
  }
}