import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = ({ refs = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', ref: null, active: true },
    { name: 'Why Us', ref: refs.whyUsRef, active: false },
    { name: 'Services', ref: refs.servicesRef, active: false },
    { name: 'Testimonials', ref: refs.testimonialsRef, active: false },
    { name: 'Contact Us', ref: null, active: false },
  ];

  return (
    <motion.nav
      className="bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 sticky top-0 z-100 px-6 py-4 "
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
            <motion.span className="text-blue-900 font-bold text-xl tracking-tight uppercase" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}></motion.span>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.name}
              onClick={() => link.ref && scrollToSection(link.ref)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + idx * 0.04 }}
              className={`relative text-sm font-medium transition-colors cursor-pointer ${link.active ? 'text-blue-900' : 'text-gray-500 hover:text-blue-900'}`}
            >
              {link.name}
              {link.active && <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-900 rounded-full"></span>}
            </motion.button>
          ))}

          {/* CTA Button */}
          
        </div>
        <div className="hidden md:flex">
          <motion.button whileHover={{ scale: 1.02 }} className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all">
            Get Loan
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.28 }}>
          {navLinks.map((link, idx) => (
            <motion.button key={link.name} onClick={() => link.ref && scrollToSection(link.ref)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 + idx * 0.03 }} className="block w-full text-left text-gray-600 hover:text-blue-900 font-medium cursor-pointer">
              {link.name}
            </motion.button>
          ))}
          <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold">
            Get Loan
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;