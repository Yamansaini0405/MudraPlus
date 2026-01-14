import React from 'react';

const AppDownloadSection = () => {
  return (
    <section className="bg-[#f2f2f2] py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT: TEXT AND BUTTONS */}
        <div className="z-10">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Take your <br />
            financial situation <br />
            to the next level!
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
            Millions of people do not hesitate, to manage their finances using mepay
          </p>

          <div className="flex flex-wrap gap-4">
            {/* App Store Button */}
            <a href="#" className="bg-black hover:bg-gray-800 transition-colors px-6 py-2.5 rounded-xl flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6" />
              <div className="text-white text-left">
                <p className="text-[10px] uppercase font-medium leading-none">Download on the</p>
                <p className="text-xl font-bold leading-none">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a href="#" className="bg-black hover:bg-gray-800 transition-colors px-6 py-2.5 rounded-xl flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-6 h-6" />
              <div className="text-white text-left">
                <p className="text-[10px] uppercase font-medium leading-none">GET IT ON</p>
                <p className="text-xl font-bold leading-none">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT: TILTED PHONE MOCKUPS */}
        <div className="relative h-[500px] w-full mt-20 lg:mt-0">
          {/* Top-most Phone */}
          <div className="absolute top-[-10%] left-[10%] w-[280px] sm:w-[320px] transform -rotate-[25deg] shadow-2xl rounded-[3rem] border-[8px] border-gray-800 overflow-hidden z-20">
            <img 
               src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800" 
               alt="App Screen 1" 
               className="w-full h-auto"
            />
          </div>

          {/* Middle Phone */}
          <div className="absolute top-[20%] left-[40%] w-[280px] sm:w-[320px] transform -rotate-[25deg] shadow-2xl rounded-[3rem] border-[8px] border-gray-800 overflow-hidden z-10 opacity-90">
            <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
               alt="App Screen 2" 
               className="w-full h-auto"
            />
          </div>

          {/* Bottom-right Phone */}
          <div className="absolute top-[45%] left-[65%] w-[280px] sm:w-[320px] transform -rotate-[25deg] shadow-2xl rounded-[3rem] border-[8px] border-gray-800 overflow-hidden z-0 opacity-80">
            <img 
               src="https://images.unsplash.com/photo-1512428559083-a401c1070d6a?auto=format&fit=crop&q=80&w=800" 
               alt="App Screen 3" 
               className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppDownloadSection;