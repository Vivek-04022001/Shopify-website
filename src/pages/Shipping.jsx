import React from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div className="relative">
      <div className="absolute left-5 top-5 md:left-10 md:top-10 ">
        <Link to="/">
          <span className="border border-primary p-1 px-3">HOME</span>
        </Link>
      </div>
      <div className="Container-other ">
        <h1 className="other-heading">Contact Us</h1>
        <div className="border-t px-6">
          

          <p>
            Welcome to PixelVista! Our commitment to providing a seamless
            experience extends to the immediate delivery of our digital products
            upon purchase.
          </p>

          <p>
            Upon completing your payment, you gain instant access to your chosen
            product. No waiting for physical shipments or adhering to specific
            delivery schedules – it's all about getting what you need right when
            you need it.
          </p>

          <p>
            In the rare instance where immediate delivery is not feasible, we
            pledge to communicate promptly. Rest assured, we're dedicated to
            resolving any issues promptly.
          </p>

          <p>
            Please note that all our products are digitally delivered; there's
            no reliance on postal services. Your payment completion marks the
            moment your access begins.
          </p>

          <p>
            We recommend keeping your contact details, especially your email
            address, updated. This ensures uninterrupted access to your
            purchased products.
          </p>

          <p>
            Should you encounter any questions or challenges with the delivery
            process, don't hesitate to reach out. We're here to assist and
            ensure your PixelVista experience is nothing short of excellent.
          </p>

          <p>Thank you for choosing PixelVista</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
