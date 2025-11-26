import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Smith",
      text: "Amazing service! My clothes look brand new every time.",
    },
    {
      name: "Sarah Williams",
      text: "Affordable and reliable. Highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700">{review.text}</p>
              <h4 className="text-lg font-semibold mt-4 text-blue-600">{review.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
