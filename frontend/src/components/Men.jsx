import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blueSneaker from "../assets/images/blueSneaker.png";
import axiosInstance from "../api/axiosInstance";

export default function Men() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("products?category=Men");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => navigate(`/product/${product._id}`)}
            className="bg-white hover:shadow-lg transition duration-300 rounded-lg p-2 cursor-pointer"
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.imageUrl || blueSneaker}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h2 className="font-semibold text-lg">{product.name}</h2>

              <p className="text-gray-500 text-sm">
                {product.category}'s Shoes
              </p>

              <p className="font-bold mt-2">₱{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
