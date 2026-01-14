import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Wallet, Headset, Landmark, 
  Check, ArrowRight, Factory, Home, Heart, Car 
} from 'lucide-react';

const servicesData = [
  {
    id: 'Life Insurance',
    title: "Life Insurance",
    shortDesc: "Industrial Insurance",
    icon: <Factory className="w-5 h-5" />,
    tabIcon: <BarChart3 className="w-5 h-5" />,
    image: "https://img.freepik.com/free-photo/close-up-doctor-holding-wooden-cube_23-2149191359.jpg?semt=ais_hybrid&w=740&q=80",
    fullTitle: "25 Years Of Experience In Financial Support",
    longDesc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
    features: ["Secured Loans", "Credit Facilities", "Cash Advanced"],
    bgColor: "bg-[#d1f3f1]" // Soft Lime from image 1
  },
  {
    id: 'Health Insurance',
    title: "Health Insurance",
    shortDesc: "Health Insurance",
    icon: <Home className="w-5 h-5" />,
    tabIcon: <Wallet className="w-5 h-5" />,
    image: "https://media.istockphoto.com/id/2129928358/photo/health-insurance-concept-hand-holding-wooden-cube-with-healthcare-medical-icon-family-life.jpg?s=612x612&w=0&k=20&c=CmQ5RgwVZzZQbHI_eyAcSdq6M-I_0sixo1fs0oRHNR4=",
    fullTitle: "Strategic Investment Solutions for Growth",
    longDesc: "Invest with confidence using our data-backed strategies. We help you navigate market volatility while securing long-term wealth for your business and family.",
    features: ["Market Analysis", "Portfolio Growth", "Risk Management"],
    bgColor: "bg-[#f9d7c1]" // Soft Peach
  },
  {
    id: 'Home Insurance',
    title: "Home Insurance",
    shortDesc: "Pet Insurance",
    icon: <Heart className="w-5 h-5" />,
    tabIcon: <Headset className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    fullTitle: "Expert Guidance for Modern Businesses",
    longDesc: "Our consultants provide personalized roadmaps to help your business scale efficiently. From tax optimization to operational efficiency, we cover it all.",
    features: ["Tax Planning", "Business Strategy", "Operational Audit"],
    bgColor: "bg-[#fff3b0]" // Soft Yellow
  },
  {
    id: 'Car Insurance',
    title: "Car Insurance",
    shortDesc: "Auto Insurance",
    icon: <Car className="w-5 h-5" />,
    tabIcon: <Landmark className="w-5 h-5" />,
    image: "https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=",
    fullTitle: "Flexible Capital to Fuel Your Vision",
    longDesc: "Access the funds you need without the headache. Our streamlined loan process ensures you get capital quickly with competitive interest rates tailored for you.",
    features: ["Low Interest Rates", "Quick Approval", "Flexible Repayment"],
    bgColor: "bg-[#e2f1b1]"
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-[#ffffff] py-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Inspired by Image 1) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-200 text-blue-900 font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Loans we Offer to <span className="text-[#F18800]">Help You</span>
          </h2>
        </div>

        {/* Layout Grid (Inspired by Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-3 h-full">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`w-full h-25 flex items-center gap-4 p-5 rounded-xl transition-all duration-300 border text-lg font-semibold ${
                  activeTab.id === service.id 
                    ? "bg-blue-900 text-white border-blue-900 text-xl shadow-lg shadow-blue-200 scale-[1.02]" 
                    : "bg-white text-slate-700 border-slate-100 hover:border-blue-300"
                }`}
              >
                <span className={activeTab.id === service.id ? "text-white" : "text-blue-900"}>
                  {service.tabIcon}
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Image Section */}
                <div className="relative">
                  <div className={`absolute -inset-4 ${activeTab.bgColor} opacity-50 rounded-[2rem] -rotate-3`}></div>
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="relative z-10 rounded-2xl h-80 w-full object-cover shadow-lg"
                  />
                  {/* Floating Icon from Image 1 style */}
                  <div className={`absolute -top-6 -right-6 w-16 h-16 ${activeTab.bgColor} rounded-full z-20 flex items-center justify-center shadow-md`}>
                    {activeTab.icon}
                  </div>
                </div>

                {/* Text Content Section */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {activeTab.fullTitle}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {activeTab.longDesc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {activeTab.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700 font-semibold">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <Check className="w-4 h-4 text-blue-900" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;