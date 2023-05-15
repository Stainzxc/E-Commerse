import React from "react";
import sneakers from "../assets/images/sneakers.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full mx-auto text-gray-300 bg-black py-16 px-4 grid md:grid-cols-3 gap-8 h-auto ">
      <div className="">
        <img src={sneakers} alt="sneakers" className="" />
        <p className="mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nam
          animi corrupti laboriosam eos. Earum nostrum ducimus maxime, nulla
          quos harum sapiente itaque temporibus, voluptatibus sit deserunt, vel
          quia voluptates?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 mx-2">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
        <p className="mx-2">&copy; 2023 SneakerPhil, All Rights Reserved</p>
      </div>
      <div className="lg:col-span-2 flex justify-evenly">
        <div>
          <h6 className="font-medium text-white uppercase">Get Help</h6>
          <ul>
            <li className="py-2 text-sm">Order Status</li>
            <li className="py-2 text-sm">Delivery</li>
            <li className="py-2 text-sm">Returns</li>
            <li className="py-2 text-sm">Payment Options</li>
            <li className="py-2 text-sm">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white uppercase">About Sneakers</h6>
          <ul>
            <li className="py-2 text-sm">News</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Investors</li>
            <li className="py-2 text-sm">Sustainability</li>
            <li className="py-2 text-sm">Blogs</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white uppercase">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
