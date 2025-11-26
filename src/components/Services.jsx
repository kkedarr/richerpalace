import React from "react";
import { Shirt, Truck, Sparkles, BadgeCheck } from "lucide-react";

const Services = () => {
  const items = [
    {
      title: "Dry Cleaning",
      desc: "Professional dry cleaning for all types of fabrics.",
      icon: <Sparkles className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Laundry Service",
      desc: "Washed, dried and folded with exceptional care.",
      icon: <Shirt className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Ironing",
      desc: "Perfectly pressed clothes delivered crisp and fresh.",
      icon: <BadgeCheck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Pickup & Delivery",
      desc: "Fast pickup and delivery right to your doorstep.",
      icon: <Truck className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          High-quality cleaning and care tailored to keep your garments looking their best.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-5 p-4 bg-blue-50 rounded-xl shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;