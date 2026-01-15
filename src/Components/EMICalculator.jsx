import React, { useState, useEffect } from "react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(7000);
  const [interest, setInterest] = useState(0.7);
  const [tenure, setTenure] = useState(15);

  const [emiPerDay, setEmiPerDay] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const [interestRatio, setInterestRatio] = useState(0);

  /* ================= DAILY PAYDAY LOGIC ================= */
  useEffect(() => {
    const p = amount;
    const dailyRate = interest / 100;
    const days = tenure;

    if (days <= 0) return;

    // Flat Daily Interest Calculation
    const interestAmount = p * dailyRate * days;
    const totalPayable = p + interestAmount;
    const dailyEmi = totalPayable / days;

    setTotalInterest(Math.round(interestAmount));
    setTotalAmount(Math.round(totalPayable));
    setEmiPerDay(Math.round(dailyEmi));
    setInterestRatio(interestAmount / totalPayable);
  }, [amount, interest, tenure]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat("en-IN").format(val);

  return (
    <section className="min-h-screen bg-blue-50 rounded-4xl md:rounded-[10%] flex items-center justify-center px-6 py-16 md:py-0">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT PANEL */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900">
            Payday Loan EMI Calculator
          </h2>
          <p className="text-gray-500 mt-2">
            Instant loans with daily repayment plans
          </p>

          <div className="space-y-8 mt-10">
            <Slider
              label="Loan Amount"
              value={`₹ ${formatCurrency(amount)}`}
              min={7000}
              max={50000}
              step={500}
              state={amount}
              setState={setAmount}
            />

            <Slider
              label="Daily Interest Rate"
              value={`${interest} %`}
              min={0.7}
              max={1.0}
              step={0.01}
              state={interest}
              setState={setInterest}
            />

            {/* Tenure (Strictly Days) */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">
                  Loan Tenure (Days)
                </span>
                <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-xs uppercase font-bold">
                  Days Only
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="45"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(+e.target.value)}
                className="w-full accent-blue-900"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1 Day</span>
                <span className="font-bold text-blue-900">{tenure} Days</span>
                <span>45 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center">
          <p className="text-gray-500">EMI / Day</p>

          <h3 className="text-4xl font-extrabold text-blue-900 mt-1">
            ₹ {formatCurrency(emiPerDay)}
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            {interest}% Interest (Per Day)
          </p>

          {/* DONUT */}
          <svg width="160" height="160" className="-rotate-90 mb-6">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#F1F1F1"
              strokeWidth="18"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#F18810"
              strokeWidth="18"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference * (1 - interestRatio)
              }
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>

          <div className="grid grid-cols-2 gap-6 w-full text-center">
            <Stat
              label="Principal"
              value={`₹ ${formatCurrency(amount)}`}
            />
            <Stat
              label="Total Interest"
              value={`₹ ${formatCurrency(totalInterest)}`}
            />
          </div>

          <div className="w-full border-t mt-6 pt-4 text-center">
            <p className="text-xs text-gray-400">
              Total Payable Amount
            </p>
            <p className="text-2xl font-black text-blue-900">
              ₹ {formatCurrency(totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== REUSABLE COMPONENTS ========== */

const Slider = ({ label, value, min, max, step, state, setState }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="bg-blue-50 text-blue-900 px-4 py-1 rounded-full text-sm font-medium">
        {value}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={state}
      onChange={(e) => setState(+e.target.value)}
      className="w-full accent-orange-500"
    />
  </div>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-bold text-gray-800">{value}</p>
  </div>
);

export default EMICalculator;