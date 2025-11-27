import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "+23456789010";
  const emailAddress = "info@richerpalace.com";
  const whatsappNumber = "+23456789010";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(
      `Hello, my name is ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}`
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-14 tracking-tight">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="bg-blue-50 shadow-sm hover:shadow-xl border border-gray-100 transition rounded-2xl p-10">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              We're here to help with any questions about our services.
            </p>

            <div className="mt-8 space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FiPhone className="text-blue-600 text-2xl" />
                </div>
                <span className="text-lg font-medium">{phoneNumber}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-xl">
                  <FaWhatsapp className="text-green-600 text-2xl" />
                </div>
                <span className="text-lg font-medium">Chat on WhatsApp</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FiMail className="text-blue-600 text-2xl" />
                </div>
                <span className="text-lg font-medium">{emailAddress}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FiMapPin className="text-blue-600 text-2xl" />
                </div>
                <span className="text-lg font-medium">
                  123 Clean Street, Laundry City, LC 90210
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-blue-50 shadow-sm hover:shadow-xl border border-gray-100 transition rounded-2xl p-10">
            <h3 className="text-2xl font-semibold">Send Us a Message</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Fill out the form and our team will reach out shortly.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                rows={6}
                className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={handleEmailSubmit}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition w-full"
                >
                  Send via Email
                </button>

                <button
                  onClick={handleWhatsAppSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition w-full"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;