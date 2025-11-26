import React from "react";

const Services = () => {
  const items = [
    { title: "Dry Cleaning", desc: "Professional dry cleaning for all fabrics." },
    { title: "Laundry Service", desc: "Washed, dried & folded with care." },
    { title: "Ironing", desc: "Perfectly pressed clothes every time." },
    { title: "Pickup & Delivery", desc: "Fast home & office delivery service." },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
