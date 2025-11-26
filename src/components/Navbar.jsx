import React from "react";
import Logo from "../assets/rplogo.png";

const Navbar = () => {
  return (
    <nav className="w-full py-3 bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <div className="h-10 w-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md text-xl font-semibold tracking-wider">
            RP
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Richer<span className="text-blue-700">Palace</span>
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium text-sm">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#why" className="hover:text-blue-600 transition-colors">Why Us</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Reviews</a>
        </div>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-xl shadow-sm font-medium hover:bg-blue-700 transition-all">
          Book Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
