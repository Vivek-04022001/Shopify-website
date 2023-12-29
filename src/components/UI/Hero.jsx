import React from "react";
import "../styles/hero.css";

import heroDarkImg from "../images/hero-img.png";
import lightImg from "../../components/images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  return (
    <section className="'hero__section" id="home">
      <div className="container">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between  gap-4">
          <div className="w-full  md:w-1/2 text-left">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl">We 're Creating Perfect</h2>
              <h2 className="text-4xl md:text-5xl">Digital Products To</h2>
              <h2 className="text-4xl md:text-5xl highlight">
                Promote Your Brand
              </h2>
            </div>
            <p className="mt-10 text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quis optio reprehenderit. Officiis, adipisci iusto!
            </p>

            <div className="hidden md:flex w-full items-center gap-10  mt-10">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="w-full md:mt-0 mt-10 md:w-1/2 flex flex-col  overflow-hidden ">
            <iframe
              className="aspect-video"
              src="https://www.youtube.com/embed/fAi4N8i69kM?si=ccevi-Sg86XPxLZQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="flex md:hidden w-full items-center justify-between  mt-16 px-8">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
