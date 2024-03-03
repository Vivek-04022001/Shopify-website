import React, { useRef, useEffect, useState } from "react";
import Logo from "../../assets/Dark Mode.png";

import "./header.css";

const Header = () => {
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
  const menuItems = [
    "home",
    "offer",
    "bonus",
    "pricing",
    "testimonial",
    "footer",
  ];
  return (
    <header ref={headerRef} id="header">
      <div className="Container ">
        {/* desktop menu */}
        <div className="flex items-center justify-between ">
          <div className=" w-[110px] md:w-[150px] z-50">
            <img src={Logo} alt="logo" className="w-full " />
          </div>
          {/* --navigation-- */}
          <div ref={menuRef} className="navigation">
            <ul className="hidden md:flex items-center gap-10 text-white capitalize">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-primary duration-300 transition-all"
                >
                  <a href={`#${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
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
          } md:hidden bg-black container min-h-screen absolute top-0 left-0 flex flex-col  self-end    pt-32 pl-20 space-y-8  uppercase bg-dark z-10`}
        >
         {menuItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={toggleMenu}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
        
      </div>
    </header>
  );
};

export default Header;
