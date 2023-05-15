import React from "react";
import { useState } from "react";
import sneakers from "../assets/images/sneakers.svg";
import iconMenu from "../assets/images/iconMenu.svg";
import iconClose from "../assets/images/iconClose.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="text-black flex items-center h-24 max-w-[1240px] m-auto px-4 border-b border-slate-200 shadow-orange md:shadow-none md:border-b md:border-orange-200 bg-white"> 
      <div onClick={handleNav} className="block md:hidden">
        <img src={iconMenu} alt="iconMenu" className="mr-2 cursor-pointer" />
        {/* <AiOutlineMenu size={22} className="mr-2"/>   */}
      </div>
      {/* <h1 className="w-full text-3xl font-bold text-[#ff7d1a] ">sneaker</h1> */}
      <img src={sneakers} alt="sneakers" className="mr-4" />
      <ul className="hidden md:flex font-sans">
        <li className="p-4">Home</li>
        <li className="p-4">Men</li>
        <li className="p-4">Women</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-200 h-full bg-[#fff] ease-in-out duration-500 md:hidden "
            : "fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#ff7d1a] px-4">sneaker</h1> */} 
        <div onClick={handleNav} className="flex md:hidden cursor-all-scroll">
          {nav ? <img src={iconClose}  className="mt-2 mx-2 place-items-center h-[25px] cursor-pointer" /> : <img src={iconMenu} className="cursor-pointer" />}
        <img src={sneakers} alt="sneakers" className="my-2" />
        </div>
        <ul className="p-4 font-bold">
          <li className="p-4">Home</li>
          <li className="p-4">Men</li>
          <li className="p-4">Women</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
