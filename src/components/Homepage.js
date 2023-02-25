import React, { useEffect } from "react";
import { useGeolocated } from "react-geolocated";

export default function HomePage() {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  if (!isGeolocationAvailable) {
    return (
      <>
        <div>Your browser does not support Geolocation</div>
      </>
    );
  } else if (!isGeolocationEnabled) {
    return (
      <>
        <div>Geolocation is not enabled</div>
      </>
    );
  } else if (coords) {
    return (
      <>
        <h1>Apple AR Quick Look MVP.</h1>
        <p>{`Lat: ${coords.latitude}, Lon: ${coords.longitude}`}</p>
      </>
    );
  } else {
    return <h1>Apple AR Quick Look MVP.</h1>;
  }
}
