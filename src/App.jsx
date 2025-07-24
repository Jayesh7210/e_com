import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetail";
import BeADesigner from "./pages/BeADesigner";
import LoginRegister from "./pages/LoginRegister";
import "./index.css"; // Tailwind CSS

export default function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/be-a-designer" element={<BeADesigner />} />
          <Route path="/login" element={<LoginRegister />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
