import React from 'react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.nav
      initial={false}
      animate={{ backgroundColor: darkMode ? '#1f2937' : '#fff' }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full shadow-lg z-50 transition-colors duration-300`}
      style={{ backgroundColor: undefined }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Logo className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              SoftSell
            </span>
          </motion.div>
          
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.svg
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 