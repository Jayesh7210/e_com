import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-[#111] text-white font-sans">
      {/* Hero Section */}
      <section
    className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `url('https://media.istockphoto.com/id/2172349785/photo/pallet-of-vivid-and-colorful-indian-fabric-closeup-view-of-stacked-colours-saris-or-sarees-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=7xxjpKvnfid--lBqyp259b6D6JAqHGx8tdTNze-9gNE=')`,
    }}
  >
    {/* Optional overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/60 z-0" />

    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Design. Sell. Wear.
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Your dream T-shirt starts here. Shop custom designs or join as a designer and sell your art.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="/shop"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Shop Now
        </a>
        <a
          href="/be-a-designer"
          className="border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Be a Designer
        </a>
      </div>
    </div>
  </section>

      {/* Categories Section */}
      <section className="py-16 px-6 text-center bg-[url(/images/bg/categorysec.png)] bg-cover bg-center ">
        <h2 className="text-3xl font-bold mb-8 text-white">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["Men", "Women", "Kids", "Trending"].map((cat) => (
            <div
              key={cat}
              className="bg-gray-800 hover:bg-pink-500 transition p-6 rounded-xl text-xl font-semibold"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            ["Choose a Tee", "Browse categories or trending designs."],
            ["Customize", "Add text, art or pick a design."],
            ["Get it Delivered", "Fast shipping straight to your door."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Be a Designer Section */}
      <section className="py-16 px-6 text-center bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold mb-4 text-white">Are You a Designer?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Share your creativity with the world and earn. Upload your designs and let the world wear your art.
        </p>
        <a
          href="/be-a-designer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Start Designing
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-6 text-center">
        <p>© {new Date().getFullYear()} GenZ Tees. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}
