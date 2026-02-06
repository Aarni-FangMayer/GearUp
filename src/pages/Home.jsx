import React from 'react'
import MobileMenu from '../components/navigation/mobilemenu/MobileMenu';
import Hero from '../page_sections/hero_section/Hero';
// import PromoServices from '../page_sections/promo_section/PromoServices';
// import About from '../page_sections/about_section/About';
// import Trust from '../page_sections/trust_section/Trust';
// import Services from '../page_sections/services_section/Services';
// import Contacts from '../page_sections/contacts_section/Contacts';
// import Footer from '../page_sections/footer/Footer';

const Home = () => {
  return (
    <>
        <MobileMenu />
        <Hero id="hero" />
        
    {/* <section id="promo">
        <PromoServices />
    </section> */}
      
    {/* <section id="about">
        <About />
    </section> */}
    
    {/* <section id="trust">
        <Trust />
    </section> */}

    {/* <section id="services">
        <Services />
    </section> */}

    {/* <section id="contacts">
        <Contacts />
    </section> */}
{/* 
      <Footer /> */}
    </>
  )
}

export default Home
