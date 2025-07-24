import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import ProductList from "../features/product/ProductList";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="bg-[#111] text-white font-sans">
      {/* Hero / Intro */}
      <HeroSection />

      {/* Categories */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Browse Categories</h2>
        <CategoryGrid />
      </section>

      {/* Trending Products */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Trending Tees</h2>
        <ProductList />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
