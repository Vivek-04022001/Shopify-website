import React, { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import About from "./components/UI/About";
import Blog from "./components/UI/Blog";

import Hero from "./components/UI/Hero";
import Newsletter from "./components/UI/Newsletter";
import Services from "./components/UI/Services";
import Team from "./components/UI/Team";
import Testimonials from "./components/UI/Testimonials";
import Opportunity from "./components/UI/Opportunity";
import Bonus from "./components/UI/Bonus";


import ShiftingCountdown from "./components/UI/ShiftingCountdown";
import Offers from "./components/UI/Offers";
import Pricing from "./components/UI/Pricing";

function App() {
 

  return (
    <>
      <Header  />
      <Hero  />
      <ShiftingCountdown/>
      <Offers/>
      <Bonus/>
      <Pricing/>
      {/* <Opportunity/> */}
     
      {/* <Services />
      <About />
      <Team />
      <Blog />
      <Testimonials />
      <Newsletter />
      <Footer /> */}
    </>
  );
}

export default App;
