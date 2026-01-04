import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/Herosection'
import HowItWorks from '../Components/HowItWorks'
import ServicesSection from '../Components/ServicesSection'
import WhyUs from '../Components/WhyUs'
import SecurityPrivacySection from '../Components/SecurityPrivacySection'
import TestimonialSection from '../Components/TestimonialSection'
import FAQSection from '../Components/FAQSection'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <HowItWorks/>
      <ServicesSection/>
      <WhyUs/>
      <SecurityPrivacySection/>
      <TestimonialSection/>
      {/* <FAQSection/> */}
      <Footer/>
    </>
  )
}

export default Home