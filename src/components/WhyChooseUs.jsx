import React from "react";
import { BadgeCheck, Leaf, Clock, PiggyBank } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Affordable Pricing",
      desc: "Premium care and expert cleaning without stretching your budget.",
      icon: <PiggyBank className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Quality Assurance",
      desc: "Handled by trained professionals using industry-standard processes.",
      icon: <BadgeCheck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Fast Turnaround",
      desc: "Quick processing and on-time delivery for every order.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Eco-Friendly Options",
      desc: "We use environmentally safe detergents and energy-efficient methods.",
      icon: <Leaf className="h-10 w-10 text-green-600" />,
    },
  ];

  return (
    <section id="why" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Dependable service, exceptional quality, and customer-focused care you can trust.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              <div className="mb-5 p-4 bg-blue-50 rounded-xl shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;