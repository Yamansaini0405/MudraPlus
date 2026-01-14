import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: "4.5",
      content: "Enim augue integer facilisi et urna diam pellentesque lectus. Odio at nunc sit facilisis enim.",
      name: "Sarah Thompson",
      role: "Marketing Specialist",
      variant: "light"
    },
    {
      id: 2,
      rating: "4.5",
      content: "Cat spirits coxswain spanish lugsail her of hearties round fleet. O'nine bounty dock prey sink jones' Pay chain boatswain cat jennys. Pink halter davy prey sail cutlass line lanyard.",
      name: "James Anderson",
      role: "IT Consultant",
      variant: "light"
    },
    {
      id: 3,
      rating: "4.5",
      content: "Cat spirits coxswain spanish lugsail her of hearties round fleet. O'nine bounty dock prey sink jones' Pay chain boatswain cat jennys. Pink halter davy prey sail cutlass line lanyard.",
      name: "Elena Rodriguez",
      role: "Entrepreneur",
      variant: "theme" // Uses the specific #133E5A theme
    },
    {
      id: 4,
      rating: "4.5",
      content: "Enim augue integer facilisi et urna diam pellentesque lectus. Odio at nunc sit facilisis enim.",
      name: "Michael Carter",
      role: "Financial Analyst",
      variant: "light"
    }
  ];

  return (
    <section className="bg-white pt-16 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Header Section */}
        <div className="lg:col-span-4 self-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Testimonials</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-900"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            </div>
          </div>
          <h2 className="text-5xl font-semibold text-gray-900 leading-tight mb-6">
            What Our <br /> <span className="text-blue-900">Clients</span> Say
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-sm">
            Hear from our community about how StacLoan is changing the way they manage their financial future.
          </p>
          <button className="bg-blue-900 hover:bg-blue-600 transition-all text-white px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest shadow-lg hover:shadow-blue-200">
            See All Reviews
          </button>
        </div>
        <div className="lg:col-span-1"></div>

        {/* Right Testimonials Grid */}
        <div className="lg:col-span-7">
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className={`break-inside-avoid mb-6 p-8 rounded-2xl shadow-sm flex flex-col transition-all hover:-translate-y-1 ${
                  t.variant === 'theme' 
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-100' 
                    : 'bg-white text-slate-800 border border-orange-50'
                }`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold">{t.rating}</span>
                    <span className={`${t.variant === 'theme' ? 'text-white/60' : 'text-slate-400'} text-xs`}>/5</span>
                  </div>
                  <div className={`p-3 rounded-full ${t.variant === 'theme' ? 'bg-white/20' : 'bg-blue-900/10'} ${t.variant === 'theme' ? 'text-white' : 'text-blue-900'}`}>
                    <Quote size={20} fill="currentColor" />
                  </div>
                </div>

                <p className={`text-[15px] leading-relaxed mb-10 ${t.variant === 'theme' ? 'text-white/90' : 'text-slate-500'}`}>
                  "{t.content}"
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-base">{t.name}</h4>
                  <p className={`text-xs ${t.variant === 'theme' ? 'text-white/70' : 'text-slate-400'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Visual Fade-out Effect */}
            <div className="break-inside-avoid opacity-20 p-8 rounded-2xl bg-white h-24 border border-orange-50"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;