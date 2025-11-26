import React from "react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[90vh] w-full bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Premium Dry Cleaning &
            <br />
            Laundry Services
          </h1>

          <p className="text-gray-200 mt-6 text-xl leading-relaxed max-w-lg">
            Fast, reliable, and spotless dry-cleaning services delivered to your doorstep — experience convenience and quality like never before.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Call Now Button */}
            <a
              href="tel:+23400000000"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
            >
              Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/23400000000"
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-green-600 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
