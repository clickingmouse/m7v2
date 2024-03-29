"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
//todo
// highlight current menu item on page
//<Menu isOpen={isOpen} toggle={toggle} />
const Menu = ({ isOpen, toggle }) => {
  console.log(isOpen);
  console.log(typeof toggle);

  const pathname = usePathname();
  console.log("PATH = " + pathname);
  //  const router = useRouter();
  // const [current, setCurrent] = useState(router.pathname);
  // useEffect(() => {
  //   setCurrent(router.pathname);
  //   console.log(router.pathname);
  // }, [router.pathname]);
  //    {isOpen,toggle,}: {isOpen: boolean; toggle: () => void;}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "0.7" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/rooms">
              <p>Rooms</p>
            </Link>
          </li>
          <li>
            <Link href="/getthingHere">
              <p className={`link ${pathname === "/getting-here" ? "" : ""}`}>
                Getting Here
              </p>
            </Link>
          </li>
          <li>
            <Link href="/aroundUs">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;

// onClick={toggle}
