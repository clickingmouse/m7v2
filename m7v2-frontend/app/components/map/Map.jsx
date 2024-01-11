'use client'
import React from 'react'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


//22.29874175739053, 114.17236517374718
//
//export default function Teaser() {
  export default function GMap() {
 const { isLoaded } = useLoadScript({
   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
 });

 if (!isLoaded) return <div>Loading...</div>;
 return <Map />;
}

function Map() {
 const center = useMemo(() => ({ lat: 22.29874175739053, lng:114.17236517374718 }), []);

 return (
   <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
     <Marker position={center} />
   </GoogleMap>
 );
}