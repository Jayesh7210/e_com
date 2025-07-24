import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace this with real login/register logic
    if (isLogin) {
      console.log("Logging in...");
      navigate("/home");
    } else {
      console.log("Registering user...");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Login to Troxx" : "Register at Troxx"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-1">Interest</label>
                <select
                  className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-700"
                >
                  <option>Buy T-Shirts</option>
                  <option>Sell T-Shirts</option>
                  <option>Be a Designer</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full p-2 rounded bg-[#2a2a2a] text-white border border-gray-700 focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={handleToggle}
            className="text-purple-400 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
