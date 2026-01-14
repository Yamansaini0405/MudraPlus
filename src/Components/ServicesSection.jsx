import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Wallet, Headset, Landmark,
  Check, ArrowRight, Factory, Home, Heart, Car,
  Calendar,
  AlertCircle,
  Briefcase
} from 'lucide-react';

const servicesData = [
  {
    id: "Payday Loan",
    title: "Payday Loan",
    shortDesc: "Salary Advance",
    icon: <Calendar className="w-5 h-5" />,
    tabIcon: <Wallet className="w-5 h-5" />,
    image:
      "https://www.womansera.com/wp-content/uploads/2023/03/payday-loan.jpg",
    fullTitle: "Bridge the Gap Until Your Next Paycheck",
    longDesc:
      "Our payday loans help you manage short-term cash shortages. Borrow small amounts for a few days or weeks and repay easily on your next salary date.",
    features: [
      "Short Tenure Loans",
      "Flexible Repayment",
      "No Collateral Required"
    ],
    bgColor: "bg-[#f9d7c1]"
  },
  {
    id: "Emergency Loan",
    title: "Emergency Loan",
    shortDesc: "Urgent Funds",
    icon: <AlertCircle className="w-5 h-5" />,
    tabIcon: <Headset className="w-5 h-5" />,
    image:
      "https://media.istockphoto.com/id/1217182792/photo/emergency-fund-in-the-glass-jar-with-cash.jpg?s=612x612&w=0&k=20&c=La5TtTMTrlcAJVT8eDeRXcB7QbGPJvQ2VZF1Q0GpLiw=",
    fullTitle: "Financial Support When You Need It Most",
    longDesc:
      "Unexpected expenses can arise anytime. Our emergency loans provide quick financial assistance with simple eligibility and fast processing.",
    features: [
      "24/7 Availability",
      "Fast Processing",
      "Transparent Charges"
    ],
    bgColor: "bg-[#fff3b0]"
  },
  {
    id: "Small Business Loan",
    title: "Small Business Loan",
    shortDesc: "Business Growth",
    icon: <Briefcase className="w-5 h-5" />,
    tabIcon: <Landmark className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    fullTitle: "Short Term Capital for Your Business Needs",
    longDesc:
      "Manage cash flow, inventory, or operational expenses with our short-term business loans. Designed for small businesses that need quick capital without long commitments.",
    features: [
      "Quick Working Capital",
      "Short Repayment Cycle",
      "Competitive Interest Rates"
    ],
    bgColor: "bg-[#e2f1b1]"
  },
  {

    id: "Instant Cash Loan",
    title: "Instant Cash Loan",
    shortDesc: "Quick Disbursal",
    icon: <Wallet className="w-5 h-5" />,
    tabIcon: <BarChart3 className="w-5 h-5" />,
    image:
      "https://thumbs.dreamstime.com/b/quick-cash-loan-symbol-concept-words-wooden-blocks-beautiful-orange-background-alarm-clock-business-copy-space-394917975.jpg",
    fullTitle: "Fast, Hassle-Free Short Term Loans",
    longDesc:
      "Get instant cash for urgent needs with our short-term loan solutions. Minimal documentation, fast approval, and transparent interest rates designed for quick financial relief.",
    features: [
      "Instant Approval",
      "Same-Day Disbursal",
      "Minimal Documentation"
    ],
    bgColor: "bg-[#d1f3f1]"
  },
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
                className={`w-full h-25 flex items-center gap-4 p-5 rounded-xl transition-all duration-300 border text-lg font-semibold ${activeTab.id === service.id
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