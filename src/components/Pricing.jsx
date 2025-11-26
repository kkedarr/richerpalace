import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦2,000",
      features: ["Laundry", "Folding", "Pickup"],
    },
    {
      name: "Premium",
      price: "₦5,000",
      features: ["Dry Cleaning", "Ironing", "Delivery"],
    },
    {
      name: "VIP",
      price: "₦10,000",
      features: ["Full Service", "Express Delivery", "Priority Support"],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="p-8 border rounded-xl shadow hover:shadow-xl transition">

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mt-3">{plan.price}</p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {plan.features.map((feature, j) => (
                  <li key={j}>• {feature}</li>
                ))}
              </ul>

              <button className="bg-blue-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-700">
                Choose Plan
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
