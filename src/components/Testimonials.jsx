import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover significant value from our unused Microsoft licenses. The process was smooth and professional.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions"
    },
    {
      quote: "I was skeptical at first, but SoftSell delivered exactly what they promised. Great service and quick payment!",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Global Innovations"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 p-8 rounded-lg shadow-md">
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 