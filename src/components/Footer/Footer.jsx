import React from "react";
import logo from "../../assets/Dark Mode.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer
      id="footer"
      className="border-t border-blue-950 bg-gradient-to-b from-backgroundColor  from-50% to-secondary/70 "
    >
      <div className="md:text-md mx-auto grid max-w-4xl grid-cols-1  gap-12  px-6  py-10 text-center  text-slate-400  md:grid-cols-2 md:py-10">
        <aside className="flex flex-col items-center gap-3 ">
          <div className="w-[150px] ">
            <img src={logo} alt="logo" className="w-full" loading="lazy" />
          </div>
          <p className="w-[100%] md:w-[80%] ">
            PixelVista
            <br />
            Providing trending digital products since 2019
          </p>
        </aside>

        {/* second row */}
        <div className="flex justify-between gap-x-4">
          {/* company */}
          <nav className="hidden flex-col gap-y-1 text-left md:flex">
            <header className="footer-title">Pages</header>

            <a className="link-hover link" href="#home">
              Home
            </a>

            <a className="link-hover link" href="#offer">
              Offers
            </a>

            <a className="link-hover link" href="#bonus">
              Bonuses
            </a>

            <a className="link-hover link" href="#pricing">
              Pricing
            </a>

            <a className="link-hover link" href="#testimonial">
              Testimonials
            </a>
            <Link to='/faq'>
              <button className="link-hover link" href="#">
                F.A.Q
              </button>
            </Link>
          </nav>
          {/* legal */}
          <nav className="flex flex-col gap-y-2 w-full  text-center md:text-left  md:w-fit">
            <header className="footer-title ">Legal</header>
            <Link to='/faq' className="md:hidden">
              <button className="link-hover link" href="#">
                F.A.Q
              </button>
            </Link>
            <Link to="/termsandconditions">
              <a className="link-hover link">Terms & Conditions</a>
            </Link>
            <Link to="privacy-policy">
              <a className="link-hover link">Privacy Policy</a>
            </Link>
            <Link to="return-refund-policy">
              <a className="link-hover link">Return & Refund Policy</a>
            </Link>
            <Link to="/shipping">
              <a className="link-hover link">Shipping & Delivery Policy</a>
            </Link>
            <Link to="/disclaimer">
              <a className="link-hover link">Disclaimer</a>
            </Link>
            <Link to="/contact">
              <a className="link-hover link">Contact</a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="md:text-md mx-auto max-w-4xl px-6 pb-4 text-center text-sm text-slate-400/60">
        <p>Copyright © {year} - All right reserved by PixelVista</p>
      </div>
    </footer>
  );
};

export default Footer;
