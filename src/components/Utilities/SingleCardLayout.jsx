import { motion } from "framer-motion";
import LazyImg from "../LazyImg";

const SingleCardLayout = ({
  data: { title, description, imageUrl, imageUrlsmall },
  animationProps,
}) => {
  return (
    <motion.div
      className=" flex flex-col justify-between gap-y-8 overflow-hidden rounded border-4 border-dashed bg-gradient-to-b from-secondary via-primary to-indigo-700 p-8 px-12 text-white shadow-lg"
      {...animationProps}
    >
      <LazyImg imageUrl={imageUrl} imageUrlsmall={imageUrlsmall} />

      <div className=" flex flex-1 flex-col justify-between text-white">
        <div className="mb-4  text-4xl font-bold ">{title}</div>
        <p className=" w-[85%] text-slate-200">{description}</p>
      </div>
    </motion.div>
  );
};

export default SingleCardLayout;
