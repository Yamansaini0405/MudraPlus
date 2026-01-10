import React, { useState, useEffect } from 'react';

const EMICalculator = () => {
  const [amount, setAmount] = useState(300000);
  const [interest, setInterest] = useState(16);
  const [tenure, setTenure] = useState(3);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // SVG Circle Logic
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const [interestRatio, setInterestRatio] = useState(0);

  useEffect(() => {
    const p = amount;
    const r = interest / 12 / 100;
    const n = tenure * 12;

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emiValue * n;
    const totalInt = totalPayable - p;
    
    setEmi(Math.round(emiValue));
    setTotalAmount(Math.round(totalPayable));
    setTotalInterest(Math.round(totalInt));
    
    // Calculate what percentage of total payment is interest
    setInterestRatio(totalInt / totalPayable);
  }, [amount, interest, tenure]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN').format(val);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="max-w-7xl w-full   sm:p-8">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-2xl bg-gray-50">
          {/* Left Side: Inputs */}
          <div className="space-y-10">
            {/* Amount Slider */}
            <div className="space-y-4">
                 <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Personal Loan EMI Calculator</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-10 rounded-full"></div>
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-semibold">Loan Amount*</label>
                <div className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                  <span className="text-gray-500 mr-1">₹</span>
                  <input 
                    type="number" value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="bg-transparent font-bold text-gray-700 w-24 outline-none text-right py-2"
                  />
                </div>
              </div>
              <input 
                type="range" min="50000" max="1500000" step="10000"
                value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
              />
            </div>

            {/* Interest Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-semibold">Interest Rate*</label>
                <div className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                  <span className="text-gray-500 mr-2">%</span>
                  <input 
                    type="number" value={interest}
                    onChange={(e) => setInterest(Number(e.target.value))}
                    className="bg-transparent font-bold text-gray-700 w-12 outline-none text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="10" max="36" step="0.5"
                value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
              />
            </div>

            {/* Tenure Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-semibold">Loan Tenure*</label>
                <div className="bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
                  <span className="text-gray-500 mr-2 text-sm">Yr</span>
                  <input 
                    type="number" value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="bg-transparent font-bold text-gray-700 w-12 outline-none text-right"
                  />
                </div>
              </div>
              <input 
                type="range" min="1" max="5" step="1"
                value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-800"
              />
            </div>
          </div>

          {/* Right Side: Results Card with DYNAMIC CHART */}
          <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center bg-white shadow-sm ring-1 ring-gray-100">
            <span className="text-gray-500 font-medium mb-1">Your Monthly EMI</span>
            <h3 className="text-4xl font-extrabold text-gray-800 mb-1">₹{formatCurrency(emi)}</h3>
            <p className="text-sm text-gray-400 mb-6">{interest}% Interest Per Annum</p>

            {/* Dynamic SVG Donut Chart */}
            <div className="relative mb-8 flex items-center justify-center">
              <svg width="180" height="180" className="transform -rotate-90">
                {/* Principal Circle (Orange - Base) */}
                <circle
                  cx="90" cy="90" r={radius}
                  fill="transparent"
                  stroke="#F18810" // orange-500
                  strokeWidth="20"
                />
                {/* Interest Circle (Blue - Overlay) */}
                <circle
                  cx="90" cy="90" r={radius}
                  fill="transparent"
                  stroke="#133E5A" // blue-800
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - interestRatio)}
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full mb-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total Interest</span>
                </div>
                <p className="font-bold text-gray-800 text-lg">₹{formatCurrency(totalInterest)}</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Principal Amount</span>
                </div>
                <p className="font-bold text-gray-800 text-lg">₹{formatCurrency(amount)}</p>
              </div>
            </div>

            <div className="w-full border-t border-gray-100 pt-6 text-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Total Amount</span>
              <p className="text-2xl font-black text-gray-800">₹{formatCurrency(totalAmount)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;