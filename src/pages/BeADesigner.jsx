// src/pages/BeADesigner.jsx
import React, { useState } from "react";

const BeADesigner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Designer Application Submitted:", formData);
    // Here you can add form submission to backend
    alert("Thank you for your interest! We'll be in touch.");
  };

  return (
    <section className="bg-[#0f0f0f] text-white min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#00f2ff]">
          Be a Designer on <span className="text-[#ff00c8]">Troxx</span>
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Share your creativity with the world. Submit your custom T-shirt designs and earn every time someone wears your art.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
          />
          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio / Instagram / Drive Link"
            required
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
          />
          <textarea
            name="message"
            placeholder="Tell us about your style or goals"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00f2ff]"
          />
          <button
            type="submit"
            className="w-full bg-[#00f2ff] text-black font-bold py-3 rounded-lg hover:bg-[#00e6f2] transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default BeADesigner;
