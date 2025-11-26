import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold">RicherPalace</h3>
        <p className="text-gray-400 mt-2">
          Professional dry cleaning & laundry services.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Reviews</a>
        </div>

        <p className="text-gray-500 mt-6">© 2025 RicherPalace. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
