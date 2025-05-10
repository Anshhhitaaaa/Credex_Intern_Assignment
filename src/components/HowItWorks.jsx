import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = ({ darkMode }) => {
  const steps = [
    {
      icon: "📤",
      title: "Upload License",
      description: "Simply upload your software license details through our secure platform"
    },
    {
      icon: "💰",
      title: "Get Valuation",
      description: "Receive an instant valuation based on current market rates"
    },
    {
      icon: "💸",
      title: "Get Paid",
      description: "Accept the offer and get paid within 24 hours"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`p-8 rounded-lg shadow-md text-center transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.div 
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.icon}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>{step.title}</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 