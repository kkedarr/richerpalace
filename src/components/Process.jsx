import React from "react";

const Process = () => {
  const steps = [
    { number: "01", title: "Schedule Pickup", desc: "Book a pickup from your home or office." },
    { number: "02", title: "We Clean", desc: "Your clothes are professionally cleaned with care." },
    { number: "03", title: "Delivery", desc: "We deliver your clothes fresh and spotless." },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 rounded-xl shadow hover:shadow-lg transition">
              <h1 className="text-5xl font-extrabold text-blue-600">{step.number}</h1>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
