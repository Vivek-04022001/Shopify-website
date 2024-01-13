import React, { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";

// import Header from "./components/Header/Header";
// import Hero from "./components/UI/Hero";
// import ShiftingCountdown from "./components/UI/ShiftingCountdown";
// import Pricing from "./components/UI/Pricing";
// import Testimonials from "./components/UI/Testimonials";

const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/UI/Hero"));
const ShiftingCountdown = lazy(
  () => import("./components/UI/ShiftingCountdown"),
);
const Testimonials = lazy(() => import("./components/UI/Testimonials"));
const Pricing = lazy(() => import("./components/UI/Pricing"));
const Offers = lazy(() => import("./components/UI/Offers"));
const Bonus = lazy(() => import("./components/UI/Bonus"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Hero />
        <ShiftingCountdown />
        <Offers />
        <Bonus />
        <Pricing />
        <Testimonials />
      </Suspense>
    </>
  );
}

export default App;
