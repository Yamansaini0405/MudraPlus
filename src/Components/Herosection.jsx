import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col justify-center px-6 md:px-20 py-10 overflow-hidden font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="z-10 text-white space-y-6">
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#132e5a] border border-white/20 backdrop-blur-sm">
              <div className="w-4 h-4 rounded-full border border-yellow-500/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>
              <span className="text-xs font-medium text-gray-300">Trusted by 50,000+ customers</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-[#132e5a] font-bold leading-tight tracking-tight">
              Get Your Dream <br /> Loan <br />
              <span className="text-[#FF9F43]">With Best Rates</span>
            </h1>

            <p className="text-[#132e5a] text-lg max-w-lg leading-relaxed">
              Quick approval, flexible terms, and competitive interest rates. 
              Make your dreams come true with our hassle-free loan solutions.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Instant approval in 24 hours",
                "Interest rates starting at 3.5%",
                "No hidden charges or fees"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#132e5a]">
                  <CheckCircle2 className="text-[#FF9F43]" size={20} />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-[#FF9F43] hover:bg-[#e68a2e] text-white px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20">
                Apply Now <ChevronRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-sm font-bold transition-all">
                Calculate EMI
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicyoGbCXDasdpf0FvsgLG5_MLf2DxN_R1ow&s" 
                alt="Happy family" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Status Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-2xl flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-xs font-semibold mb-1">Your Loan Status</p>
                  <p className="text-[#0a192f] text-2xl font-bold">Approved!</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-[#FF9F43] justify-end">
                    <div className="w-4 h-4 rounded-full border-2 border-[#FF9F43] border-t-transparent animate-spin"></div>
                    <span className="text-xs font-bold uppercase tracking-wider">In 23 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        {/* <div className="mt-24 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Loans Disbursed", value: "$2.5B+" },
              { label: "Happy Customers", value: "50K+" },
              { label: "Starting Rate", value: "3.5%" },
              { label: "Partner Banks", value: "15+" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-[#FF9F43] text-3xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;