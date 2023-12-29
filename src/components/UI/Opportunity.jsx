import React from "react";
import "../styles/opportunity.css";
import Img1 from "../../assets/profit&loss.png";
import Img2 from "../../assets/productFinder.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
const Opportunity = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex flex-col justify-center gap-5 md:gap-10">
          <h1 className="text-center text-black font-bold text-3xl md:text-6xl ">Hurry Up! Don't Miss The Opportunity.</h1>
          <div className="flex flex-col md:flex-row items-center gap-10 justify-between ">
            <TiltCard Img={Img1} />
            <TiltCard Img={Img2} />
            <img src={Img1} alt="" className="w-full shadow-xl rounded-md"/>
            <img src={Img2} alt="" className="w-full shadow-xl rounded-md"/>
          </div>
          <div className=" max-w-3xl border-2 border-heading-color bg-heading-color  text-white text-xl text-center md:text-3xl font-bold  md:py-5 md:px-12 py-4 rounded-lg md:rounded-xl hover:bg-white hover:text-heading-color cursor-pointer
          
          transition-all duration-200 hover:translate-x-[-10px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none
          ">
            <p className="tracking-wider ">
                <span className="mr-2">✅</span>
                Get Everything in Just $295
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ Img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="hidden md:block w-full md:w-1/2 rounded-xl "
    >
      {/* <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="shadow-xl  p-4 rounded-md"
      >
        
      </div> */}
      <img src={Img} 
        style={{
            transform: "translateZ(30px)",
          }}
          className="shadow-xl rounded-md"
        />
    </motion.div>
  );
};

export default Opportunity;
