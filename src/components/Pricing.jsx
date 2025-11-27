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

  const itemPrices = [
    { item: "Suit (2-piece)", category: "Dry Cleaning", price: "₦7,000" },
    { item: "Dress (Casual)", category: "Dry Cleaning", price: "₦4,000" },
    { item: "Shirt (Laundered & Pressed)", category: "Laundry", price: "₦1,000" },
    { item: "Bedding (Queen Set)", category: "Laundry", price: "₦3,500" },
    { item: "Trousers", category: "Dry Cleaning", price: "₦1,500" },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Title */}
        <h2 className="text-4xl text-gray-900 font-extrabold text-center mb-14">Our Pricing</h2>

        {/* === PART 1: PRICING PLANS === */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mt-3">{plan.price}</p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button className="bg-blue-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* === PART 2: DETAILED TABLE === */}
        <div className="bg-white rounded-2xl shadow-md p-10 overflow-x-auto">
          <h3 className="text-2xl font-semibold mb-6">Price List (Per Item)</h3>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="pb-3">Item</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Price</th>
              </tr>
            </thead>

            <tbody>
              {itemPrices.map((row, index) => (
                <tr key={index} className="border-b last:border-none">
                  <td className="py-4">{row.item}</td>
                  <td className="py-4 text-gray-600">{row.category}</td>
                  <td className="py-4 font-semibold">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
