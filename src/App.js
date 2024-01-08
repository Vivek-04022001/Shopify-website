import React, { useState, useEffect } from "react";

import "./App.css";


import Header from "./components/Header/Header";


import Hero from "./components/UI/Hero";

import Testimonials from "./components/UI/Testimonials";

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
      <Testimonials/>
     
    </>
  );
}

export default App;
