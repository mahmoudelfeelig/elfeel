import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  const sections = ['home', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-dark-800/95 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
              setActiveSection(section);
            }}
            className={`uppercase text-sm hover:text-purple-400 transition-colors ${
              activeSection === section ? 'text-purple-400' : 'text-gray-300'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-500 to-magenta-500"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};
