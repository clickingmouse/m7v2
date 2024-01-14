"use client";
import React from "react";
import { useState } from "react";
import GMap from "../components/map/Map";
import MapDirections from "../components/map";
//import a from '../components/map/Map'
// todo
// responsive
// map menu bar /plane ship bus mtr

// Airport
// Austin Road Cross Boundary Coach Terminus
// Hong Kong West Kowloon Station
//China Ferry Terminal

export default function GettingHere() {
  // state of starting location to pass to map
  const [startingLocation, setStartingLocation] = useState(
    "Hong Kong International Airport"
  );

  //const handleSubmit = async (e) => {
  const handleClick = (e, selection) => {
    e.preventDefault();
    console.log("path clicked" + selection);
    setStartingLocation(selection);
    console.log(startingLocation);
  };

  return (
    <>
      <div>GettingHere</div>
      {/* layout wrapper*/}
      <div className="= w-full bg-gray-300 flex flex-col md:flex-row ">
        <h5>test</h5>

        {/* map-meenu wrapper*/}
        <div>
          <ul>
            <li onClick={(e) => handleClick(e, 1)}>From Airport</li>
            <li onClick={handleClick}>From Bus Depot</li>
            <li onClick={handleClick}>From Macau Ferry</li>
          </ul>
        </div>
        {/* map-meenu wrapper*/}

        {/* map-main-content wrapper */}
        <div>
          <MapDirections />
        </div>
        {/* map-main-content wrapper */}
      </div>
      {/* layout wrapper*/}
    </>
  );
}
