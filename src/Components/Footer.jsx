import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-purple-500 text-xl font-bold mb-4">TRoXX</h2>
          <p className="text-sm">
            Your ultimate destination for custom and trendy t-shirts by creators and sellers across the country.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/shop" className="hover:text-purple-400">Shop</Link></li>
            <li><Link to="/designers" className="hover:text-purple-400">Be a Designer</Link></li>
            <li><Link to="/login" className="hover:text-purple-400">Login</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-purple-400">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-purple-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-purple-400">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-400">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-400">
              <Twitter />
            </a>
            <a href="mailto:support@teezone.com" aria-label="Email" className="hover:text-purple-400">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} TRoXX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
