import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      
      {/* Main Container */}
      <div className="bg-white shadow-md rounded-xl p-10 max-w-2xl w-full text-center">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Welcome to Crisis Monitor 🚨
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          A real-time global news crisis detection system powered by BigQuery and Cloud Functions.
        </p>

        {/* Features */}
        <div className="text-left mb-8 space-y-2">
          <p>✔ Monitor global crisis events</p>
          <p>✔ Risk level analysis</p>
          <p>✔ Automated alerts</p>
          <p>✔ Supply-chain risk insights</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/about"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
}