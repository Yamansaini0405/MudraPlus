import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
            Get your <br />
            dream loan <br />
            in a simple
            way<span className="text-orange-500">.</span>
          </h1>

          {/* <p className="mt-6 text-gray-600 max-w-md">
            We help customers achieve their goals by providing flexible loan
            solutions with competitive rates and instant approval process.
          </p> */}

          <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition">
            Get Instant Loan
            <span>→</span>
          </button>

          {/* FEATURES */}
          <div className="mt-12 space-y-6">
            <Feature
              title="Instant approval in 24 hours"
              desc="Get quick decisions on your loan application with our streamlined process."
              icon="⚡"
            />
            <Feature
              title="Competitive interest rates from 1%"
              desc="Enjoy some of the lowest rates in the market tailored to your needs."
              icon="📈"
            />
            <Feature
              title="100% secure and transparent process"
              desc="Bank-level security with no hidden fees or charges guaranteed."
              icon="🛡️"
            />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative flex justify-center lg:justify-end">
          {/* BACK CARD */}
          <div className=" relative bg-white max-w-60 md:max-w-72 w-full rounded-2xl right-4 md:right-40 shadow-2xl p-6 rotate-[-9deg]">
            <p className="text-gray-400 text-sm">Priya Sinha</p>
            <h3 className="text-3xl font-bold text-blue-900 mt-2"> ₹180,000</h3>
            <p className="text-gray-500 text-sm">Approved Loan Amount</p>

            <div className="mt-4 bg-blue-600 text-white rounded-xl p-4">
              <p className="text-sm">Monthly Payment</p>
              <p className="text-2xl font-bold"> ₹550</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-orange-500 text-white rounded-xl p-3 text-center">
                <p className="text-xs">Interest Rate</p>
                <p className="font-bold">2.6%</p>
              </div>
              <div className="bg-pink-500 text-white rounded-xl p-3 text-center">
                <p className="text-xs">Tenure</p>
                <p className="font-bold">15 months</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-500 mb-2">Loan Status</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-[92%]"></div>
              </div>
              <p className="text-right text-sm text-blue-600 mt-1">92%</p>
            </div>
          </div>

          {/* FRONT CARD */}
          <div className="absolute  bg-white max-w-66 md:max-w-72 w-76 rounded-2xl left-15 md:left-60 shadow-2xl p-6">
            <p className="text-gray-400 text-sm">Ramesh Kumar</p>
            <h3 className="text-3xl font-bold text-blue-900 mt-2">₹160,000</h3>
            <p className="text-gray-500 text-sm">Approved Loan Amount</p>

            <div className="mt-4 bg-blue-600 text-white rounded-xl p-4">
              <p className="text-sm">Monthly Payment</p>
              <p className="text-2xl font-bold">₹950</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-orange-500 text-white rounded-xl p-3 text-center">
                <p className="text-xs">Interest Rate</p>
                <p className="font-bold">3.8%</p>
              </div>
              <div className="bg-pink-500 text-white rounded-xl p-3 text-center">
                <p className="text-xs">Tenure</p>
                <p className="font-bold">15 yrs</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-500 mb-2">Loan Status</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-[92%]"></div>
              </div>
              <p className="text-right text-sm text-blue-600 mt-1">92%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, desc, icon }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-blue-900">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </div>
);

export default HeroSection;