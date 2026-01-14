import React, { useRef } from 'react'
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
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const refs = {
    whyUsRef,
    servicesRef,
    testimonialsRef,
  };

  return (
    <>
      <Navbar refs={refs} />
        <MotionWrapper>
          <HeroSection/>
          {/* <HowItWorks/> */}
          <EMICalculator/>
          <div ref={servicesRef}>
            <ServicesSection/>
          </div>
          <div ref={whyUsRef}>
            <WhyUs/>
          </div>
          <SecurityPrivacySection/>
          <div ref={testimonialsRef}>
            <TestimonialSection/>
          </div>
          {/* <FAQSection/> */}
          <Footer/>
        </MotionWrapper>
    </>
  )
}

export default Home