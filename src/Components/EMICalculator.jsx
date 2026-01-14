import React, { useState, useEffect } from "react";

const EMICalculator = () => {
    const [amount, setAmount] = useState(7000);
    const [interest, setInterest] = useState(5);
    const [tenure, setTenure] = useState(12);
    const [tenureType, setTenureType] = useState("months");

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const [interestRatio, setInterestRatio] = useState(0);

    /* ===== EMI LOGIC (UNCHANGED) ===== */
    useEffect(() => {
        const p = amount;
        const r = interest / 12 / 100;
        const months = tenureType === "weeks" ? tenure / 4 : tenure;

        if (months <= 0) return;

        const emiValue =
            (p * r * Math.pow(1 + r, months)) /
            (Math.pow(1 + r, months) - 1);

        const totalPayable = emiValue * months;
        const totalInt = totalPayable - p;

        setEmi(Math.round(emiValue));
        setTotalAmount(Math.round(totalPayable));
        setTotalInterest(Math.round(totalInt));
        setInterestRatio(totalInt / totalPayable);
    }, [amount, interest, tenure, tenureType]);

    const formatCurrency = (val) =>
        new Intl.NumberFormat("en-IN").format(val);

    return (
        <section className="min-h-screen bg-blue-50 rounded-[10%] flex items-center justify-center px-6">
            <div className="">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT – INPUT PANEL */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-blue-900">
                            Personal Loan EMI Calculator
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Adjust the values to estimate your monthly EMI instantly.
                        </p>

                        <div className="space-y-8 mt-10">
                            {/* Loan Amount */}
                            <Slider
                                label="Loan Amount"
                                value={`₹ ${formatCurrency(amount)}`}
                                min={7000}
                                max={50000}
                                step={500}
                                state={amount}
                                setState={setAmount}
                            />

                            {/* Interest */}
                            <Slider
                                label="Interest Rate"
                                value={`${interest} %`}
                                min={2}
                                max={15}
                                step={0.5}
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
                                        {["weeks", "months"].map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => setTenureType(type)}
                                                className={`px-4 py-1 rounded-full text-sm transition ${tenureType === type
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
                                    min="4"
                                    max={tenureType === "weeks" ? 52 : 24}
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

                    {/* RIGHT – RESULT CARD */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center relative">
                        <p className="text-gray-500">Your Monthly EMI</p>

                        <h3 className="text-4xl font-extrabold text-blue-900 mt-1">
                            ₹ {formatCurrency(emi)}
                        </h3>

                        <p className="text-sm text-gray-400 mb-6">
                            {interest}% Interest Per Annum
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
                                strokeDashoffset={circumference * (1 - interestRatio)}
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* BREAKDOWN */}
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
                            <p className="text-xs text-gray-400">Total Payable Amount</p>
                            <p className="text-2xl font-black text-blue-900">
                                ₹ {formatCurrency(totalAmount)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ===== SMALL REUSABLE COMPONENTS ===== */

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
