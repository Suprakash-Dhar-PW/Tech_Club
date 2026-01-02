import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaRocket } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] group"
          aria-label="Scroll to top"
        >
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md group-hover:bg-cyan-400/50 transition-all duration-300"></div>
          
          {/* The Button */}
          <div className="relative w-12 h-12 bg-[#0a0514]/80 backdrop-blur-md border border-cyan-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">
            {/* Icon - Swaps on hover for a nice effect */}
            <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
                <FaArrowUp className="text-cyan-400 text-lg absolute transition-transform duration-300 group-hover:-translate-y-10" />
                <FaRocket className="text-cyan-400 text-lg absolute translate-y-10 transition-transform duration-300 group-hover:translate-y-0" />
            </div>
          </div>

          {/* Tech Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;