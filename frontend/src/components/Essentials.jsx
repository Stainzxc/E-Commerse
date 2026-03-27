import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import { useNavigate } from "react-router";

export default function Essentials() {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto my-10  text-black bg-white ">
      <div className="grid md:grid-cols-2 sm:grid-cols-2">
        <div className="relative">
          <img src={image1} alt="image1" className="h-auto w-full" />
          <div className="absolute bottom-0 left-0 mb-10 ml-10 rounded-full bg-white px-6 py-2 text-lg">
            <button onClick={() => navigate("men")}>Men's</button>
          </div>
        </div>
        <div className="relative">
          <img src={image2} alt="image2" className="h-auto w-full" />
          <div className="absolute bottom-0 left-0 mb-10 ml-10 rounded-full bg-white px-6 py-2 text-lg">
            <button onClick={() => navigate("women")}>Women's</button>
          </div>
        </div>
      </div>
    </div>
  );
}
