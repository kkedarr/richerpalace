import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Affordable Pricing",
      desc: "Get premium cleaning at pocket-friendly prices.",
    },
    {
      title: "Quality Service",
      desc: "Handled by professionals with years of experience.",
    },
    {
      title: "Fast Delivery",
      desc: "Quick turnaround time for all your laundry needs.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
