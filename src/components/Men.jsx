import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

export default function Men() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="w-[1240px mx-auto grid md:grid-cols-2 py-4">
        <img src={image1} alt="image1" className=" w-[500px] mx-auto my-4 rounded-3xl"/>
        <div className="flex flex-col justify-center">
            <p className="text-[#ff7d1a] font-bold text-xl md:text-2xl uppercase">Under Armour X Stephen Curry</p>
            <h1 className="font-bold text-2xl md:text-4xl py-2">
                Under Armour Curry 7 Sour Patch 
            </h1>
            <p className="">Stephen Curry has enjoyed snacking on SOUR PATCH KIDS for years. You know the ones. First they’re sour, then they’re sweet. They're the ultimate treat when taking a timeout. </p>
            <button className="bg-[#ff7d1a] w-[200px] rounded-md font-medium my-4 py-4 mx-auto md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  );
}
