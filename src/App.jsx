import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import ChatWidget from './components/ChatWidget'
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Update document class when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: darkMode ? '#111827' : '#fff' }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-colors duration-300`}
      style={{ backgroundColor: undefined }}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-16">
        <Hero darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <WhyChooseUs darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <ContactForm darkMode={darkMode} />
      </div>
      <ChatWidget />
    </motion.div>
  )
}

export default App
