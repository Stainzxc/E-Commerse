import React from "react";
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className="text-black w-full">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#ff7d1a] md:text-4xl text-3xl font-bold p-2">Sneaker Company</p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Limited Edition Sneakers</h1>
      <div className="flex justify-center items-center">
      <p className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">Best </p>
      <Typed className="md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2 text-[#ff7d1a]" strings ={["Shoes", "Style"]} typeSpeed={120} backSpeed={140} loop></Typed>
      </div>
      <p className="text-slate-700 font-bold py-2 md:text-2xl text-xl ">Shoes are boring. Wear sneakers.</p>
      <button className="bg-[#ff7d1a] w-[200px] rounded-md my-4 py-4 mx-auto text-white font-bold">Get Started</button>
      </div>
    </div>
  );
}
