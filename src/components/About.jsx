import React from "react";
import AboutImage from "../assets/about-image.jpg"; // <-- replace with your real image file

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-14">
          About Us
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={AboutImage}
              alt="About Us"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-justify">
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              Our Commitment to Cleanliness and Care
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              At RicherPalace, we believe in providing more than just a cleaning service. 
              We offer peace of mind, knowing your garments are handled with the utmost care, 
              using state-of-the-art technology and eco-friendly practices. Our dedicated 
              team is passionate about delivering exceptional results and unparalleled customer satisfaction.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From delicate dry cleaning to everyday laundry, we treat every item as our own. 
              We're committed to making your life easier by ensuring your clothes look, feel, 
              and smell fresh — allowing you to focus on what matters most.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
