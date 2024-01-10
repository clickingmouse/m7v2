"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
//<a href="https://www.flaticon.com/free-icons/bunk-bed" title="bunk bed icons">Bunk bed icons created by Ayub Irawan - Flaticon</a>

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
    <div className="" >{/*home wrapper */}

      <Link href="/" className='hover:text-red-700 flex flex-row items-center justify-center justify-start items-end'>
      
        <Image
          src="/images/bunk-bed-w.png"
          alt="bunk bed icon"
          width={width < 1024 ? "150" : "250"}
          height={width < 1024 ? "45" : "74"}
          className="block w-9 h-9 md:w-12 md:h-12"
        />
        
        
      <h1 className="font-bold uppercase p-4 text-white ">majestic 7 guesthouse </h1 >


      </Link>
      </div>{/* end home wrapper */}

      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div>




    </>
  );
};
//style={{ display: showButton ? "none" : "block" }}
export default Logo;