import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import mockupImage from '../assets/mockUp.png';
// import appApk from '../../public/app-release.apk';
const handleApkDownload = () => {
  const link = document.createElement('a');
  link.href = '/app-release.apk';  // URL from public folder
  link.download = 'MudraPlus.apk';
  link.click();
};

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px]  rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className='space-y-10'>
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
          <div className="flex gap-4 ">
            {/* Download Buttons */}
            <motion.button 
              className="h-12 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApkDownload}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-full"
              />
            </motion.button>
            <motion.button 
              className="h-12 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApkDownload}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="h-full"
              />
            </motion.button>
          </div>

          <button className="mt- inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition">
            Get Instant Loan
            <span>→</span>
          </button>

          {/* FEATURES */}
          <div className="mt-8 space-y-6">
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

        {/* RIGHT MOCKUP IMAGE */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-sm">
            <img
              src={mockupImage}
              alt="MudraPlus App Mockup"
              className="w-full h-[45rem] drop-shadow-2xl rounded-[8%]"
            />

            {/* Floating Animation Circle */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24  rounded-full blur-2xl"
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl"
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
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