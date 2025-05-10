import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      darkMode 
        ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-blue-600 to-blue-800'
    } text-white`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Turn Your Unused Software Licenses Into Cash
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            variants={itemVariants}
          >
            SoftSell helps businesses monetize their unused software licenses quickly and securely.
            Get instant valuations and competitive offers for your software assets.
          </motion.p>
          <motion.button 
            className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
              darkMode 
                ? 'bg-blue-500 hover:bg-blue-600' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sell My Licenses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 