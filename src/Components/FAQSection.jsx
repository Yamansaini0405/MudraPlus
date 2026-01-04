import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import img from "../assets/FAQ.png"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the risks involved?",
      answer: "Ornare diam a est, nunc a. Morbi libero potenti at mus erat tempus egestas. Lorem id tempor, at ac libero lorem nunc. Tempus vitae aliquam habitant donec et. Sagittis magna vulputate orci, ultrices. Lorem id lobortis cursus."
    },
    {
      question: "How do I confirm my eligibility status?",
      answer: "Our automated system checks your credit history and income stability in real-time. Once you link your account, you will receive an instant notification regarding your status."
    },
    {
      question: "Is the payback medium really effective and convenient?",
      answer: "Yes, we offer multiple repayment channels including direct debit, bank transfers, and card payments, all designed to ensure you never miss a deadline."
    },
    {
      question: "Are there any hidden charges?",
      answer: "Transparency is our core value. All interest rates and service fees are displayed upfront before you confirm your loan request."
    }
  ];

  return (
    <section className="bg-[#FFFAF4] py-24 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Questions you might ask
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Whether you chose to invest or give out loans, you will never be able to run away 
          from a happy future.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Illustration Area */}
        <div className="relative flex justify-center">
          {/* Main Illustration Placeholder */}
          <div className="relative z-10 w-full max-w-md">
            <img src={img} alt="Support Illustration" className="relative z-20 h-auto object-contain" />
          </div>
        </div>

        {/* Right Side: Accordion Area */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`transition-all duration-300 rounded-2xl border ${
                openIndex === index 
                ? 'bg-white border-white shadow-xl shadow-blue-100/50' 
                : 'bg-transparent border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-cyan-100' : 'bg-white border border-gray-200'
                }`}>
                  {openIndex === index 
                    ? <Minus size={20} className="text-[#0D4715]" /> 
                    : <Plus size={20} className="text-[#0D4715]" />
                  }
                </div>
                <span className={`font-semibold text-lg ${
                  openIndex === index ? 'text-[#0D4715]' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-20 pb-8 text-gray-500 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;