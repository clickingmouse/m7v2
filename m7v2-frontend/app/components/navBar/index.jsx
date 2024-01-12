"use client";
import { useState } from "react";
import Navbar from "./navbar";
//import Menu from "./menu";
import Menu from '../menu';

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(' toggle isOpen: ' + isOpen)
  };
  return (
    <>
      <Menu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;