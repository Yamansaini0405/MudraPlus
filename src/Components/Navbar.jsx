import React, { useState } from 'react';
import { Menu, X, Layers } from 'lucide-react';
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
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="relative">
             <img src={logo} alt="Logo" className='h-10 ' />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                link.active ? 'text-[#0D4715]' : 'text-gray-500 hover:text-[#0D4715]'
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#0D4715] rounded-full"></span>
              )}
            </a>
          ))}
          
          {/* CTA Button */}
          
        </div>
          <button className="bg-[#0D4715] hover:bg-[#0D4715] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all">
            Get Loan
          </button>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-[#0D4715] font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-[#0D4715] text-white px-6 py-3 rounded-xl font-semibold">
            Get Loan
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;