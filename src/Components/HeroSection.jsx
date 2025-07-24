import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#111] via-[#1e1e1e] to-[#000] text-white py-24 px-6 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Wear Your Imagination.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Customize your own T-shirts or discover unique designs by rising GenZ artists. Only on <strong>Troxx</strong>.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/shop"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Shop Now
        </Link>
        <Link
          to="/be-a-designer"
          className="border border-pink-400 text-pink-300 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Be a Designer
        </Link>
      </div>
    </section>
  );
}
