// ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add a scroll event listener to determine the visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the scroll height based on your preference
      const scrollThreshold = 300;

      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 h-16 w-16 md:h-16 md:w-16 rounded-full border text-white flex items-center justify-center ${
        isVisible ? "opacity-1" : "opacity-0"
      }
      hover:bg-white hover:text-primary cursor-pointer transition-opacity duration-500
      `}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-3xl"/>
    </div>
  );
};

export default ScrollToTopButton;
