import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: 1400,
    height: 500
  };

const center = {
    lat:  40.712776,
    lng:  -74.005974
  };
  
const GoogleMapContact = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD2CLA5mgPIRvCdZgF-6Brz54_4GeLQXIg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
export default GoogleMapContact