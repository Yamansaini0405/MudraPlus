import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    { id: '01', title: 'Diverse Loan Options' },
    { id: '02', title: 'Transparent and Competitive Rates' },
    { id: '03', title: 'Effortless Online Application' },
    { id: '04', title: 'Commitment to Financial Education', active: true },
    { id: '05', title: 'Personalized Customer Support' },
  ];

  return (
    <section className="bg-[#EBE1D1] py-20 px-6 md:px-12 lg:px-24 font-sans rounded-t-[8%] ">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Why Us</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-[#0D4715]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              The <span className="text-[#0D4715]">MudraPlus</span> Difference
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              We provide more than just funds; we provide a pathway to financial stability with 
              integrity and innovation at the core of everything we do.
            </p>
          </div>

          <button className="bg-[#0D4715] hover:bg-blue-600 transition-colors text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider shadow-lg">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Rating Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="bg-[#0A0D2E] text-white p-10 rounded-xl w-full max-w-xs shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-6xl font-bold">4.5</span>
                  <span className="text-gray-400 text-xl">/5</span>
                </div>
                
                <div className="flex gap-1 mb-8 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-lg">Joseph M. Arevalo</h4>
                  <p className="text-gray-400 text-sm">Chief Executive Officer</p>
                </div>

                <div className="mt-8 flex gap-2">
                   <div className="w-10 h-10 rounded-full bg-[#0D4715]/30 flex items-center justify-center">
                      <ArrowUpRight size={20} className="text-[#0D4715]" />
                   </div>
                </div>
              </div>
              
              {/* Decorative Circle in Card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0D4715] rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Side: Accordion/List Section */}
          <div className="lg:col-span-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`group flex items-center justify-between p-6 rounded-lg transition-all cursor-pointer ${
                  benefit.active 
                  ? 'bg-[#0D4715] text-white shadow-xl translate-x-2' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-lg font-bold ${benefit.active ? 'text-white/80' : 'text-[#0D4715]'}`}>
                    {benefit.id}
                  </span>
                  <h3 className="text-xl font-medium">{benefit.title}</h3>
                </div>
                <ArrowUpRight 
                  size={24} 
                  className={`${benefit.active ? 'text-white' : 'text-gray-400 group-hover:text-[#0D4715]'} transition-colors`} 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;