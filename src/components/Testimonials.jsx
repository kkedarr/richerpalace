import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Michael A.",
      image: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      text: "FreshClean has transformed how I handle laundry. The service is fast, neat, and always on schedule.",
    },
    {
      name: "Chima O.",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 4,
      text: "My shirts come back perfectly pressed every time. I appreciate the consistency and professionalism.",
    },
    {
      name: "Tamuno E.",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      text: "The pickup and delivery option saves me so much time. Excellent customer service—highly recommended!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-extrabold text-gray-900 mb-14">What Our Customers Say</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="mt-4 flex justify-center text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
                {review.rating < 5 &&
                  Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} className="text-xl text-gray-300">★</span>
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mt-4 italic">"{review.text}"</p>

              {/* Name */}
              <h4 className="text-lg font-semibold mt-4">{review.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
