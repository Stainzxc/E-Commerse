import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import "react-medium-image-zoom/dist/styles.css";
import ImageMagnifier from "./ImageMagnifier";

const sizeOptions = [
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Could not load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, cartItem]));

    alert("Item added to cart!");
  };

  if (loading) return <div className="p-8">Loading product...</div>;
  if (error || !product)
    return (
      <div className="p-8 text-red-600">{error || "Product not found"}</div>
    );

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
        <div
          className="border rounded-lg overflow-hidden cursor-zoom-in"
        >
          <ImageMagnifier
            src={product.imageUrl}
            width="100%"
            height="490px"
            zoomLevel={2.5}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category} Shoes</p>

          <div className="mb-4">
            <span className="text-3xl font-extrabold text-red-600">
              ₱{product.price}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-lg">Select Size</h2>
            <div className="grid grid-cols-5 md:grid-cols-6 gap-2 mt-3">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-2 rounded font-semibold ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  US {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="font-semibold">Qty</span>
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={addToCart}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold rounded-lg shadow hover:opacity-90"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Continue Shopping
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>Free shipping on orders over ₱5,000.</p>
            <p>Returns accepted within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
