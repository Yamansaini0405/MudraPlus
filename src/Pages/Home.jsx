import React from 'react'
import Navbar from '../Components/Navbar'
import MotionWrapper from '../Components/MotionWrapper'
import HeroSection from '../Components/Herosection'
import HowItWorks from '../Components/HowItWorks'
import ServicesSection from '../Components/ServicesSection'
import WhyUs from '../Components/WhyUs'
import SecurityPrivacySection from '../Components/SecurityPrivacySection'
import TestimonialSection from '../Components/TestimonialSection'
import FAQSection from '../Components/FAQSection'
import Footer from '../Components/Footer'
import EMICalculator from '../Components/EMICalculator'

function Home() {
  return (
    <>
      <Navbar />
        <MotionWrapper>
          <HeroSection/>
          {/* <HowItWorks/> */}
          <EMICalculator/>
          <ServicesSection/>
          <WhyUs/>
          <SecurityPrivacySection/>
          <TestimonialSection/>
          {/* <FAQSection/> */}
          <Footer/>
        </MotionWrapper>
    </>
  )
}

export default Home