import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0D4715] flex items-center px-8 md:px-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 text-white space-y-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium tracking-widest uppercase opacity-80">
              Welcome to MudraPlus
            </span>
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-blue-700"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Seamless <br /> 
            <span className="font-normal">Loans, Brighter <br /> Futures</span>
          </h1>

          <div className="flex items-center gap-4">
            <button className="bg-yellow-500 hover:bg-black text-white px-10 py-4 rounded-full text-sm font-semibold transition-all">
              GET STARTED
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#EBE1D1] rounded-full text-[#0D4715] hover:scale-110 transition-transform">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Right Content - The Cards */}
        <div className="relative flex justify-center items-center">
          {/* Background Decorative Card */}
          <div className="absolute w-[340px] h-[220px] md:w-[450px] md:h-[280px] rounded-3xl rotate-[15deg] translate-y-12 translate-x-6 opacity-60 bg-gradient-to-br from-purple-600 via-red-500 to-yellow-600 blur-sm"></div>

          {/* Main Card */}
          <div className="relative w-[340px] h-[220px] md:w-[450px] md:h-[280px] rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 flex flex-col justify-between text-white"
               style={{
                 background: 'linear-gradient(135deg, #FF7E3A 0%, #FF7E3A 30%, #68B5D1 45%, #68B5D1 60%, #9B45B2 75%, #D63439 100%)'
               }}>
            
            {/* Card Header */}
            <div className="flex justify-between items-start">
              <div className="w-10 h-8 bg-white/20 rounded-md border border-white/30 flex items-center justify-center">
                <div className="w-6 h-4 border-y border-white/50"></div>
              </div>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/90"></div>
                <div className="w-10 h-10 rounded-full border border-white/50"></div>
              </div>
            </div>

            {/* Card Number */}
            <div className="space-y-1">
              <div className="flex gap-4 text-xl md:text-2xl tracking-[0.2em] font-medium">
                <span>****</span> <span>****</span> <span>****</span> 
                <span className="tracking-normal ml-auto text-3xl">2345</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase opacity-80 mb-1">Card Holder name</p>
                <p className="text-lg font-semibold">Noman Manzoor</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase opacity-80 mb-1">Expiry Date</p>
                <p className="text-lg font-semibold">02/30</p>
              </div>
            </div>

            {/* The "Wave" Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;