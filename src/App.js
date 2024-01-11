// import React, { useState, useEffect } from "react";

// import "./App.css";

// import Header from "./components/Header/Header";

// import Hero from "./components/UI/Hero";

// import Testimonials from "./components/UI/Testimonials";

// import Bonus from "./components/UI/Bonus";

// import ShiftingCountdown from "./components/UI/ShiftingCountdown";
// import Offers from "./components/UI/Offers";
// import Pricing from "./components/UI/Pricing";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <ShiftingCountdown />
//       <Offers />
//       <Bonus />
//       <Pricing />
//       <Testimonials />
//     </>
//   );
// }

// export default App;

import React, { lazy, Suspense } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/UI/Hero"));
const Testimonials = lazy(() => import("./components/UI/Testimonials"));
const Bonus = lazy(() => import("./components/UI/Bonus"));
const ShiftingCountdown = lazy(() => import("./components/UI/ShiftingCountdown"));
const Offers = lazy(() => import("./components/UI/Offers"));
const Pricing = lazy(() => import("./components/UI/Pricing"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Hero />
      <ShiftingCountdown />
      <Offers />
      <Bonus />
      <Pricing />
      <Testimonials />
    </Suspense>
  );
}

export default App;

