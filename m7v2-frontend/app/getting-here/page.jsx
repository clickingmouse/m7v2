"use client";
import React from "react";
import { useState, useEffect } from "react";
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
  const [origin, setOrigin] = useState("HKIA");

  // for storing directions
  const [instructions, setInstructions] = useState([]);
  const updateInstructions = (instructions) => {
    setInstructions(instructions);
  };

  //const handleSubmit = async (e) => {
  const handleClick = (e, selection) => {
    e.preventDefault();
    console.log("path clicked" + selection);
    setOrigin(selection);
    console.log(origin + " selected");
  };

  //useEffect(() => {}, origin);

  return (
    <>
      <div>GettingHere</div>
      {/* layout wrapper*/}
      <div className=" w-full bg-gray-300 flex flex-col md:flex-row ">
        {/* map-meenu wrapper*/}
        <div className="">
          <h5>FROM</h5>

          <ul
            className="flex flex-row md:flex-col my-1 text-right md:divide-y md:divide-white"
            style={{ backgroundColor: "rgb(186, 227, 242)" }}
          >
            <li
              onClick={(e) => handleClick(e, "HKIA")}
              className="cursor-pointer pointer-events-auto  p-2"
              style={{ color: "white" }}
            >
              <p
                className={`${
                  origin === "HKIA"
                    ? "font-bold bg-originselected"
                    : "text-black"
                }`}
              >
                HK International Airport
              </p>
            </li>
            <li
              onClick={(e) => handleClick(e, "Hong Kong West Kowloon Station")}
              className="cursor-pointer pointer-events-auto  p-2"
            >
              West Kowloon High Spped Rail Terminal
            </li>
            <li
              onClick={(e) => handleClick(e, "China Ferry Terminal")}
              className="cursor-pointer pointer-events-auto  p-2"
            >
              Macau Ferry
            </li>
            <li
              onClick={(e) =>
                handleClick(e, "Austin Road Cross Boundary Coach Terminus")
              }
              className="cursor-pointer pointer-events-auto  p-2"
            >
              Cross Border bus Depot
            </li>
            <li
              onClick={(e) => handleClick(e, "Shenzhen Bay Port")}
              className="cursor-pointer pointer-events-auto  py-2"
            >
              Shenzhen
            </li>
          </ul>
        </div>
        {/* map-meenu wrapper*/}

        {/* map-main-content wrapper */}
        <div className="w-full">
          <MapDirections origin={origin} />
        </div>
        {/* map-main-content wrapper */}
      </div>
      {/* layout wrapper*/}
    </>
  );
}
