import React from "react";

export default function About() {
  return (
    <div className="w-full py-10 text-white px-4 bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 my-4 mx-10">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#ff7d1a]">
            Welcome to SneakerPhil!
          </h1>
          <p>
            At SneakerPhil, we are passionate about all things sneakers. Our
            goal is to provide sneaker enthusiasts and collectors with an
            exceptional shopping experience, offering a wide selection of the
            latest and most sought-after sneakers in the market.
          </p>
        </div>
        <div className="my-4 flex items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <input type="email" className="p-3 flex w-full rounded-md text-black border-2 border-black font-bold" placeholder="Enter Email"/>
            <button className="bg-[#ff7d1a] w-full rounded-lg font-medium my-4 py-2 mx-auto md:mx-0 flex items-center justify-center text-white shadow-orange">Notify Us</button>

          </div>
        </div>
      </div>
    </div>
  );
}
