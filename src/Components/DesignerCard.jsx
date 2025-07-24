import React from "react";

export default function DesignerCard({ name, avatar, bio, link }) {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-md hover:shadow-pink-500/20 transition duration-300">
      <img
        src={avatar}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-left text-white">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{bio}</p>
        <a
          href={link}
          className="inline-block text-sm text-pink-400 hover:text-pink-300 font-semibold"
        >
          View Designs →
        </a>
      </div>
    </div>
  );
}
