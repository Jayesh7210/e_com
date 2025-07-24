import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111] text-white px-4 py-4 shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          GenZ Tees
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium uppercase text-sm">
          <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
          <li><Link to="/shop" className="hover:text-pink-400">Shop</Link></li>
          <li><Link to="/be-a-designer" className="hover:text-pink-400">Be a Designer</Link></li>
          <li><Link to="/login" className="hover:text-pink-400">Login</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 text-center font-medium">
          <Link to="/" className="block hover:text-pink-400">Home</Link>
          <Link to="/shop" className="block hover:text-pink-400">Shop</Link>
          <Link to="/be-a-designer" className="block hover:text-pink-400">Be a Designer</Link>
          <Link to="/login" className="block hover:text-pink-400">Login</Link>
        </div>
      )}
    </nav>
  );
}
