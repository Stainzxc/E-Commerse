import React from "react";
import { useState } from "react";
import sneakers from "../assets/images/sneakers.svg";
import sneakerphils from "../assets/images/sneakerphils.png";
import iconMenu from "../assets/images/iconMenu.svg";
import iconClose from "../assets/images/iconClose.svg";
import iconAvatar from "../assets/images/iconAvatar.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <div
      className="text-black flex items-center h-24 max-w-[1240px] m-auto px-4 border-b border-orange-200 
shadow-[inset_0_-2px_0_rgba(249,115,22,0.6)]
 md:border-b md:border-orange-200 
bg-white justify-center"
    >
      <img
        src={sneakerphils}
        alt="sneakers"
        className="mr-4 w-32 h-7 text-2xl cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div onClick={handleNav} className="block md:hidden">
        <img src={iconMenu} alt="iconMenu" className="mr-2 cursor-pointer" />
        {/* <AiOutlineMenu size={22} className="mr-2"/>   */}
      </div>
      <div className="flex items-center ">
        <ul className="hidden md:flex font-sans">
          <li className="p-4 cursor-pointer" onClick={() => navigate('/')}>Home</li>
          <li className="p-4 cursor-pointer" onClick={() => navigate('/men')}>Men</li>
          <li className="p-4 cursor-pointer" onClick={() => navigate('/women')}>Women</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Essentials</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
        <ShoppingCartOutlined
          className="ml-20 mr-2"
          style={{ fontSize: "26px" }}
        />
        <Avatar
          src={iconAvatar}
          className="border-2 border-orange-400 h-[40px] w-[40px]"
        />
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-200 h-full bg-[#fff] ease-in-out duration-500 md:hidden "
            : "fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-[#ff7d1a] px-4">sneaker</h1> */}
        <div onClick={handleNav} className="flex md:hidden cursor-all-scroll">
          {nav ? (
            <img
              src={iconClose}
              className="mt-2 mx-2 place-items-center h-[25px] cursor-pointer"
            />
          ) : (
            <img src={iconMenu} className="cursor-pointer" />
          )}
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
