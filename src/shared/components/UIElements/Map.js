import React, { useEffect, useRef } from 'react';

import './Map.css';

const Map = ({ center, zoom, className, style }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !window.google?.maps) {
      return;
    }

    const position = {
      lat: Number(center?.latitude),
      lng: Number(center?.longitude),
    };

    if (!Number.isFinite(position.lat) || !Number.isFinite(position.lng)) {
      console.error('Invalid map center:', center);
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: position,
      zoom,
      mapId: 'DEMO_MAP_ID',
    });

    new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position,
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${className ?? ''}`}
      style={style}
    />
  );
};

export default Map;