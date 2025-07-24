import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { getProductById } from "../services/productService";
import Footer from "../Components/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!size) return alert("Please select a size");
    dispatch(addToCart({ ...product, size, quantity }));
    alert("Added to cart!");
  };

  if (!product) {
    return (
      <div className="text-center text-white py-20">Loading product...</div>
    );
  }

  return (
    <div className="bg-[#111] text-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-pink-400 text-xl font-semibold mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-400 mb-6">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Select Size:</label>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <button
                  key={s}
                  className={`px-4 py-2 rounded border ${
                    size === s
                      ? "bg-pink-600 border-pink-600 text-white"
                      : "border-gray-600 hover:bg-gray-800"
                  }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
