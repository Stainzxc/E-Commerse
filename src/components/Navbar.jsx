import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export default function Navbar() {

    const [nav, setNav] = useState(false);
    function handleNav () {
        setNav(!nav);
    }
  return (
    <div className="text-black flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 border-b border-slate-200 shadow-md md:shadow-none md:border-b md:border-slate-600">
      <h1 className="w-full text-3xl font-bold text-[#ff7d1a] ">Sneaker</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Men</li>
        <li className="p-4">Women</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>
      <div className={!nav ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-200 h-full bg-[#fff] ease-in-out duration-300" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#ff7d1a] px-4">Sneaker</h1>
        <ul className="p-4">
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
