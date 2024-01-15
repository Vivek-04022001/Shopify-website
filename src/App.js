// import React, { lazy, Suspense } from "react";
// import "./App.css";


// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Terms from "./pages/Terms&Condition";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ReturnRefundPolicy from "./pages/Return&RefundPolicy";
// import Disclaimer from "./pages/Disclaimer";
// import Shipping from "./pages/Shipping";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route index element={<Home/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/termsandconditions" element={<Terms/>}/>
//       <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
//       <Route path="/return-refund-policy" element={<ReturnRefundPolicy/>}/>
//       <Route path="/disclaimer" element={<Disclaimer/>}/>
//       <Route path="/shipping" element={<Shipping/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;


import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Loader from "./components/Loader";

// Lazy load your page components
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms&Condition"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ReturnRefundPolicy = lazy(() => import("./pages/Return&RefundPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Shipping = lazy(() => import("./pages/Shipping"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
