import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToUpButton";
import SaleAnnouncement from "../components/SaleAnnouncement ";
import SalePricing from "../components/UI/SalePricing";

const Header = lazy(() => import("../components/Header/Header"));
const Hero = lazy(() => import("../components/UI/Hero"));
const ShiftingCountdown = lazy(() =>
  import("../components/UI/ShiftingCountdown")
);
const Testimonials = lazy(() => import("../components/UI/Testimonials"));
const Pricing = lazy(() => import("../components/UI/Pricing"));
const Offers = lazy(() => import("../components/UI/Offers"));
const Bonus = lazy(() => import("../components/UI/Bonus"));

const Home = () => {
  return (
    <div className="relative">
      <Suspense fallback={<Loader />}>
        {/* temporariy component */}
        {/* <SaleAnnouncement /> */}
        <Header />
        <Hero />
        <ShiftingCountdown />
        <Offers />
        <Bonus />
        {/* <Pricing /> */}
        {/* temporariy component */}

        <SalePricing />
        <Testimonials />
        <Footer />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
