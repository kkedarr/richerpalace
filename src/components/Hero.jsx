import React from "react";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[95vh] w-full bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-extrabold mt-20 text-white leading-tight drop-shadow-xl tracking-tight">
            Premium Dry Cleaning
            <br />
            & Laundry Services
          </h1>

          <p className="text-gray-200 mt-6 text-xl md:text-2xl leading-relaxed max-w-xl opacity-95">
            Fast, reliable, and spotless dry-cleaning delivered to your doorstep.
            Experience unmatched convenience and premium care.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+23400000000"
              className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/23400000000"
              target="_blank"
              className="px-10 py-4 bg-green-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-green-600 transition-all hover:shadow-xl"
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