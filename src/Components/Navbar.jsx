import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#', active: false },
    { name: 'Services', href: '#', active: false },
    { name: 'How we work?', href: '#', active: false },
    { name: 'Contact Us', href: '#', active: false },
  ];

  return (
    <motion.nav
      className="bg-white px-6 py-4 shadow-sm"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
            <motion.span className="text-[#133E5A] font-bold text-xl tracking-tight uppercase" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}></motion.span>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + idx * 0.04 }}
              className={`relative text-sm font-medium transition-colors ${link.active ? 'text-[#133E5A]' : 'text-gray-500 hover:text-[#133E5A]'}`}
            >
              {link.name}
              {link.active && <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#133E5A] rounded-full"></span>}
            </motion.a>
          ))}

          {/* CTA Button */}
          
        </div>
        <div>
          <motion.button whileHover={{ scale: 1.02 }} className="bg-[#133E5A] hover:bg-[#133E5A] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all">
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
            <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 + idx * 0.03 }} className="block text-gray-600 hover:text-[#133E5A] font-medium">
              {link.name}
            </motion.a>
          ))}
          <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-[#133E5A] text-white px-6 py-3 rounded-xl font-semibold">
            Get Loan
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;