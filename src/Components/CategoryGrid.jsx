import React from "react";

const categories = [
  { name: "Men", image: "/images/categories/men.jpg", link: "/shop?category=men" },
  { name: "Women", image: "/images/categories/women.jpg", link: "/shop?category=women" },
  { name: "Kids", image: "/images/categories/kids.jpg", link: "/shop?category=kids" },
  { name: "Trending", image: "/images/categories/trending.jpg", link: "/shop?category=trending" },
];

export default function CategoryGrid() {
  return (
    <div className="py-16 px-6 text-center bg-[#121212] text-white">
      <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <a
            href={cat.link}
            key={cat.name}
            className="group bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover group-hover:opacity-80"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-pink-500 transition">
                {cat.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
