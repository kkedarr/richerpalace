import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-5 bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Dry<span className="text-gray-900">Clean</span>
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#why" className="hover:text-blue-600">Why Us</a>
          <a href="#process" className="hover:text-blue-600">Process</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
