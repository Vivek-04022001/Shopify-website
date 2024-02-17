import { motion } from "framer-motion";
import LazyImg from "../LazyImg";
import { Link, useNavigate } from "react-router-dom";

const SingleCardLayout = ({
  data: { title, description, imageUrl, imageUrlsmall },
  animationProps,
}) => {
  const isSpecialTitle =
    title === "Find Winning Product Tool" ||
    title === "After Sales Calculation Tool";
  // const navigate = useNavigate()
  // const handleNavigate = (title) =>{
  //   navigate(`/product_page/${title}`,{ replace: true })
  // }
  return (
    <motion.div
      className=" flex flex-col justify-between gap-y-8 overflow-hidden rounded border-4 border-dashed bg-gradient-to-b from-secondary via-primary to-indigo-700 p-8 px-12 text-white shadow-lg"
      {...animationProps}
    >
      <LazyImg imageUrl={imageUrl} imageUrlsmall={imageUrlsmall} />

      <div className=" flex flex-1 flex-col justify-between text-white">
        <div className="mb-4  text-4xl font-bold ">{title}</div>
        {isSpecialTitle && (
          <p className=" w-[85%] text-slate-200">{description}</p>
        )}

        {!isSpecialTitle && (
          <Link to={`/product_page/${title}`} target="_blank">
            <button className="bg-white inline-block w-1/2 text-primary py-2 font-bold border border-dashed hover:bg-transparent transition-colors duration-200 hover:text-white hover:rounded-xl text-lg">
              Read More
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default SingleCardLayout;
