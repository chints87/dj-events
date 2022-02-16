import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocode from 'react-geocode';

export default function EventMap({ evt }) {
  const [latitude, setLat] = useState(null);
  const [longitude, setLng] = useState(null);
  const [loading, setLoading] = useState(true);

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -73.93,
    width: '100%',
    height: '500px',
    zoom: 8,
  });

  useEffect(() => {
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error(error);
      },
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

  if (loading) {
    return false;
  }

  console.log(latitude, longitude);

  return (
    <div>
      MAP
    </div>
  );
}
