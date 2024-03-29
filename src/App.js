import React from "react";
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import PopularServices from './components/service/PopularServices';
import BestSeller from './components/shop/BestSeller';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Instagram from './components/instagram/Instagram';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Slider />
        <PopularServices />
        <BestSeller />
        <About />
        <Testimonials />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
