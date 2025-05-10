import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "Bank-level security for all license transfers and payments"
    },
    {
      icon: "⚡",
      title: "Quick Process",
      description: "Get paid within 24 hours of accepting an offer"
    },
    {
      icon: "💎",
      title: "Best Market Rates",
      description: "Competitive pricing based on real-time market data"
    },
    {
      icon: "🤝",
      title: "Expert Support",
      description: "Dedicated team to guide you through the entire process"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 