import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/return-refund-policy"
            element={<ReturnRefundPolicy />}
          />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
