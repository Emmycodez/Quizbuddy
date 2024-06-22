import React from 'react'
import HeroSection from "../components/HeroSection";
import Perks from "../components/Perks";
import Steps from "../components/Steps";
import UseCases from "../components/UseCases";
import Integrations from "../components/Integrations";
import LiveDemo from "../components/LiveDemo";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <Perks/>
      <Steps/>
      <UseCases/>
      <Integrations/>
      <LiveDemo/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default HomePage