import React from "react";
import { useState } from "react";
import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import iconPlus from "../assets/images/iconPlus.svg";
import iconMinus from "../assets/images/iconMinus.svg";

export default function Men() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    //condition for decrement to not get the negative output
    {
      count > 0
        ? setCount((prevCount) => prevCount - 1)
        : console.log("Cannot decrease count below 0.");
    }
  }
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 py-4">
        <img
          src={image1}
          alt="image1"
          className=" w-full  my-4 rounded-3xl"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#ff7d1a] font-bold text-xl md:text-2xl uppercase flex justify-center">
            Under Armour X Stephen Curry
          </p>
          <h1 className="font-bold text-2xl md:text-4xl py-2 flex justify-center">
            Under Armour Curry 7 Sour Patch
          </h1>
          <div className="mx-auto">
          <p className="">
            Stephen Curry has enjoyed snacking on SOUR PATCH KIDS for years. You
            know the ones. First they’re sour, then they’re sweet. They're the
            ultimate treat when taking a timeout.
          </p>
          <div className="grid  ">
            <div className="flex place-items-center">
              <span className="text-2xl py-2 font-bold mr-2">₱1,500</span>
              <p className="text-[#ff7d1a] font-bold bg-orange-100 rounded-lg px-2">
                50%
              </p>
            </div>
            <span className="font-bold text-lg text-slate-400 line-through">
              ₱3,000
            </span>
          </div>

          <div className="flex gap-4">
            <div className="flex justify-center  rounded-lg bg-slate-100  w-[140px] text-xl py-2 my-4">
              <button className="px-2 text-[#ff7d1a]" onClick={incrementCount}>
                <img src={iconPlus} alt="iconPlus" />
                {/* <PlusOutlined style={{fontWeight: "bold"}} className="font-bold"/> */}
              </button>
              <span className="px-8 items-center justify-center flex font-bold">
                {count}
              </span>
              <button className="px-2 text-[#ff7d1a] " onClick={decrementCount}>
                <img src={iconMinus} alt="iconMinus" />
                {/* <MinusOutlined /> */}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#ff7d1a] w-[200px] rounded-lg font-medium my-4 py-2 mx-auto md:mx-0 flex items-center justify-center text-white shadow-orange">
                <ShoppingCartOutlined
                  className="mr-2"
                  style={{ fontSize: "22px" }}
                />
                Add to Cart
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
