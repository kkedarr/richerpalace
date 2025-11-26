import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does dry cleaning take?",
      answer:
        "Most dry-cleaning orders are completed within 24–48 hours, depending on fabric type and workload.",
    },
    {
      question: "Do you offer pickup and delivery?",
      answer:
        "Yes! We offer home and office pickup and delivery for your convenience.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can call us, order on WhatsApp, or book directly from our website.",
    },
    {
      question: "Are your prices affordable?",
      answer:
        "Absolutely. We provide premium-quality dry-cleaning at competitive and transparent prices.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via phone, email, or WhatsApp anytime during business hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <FiChevronDown
                  className={`text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
