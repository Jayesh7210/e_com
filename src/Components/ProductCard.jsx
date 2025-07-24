import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-md hover:shadow-pink-500/40 transition duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-pink-400 font-bold mt-1">₹{product.price}</p>
        <div className="flex justify-between items-center mt-3">
          <Link
            to={`/product/${product.id}`}
            className="text-sm bg-pink-500 hover:bg-pink-600 px-4 py-1 rounded-full font-medium transition"
          >
            View
          </Link>
          <button className="text-sm border border-pink-500 hover:bg-pink-600 px-4 py-1 rounded-full transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
