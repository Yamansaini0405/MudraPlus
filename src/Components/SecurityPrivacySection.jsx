import React from 'react';
import { ShieldCheck, Lock, Eye, Server, Shield, CheckCircle2 } from 'lucide-react';

const SecurityPrivacySection = () => {
  const securityFeatures = [
    {
      title: "Bank-Grade",
      desc: "256-bit AES encryption secure trusted by leading institutions.",
      icon: <Lock className="text-white" size={20} />,
      label: "Title"
    },
    {
      title: "Bank-Grade Encryption",
      desc: "256-bit AES encryption never sold or distributed.",
      icon: <Eye className="text-white" size={20} />,
      label: "Title"
    },
    {
      title: "Privacy-First Policy",
      desc: "Your personal data is protected and never shared with third parties.",
      icon: <Shield className="text-white" size={20} />,
      label: "Why Us Section"
    },
    {
      title: "Secure Server Infrastructure",
      desc: "Hosted on ISO certified 27/7 monitored data centers.",
      icon: <Server className="text-white" size={20} />,
      label: "Featured Features"
    }
  ];

  return (
    <section className="bg-[#EBE1D1] py-24 px-6 md:px-12 lg:px-24 font-sans rounded-b-[8%]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header matching your 'Why Us' style */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Security</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-[#0D4715]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            How Secure & <span className="text-[#0D4715]">Private</span> We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Glowing Shield Image Container */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full min-h-[400px] bg-[#0A0D2E] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-slate-800">
              {/* Animated Circuit/Shield Placeholder Image */}
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzF2xxIb_usBS1zn4dQT7YldLqHMND7lokFw&s" 
                alt="Security Shield"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D2E] via-transparent to-transparent"></div>
              
              {/* Central Glowing Shield Icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0D4715] blur-[60px] opacity-50 rounded-full animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-full shadow-[0_0_50px_rgba(29,161,242,0.3)]">
                    <ShieldCheck size={80} className="text-[#0D4715]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2 border border-slate-100 animate-bounce transition-all duration-1000" style={{animationDuration: '3s'}}>
                <CheckCircle2 size={18} className="text-[#0D4715]" />
                <span className="text-xs font-bold text-slate-800 uppercase">SSL Certified</span>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2 border border-slate-100 animate-bounce transition-all duration-1000" style={{animationDuration: '4s'}}>
                <CheckCircle2 size={18} className="text-[#0D4715]" />
                <span className="text-xs font-bold text-slate-800 uppercase">NDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="lg:col-span-7 bg-white/50 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityFeatures.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 p-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase ml-1 tracking-wider">{item.label}</span>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#0D4715] p-3 rounded-xl shadow-lg shadow-blue-100 group-hover:rotate-12 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacySection;