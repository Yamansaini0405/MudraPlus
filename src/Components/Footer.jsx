import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans">
      {/* CTA Section */}
      <section className="bg-white pt-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-t-[2rem] bg-blue-900/20 min-h-[450px] flex items-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#133E5A 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch relative z-10">
          
          <div className="relative min-h-[300px] lg:min-h-full">
            <div className="absolute top-0 left-0 w-11/12 h-[95%] bg-[#4F599D] rounded-br-[3rem] z-10 shadow-2xl">
            <img src="https://www.andromedaloans.com/wp-content/uploads/2023/01/home-loan-documents-first-time-homebuyers-1024x683.webp" alt="" className='object-cover'/>
            </div>
            
            <div className="absolute top-0 left-0 w-1/3 h-4 bg-[#2D335E] z-20"></div>
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Get Started</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-10">
              Unlock Your <span className="text-blue-900">Financial</span> <br /> 
              Potential Today!
            </h2>

            <button className="bg-[#05011D] hover:bg-blue-900 transition-all duration-300 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl group flex items-center gap-3">
              Get Started Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>

        <div className="absolute bottom-0 right-[40%] w-8 h-8 bg-[#FF71A4] opacity-80 blur-sm rounded-sm"></div>
      </div>
    </section>

      {/* Main Footer Links */}
      <div className="bg-blue-900 text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Branding Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-1 text-3xl font-bold">
                Mudra<span>Plus</span>
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Tincidunt lobortis in adipiscing facilisi. Euismod facilisi in sit ut quis id morbi nunc ultrices. Tellus dictum placerat est et.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Programs</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Business Loan</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Personal Loan</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Financial Planning</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Consultation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <p className="text-white/70 text-sm mb-6">
                Our Support and Sales team is available 24/7 to answer your queries
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin size={18} className="text-[#FFBF1C]" />
                  <span>123 Main St, Suite 500, New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone size={18} className="text-[#FFBF1C]" />
                  <span>+1 (333) 000-0000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Area */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-xs tracking-wide">
              Copyright © {currentYear} MudraPlus | <span className="text-white/70">Design by YAYTech❤️</span>
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-900 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;