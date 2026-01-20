import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const PaymentNavbar = ({ refs = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };



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
      </div>
    </motion.nav>
  );
};

export default PaymentNavbar;