"use client";
import React from "react";
import { useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
//import {APIProvider, Map, useMapsLibrary} from '@vis.gl/react-google-maps';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps";

//googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
export default function MapDirections() {
  const center = useMemo(
    () => ({ lat: 22.29874175739053, lng: 114.17236517374718 }),
    []
  );

  return (
    <>
      <section>
        <div className="py-29" style={{ height: "90vh" }}>
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
              zoom={12}
              center={center}
              gestureHandling={"greedy"}
              //disableDefaultUI={true}
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
              fullscreenControl={false}
            >
              <Directions />
            </Map>
          </APIProvider>
        </div>
      </section>
    </>
  );
}

function Directions() {
  //get map instance
  const map = useMap();
  //load map library
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();

  const [directionsRenderer, setDirectionsRenderer] = useState();

  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);

  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: "Hong Kong International Airport",
        destination: { lat: 22.2986953, lng: 114.1724183 },
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: { modes: ["BUS"], routingPreference: "LESS_WALKING" },
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);
  console.log(routes);
  ////////////////////////////////////////////

  useEffect(() => {
    if (!directionsRenderer) return;

    directionsRenderer.setRouteIndex(routeIndex);
    console.log("---->" + routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  //console.log(directionsService)
  console.log(leg);

  return (
    <div className="  ">
      {/*wrapper*/}
      <div className="directions z-50 relative bg grid grid-cols-3 gap-2 flex flex-row justify-end">
        <div className="bg-blue-200 col-end-4">
          {" "}
          {/*col wrapper*/}
          <h2>From HK International Airport</h2>
          <p>
            Recommmended - bus
            <br />
            {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
          </p>
          <p>Diestance: {leg.distance?.text}</p>
          <p>Duration: {leg.duration?.text}</p>
          <h2> Other Routes</h2>
          {
            //console.log(routes)
          }
          <ul>
            {routes.map((route, index) => {
              //console.log(route.legs[0].duration);
              //console.log(index);

              return (
                <li key={route.index}>
                  <button onClick={() => setRouteIndex(index)}>
                    {route.legs[0].duration.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* end col wrapper*/}
      </div>
    </div>
  );
}

const selection = {
  hkia: {},
};
