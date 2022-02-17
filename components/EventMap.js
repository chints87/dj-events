import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(40.712772);
  const [lng, setLng] = useState(-73.935242);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    width: '100%',
    height: '500px',
    zoom: 10,
  });

  // Although the value of lng changes at setLng, as seen in line 34, in line 26 the lng value
  // is the initial value
  useEffect(() => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${evt.address}.json?&access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`, {
      method: 'GET',
    }).then((res) => res.json()).then((data) => {
      const { coordinates } = data.features[0].geometry;
      setLat(coordinates[1]);
      setLng(coordinates[0]);
      console.log('lng', lng);
      setViewport({ ...viewport, latitude: coordinates[1], longitude: coordinates[0] });
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    console.log(lng, viewport);
    return false;
  }

  console.log(viewport);

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        Hello
      </Marker>
    </ReactMapGl>
  );
}
