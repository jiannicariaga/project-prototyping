import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map({ results, geolocation }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.MAPS_API_KEY
  });
  if (!isLoaded) return <div>Loading...</div>;
  const geolocationMarker = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  };
  const resultMarkers = results.map(result => {
    const key = result.alias;
    const lat = result.coordinates.latitude;
    const lng = result.coordinates.longitude;
    return <Marker key={key} position={{ lat, lng }} />;
  });
  return (
    <section>
      <GoogleMap
        zoom={12}
        center={geolocation}
        mapContainerClassName='map-container' >
        <Marker
          position={geolocation}
          icon={geolocationMarker} />;
        {resultMarkers}
      </GoogleMap>
    </section>
  );
}
