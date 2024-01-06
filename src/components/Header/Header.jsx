import React, { useRef, useEffect, useState } from "react";
import Logo from "../../assets/Dark Mode.png";

import "./header.css";

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const [hamburger, setHamburger] = useState(false);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => {
    setHamburger((prev) => !prev);
    menuRef.current.classList.toggle("menu__active");
    if (hamburger) {
      // Menu is closing, remove overflow-hidden class
      document.body.classList.remove("overflow-hidden");
    } else {
      // Menu is opening, add overflow-hidden class
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <header ref={headerRef} className="">
      <div className="Container py-8 ">
        <div className="flex items-center justify-between ">
          <div className="w-[150px] ">
            <img src={Logo} alt="logo" className="w-full" />
          </div>
          {/* --navigation-- */}
          <div ref={menuRef} onClick={toggleMenu} className="navigation">
            <ul className="hidden md:flex items-center gap-10 text-white">
              <li  className="hover:text-primary duration-300 transition-all">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-primary duration-300 transition-all">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary duration-300 transition-all">
                <a href="#">Service</a>
              </li>
            </ul>
          </div>

          <span
            className={`block md:hidden hamburger  ${hamburger ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </span>
        </div>

        {/* mobile menu */}
        <div
          id="menu"
          class={`${
            hamburger ? "flex" : "hidden"
          } md:hidden absolute top-0 bottom-0 left-0 flex flex-col  self-end  w-full min-h-screen  pt-32 pl-20 space-y-8  text-red-500 uppercase bg-dark`}
        >
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
