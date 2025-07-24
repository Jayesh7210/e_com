import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";
import Footer from "../Components/Footer";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#111] min-h-screen text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">Shop T-Shirts</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-400">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="bg-gray-900 p-4 rounded-xl hover:shadow-lg hover:scale-105 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4 rounded bg-white"
                />
                <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                <p className="text-pink-400 font-medium">₹{product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
}
