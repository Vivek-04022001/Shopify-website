import React, { useRef, useEffect, useState } from "react";
import Dark from "../../assets/Dark Mode.png";

import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

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
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <img src={Dark} alt="" />
          </div>
          {/* --navigation-- */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span
            className={`mobile__menu hamburger ${hamburger ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
