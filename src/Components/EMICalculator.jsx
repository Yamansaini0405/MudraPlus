import React, { useState, useEffect } from "react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(7000);
  const [interest, setInterest] = useState(0.7);
  const [tenure, setTenure] = useState(15);
  const [tenureType, setTenureType] = useState("days");

  const [emiPerWeek, setEmiPerWeek] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const [interestRatio, setInterestRatio] = useState(0);

  /* ================= BUSINESS LOGIC ================= */
  useEffect(() => {
    const p = amount;
    const annualRate = interest / 100;

    // Convert tenure to weeks
    const weeks =
      tenureType === "days" ? tenure / 7 : tenure;

    if (weeks <= 0) return;

    // Simple interest for short-term loans
    const interestAmount =
      p * annualRate * (weeks / 52);

    const totalPayable = p + interestAmount;
    const weeklyEmi = totalPayable / weeks;

    setTotalInterest(Math.round(interestAmount));
    setTotalAmount(Math.round(totalPayable));
    setEmiPerWeek(Math.round(weeklyEmi));
    setInterestRatio(interestAmount / totalPayable);
  }, [amount, interest, tenure, tenureType]);

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
            Loans designed for days & weeks
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
              label="Interest Rate"
              value={`${interest} %`}
              min={tenureType === "days" ? 0.7 : 1}
              max={tenureType === "days" ? 1 : 10}
              step={0.1}
              state={interest}
              setState={setInterest}
            />

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-700">
                  Loan Tenure
                </span>

                <div className="flex gap-2">
                  {["days", "weeks"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setTenureType(type);
                        setTenure(type === "days" ? 15 : 2);
                        setInterest(type === "days" ? 0.7 : 1);
                      }}
                      className={`px-4 py-1 rounded-full text-sm transition ${
                        tenureType === type
                          ? "bg-blue-900 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="range"
                min="1"
                max={tenureType === "days" ? 45 : 6}
                value={tenure}
                onChange={(e) => setTenure(+e.target.value)}
                className="w-full accent-blue-900"
              />

              <p className="text-right text-sm text-gray-500 mt-1">
                {tenure} {tenureType}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center">
          <p className="text-gray-500">EMI / Week</p>

          <h3 className="text-4xl font-extrabold text-blue-900 mt-1">
            ₹ {formatCurrency(emiPerWeek)}
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            {interest}% Interest (Short Term)
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
