import React from 'react'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import AboutSection from '../../components/HomePageComponents/AboutSection'
import OurTeam from '../../components/HomePageComponents/OurTeam'
import ContactSection from '../../components/HomePageComponents/ContactSection'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <AboutSection/>
   <OurTeam/>
   <ServicesSection/>
   <ContactSection/>

   </>
  )
}

export default Home