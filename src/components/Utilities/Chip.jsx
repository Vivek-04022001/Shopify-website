import { motion } from "framer-motion";

const Chip = ({ text, selected, setSelected, type }) => {

    return (
      <button
        onClick={() => setSelected(text)}
        className={`${
          selected
            ? "text-white"
            : "text-slate-300 hover:bg-slate-700 hover:text-slate-200"
        }  relative min-w-[20%] rounded-md px-6 py-4 transition-colors`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
          layoutId={`pill-tab-product-${type}`}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700"
          ></motion.span>
        )}
      </button>
    );
  };

export default Chip