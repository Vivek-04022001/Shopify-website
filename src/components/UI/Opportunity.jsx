import Img1 from "../../assets/Img-1.png";
import Img2 from "../../assets/Img-2.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
const Opportunity = () => {
  return (
    <section id="opportunity">
      <div className="Container">
        <div className="flex flex-col items-center  gap-5 md:gap-10">
          <h2 className="heading heading-md">
            <span className="highlight">Hurry Up!</span> Don't Miss The
            Opportunity
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-between ">
            <TiltCard Img={Img1} />
            <TiltCard Img={Img2} />
            <img
              src={Img1}
              alt=""
              className="md:hidden w-full shadow-xl rounded-md"
            />
            <img
              src={Img2}
              alt=""
              className="md:hidden w-full shadow-xl rounded-md"
            />
          </div>

          <button className="bg-secondary w-[55%] py-10  font-bold border-4 border-dashed text-white hover:bg-white text-3xl hover:text-secondary transition-all duration-300">
            <a href="#" className="">
              ✅ Get Everything in Just ₹295
            </a>
          </button>
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
      className="hidden md:flex w-full md:w-1/2  "
    >
      <img
        src={Img}
        style={{
          transform: "translateZ(30px)",
        }}
        className="max-w-[100%]"
      />
    </motion.div>
  );
};

export default Opportunity;
